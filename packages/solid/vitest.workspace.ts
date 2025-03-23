/// <reference types="@vitest/browser/matchers" />
import { defineWorkspace } from 'vitest/config';

// TODO: For some reason tests are not properly reliable executed as browser mode if we don't
// provide a separate workspace file. Can this be fixed?
export default defineWorkspace([
  {
    extends: 'vite.config.ts',
    test: {
      browser: {
        enabled: true,
        provider: 'playwright',
        viewport: { width: 375, height: 667 },
        // https://vitest.dev/guide/browser/playwright
        instances: [
          { browser: 'chromium' },
          // { browser: "firefox" },
          // { browser: "webkit" },
        ],
      },
    },
  },
]);
