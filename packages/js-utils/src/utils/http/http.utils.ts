/**
 * Adds a trailing slash to the URL if it doesn't have one.
 * @param url - The URL to add a trailing slash to.
 * @returns The URL with a trailing slash.
 * @example
 * ```ts
 * addTrailingSlash('https://example.com'); // 'https://example.com/'
 * addTrailingSlash('https://example.com/'); // 'https://example.com/'
 * ```
 */
export function addTrailingSlash(url: string): string {
  if (url && !url.endsWith('/')) {
    return url.concat('/');
  }

  return url;
}
