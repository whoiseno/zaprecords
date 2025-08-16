import { createFileRoute, Link } from "@tanstack/react-router";
import { MailIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputSecret } from "@/components/ui/input-secret";
import { Label } from "@/components/ui/label";
import { cn } from "@/lib/utils";

export const Route = createFileRoute("/(auth)/_auth/sign-in")({
	head: () => ({
		meta: [
			{
				title: "Sign In | ZapRecords",
			},
		],
	}),
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-y-6">
			<div className="flex flex-col gap-2">
				<h1 className="font-bold text-2xl leading-none">Sign in to Account</h1>
				<p className="text-muted-foreground">Enter credentials to gain access.</p>
			</div>
			<form className="flex flex-col gap-y-6">
				<div className="grid gap-3">
					<Label>Email address</Label>
					<div className="relative">
						<Input
							className="peer h-11 border-transparent bg-muted ps-9 shadow-none"
							placeholder="enter work email"
							type="email"
						/>
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
							<MailIcon size={16} aria-hidden="true" />
						</div>
					</div>
				</div>
				<div className="grid gap-3">
					<div className="flex justify-between">
						<Label>Password</Label>
						<Link
							to="/forgot-password"
							className={cn(buttonVariants({ variant: "link", size: "xs", className: "h-5" }))}
						>
							Forgot password?
						</Link>
					</div>
					<InputSecret className="h-11 border-transparent bg-muted shadow-none" />
				</div>
				<div className="grid">
					<Button type="submit" size="lg">
						Sign In
					</Button>
				</div>
			</form>
			<div className="text-muted-foreground text-sm">
				Don&apos;t have an Account?
				<Link to="/sign-up" className={buttonVariants({ variant: "ghost", size: "xs" })}>
					Create Account
				</Link>
			</div>
		</div>
	);
}
