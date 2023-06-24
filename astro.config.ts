import { defineConfig } from 'astro/config';

import solidJs from '@astrojs/solid-js';
import type { AstroIntegration } from 'astro';
import { macaronVitePlugin } from '@macaron-css/vite';

const macaronIntegration: AstroIntegration = {
  name: 'macaron-css-intergration',
  hooks: {
    'astro:config:setup': ({ updateConfig }) => {
      console.log('hi');
      updateConfig({
        vite: {
          plugins: [macaronVitePlugin()],
        },
      });
    },
    'astro:config:done': ({ config }) => {
      console.log(config.vite);
    },
    //    'astro:build:setup': ({ vite }) => {
    //      console.log(vite.plugins?.length);
    //      vite.plugins?.unshift(macaronVitePlugin());
    //      console.log(vite.plugins?.length);
    //    },
  },
};

export default defineConfig({
  integrations: [macaronIntegration, solidJs()],
  build: {
    inlineStylesheets: 'always',
  },
  experimental: {
    assets: true,
  },
});
