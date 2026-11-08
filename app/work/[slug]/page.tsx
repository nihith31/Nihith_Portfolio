import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import {
  getAllCaseStudies,
  getCaseStudy,
  getCaseStudySlugs,
  getHeadings,
} from "@/lib/content";
import { mdxComponents } from "@/components/case/mdx";
import { Toc, TocMobile } from "@/components/case/toc";

export function generateStaticParams() {
  return getCaseStudySlugs().map((slug) => ({ slug }));
}

export async function generateMetadata({
  params,
}: PageProps<"/work/[slug]">): Promise<Metadata> {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) return {};
  return { title: cs.title, description: cs.summary };
}

export default async function CaseStudyPage({ params }: PageProps<"/work/[slug]">) {
  const { slug } = await params;
  const cs = getCaseStudy(slug);
  if (!cs) notFound();

  const headings = getHeadings(cs.body);
  const all = getAllCaseStudies();
  const idx = all.findIndex((c) => c.slug === slug);
  // No wrap-around: the last case study ends rather than looping to the first.
  const next = all[idx + 1];

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-20 sm:pt-12 lg:px-12">
      <div className="xl:flex xl:gap-14">
      <article className="min-w-0 max-w-3xl">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-3.5" /> All work
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
          {cs.project} · {cs.discipline}
        </div>
        <h1 className="mt-4 font-serif text-[clamp(2.6rem,7vw,4.25rem)] leading-[1.0] tracking-[-0.025em] text-fg">
          {cs.title}
        </h1>
        <p className="mt-5 max-w-2xl font-serif text-[clamp(1.25rem,2vw,1.6rem)] leading-[1.35] text-fg-muted">
          {cs.subtitle}
        </p>

        <dl className="mt-6 grid grid-cols-2 gap-4 sm:grid-cols-3">
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
              Role
            </dt>
            <dd className="mt-0.5 text-sm text-fg">{cs.role}</dd>
          </div>
          <div>
            <dt className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
              Timeline
            </dt>
            <dd className="mt-0.5 text-sm text-fg">{cs.timeline}</dd>
          </div>
          <div className="col-span-2 sm:col-span-1">
            <dt className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
              Focus
            </dt>
            <dd className="mt-0.5 text-sm text-fg">{cs.skills.join(", ")}</dd>
          </div>
        </dl>

        {cs.metrics.length > 0 && (
          <div className="mt-6 grid grid-cols-1 gap-3 sm:grid-cols-3">
            {cs.metrics.map((m) => (
              <div key={m.label} className="rounded-lg border border-border border-t-2 border-t-accent bg-card p-4">
                <div className="font-mono text-xl font-semibold tracking-tight text-fg">
                  {m.value}
                </div>
                <div className="mt-0.5 text-sm text-fg">{m.label}</div>
                {m.note && (
                  <div className="mt-1 text-xs leading-relaxed text-fg-faint">{m.note}</div>
                )}
              </div>
            ))}
          </div>
        )}
      </header>

      <TocMobile headings={headings} />

      <div className="mt-2">
        <MDXRemote
          source={cs.body}
          components={mdxComponents}
          options={{
            mdxOptions: {
              remarkPlugins: [remarkGfm],
            },
          }}
        />
      </div>

      {/* Whichever case study sorts last falls back to "All work". Adding one
          turns this into a forward link automatically — nothing to update. */}
      <nav className="mt-16 border-t border-border pt-8">
        {next ? (
          <>
            <div className="font-mono text-xs uppercase tracking-widest text-fg-faint">
              Next case study
            </div>
            <Link
              href={`/work/${next.slug}`}
              className="mt-2 block font-serif text-2xl leading-tight tracking-tight text-fg transition-colors hover:text-accent"
            >
              {next.title}
            </Link>
            <p className="mt-1 text-sm text-fg-muted">{next.subtitle}</p>
          </>
        ) : (
          <Link
            href="/work"
            className="group inline-flex items-center gap-2 font-serif text-2xl leading-tight tracking-tight text-fg transition-colors hover:text-accent"
          >
            <ArrowLeft className="size-5 transition-transform group-hover:-translate-x-0.5" />
            All work
          </Link>
        )}
      </nav>
      </article>

      <aside className="hidden xl:block xl:w-60 xl:shrink-0">
        <div className="sticky top-28 max-h-[calc(100vh-9rem)] overflow-y-auto py-1">
          <Toc headings={headings} />
        </div>
      </aside>
      </div>
    </div>
  );
}
