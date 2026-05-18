export function StepList({
  steps,
}: {
  steps: { title: string; text: string }[];
}) {
  return (
    <ol className="my-6 space-y-5">
      {steps.map((s, i) => (
        <li key={i} className="border-l border-rule pl-4">
          <p className="font-sans text-sm font-semibold text-ink">
            {i + 1}. {s.title}
          </p>
          <p className="mt-1 text-ink-soft">{s.text}</p>
        </li>
      ))}
    </ol>
  );
}
