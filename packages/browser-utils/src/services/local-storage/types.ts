/**
 * The options for configuring a `LocalStorage` service.
 * @typeParam TLocalStorage - The type of your local storage data.
 */
export interface LocalStorageOptions<TLocalStorage> {
  /**
   * The key the service should use when writing data to `window.localStorage`.
   */
  key: string;
  /**
   * The set if default values to fall back to when reading data from `window.localStorage`.
   */
  defaultValues: TLocalStorage;
}
