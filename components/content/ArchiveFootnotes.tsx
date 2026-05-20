interface ArchiveFootnotesProps {
  footnotes: { n: number; text: string }[];
}

export function ArchiveFootnotes({ footnotes }: ArchiveFootnotesProps) {
  if (footnotes.length === 0) return null;
  return (
    <section
      aria-labelledby="footnotes"
      className="mt-12 border-t border-rule pt-8"
    >
      <h2
        id="footnotes"
        className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft"
      >
        Footnotes
      </h2>
      <ol className="mt-3 space-y-2 text-sm text-ink-soft">
        {footnotes.map((f) => (
          <li
            key={f.n}
            id={`footnote-${f.n}`}
            className="scroll-mt-24 text-pretty"
          >
            <span className="font-mono text-ink-faint">[{f.n}]</span>{" "}
            {f.text}{" "}
            <a
              href={`#footnote-ref-${f.n}`}
              className="font-sans text-xs text-ink-faint no-underline hover:underline"
              aria-label={`Return to reference ${f.n}`}
            >
              ↩
            </a>
          </li>
        ))}
      </ol>
    </section>
  );
}
