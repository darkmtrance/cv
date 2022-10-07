import { defineConfig } from 'astro/config';
import image from "@astrojs/image";
import compress from "astro-compress";

import purgecss from "astro-purgecss";

// https://astro.build/config
export default defineConfig({
  integrations: [image({
    serviceEntryPoint: '@astrojs/image/sharp'
})]
});