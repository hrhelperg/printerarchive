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
    <figure
      className={`my-8 archival-placard${raised ? " archival-placard--raised" : ""} ${className}`}
    >
      {label ? (
        <p className="kicker mb-2">{label}</p>
      ) : null}
      <ArchiveImage
        image={image}
        preload={preload}
        sizes={sizes}
        className="my-0"
      />
    </figure>
  );
}
