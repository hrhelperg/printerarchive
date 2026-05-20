import { Motif } from "./Motif";

interface NumericSeparatorProps {
  n: number;
  className?: string;
}

/**
 * Richer separator: hairline · centered ordinal numeral · hairline.
 * Used between major homepage bands. Decorative only (aria-hidden).
 * Server Component.
 */
export function NumericSeparator({ n, className = "" }: NumericSeparatorProps) {
  return (
    <div
      aria-hidden="true"
      className={`my-12 grid grid-cols-[1fr_auto_1fr] items-center gap-6 ${className}`}
    >
      <hr className="rule-sep-hairline" />
      <span className="font-serif text-2xl leading-none text-rule-strong">
        {String(n).padStart(2, "0")}
      </span>
      <hr className="rule-sep-hairline" />
    </div>
  );
}

interface MarkSeparatorProps {
  className?: string;
}

/**
 * Richer separator: hairline · tiny abstract Motif glyph · hairline.
 * Used between article sections where a chapter break is meaningful.
 * Decorative only (aria-hidden). Server Component.
 */
export function MarkSeparator({ className = "" }: MarkSeparatorProps) {
  return (
    <div
      aria-hidden="true"
      className={`my-12 grid grid-cols-[1fr_auto_1fr] items-center gap-6 ${className}`}
    >
      <hr className="rule-sep-hairline" />
      <Motif className="h-5 w-5 text-rule-strong" />
      <hr className="rule-sep-hairline" />
    </div>
  );
}
