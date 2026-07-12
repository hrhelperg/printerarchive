import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchivePlate } from "./ArchivePlate";
import { Motif } from "./Motif";

interface FrontispieceProps {
  kicker?: string;
  title: string;
  lede?: string;
  meta?: string;
  image?: ArchiveImageData;
  tone?: "default" | "sepia";
  preload?: boolean;
  titleClassName?: string;
}

/**
 * The default visual identity of a page. Premium-with-zero-images:
 * when no image, the motif panel renders in the same bounded frame
 * — no reserved empty gap. When an image exists, ArchivePlate slots
 * in at the same footprint (no CLS).
 */
export function Frontispiece({
  kicker,
  title,
  lede,
  meta,
  image,
  tone = "default",
  preload = false,
  titleClassName = "text-display",
}: FrontispieceProps) {
  const surface = tone === "sepia" ? "bg-sepia" : "bg-paper-raised";
  return (
    <section
      className={`${surface} border-y border-rule fade-up`}
    >
      <div className="mx-auto grid w-full max-w-7xl gap-10 px-5 py-12 sm:px-6 lg:grid-cols-[1.35fr_0.95fr] lg:items-center lg:px-8 lg:py-16">
        <div>
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h1 className={`mt-3 text-balance ${titleClassName}`}>{title}</h1>
          {lede ? (
            <p className="mt-5 max-w-3xl font-serif text-xl leading-8 text-ink-soft text-pretty">
              {lede}
            </p>
          ) : null}
          {meta ? (
            <p className="mt-6 inline-flex rounded-full border border-rule bg-paper px-3 py-1.5 font-sans text-xs font-semibold text-ink-faint shadow-[0_1px_2px_rgb(15_23_42_/_0.04)]">
              {meta}
            </p>
          ) : null}
        </div>
        <div className="lg:justify-self-end">
          {image ? (
            <ArchivePlate
              image={image}
              preload={preload}
              sizes="(max-width: 1024px) 100vw, 420px"
              noMargin
              raised
              className="w-full max-w-lg"
            />
          ) : (
            <div
              aria-hidden
              className="premium-card flex aspect-[4/3] w-full max-w-lg items-center justify-center"
            >
              <Motif className="h-20 w-20 text-rule-strong" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
