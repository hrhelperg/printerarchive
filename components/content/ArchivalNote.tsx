import type { ReactNode } from "react";

interface ArchivalNoteProps {
  label?: string;
  children: ReactNode;
}

/**
 * Paper-feel archival note. Complements <Callout> with a tighter
 * documentary register. Server Component.
 */
export function ArchivalNote({
  label = "Note from the archive",
  children,
}: ArchivalNoteProps) {
  return (
    <aside className="my-7 border border-rule-strong bg-paper-raised px-5 py-4">
      <p className="kicker">{label}</p>
      <div className="mt-1.5 text-ink-soft text-pretty">{children}</div>
    </aside>
  );
}
