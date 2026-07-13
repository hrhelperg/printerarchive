export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mt-12 border-t border-rule pt-8">
      <h2 className="font-serif text-3xl leading-tight text-ink-display">
        Frequently asked questions
      </h2>
      <dl className="mt-5 space-y-3">
        {faqs.map((f, i) => (
          <div key={i} className="premium-card-sm p-5">
            <dt className="font-sans text-sm font-semibold text-ink-display">
              {f.q}
            </dt>
            <dd className="mt-2 text-sm leading-6 text-ink-soft">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
