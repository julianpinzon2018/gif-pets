import { defineConfig } from "astro/config";
import vercel from "@astrojs/vercel/static";
import react from "@astrojs/react";
import partytown from "@astrojs/partytown";
import image from "@astrojs/image";

// https://astro.build/config
export default defineConfig({
  output: "static",
  adapter: vercel(),
  integrations: [
    react(),
    partytown(),
    image({
      serviceEntryPoint: "@astrojs/image/sharp",
    }),
  ],
});
