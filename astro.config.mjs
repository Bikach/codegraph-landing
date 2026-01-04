// @ts-check
import { defineConfig } from 'astro/config';

import tailwindcss from '@tailwindcss/vite';

// https://astro.build/config
export default defineConfig({
  vite: {
    plugins: [tailwindcss()],
    build: {
      rollupOptions: {
        onwarn(warning, warn) {
          // Suppress Astro internal unused import warnings
          if (warning.code === 'UNUSED_EXTERNAL_IMPORT' &&
              warning.exporter?.includes('@astrojs/internal-helpers')) {
            return;
          }
          warn(warning);
        }
      }
    }
  }
});