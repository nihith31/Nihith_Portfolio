import Link from "next/link";
import { ArrowRight, Download } from "lucide-react";
import { getAllCaseStudies } from "@/lib/content";
import { FeatureCard } from "@/components/home/feature-card";
import { FadeIn } from "@/components/ui/fade-in";
import { sakhi, site } from "@/lib/site";

const credentials = [
  {
    kind: "Experience",
    label: "Cognizant Technology Solutions",
    detail: "Programmer Analyst · Automation Test Engineer · 2024–present",
  },
  {
    kind: "Certification",
    label: "Product Management with Generative & Agentic AI",
    detail: "Masai X BITSoM CEPD",
  },
  {
    kind: "Education",
    label: "B.Tech, Artificial Intelligence & Data Science",
    detail: "Vishnu Institute of Technology",
  },
];

const quickFacts = [
  { label: "Based in", value: "Andhra Pradesh, India" },
  { label: "Focus", value: "AI products · discovery to spec" },
];

export default function HomePage() {
  const studies = getAllCaseStudies();

  return (
    <div>
      {/* Hero */}
      <section className="mx-auto w-full max-w-7xl px-5 pb-14 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12 lg:pt-14">
        <div className="grid gap-12 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-8">
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {site.role}
            </div>

            <h1 className="mt-4 font-serif text-[clamp(3rem,11vw,8rem)] leading-[0.92] tracking-[-0.025em] text-fg">
              Nihith
              <br />
              Konakalla
            </h1>

            <p className="mt-8 max-w-3xl font-serif text-[clamp(1.6rem,3vw,2.6rem)] leading-[1.28] text-fg">
              I spent 18 months in the part of the product lifecycle where
              requirements meet reality.{" "}
              <em className="text-accent">Now I write the requirements.</em>
            </p>

            <p className="mt-6 max-w-2xl text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.75] text-fg-muted">
              I turn business workflows into specifications precise enough to
              test — and build AI products for the users the industry usually
              designs past.
            </p>

            <div className="mt-9 flex flex-wrap items-center gap-3">
              <Link
                href="/work"
                className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
              >
                View case studies <ArrowRight className="size-3.5" />
              </Link>
              <a
                href={site.resumePath}
                download
                className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-bg-subtle"
              >
                <Download className="size-3.5" /> Resume
              </a>
              <a
                href={`mailto:${site.email}`}
                className="text-sm text-fg-muted underline decoration-border underline-offset-4 transition-colors hover:text-fg hover:decoration-accent"
              >
                {site.email}
              </a>
            </div>
          </div>

          {/* Right rail — stacks under the hero on small screens */}
          <aside className="lg:col-span-4 lg:border-l lg:border-border lg:pl-10 lg:pt-2">
            <dl className="grid grid-cols-2 gap-x-6 gap-y-6 lg:grid-cols-1 lg:gap-y-7">
              {quickFacts.map((f) => (
                <div key={f.label}>
                  <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-fg-faint">
                    {f.label}
                  </dt>
                  <dd className="mt-1.5 text-sm leading-snug text-fg">
                    {f.value}
                  </dd>
                </div>
              ))}
            </dl>
          </aside>
        </div>
      </section>

      {/* Credentials */}
      <section className="border-y border-border bg-bg-subtle">
        <div className="mx-auto w-full max-w-7xl px-5 sm:px-8 lg:px-12">
          <div className="grid gap-x-10 gap-y-6 py-8 sm:grid-cols-3 sm:py-10">
            {credentials.map((c) => (
              <div key={c.label}>
                <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {c.kind}
                </div>
                <div className="mt-2 text-sm font-medium leading-snug text-fg">
                  {c.label}
                </div>
                <div className="mt-1.5 text-xs leading-relaxed text-fg-faint">
                  {c.detail}
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Selected work */}
      <section className="mx-auto w-full max-w-7xl px-5 py-14 sm:px-8 sm:py-20 lg:px-12">
        <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[clamp(2.25rem,4vw,3.5rem)] leading-[1.02] tracking-tight text-fg">
              Selected work
            </h2>
            <p className="mt-5 max-w-md leading-relaxed text-fg-muted">
              <a
                href={sakhi.url}
                target="_blank"
                rel="noopener noreferrer"
                className="text-accent underline underline-offset-4 transition-opacity hover:opacity-75"
              >
                Sakhi
              </a>{" "}
              is an AI health companion for low-literacy women in rural India. I
              ran it end to end — research, prioritisation, specification and
              launch strategy. Each case study covers one part of that.
            </p>
            <Link
              href="/work"
              className="mt-6 inline-block font-mono text-xs uppercase tracking-[0.14em] text-fg-muted transition-colors hover:text-accent"
            >
              All work →
            </Link>
          </div>

          <div className="border-b border-border lg:col-span-8">
            {studies.slice(0, 3).map((cs, i) => (
              <FadeIn key={cs.slug} delay={i * 0.06}>
                <FeatureCard cs={cs} index={i + 1} />
              </FadeIn>
            ))}
          </div>
        </div>
      </section>
    </div>
  );
}
