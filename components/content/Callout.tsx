export function Callout({
  tone,
  title,
  text,
}: {
  tone: "note" | "tip" | "warning";
  title?: string;
  text: string;
}) {
  const border = tone === "warning" ? "border-l-warn" : "border-l-accent";
  return (
    <aside className={`my-7 border-l-2 ${border} bg-paper-raised px-5 py-4`}>
      {title && (
        <p className="kicker">{title}</p>
      )}
      <p className="mt-1.5 text-ink-soft text-pretty">{text}</p>
    </aside>
  );
}
