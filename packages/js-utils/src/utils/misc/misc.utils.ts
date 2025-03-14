/**
 * Returns a promise that resolves after the given amount of milliseconds.
 * @param ms The amount of milliseconds.
 * @returns A promise that resolves after the given amount of milliseconds.
 * @example
 * await sleep(1000);
 */
export async function sleep(ms: number): Promise<void> {
  return new Promise((resolve) => setTimeout(resolve, ms));
}

/**
 * Checks whether the given value is null, undefined or a string that contains only whitespace characters.
 * @param value The value to check.
 * @returns Whether the given value is null, undefined or a string that contains only whitespace characters.
 * @example
 * isEmptyOrWhitespace(''); // true
 * isEmptyOrWhitespace(' '); // true
 * isEmptyOrWhitespace(undefined); // true
 * isEmptyOrWhitespace(null); // true
 * isEmptyOrWhitespace('foo'); // false
 * isEmptyOrWhitespace(0); // false
 * isEmptyOrWhitespace({}); // false
 * isEmptyOrWhitespace([]); // false
 * isEmptyOrWhitespace(false); // false
 */
export function isEmptyOrWhitespace(value: unknown) {
  if (typeof value === 'string') {
    return value.trim() === '';
  } else if (value === undefined || value === null) {
    return true;
  } else {
    return false;
  }
}

/**
 * Returns true if the given array is null, undefined or empty.
 * @param array The array to check.
 * @returns Whether the given array is null, undefined or empty.
 * @example
 * isEmptyArray([]); // true
 * isEmptyArray(undefined); // true
 * isEmptyArray(null); // true
 * isEmptyArray([1, 2, 3]); // false
 */
export function isEmptyArray(array: Array<unknown> | undefined | null) {
  return !array || array.length <= 0;
}

type RecursiveObject = {
  [key: string]: string | RecursiveObject;
};

/**
 * Recursively merges properties of source objects into the target object.
 * If a property is an object, it will be merged rather than replaced.
 * If a property is an array, it will be replaced rather than merged.
 *
 * @param target - The target object to which properties will be merged.
 * @param sources - The source objects from which properties will be merged.
 * @returns The merged object.
 * @example
 * const obj1 = { a: 1, b: { c: 2 } };
 * const obj2 = { b: { d: 3 }, e: 4 };
 * const merged = deepMerge(obj1, obj2);
 * console.log(merged); // { a: 1, b: { c: 2, d: 3 }, e: 4 }
 */
export function deepMerge(...sources: Array<RecursiveObject | string>): RecursiveObject {
  const target: RecursiveObject = {};

  if (!sources.length) return target;

  for (const source of sources) {
    if (typeof source === 'object') {
      for (const k in source) {
        const key = k as keyof object;
        if (typeof source[key] === 'object' && !Array.isArray(source[key])) {
          if (!target[key]) target[key] = {};
          target[key] = deepMerge(target[key], source[key]);
        } else {
          target[key] = source[key];
        }
      }
    }
  }

  return target;
}

/**
 * Strips all null properties from the object. Does not affect nested objects or arrays.
 * Utilizes `delete`, resulting in the passed reference to be updated, so it is not necessary
 * to use the returned value.
 * @param obj The object.
 * @returns The updated object.
 * @example
 * ```ts
 * const obj = { a: 1, b: null, c: 3 };
 * stripNull(obj);
 * console.log(obj); // { a: 1, c: 3 }
 * ```
 */
export function stripNull<T extends object>(obj: T): T {
  for (const key in obj) {
    if (obj[key] === null) {
      delete obj[key];
    }
  }
  return obj;
}
/**
 * Strips all undefined properties from the object. Does not affect nested objects or arrays.
 * Utilizes `delete`, resulting in the passed reference to be updated, so it is not necessary
 * to use the returned value.
 * @param obj The object.
 * @returns The updated object.
 * @example
 * ```ts
 * const obj = { a: 1, b: undefined, c: 3 };
 * stripUndefined(obj);
 * console.log(obj); // { a: 1, c: 3 }
 * ```
 */
export function stripUndefined<T extends object>(obj: T): T {
  for (const key in obj) {
    if (obj[key] === undefined) {
      delete obj[key];
    }
  }
  return obj;
}
