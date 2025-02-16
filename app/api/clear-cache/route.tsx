import { NextRequest } from "next/server";
import { revalidateWordPressData } from "../../../lib/wordpress";

export async function GET(request: NextRequest) {
  try {
    await revalidateWordPressData();
    console.log("@@@@@@@@@ CACHE CLEARED @@@@@@@@@");
    return new Response(`Successfully revalidated all WP data`, {
      status: 200,
    });
  } catch (e: any) {
    console.log(`${e.message}`);
    return new Response(`Failed to generate the image`, {
      status: 500,
    });
  }
}
