import solid from 'solid-start/vite';
import staticAdapter from 'solid-start-static';
import { macaronVitePlugin } from '@macaron-css/vite';
import { defineConfig } from 'vite';
import { viteSingleFile } from "vite-plugin-singlefile"

export default defineConfig({
  plugins: [
    macaronVitePlugin(),
    viteSingleFile(),
    solid({ adapter: staticAdapter() }),
  ],
  build: {
    target: 'esnext',
  },
  server: {
    port: 3003,
  },
});
