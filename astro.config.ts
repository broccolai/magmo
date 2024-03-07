import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import pandacss from '@pandacss/astro';
import vercel from '@astrojs/vercel/serverless';

export default defineConfig({
  integrations: [pandacss(), solidJs()],
  build: {
    inlineStylesheets: 'always',
  },
  output: 'server',
  adapter: vercel(),
});
