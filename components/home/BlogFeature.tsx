import Link from "next/link";
import Image from "next/image";
import type { ArchiveImage, ContentBlock } from "@/lib/content/types";
import { getFeaturedPost, readingMinutes, BLOG } from "@/lib/blog/queries";
import { Container } from "@/components/layout/Container";

/**
 * The journal's latest story, on the homepage.
 *
 * Editorial discovery, not promotion: the story is framed by its own argument
 * and its source count, with the same restraint the article itself uses. Only
 * the Blog hub and the lead story are linked — the individual article is not
 * site-wide linked from every page.
 */
export function BlogFeature() {
  const post = getFeaturedPost();
  if (!post) return null;

  const minutes = readingMinutes(post);
  const plate = post.hero ?? firstFigure(post.body);

  return (
    <section aria-labelledby="home-blog" className="band-sepia">
      <Container width="wide" className="py-[var(--band)]">
        <div className="flex flex-wrap items-end justify-between gap-4">
          <div>
            <p className="kicker-accent">Blog / Journal</p>
            <h2 id="home-blog" className="mt-2 text-display-sm text-balance">
              The latest story
            </h2>
          </div>
          <Link
            href={BLOG.path}
            className="font-sans text-sm font-semibold text-accent no-underline hover:underline"
          >
            All stories <span aria-hidden>→</span>
          </Link>
        </div>

        <div className="mt-9 grid gap-8 lg:grid-cols-[1.15fr_0.85fr] lg:items-center lg:gap-12">
          <div>
            <p className="tech-label">{post.category}</p>
            <h3 className="mt-3 text-masthead text-balance">
              <Link
                href={`${BLOG.path}/${post.slug}`}
                className="text-ink-display no-underline hover:text-accent"
              >
                {post.title}
              </Link>
            </h3>
            <p className="mt-5 max-w-2xl text-[1.02rem] leading-8 text-ink-soft text-pretty">
              {post.summary}
            </p>
            <p className="mt-6 flex flex-wrap items-center gap-x-3 gap-y-1 meta-line">
              <time dateTime={post.published}>{formatDate(post.published)}</time>
              <span aria-hidden>·</span>
              <span>{minutes} min read</span>
              <span aria-hidden>·</span>
              <span>{post.sources?.length ?? 0} sources</span>
            </p>
            <p className="mt-6">
              <Link
                href={`${BLOG.path}/${post.slug}`}
                className="inline-flex items-center gap-2 border-b-2 border-accent pb-1 font-sans text-sm font-semibold text-accent no-underline transition-colors hover:border-accent-hover hover:text-accent-hover"
              >
                Read story <span aria-hidden>→</span>
              </Link>
            </p>
          </div>

          {plate ? (
            <figure className="lg:justify-self-end">
              <div className="overflow-hidden border border-rule bg-paper-raised">
                <Image
                  src={plate.src}
                  alt={plate.alt}
                  width={plate.width}
                  height={plate.height}
                  sizes="(max-width: 1024px) 100vw, 40vw"
                  className="h-full w-full object-cover"
                />
              </div>
              <figcaption className="mt-2 meta-line">
                {plate.credit.source} · {plate.credit.license}
              </figcaption>
            </figure>
          ) : null}
        </div>
      </Container>
    </section>
  );
}

/** The article's first credited plate, used when a post has no explicit hero. */
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
