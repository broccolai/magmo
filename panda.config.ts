import { defineConfig } from '@pandacss/dev';

export default defineConfig({
  eject: false,
  preflight: false,
  //  minify: true,
  hash: true,
  include: ['./src/**/*.{js,jsx,ts,tsx}'],
  exclude: [],
  jsxFramework: 'solid',
  outdir: './src/@panda',

  theme: {
    tokens: {
      colors: {
        orange: { value: '#e64a19' },
        white: { value: '#f9f9f9' },
        smoke: { value: '#f5f5f5' },
        black: { value: '#1C1E20' },
        gray: { value: '#333333' },
        soft: { value: '#474747' },
        cyan: { value: '#06d6a0' },
        blue: { value: '#1976d2' },
        green: { value: '#00b358' },
        lime: { value: '#74e600' },
        purple: { value: '#7b1fa2' },
        red: { value: '#d6063d' },
        yellow: { value: '#ffea00' },
      },
    },
  },
});
