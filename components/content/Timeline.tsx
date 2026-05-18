export function Timeline({
  events,
}: {
  events: { period: string; text: string }[];
}) {
  return (
    <ol className="my-6 space-y-4">
      {events.map((e, i) => (
        <li
          key={i}
          className="grid grid-cols-[8rem_1fr] gap-4 max-sm:grid-cols-1 max-sm:gap-1"
        >
          <span className="font-sans text-sm font-semibold text-ink-soft">
            {e.period}
          </span>
          <span className="text-ink-soft">{e.text}</span>
        </li>
      ))}
    </ol>
  );
}
