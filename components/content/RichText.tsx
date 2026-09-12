import Link from "next/link";
import type { InlineLink } from "@/lib/content/types";

/**
 * Renders a plain-text string with a small set of contextual links spliced in.
 *
 * Content stores prose as plain text plus a typed list of {anchor, href}
 * pairs — never markup — so nothing in the corpus can carry raw HTML or a
 * leaked markdown artefact. Splicing is deterministic: anchors are applied
 * longest-first so a shorter anchor can never consume part of a longer one,
 * and each anchor is matched once. Content integrity enforces that every
 * anchor occurs exactly once in the text, so a mismatch fails the build
 * rather than silently dropping a link.
 *
 * Output is pure SSR markup — no client JavaScript, no hydration cost.
 */
export function RichText({
  text,
  links,
}: {
  text: string;
  links?: InlineLink[];
}) {
  if (!links || links.length === 0) return <>{text}</>;

  // Longest anchor first: prevents "city guides" from being eaten by "city".
  const ordered = [...links].sort((a, b) => b.anchor.length - a.anchor.length);

  type Piece = string | InlineLink;
  let pieces: Piece[] = [text];

  for (const link of ordered) {
    let applied = false;
    pieces = pieces.flatMap((piece): Piece[] => {
      if (applied || typeof piece !== "string") return [piece];
      const at = piece.indexOf(link.anchor);
      if (at === -1) return [piece];
      applied = true;
      const before = piece.slice(0, at);
      const after = piece.slice(at + link.anchor.length);
      return [
        ...(before ? [before] : []),
        link,
        ...(after ? [after] : []),
      ];
    });
  }

  return (
    <>
      {pieces.map((piece, i) => {
        if (typeof piece === "string") return <span key={i}>{piece}</span>;
        if (piece.external) {
          return (
            <a
              key={i}
              href={piece.href}
              target="_blank"
              rel="noopener noreferrer"
            >
              {piece.anchor}
              <span className="sr-only"> (opens in a new tab)</span>
            </a>
          );
        }
        return (
          <Link key={i} href={piece.href}>
            {piece.anchor}
          </Link>
        );
      })}
    </>
  );
}
