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
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
      },
      name: '@spuxx/js-utils',
      formats: ['es'],
    },
  },
});
