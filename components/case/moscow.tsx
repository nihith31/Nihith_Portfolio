import { cn } from "@/lib/utils";

export type MoscowItem = {
  tier: "Must" | "Should" | "Could" | "Won't";
  feature: string;
  rationale: string;
};

const tierStyle: Record<MoscowItem["tier"], string> = {
  Must: "border-accent/40 bg-accent-subtle",
  Should: "border-border bg-card",
  Could: "border-border bg-card",
  "Won't": "border-border bg-bg-subtle opacity-75",
};

const tierLabel: Record<MoscowItem["tier"], string> = {
  Must: "Must have — MVP",
  Should: "Should have — Phase 2",
  Could: "Could have — Phase 3",
  "Won't": "Won't have — cut",
};

export function MoscowBoardView({ items }: { items: MoscowItem[] }) {
  const tiers: MoscowItem["tier"][] = ["Must", "Should", "Could", "Won't"];
  return (
    <div className="my-8 space-y-5">
      {tiers.map((tier) => {
        const group = items.filter((i) => i.tier === tier);
        if (!group.length) return null;
        return (
          <div key={tier}>
            <div className="mb-2 flex items-baseline gap-2">
              <h4 className="font-mono text-xs uppercase tracking-widest text-fg">
                {tierLabel[tier]}
              </h4>
              <span className="text-xs text-fg-faint">{group.length}</span>
            </div>
            <div className="grid gap-2 sm:grid-cols-2">
              {group.map((i) => (
                <div
                  key={i.feature}
                  className={cn("rounded-lg border p-4", tierStyle[tier])}
                >
                  <div
                    className={cn(
                      "text-sm font-medium text-fg",
                      tier === "Won't" && "line-through decoration-fg-faint",
                    )}
                  >
                    {i.feature}
                  </div>
                  <p className="mt-1.5 text-sm leading-relaxed text-fg-muted">
                    {i.rationale}
                  </p>
                </div>
              ))}
            </div>
          </div>
        );
      })}
    </div>
  );
}
