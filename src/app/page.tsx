"use client";

import ThemeToggle from "@/components/theme/ThemeToggle";
import AuthButton from "@/components/ShinnyButton/ShinnyButton";
import Navbar from "@/components/Navbar/Navbar";

import React, { useState } from "react";

export default function Home() {
	const [loading, setLoading] = useState(false);

	return (
		<div className="min-h-screen bg-[var(--background)] transition-all duration-300">
			
			{/* NAVBAR */}
			<Navbar />

			<div className="max-w-6xl mx-auto px-6 py-10">

				{/* HEADER */}
				<div className="flex justify-between items-center mb-10">

					<AuthButton
						onClick={() => console.log("click")}
						loading={false}
					>
						Login
					</AuthButton>
				</div>

			</div>
		</div>
	);
} 	