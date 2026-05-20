import Image from "next/image";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";

// Paper-toned 1×1 placeholder; avoids per-image blur tooling.
const PLACEHOLDER =
  "data:image/svg+xml,%3Csvg xmlns='http://www.w3.org/2000/svg' width='1' height='1'%3E%3Crect width='1' height='1' fill='%23f4f1e9'/%3E%3C/svg%3E";

interface ArchiveImageProps {
  image: ArchiveImageData;
  preload?: boolean;
  sizes?: string;
  className?: string;
}

export function ArchiveImage({
  image,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 768px",
  className = "",
}: ArchiveImageProps) {
  const { src, alt, width, height, caption, credit } = image;
  return (
    <figure
      className={`my-8 transition-opacity duration-200 hover:opacity-95 ${className}`}
    >
      <div className="border border-rule-strong bg-paper-raised p-2">
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
        <figcaption className="mt-3 font-sans text-xs text-ink-faint">
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
