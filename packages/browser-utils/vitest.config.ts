import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';
import { playwright } from '@vitest/browser-playwright';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      silent: true,
      reporters: ['default', 'junit'],
      outputFile: 'reports/junit/junit.xml',
      coverage: {
        provider: 'istanbul',
        thresholds: { branches: 70, lines: 90 },
        include: ['src/**/*.ts'],
        exclude: ['src/main.ts', '**/index.ts', '**/*types.ts', '**/*.d.ts'],
        reportsDirectory: 'reports/vitest/coverage',
        reporter: ['text', 'json'],
      },
      browser: {
        enabled: true,
        provider: playwright(),
        headless: true,
        instances: [{ browser: 'chromium' }, { browser: 'firefox' }],
      },
    },
  }),
);
