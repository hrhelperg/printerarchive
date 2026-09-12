import type { Metadata } from "next";
import Link from "next/link";
import Image from "next/image";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  BLOG,
  getPosts,
  getFeaturedPost,
  getBlogBreadcrumbs,
  readingMinutes,
} from "@/lib/blog/queries";
import { getEntry } from "@/lib/content/queries";
import type { ArchiveImage, BlogEntry, ContentBlock } from "@/lib/content/types";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, blogSchema } from "@/lib/seo/schema";

/**
 * Editorial territories the journal covers.
 *
 * These are NOT placeholder article cards. Each one names a subject the
 * journal writes about and sends the reader to the encyclopedia section that
 * already holds the underlying reference material — so the page is useful
 * today, and gains posts without changing shape.
 */
const THEMES: { title: string; note: string; href: string; hub: string }[] = [
  {
    title: "Printing & publishing",
    note: "How pages get made, and what each production model displaced.",
    href: "/history",
    hub: "Printing history",
  },
  {
    title: "Document systems",
    note: "Capture, indexing, retrieval and retention as designed processes.",
    href: "/workflows",
    hub: "Document workflows",
  },
  {
    title: "Historical transitions",
    note: "The moments a technology stopped being infrastructure.",
    href: "/fax",
    hub: "Fax technology",
  },
  {
    title: "Modern workflows",
    note: "Formats, protocols and standards documents actually travel on.",
    href: "/tools",
    hub: "Tools & formats",
  },
];

/** Encyclopedia entries that pair with the journal's current subject matter. */
const FROM_ARCHIVE: { section: "history" | "guides" | "tools"; slug: string }[] = [
  { section: "history", slug: "history-of-desktop-publishing" },
  { section: "history", slug: "enterprise-document-management" },
  { section: "guides", slug: "optical-character-recognition" },
  { section: "tools", slug: "what-is-pdf" },
  { section: "history", slug: "paperless-office-prediction" },
  { section: "guides", slug: "digital-preservation" },
];

export function blogHubMetadata(): Metadata {
  return buildMetadata({
    title: BLOG.title,
    description: BLOG.description,
    path: BLOG.path,
  });
}

export function BlogHub() {
  const posts = getPosts();
  const featured = getFeaturedPost();
  const rest = posts.filter((p) => p.slug !== featured?.slug);
  const crumbs = getBlogBreadcrumbs();
  const archive = FROM_ARCHIVE.map((r) => getEntry(r.section, r.slug)).flatMap(
    (e) => (e ? [e] : []),
  );

  return (
    <>
      <JsonLd
        data={[
          blogSchema(posts, BLOG.title, BLOG.description),
          breadcrumbSchema(crumbs),
        ]}
      />

      {/* Masthead. No image plate: the journal's identity is typographic, and
          the previous motif tile floated in an empty column. */}
      <div className="border-b border-rule bg-paper-raised">
        <Container width="wide" className="pt-6">
          <Breadcrumbs items={crumbs} />
        </Container>
        <Container width="wide" className="pb-12 pt-8 lg:pb-14">
          <p className="kicker-accent">Blog / Journal</p>
          <h1 className="mt-4 max-w-[16ch] text-display text-balance">
            PrinterArchive Blog
          </h1>
          <p className="mt-6 max-w-2xl standfirst text-pretty">{BLOG.lede}</p>
          <p className="mt-7 flex flex-wrap items-center gap-x-3 gap-y-1 meta-line">
            <span>
              {posts.length} {posts.length === 1 ? "story" : "stories"}
            </span>
            <span aria-hidden>·</span>
            <span>Essays, not encyclopedia entries</span>
            <span aria-hidden>·</span>
            <span>Every claim cited</span>
          </p>
        </Container>
      </div>

      {featured ? <FeaturedStory post={featured} /> : null}

      {rest.length > 0 ? (
        <Container width="wide" className="py-[var(--band)]">
          <p className="kicker">More stories</p>
          <ul className="mt-6">
            {rest.map((post) => (
              <li key={post.slug}>
                <Link href={`${BLOG.path}/${post.slug}`} className="editorial-row group">
                  <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                    <span className="tech-label min-w-[9rem]">{post.category}</span>
                    <span className="flex-1 font-sans text-base font-semibold text-ink-display group-hover:text-accent">
                      {post.title}
                    </span>
                    <span className="meta-line shrink-0">
                      {readingMinutes(post)} min
                    </span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      ) : null}

      {/* Editorial territories */}
      <section aria-labelledby="blog-themes" className="band-sunken">
        <Container width="wide" className="py-[var(--band)]">
          <p className="kicker">What the journal covers</p>
          <h2 id="blog-themes" className="mt-2 text-display-sm text-balance">
            Four editorial territories
          </h2>
          <p className="mt-4 max-w-2xl standfirst">
            Each one already has an encyclopedia section behind it. Stories are
            added as the research warrants, not to fill a grid.
          </p>
          <ul className="mt-9 grid gap-x-10 gap-y-0 sm:grid-cols-2">
            {THEMES.map((t) => (
              <li key={t.title}>
                <Link href={t.href} className="editorial-row group">
                  <span className="block font-sans text-base font-semibold text-ink-display group-hover:text-accent">
                    {t.title}
                  </span>
                  <span className="mt-1.5 block text-sm leading-6 text-ink-soft text-pretty">
                    {t.note}
                  </span>
                  <span className="mt-2 block meta-line">
                    Reference: {t.hub} <span aria-hidden>→</span>
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      </section>

      {/* Supporting reading from the encyclopedia */}
      {archive.length > 0 ? (
        <Container width="wide" className="py-[var(--band)]">
          <div className="flex flex-wrap items-end justify-between gap-4">
            <div>
              <p className="kicker">From the archive</p>
              <h2 className="mt-2 text-display-sm text-balance">
                Reference reading behind the stories
              </h2>
            </div>
          </div>
          <ul className="mt-8 grid gap-x-10 sm:grid-cols-2 lg:grid-cols-3">
            {archive.map((e) => (
              <li key={`${e.section}/${e.slug}`}>
                <Link
                  href={`/${e.section}/${e.slug}`}
                  className="editorial-row group"
                >
                  <span className="tech-label">{e.section}</span>
                  <span className="mt-2 block font-sans text-[0.95rem] font-semibold leading-6 text-ink-display group-hover:text-accent">
                    {e.title}
                  </span>
                  <span className="mt-1.5 line-clamp-2 block text-sm leading-6 text-ink-soft">
                    {e.description}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </Container>
      ) : null}
    </>
  );
}

/**
 * The lead story. Asymmetric 60/40 composition with the article's own credited
 * plate — large enough that it cannot be mistaken for a list item.
 */
function FeaturedStory({ post }: { post: BlogEntry }) {
  const minutes = readingMinutes(post);
  const plate = post.hero ?? firstFigure(post.body);
  const href = `${BLOG.path}/${post.slug}`;

  return (
    <section aria-labelledby="featured-story">
      <Container width="wide" className="py-[var(--band)]">
        <p id="featured-story" className="kicker">
          Featured story
        </p>
        <div className="mt-7 grid gap-8 lg:grid-cols-[1.5fr_1fr] lg:gap-14">
          <div>
            <p className="tech-label">{post.category}</p>
            <h2 className="mt-3 text-display-sm text-balance">
              <Link href={href} className="text-ink-display no-underline hover:text-accent">
                {post.title}
              </Link>
            </h2>
            <p className="mt-6 max-w-2xl text-[1.05rem] leading-8 text-ink-soft text-pretty">
              {post.summary}
            </p>
            {post.topics?.length ? (
              <ul className="mt-6 flex flex-wrap gap-x-5 gap-y-1">
                {post.topics.map((t) => (
                  <li key={t} className="tech-label">
                    {t}
                  </li>
                ))}
              </ul>
            ) : null}
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-rule pt-4 meta-line">
              <span>By {post.author}</span>
              <span aria-hidden>·</span>
              <time dateTime={post.published}>{formatDate(post.published)}</time>
              <span aria-hidden>·</span>
              <span>{minutes} min read</span>
              <span aria-hidden>·</span>
              <span>{post.sources?.length ?? 0} sources</span>
            </p>
            <p className="mt-7">
              <Link
                href={href}
                className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
              >
                Read story <span aria-hidden>→</span>
              </Link>
            </p>
          </div>

          {plate ? (
            <figure className="lg:justify-self-end">
              <Link href={href} className="block no-underline">
                <span className="block overflow-hidden border border-rule bg-paper-sunken">
                  <Image
                    src={plate.src}
                    alt={plate.alt}
                    width={plate.width}
                    height={plate.height}
                    priority
                    sizes="(max-width: 1024px) 100vw, 38vw"
                    className="h-full w-full object-cover"
                  />
                </span>
              </Link>
              <figcaption className="mt-3 caption text-pretty">
                {plate.caption}
                <span className="mt-1 block text-ink-faint">
                  {plate.credit.source} · {plate.credit.license}
                </span>
              </figcaption>
            </figure>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

function firstFigure(body: ContentBlock[]): ArchiveImage | undefined {
  for (const b of body) if (b.kind === "figure") return b.image;
  return undefined;
}

function formatDate(iso: string): string {
  return new Date(`${iso}T00:00:00Z`).toLocaleDateString("en-GB", {
    day: "numeric",
    month: "long",
    year: "numeric",
    timeZone: "UTC",
  });
}
