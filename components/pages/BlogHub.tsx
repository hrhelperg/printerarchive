import type { Metadata } from "next";
import Link from "next/link";
import { buildMetadata } from "@/lib/seo/metadata";
import {
  BLOG,
  getPosts,
  getFeaturedPost,
  getBlogBreadcrumbs,
  readingMinutes,
} from "@/lib/blog/queries";
import type { BlogEntry } from "@/lib/content/types";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Frontispiece } from "@/components/content/Frontispiece";
import { Motif } from "@/components/content/Motif";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema, blogSchema } from "@/lib/seo/schema";

/** Restrained routes back into the encyclopedia, one per register. */
const DISCOVERY: { href: string; label: string; note: string }[] = [
  {
    href: "/history",
    label: "Printing History",
    note: "How printing, fax and document technology developed over time.",
  },
  {
    href: "/guides",
    label: "Technology Guides",
    note: "Mechanism-first explanations of how printing and scanning work.",
  },
  {
    href: "/fax",
    label: "Fax Technology",
    note: "Document transmission, from analogue urgency to its long afterlife.",
  },
  {
    href: "/tools",
    label: "Tools & Formats",
    note: "PDF, PostScript, queues and protocols — the infrastructure layer.",
  },
  {
    href: "/models",
    label: "Printer & Fax Models",
    note: "Source-backed reference pages for individual machines.",
  },
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

  return (
    <>
      <Container width="wide" className="pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>
      <div className="mt-6">
        <Frontispiece
          kicker="Blog / Journal"
          title={BLOG.title}
          lede={BLOG.lede}
          meta={`${posts.length} ${posts.length === 1 ? "story" : "stories"}`}
          titleClassName="text-display-sm"
        />
      </div>

      <Container width="wide" className="mt-10">
        <JsonLd
          data={[
            blogSchema(posts, BLOG.title, BLOG.description),
            breadcrumbSchema(crumbs),
          ]}
        />

        <div className="grid gap-6 lg:grid-cols-[1fr_0.72fr]">
          <p className="font-serif text-xl leading-8 text-ink-soft text-pretty">
            The archive&apos;s reference sections explain how a technology works
            and when it appeared. The journal is where those threads are pulled
            together into an argument — longer pieces on how documents,
            publishing and information systems changed one another, written to
            be read rather than consulted.
          </p>
          <aside className="premium-card-sm border-l-2 border-l-accent px-6 py-5">
            <p className="kicker">How these differ from entries</p>
            <p className="mt-2 text-sm leading-6 text-ink-soft text-pretty">
              Encyclopedia entries are reference material: stable, scoped and
              built to be checked. Journal pieces are editorial essays — they
              take a position, cite their sources in the same way, and link back
              into the reference pages that carry the underlying detail.
            </p>
          </aside>
        </div>
      </Container>

      {featured ? (
        <Container width="wide" className="mt-14">
          <section aria-labelledby="featured-story">
            <p id="featured-story" className="kicker">
              Featured story
            </p>
            <FeaturedCard post={featured} />
          </section>
        </Container>
      ) : null}

      {rest.length > 0 ? (
        <Container width="wide" className="mt-16">
          <section aria-labelledby="latest-stories">
            <p id="latest-stories" className="kicker">
              Latest stories
            </p>
            <ul className="mt-6 grid gap-4 md:grid-cols-2 xl:grid-cols-3">
              {rest.map((post) => (
                <li key={post.slug}>
                  <StoryCard post={post} />
                </li>
              ))}
            </ul>
          </section>
        </Container>
      ) : null}

      <Container width="wide" className="mt-16 pb-6">
        <section aria-labelledby="explore-archive">
          <p id="explore-archive" className="kicker">
            Explore the archive
          </p>
          <ul className="mt-6 grid gap-3 sm:grid-cols-2 xl:grid-cols-3">
            {DISCOVERY.map((d) => (
              <li key={d.href}>
                <Link
                  href={d.href}
                  className="premium-card-sm group block h-full p-5 no-underline transition hover:border-rule-strong"
                >
                  <span className="font-sans text-base font-semibold leading-6 text-ink-display group-hover:text-accent">
                    {d.label}
                  </span>
                  <span className="mt-2 block text-sm leading-6 text-ink-soft text-pretty">
                    {d.note}
                  </span>
                </Link>
              </li>
            ))}
          </ul>
        </section>
      </Container>
    </>
  );
}

function FeaturedCard({ post }: { post: BlogEntry }) {
  const minutes = readingMinutes(post);
  return (
    <article className="premium-card mt-6 p-6 md:p-9">
      <div className="grid gap-8 lg:grid-cols-[1.5fr_0.85fr] lg:items-center">
        <div>
          <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-accent">
            {post.category}
          </p>
          <h2 className="mt-3 text-display-sm leading-tight text-balance">
            <Link
              href={`${BLOG.path}/${post.slug}`}
              className="no-underline hover:text-accent"
            >
              {post.title}
            </Link>
          </h2>
          <p className="mt-5 max-w-3xl font-serif text-lg leading-8 text-ink-soft text-pretty">
            {post.description}
          </p>
          {post.topics?.length ? (
            <ul className="mt-5 flex flex-wrap gap-2">
              {post.topics.map((t) => (
                <li
                  key={t}
                  className="rounded-full border border-rule bg-paper px-3 py-1 font-sans text-xs font-semibold text-ink-faint"
                >
                  {t}
                </li>
              ))}
            </ul>
          ) : null}
          <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 border-t border-rule pt-4 font-sans text-xs text-ink-faint">
            <time dateTime={post.published}>{post.published}</time>
            <span aria-hidden>·</span>
            <span>{minutes} min read</span>
            <span aria-hidden>·</span>
            <span>
              {post.sources?.length ?? 0}{" "}
              {(post.sources?.length ?? 0) === 1 ? "source" : "sources"}
            </span>
          </p>
          <p className="mt-6">
            <Link
              href={`${BLOG.path}/${post.slug}`}
              className="inline-flex items-center gap-2 rounded-full bg-accent px-4 py-2 font-sans text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
            >
              Read article
              <span aria-hidden>→</span>
            </Link>
          </p>
        </div>
        <div
          aria-hidden
          className="hidden aspect-[4/3] w-full items-center justify-center rounded-lg border border-rule bg-sepia lg:flex"
        >
          <Motif className="h-20 w-20 text-rule-strong" />
        </div>
      </div>
    </article>
  );
}

function StoryCard({ post }: { post: BlogEntry }) {
  const minutes = readingMinutes(post);
  return (
    <Link
      href={`${BLOG.path}/${post.slug}`}
      className="premium-card-sm group block h-full p-5 no-underline transition hover:border-rule-strong hover:shadow-[0_10px_26px_rgb(15_23_42_/_0.08)]"
    >
      <p className="font-sans text-[11px] font-semibold uppercase tracking-wide text-accent">
        {post.category}
      </p>
      <h3 className="mt-2 font-sans text-base font-semibold leading-6 text-ink-display group-hover:text-accent">
        {post.title}
      </h3>
      <p className="mt-2 line-clamp-3 text-sm leading-6 text-ink-soft text-pretty">
        {post.description}
      </p>
      <p className="mt-3 font-sans text-xs font-semibold text-ink-faint">
        <time dateTime={post.published}>{post.published}</time> · {minutes} min
        read
      </p>
    </Link>
  );
}
