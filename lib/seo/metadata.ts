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

// Brand Open Graph image, generated at build time by app/opengraph-image.tsx
// and served at this stable route. The home page wires this automatically via
// the opengraph-image / twitter-image file convention; every page built
// through buildMetadata references it here so that any shared URL — section
// hub, article, or institutional page — carries the brand card.
const OG_IMAGE = `${site.url}/opengraph-image`;
const OG_ALT = "PrinterArchive — The archive of printing knowledge";

export function buildMetadata(o: MetaOpts): Metadata {
  const url = `${site.url}${o.path === "/" ? "" : o.path}`;
  const fullTitle =
    o.path === "/" ? `${site.name} — ${site.tagline}` : `${o.title} — ${site.name}`;
  return {
    // Absolute bypasses the root layout title.template so the site name
    // is not appended twice (fullTitle already includes it).
    title: { absolute: fullTitle },
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
      images: [{ url: OG_IMAGE, width: 1200, height: 630, alt: OG_ALT }],
      ...(o.published
        ? { publishedTime: o.published, modifiedTime: o.modified }
        : {}),
    },
    twitter: {
      card: "summary_large_image",
      title: fullTitle,
      description: o.description,
      images: [OG_IMAGE],
    },
    robots: { index: true, follow: true },
  };
}
