"use client";

import HeroCard from "@/components/HeroCard";
import InfoCard from "@/components/InfoCard";
import ThemeToggle from "@/components/theme/ThemeToggle";
import AuthButton from "@/components/AuthButton/AuthButton"
import React, { useEffect, useState } from "react";
import AlertSocialComponent from "@/components/Toast/Toast"

export default function Home() {
	const [loading, setLoading] = useState(false);
	return (
		<div className="min-h-screen bg-[var(--background)] transition-all duration-300">
			<div className="max-w-6xl mx-auto px-6 py-10">
				<div className="flex justify-between items-center mb-10">
					<div>
						<h1 className="text-5xl font-bold text-[var(--foreground)]">
							Custom Theme Demo
						</h1>

						<p className="mt-3 text-[var(--foreground)] opacity-70">
							Testing light and dark palettes.
						</p>
					</div>

					<ThemeToggle />

					<AlertSocialComponent/>
					
					<AuthButton
				onClick={() => console.log("click")}
				loading={false}
				>
				Login
									</AuthButton>
									


				</div>
    <HeroCard />

				<div className="grid grid-cols-1 md:grid-cols-3 gap-6 mt-10">
					<InfoCard
						title="Primary"
						text="Using the main green primary color in buttons and highlights."
					/>

					<InfoCard
						title="Secondary"
						text="Secondary green gives depth to cards and containers."
					/>

					<InfoCard
						title="Accent"
						text="Accent orange creates contrast for important actions."
          />
    </div>

				<div className="mt-10 p-8 rounded-3xl bg-[var(--accent)] text-white shadow-xl">
					<h2 className="text-3xl font-bold mb-4">Accent Section</h2>

					<p className="leading-8 opacity-90">
						This section exists only to showcase the accent color inside
						the overall theme.
					</p>
				</div>
			</div>
		</div>
	);
}