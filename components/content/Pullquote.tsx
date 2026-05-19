export function Pullquote({
  text,
  attribution,
}: {
  text: string;
  attribution?: string;
}) {
  return (
    <figure className="my-10 border-l-2 border-accent pl-6">
      <blockquote className="font-serif text-2xl leading-snug text-ink-display text-pretty">
        {text}
      </blockquote>
      {attribution ? (
        <figcaption className="mt-3 font-sans text-xs uppercase tracking-wide text-ink-faint">
          {attribution}
        </figcaption>
      ) : null}
    </figure>
  );
}
