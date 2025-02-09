import { defineConfig } from 'astro/config';
import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img"]
    }
  },
  routes: {
    '/blog/[...slug]': 'src/pages/blog/[...slug].astro',
  }
});