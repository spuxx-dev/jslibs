/// <reference types="vitest/config" />
/// <reference types="@vitest/browser/matchers" />
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    solidPlugin(),
    dts({
      include: ['src/**/*'],
      tsconfigPath: './tsconfig.build.json',
      rollupTypes: true,
    }),
    tsconfigPaths({
      configNames: ['tsconfig.build.json'],
    }),
  ],
  build: {
    target: 'esnext',
    lib: {
      entry: {
        main: './src/main.ts',
      },
      name: '@spuxx/solid',
      formats: ['es'],
    },
    rollupOptions: {
      external: [/^solid-js($|\/)/, ...Object.keys(peerDependencies)],
    },
  },
  test: {
    watch: false,
    globals: true,
    reporters: ['default', 'junit'],
    outputFile: 'reports/junit/junit.xml',
    coverage: {
      enabled: true,
      all: true,
      provider: 'istanbul',
      include: ['src/**/*.{ts,tsx}'],
      exclude: ['src/main.ts', '**/index.ts', '**/*types.ts', '**/*.d.ts'],
      reportsDirectory: 'reports/vitest/coverage',
      reporter: ['text', 'json'],
    },
    browser: {
      enabled: false,
      provider: 'playwright',
      instances: [{ browser: 'firefox' }],
    },
  },
});
