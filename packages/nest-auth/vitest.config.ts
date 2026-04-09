import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'node',
      silent: true,
      setupFiles: './tests/vitest.setup.ts',
      reporters: ['default', 'junit'],
      outputFile: 'reports/junit/junit.xml',
      coverage: {
        enabled: true,
        provider: 'v8',
        thresholds: { branches: 95, lines: 95 },
        include: ['**/*.ts'],
        exclude: ['*.module.ts', 'main.ts', 'index.ts'],
        reportsDirectory: 'reports/vitest/coverage',
        reporter: ['text', 'json'],
      },
    },
  }),
);
