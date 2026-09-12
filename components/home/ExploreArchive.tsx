import Link from "next/link";
import Image from "next/image";
import type { SectionId } from "@/lib/site";
import { getSection } from "@/lib/content/queries";
import { Container } from "@/components/layout/Container";

/**
 * Pathways into the archive.
 *
 * Deliberately NOT ten identical cards. Three "lead" routes get an image and
 * a sentence of framing; the rest are a dense hairline index with live counts.
 * The asymmetry is the point — it tells a first-time reader where to start
 * instead of presenting ten equal-weight choices.
 */

const LEADS: {
  id: SectionId;
  title: string;
  blurb: string;
  image: { src: string; alt: string; width: number; height: number };
}[] = [
  {
    id: "history",
    title: "Printing history",
    blurb:
      "From impact mechanisms to the laser desk and the networked office — organised by how each era actually worked.",
    image: {
      src: "/images/home/then-tractor-feed.jpg",
      alt: "Folded continuous-form computer paper with perforated sprocket strips along both edges",
      width: 1600,
      height: 899,
    },
  },
  {
    id: "guides",
    title: "How it works",
    blurb:
      "Mechanism-first explanations of printing, scanning, OCR and colour, with the trade-off named in the first paragraph.",
    image: {
      src: "/images/history/early-computer-printing--ibm-1401-restoration-lab.jpg",
      alt: "Restored IBM 1401 installation with a line printer in the foreground and tape drives behind",
      width: 1600,
      height: 1066,
    },
  },
  {
    id: "models",
    title: "The model catalogue",
    blurb:
      "Individual machines, recorded only from sources that can be cited. Any specification we cannot verify is simply absent.",
    image: {
      src: "/images/home/now-hp-laserjet-i.jpg",
      alt: "Original HP LaserJet laser printer photographed against a neutral background",
      width: 1600,
      height: 1066,
    },
  },
];

const INDEX: { id: SectionId; note: string }[] = [
  { id: "brands", note: "Manufacturers and their model families" },
  { id: "tools", note: "PDF, PostScript, PCL, queues and protocols" },
  { id: "fax", note: "Document transmission and its long afterlife" },
  { id: "workflows", note: "Scan, print, archive, fax — as repeatable process" },
  { id: "troubleshooting", note: "Ordered diagnostics, not fix-lists" },
  { id: "glossary", note: "Precise definitions, briefly stated" },
  { id: "mobile-printing", note: "Phone and tablet to printer, driverless" },
];

export function ExploreArchive() {
  return (
    <Container width="wide" className="py-[var(--band)]">
      <div className="flex flex-wrap items-end justify-between gap-4">
        <div>
          <p className="kicker">Explore the archive</p>
          <h2 className="mt-2 text-display-sm text-balance">
            Where to start
          </h2>
        </div>
        <p className="max-w-md standfirst">
          Ten sections, one method: describe the mechanism, date it only where a
          source allows, and link the claim to where it can be checked.
        </p>
      </div>

      <div className="mt-10 grid gap-6 lg:grid-cols-3">
        {LEADS.map((lead) => {
          const count = getSection(lead.id).length;
          return (
            <Link
              key={lead.id}
              href={`/${lead.id}`}
              className="group block no-underline"
            >
              <div className="relative aspect-[16/10] w-full overflow-hidden border border-rule bg-paper-sunken">
                <Image
                  src={lead.image.src}
                  alt={lead.image.alt}
                  width={lead.image.width}
                  height={lead.image.height}
                  sizes="(max-width: 1024px) 100vw, 33vw"
                  className="h-full w-full object-cover transition-[filter] duration-300 group-hover:brightness-[1.03]"
                />
              </div>
              <p className="mt-4 flex items-baseline gap-3">
                <span className="text-section group-hover:text-accent">
                  {lead.title}
                </span>
                <span className="index-number">{count}</span>
              </p>
              <p className="mt-2 text-[0.95rem] leading-7 text-ink-soft text-pretty">
                {lead.blurb}
              </p>
            </Link>
          );
        })}
      </div>

      <ul className="mt-14">
        {INDEX.map((item) => {
          const section = getSection(item.id);
          const count = section.length;
          const meta = item.id;
          return (
            <li key={item.id}>
              <Link href={`/${meta}`} className="editorial-row group">
                <span className="flex flex-wrap items-baseline gap-x-4 gap-y-1">
                  <span className="min-w-[11rem] font-sans text-base font-semibold text-ink-display group-hover:text-accent">
                    {sectionTitle(item.id)}
                  </span>
                  <span className="flex-1 text-sm leading-6 text-ink-soft">
                    {item.note}
                  </span>
                  <span className="index-number shrink-0">{count}</span>
                </span>
              </Link>
            </li>
          );
        })}
      </ul>
    </Container>
  );
}

function sectionTitle(id: SectionId): string {
  const map: Record<string, string> = {
    brands: "Brands",
    tools: "Tools & formats",
    fax: "Fax",
    workflows: "Workflows",
    troubleshooting: "Troubleshooting",
    glossary: "Glossary",
    "mobile-printing": "Mobile printing",
  };
  return map[id] ?? id;
}
