import type { MDXComponents } from "mdx/types";
import {
  Callout,
  DecisionCard,
  Grid,
  Metric,
  MetricGrid,
  Persona,
  Pull,
  Section,
} from "@/components/case/blocks";
import { RiceTable, MoscowBoard } from "@/components/case/data-blocks";
import { ArtifactFrame } from "@/components/case/artifact-frame";

export const mdxComponents: MDXComponents = {
  h2: (p) => (
    <h2
      className="mt-12 scroll-mt-24 text-2xl font-semibold tracking-tight text-fg"
      {...p}
    />
  ),
  h3: (p) => (
    <h3 className="mt-8 scroll-mt-24 text-lg font-semibold text-fg" {...p} />
  ),
  h4: (p) => <h4 className="mt-6 font-semibold text-fg" {...p} />,
  p: (p) => <p className="mt-4 leading-[1.75] text-fg-muted" {...p} />,
  ul: (p) => (
    <ul className="mt-4 list-disc space-y-2 pl-5 leading-[1.75] text-fg-muted marker:text-fg-faint" {...p} />
  ),
  ol: (p) => (
    <ol className="mt-4 list-decimal space-y-2 pl-5 leading-[1.75] text-fg-muted marker:text-fg-faint" {...p} />
  ),
  li: (p) => <li className="pl-1" {...p} />,
  strong: (p) => <strong className="font-semibold text-fg" {...p} />,
  a: (p) => (
    <a
      className="font-medium text-accent underline underline-offset-4 transition-opacity hover:opacity-75"
      target={p.href?.startsWith("http") ? "_blank" : undefined}
      rel={p.href?.startsWith("http") ? "noopener noreferrer" : undefined}
      {...p}
    />
  ),
  hr: () => <hr className="my-10 border-border" />,
  table: (p) => (
    <div className="my-6 overflow-x-auto rounded-lg border border-border">
      <table className="w-full min-w-[520px] text-sm" {...p} />
    </div>
  ),
  thead: (p) => (
    <thead className="border-b border-border bg-bg-subtle text-xs uppercase tracking-wide text-fg" {...p} />
  ),
  th: (p) => <th className="px-3 py-2.5 text-left font-medium" {...p} />,
  td: (p) => (
    <td className="border-b border-border px-3 py-3 align-top leading-relaxed text-fg-muted" {...p} />
  ),
  blockquote: (p) => (
    <blockquote
      className="my-6 border-l-2 border-accent pl-5 italic leading-relaxed text-fg-muted"
      {...p}
    />
  ),
  code: (p) => (
    <code className="rounded bg-bg-subtle px-1.5 py-0.5 font-mono text-[0.85em] text-fg" {...p} />
  ),
  Callout,
  DecisionCard,
  Grid,
  Metric,
  MetricGrid,
  Persona,
  Pull,
  Section,
  RiceTable,
  MoscowBoard,
  ArtifactFrame,
};
