import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";
import { slugify } from "@/lib/slug";

const WORK_DIR = path.join(process.cwd(), "content", "work");

export type CaseStudyMeta = {
  slug: string;
  title: string;
  subtitle: string;
  summary: string;
  project: string;
  role: string;
  timeline: string;
  discipline: string;
  order: number;
  featured: boolean;
  skills: string[];
  metrics: { label: string; value: string; note?: string }[];
};

export type CaseStudy = CaseStudyMeta & { body: string };

export function getCaseStudySlugs(): string[] {
  if (!fs.existsSync(WORK_DIR)) return [];
  return fs
    .readdirSync(WORK_DIR)
    .filter((f) => f.endsWith(".mdx"))
    .map((f) => f.replace(/\.mdx$/, ""));
}

export function getCaseStudy(slug: string): CaseStudy | null {
  const file = path.join(WORK_DIR, `${slug}.mdx`);
  if (!fs.existsSync(file)) return null;
  const { data, content } = matter(fs.readFileSync(file, "utf8"));
  return {
    slug,
    title: data.title ?? slug,
    subtitle: data.subtitle ?? "",
    summary: data.summary ?? "",
    project: data.project ?? "",
    role: data.role ?? "",
    timeline: data.timeline ?? "",
    discipline: data.discipline ?? "",
    order: data.order ?? 99,
    featured: data.featured ?? false,
    skills: data.skills ?? [],
    metrics: data.metrics ?? [],
    body: content,
  };
}

export type Heading = { id: string; text: string };

/**
 * Pulls the `##` headings out of MDX source for the table of contents.
 * Slugs come from the shared slugify helper, which the h2 renderer also
 * uses, so the ids match the rendered anchors. Fenced code blocks are skipped.
 */
export function getHeadings(body: string): Heading[] {
  const out: Heading[] = [];
  let inFence = false;

  for (const line of body.split("\n")) {
    if (/^\s*(```|~~~)/.test(line)) {
      inFence = !inFence;
      continue;
    }
    if (inFence) continue;

    const m = /^##\s+(.+?)\s*$/.exec(line);
    if (!m) continue;

    // strip inline markdown so the TOC shows plain text
    const text = m[1]
      .replace(/`([^`]+)`/g, "$1")
      .replace(/\*\*([^*]+)\*\*/g, "$1")
      .replace(/\*([^*]+)\*/g, "$1")
      .replace(/\[([^\]]+)\]\([^)]*\)/g, "$1")
      .trim();

    out.push({ id: slugify(text), text });
  }
  return out;
}

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudySlugs()
    .map(getCaseStudy)
    .filter((c): c is CaseStudy => c !== null)
    .sort((a, b) => a.order - b.order);
}
