import { site } from "@/lib/site";
import type { ContentEntry } from "@/lib/content/types";

export const organizationSchema = () => ({
  "@context": "https://schema.org",
  "@type": "Organization",
  name: site.name,
  url: site.url,
  legalName: site.publisher.name,
  publisher: { "@type": "Organization", name: site.publisher.name },
  email: site.publisher.email,
});

export const websiteSchema = () => ({
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: site.name,
  url: site.url,
  description: site.description,
});

export const articleSchema = (e: ContentEntry) => ({
  "@context": "https://schema.org",
  "@type": "Article",
  headline: e.title,
  description: e.description,
  datePublished: e.published,
  dateModified: e.updated,
  author: { "@type": "Organization", name: e.author },
  editor: e.editor,
  publisher: { "@type": "Organization", name: site.publisher.name },
  mainEntityOfPage: `${site.url}/${e.section}/${e.slug}`,
  keywords: e.keywords.join(", "),
});

export const breadcrumbSchema = (items: { name: string; href: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "BreadcrumbList",
  itemListElement: items.map((it, i) => ({
    "@type": "ListItem",
    position: i + 1,
    name: it.name,
    item: `${site.url}${it.href === "/" ? "" : it.href}`,
  })),
});

export const faqSchema = (faqs: { q: string; a: string }[]) => ({
  "@context": "https://schema.org",
  "@type": "FAQPage",
  mainEntity: faqs.map((f) => ({
    "@type": "Question",
    name: f.q,
    acceptedAnswer: { "@type": "Answer", text: f.a },
  })),
});
