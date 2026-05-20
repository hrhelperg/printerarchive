interface TimelineProps {
  events: { period: string; text: string }[];
  tone?: "default" | "sepia";
}

/**
 * Elevated vertical timeline rail. Era-label affordance: `period`
 * renders in serif with a hairline tick marker. Optional sepia tone
 * for History-cluster usage. Dots stagger-fade on load via the
 * `.timeline-dot` keyframe (gated by prefers-reduced-motion).
 */
export function Timeline({ events, tone = "default" }: TimelineProps) {
  const railColor =
    tone === "sepia" ? "border-l-rule-strong" : "border-l-rule-strong";
  const periodColor =
    tone === "sepia" ? "text-ink-display" : "text-ink-display";
  return (
    <ol className={`my-8 border-l ${railColor}`}>
      {events.map((e, i) => (
        <li key={i} className="relative py-6 pl-6 last:pb-0">
          <span
            aria-hidden="true"
            className="timeline-dot absolute left-[-4.5px] top-9 h-2 w-2 rounded-full border border-rule-strong bg-paper"
            style={{ animationDelay: `${i * 50}ms` }}
          />
          <p
            className={`font-serif text-base leading-snug ${periodColor} flex items-center gap-3`}
          >
            <span
              aria-hidden="true"
              className="inline-block h-px w-4 bg-rule-strong"
            />
            <span className="font-semibold tracking-tight">{e.period}</span>
          </p>
          <p className="mt-1.5 text-ink-soft text-pretty">{e.text}</p>
        </li>
      ))}
    </ol>
  );
}
