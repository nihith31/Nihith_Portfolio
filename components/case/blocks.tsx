import { cn } from "@/lib/utils";
import { AlertTriangle, Check, Info, Quote, X } from "lucide-react";

export function MetricGrid({ children }: { children: React.ReactNode }) {
  return (
    <div className="my-8 grid grid-cols-1 gap-3 sm:grid-cols-3">{children}</div>
  );
}

export function Metric({
  value,
  label,
  note,
}: {
  value: string;
  label: string;
  note?: string;
}) {
  return (
    <div className="rounded-lg border border-border border-t-2 border-t-accent bg-card p-5">
      <div className="font-mono text-2xl font-semibold tracking-tight text-fg">
        {value}
      </div>
      <div className="mt-1 text-sm font-medium text-fg">{label}</div>
      {note && <div className="mt-1.5 text-xs leading-relaxed text-fg-faint">{note}</div>}
    </div>
  );
}

const calloutStyles = {
  note: { icon: Info, cls: "border-border bg-bg-subtle", iconCls: "text-fg-muted" },
  insight: { icon: Check, cls: "border-accent/30 bg-accent-subtle", iconCls: "text-accent" },
  warning: { icon: AlertTriangle, cls: "border-amber-500/30 bg-amber-500/5", iconCls: "text-amber-600 dark:text-amber-500" },
} as const;

export function Callout({
  type = "note",
  title,
  children,
}: {
  type?: keyof typeof calloutStyles;
  title?: string;
  children: React.ReactNode;
}) {
  const { icon: Icon, cls, iconCls } = calloutStyles[type];
  return (
    <div className={cn("my-6 flex gap-3 rounded-lg border p-4", cls)}>
      <Icon className={cn("mt-0.5 size-4 shrink-0", iconCls)} />
      <div className="min-w-0 flex-1 text-sm leading-relaxed text-fg-muted [&>p]:my-0 [&>p+p]:mt-2">
        {title && <div className="mb-1 font-semibold text-fg">{title}</div>}
        {children}
      </div>
    </div>
  );
}

export function Pull({ children, cite }: { children: React.ReactNode; cite?: string }) {
  return (
    <figure className="my-8 border-l-2 border-accent pl-5">
      <Quote className="mb-2 size-4 text-accent" />
      <blockquote className="text-lg font-medium leading-relaxed text-fg">
        {children}
      </blockquote>
      {cite && (
        <figcaption className="mt-2 text-sm text-fg-faint">— {cite}</figcaption>
      )}
    </figure>
  );
}

export function Section({
  eyebrow,
  children,
}: {
  eyebrow: string;
  children: React.ReactNode;
}) {
  return (
    <section className="my-12 first:mt-0">
      <div className="mb-3 font-mono text-xs uppercase tracking-widest text-accent">
        {eyebrow}
      </div>
      {children}
    </section>
  );
}

export function DecisionCard({
  decision,
  rationale,
  tradeoff,
}: {
  decision: string;
  rationale: string;
  tradeoff: string;
}) {
  return (
    <div className="my-6 overflow-hidden rounded-lg border border-border bg-card">
      <div className="border-b border-border px-5 py-3">
        <div className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
          Decision
        </div>
        <div className="mt-0.5 font-medium text-fg">{decision}</div>
      </div>
      <div className="grid gap-px bg-border sm:grid-cols-2">
        <div className="bg-card p-5">
          <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-fg">
            <Check className="size-3.5 text-accent" /> Why
          </div>
          <p className="text-sm leading-relaxed text-fg-muted">{rationale}</p>
        </div>
        <div className="bg-card p-5">
          <div className="mb-1.5 flex items-center gap-1.5 text-xs font-semibold text-fg">
            <X className="size-3.5 text-fg-faint" /> What it cost
          </div>
          <p className="text-sm leading-relaxed text-fg-muted">{tradeoff}</p>
        </div>
      </div>
    </div>
  );
}

export function Persona({
  name,
  profile,
  need,
  quote,
}: {
  name: string;
  profile: string;
  need: string;
  quote?: string;
}) {
  return (
    <div className="rounded-lg border border-border bg-card p-5">
      <div className="font-serif text-xl text-accent">{name}</div>
      <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">{profile}</p>
      {quote && (
        <p className="mt-3 border-l-2 border-accent/40 pl-3 text-sm italic leading-relaxed text-fg-muted">
          “{quote}”
        </p>
      )}
      <div className="mt-3 border-t border-border pt-3">
        <div className="font-mono text-[11px] uppercase tracking-widest text-fg-faint">
          Core need
        </div>
        <p className="mt-1 text-sm leading-relaxed text-fg">{need}</p>
      </div>
    </div>
  );
}

export function Grid({ cols = "2", children }: { cols?: "2" | "3"; children: React.ReactNode }) {
  return (
    <div
      className={cn(
        "my-6 grid gap-3",
        cols === "3" ? "sm:grid-cols-3" : "sm:grid-cols-2",
      )}
    >
      {children}
    </div>
  );
}
