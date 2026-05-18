interface InfoCardProps {
	title: string;
	text: string;
}

export default function InfoCard({
	title,
	text,
}: InfoCardProps) {
	return (
		<div
			className="
				bg-card
				text-foreground
				border
				rounded-3xl
				p-6
				shadow-lg
			"
		>
			<div
				className="
					w-12 h-12
					rounded-2xl
					bg-primary
					mb-4
				"
			/>

			<h2 className="text-2xl font-bold mb-3">
				{title}
			</h2>

			<p className="opacity-80 leading-7">
				{text}
			</p>
		</div>
	);
}