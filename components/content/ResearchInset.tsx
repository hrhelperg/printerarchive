interface ResearchInsetProps {
  title: string;
  items: string[];
}

export function ResearchInset({ title, items }: ResearchInsetProps) {
  return (
    <aside className="premium-card-sm my-8 p-5">
      <p className="kicker">{title}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm leading-6 text-ink-soft text-pretty">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </aside>
  );
}
