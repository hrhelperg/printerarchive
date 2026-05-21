interface ResearchInsetProps {
  title: string;
  items: string[];
}

export function ResearchInset({ title, items }: ResearchInsetProps) {
  return (
    <aside className="my-8 border border-rule bg-paper-raised p-5">
      <p className="kicker">{title}</p>
      <ul className="mt-3 list-disc space-y-1.5 pl-5 text-sm text-ink-soft text-pretty">
        {items.map((it, i) => (
          <li key={i}>{it}</li>
        ))}
      </ul>
    </aside>
  );
}
