import { test, expect } from 'vitest';
import { page } from 'vitest/browser';
import { UserAgent } from '.';

test('properly recognizes a desktop viewport', async () => {
  await page.viewport(1600, 900);
  expect(UserAgent.isDesktop).toBe(true);
});

test('properly recognizes a mobile viewport', async () => {
  await page.viewport(400, 800);
  expect(UserAgent.isDesktop).toBe(false);
});

test('acknowledges a custom threshold', async () => {
  await page.viewport(1600, 900);
  UserAgent.setOptions({ desktopBreakpoint: 2000 });
  expect(UserAgent.isDesktop).toBe(false);
});
