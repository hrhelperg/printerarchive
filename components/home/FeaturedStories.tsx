import Link from "next/link";
import Image from "next/image";
import { Container } from "@/components/layout/Container";
import { ArchivalCard } from "@/components/content/ArchivalCard";
import { getEntry } from "@/lib/content/queries";
import { entryKicker } from "@/lib/content/kicker";
import type { ContentEntry } from "@/lib/content/types";
import type { SectionId } from "@/lib/site";

interface StoryRef {
  section: SectionId;
  slug: string;
}

const LEAD_THUMB = {
  src: "/images/history/dot-matrix-printers-explained.jpg",
  alt: "Facit E560 dot matrix printer — full studio shot of the complete unit",
  width: 1600,
  height: 1067,
};

const LEAD_STORY: StoryRef = {
  section: "history",
  slug: "dot-matrix-printers-explained",
};

const SECONDARY_STORIES: StoryRef[] = [
  { section: "history", slug: "transition-from-impact-to-laser-printing" },
  { section: "history", slug: "history-of-desktop-publishing" },
  { section: "history", slug: "early-network-printing-systems" },
  { section: "history", slug: "office-printing-before-wifi" },
  { section: "history", slug: "early-computer-printing" },
  { section: "fax", slug: "history-of-business-faxing" },
];

export function FeaturedStories() {
  const lead = getEntry(LEAD_STORY.section, LEAD_STORY.slug);
  const rest = SECONDARY_STORIES.map((r) => getEntry(r.section, r.slug)).filter(
    (e): e is ContentEntry => Boolean(e),
  );
  if (!lead) return null;

  return (
    <section className="border-t border-rule">
      <Container width="wide" className="py-16">
        <p className="kicker">Featured archival stories</p>
        <h2 className="mt-2 text-display-sm text-balance">
          Hand-picked stories from the archive
        </h2>
        <p className="mt-3 max-w-2xl font-serif text-lg text-ink-soft text-pretty">
          Specific narratives from the printing-as-infrastructure record —
          impact-to-laser, desktop publishing, the queue and the spooler,
          fax in deal-making.
        </p>

        {/* Lead card with thumbnail */}
        <div className="mt-10">
          <ArchivalCard
            variant="lead"
            href={`/${lead.section}/${lead.slug}`}
            className="grid gap-6 md:grid-cols-[1.5fr_1fr] md:items-center"
          >
            <div>
              <span className="kicker">{entryKicker(lead)}</span>
              <h3 className="mt-2 font-serif text-2xl tracking-tight text-ink group-hover:text-accent md:text-3xl">
                {lead.title}
              </h3>
              <p className="mt-3 max-w-xl text-ink-soft text-pretty">
                {lead.description}
              </p>
              <p className="mt-5 font-sans text-sm text-ink-soft">
                Read the story →
              </p>
            </div>
            <div className="relative aspect-[3/2] w-full overflow-hidden border border-rule bg-paper-raised">
              <Image
                src={LEAD_THUMB.src}
                alt={LEAD_THUMB.alt}
                width={LEAD_THUMB.width}
                height={LEAD_THUMB.height}
                sizes="(max-width: 768px) 100vw, 360px"
                className="h-full w-full object-cover"
              />
            </div>
          </ArchivalCard>
        </div>

        {/* Secondary cards (text-only) */}
        <ul className="mt-6 grid gap-px border border-rule bg-rule sm:grid-cols-2 lg:grid-cols-3">
          {rest.map((e) => (
            <li key={`${e.section}/${e.slug}`} className="bg-paper">
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
    </section>
  );
}
