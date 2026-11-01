import { notFound } from "next/navigation";
import Link from "next/link";
import type { Metadata } from "next";
import { MDXRemote } from "next-mdx-remote/rsc";
import remarkGfm from "remark-gfm";
import { ArrowLeft } from "lucide-react";
import { getAllCaseStudies, getCaseStudy, getCaseStudySlugs } from "@/lib/content";
import { mdxComponents } from "@/components/case/mdx";

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

  const all = getAllCaseStudies();
  const idx = all.findIndex((c) => c.slug === slug);
  const next = all[idx + 1] ?? all[0];

  return (
    <article className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <Link
        href="/work"
        className="inline-flex items-center gap-1.5 text-sm text-fg-muted transition-colors hover:text-fg"
      >
        <ArrowLeft className="size-3.5" /> All work
      </Link>

      <header className="mt-6 border-b border-border pb-8">
        <div className="font-mono text-xs uppercase tracking-widest text-accent">
          {cs.project} · {cs.discipline}
        </div>
        <h1 className="mt-3 text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
          {cs.title}
        </h1>
        <p className="mt-3 text-lg leading-relaxed text-fg-muted">{cs.subtitle}</p>

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
              <div key={m.label} className="rounded-lg border border-border bg-card p-4">
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

      <div className="mt-2">
        <MDXRemote
          source={cs.body}
          components={mdxComponents}
          options={{ mdxOptions: { remarkPlugins: [remarkGfm] } }}
        />
      </div>

      {next && next.slug !== cs.slug && (
        <nav className="mt-16 border-t border-border pt-8">
          <div className="font-mono text-xs uppercase tracking-widest text-fg-faint">
            Next case study
          </div>
          <Link
            href={`/work/${next.slug}`}
            className="mt-2 block text-xl font-semibold tracking-tight text-fg transition-colors hover:text-accent"
          >
            {next.title}
          </Link>
          <p className="mt-1 text-sm text-fg-muted">{next.subtitle}</p>
        </nav>
      )}
    </article>
  );
}
