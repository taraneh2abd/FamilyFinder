export default function HeroCard() {
	return (
		<div
			className="
				rounded-3xl
				p-8
				bg-secondary
				text-foreground
				shadow-xl
			"
		>
			<h1 className="text-4xl font-bold mb-4">
				Family Finder
			</h1>

			<p className="text-lg opacity-90 leading-8">
				A modern UI using your custom color palette.
			</p>

			<div className="flex gap-4 mt-6">
				<button
					className="
						bg-primary
						text-black
						px-5 py-3
						rounded-2xl
						font-semibold
					"
				>
					Get Started
				</button>

				<button
					className="
						bg-accent
						text-white
						px-5 py-3
						rounded-2xl
						font-semibold
					"
				>
					Explore
				</button>
			</div>
		</div>
	);
}