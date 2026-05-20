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
  // The `tone` prop is accepted but the rail itself is intentionally
  // tone-agnostic — the sepia tint is applied by the enclosing band
  // (e.g. StorytellingBand or History Frontispiece) so the timeline's
  // period label keeps the same AA-contrast colour against any tone.
  // The prop threads tonal context for downstream consumers; do NOT
  // re-introduce a ternary that would suggest a visual delta here.
  void tone;
  const railColor = "border-l-rule-strong";
  const periodColor = "text-ink-display";
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
