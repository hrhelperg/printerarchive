import { Logomark } from "./Logomark";

interface WordmarkProps {
  size?: "default" | "compact";
  showTagline?: boolean;
  tagline?: string;
  name?: string;
  className?: string;
}

/**
 * Wordmark = Logomark + serif name + hairline divider + optional
 * small-caps tagline microline. Used in Header and any identity
 * context. Server Component.
 *
 * Name uses font-medium (not font-semibold) — premium archival
 * institutions render their wordmarks in regular/medium serif
 * weights; semibold drifts toward "tech landing page" register.
 * Divider height tracks the name's cap-height so the proportions
 * stay tuned at compact size.
 */
export function Wordmark({
  size = "default",
  showTagline = true,
  tagline,
  name = "PrinterArchive",
  className = "",
}: WordmarkProps) {
  const markSize = size === "compact" ? "h-6 w-6" : "h-7 w-7";
  const nameSize =
    size === "compact" ? "text-base font-medium" : "text-xl font-medium";
  const dividerHeight = size === "compact" ? "h-4" : "h-5";
  return (
    <span className={`flex items-center gap-3 ${className}`}>
      <Logomark className={`${markSize} text-ink`} />
      <span className="flex h-7 items-center">
        <span
          aria-hidden="true"
          className={`${dividerHeight} w-px bg-rule-strong`}
        />
      </span>
      <span className="flex flex-col leading-none">
        <span
          className={`font-serif tracking-tight text-ink ${nameSize}`}
        >
          {name}
        </span>
        {showTagline && tagline ? (
          <span className="mt-1 hidden font-sans text-[0.68rem] uppercase tracking-[0.18em] text-ink-faint sm:block">
            {tagline}
          </span>
        ) : null}
      </span>
    </span>
  );
}
