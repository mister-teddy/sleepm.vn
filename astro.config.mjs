import { defineConfig } from "astro/config";
import sitemap from "@astrojs/sitemap";

const site = process.env.SITE || "https://sleepm.vn";

export default defineConfig({
  site,
  output: "static",
  trailingSlash: "always",
  devToolbar: {
    enabled: false,
  },
  integrations: [sitemap()],
});
