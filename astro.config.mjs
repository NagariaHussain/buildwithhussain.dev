import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';
import sitemap from "@astrojs/sitemap";

import expressiveCode from "astro-expressive-code";

// https://astro.build/config
export default defineConfig({
  site: "https://buildwithhussain.dev",
  integrations: [tailwind(), react(), sitemap(), expressiveCode()],
  markdown: {
    shikiConfig: {
      theme: "poimandres",
      wrap: false
    }
  }
});