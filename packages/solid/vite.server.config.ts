// import { defineConfig, mergeConfig } from 'vite';
// import solidPlugin from 'vite-plugin-solid';
// import defaultConfig from './vite.config';
import { defineConfig } from 'vite';
import solidPlugin from 'vite-plugin-solid';
import dts from 'vite-plugin-dts';
import tsconfigPaths from 'vite-tsconfig-paths';
import { peerDependencies } from './package.json';

export default defineConfig({
  plugins: [
    solidPlugin({
      ssr: true,
      solid: {
        generate: 'ssr',
        hydratable: true,
      },
    }),
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
    emptyOutDir: false,
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
      output: [
        {
          // Server build
          dir: 'dist',
          entryFileNames: 'server.js',
        },
      ],
    },
  },
});

// export default defineConfig(
//   mergeConfig(defaultConfig, {
//     plugins: [
//       // Server build
//       solidPlugin({
//         ssr: true,
//         solid: {
//           generate: 'ssr',
//           hydratable: true,
//         },
//       }),
//     ],
//     build: {
//       emptyOutDir: false,
//       rollupOptions: {
//         output: [
//           {
//             // Server build
//             dir: 'dist',
//             entryFileNames: 'server.js',
//           },
//         ],
//       },
//     },
//   }),
// );
