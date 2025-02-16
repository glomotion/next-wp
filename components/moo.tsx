"use client";

import { getPostBySlug } from "../lib/wordpress";
import { Button } from "./ui/button";
import { useRouter } from "next/navigation";

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
