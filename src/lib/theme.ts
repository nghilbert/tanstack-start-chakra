import { defineConfig } from "@chakra-ui/react";

export const theme = defineConfig({
	conditions: {
		dark: "@media (prefers-color-scheme: dark)",
		light: "@media (prefers-color-scheme: light)",
	},
	theme: {},
});
