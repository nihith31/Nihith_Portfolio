/**
 * Anchor ids for case study headings.
 *
 * Used in two places that must agree: the table of contents built from MDX
 * source, and the `h2` renderer that stamps the id onto the element. It lives
 * here rather than coming from rehype-slug because that plugin does not reach
 * headings nested inside JSX components, which is where all of ours sit.
 */
export function slugify(text: string): string {
  return text
    .toLowerCase()
    .normalize("NFKD")
    .replace(/[̀-ͯ]/g, "")
    .replace(/[^a-z0-9\s-]/g, "")
    .trim()
    .replace(/\s+/g, "-")
    .replace(/-+/g, "-");
}

/** Flattens React children to plain text so a heading can be slugged. */
export function nodeText(node: React.ReactNode): string {
  if (node === null || node === undefined || typeof node === "boolean") return "";
  if (typeof node === "string" || typeof node === "number") return String(node);
  if (Array.isArray(node)) return node.map(nodeText).join("");
  if (typeof node === "object" && "props" in node) {
    return nodeText((node.props as { children?: React.ReactNode }).children);
  }
  return "";
}
