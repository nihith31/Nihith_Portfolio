import Link from "next/link";
import { Mail } from "lucide-react";
import { GithubIcon, LinkedinIcon } from "@/components/ui/brand-icons";
import { site } from "@/lib/site";

export async function SiteFooter() {
  "use cache";

  return (
    <footer className="mt-auto border-t border-border">
      <div className="mx-auto flex w-full max-w-7xl flex-col gap-4 px-5 py-10 text-sm text-fg-muted sm:flex-row sm:items-center sm:justify-between sm:px-8 lg:px-12">
        <p>
          © {new Date().getFullYear()} {site.name}. Built with Next.js.
        </p>
        <div className="flex items-center gap-4">
          <Link
            href={`mailto:${site.email}`}
            className="flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <Mail className="size-4" /> Email
          </Link>
          <Link
            href={site.linkedin}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <LinkedinIcon className="size-4" /> LinkedIn
          </Link>
          <Link
            href={site.github}
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-1.5 transition-colors hover:text-fg"
          >
            <GithubIcon className="size-4" /> GitHub
          </Link>
        </div>
      </div>
    </footer>
  );
}
