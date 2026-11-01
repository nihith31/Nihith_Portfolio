import fs from "node:fs";
import path from "node:path";
import matter from "gray-matter";

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

export function getAllCaseStudies(): CaseStudy[] {
  return getCaseStudySlugs()
    .map(getCaseStudy)
    .filter((c): c is CaseStudy => c !== null)
    .sort((a, b) => a.order - b.order);
}
