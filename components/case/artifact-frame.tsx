import { ExternalLink } from "lucide-react";

export function ArtifactFrame({
  src,
  title,
  caption,
  height = 640,
}: {
  src: string;
  title: string;
  caption?: string;
  height?: number;
}) {
  return (
    <figure className="my-8">
      <div className="overflow-hidden rounded-lg border border-border bg-card">
        <div className="flex items-center justify-between border-b border-border bg-bg-subtle px-4 py-2">
          <span className="font-mono text-xs uppercase tracking-widest text-fg-muted">
            {title}
          </span>
          <a
            href={src}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1 text-xs text-fg-muted transition-colors hover:text-fg"
          >
            Open <ExternalLink className="size-3" />
          </a>
        </div>
        <iframe
          src={src}
          title={title}
          loading="lazy"
          sandbox="allow-scripts allow-same-origin"
          style={{ height }}
          className="w-full bg-white"
        />
      </div>
      {caption && (
        <figcaption className="mt-2 text-xs text-fg-faint">{caption}</figcaption>
      )}
    </figure>
  );
}
