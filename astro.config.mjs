// @ts-check
import { defineConfig } from 'astro/config';
import sitemap from '@astrojs/sitemap';

// https://astro.build/config
export default defineConfig({
  site: 'https://liviamperfect.web.app',
  integrations: [sitemap({
    entryLimit: 50000 // Force single file
  })],
});