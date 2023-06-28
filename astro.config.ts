import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import pandacss from '@pandacss/dev/astro';

export default defineConfig({
  integrations: [pandacss(), solidJs()],
  build: {
    inlineStylesheets: 'always',
  },
  experimental: {
    assets: true,
  },
});
