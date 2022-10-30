import { defineConfig } from 'astro/config';
import compress from "astro-compress";
import purgecss from "astro-purgecss";

import react from "@astrojs/react";

// https://astro.build/config
export default defineConfig({
  integrations: [react(),purgecss()],
  vite: {
    ssr: {
      external: ["@11ty/eleventy-img"]
    }
  }
});