// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://keremaltaylar.github.io',
  trailingSlash: 'always',
  redirects: {
    '/works/': '/music/',
    '/works/[...slug]': '/music/[...slug]',
    '/interactive/': '/instruments/',
  },
  integrations: [sitemap()],
});
