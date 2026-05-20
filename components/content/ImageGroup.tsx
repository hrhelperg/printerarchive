import type { ReactNode } from "react";

interface ImageGroupProps {
  children: ReactNode;
  columns?: 2 | 3 | 4;
  className?: string;
}

/**
 * Editorial collage for 2–4 adjacent figures. Renders children in a
 * responsive CSS grid; the children are expected to be <Figure> or
 * <ArchiveImage> elements. Server Component.
 */
export function ImageGroup({
  children,
  columns = 2,
  className = "",
}: ImageGroupProps) {
  const cols =
    columns === 4
      ? "md:grid-cols-2 lg:grid-cols-4"
      : columns === 3
        ? "md:grid-cols-2 lg:grid-cols-3"
        : "md:grid-cols-2";
  return (
    <div className={`my-8 grid grid-cols-1 gap-4 ${cols} ${className}`}>
      {children}
    </div>
  );
}
