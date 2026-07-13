import Image from "next/image";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";

// Paper-toned 1×1 placeholder; avoids per-image blur tooling.
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23fafbfc'/%3E%3C/svg%3E";

interface ArchiveImageProps {
  image: ArchiveImageData;
  preload?: boolean;
  sizes?: string;
  className?: string;
  noMargin?: boolean;
}

export function ArchiveImage({
  image,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 768px",
  className = "",
  noMargin = false,
}: ArchiveImageProps) {
  const { src, alt, width, height, caption, credit } = image;
  const margin = noMargin ? "my-0" : "my-8";
  return (
    <figure
      className={`${margin} motion-safe:transition-opacity motion-safe:duration-200 motion-safe:hover:opacity-95 ${className}`}
    >
      <div className="overflow-hidden rounded-lg border border-rule bg-paper">
        <Image
          src={src}
          alt={alt}
          width={width}
          height={height}
          sizes={sizes}
          preload={preload}
          placeholder={PLACEHOLDER}
          className="h-auto w-full"
          style={{ aspectRatio: `${width} / ${height}` }}
        />
      </div>
      {(caption || credit.source) && (
        <figcaption className="mt-3 px-1 font-sans text-xs leading-5 text-ink-faint">
          {caption ? (
            <span className="block text-ink-soft">{caption}</span>
          ) : null}
          <span className={caption ? "mt-0.5 block" : "block"}>
            {credit.url ? (
              <a href={credit.url} rel="noopener noreferrer nofollow">
                {credit.source}
              </a>
            ) : (
              credit.source
            )}
            {credit.license ? ` · ${credit.license}` : ""}
          </span>
        </figcaption>
      )}
    </figure>
  );
}
