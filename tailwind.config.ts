// tailwind.config.ts
import type { Config } from "tailwindcss";

const config: Config = {
	darkMode: "class",

	content: [
		"./app/**/*.{js,ts,jsx,tsx}",
		"./pages/**/*.{js,ts,jsx,tsx}",
		"./components/**/*.{js,ts,jsx,tsx}",
	],

	theme: {
		extend: {
			fontFamily: {
				sans: ["Vazirmatn", "Roboto", "system-ui"],
			},

			colors: {
				background: "var(--background)",
				foreground: "var(--text)",
				primary: "var(--primary)",
				secondary: "var(--secondary)",
				accent: "var(--accent)",
			},
		},
	},

	plugins: [],
};

export default config;