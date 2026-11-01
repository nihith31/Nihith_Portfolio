"use client";

import { Moon, Sun } from "lucide-react";

/**
 * Icon visibility is driven by the `dark` class on <html>, so there is no React
 * state to hydrate and no flash of the wrong icon on first paint.
 */
export function ThemeToggle() {
  function toggle() {
    const root = document.documentElement;
    const next = !root.classList.contains("dark");
    root.classList.toggle("dark", next);
    try {
      localStorage.setItem("theme", next ? "dark" : "light");
    } catch {}
  }

  return (
    <button
      onClick={toggle}
      aria-label="Toggle colour theme"
      className="grid size-9 place-items-center rounded-md border border-border text-fg-muted transition-colors hover:bg-bg-subtle hover:text-fg"
    >
      <Sun className="hidden size-4 dark:block" />
      <Moon className="size-4 dark:hidden" />
    </button>
  );
}
