import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/content";
import { CaseCard } from "@/components/case-card";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product case studies — discovery, prioritisation, specification and go-to-market.",
};

export default function WorkPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="mx-auto max-w-3xl px-4 py-12 sm:px-6 sm:py-16">
      <h1 className="text-3xl font-semibold tracking-tight text-fg sm:text-4xl">
        Work
      </h1>
      <p className="mt-3 max-w-2xl text-lg leading-relaxed text-fg-muted">
        Case studies covering the full product lifecycle — from empathy research
        through prioritisation, specification and launch strategy.
      </p>

      <div className="mt-10 space-y-4">
        {studies.map((cs) => (
          <CaseCard key={cs.slug} cs={cs} />
        ))}
      </div>
    </div>
  );
}
