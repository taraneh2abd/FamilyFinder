"use client";

import { Check, X } from "lucide-react";

export default function AlertSocialComponent() {
	return (
		<div className="flex items-center justify-between rounded-2xl border border-[var(--border)] bg-[var(--card)] p-4 shadow-md">
			
			{/* متن */}
			<p className="text-sm font-medium text-[var(--foreground)]">
				Your connection request has been sent.
			</p>

			{/* دکمه‌ها */}
			<div className="flex gap-2">
				
				{/* Accept button */}
				<button
					className="
						flex items-center gap-2 rounded-lg px-3 py-1
						bg-[rgba(var(--primary-rgb),0.15)]
						text-[var(--primary)]
						hover:bg-[rgba(var(--primary-rgb),0.25)]
						transition
					"
					onClick={() => alert("Accepted 🎉")}
				>
					<Check size={16} />
					<span className="text-sm font-medium">Accept</span>
				</button>

				{/* Reject button */}
				<button
					className="
						flex items-center justify-center rounded-lg px-3 py-1
						bg-[rgba(var(--accent-rgb),0.15)]
						text-[var(--accent)]
						hover:bg-[rgba(var(--accent-rgb),0.25)]
						transition
					"
					onClick={() => alert("Rejected ❌")}
				>
					<X size={16} />
				</button>

			</div>
		</div>
	);
}