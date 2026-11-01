"use client";

import Link from "next/link";
import { usePathname } from "next/navigation";
import { useState } from "react";
import { Menu, X } from "lucide-react";
import { nav, site } from "@/lib/site";
import { ThemeToggle } from "@/components/ui/theme-toggle";
import { cn } from "@/lib/utils";

export function SiteNav() {
  const pathname = usePathname();
  const [open, setOpen] = useState(false);

  const isActive = (href: string) =>
    href === "/" ? pathname === "/" : pathname.startsWith(href);

  return (
    <header className="sticky top-0 z-50 border-b border-border bg-bg/85 backdrop-blur-md">
      <div className="mx-auto flex h-20 w-full max-w-7xl items-center justify-between px-5 sm:px-8 lg:px-12">
        {/* The home page already carries the name at full size in its hero,
            so the wordmark would only repeat it. An empty span keeps the nav
            links pinned right. */}
        {pathname === "/" ? (
          <span />
        ) : (
          <Link
            href="/"
            aria-label={`${site.name} — home`}
            className="group flex items-center gap-2.5 transition-opacity hover:opacity-70"
          >
            <span
              aria-hidden="true"
              className="size-2 rounded-full bg-accent transition-transform group-hover:scale-125"
            />
            <span className="font-serif text-2xl leading-none tracking-[-0.02em] text-fg">
              NK
            </span>
          </Link>
        )}

        <nav className="hidden items-center gap-1 sm:flex">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              className={cn(
                "rounded-md px-3 py-1.5 text-[0.95rem] transition-colors",
                isActive(item.href)
                  ? "bg-bg-subtle text-fg"
                  : "text-fg-muted hover:text-fg",
              )}
            >
              {item.label}
            </Link>
          ))}
          <div className="ml-2">
            <ThemeToggle />
          </div>
        </nav>

        <div className="flex items-center gap-2 sm:hidden">
          <ThemeToggle />
          <button
            onClick={() => setOpen(!open)}
            aria-label="Toggle menu"
            aria-expanded={open}
            className="grid size-9 place-items-center rounded-md border border-border text-fg-muted"
          >
            {open ? <X className="size-4" /> : <Menu className="size-4" />}
          </button>
        </div>
      </div>

      {open && (
        <nav className="border-t border-border bg-bg px-5 py-2 sm:hidden">
          {nav.map((item) => (
            <Link
              key={item.href}
              href={item.href}
              onClick={() => setOpen(false)}
              className={cn(
                "block rounded-md px-3 py-2.5 text-base transition-colors",
                isActive(item.href)
                  ? "bg-bg-subtle text-fg"
                  : "text-fg-muted",
              )}
            >
              {item.label}
            </Link>
          ))}
        </nav>
      )}
    </header>
  );
}
