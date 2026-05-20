import Link from "next/link";
import { site } from "@/lib/site";
import { Container } from "@/components/layout/Container";
import { Motif } from "@/components/content/Motif";
import { ArchivePlate } from "@/components/content/ArchivePlate";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";

interface HomeHeroProps {
  image?: ArchiveImageData;
  ctaHref?: string;
  ctaLabel?: string;
}

export function HomeHero({
  image,
  ctaHref = "/history",
  ctaLabel = "Enter the archive →",
}: HomeHeroProps) {
  return (
    <section className="surface-grain border-b border-rule bg-paper-raised">
      <Container
        width="wide"
        className="grid gap-10 py-16 lg:grid-cols-[1.4fr_1fr] lg:items-center lg:py-20"
      >
        <div>
          <p className="kicker">{site.tagline}</p>
          <h1 className="mt-4 max-w-3xl text-display text-balance">
            The internet archive of printing technology.
          </h1>
          <p className="mt-5 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
            {site.description}
          </p>
          <p className="mt-7 font-sans text-sm">
            <Link href={ctaHref} className="no-underline hover:underline">
              {ctaLabel}
            </Link>
          </p>
        </div>
        <div className="flex items-center justify-center">
          {image ? (
            <ArchivePlate
              image={image}
              sizes="(max-width: 1024px) 100vw, 520px"
              noMargin
              className="w-full max-w-lg"
            />
          ) : (
            <div aria-hidden className="hidden items-center justify-center lg:flex">
              <Motif className="h-28 w-28 text-rule-strong" />
            </div>
          )}
        </div>
      </Container>
    </section>
  );
}
