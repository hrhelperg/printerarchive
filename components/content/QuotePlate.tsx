interface QuotePlateProps {
  text: string;
  attribution: string;
  citation?: string;
}

export function QuotePlate({ text, attribution, citation }: QuotePlateProps) {
  return (
    <figure className="my-10 border-y border-rule py-8 text-center">
      <blockquote className="font-serif text-2xl leading-snug text-ink text-balance">
        &ldquo;{text}&rdquo;
      </blockquote>
      <figcaption className="mt-4 font-sans text-sm text-ink-soft">
        — {attribution}
        {citation ? (
          <span className="block text-xs text-ink-faint">{citation}</span>
        ) : null}
      </figcaption>
    </figure>
  );
}
