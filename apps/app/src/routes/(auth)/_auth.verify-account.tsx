import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_auth/verify-account")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(auth)/_auth/verify-account"!</div>;
}
