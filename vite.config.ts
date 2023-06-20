import solid from 'solid-start/vite';
import { macaronVitePlugin } from '@macaron-css/vite';
import { defineConfig } from 'vite';

export default defineConfig({
  plugins: [macaronVitePlugin(), solid()],
  build: {
    target: 'esnext',
//    ssr: true,
  },
  server: {
    port: 3003,
  },
  experimental: {
    hmrPartialAccept: true,
  },
});
