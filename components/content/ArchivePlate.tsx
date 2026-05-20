import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchiveImage } from "./ArchiveImage";

interface ArchivePlateProps {
  image: ArchiveImageData;
  preload?: boolean;
  sizes?: string;
  label?: string;
  raised?: boolean;
  className?: string;
}

/**
 * Museum-placard frame for an archival image. Hairline outer frame +
 * paper-raised mat + optional kicker label + full caption block under
 * the image. Subtle 1–2px shadow opt-in via `raised`. Server Component.
 *
 * Outer is <div> (not <figure>) because the inner ArchiveImage already
 * owns the <figure>/<figcaption> semantics. Nesting figures would
 * leave the outer caption-less and add AT noise.
 */
export function ArchivePlate({
  image,
  preload = false,
  sizes = "(max-width: 768px) 100vw, 768px",
  label,
  raised = false,
  className = "",
}: ArchivePlateProps) {
  return (
    <div
      className={`my-8 archival-placard${raised ? " archival-placard--raised" : ""} ${className}`}
    >
      {label ? (
        <p className="kicker mb-2">{label}</p>
      ) : null}
      <ArchiveImage
        image={image}
        preload={preload}
        sizes={sizes}
        noMargin
      />
    </div>
  );
}
