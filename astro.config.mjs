import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  site: 'https://matomaylla.com',
  integrations: [
    react()
  ],
  i18n: {
    defaultLocale: 'es',
    locales: ['es', 'en'],
    routing: {
      prefixDefaultLocale: false
    }
  },
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img"]
    }
  }
});