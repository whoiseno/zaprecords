import { createFileRoute, Link } from "@tanstack/react-router";
import { InfoIcon, MailIcon, UserRoundPenIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputSecret } from "@/components/ui/input-secret";
import { Label } from "@/components/ui/label";

export const Route = createFileRoute("/(auth)/_auth/sign-up")({
	component: RouteComponent,
});

function RouteComponent() {
	return (
		<div className="flex flex-col gap-y-6">
			<div className="flex flex-col gap-2">
				<h1 className="font-bold text-2xl leading-none">Create an Account</h1>
				<p className="text-muted-foreground">Enter credentials to gain access.</p>
			</div>
			<form className="flex flex-col gap-y-6">
				<div className="grid gap-3">
					<Label>
						Fullname<span className="text-destructive">*</span>
					</Label>
					<div className="relative">
						<Input
							className="peer h-11 border-transparent bg-muted ps-9 shadow-none"
							placeholder="enter preferred name"
							type="text"
						/>
						<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
							<UserRoundPenIcon size={16} aria-hidden="true" />
						</div>
					</div>
				</div>
				<div className="grid gap-3">
					<Label>
						Email address<span className="text-destructive">*</span>
					</Label>
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
					<Label>
						Password<span className="text-destructive">*</span>
					</Label>
					<InputSecret className="h-11 border-transparent bg-muted shadow-none" />
					<div className="flex items-start gap-x-1 text-muted-foreground text-xs">
						<InfoIcon className="fill-muted-foreground text-background" size={14} />
						At least 1 uppercase, 1 number, 1 special character, and minimum length 14
					</div>
				</div>
				<div className="grid gap-3">
					<Label>
						Confirm password<span className="text-destructive">*</span>
					</Label>
					<InputSecret className="h-11 border-transparent bg-muted shadow-none" />
				</div>
				<div className="grid">
					<Button type="submit" size="lg">
						Sign In
					</Button>
				</div>
			</form>
			<div className="text-muted-foreground text-sm">
				Have an Account?
				<Link to="/sign-in" className={buttonVariants({ variant: "ghost", size: "xs" })}>
					Sign in to Account
				</Link>
			</div>
		</div>
	);
}
