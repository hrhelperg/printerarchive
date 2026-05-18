export function SourcesList({
  sources,
}: {
  sources: { title: string; url?: string; publisher?: string }[];
}) {
  return (
    <section className="mt-12 border-t border-rule pt-8">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">
        References
      </h2>
      <ul className="mt-3 space-y-2 text-sm text-ink-soft">
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
    </section>
  );
}
