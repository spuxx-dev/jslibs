// @ts-check
import { defineConfig } from 'astro/config';
import solidJs from '@astrojs/solid-js';
import starlight from '@astrojs/starlight';

// https://astro.build/config
export default defineConfig({
  base: '/jslibs/',
  site: 'https://spuxx-dev.github.io',

  integrations: [
    solidJs(),
    starlight({
      title: '@spuxx/jslibs',
      favicon: '/favicon.png',
      social: [
        {
          label: 'GitHub',
          icon: 'github',
          href: 'https://github.com/spuxx-dev/jslibs',
        },
        {
          label: 'BlueSky',
          icon: 'blueSky',
          href: 'https://bsky.app/profile/spuxx.bsky.social',
        },
      ],
      customCss: ['./src/styles/global.css'],
      sidebar: [
        {
          label: 'js-utils',
          items: [
            { label: 'Introduction', slug: 'js-utils' },
            {
              label: 'Types',
              slug: 'js-utils/types',
            },
            {
              label: 'Services',
              items: [{ autogenerate: { directory: 'js-utils/services' } }],
            },
            {
              label: 'Utilities',
              items: [{ autogenerate: { directory: 'js-utils/utils' } }],
            },
          ],
        },
        {
          label: 'browser-utils',
          items: [
            {
              label: 'Introduction',
              slug: 'browser-utils',
            },
            {
              label: 'Styles and Themes',
              slug: 'browser-utils/styles-and-themes',
            },
            {
              label: 'Types',
              items: [{ autogenerate: { directory: 'browser-utils/types' } }],
            },
            {
              label: 'Services',
              items: [{ autogenerate: { directory: 'browser-utils/services' } }],
            },
          ],
        },
        {
          label: 'solid',
          items: [
            {
              label: 'Introduction',
              slug: 'solid',
            },
            {
              label: 'Components',
              items: [
                {
                  label: 'Control',
                  items: [{ autogenerate: { directory: 'solid/components/control' } }],
                },
                {
                  label: 'Layout',
                  items: [{ autogenerate: { directory: 'solid/components/layout' } }],
                },
                {
                  label: 'Typography',
                  items: [{ autogenerate: { directory: 'solid/components/typography' } }],
                },
              ],
            },
            {
              label: 'Layout',
              items: [{ autogenerate: { directory: 'solid/layout' } }],
            },
          ],
        },
      ],
    }),
  ],
});
