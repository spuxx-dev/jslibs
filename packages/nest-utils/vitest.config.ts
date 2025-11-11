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
        thresholds: { branches: 90, lines: 90 },
        include: ['src/**/*.ts'],
        exclude: ['src/main.ts', 'src/**/index.ts', 'src/**/*types.ts', 'src/**/*.module.ts'],
        reportsDirectory: 'reports/vitest/coverage',
        reporter: ['text', 'json'],
      },
    },
  }),
);
