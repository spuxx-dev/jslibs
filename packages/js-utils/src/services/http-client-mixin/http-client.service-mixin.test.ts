import { describe, expect, it, assert, vi } from 'vitest';
import axios, { type AxiosResponse } from 'axios';
import { HttpClientMixin } from './http-client.service-mixin';
import { HttpClientOptions } from './types';
import { defineEndpoint, sleep } from '../../main';
import { HttpError } from './http-error.class';

describe('HttpClientMixin', () => {
  describe('endpoint definition', () => {
    it('should assign all given endpoints', async () => {
      const endpoints = {
        getRandomJoke: defineEndpoint({
          function: async (): Promise<Response> => fetch('https://api.chucknorris.io/jokes/random'),
        }),
        getRandomFromCategory: defineEndpoint<{ category: string }>({
          function: async ({ args }): Promise<Response> =>
            fetch(`https://api.chucknorris.io/jokes/random?category=${args.category}`),
        }),
      };

      const options: HttpClientOptions<typeof endpoints> = {
        endpoints,
      };

      class HttpClient extends HttpClientMixin(options) {}
      expect(HttpClient.getRandomJoke).toBeTypeOf('function');
      expect(HttpClient.getRandomFromCategory).toBeTypeOf('function');
    });
  });

  describe('basic call handling', () => {
    it('should update status and result when the request is successful', async () => {
      const endpoints = {
        doSomething: defineEndpoint({
          function: async () => 'foo',
        }),
      };
      class HttpClient extends HttpClientMixin({ endpoints }) {}
      const request = HttpClient.doSomething();
      expect(request.promise).toBeDefined();
      expect(request.status).toBe('pending');
      expect(request.result).toBeUndefined();
      expect(request.transformedResult).toBeUndefined();
      const result = await request.promise;
      expect(result).toBe('foo');
      expect(request.status).toBe('success');
      expect(request.result).toBe('foo');
      expect(request.transformedResult).toBeUndefined();
      expect(request.error).toBeNull();
      expect(request.endpointDefinition).toEqual(endpoints.doSomething);
    });
  });

  it('should properly transform the result if a transformer is given', async () => {
    const endpoints = {
      doSomething: defineEndpoint({
        function: async () => 'foo',
        transformer: (result: string) => result.toUpperCase(),
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    const request = HttpClient.doSomething();
    expect(request.status).toBe('pending');
    const result = await request.promise;
    expect(result).toBe('FOO');
    expect(request.status).toBe('success');
    expect(request.result).toBe('foo');
    expect(request.transformedResult).toBe('FOO');
  });

  it('should pass down arguments', async () => {
    const endpoints = {
      findById: defineEndpoint<{ id: string; include: string[] }>({
        function: async ({ args }) => {
          expect(args.id).toBe('123');
          expect(args.include).toEqual(['foo', 'bar']);
        },
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    expect.assertions(2);
    const request = HttpClient.findById({ args: { id: '123', include: ['foo', 'bar'] } });
    await request.promise;
  });
});

describe('basic error handling', () => {
  it('should trigger the error handler', async () => {
    const endpoints = {
      throw: defineEndpoint({
        function: async (): Promise<Response> => {
          throw new Error('Oops!');
        },
        errorHandlers: [
          {
            function: (error) => {
              expect(error).toMatchObject({
                message: 'Oops!',
              });
            },
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    expect.assertions(1);
    const request = HttpClient.throw();
    await request.promise;
  });

  it("'continue' flag should work as expected", async () => {
    const firstHandler = vi.fn(() => {});
    const secondHandler = vi.fn(() => {});
    const thirdHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return fetch('https://api.chucknorris.io/jokes/500');
        },
        errorHandlers: [
          {
            function: firstHandler,
            continue: true,
          },
          {
            function: secondHandler,
          },
          {
            function: thirdHandler,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    await HttpClient.getJoke().promise;
    expect(firstHandler).toHaveBeenCalled();
    expect(secondHandler).toHaveBeenCalled();
    expect(thirdHandler).not.toHaveBeenCalled();
  });

  it('local error handlers should be called before global error handlers', async () => {
    let localHandlerCallTime: Date | undefined;
    let globalHandlerCallTime: Date | undefined;
    const localHandler = vi.fn(async () => {
      localHandlerCallTime = new Date();
      await sleep(5);
    });
    const globalHandler = vi.fn(async () => {
      globalHandlerCallTime = new Date();
      await sleep(5);
    });
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return fetch('https://api.chucknorris.io/jokes/500');
        },
        errorHandlers: [
          {
            function: localHandler,
            continue: true,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({
      endpoints,
      globalErrorHandlers: [
        {
          function: globalHandler,
          continue: true,
        },
      ],
    }) {}
    await HttpClient.getJoke().promise;
    expect(localHandler).toHaveBeenCalled();
    expect(globalHandler).toHaveBeenCalled();
    expect(localHandlerCallTime).toBeDefined();
    expect(globalHandlerCallTime).toBeDefined();
    expect(localHandlerCallTime!.getTime()).toBeLessThan(globalHandlerCallTime!.getTime());
  });

  it('should throw an error if transformation fails', async () => {
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return fetch('https://api.chucknorris.io/jokes/200');
        },
        transformer: async () => {
          throw new Error('Oops!');
        },
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    const request = HttpClient.getJoke();
    try {
      await request.promise;
      assert.fail('Expected an error to be thrown');
    } catch (error) {
      expect(error).toMatchObject({
        message: 'Oops!',
      });
    }
  });
});

describe('fetch support', () => {
  it('should successfully perform a get request (fetch)', async () => {
    const errorHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return await fetch('https://api.chucknorris.io/jokes/200');
        },
        errorHandlers: [
          {
            function: errorHandler,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    const joke = await (await HttpClient.getJoke().promise).json();
    expect(errorHandler).not.toHaveBeenCalled();
    expect(joke).toEqual({
      id: '200',
      value: 'Chuck Norris can divide by zero.',
    });
  });

  it('should transform the response (fetch)', async () => {
    const errorHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return fetch('https://api.chucknorris.io/jokes/200');
        },
        transformer: async (response: Response): Promise<string> => {
          return (await response.json()).value;
        },
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    const joke = await HttpClient.getJoke().promise;
    expect(errorHandler).not.toHaveBeenCalled();
    expect(joke).toBe('Chuck Norris can divide by zero.');
  });

  it('should trigger the error handler (fetch)', async () => {
    const errorHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return fetch('https://api.chucknorris.io/jokes/500');
        },
        errorHandlers: [
          {
            function: errorHandler,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    await HttpClient.getJoke().promise;
    expect(errorHandler).toHaveBeenCalled();
    const [error] = errorHandler.mock.lastCall as unknown as [HttpError];
    expect(error).toBeInstanceOf(HttpError);
    expect(error).toMatchObject({
      name: 'FetchError',
      status: 500,
      message: 'Internal Server Error',
    });
  });

  it('should include the error payload (fetch)', async () => {
    const errorHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return fetch('https://api.chucknorris.io/jokes/400');
        },
        errorHandlers: [
          {
            function: errorHandler,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    await HttpClient.getJoke().promise;
    expect(errorHandler).toHaveBeenCalled();
    const [error] = errorHandler.mock.lastCall as unknown as [HttpError];
    expect(error).toEqual(
      new HttpError({
        name: 'FetchError',
        status: 400,
        message: 'Bad Request',
        body: {
          statusCode: 400,
          message: ['400 is not a valid id'],
        },
      }),
    );
  });

  it('should only trigger the error handler that matches the status filter (fetch)', async () => {
    const handler401 = vi.fn(() => {});
    const handler403 = vi.fn(() => {});
    const handlerAll = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return fetch('https://api.chucknorris.io/jokes/403');
        },
        errorHandlers: [
          {
            function: handler401,
            statusFilter: (status) => status === 401,
          },
          {
            function: handler403,
            statusFilter: (status) => status === 403,
          },
          {
            function: handlerAll,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    await HttpClient.getJoke().promise;
    expect(handler401).not.toHaveBeenCalled();
    expect(handler403).toHaveBeenCalled();
    expect(handlerAll).not.toHaveBeenCalled();
  });

  it('should abort the request (fetch)', async () => {
    const endpoints = {
      getJoke: defineEndpoint({
        function: async ({ signal }): Promise<Response> => {
          return fetch('https://api.chucknorris.io/jokes/500', { signal });
        },
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    const request = HttpClient.getJoke();
    request.abort();
    await request.promise;
    expect(request.status).toBe('aborted');
  });
});

describe('axios support', () => {
  it('should successfully perform a get request (axios)', async () => {
    const errorHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<AxiosResponse> => {
          return axios.get('https://api.chucknorris.io/jokes/200');
        },
        errorHandlers: [
          {
            function: errorHandler,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    const response = await HttpClient.getJoke().promise;
    const joke = response.data;
    expect(errorHandler).not.toHaveBeenCalled();
    expect(joke).toEqual({
      id: '200',
      value: 'Chuck Norris can divide by zero.',
    });
  });

  it('should transform the response (axios)', async () => {
    const errorHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<AxiosResponse> => {
          return axios.get('https://api.chucknorris.io/jokes/200');
        },
        transformer: (response: AxiosResponse): string => {
          return response.data.value;
        },
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    const joke = await HttpClient.getJoke().promise;
    expect(errorHandler).not.toHaveBeenCalled();
    expect(joke).toBe('Chuck Norris can divide by zero.');
  });

  it('should trigger the error handler (axios)', async () => {
    const errorHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<AxiosResponse> => {
          return axios.get('https://api.chucknorris.io/jokes/500');
        },
        errorHandlers: [
          {
            function: errorHandler,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    await HttpClient.getJoke().promise;
    expect(errorHandler).toHaveBeenCalled();
    const [error] = errorHandler.mock.lastCall as unknown as [HttpError];
    expect(error).toBeInstanceOf(HttpError);
    expect(error).toMatchObject({
      name: 'AxiosError',
      status: 500,
      message: 'Internal Server Error',
    });
  });

  it('should include the error payload (axios)', async () => {
    const errorHandler = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<AxiosResponse> => {
          return axios.get('https://api.chucknorris.io/jokes/400');
        },
        errorHandlers: [
          {
            function: errorHandler,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    await HttpClient.getJoke().promise;
    expect(errorHandler).toHaveBeenCalled();
    const [error] = errorHandler.mock.lastCall as unknown as [HttpError];
    expect(error).toBeInstanceOf(HttpError);
    expect(error).toMatchObject({
      name: 'AxiosError',
      status: 400,
      message: 'Bad Request',
      body: {
        statusCode: 400,
        message: ['400 is not a valid id'],
      },
    });
  });

  it('should only trigger the error handler that matches the status filter (axios)', async () => {
    const handler401 = vi.fn(() => {});
    const handler403 = vi.fn(() => {});
    const handlerAll = vi.fn(() => {});
    const endpoints = {
      getJoke: defineEndpoint({
        function: async (): Promise<Response> => {
          return axios.get('https://api.chucknorris.io/jokes/403');
        },
        errorHandlers: [
          {
            function: handler401,
            statusFilter: (status) => status === 401,
          },
          {
            function: handler403,
            statusFilter: (status) => status === 403,
          },
          {
            function: handlerAll,
          },
        ],
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    await HttpClient.getJoke().promise;
    expect(handler401).not.toHaveBeenCalled();
    expect(handler403).toHaveBeenCalled();
    expect(handlerAll).not.toHaveBeenCalled();
  });

  it('should abort the request (axios)', async () => {
    const endpoints = {
      getJoke: defineEndpoint({
        function: async ({ signal }): Promise<Response> => {
          return axios.get('https://api.chucknorris.io/jokes/500', { signal });
        },
      }),
    };
    class HttpClient extends HttpClientMixin({ endpoints }) {}
    const request = HttpClient.getJoke();
    request.abort();
    await request.promise;
    expect(request.status).toBe('aborted');
  });
});
