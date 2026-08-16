"use client";

import { useTheme } from "next-themes";
import { Moon, Sun } from "lucide-react";
import { useMounted } from "@/lib/hooks";

export function ThemeToggle() {
  const { resolvedTheme, setTheme } = useTheme();
  // Theme is only known after mount (it depends on localStorage/OS
  // preference), so render a neutral placeholder until then to avoid a
  // hydration mismatch.
  const mounted = useMounted();

  const isDark = mounted && resolvedTheme === "dark";

  return (
    <button
      type="button"
      onClick={() => setTheme(isDark ? "light" : "dark")}
      aria-label="Toggle color theme"
      className="border-border text-foreground/80 hover:border-accent hover:text-accent inline-flex h-9 w-9 items-center justify-center rounded-md border transition-colors"
    >
      {mounted && (isDark ? <Sun size={16} /> : <Moon size={16} />)}
    </button>
  );
}
