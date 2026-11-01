import type { RiceRow } from "@/components/case/rice-table";
import type { MoscowItem } from "@/components/case/moscow";

/**
 * Structured case-study datasets, keyed so MDX can reference them by name:
 *   <RiceTable data="sakhi" />
 *
 * MDX passes string attributes through reliably; expression attributes are not
 * forwarded by next-mdx-remote, so keep datasets here rather than inline.
 */

export const riceData: Record<string, RiceRow[]> = {
  sakhi: [
    {
      feature: "Budget meal filter",
      reach: 7,
      impact: 9,
      confidence: 90,
      effort: 1,
      verdict: "Cheapest high-value feature in the set",
    },
    {
      feature: "Red-flag symptom detection",
      reach: 10,
      impact: 10,
      confidence: 80,
      effort: 2,
      verdict: "Safety-critical — ships regardless of score",
    },
    {
      feature: "Period prediction",
      reach: 9,
      impact: 8,
      confidence: 85,
      effort: 2,
      verdict: "Core tracker value",
    },
    {
      feature: "Voice input, Hindi and English",
      reach: 8,
      impact: 10,
      confidence: 90,
      effort: 3,
      verdict: "The zero-literacy unlock",
    },
    {
      feature: "Lab OCR extraction",
      reach: 6,
      impact: 10,
      confidence: 70,
      effort: 8,
      verdict: "Highest effort, lowest confidence — deferred",
    },
  ],
};

export const moscowData: Record<string, MoscowItem[]> = {
  sakhi: [
    {
      tier: "Must",
      feature: "AI Chatbot (Sakhi Bot)",
      rationale:
        "The core companion. Jargon-free health answers that dismantle confusion and stigma. Without this there is no product.",
    },
    {
      tier: "Must",
      feature: "Visual Symptom Tracker",
      rationale:
        "Icon-tap logging on a 1–5 scale, offline-queued via AsyncStorage. Also the data source every other module personalises against.",
    },
    {
      tier: "Should",
      feature: "Region-Aware Meal Planner",
      rationale:
        "7-day PCOS plans using ragi, jowar and dal with swap options. High daily utility, but depends on tracker data to personalise well.",
    },
    {
      tier: "Should",
      feature: "Lab Report Analyzer",
      rationale:
        "Photo OCR translating blood markers into plain-language status labels. Requires a medical validation pipeline that does not exist yet.",
    },
    {
      tier: "Could",
      feature: "Third-Party Care Booking",
      rationale:
        "Low-cost consultations or home sample collection through partner labs. Valuable, but assumes financial access many target users do not have.",
    },
    {
      tier: "Won't",
      feature: "Community Peer Forums",
      rationale:
        "Deferred on safety grounds. Heavy moderation needs, and public menstrual health discussion carries severe stigma for exactly this user group.",
    },
  ],
};
