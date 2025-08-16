import "./globals.css";

import { ConvexQueryClient } from "@convex-dev/react-query";
import { QueryClient, QueryClientProvider } from "@tanstack/react-query";
import { createRouter, RouterProvider } from "@tanstack/react-router";
import { ConvexProvider, ConvexReactClient } from "convex/react";
import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import { ThemeProvider } from "./components/theme/theme.provider";
import { env } from "./env";
import { routeTree } from "./routeTree.gen";

const convex = new ConvexReactClient(env.VITE_CONVEX_URL);

const convexQueryClient = new ConvexQueryClient(convex);
const queryClient = new QueryClient({
	defaultOptions: {
		queries: {
			queryKeyHashFn: convexQueryClient.hashFn(),
			queryFn: convexQueryClient.queryFn(),
		},
	},
});

convexQueryClient.connect(queryClient);

const router = createRouter({
	routeTree,
	defaultPreload: "intent",
	defaultPendingComponent: () => <p>Loading...</p>,
	context: {},
	Wrap: ({ children }) => (
		<ConvexProvider client={convex}>
			<QueryClientProvider client={queryClient}>{children}</QueryClientProvider>
		</ConvexProvider>
	),
	InnerWrap: ({ children }) => (
		<ThemeProvider defaultTheme="dark" storageKey="vite-ui-theme">
			{children}
		</ThemeProvider>
	),
});

declare module "@tanstack/react-router" {
	interface Register {
		router: typeof router;
	}
}

const ROOT_ELEMENT = document.getElementById("root");

if (!ROOT_ELEMENT) {
	throw new Error("Root element not found at @zaprecords/app -> index.html");
}

createRoot(ROOT_ELEMENT).render(
	<StrictMode>
		<RouterProvider router={router} />
	</StrictMode>,
);
