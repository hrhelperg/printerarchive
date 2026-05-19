export function KeyTakeaways({ items }: { items: string[] }) {
  return (
    <section className="my-8 border border-rule-strong bg-paper-raised p-6">
      <p className="kicker">Key takeaways</p>
      <ul className="mt-3 list-disc space-y-2 pl-5 text-ink-soft text-pretty">
        {items.map((t, i) => (
          <li key={i}>{t}</li>
        ))}
      </ul>
    </section>
  );
}
