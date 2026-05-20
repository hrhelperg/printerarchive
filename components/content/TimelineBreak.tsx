interface TimelineBreakProps {
  era: string;
  year?: string;
}

export function TimelineBreak({ era, year }: TimelineBreakProps) {
  return (
    <div
      role="separator"
      aria-label={year ? `${era} (${year})` : era}
      className="my-12 flex items-center gap-4"
    >
      <span className="h-px flex-1 bg-rule" aria-hidden />
      <span className="font-sans text-xs uppercase tracking-wider text-ink-faint">
        {era}
        {year ? (
          <span className="ml-2 font-mono text-ink-faint">· {year}</span>
        ) : null}
      </span>
      <span className="h-px flex-1 bg-rule" aria-hidden />
    </div>
  );
}
