import type { StarlightUserConfigWithPlugins } from 'node_modules/@astrojs/starlight/utils/plugins';

export const sidebar: StarlightUserConfigWithPlugins['sidebar'] = [
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
        autogenerate: { directory: 'js-utils/services' },
      },
      {
        label: 'Utilities',
        autogenerate: { directory: 'js-utils/utils' },
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
        label: 'Services',
        autogenerate: { directory: 'browser-utils/services' },
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
        autogenerate: { directory: 'solid/components' },
      },
    ],
  },
];
