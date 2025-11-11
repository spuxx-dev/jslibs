import { mergeConfig, defineConfig } from 'vitest/config';
import viteConfig from './vite.config';

export default mergeConfig(
  viteConfig,
  defineConfig({
    test: {
      environment: 'node',
      silent: true,
      reporters: ['default', 'junit'],
      outputFile: 'reports/junit/junit.xml',
      coverage: {
        enabled: true,
        provider: 'v8',
        thresholds: { branches: 50, lines: 50 },
        include: ['src/**/*.ts'],
        exclude: ['src/main.ts', 'index.ts', 'types.ts'],
        reportsDirectory: 'reports/vitest/coverage',
        reporter: ['text', 'json'],
      },
    },
  }),
);
