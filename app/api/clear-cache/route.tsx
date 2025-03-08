import type { NextRequest } from "next/server";
import { revalidateWordPressData } from "../../../lib/wordpress";

export async function POST(request: NextRequest) {
	try {
		await revalidateWordPressData([
			"wordpress",
			"post",
			"posts",
			"pages",
			"post-hello-world",
		]);
		console.log("@@@@@@@@@ CACHE CLEARED @@@@@@@@@");
		return Response.json({ message: "Successfully revalidated all WP data" });
	} catch (e: unknown) {
		console.error("Cache clear error:", e);
		return Response.json({ message: "Failed to clear cache" }, { status: 500 });
	}
}
