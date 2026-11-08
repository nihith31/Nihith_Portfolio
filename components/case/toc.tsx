"use client";

import { useEffect, useState } from "react";
import type { Heading } from "@/lib/content";
import { cn } from "@/lib/utils";

/**
 * Highlights whichever section is currently in view. The observer band sits
 * just under the sticky nav and stops short of the bottom, so the active
 * entry tracks what the reader is actually looking at.
 */
function useActiveHeading(ids: string[]) {
  const [active, setActive] = useState<string | null>(ids[0] ?? null);

  useEffect(() => {
    if (!ids.length) return;

    const seen = new Map<string, boolean>();
    const observer = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          seen.set(e.target.id, e.isIntersecting);
        }
        const first = ids.find((id) => seen.get(id));
        if (first) setActive(first);
      },
      { rootMargin: "-96px 0px -65% 0px", threshold: 0 },
    );

    const nodes = ids
      .map((id) => document.getElementById(id))
      .filter((n): n is HTMLElement => n !== null);
    nodes.forEach((n) => observer.observe(n));

    return () => observer.disconnect();
  }, [ids]);

  return active;
}

export function Toc({ headings }: { headings: Heading[] }) {
  const active = useActiveHeading(headings.map((h) => h.id));

  if (headings.length < 3) return null;

  return (
    <nav aria-label="On this page" className="text-sm">
      <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint">
        On this page
      </div>
      <ul className="mt-4 space-y-0.5 border-l border-border">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className={cn(
                "-ml-px block border-l py-1.5 pl-4 leading-snug transition-colors",
                active === h.id
                  ? "border-accent font-medium text-accent"
                  : "border-transparent text-fg-muted hover:border-fg-faint hover:text-fg",
              )}
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </nav>
  );
}

/** Collapsed variant shown above the article on narrow screens. */
export function TocMobile({ headings }: { headings: Heading[] }) {
  if (headings.length < 3) return null;

  return (
    <details className="group mt-8 rounded-lg border border-border bg-bg-subtle xl:hidden">
      <summary className="cursor-pointer list-none px-4 py-3 font-mono text-[11px] uppercase tracking-[0.16em] text-fg-muted marker:hidden">
        On this page
        <span className="float-right transition-transform group-open:rotate-180">
          ⌄
        </span>
      </summary>
      <ul className="border-t border-border px-4 py-3">
        {headings.map((h) => (
          <li key={h.id}>
            <a
              href={`#${h.id}`}
              className="block py-1.5 text-sm leading-snug text-fg-muted transition-colors hover:text-accent"
            >
              {h.text}
            </a>
          </li>
        ))}
      </ul>
    </details>
  );
}
