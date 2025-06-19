/* eslint-disable @typescript-eslint/no-explicit-any */
import { type AxiosError } from 'axios';
import { ServiceMixin } from '../mixin';
import {
  EndpointParams,
  HttpRequestStatus,
  type EndpointDefinition,
  type Endpoints,
  type HttpClientOptions,
} from './types';
import { createHttpRequest, HttpRequest } from './http-request.class';
import { HttpError } from './http-error.class';

type HttpClient<T extends Endpoints> = {
  [K in keyof T]: T[K] extends EndpointDefinition<infer TArgs, any, any>
    ? TArgs extends void
      ? () => HttpRequest<T[K]>
      : (params: EndpointParams<TArgs>) => HttpRequest<T[K]>
    : never;
} & {
  new (...args: any[]): object;
};

/**
 * A mixin that adds HTTP client functionality to a class. Can be used to create a strongly typed
 * HTTP client.
 * @param options - The options for the HTTP client.
 * @typeParam TEndpoints - The set of {@link Endpoints} to register with the HTTP client.
 * @example
 * import { HttpClientMixin, defineEndpoint } from '@spuxx/js-utils';
 *
 * // Define your endpoints
 * const endpoints = {
 *   getRandomJoke: defineEndpoint({
 *     function: async () => {
 *       const response = await fetch('https://api.chucknorris.io/jokes/random');
 *     },
 *     transformer: async (response: Response}): string => {
 *       const json = await response.json();
 *       return json.value;
 *     },
 *   }),
 * }
 *
 * // Create your client
 * class HttpClient extends HttpClientMixin({ endpoints }) {}
 *
 * // Use your client
 * const joke = await HttpClient.getRandomJoke();
 * console.log(joke); // Chuck Norris can divide by zero.
 */
export function HttpClientMixin<TEndpoints extends Endpoints>(
  options: HttpClientOptions<TEndpoints>,
): HttpClient<TEndpoints> {
  class Client extends ServiceMixin<Client>() {
    private options = options;

    /**
     * Invokes an endpoint with the provided arguments. Handles everything from fetching the response
     * to handling errors and transforming the response.
     * @param endpointDef - The definition of the endpoint to invoke.
     * @param args - The arguments to pass to the endpoint function.
     * @returns A promise that resolves to the result of the endpoint function and its transformer.
     */
    static invokeEndpoint(
      endpointDef: EndpointDefinition,
      params: EndpointParams,
    ): HttpRequest<typeof endpointDef> {
      const abortController = new AbortController();

      const { args } = { ...params };

      // Execute the endpoint function
      const promise = endpointDef
        .function({ signal: abortController.signal, args: args as never })
        .then(async (response) => {
          // Process the response
          return await Client.handleResponse(request, response);
        })
        .catch(async (error: Error) => {
          // Process the error
          await Client.handleError(request, error);
        });
      const request = createHttpRequest(endpointDef, promise, abortController);
      return request;
    }

    private static async handleResponse(request: HttpRequest, response: Response): Promise<any> {
      if (
        response?.constructor.name === 'HttpResponse' ||
        response?.constructor.name === 'Response'
      ) {
        // In case of fetch, we need to do further processing
        response = await Client.handleFetchResponse(response);
      }
      request.setResult(response);

      // Transform result if necessary
      if (typeof request.endpointDefinition.transformer === 'function') {
        const transformedResponse = request.endpointDefinition.transformer(response);
        request.setTransformedResult(transformedResponse);
        request.setStatus(HttpRequestStatus.success);
        return transformedResponse;
      } else {
        request.setStatus(HttpRequestStatus.success);
        return response;
      }
    }

    private static async handleFetchResponse(response: Response): Promise<Response> {
      if (!response.ok) {
        let body: object | string = '';
        try {
          body = await response.json();
        } catch (error) {
          body = await response.text();
        }
        throw new HttpError({
          name: 'FetchError',
          status: response.status,
          message: response.statusText,
          body,
        });
      }
      return response;
    }

    private static async handleError(request: HttpRequest, error: Error): Promise<void> {
      // Check whether request was aborted
      if (error.name === 'AbortError') {
        request.setStatus(HttpRequestStatus.aborted);
        return;
      }

      request.setStatus(HttpRequestStatus.error);

      // Determine error details
      const httpError = Client.determineErrorDetails(error);
      request.setError(httpError);

      // Combine endpoint-specific and global error handlers
      const endpointErrorHandlers = request.endpointDefinition.errorHandlers || [];
      const allErrorHandlers = [
        ...endpointErrorHandlers,
        ...(Client.instance.options.globalErrorHandlers ?? []),
      ];

      // Execute all error handlers sequentially
      let errorHasBeenHandled = false;
      const { status } = httpError;
      for (const handler of allErrorHandlers) {
        // Check status filter
        if (status && handler.statusFilter && !handler.statusFilter(status)) {
          continue;
        }
        await handler.function(httpError);
        errorHasBeenHandled = true;
        if (handler.continue) continue;
        else break;
      }

      if (!errorHasBeenHandled) {
        throw error;
      }
    }

    private static determineErrorDetails(error: unknown): HttpError {
      let httpError: HttpError;
      if (error instanceof HttpError) {
        httpError = error;
      } else if ((error as AxiosError).name === 'AxiosError') {
        const axiosError = error as AxiosError<object>;
        httpError = new HttpError({
          name: 'AxiosError',
          status: axiosError.response?.status ?? axiosError.status,
          message: axiosError.response?.statusText ?? axiosError.message,
          body: axiosError.response?.data ?? undefined,
        });
      } else {
        httpError = new HttpError({
          name: 'UnknownError',
          message: (error as Error).message,
        });
      }
      return httpError;
    }
  }

  const { endpoints } = options;

  // Iterate through each endpoint and create a corresponding method on the Client
  Object.entries(endpoints).forEach(([key, endpointDef]) => {
    (Client as any)[key] = function (
      this: typeof Client,
      params: EndpointParams<Parameters<(typeof endpointDef)['function']>[0]['args']>,
    ): HttpRequest<typeof endpointDef> {
      return Client.invokeEndpoint(endpointDef, params);
    };
  });

  // Cast the Client class to the expected HttpClient type
  return Client as unknown as HttpClient<TEndpoints>;
}
