export function Callout({
  tone,
  title,
  text,
}: {
  tone: "note" | "tip" | "warning";
  title?: string;
  text: string;
}) {
  const border =
    tone === "warning" ? "border-l-amber-700" : "border-l-accent";
  return (
    <aside className={`my-6 border-l-2 ${border} bg-black/[0.02] px-4 py-3`}>
      {title && (
        <p className="font-sans text-xs font-semibold uppercase tracking-wide text-ink-soft">
          {title}
        </p>
      )}
      <p className="mt-1 text-ink-soft">{text}</p>
    </aside>
  );
}
