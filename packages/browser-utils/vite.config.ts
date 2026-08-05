import { defineConfig } from 'vite';
import { resolve } from 'path';
import dts from 'unplugin-dts/vite';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'src',
      exclude: ['**/*.{test,spec}.ts'],
    }),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  build: {
    cssCodeSplit: true,
    lib: {
      entry: {
        main: resolve(import.meta.dirname, 'src/main.ts'),
        styles: resolve(import.meta.dirname, 'src/styles.css'),
        themes: resolve(import.meta.dirname, 'src/themes.css'),
      },
      name: '@spuxx/browser-utils',
      formats: ['es'],
    },
  },
});
