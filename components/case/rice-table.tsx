"use client";

import { useMemo, useState } from "react";
import { ArrowUpDown } from "lucide-react";
import { cn } from "@/lib/utils";

export type RiceRow = {
  feature: string;
  reach: number;
  impact: number;
  confidence: number;
  effort: number;
  verdict?: string;
};

type Key = "feature" | "reach" | "impact" | "confidence" | "effort" | "score";

const score = (r: RiceRow) => (r.reach * r.impact * (r.confidence / 100)) / r.effort;

export function RiceTable({ rows }: { rows: RiceRow[] }) {
  const [sort, setSort] = useState<Key>("score");
  const [asc, setAsc] = useState(false);

  const sorted = useMemo(() => {
    const copy = [...rows];
    copy.sort((a, b) => {
      const av = sort === "score" ? score(a) : a[sort];
      const bv = sort === "score" ? score(b) : b[sort];
      if (typeof av === "string" && typeof bv === "string") {
        return asc ? av.localeCompare(bv) : bv.localeCompare(av);
      }
      return asc ? Number(av) - Number(bv) : Number(bv) - Number(av);
    });
    return copy;
  }, [rows, sort, asc]);

  const max = Math.max(...rows.map(score));

  function head(key: Key, label: string, align: "left" | "right" = "right") {
    return (
      <th
        scope="col"
        className={cn(
          "px-3 py-2.5 font-medium",
          align === "left" ? "text-left" : "text-right",
        )}
      >
        <button
          onClick={() => {
            if (sort === key) setAsc(!asc);
            else {
              setSort(key);
              setAsc(false);
            }
          }}
          className={cn(
            "inline-flex items-center gap-1 transition-colors hover:text-fg",
            sort === key ? "text-fg" : "text-fg-muted",
          )}
        >
          {label}
          <ArrowUpDown className="size-3 opacity-50" />
        </button>
      </th>
    );
  }

  return (
    <figure className="my-8">
      <div className="overflow-x-auto rounded-lg border border-border bg-card">
        <table className="w-full min-w-[640px] text-sm">
          <thead className="border-b border-border bg-bg-subtle text-xs uppercase tracking-wide">
            <tr>
              {head("feature", "Feature", "left")}
              {head("reach", "Reach")}
              {head("impact", "Impact")}
              {head("confidence", "Confidence")}
              {head("effort", "Effort")}
              {head("score", "RICE")}
            </tr>
          </thead>
          <tbody>
            {sorted.map((r) => {
              const s = score(r);
              return (
                <tr key={r.feature} className="border-b border-border last:border-0">
                  <td className="px-3 py-3">
                    <div className="font-medium text-fg">{r.feature}</div>
                    {r.verdict && (
                      <div className="mt-0.5 text-xs text-fg-faint">{r.verdict}</div>
                    )}
                  </td>
                  <td className="px-3 py-3 text-right font-mono text-fg-muted">{r.reach}/10</td>
                  <td className="px-3 py-3 text-right font-mono text-fg-muted">{r.impact}/10</td>
                  <td className="px-3 py-3 text-right font-mono text-fg-muted">{r.confidence}%</td>
                  <td className="px-3 py-3 text-right font-mono text-fg-muted">{r.effort}</td>
                  <td className="px-3 py-3">
                    <div className="flex items-center justify-end gap-2">
                      <div className="h-1.5 w-16 overflow-hidden rounded-full bg-bg-subtle">
                        <div
                          className="h-full rounded-full bg-accent"
                          style={{ width: `${(s / max) * 100}%` }}
                        />
                      </div>
                      <span className="w-12 text-right font-mono font-semibold text-fg">
                        {s.toFixed(1)}
                      </span>
                    </div>
                  </td>
                </tr>
              );
            })}
          </tbody>
        </table>
      </div>
      <figcaption className="mt-2 text-xs text-fg-faint">
        RICE = (Reach × Impact × Confidence) ÷ Effort. Click any column to re-sort.
      </figcaption>
    </figure>
  );
}
