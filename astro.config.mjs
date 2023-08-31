import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";
import react from '@astrojs/react';

// https://astro.build/config
export default defineConfig({
  site: "https://buildwithhussain.dev",
  integrations: [tailwind(), react()],
  markdown: {
    shikiConfig: {
      theme: "poimandres",
      wrap: false
    }
  }
});