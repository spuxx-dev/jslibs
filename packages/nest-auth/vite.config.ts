import { defineConfig, withFilter } from 'vite';
import { resolve } from 'path';
import { peerDependencies } from './package.json';
import dts from 'unplugin-dts/vite';
import swc from '@rollup/plugin-swc';

export default defineConfig({
  plugins: [
    dts({
      entryRoot: 'src',
      exclude: ['**/*.{test,spec}.ts'],
    }),
    // Rolldown's Oxc transformer does not yet support legacy decorator lowering,
    // which is required by NestJS. SWC handles that transform instead.
    // See: https://vite.dev/guide/migration#javascript-transforms-by-oxc
    withFilter(
      swc({
        swc: {
          jsc: {
            target: 'esnext',
            parser: {
              syntax: 'typescript',
              decorators: true,
            },
            transform: {
              legacyDecorator: true,
              decoratorMetadata: true,
            },
            keepClassNames: true,
          },
        },
      }),
      // Only run SWC on files that actually contain decorators
      { transform: { code: '@' } },
    ),
  ],
  resolve: {
    tsconfigPaths: true,
  },
  ssr: {
    target: 'node',
  },
  build: {
    ssr: true,
    minify: false,
    lib: {
      entry: {
        main: resolve(__dirname, 'src/main.ts'),
      },
      name: '@spuxx/nest-auth',
      formats: ['es'],
    },
    rolldownOptions: {
      external: [...Object.keys(peerDependencies)],
    },
  },
});
