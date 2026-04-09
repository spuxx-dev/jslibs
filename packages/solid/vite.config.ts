import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'unplugin-dts/vite';
import { peerDependencies } from './package.json';

export default defineConfig(({ mode }) => {
  const isServer = mode === 'server';

  return {
    plugins: [
      solidPlugin(
        isServer ? { ssr: true, solid: { generate: 'ssr', hydratable: true } } : undefined,
      ),
      dts({ entryRoot: 'src', exclude: ['**/*.{test,spec}.{ts,tsx}'] }),
    ],
    resolve: {
      tsconfigPaths: true,
    },
    build: {
      emptyOutDir: !isServer,
      target: 'esnext',
      lib: {
        entry: {
          main: './src/main.ts',
        },
        name: '@spuxx/solid',
        formats: ['es'],
      },
      rolldownOptions: {
        external: [/^solid-js($|\/)/, ...Object.keys(peerDependencies)],
        ...(isServer && {
          output: [
            {
              dir: 'dist',
              entryFileNames: 'server.js',
            },
          ],
        }),
      },
    },
  };
});
