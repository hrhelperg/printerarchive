interface PullquoteProps {
  text: string;
  attribution?: string;
}

/**
 * Editorial pullquote with paper-feel top/bottom hairline frame,
 * oversized decorative opening quote glyph (aria-hidden), display-sm
 * serif body, and small-caps attribution with a leading em-dash.
 * Semantic <figure>/<blockquote>/<figcaption> preserved.
 */
export function Pullquote({ text, attribution }: PullquoteProps) {
  return (
    <figure className="my-10 pullquote-frame">
      <span aria-hidden="true" className="pullquote-glyph block leading-none">
        &ldquo;
      </span>
      <blockquote className="mt-2 text-display-sm leading-snug text-ink-display text-pretty">
        {text}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-4 font-sans text-xs uppercase tracking-wide text-ink-faint">
          — {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
