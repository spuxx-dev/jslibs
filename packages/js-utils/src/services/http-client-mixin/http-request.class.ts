import { HttpError } from './http-error.class';
import { EndpointDefinition, HttpRequestStatus, TransformedReturnType } from './types';

/**
 * An object containing information about an HTTP request that has been omitted via
 * `HttpClientMixin`. Can be used to access the promised response, transformed result
 * or to cancel the request.
 */
export interface HttpRequest<T extends EndpointDefinition = EndpointDefinition> {
  /**
   * The `EndpointDefinition` that was used to create the request.
   */
  get endpointDefinition(): T;
  /**
   * The promised raw or transformed result of the endpoint function. Can be awaited.
   */
  get promise(): Promise<TransformedReturnType<T>>;
  /**
   * The status of the request.
   */
  get status(): HttpRequestStatus;
  /**
   * Sets the status of the request.
   * @param status The status.
   */
  setStatus(status: HttpRequestStatus): void;
  /**
   * The error the request has thrown. `null` in case the request hasn't yet thrown an error
   * or has succeeded.
   */
  get error(): HttpError | null;
  /**
   * Sets the error of the request.
   * @param error The error.
   */
  setError(error: HttpError): void;
  /**
   * Returns the `AbortController`'s signal.
   */
  get abortSignal(): AbortSignal;
  /**
   * Aborts the request. Does nothing if the request has already resolved.
   */
  abort(): void;
  /**
   * The raw result of the endpoint function.
   */
  get result(): Awaited<ReturnType<T['function']>>;
  /**
   * Sets the raw result of the endpoint function.
   * @param result The new raw result to save.
   */
  setResult(result: Awaited<ReturnType<T['function']>>): void;
  /**
   * The transformed result of the endpoint function.
   */
  get transformedResult(): Awaited<ReturnType<T['transformer']>>;
  /**
   * Sets the transformed result of the endpoint function.
   * @param result The new transformed result to save.
   */
  setTransformedResult(result: Awaited<ReturnType<T['transformer']>>): void;
}

export function createHttpRequest<TEndpointDef extends EndpointDefinition>(
  endpointDef: TEndpointDef,
  promise: Promise<TransformedReturnType<TEndpointDef>>,
  abortController: AbortController,
): HttpRequest<TEndpointDef> {
  class MyHttpRequest implements HttpRequest<TEndpointDef> {
    private _endpointDefinition: TEndpointDef;
    private _promise: Promise<TransformedReturnType<TEndpointDef>>;
    private _status: HttpRequestStatus = 'pending';
    private _error: HttpError | null = null;
    private _abortController: AbortController;
    private _result: Awaited<ReturnType<TEndpointDef['function']>>;
    private _transformedResult: Awaited<ReturnType<TEndpointDef['transformer']>>;

    constructor(endpointDef: TEndpointDef, promise: Promise<TransformedReturnType<TEndpointDef>>) {
      this._endpointDefinition = endpointDef;
      this._promise = promise;
      this._abortController = abortController;
    }

    get endpointDefinition() {
      return this._endpointDefinition;
    }

    get promise() {
      return this._promise;
    }

    get status() {
      return this._status;
    }

    setStatus(status: HttpRequestStatus) {
      this._status = status;
    }

    get error() {
      return this._error;
    }

    setError(error: HttpError) {
      this._error = error;
    }

    get abortSignal() {
      return this._abortController.signal;
    }

    async abort() {
      this._abortController.abort();
      this.setStatus(HttpRequestStatus.aborted);
    }

    get result() {
      return this._result;
    }

    setResult(result: Awaited<ReturnType<TEndpointDef['function']>>) {
      this._result = result;
    }

    get transformedResult() {
      return this._transformedResult;
    }

    setTransformedResult(result: Awaited<ReturnType<TEndpointDef['transformer']>>) {
      this._transformedResult = result;
    }
  }

  return new MyHttpRequest(endpointDef, promise);
}
