import type { Metadata } from "next";
import { ViewTransition } from "react";
import { Inter, Instrument_Serif, JetBrains_Mono } from "next/font/google";
import { SiteNav } from "@/components/site-nav";
import { SiteFooter } from "@/components/site-footer";
import { site } from "@/lib/site";
import "./globals.css";

const sans = Inter({ variable: "--font-sans-var", subsets: ["latin"] });
const mono = JetBrains_Mono({ variable: "--font-mono-var", subsets: ["latin"] });
const serif = Instrument_Serif({
  variable: "--font-serif-var",
  subsets: ["latin"],
  weight: "400",
  style: ["normal", "italic"],
});

export const metadata: Metadata = {
  metadataBase: new URL(site.url),
  title: {
    default: `${site.name} — ${site.role}`,
    template: `%s — ${site.name}`,
  },
  description: site.summary,
  openGraph: {
    title: `${site.name} — ${site.role}`,
    description: site.summary,
    url: site.url,
    siteName: site.name,
    type: "website",
  },
  twitter: { card: "summary_large_image" },
};

const themeScript = `
try {
  var t = localStorage.getItem('theme');
  var d = t ? t === 'dark' : window.matchMedia('(prefers-color-scheme: dark)').matches;
  if (d) document.documentElement.classList.add('dark');
} catch (e) {
  document.documentElement.classList.add('dark');
}
`;

export default function RootLayout({ children }: LayoutProps<"/">) {
  return (
    <html lang="en" className={`${sans.variable} ${mono.variable} ${serif.variable} h-full`} suppressHydrationWarning>
      <head>
        <script dangerouslySetInnerHTML={{ __html: themeScript }} />
      </head>
      <body className="flex min-h-full flex-col">
        <SiteNav />
        <main className="flex-1">
          <ViewTransition>{children}</ViewTransition>
        </main>
        <SiteFooter />
      </body>
    </html>
  );
}
