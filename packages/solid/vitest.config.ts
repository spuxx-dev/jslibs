import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';
import { playwright } from '@vitest/browser-playwright';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      watch: false,
      globals: true,
      reporters: ['default', 'junit'],
      outputFile: 'reports/junit/junit.xml',
      coverage: {
        enabled: true,
        provider: 'istanbul',
        thresholds: { lines: 95 },
        include: ['src/**/*.{ts,tsx}'],
        exclude: ['src/main.ts', '**/index.ts', '**/*types.ts', '**/*.d.ts'],
        reportsDirectory: 'reports/vitest/coverage',
        reporter: ['text', 'json'],
      },
      browser: {
        enabled: true,
        provider: playwright(),
        instances: [{ browser: 'chromium' }, { browser: 'firefox' }],
      },
    },
  }),
);
