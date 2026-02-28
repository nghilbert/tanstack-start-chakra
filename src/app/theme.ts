/** theme.ts */
import { defineConfig } from "@chakra-ui/react";

export const theme = defineConfig({
	conditions: {
		_dark: "@media (prefers-color-scheme: dark)",
	},
	theme: {},
});
