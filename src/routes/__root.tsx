import { Button, Center, Heading, Text, VStack } from "@chakra-ui/react";
import { createRootRoute, HeadContent, Link, Scripts } from "@tanstack/react-router";
import { Providers, RootLayout } from "#/app";

export const Route = createRootRoute({
	component: RootDocument,
	notFoundComponent: NotFound,
	head: () => ({
		meta: [{ title: "App" }, { name: "description", content: "My app" }],
		links: [{ rel: "icon", href: "/favicon.ico" }],
	}),
});

function RootDocument() {
	return (
		<html lang="en">
			<head>
				<HeadContent />
				<meta charSet="UTF-8" />
				<meta name="viewport" content="width=device-width, initial-scale=1.0" />
			</head>
			<body>
				<Providers>
					<RootLayout />
				</Providers>
				<Scripts />
			</body>
		</html>
	);
}

function NotFound() {
	return (
		<Center h="full">
			<VStack gap={4} textAlign="center">
				<Heading size="7xl" color="fg.subtle" fontWeight="black">
					404
				</Heading>
				<VStack gap={1}>
					<Heading size="lg">Page not found</Heading>
					<Text color="fg.muted">The page you're looking for doesn't exist.</Text>
				</VStack>
				<Button asChild variant="subtle">
					<Link to="/">Go home</Link>
				</Button>
			</VStack>
		</Center>
	);
}
