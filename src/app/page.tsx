"use client";

import ThemeToggle from "@/components/theme/ThemeToggle";
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

			</div>
		</div>
	);
} 	