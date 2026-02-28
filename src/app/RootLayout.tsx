import { Box, Drawer, Flex, IconButton, useDisclosure } from "@chakra-ui/react";
import { Outlet } from "@tanstack/react-router";
import { Menu } from "lucide-react";

export function RootLayout() {
	const { open, onToggle, onClose } = useDisclosure();

	return (
		<Flex direction="column" height="100vh">
			{/* App Bar */}
			<Flex
				as="header"
				align="center"
				px={2}
				h="64px"
				shrink={0}
				bg="bg"
				borderBottomWidth="1px"
				shadow="sm"
			>
				<IconButton aria-label="Open menu" variant="ghost" onClick={onToggle}>
					<Menu />
				</IconButton>
			</Flex>

			{/* Nav Drawer */}
			<Drawer.Root placement="start" open={open} onOpenChange={({ open }) => !open && onClose()}>
				<Drawer.Backdrop />
				<Drawer.Positioner>
					<Drawer.Content>
						<Drawer.CloseTrigger />
						<Drawer.Header>
							<Drawer.Title>App</Drawer.Title>
						</Drawer.Header>
						<Drawer.Body />
						<Drawer.Footer />
					</Drawer.Content>
				</Drawer.Positioner>
			</Drawer.Root>

			{/* Main Content */}
			<Box as="main" flex={1} overflow="hidden">
				<Outlet />
			</Box>
		</Flex>
	);
}
