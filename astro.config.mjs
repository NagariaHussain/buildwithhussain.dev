import { defineConfig } from "astro/config";
import tailwind from "@astrojs/tailwind";

// https://astro.build/config
export default defineConfig({
  site: "https://buildwithhussain.dev",
  integrations: [tailwind()],
  markdown: {
    shikiConfig: {
      theme: "poimandres",
      wrap: false
    }
  }
});