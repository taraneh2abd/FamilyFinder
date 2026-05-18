"use client";

import { useEffect, useId, useState } from "react";
import { MoonIcon, SunIcon } from "lucide-react";

import { Switch } from "@/components/switch";
import { cn } from "@/lib/utils";

export default function ThemeToggle() {
	const id = useId();

	const [mounted, setMounted] = useState(false);
	const [isDark, setIsDark] = useState(false);

	useEffect(() => {
		setMounted(true);

		const savedTheme = localStorage.getItem("theme");

		if (savedTheme === "dark") {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	useEffect(() => {
		if (!mounted) return;

		if (isDark) {
			document.documentElement.classList.add("dark");
			localStorage.setItem("theme", "dark");
		} else {
			document.documentElement.classList.remove("dark");
			localStorage.setItem("theme", "light");
		}
	}, [isDark, mounted]);

	if (!mounted) return null;

	return (
		<div className="group inline-flex items-center gap-2">
			<span
				id={`${id}-light`}
				className={cn(
					"cursor-pointer text-left text-sm font-medium transition-colors",
					isDark && "text-foreground/50"
				)}
				aria-controls={id}
				onClick={() => setIsDark(false)}
			>
				<SunIcon
					className="size-4"
					aria-hidden="true"
				/>
			</span>

			<Switch
				id={id}
				checked={isDark}
				onCheckedChange={setIsDark}
				aria-labelledby={`${id}-light ${id}-dark`}
				aria-label="Toggle theme"
			/>

			<span
				id={`${id}-dark`}
				className={cn(
					"cursor-pointer text-right text-sm font-medium transition-colors",
					!isDark && "text-foreground/50"
				)}
				aria-controls={id}
				onClick={() => setIsDark(true)}
			>
				<MoonIcon
					className="size-4"
					aria-hidden="true"
				/>
			</span>
		</div>
	);
}