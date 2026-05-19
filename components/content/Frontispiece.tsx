import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchiveImage } from "./ArchiveImage";
import { Motif } from "./Motif";

// The default visual identity of a page. Complete and premium with ZERO
// images (typographic composition + abstract motif). When a real, approved
// image exists it is shown instead of the motif panel — same footprint,
// no layout shift, no reserved empty gap.
export function Frontispiece({
  kicker,
  title,
  lede,
  meta,
  image,
  tone = "default",
  preload = false,
  titleClassName = "text-display",
}: {
  kicker?: string;
  title: string;
  lede?: string;
  meta?: string;
  image?: ArchiveImageData;
  tone?: "default" | "sepia";
  preload?: boolean;
  titleClassName?: string;
}) {
  const surface =
    tone === "sepia" ? "bg-sepia" : "bg-paper-raised";
  return (
    <section
      className={`surface-grain ${surface} border-y border-rule-strong`}
    >
      <div className="mx-auto grid w-full max-w-6xl gap-8 px-5 py-16 sm:px-6 lg:grid-cols-[1.5fr_1fr] lg:items-center lg:px-8 lg:py-20">
        <div>
          {kicker ? <p className="kicker">{kicker}</p> : null}
          <h1 className={`mt-3 text-balance ${titleClassName}`}>{title}</h1>
          {lede ? (
            <p className="mt-5 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
              {lede}
            </p>
          ) : null}
          {meta ? (
            <p className="mt-5 font-sans text-xs text-ink-faint">{meta}</p>
          ) : null}
        </div>
        <div className="lg:justify-self-end">
          {image ? (
            <ArchiveImage
              image={image}
              preload={preload}
              sizes="(max-width: 1024px) 100vw, 420px"
              className="my-0 w-full max-w-md"
            />
          ) : (
            <div
              aria-hidden
              className="flex aspect-[4/3] w-full max-w-md items-center justify-center border border-rule-strong"
            >
              <Motif className="h-20 w-20 text-rule-strong" />
            </div>
          )}
        </div>
      </div>
    </section>
  );
}
