export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section className="premium-card-sm my-8 border-l-2 border-l-accent p-6">
      <p className="kicker">Key takeaways</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-sm leading-6 text-ink-soft text-pretty">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
