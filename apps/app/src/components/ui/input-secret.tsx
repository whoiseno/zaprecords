import { EyeIcon, EyeOffIcon, LockIcon } from "lucide-react";
import { useState } from "react";

import { Input } from "@/components/ui/input";
import { cn } from "@/lib/utils";

export function InputSecret({ className, id, placeholder, ...props }: Omit<React.ComponentProps<"input">, "type">) {
	const [isVisible, setIsVisible] = useState<boolean>(false);

	const toggleVisibility = () => setIsVisible((prevState) => !prevState);

	return (
		<div className="relative">
			<div className="pointer-events-none absolute inset-y-0 start-0 flex items-center justify-center ps-3 text-muted-foreground/80 peer-disabled:opacity-50">
				<LockIcon size={16} aria-hidden="true" />
			</div>
			<Input
				id={id}
				className={cn("px-9", className)}
				placeholder={placeholder}
				type={isVisible ? "text" : "password"}
				{...props}
			/>
			<button
				className="absolute inset-y-0 end-0 flex h-full w-9 items-center justify-center rounded-e-md text-muted-foreground/80 outline-none transition-[color,box-shadow] hover:text-foreground focus:z-10 focus-visible:border-ring focus-visible:ring-[3px] focus-visible:ring-ring/50 disabled:pointer-events-none disabled:cursor-not-allowed disabled:opacity-50"
				type="button"
				onClick={toggleVisibility}
				aria-label={isVisible ? "Hide password" : "Show password"}
				aria-pressed={isVisible}
				aria-controls="password"
			>
				{isVisible ? <EyeOffIcon size={16} aria-hidden="true" /> : <EyeIcon size={16} aria-hidden="true" />}
			</button>
		</div>
	);
}
