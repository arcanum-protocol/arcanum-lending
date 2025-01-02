// @ts-check
import { defineConfig } from "astro/config";
import compress from "astro-compress";
import tailwind from "@astrojs/tailwind";

import vercel from "@astrojs/vercel";

// https://astro.build/config
export default defineConfig({
	integrations: [tailwind(), compress()],

	build: {
		inlineStylesheets: "always",
	},

	output: "server",
	adapter: vercel(),
});
