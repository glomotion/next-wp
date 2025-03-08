"use client";

import { useRouter } from "next/navigation";
import { Button } from "./ui/button";

export function Moo() {
	const router = useRouter();

	return (
		<Button
			variant="destructive"
			className="hidden sm:flex"
			onClick={async () => {
				try {
					// Clear the cache first
					await fetch("/api/clear-cache", {
						method: "POST",
					});
					router.refresh();
				} catch (error) {
					console.error("Failed to clear cache:", error);
				}
			}}
		>
			Revalidate
		</Button>
	);
}
