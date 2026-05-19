import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { ArchiveImage } from "./ArchiveImage";

export function Figure({ image }: { image: ArchiveImageData }) {
  return (
    <ArchiveImage
      image={image}
      sizes="(max-width: 768px) 100vw, 720px"
      className="mx-auto max-w-2xl"
    />
  );
}
