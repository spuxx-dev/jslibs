import { defineWorkspace } from 'vitest/config';

export default defineWorkspace([
  './packages/nest-testing/vite.config.ts',
  './packages/js-utils/vite.config.ts',
  './packages/browser-utils/vite.config.ts',
  './packages/nest-utils/vite.config.ts',
  './packages/solid/vitest.workspace.ts',
  './apps/nest/vite.config.mts',
]);
