import { createFileRoute, Link, Outlet } from "@tanstack/react-router";
import { LinkIcon } from "lucide-react";
import { Fragment } from "react";
import { ThemeToggle } from "@/components/theme/theme.toggle";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/(auth)/_auth")({
	component: RouteComponent,
});

const AUTH_ROUTES: { to: string; label: string }[] = [
	{
		to: "/",
		label: "Home",
	},
	{
		to: "/sign-in",
		label: "Sign in to Account",
	},
	{
		to: "/sign-up",
		label: "Create Account",
	},
	{
		to: "/verify-account",
		label: "Verify Account",
	},
	{
		to: "/forgot-password",
		label: "Forgot password?",
	},
];

function RouteComponent() {
	return (
		<Fragment>
			<header className="fixed inset-x-0 top-0 border-b px-2 py-1.5">
				<ul className="flex items-center gap-4">
					{AUTH_ROUTES.map((r) => (
						<li key={r.to}>
							<Link to={r.to} className={buttonVariants({ variant: "ghost", size: "sm" })}>
								<LinkIcon className="text-muted-foreground" />
								{r.label}
							</Link>
						</li>
					))}
					<li>
						<ThemeToggle />
					</li>
				</ul>
			</header>
			<main className="flex min-h-svh flex-col items-center justify-center bg-background p-6 md:p-10">
				<section className="w-full max-w-xs">
					<Outlet />
				</section>
			</main>
		</Fragment>
	);
}
