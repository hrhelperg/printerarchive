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
          <h2 className="mt-2 font-serif text-2xl tracking-tight">
            {meta.title}
          </h2>
        </div>
        <Link
          href={`/${section}`}
          className="shrink-0 font-sans text-sm no-underline hover:underline"
        >
          All {meta.label.toLowerCase()} →
        </Link>
      </div>
      <ul className="mt-7 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
        {items.map((e) => (
          <li key={e.slug} className="bg-paper">
            <Link
              href={`/${e.section}/${e.slug}`}
              className="group flex h-full flex-col p-6 no-underline transition-colors hover:bg-paper-raised"
            >
              <span className="kicker">{entryKicker(e)}</span>
              <span className="mt-2 font-serif text-lg tracking-tight text-ink group-hover:text-accent">
                {e.title}
              </span>
              <span className="mt-1.5 text-sm text-ink-soft text-pretty">
                {e.description}
              </span>
            </Link>
          </li>
        ))}
      </ul>
    </Container>
  );
}
