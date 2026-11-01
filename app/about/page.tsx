import type { Metadata } from "next";
import Link from "next/link";
import { ArrowRight, Download, Mail } from "lucide-react";
import { FadeIn } from "@/components/ui/fade-in";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { site } from "@/lib/site";

export const metadata: Metadata = {
  title: "About",
  description:
    "QA and automation engineer turned product manager — how 18 months of testing other people's specifications shaped the way I write my own.",
};

const timeline = [
  {
    period: "Sep 2025 — present",
    title: "Programmer Analyst · Automation Test Engineer",
    org: "Cognizant Technology Solutions",
    body: "Designing functional and regression scenarios for web applications, and translating business workflows into acceptance-oriented validation. Working in Agile/Scrum with developers and QA to identify, prioritise and resolve product defects.",
  },
  {
    period: "Jul 2024 — Sep 2025",
    title: "Programmer Analyst Trainee",
    org: "Cognizant Technology Solutions",
    body: "Built a reusable Selenium WebDriver framework in Java with TestNG and the Page Object Model, covering insurance policy lifecycle workflows — policy creation, customer onboarding and renewals.",
  },
  {
    period: "2025",
    title: "Product Management with Generative & Agentic AI",
    org: "Masai X BITSoM CEPD",
    body: "Ran Sakhi end to end as the capstone — empathy research through to a 43-story backlog, a PRD and a launch strategy.",
  },
  {
    period: "2020 — 2024",
    title: "B.Tech, Artificial Intelligence & Data Science",
    org: "Vishnu Institute of Technology",
    body: "Four years of ML, data and statistics — the grounding that makes AI product constraints legible rather than magical.",
  },
];

const skills = [
  {
    group: "Product",
    items: [
      "Product discovery",
      "User research & JTBD",
      "Requirements analysis",
      "PRDs & user stories",
      "RICE & MoSCoW",
      "Product metrics",
      "Roadmapping",
    ],
  },
  {
    group: "AI & data",
    items: [
      "Generative AI",
      "Agentic AI",
      "Prompt engineering",
      "RAG pipelines",
      "AI-assisted prototyping",
      "SQL",
    ],
  },
  {
    group: "Delivery",
    items: [
      "Agile / Scrum",
      "Sprint planning",
      "Backlog management",
      "Jira",
      "Cross-functional collaboration",
    ],
  },
  {
    group: "Engineering",
    items: ["Java", "Python", "Selenium WebDriver", "TestNG", "Git"],
  },
];

export default function AboutPage() {
  return (
    <div className="mx-auto w-full max-w-7xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12 lg:px-12 lg:pt-14">
      {/* Masthead */}
      <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
        <div className="lg:col-span-5">
          <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
            About
          </div>
          <h1 className="mt-4 font-serif text-[clamp(2.75rem,7vw,4.5rem)] leading-[0.98] tracking-[-0.03em] text-fg">
            I test specs
            <br />
            for a living.
            <br />
            <em className="text-accent">Now I write them.</em>
          </h1>
        </div>

        <div className="lg:col-span-7 lg:pt-6">
          <div className="space-y-5 text-[clamp(1rem,1.1vw,1.125rem)] leading-[1.8] text-fg-muted">
            <p>
              For the last 18 months I have been the person who finds out what a
              requirement actually meant. At Cognizant I write the functional and
              regression scenarios that decide whether a release ships — which
              means I spend my days at the exact point where a product
              specification meets reality and either holds or does not.
            </p>
            <p>
              That turns out to be unusually good training for product
              management. Most people learn to write requirements by writing
              them. I learned by watching hundreds of them fail. A vague
              acceptance criterion does not look dangerous in a planning meeting.
              It looks dangerous three days into a sprint, when two people have
              built two different things and both of them can point at the ticket
              and say they were right.
            </p>
            <p>
              So when I moved into product work, I did not start from frameworks.
              I started from the thing I already knew: that the quality of a
              specification is measured by how few ways it can be read.
            </p>
            <p>
              My degree is in AI and Data Science, and my product work has been
              on AI products — most substantially{" "}
              <Link
                href="/work/sakhi-discovery"
                className="text-accent underline underline-offset-4 transition-opacity hover:opacity-75"
              >
                Sakhi
              </Link>
              , a PCOS health companion for low-literacy women in rural India.
              The technical background is not decoration there. Knowing what a
              RAG pipeline can and cannot promise is what kept the scope honest.
            </p>
          </div>

          <div className="mt-8 flex flex-wrap items-center gap-3">
            <Link
              href="/work"
              className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
            >
              See the work <ArrowRight className="size-3.5" />
            </Link>
            <Link
              href="/resume"
              className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-bg-subtle"
            >
              Resume
            </Link>
          </div>
        </div>
      </div>

      {/* How I work */}
      <section className="mt-24 border-t border-border pt-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-tight text-fg">
              How I work
            </h2>
          </div>
          <div className="lg:col-span-8">
            <dl className="grid gap-x-12 gap-y-8 sm:grid-cols-2">
              {[
                {
                  t: "Write it down, precisely",
                  d: "If a requirement can be read two ways, it will be. I write acceptance criteria that close the gap before an engineer has to guess at it.",
                },
                {
                  t: "Decide what not to build",
                  d: "Scope is defined by refusals. On Sakhi I cut four features outright and documented why for each — the cut list is the part of a spec I spend longest on.",
                },
                {
                  t: "Research before frameworks",
                  d: "RICE and MoSCoW organise a decision; they do not make one. The inputs come from talking to users, and the scores are only as good as that.",
                },
                {
                  t: "Know what the tech can promise",
                  d: "An AI product's constraints are real. Latency, hallucination, extraction accuracy — these belong in the spec, not in a post-mortem.",
                },
              ].map((p) => (
                <div key={p.t}>
                  <dt className="font-serif text-xl text-accent">{p.t}</dt>
                  <dd className="mt-2 leading-[1.75] text-fg-muted">{p.d}</dd>
                </div>
              ))}
            </dl>
          </div>
        </div>
      </section>

      {/* Timeline */}
      <section className="mt-24 border-t border-border pt-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-tight text-fg">
              Path
            </h2>
          </div>
          <div className="lg:col-span-8">
            {timeline.map((t, i) => (
              <FadeIn key={t.period} delay={i * 0.05}>
                <div className="border-t border-border py-7 first:border-t-0 first:pt-0">
                  <div className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                    {t.period}
                  </div>
                  <h3 className="mt-2 font-serif text-xl text-fg">{t.title}</h3>
                  <div className="mt-0.5 text-sm text-fg-faint">{t.org}</div>
                  <p className="mt-3 max-w-2xl leading-[1.75] text-fg-muted">
                    {t.body}
                  </p>
                </div>
              </FadeIn>
            ))}
          </div>
        </div>
      </section>

      {/* Skills */}
      <section className="mt-24 border-t border-border pt-12">
        <div className="grid gap-10 lg:grid-cols-12 lg:gap-16">
          <div className="lg:col-span-4">
            <h2 className="font-serif text-[clamp(2rem,3.5vw,2.75rem)] leading-[1.05] tracking-tight text-fg">
              Toolkit
            </h2>
          </div>
          <div className="grid gap-8 sm:grid-cols-2 lg:col-span-8">
            {skills.map((s) => (
              <div key={s.group}>
                <h3 className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                  {s.group}
                </h3>
                <ul className="mt-3 flex flex-wrap gap-2">
                  {s.items.map((i) => (
                    <li
                      key={i}
                      className="rounded-full border border-border bg-card px-3 py-1 text-sm text-fg-muted"
                    >
                      {i}
                    </li>
                  ))}
                </ul>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Contact */}
      <section className="mt-24 rounded-2xl border border-border bg-bg-subtle px-6 py-12 sm:px-10 sm:py-14">
        <h2 className="font-serif text-[clamp(2rem,4vw,3rem)] leading-[1.05] tracking-tight text-fg">
          Let&rsquo;s talk
        </h2>
        <p className="mt-4 max-w-xl leading-[1.75] text-fg-muted">
          I am based in {site.location.split(",").slice(-2).join(",").trim()} and
          open to product roles working on AI products. The fastest way to reach
          me is email.
        </p>
        <div className="mt-7 flex flex-wrap items-center gap-3">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <Mail className="size-3.5" /> {site.email}
          </a>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-card"
          >
            <LinkedinIcon className="size-3.5" /> LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-card"
          >
            <GithubIcon className="size-3.5" /> GitHub
          </a>
          <a
            href={site.resumePath}
            download
            className="inline-flex items-center gap-1.5 rounded-full border border-border px-5 py-2.5 text-sm font-medium text-fg transition-colors hover:bg-card"
          >
            <Download className="size-3.5" /> Resume
          </a>
        </div>
      </section>
    </div>
  );
}
