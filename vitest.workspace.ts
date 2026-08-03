import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './packages/js-utils/vite.config.ts',
  './packages/browser-utils/vite.config.ts',
  './packages/solid/vitest.workspace.ts',
]);
