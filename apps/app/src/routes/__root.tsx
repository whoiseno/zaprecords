import { createRootRoute, HeadContent, Outlet } from "@tanstack/react-router";
import { Fragment } from "react";

export const Route = createRootRoute({
	head: () => ({
		meta: [
			{
				name: "description",
				content: "An inventory management software for everyone.",
			},
			{
				title: "ZapRecords | Manage inventory at the record speed.",
			},
		],
	}),
	component: RootComponent,
});

function RootComponent() {
	return (
		<Fragment>
			<HeadContent />
			<Outlet />
		</Fragment>
	);
}
