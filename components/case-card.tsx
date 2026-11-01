import Link from "next/link";
import { ArrowRight } from "lucide-react";
import type { CaseStudyMeta } from "@/lib/content";

export function CaseCard({ cs }: { cs: CaseStudyMeta }) {
  return (
    <Link
      href={`/work/${cs.slug}`}
      className="group block rounded-lg border border-border bg-card p-6 transition-colors hover:border-accent/50"
    >
      <div className="font-mono text-xs uppercase tracking-widest text-accent">
        {cs.project} · {cs.discipline}
      </div>
      <h3 className="mt-2.5 text-xl font-semibold tracking-tight text-fg">
        {cs.title}
      </h3>
      <p className="mt-2 leading-relaxed text-fg-muted">{cs.subtitle}</p>

      <div className="mt-4 flex flex-wrap gap-1.5">
        {cs.skills.map((s) => (
          <span
            key={s}
            className="rounded-full border border-border px-2.5 py-0.5 text-xs text-fg-muted"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mt-5 flex items-center gap-1.5 text-sm font-medium text-fg transition-colors group-hover:text-accent">
        Read case study
        <ArrowRight className="size-3.5 transition-transform group-hover:translate-x-0.5" />
      </div>
    </Link>
  );
}
