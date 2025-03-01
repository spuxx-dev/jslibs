import { Logger, ServiceMixin } from '@spuxx/js-utils';
import { LocalStorageOptions } from './types';

/**
 * A mixin that provides a standardized and type-safe abstraction of the browser's
 * `localStorage` API.
 * @see {@link https://developer.mozilla.org/en-US/docs/Web/API/Window/localStorage}
 * @param options - The {@link LocalStorageOptions} for configuring the service.
 * @typeParam TLocalStorage - The type of your local storage data.
 * @returns Your `LocalStorage` service class.
 * @example
 * export interface ILocalStorage {
 *   foo: string;
 * }
 * export class LocalStorage extends LocalStorageMixin<ILocalStorage>({
 *   key: 'my-application',
 *   defaultValues: { foo: 'bar' },
 * }) {}
 * // Write to local storage
 * LocalStorage.set('foo', 'baz');
 * // Read from local storage
 * const foo = LocalStorage.get('foo');
 */
export function LocalStorageMixin<TLocalStorage extends object>(
  options: LocalStorageOptions<TLocalStorage>,
) {
  return class LocalStorage extends ServiceMixin<LocalStorage>() {
    _defaultValues: TLocalStorage = { ...options.defaultValues };
    _data: TLocalStorage = LocalStorage.readFromLocalStorage();

    /**
     * Reads the data from `localStorage` without caching the data and returns it.
     * This function is mostly for internal use. Consumers will likely want to use
     * `load()` instead.
     * @returns The The data from `localStorage`.
     */
    static readFromLocalStorage(): TLocalStorage {
      try {
        const raw = localStorage.getItem(options.key);
        const data: TLocalStorage = JSON.parse(raw ?? '{}');
        return data;
      } catch (error) {
        Logger.warn(
          'Failed to load data from local storage. Default values will be used.',
          this.constructor.name,
        );
        return {} as TLocalStorage;
      }
    }

    /**
     * (Re-)Loads the data from `localStorage` and caches it.
     * @returns The data from `localStorage`.
     */
    static load(): TLocalStorage {
      this.instance._data = this.readFromLocalStorage();
      return this.instance._data;
    }

    /**
     * Saves the data to `localStorage`.
     * @returns After the data has been saved.
     */
    static save(): void {
      localStorage.setItem(
        options.key,
        JSON.stringify({ ...this.instance._defaultValues, ...this.instance._data }),
      );
    }

    /**
     * Gets a value from `localStorage`.
     * @param key - The key of the value to get.
     * @typeParam TKey - The key of the value to get.
     * @returns The value for the given key.
     */
    static get<TKey extends keyof TLocalStorage>(key: TKey): TLocalStorage[TKey] {
      let value = this.instance._data[key];
      if (value === undefined) value = this.instance._defaultValues[key];
      return value;
    }

    /**
     * Sets a value in `localStorage`.
     * @param key - The key of the value to set.
     * @typeParam TKey - The key of the value to set.
     * @returns After the value has been set.
     */
    static set<TKey extends keyof TLocalStorage>(key: TKey, value: TLocalStorage[TKey]): void {
      this.instance._data[key] = value;
      this.save();
    }
  };
}
