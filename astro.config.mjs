// astro.config.mjs
import { defineConfig } from 'astro/config';
import mdx from '@astrojs/mdx';
import netlify from '@astrojs/netlify';

export default defineConfig({
  site: 'https://ta1sph.info',
  integrations: [mdx()],
  adapter: netlify(),
  output: 'static',
});