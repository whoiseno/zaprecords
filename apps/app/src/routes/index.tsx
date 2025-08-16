import { createFileRoute, Link } from "@tanstack/react-router";
import { ArrowRightIcon } from "lucide-react";
import { Fragment } from "react";
import { ThemeToggle } from "@/components/theme/theme.toggle";
import { buttonVariants } from "@/components/ui/button";

export const Route = createFileRoute("/")({
	component: RouteComponent,
});

const ROUTES: { to: string; label: string }[] = [{ to: "/sign-in", label: "Authentication routes" }];

function RouteComponent() {
	return (
		<Fragment>
			<header className="sticky inset-x-0 top-0 border-b px-2 py-1.5">
				<ul>
					{ROUTES.map((r) => (
						<li key={r.to}>
							<Link to={r.to} className={buttonVariants({ variant: "ghost", size: "sm" })}>
								<ArrowRightIcon className="text-yellow-400" />
								{r.label}
							</Link>
						</li>
					))}
					<li>
						<ThemeToggle />
					</li>
				</ul>
			</header>
		</Fragment>
	);
}
