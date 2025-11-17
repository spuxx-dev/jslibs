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
      exclude: ['**/node_modules/**', '**/dist/**'],
      coverage: {
        enabled: true,
        provider: 'v8',
        include: ['src/**/*.ts'],
        exclude: ['src/main.ts', '**/index.ts', '*.module.ts'],
        reportsDirectory: 'reports/vitest/coverage',
        reporter: ['text', 'json'],
      },
    },
  }),
);
