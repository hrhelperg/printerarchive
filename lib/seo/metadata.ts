import type { Metadata } from "next";
import { site } from "@/lib/site";

interface MetaOpts {
  title: string;
  description: string;
  path: string; // e.g. "/guides/how-laser-printers-work"
  type?: "website" | "article";
  published?: string;
  modified?: string;
  keywords?: string[];
}

export function buildMetadata(o: MetaOpts): Metadata {
  const url = `${site.url}${o.path === "/" ? "" : o.path}`;
  const fullTitle =
    o.path === "/" ? `${site.name} — ${site.tagline}` : `${o.title} — ${site.name}`;
  return {
    title: fullTitle,
    description: o.description,
    keywords: o.keywords,
    alternates: { canonical: url },
    openGraph: {
      title: fullTitle,
      description: o.description,
      url,
      siteName: site.name,
      type: o.type ?? "website",
      locale: "en_US",
      ...(o.published
        ? { publishedTime: o.published, modifiedTime: o.modified }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: o.description,
    },
    robots: { index: true, follow: true },
  };
}
