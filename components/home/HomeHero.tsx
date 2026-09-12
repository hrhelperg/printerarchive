import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";

interface HomeHeroProps {
  image?: ArchiveImageData;
}

/**
 * The masthead.
 *
 * One claim, one sentence of substantiation, one way in. The statistics that
 * used to crowd this block now live in ArchiveScale directly beneath it, so
 * the hero can be typographic and the numbers can be read as a set.
 */
export function HomeHero({ image }: HomeHeroProps) {
  return (
    <section className="border-b border-rule bg-paper-raised">
      <Container width="wide" className="py-12 lg:py-[var(--band-loose)]">
        <div className="grid gap-10 lg:grid-cols-[1.08fr_0.92fr] lg:items-end lg:gap-16">
          <div>
            <p className="kicker">PrinterArchive · Est. as a public reference</p>
            <h1 className="mt-5 max-w-[14ch] text-display text-balance">
              The archive of printing technology
            </h1>
            <p className="mt-7 max-w-xl standfirst text-pretty">
              Printing history, the technologies behind it, the manufacturers
              that built it, and the standards, documents, fax, scanning and
              workflows it produced — written from sources that can be checked,
              and free of marketing language.
            </p>

            <div className="mt-8 flex flex-wrap items-center gap-x-7 gap-y-3">
              <Link
                href="/history"
                className="inline-flex items-center gap-2 bg-accent px-5 py-2.5 font-sans text-sm font-semibold text-white no-underline transition-colors hover:bg-accent-hover"
              >
                Enter the archive <span aria-hidden>→</span>
              </Link>
              <Link
                href="/archive-methodology"
                className="font-sans text-sm font-semibold text-ink-soft no-underline underline-offset-4 hover:text-accent hover:underline"
              >
                How the archive is built
              </Link>
            </div>
          </div>

          {image ? (
            <figure className="lg:justify-self-end">
              <div className="overflow-hidden border border-rule bg-paper-sunken">
                <Image
                  src={image.src}
                  alt={image.alt}
                  width={image.width}
                  height={image.height}
                  priority
                  sizes="(max-width: 1024px) 100vw, 46vw"
                  className="h-full w-full object-cover"
                />
              </div>
              {image.caption ? (
                <figcaption className="mt-3 caption max-w-lg text-pretty">
                  {image.caption}{" "}
                  <span className="text-ink-faint">
                    {image.credit.url ? (
                      <a
                        href={image.credit.url}
                        rel="noopener noreferrer nofollow"
                        className="text-ink-faint"
                      >
                        {image.credit.source}
                      </a>
                    ) : (
                      image.credit.source
                    )}{" "}
                    · {image.credit.license}
                  </span>
                </figcaption>
              ) : null}
            </figure>
          ) : null}
        </div>
      </Container>
    </section>
  );
}
