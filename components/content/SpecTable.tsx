/**
 * Verified specifications for a model.
 *
 * Every row carries its own source, because that is how the data is stored:
 * ModelEntry.specs is a self-citing list precisely so that a machine with four
 * documented figures shows four rows rather than a fixed grid of columns with
 * eight blanks. There is no "unknown" row and no inferred value.
 */
export function SpecTable({
  specs,
}: {
  specs: { label: string; value: string; source: string }[];
}) {
  if (specs.length === 0) return null;
  return (
    <section aria-labelledby="verified-specifications" className="mb-12">
      <div className="flex flex-wrap items-baseline justify-between gap-3 border-b border-rule-strong pb-2">
        <h2
          id="verified-specifications"
          className="font-sans text-sm font-semibold text-ink-display"
        >
          Verified specifications
        </h2>
        <p className="meta-line">
          {specs.length} documented {specs.length === 1 ? "value" : "values"}, each
          cited
        </p>
      </div>
      <dl className="grid gap-px bg-rule sm:grid-cols-2">
        {specs.map((s) => (
          <div key={s.label} className="bg-paper-raised px-4 py-3.5">
            <dt className="tech-label">{s.label}</dt>
            <dd className="mt-1.5 tech-value">{s.value}</dd>
            <p className="mt-2 meta-line">Source: {s.source}</p>
          </div>
        ))}
      </dl>
    </section>
  );
}
