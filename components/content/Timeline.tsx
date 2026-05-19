export function Timeline({
  events,
}: {
  events: { period: string; text: string }[];
}) {
  return (
    <ol className="my-8 border-l border-rule-strong">
      {events.map((e, i) => (
        <li key={i} className="relative py-5 pl-6 last:pb-0">
          <span
            aria-hidden
            className="absolute left-[-4.5px] top-7 h-2 w-2 rounded-full border border-rule-strong bg-paper"
          />
          <p className="kicker">{e.period}</p>
          <p className="mt-1.5 text-ink-soft text-pretty">{e.text}</p>
        </li>
      ))}
    </ol>
  );
}
