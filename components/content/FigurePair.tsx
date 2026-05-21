import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchiveImage } from "./ArchiveImage";

interface FigurePairProps {
  left: ArchiveImageData;
  right: ArchiveImageData;
  caption?: string;
}

export function FigurePair({ left, right, caption }: FigurePairProps) {
  return (
    <figure className="my-8">
      <div className="grid gap-4 sm:grid-cols-2">
        <ArchiveImage image={left} noMargin />
        <ArchiveImage image={right} noMargin />
      </div>
      {caption ? (
        <figcaption className="mt-3 text-center font-sans text-xs text-ink-faint text-pretty">
          {caption}
        </figcaption>
      ) : null}
    </figure>
  );
}
