import { defineConfig } from 'vitest/config';
import { resolve } from 'path';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';

export default defineConfig({
  plugins: [
    dts({
      include: ['src/**/*'],
      exclude: ['*.{test,spec}.*'],
      tsconfigPath: './tsconfig.json',
      rollupTypes: true,
    }),
    tsconfigPaths(),
  ],
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
        styles: resolve(__dirname, 'src/styles.css'),
        themes: resolve(__dirname, 'src/themes.css'),
      },
      name: '@spuxx/browser-utils',
      formats: ['es'],
    },
  },
});
