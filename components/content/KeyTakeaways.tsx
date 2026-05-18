export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section className="my-8 border border-rule bg-black/[0.015] p-5">
      <h2 className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft">
        Key takeaways
      </h2>
      <ul className="mt-3 list-disc space-y-2 pl-5">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
