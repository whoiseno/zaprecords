import { createFileRoute, Link } from "@tanstack/react-router";
import { REGEXP_ONLY_DIGITS } from "input-otp";
import { InfoIcon, MailIcon } from "lucide-react";
import { Button, buttonVariants } from "@/components/ui/button";
import { Input } from "@/components/ui/input";
import { InputOTP, InputOTPGroup, InputOTPSlot } from "@/components/ui/input-otp";
import { InputSecret } from "@/components/ui/input-secret";
import { Label } from "@/components/ui/label";
import { defineStepper } from "@/components/ui/stepperize";

export const Route = createFileRoute("/(auth)/_auth/forgot-password")({
	head: () => ({
		meta: [
			{
				title: "Forgot Password | ZapRecords",
			},
		],
	}),
	component: RouteComponent,
});

const { Stepper, useStepper } = defineStepper(
	{
		id: "forgot-password",
		title: "Forgot Password",
		description: "Enter email to reset your password",
	},
	{
		id: "verify-account",
		title: "Verify Account",
		description: "Enter verification code from email",
	},
	{
		id: "reset-password",
		title: "Reset Password",
		description: "Enter a new password for your Account",
	},
	{
		id: "success",
		title: "Success",
		description: "Password Reset Completed",
	},
);

function RouteComponent() {
	const methods = useStepper();
	return (
		<div className="flex flex-col gap-y-6">
			<Stepper.Provider className="flex flex-col gap-y-6">
				{methods.switch({
					"forgot-password": (step) => (
						<>
							<div className="flex flex-col gap-2">
								<h1 className="font-bold text-2xl leading-none">{step.title}</h1>
								<p className="text-muted-foreground">{step.description}</p>
							</div>
							<form className="flex flex-col gap-y-6">
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
								<div className="grid">
									<Button type="submit" size="lg">
										Continue
									</Button>
								</div>
							</form>
						</>
					),
					"verify-account": (step) => (
						<>
							<div className="flex flex-col gap-2">
								<h1 className="font-bold text-2xl leading-none">{step.title}</h1>
								<p className="text-muted-foreground">{step.description}</p>
							</div>
							<form className="flex flex-col gap-y-6">
								<div className="grid gap-3">
									<Label>Verification code</Label>
									<InputOTP maxLength={6} pattern={REGEXP_ONLY_DIGITS}>
										<InputOTPGroup>
											<InputOTPSlot index={0} className="h-11 w-11 md:text-base" />
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot index={1} className="h-11 w-11 md:text-base" />
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot index={2} className="h-11 w-11 md:text-base" />
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot index={3} className="h-11 w-11 md:text-base" />
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot index={4} className="h-11 w-11 md:text-base" />
										</InputOTPGroup>
										<InputOTPGroup>
											<InputOTPSlot index={5} className="h-11 w-11 md:text-base" />
										</InputOTPGroup>
									</InputOTP>
								</div>
								<div className="grid">
									<Button type="submit" size="lg">
										Continue
									</Button>
								</div>
							</form>
						</>
					),
					"reset-password": (step) => (
						<>
							<div className="flex flex-col gap-2">
								<h1 className="font-bold text-2xl leading-none">{step.title}</h1>
								<p className="text-muted-foreground">{step.description}</p>
							</div>
							<form className="flex flex-col gap-y-6">
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
										Reset Password
									</Button>
								</div>
							</form>
						</>
					),
					success: (step) => (
						<>
							<div className="flex flex-col gap-2">
								<h1 className="font-bold text-2xl leading-none">{step.title}</h1>
								<p className="text-muted-foreground">{step.description}</p>
							</div>
							<div className="flex flex-col gap-2">
								<p>Wait while we sign you in...</p>
							</div>
						</>
					),
				})}
				<Stepper.Controls>
					{!methods.isLast && (
						<Button variant="secondary" onClick={methods.prev} disabled={methods.isFirst}>
							Previous
						</Button>
					)}
					<Button onClick={methods.isLast ? methods.reset : methods.next}>{methods.isLast ? "Reset" : "Next"}</Button>
				</Stepper.Controls>
			</Stepper.Provider>
			<div className="text-muted-foreground text-sm">
				Remembered your password?
				<Link to="/sign-in" className={buttonVariants({ variant: "ghost", size: "xs" })}>
					Sign In
				</Link>
			</div>
		</div>
	);
}
