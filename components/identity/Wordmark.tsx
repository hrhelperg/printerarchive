import { Logomark } from "./Logomark";

interface WordmarkProps {
  size?: "default" | "compact";
  showTagline?: boolean;
  tagline?: string;
  name?: string;
  className?: string;
}

/**
 * Wordmark = Logomark + name + optional institutional tagline.
 * Server Component, no client state.
 */
export function Wordmark({
  size = "default",
  showTagline = true,
  tagline,
  name = "PrinterArchive",
  className = "",
}: WordmarkProps) {
  const markSize = size === "compact" ? "h-7 w-7" : "h-10 w-10";
  const nameSize =
    size === "compact" ? "text-base font-semibold" : "text-2xl font-semibold";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <span className="flex shrink-0 items-center justify-center rounded-lg border border-rule bg-paper-raised p-2 text-accent shadow-[0_1px_2px_rgb(15_23_42_/_0.05)]">
        <Logomark className={markSize} />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-sans text-ink-display ${nameSize}`}
        >
          {name}
        </span>
        {showTagline && tagline ? (
          <span className="mt-1 hidden max-w-[17rem] font-sans text-[0.72rem] leading-snug text-ink-faint sm:block">
            {tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
