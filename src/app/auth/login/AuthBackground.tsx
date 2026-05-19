"use client";

import { useEffect, useState } from "react";

import { useDesktopTablet } from "@/hooks/ResponsiveHooks";

import bottomRightImage from "@/assets/images/53.png";
import topLeftImage from "@/assets/images/Vector56.svg";
import mobileBackgroundImage from "@/assets/images/login-signup-mobile-background.png";

import { cn } from "@/lib/utils";

interface AuthBackgroundProps {
	loginPage?: boolean;
}

export default function AuthBackground({
	loginPage = false,
}: AuthBackgroundProps) {
	const isDesktopOrTablet = useDesktopTablet();

	const [mounted, setMounted] = useState(false);

	useEffect(() => {
		setMounted(true);
	}, []);

	if (!mounted) return null;

	return (
		<>
			{isDesktopOrTablet ? (
				<>
					<img
						src={topLeftImage.src}
						alt="Paw icon top left"
						style={{
							position: "fixed",
							top: 0,
							left: 0,
							height: loginPage ? "60vh" : "55vh",
							width: "auto",
							pointerEvents: "none",
							zIndex: 0,
						}}
					/>

					<img
						src={bottomRightImage.src}
						alt="Bone icon bottom right"
						style={{
							position: "fixed",
							bottom: 0,
							right: 0,
							height: loginPage ? "70vh" : "55vh",
							width: "auto",
							pointerEvents: "none",
							zIndex: 0,
						}}
					/>
				</>
			) : (
				<img
					src={mobileBackgroundImage.src}
					alt="background image"
					style={{
						position: "fixed",
						top: 0,
						left: 0,
						height: "100vh",
						width: "100vw",
						objectFit: "cover",
						objectPosition: "bottom",
						zIndex: 0,
					}}
				/>
			)}
		</>
	);
}