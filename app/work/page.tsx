import type { Metadata } from "next";
import { getAllCaseStudies } from "@/lib/content";
import { FeatureCard } from "@/components/home/feature-card";
import { FadeIn } from "@/components/ui/fade-in";

export const metadata: Metadata = {
  title: "Work",
  description:
    "Product case studies — discovery, prioritisation, specification and go-to-market.",
};

export default function WorkPage() {
  const studies = getAllCaseStudies();

  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-16 pt-8 sm:px-8 sm:pb-24 sm:pt-12 lg:px-12 lg:pt-14">
      <div className="grid gap-8 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-4">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            Case studies
          </div>

          <h1 className="mt-4 font-serif text-[clamp(3.25rem,9vw,5.5rem)] leading-[0.95] tracking-[-0.03em] text-fg">
            Work
          </h1>

          <p className="mt-6 max-w-md leading-[1.75] text-fg-muted">
            Each case study covers one part of taking Sakhi — an AI health
            companion for low-literacy women in rural India — from empathy
            research through prioritisation, specification and launch strategy.
          </p>
        </div>

        <div className="border-b border-border lg:col-span-8">
          {studies.map((cs, i) => (
            <FadeIn key={cs.slug} delay={i * 0.06}>
              <FeatureCard cs={cs} index={i + 1} />
            </FadeIn>
          ))}
        </div>
      </div>
    </div>
  );
}
