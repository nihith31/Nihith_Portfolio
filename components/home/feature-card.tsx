import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudyMeta } from "@/lib/content";

/**
 * Editorial case-study card used on the home page: a numbered index, a serif
 * headline and a hairline rule instead of a boxed container.
 */
export function FeatureCard({
  cs,
  index,
}: {
  cs: CaseStudyMeta;
  index: number;
}) {
  return (
    <Link
      href={`/work/${cs.slug}`}
      className="group -mx-4 block rounded-lg border-t border-border px-4 py-8 transition-colors hover:bg-accent-subtle/60"
    >
      <div className="flex gap-5 sm:gap-8">
        <div className="shrink-0 pt-1 font-mono text-sm tabular-nums text-accent">
          {String(index).padStart(2, "0")}
        </div>

        <div className="min-w-0 flex-1">
          <div className="font-mono text-[11px] uppercase tracking-[0.18em] text-accent">
            {cs.discipline}
          </div>

          <h3 className="mt-2 font-serif text-2xl leading-[1.15] tracking-tight text-fg sm:text-3xl">
            {cs.title}
          </h3>

          <p className="mt-2.5 max-w-xl leading-relaxed text-fg-muted">
            {cs.subtitle}
          </p>

          <div className="mt-5 flex flex-wrap items-center gap-x-5 gap-y-2">
            <span className="inline-flex items-center gap-1.5 text-sm font-medium text-fg transition-colors group-hover:text-accent">
              Read case study
              <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
            </span>
            <span className="font-mono text-xs text-fg-muted">
              {cs.skills.slice(0, 3).join(" · ")}
            </span>
          </div>
        </div>
      </div>
    </Link>
  );
}
