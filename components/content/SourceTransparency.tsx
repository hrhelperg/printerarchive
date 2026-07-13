// SourceTransparency renders the per-article references block.
//
// Note: a visible "Verified archival source" badge per item is deferred
// to sub-phase 5.3, which will define a source-type taxonomy on the
// data model (e.g., institutional | encyclopedic | primary). The current
// shape only carries title/url?/publisher?, which is insufficient to
// determine which entries qualify for the badge without further input.
import Link from "next/link";

interface SourceTransparencyProps {
  sources: { title: string; url?: string; publisher?: string }[];
}

export function SourceTransparency({ sources }: SourceTransparencyProps) {
  if (sources.length === 0) return null;
  const count = sources.length;
  return (
    <section
      aria-labelledby="source-transparency"
      className="mt-14 border-t border-rule pt-8"
    >
      <h2
        id="source-transparency"
        className="font-serif text-3xl leading-tight text-ink-display"
      >
        Source transparency{" "}
        <span className="font-sans text-sm font-semibold text-ink-faint">
          ({count} {count === 1 ? "source" : "sources"})
        </span>
      </h2>
      <p className="mt-3 text-sm leading-6 text-ink-soft text-pretty">
        These references support claims made in this entry. The archive uses
        verified institutional and public-domain sources only; see{" "}
        <Link href="/source-policy">Source policy</Link>.
      </p>
      <details className="premium-card-sm mt-5 p-5">
        <summary className="cursor-pointer font-sans text-sm font-semibold text-ink-display hover:text-accent">
          Sources consulted ({count})
        </summary>
        <ul className="mt-4 space-y-3 text-sm leading-6 text-ink-soft">
          {sources.map((s, i) => (
            <li key={i}>
              {s.url ? (
                <a href={s.url} rel="noopener noreferrer">
                  {s.title}
                </a>
              ) : (
                s.title
              )}
              {s.publisher && (
                <span className="text-ink-faint"> — {s.publisher}</span>
              )}
            </li>
          ))}
        </ul>
      </details>
    </section>
  );
}
