import Link from "next/link";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchivePlate } from "@/components/content/ArchivePlate";
import { Motif } from "@/components/content/Motif";
import { Container } from "@/components/layout/Container";

interface StorytellingBandProps {
  kicker?: string;
  title: string;
  lede?: string;
  body?: string[];
  href: string;
  hrefLabel?: string;
  image?: ArchiveImageData;
  direction?: "image-right" | "image-left";
  tone?: "default" | "raised";
  className?: string;
}

/**
 * Image-led editorial storytelling band. Asymmetrical split with the
 * text on one side and an ArchivePlate (or graceful Motif fallback)
 * on the other. Same bounded image footprint in both branches — no
 * CLS when an image later arrives. Server Component.
 */
export function StorytellingBand({
  kicker,
  title,
  lede,
  body,
  href,
  hrefLabel = "Continue in the archive →",
  image,
  direction = "image-right",
  tone = "default",
  className = "",
}: StorytellingBandProps) {
  const surface = tone === "raised" ? "bg-paper-raised" : "bg-paper";
  const order =
    direction === "image-left"
      ? "lg:grid-cols-[1fr_1.4fr]"
      : "lg:grid-cols-[1.4fr_1fr]";
  const imageOrderClass =
    direction === "image-left" ? "lg:order-first" : "lg:order-last";
  return (
    <section className={`border-y border-rule ${surface} fade-up ${className}`}>
      <Container width="wide" className="py-14 lg:py-20">
        <div className={`grid grid-cols-1 gap-10 ${order} lg:items-center`}>
          <div>
            {kicker ? <p className="kicker">{kicker}</p> : null}
            <h2 className="mt-3 text-display-sm text-balance">{title}</h2>
            {lede ? (
              <p className="mt-4 max-w-xl font-serif text-lg text-ink-soft text-pretty">
                {lede}
              </p>
            ) : null}
            {body?.map((p, i) => (
              <p
                key={i}
                className="mt-4 max-w-xl text-ink-soft text-pretty"
              >
                {p}
              </p>
            ))}
            <p className="mt-6 font-sans text-sm">
              <Link href={href} className="no-underline hover:underline">
                {hrefLabel}
              </Link>
            </p>
          </div>
          <div className={imageOrderClass}>
            {image ? (
              <ArchivePlate
                image={image}
                sizes="(max-width: 1024px) 100vw, 480px"
                noMargin
                className="w-full max-w-md"
              />
            ) : (
              <div
                aria-hidden
                className="flex aspect-[4/3] w-full max-w-md items-center justify-center border border-rule-strong bg-paper-raised"
              >
                <Motif className="h-20 w-20 text-rule-strong" />
              </div>
            )}
          </div>
        </div>
      </Container>
    </section>
  );
}
