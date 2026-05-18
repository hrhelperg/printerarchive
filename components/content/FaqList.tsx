export function FaqList({ faqs }: { faqs: { q: string; a: string }[] }) {
  return (
    <section className="mt-12 border-t border-rule pt-8">
      <h2 className="font-serif text-2xl tracking-tight">
        Frequently asked questions
      </h2>
      <dl className="mt-5 space-y-5">
        {faqs.map((f, i) => (
          <div key={i}>
            <dt className="font-sans text-sm font-semibold text-ink">
              {f.q}
            </dt>
            <dd className="mt-1 text-ink-soft">{f.a}</dd>
          </div>
        ))}
      </dl>
    </section>
  );
}
