import { site } from "@/lib/site";
import type { BlogEntry, ContentEntry } from "@/lib/content/types";

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
  ...(e.hero ? { image: `${site.url}${e.hero.src}` } : {}),
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

/** Canonical URL of an editorial post. */
export const blogPostUrl = (post: BlogEntry) =>
  `${site.url}/blog/${post.slug}`;

/**
 * BlogPosting for an editorial article. The Blog route emits this INSTEAD of
 * `articleSchema`, never alongside it, so a post carries exactly one Article-family
 * node. `image` is included only when the page actually shows a real, credited
 * image — the hero if present, otherwise the first figure in the body.
 */
export const blogPostingSchema = (post: BlogEntry) => {
  const firstFigure = post.body.find((b) => b.kind === "figure");
  const image =
    post.hero?.src ??
    (firstFigure && firstFigure.kind === "figure"
      ? firstFigure.image.src
      : undefined);
  return {
    "@context": "https://schema.org",
    "@type": "BlogPosting",
    headline: post.title,
    description: post.description,
    datePublished: post.published,
    dateModified: post.updated,
    author: { "@type": "Organization", name: post.author },
    editor: post.editor,
    publisher: { "@type": "Organization", name: site.publisher.name },
    mainEntityOfPage: blogPostUrl(post),
    articleSection: post.category,
    keywords: post.keywords.join(", "),
    ...(image ? { image: `${site.url}${image}` } : {}),
  };
};

/** The Blog hub as a Blog collection listing its posts. */
export const blogSchema = (posts: BlogEntry[], name: string, description: string) => ({
  "@context": "https://schema.org",
  "@type": "Blog",
  name,
  description,
  url: `${site.url}/blog`,
  publisher: { "@type": "Organization", name: site.publisher.name },
  blogPost: posts.map((p) => ({
    "@type": "BlogPosting",
    headline: p.title,
    description: p.description,
    datePublished: p.published,
    dateModified: p.updated,
    url: blogPostUrl(p),
  })),
});
