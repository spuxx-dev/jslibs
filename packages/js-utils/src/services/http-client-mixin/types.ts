/* eslint-disable @typescript-eslint/no-explicit-any */

import { HttpError } from './http-error.class';

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

export type EndpointFunctionArgs = Record<string, any> | void;

/**
 * The set of parameters that are exposed when using an endpoint.
 */
export interface EndpointParams<TArgs extends EndpointFunctionArgs = void> {
  /**
   * The arguments to be passed to the endpoint function.
   */
  args: TArgs;
}

/**
 * A set of parameters available internally when the endpoint is invoked.
 */
export interface PrivateEndpointParams<TArgs extends EndpointFunctionArgs = void> {
  /**
   * The arguments to be passed to the endpoint function.
   */
  args: TArgs;
  /**
   * An `AbortSignal` that can be used to cancel the request.
   */
  signal: AbortSignal;
}

/**
 * An endpoint function that will be called when the endpoint is invoked.
 * @param params The `EndpointParams` of the invoked endpoint.
 * @returns A promise of the response from the server.
 */
export type EndpointFunction<TArgs extends EndpointFunctionArgs = void> = (
  params: PrivateEndpointParams<TArgs>,
) => Promise<any>;

/**
 * The definition of an endpoint to be used by the client.
 * @typeParam TFunction - The type of the endpoint function.
 * @typeParam TTransformedResult - The type of the transformed result.
 */
export interface EndpointDefinition<
  TArgs extends EndpointFunctionArgs = never,
  TFunction extends EndpointFunction<TArgs> = EndpointFunction<TArgs>,
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
 * The status of an HTTP request.
 */
export const HttpRequestStatus = {
  pending: 'pending',
  success: 'success',
  error: 'error',
  aborted: 'aborted',
} as const;
/**
 * The status of an HTTP request.
 */
export type HttpRequestStatus = (typeof HttpRequestStatus)[keyof typeof HttpRequestStatus];

export type TransformedReturnType<T extends EndpointDefinition> = T['transformer'] extends undefined
  ? Awaited<ReturnType<T['function']>>
  : Awaited<ReturnType<NonNullable<T['transformer']>>>;
