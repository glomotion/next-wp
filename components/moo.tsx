"use client";

import { Button } from "./ui/button";

export function Moo() {
  return (
    <Button
      variant="destructive"
      className="hidden sm:flex"
      onClick={async () => {
        try {
          await fetch("/api/clear-cache");
          window.location.reload();
        } catch (error) {
          console.error("Failed to clear cache:", error);
        }
      }}
    >
      Clear-cache
    </Button>
  );
}
