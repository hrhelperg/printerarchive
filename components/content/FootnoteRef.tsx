interface FootnoteRefProps {
  n: number;
}

export function FootnoteRef({ n }: FootnoteRefProps) {
  return (
    <sup className="font-sans text-xs">
      <a
        href={`#footnote-${n}`}
        id={`footnote-ref-${n}`}
        aria-label={`Footnote ${n}`}
        className="no-underline hover:underline"
      >
        [{n}]
      </a>
    </sup>
  );
}
