/* eslint-disable @typescript-eslint/no-explicit-any */

/**
 * Defines how the client should handle errors.
 */
export type ErrorHandler = {
  /**
   * The function to be called when an error occurs.
   * @param error The error.
   * @returns A promise that resolves when the error has been handled.
   */
  function: (error: HttpError | unknown) => void | Promise<void>;
  /**
   * The status code of the response that will trigger this error handler. If left empty,
   * the error handler will be called for all errors.
   * @param status The status code.
   * @returns Whether this status code should
   */
  statusFilter?: (status: number) => boolean;
  /**
   * Whether the client should continue to call subsequent error handlers after this one.
   * @default false
   */
  continue?: boolean;
};

/**
 * An endpoint function that will be called when the endpoint is invoked.
 * @param args The arguments to be passed to the endpoint function.
 * @returns A promise of the response from the server.
 */
export type EndpointFunction = (...args: any[]) => Promise<any>;

/**
 * The definition of an endpoint to be used by the client.
 * @typeParam TFunction - The type of the endpoint function.
 * @typeParam TTransformedResult - The type of the transformed result.
 */
export interface EndpointDefinition<
  TFunction extends EndpointFunction = EndpointFunction,
  TTransformedResult = any,
> {
  /**
   * The function that will be called when the endpoint is invoked.
   */
  function: TFunction;
  /**
   * A function that will be called to transform the response from the server.
   * The transformer will be called implicitly after the original promise has
   * resolved.
   * @param response The responsese from the server.
   * @returns The transformed result.
   */
  transformer?: (response: Awaited<ReturnType<TFunction>>) => TTransformedResult;
  /**
   * The set of error handlers for the endpoint. These local error handlers will be called
   * before the global error handlers.
   */
  errorHandlers?: ErrorHandler[];
}
/**
 * The set of endpoints to be used by the client.
 */
export type Endpoints = Record<string, EndpointDefinition>;

/**
 * The options to hand over to the client.
 * @typeParam TEndpoints - The set of registered {@link Endpoints}.
 */
export interface HttpClientOptions<TEndpoints extends Endpoints> {
  /**
   * The set of {@link Endpoints} to be used by the client.
   */
  endpoints: TEndpoints;
  /**
   * A set of global {@link ErrorHandler}s. These will be called for every error that occurs,
   * regardless of the endpoint. These global error handlers will be called after any
   * local error handlers.
   */
  globalErrorHandlers?: ErrorHandler[];
}

/**
 * Represents an error that occurred during an HTTP request triggered by the client.
 */
export class HttpError extends Error {
  /**
   * The status code of the response that caused the error.
   */
  status?: number;
  /**
   * The response body that came with the error.
   */
  body?: object | string;

  constructor(init: HttpError) {
    super();
    Object.assign(this, init);
  }
}
