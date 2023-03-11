import path from 'path';
import { fileURLToPath } from 'url';
import { defineConfig } from 'astro/config';

import tailwind from "@astrojs/tailwind";
import image from "@astrojs/image";

const __dirname = path.dirname(fileURLToPath(import.meta.url));

// https://astro.build/config
export default defineConfig({
  server: {
    port: 8000,
  },
  integrations: [
    tailwind(),
    image(),
  ],
  vite: {
    resolve: {
      alias: {
        '~': path.resolve(__dirname, './src'),
      },
    },
  },
});