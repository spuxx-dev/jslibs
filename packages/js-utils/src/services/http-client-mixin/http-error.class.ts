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
