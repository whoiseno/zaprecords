import { createFileRoute } from "@tanstack/react-router";

export const Route = createFileRoute("/(auth)/_auth/sign-up")({
	component: RouteComponent,
});

function RouteComponent() {
	return <div>Hello "/(auth)/_auth/sign-up"!</div>;
}
