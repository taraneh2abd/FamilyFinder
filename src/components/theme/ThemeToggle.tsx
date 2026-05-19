"use client";

import * as React from "react";
import * as SwitchPrimitives from "@radix-ui/react-switch";
import { SunIcon, MoonIcon } from "lucide-react";
import styles from "./ThemeToggle.module.scss";

export default function ThemeToggle() {
	const [mounted, setMounted] = React.useState(false);
	const [isDark, setIsDark] = React.useState(false);

	React.useEffect(() => {
		setMounted(true);

		const saved = localStorage.getItem("theme");

		if (saved === "dark") {
			setIsDark(true);
			document.documentElement.classList.add("dark");
		}
	}, []);

	React.useEffect(() => {
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
		<SwitchPrimitives.Root
			checked={isDark}
			onCheckedChange={setIsDark}
			className={styles.toggle}
		>
			<div className={styles.iconLeft}>
				<SunIcon
					className={`${styles.icon} ${
						isDark ? styles.sunInactive : styles.sunActive
					}`}
				/>
			</div>

			<div className={styles.iconRight}>
				<MoonIcon
					className={`${styles.icon} ${
						isDark ? styles.moonActive : styles.moonInactive
					}`}
				/>
			</div>

			<SwitchPrimitives.Thumb
				className={`${styles.thumb} ${
					isDark ? styles.checked : ""
				}`}
			>
				{isDark ? (
					<MoonIcon className="w-3 h-3 text-[var(--primary)]" />
				) : (
					<SunIcon className="w-3 h-3 text-[var(--primary)]" />
				)}
			</SwitchPrimitives.Thumb>
		</SwitchPrimitives.Root>
	);
}