interface SourceCalloutProps {
  text: string;
  attribution: string;
  source?: { title: string; url?: string };
}

export function SourceCallout({ text, attribution, source }: SourceCalloutProps) {
  return (
    <aside className="my-8 border-l-2 border-rule-strong bg-paper-raised px-6 py-5">
      <p className="font-serif text-lg italic leading-snug text-ink text-pretty">
        &ldquo;{text}&rdquo;
      </p>
      <p className="mt-3 font-sans text-sm text-ink-soft">
        — {attribution}
        {source ? (
          <span className="text-ink-faint">
            {" "}·{" "}
            {source.url ? (
              <a href={source.url} rel="noopener noreferrer">
                {source.title}
              </a>
            ) : (
              source.title
            )}
          </span>
        ) : null}
      </p>
    </aside>
  );
}
