import Link from "next/link";
import { getSectionMeta, type SectionId } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { entryKicker } from "@/lib/content/kicker";
import { Container } from "@/components/layout/Container";

export function FeaturedBand({ section }: { section: SectionId }) {
  const meta = getSectionMeta(section);
  const items = getSection(section).slice(0, 3);
  if (items.length === 0) return null;
  return (
    <Container width="wide" className="border-t border-rule py-14">
      <div className="flex items-baseline justify-between gap-4">
        <div>
          <p className="kicker">{meta.label}</p>
          <h2 className="mt-2 font-serif text-3xl leading-tight text-ink-display">
            {meta.title}
          </h2>
        </div>
        <Link
          href={`/${section}`}
          className="shrink-0 font-sans text-sm font-semibold no-underline hover:underline"
        >
          All {meta.label.toLowerCase()} →
        </Link>
      </div>
      <ul className="mt-7 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {items.map((e) => (
          <li key={e.slug}>
            <Link
              href={`/${e.section}/${e.slug}`}
              className="premium-card-sm group flex h-full flex-col p-6 no-underline transition hover:border-rule-strong hover:shadow-[0_10px_26px_rgb(15_23_42_/_0.08)]"
            >
              <span className="kicker">{entryKicker(e)}</span>
              <span className="mt-2 font-sans text-lg font-semibold leading-6 text-ink-display group-hover:text-accent">
                {e.title}
              </span>
              <span className="mt-2 text-sm leading-6 text-ink-soft text-pretty">
                {e.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
