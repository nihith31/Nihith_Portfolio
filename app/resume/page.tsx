import type { Metadata } from "next";
import Link from "next/link";
import { Download, ExternalLink, Mail, MapPin, Phone } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { sakhi, site } from "@/lib/site";

export const metadata: Metadata = {
  title: "Resume",
  description:
    "Nihith Konakalla — product management, AI products. Experience, education, skills and projects.",
};

const experience = [
  {
    role: "Programmer Analyst · Automation Test Engineer",
    org: "Cognizant Technology Solutions",
    period: "Jul 2024 — present",
    note: "Joined as Programmer Analyst Trainee; progressed to Programmer Analyst / Automation Test Engineer in September 2025.",
    bullets: [
      "Designed and executed functional and regression test scenarios for web applications, validating product workflows and improving release quality.",
      "Translated application requirements and business workflows into structured test scenarios and acceptance-oriented validation.",
      "Collaborated with developers and QA in an Agile/Scrum environment to identify, prioritise, track and resolve product defects.",
      "Applied AI-assisted tooling and prompt engineering to accelerate test-case creation and automation script development.",
    ],
  },
];

const projects = [
  {
    name: "Sakhi AI",
    tag: "AI-powered PCOS health companion",
    href: "/work",
    site: sakhi.url,
    bullets: [
      "Identified gaps in PCOS self-management for a potential user population of ~42 million Indian women; ran empathy interviews, built personas, and applied Design Thinking, SCAMPER and ERRC to prioritise needs.",
      "Defined the CVP, target users, problem statement, solution and Lean Canvas to establish product strategy.",
      "Wrote the PRD and translated validated needs into 43 prioritised user stories across the module set, defining MVP scope on user value, impact and feasibility.",
      "Applied RICE at feature level and MoSCoW at module level to decide what entered the MVP — and documented four features cut outright, with reasoning.",
      "Specified an MVP using Generative and Agentic AI: a multilingual PCOS chatbot across English, Hindi and Telugu, symptom tracking, lab report analysis and regional meal planning.",
    ],
  },
  {
    name: "Insurance Policy Management Automation Framework",
    tag: "Cognizant",
    bullets: [
      "Worked across policy lifecycle workflows covering policy creation, customer onboarding and renewals.",
      "Analysed business workflows and translated them into structured validation scenarios for critical product journeys.",
      "Built a reusable Selenium WebDriver framework in Java using TestNG and the Page Object Model, improving release confidence.",
    ],
  },
];

const skillGroups = [
  {
    group: "Product Management",
    items:
      "Product discovery, market research, product strategy, requirements analysis, prioritisation, product metrics",
  },
  {
    group: "AI & Generative AI",
    items:
      "Generative AI, Agentic AI, prompt engineering, AI-assisted prototype development",
  },
  {
    group: "Agile & Delivery",
    items:
      "Agile/Scrum, sprint planning, backlog management, cross-functional collaboration, Jira",
  },
  {
    group: "Engineering & Data",
    items: "SQL, Python, Java, Selenium WebDriver, TestNG, Git",
  },
];

export default function ResumePage() {
  return (
    <div className="mx-auto w-full max-w-4xl px-5 pb-24 pt-8 sm:px-8 sm:pt-12 lg:pt-14">
      {/* Header */}
      <header className="border-b border-border pb-8">
        <div className="flex flex-wrap items-end justify-between gap-6">
          <div>
            <div className="font-mono text-[11px] uppercase tracking-[0.2em] text-accent">
              {site.role}
            </div>
            <h1 className="mt-3 font-serif text-[clamp(2.5rem,6vw,3.75rem)] leading-[1.0] tracking-[-0.03em] text-fg">
              Nihith Konakalla
            </h1>
          </div>
          <a
            href={site.resumePath}
            download
            className="inline-flex items-center gap-1.5 rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-accent-fg transition-opacity hover:opacity-90"
          >
            <Download className="size-3.5" /> Download PDF
          </a>
        </div>

        <div className="mt-6 flex flex-wrap gap-x-6 gap-y-2 text-sm text-fg-muted">
          <a
            href={`mailto:${site.email}`}
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <Mail className="size-3.5" /> {site.email}
          </a>
          <span className="inline-flex items-center gap-1.5">
            <Phone className="size-3.5" /> {site.phone}
          </span>
          <span className="inline-flex items-center gap-1.5">
            <MapPin className="size-3.5" /> {site.location}
          </span>
          <a
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <LinkedinIcon className="size-3.5" /> LinkedIn
          </a>
          <a
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-1.5 transition-colors hover:text-accent"
          >
            <GithubIcon className="size-3.5" /> GitHub
          </a>
        </div>
      </header>

      {/* Summary */}
      <Section title="Summary">
        <p className="max-w-3xl text-[1.0625rem] leading-[1.8] text-fg-muted">
          Product-focused technologist with 18 months in software quality and
          automation, where I translate business workflows into precise,
          testable requirements. I ran an AI health product end to end — empathy
          research, PRD, a 43-story backlog and launch strategy — and pair that
          with an AI &amp; Data Science degree, so the technical constraints of
          AI products are something I can scope against rather than discover
          late.
        </p>
      </Section>

      {/* Experience */}
      <Section title="Experience">
        {experience.map((e) => (
          <div key={e.role}>
            <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
              <h3 className="font-serif text-xl text-fg">{e.role}</h3>
              <span className="font-mono text-xs text-fg-faint">{e.period}</span>
            </div>
            <div className="mt-0.5 text-sm text-accent">{e.org}</div>
            <p className="mt-2 text-sm leading-relaxed text-fg-faint">{e.note}</p>
            <ul className="mt-4 space-y-2.5">
              {e.bullets.map((b) => (
                <Bullet key={b}>{b}</Bullet>
              ))}
            </ul>
          </div>
        ))}
      </Section>

      {/* Projects */}
      <Section title="Projects">
        <div className="space-y-10">
          {projects.map((p) => (
            <div key={p.name}>
              <div className="flex flex-wrap items-baseline gap-x-3">
                <h3 className="font-serif text-xl text-fg">
                  {p.href ? (
                    <Link
                      href={p.href}
                      className="underline decoration-border underline-offset-4 transition-colors hover:text-accent hover:decoration-accent"
                    >
                      {p.name}
                    </Link>
                  ) : (
                    p.name
                  )}
                </h3>
                <span className="text-sm text-fg-faint">{p.tag}</span>
                {p.site && (
                  <a
                    href={p.site}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="inline-flex items-center gap-1 text-sm text-accent underline underline-offset-4 transition-opacity hover:opacity-75"
                  >
                    {sakhi.label} <ExternalLink className="size-3" />
                  </a>
                )}
              </div>
              <ul className="mt-4 space-y-2.5">
                {p.bullets.map((b) => (
                  <Bullet key={b}>{b}</Bullet>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Skills */}
      <Section title="Skills">
        <dl className="grid gap-6 sm:grid-cols-2">
          {skillGroups.map((s) => (
            <div key={s.group}>
              <dt className="font-mono text-[11px] uppercase tracking-[0.16em] text-accent">
                {s.group}
              </dt>
              <dd className="mt-2 leading-relaxed text-fg-muted">{s.items}</dd>
            </div>
          ))}
        </dl>
      </Section>

      {/* Education */}
      <Section title="Education & certification">
        <div className="space-y-6">
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <div>
              <h3 className="font-serif text-xl text-fg">
                B.Tech, Artificial Intelligence &amp; Data Science
              </h3>
              <div className="mt-0.5 text-sm text-accent">
                Vishnu Institute of Technology
              </div>
            </div>
            <span className="font-mono text-xs text-fg-faint">2020 — 2024</span>
          </div>
          <div className="flex flex-wrap items-baseline justify-between gap-x-6 gap-y-1">
            <div>
              <h3 className="font-serif text-xl text-fg">
                Product Management with Generative &amp; Agentic AI
              </h3>
              <div className="mt-0.5 text-sm text-accent">
                Masai X BITSoM CEPD
              </div>
            </div>
          </div>
        </div>
      </Section>
    </div>
  );
}

function Section({
  title,
  children,
}: {
  title: string;
  children: React.ReactNode;
}) {
  return (
    <section className="mt-12 border-t border-border pt-8 first:border-t-0">
      <h2 className="mb-5 font-mono text-[11px] uppercase tracking-[0.2em] text-fg-faint">
        {title}
      </h2>
      {children}
    </section>
  );
}

function Bullet({ children }: { children: React.ReactNode }) {
  return (
    <li className="flex gap-3 leading-[1.75] text-fg-muted">
      <span
        aria-hidden="true"
        className="mt-[0.6em] size-1 shrink-0 rounded-full bg-accent"
      />
      <span className="min-w-0">{children}</span>
    </li>
  );
}
