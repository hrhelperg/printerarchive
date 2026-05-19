export function StepList({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="my-7 space-y-5">
      {steps.map((s, i) => (
        <li
          key={i}
          className="grid grid-cols-[2rem_1fr] gap-4 border-l border-rule-strong pl-4"
        >
          <span
            aria-hidden
            className="font-serif text-2xl leading-none text-rule-strong"
          >
            {i + 1}
          </span>
          <div>
            <p className="font-sans text-sm font-semibold text-ink">
              {s.title}
            </p>
            <p className="mt-1 text-ink-soft text-pretty">{s.text}</p>
          </div>
        </li>
      ))}
    </ol>
  );
}
