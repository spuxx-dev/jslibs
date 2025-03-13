import { describe, expect, it } from 'vitest';
import { addTrailingSlash } from './http.utils';

describe('addTrailingSlash', () => {
  it("should add a trailing slash to a URL that doesn't have one", () => {
    const url = 'https://example.com';
    expect(addTrailingSlash(url)).toBe('https://example.com/');
  });

  it('should not add a trailing slash to a URL that already has one', () => {
    const url = 'https://example.com/';
    expect(addTrailingSlash(url)).toBe('https://example.com/');
  });
});
