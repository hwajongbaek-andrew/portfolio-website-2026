// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // User GitHub Pages site (served at the domain root, so no `base` is needed)
  site: 'https://hwajongbaek-andrew.github.io',
  vite: {
    plugins: [tailwindcss()]
  }
});