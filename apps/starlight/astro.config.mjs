// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import starlight from '@astrojs/starlight';
import { sidebar } from './src/assets/sidebar.ts';

// https://astro.build/config
export default defineConfig({
  base: '/jslibs/',
  site: 'https://spuxx-dev.github.io',

  integrations: [
    solidJs(),
    starlight({
      title: '@spuxx/jslibs',
      favicon: '/favicon.png',
      social: {
        github: 'https://github.com/spuxx-dev/jslibs',
        blueSky: 'https://bsky.app/profile/spuxx.bsky.social',
      },
      customCss: ['./src/styles/global.css'],
      sidebar,
    }),
  ],
});
