import { riceData, moscowData } from "@/lib/case-data";
import { RiceTableClient } from "@/components/case/rice-table";
import { MoscowBoardView } from "@/components/case/moscow";

/**
 * Server wrappers that let MDX pull a dataset by name with a plain string
 * attribute, which is the only prop shape MDX forwards reliably.
 */

export function RiceTable({ data }: { data: string }) {
  const rows = riceData[data];
  if (!rows) return null;
  return <RiceTableClient rows={rows} />;
}

export function MoscowBoard({ data }: { data: string }) {
  const items = moscowData[data];
  if (!items) return null;
  return <MoscowBoardView items={items} />;
}
