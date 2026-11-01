import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { getAllCaseStudies } from "@/lib/content";
import { CaseCard } from "@/components/case-card";
import { site } from "@/lib/site";

export default function HomePage() {
  const studies = getAllCaseStudies();

  return (
    <div className="mx-auto max-w-3xl px-4 sm:px-6">
      <section className="py-16 sm:py-24">
        <div className="font-mono text-xs uppercase tracking-widest text-accent">
          {site.role}
        </div>
        <h1 className="mt-4 text-4xl font-semibold leading-[1.1] tracking-tight text-fg sm:text-5xl">
          {site.name}
        </h1>
        <p className="mt-6 max-w-2xl text-lg leading-relaxed text-fg-muted sm:text-xl">
          {site.tagline}
        </p>
        <p className="mt-4 max-w-2xl leading-relaxed text-fg-muted">
          I work as an automation test engineer at Cognizant, where I turn
          business workflows into specifications precise enough to test. I build
          AI products for users the industry usually designs past.
        </p>

        <div className="mt-8 flex flex-wrap items-center gap-3">
          <Link
            href="/work"
            className="inline-flex items-center gap-1.5 rounded-md bg-accent px-4 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            View case studies <ArrowRight className="size-3.5" />
          </Link>
          <a
            href={site.resumePath}
            download
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-bg-subtle"
          >
            <Download className="size-3.5" /> Resume
          </a>
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 rounded-md border border-border px-4 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-bg-subtle"
          >
            <Mail className="size-3.5" /> Get in touch
          </a>
        </div>
      </section>

      <section className="border-t border-border py-12 sm:py-16">
        <div className="flex items-baseline justify-between">
          <h2 className="text-2xl font-semibold tracking-tight text-fg">
            Selected work
          </h2>
          <Link
            href="/work"
            className="text-sm text-fg-muted transition-colors hover:text-fg"
          >
            All work →
          </Link>
        </div>
        <div className="mt-6 space-y-4">
          {studies.slice(0, 3).map((cs) => (
            <CaseCard key={cs.slug} cs={cs} />
          ))}
        </div>
      </section>
    </div>
  );
}
