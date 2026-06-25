// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  // GitHub Pages project site: served from /portfolio-website-2026/
  site: 'https://hwajongbaek-andrew.github.io',
  base: '/portfolio-website-2026',
  vite: {
    plugins: [tailwindcss()]
  }
});