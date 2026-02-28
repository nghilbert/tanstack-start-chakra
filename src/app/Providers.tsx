import { ChakraProvider, createSystem, defaultConfig } from "@chakra-ui/react";
import type { PropsWithChildren } from "react";
import { theme } from "./theme";

const chakraSystem = createSystem(defaultConfig, theme);

export function Providers({ children }: PropsWithChildren) {
	return <ChakraProvider value={chakraSystem}>{children}</ChakraProvider>;
}
