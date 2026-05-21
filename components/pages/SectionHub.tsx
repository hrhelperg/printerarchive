import type { Metadata } from "next";
import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { getSectionMeta, type SectionId } from "@/lib/site";
import { getSection, getBreadcrumbs } from "@/lib/content/queries";
import { buildMetadata } from "@/lib/seo/metadata";
import { Container } from "@/components/layout/Container";
import { Breadcrumbs } from "@/components/layout/Breadcrumbs";
import { Frontispiece } from "@/components/content/Frontispiece";
import { SectionList } from "@/components/content/SectionList";
import { GlossaryIndex } from "@/components/content/GlossaryIndex";
import { DiagnosticGroups } from "@/components/content/DiagnosticGroups";
import { WorkflowGroups } from "@/components/content/WorkflowGroups";
import { EvolutionBand } from "@/components/history/EvolutionBand";
import { JsonLd } from "@/components/seo/JsonLd";
import { breadcrumbSchema } from "@/lib/seo/schema";

interface HubProfile {
  framing: string;
  significance: string;
  image?: ArchiveImageData;
  tone?: "default" | "sepia";
  preload?: boolean;
}

const HUB_PROFILE: Record<SectionId, HubProfile> = {
  history: {
    framing:
      "How printing reached paper — from impact-era mechanical systems to the laser-driven desk and the shared-printer office. Entries are organised around the operational character of each era rather than around specific dates.",
    significance:
      "Printing history is the spine of the archive: nearly every device, format, and office habit documented elsewhere descends from a decision made in one of these eras. Reading it is how the rest of the catalogue acquires its context.",
    image: {
      src: "/images/home/archival-highlights-bound-printout.jpg",
      alt: "Bound stack of green-and-white-banded continuous-form computer printout",
      width: 1232,
      height: 1810,
      caption:
        "Bound continuous-form printout — the green-bar paper that defined two decades of office and data-center output.",
      credit: {
        source: "ArnoldReinhold, Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Bound_computer_printout.agr.jpg",
        license: "CC BY-SA 3.0",
      },
    },
    tone: "sepia",
    preload: true,
  },
  guides: {
    framing:
      "Clear explanations of how printing, scanning, and document technologies actually work. Each entry leads with the mechanism and the trade-off; jargon is defined inline rather than assumed.",
    significance:
      "The guides are where the archive does its explaining. A reader who understands how a mechanism works can weigh every historical claim and troubleshooting step that depends on it — which is why the explainers sit upstream of almost everything else.",
    image: {
      src: "/images/history/early-computer-printing--ibm-1401-restoration-lab.jpg",
      alt: "Restored IBM 1401 installation showing a line printer in the foreground with keypunch machines along one side and tape drives behind",
      width: 1600,
      height: 1066,
      caption:
        "IBM 1401 mainframe lab — the period-authentic 'how things work' setting for the archive's technology explainers.",
      credit: {
        source:
          "Marcin Wichary, Computer History Museum (via Wikimedia Commons / Flickr)",
        url: "https://commons.wikimedia.org/wiki/File:IBM_1401_lab.jpg",
        license: "CC BY 2.0",
      },
    },
  },
  troubleshooting: {
    framing:
      "Structured diagnostic procedures. Each entry isolates a symptom, walks the likely causes in order of probability, and gives a sequence of verifiable checks rather than a fix-list.",
    significance:
      "Most printing failures are not mysteries but ordered sequences of likely causes. This section matters because it converts frustration into a procedure: the difference between guessing and diagnosing.",
    image: {
      src: "/images/history/dot-matrix-printers-explained.jpg",
      alt: "Facit E560 dot matrix printer — full studio shot of the complete unit",
      width: 1600,
      height: 1067,
      caption:
        "Facit E560 dot-matrix printer — a representative impact-era office device with its mechanism visible to the operator.",
      credit: {
        source: "Corvair, Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Facit_E560_dot_matrix_printer.jpg",
        license: "CC BY-SA 4.0",
      },
    },
  },
  brands: {
    framing:
      "Reference overviews of the manufacturers that shaped office printing. What each company built, what it changed about the desk, and where in the archive its lineage is documented.",
    significance:
      "The manufacturers are the actors in the archive's history. Knowing what each company built, and when, is what lets the eras and devices documented elsewhere resolve into a connected lineage rather than a list of objects.",
    image: {
      src: "/images/home/now-hp-laserjet-i.jpg",
      alt: "Original HP LaserJet laser printer photographed against a neutral background",
      width: 1600,
      height: 1066,
      caption:
        "HP LaserJet (1984) — the inflection point at which a brand became synonymous with the desk printer.",
      credit: {
        source: "Atomic Taco, Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:HP_LaserJet_I_(12935740974).jpg",
        license: "CC BY-SA 2.0",
      },
    },
  },
  workflows: {
    framing:
      "Repeatable document processes — scan, print, archive, fax. Described as procedures with re-runnable steps, not as one-off task lists.",
    significance:
      "A workflow is the unit of real document work — the thing an office actually repeats. This section matters because it treats scanning, printing, and faxing as procedures to be re-run reliably, not one-off tasks rediscovered each time.",
    image: {
      src: "/images/history/early-computer-printing--1940-census-keypunch.jpg",
      alt: "Black-and-white photograph of a 1940 US Census keypunch operator seated at a Hollerith pantograph machine with hands at the keys",
      width: 1600,
      height: 1260,
      caption:
        "1940 US Census keypunch operator — the document-processing workflow predates the electronic printer it would later feed.",
      credit: {
        source: "U.S. Bureau of the Census (via NARA, Wikimedia Commons)",
        url: "https://commons.wikimedia.org/wiki/File:Card_puncher_-_NARA_-_513295.jpg",
        license: "Public domain (U.S. Federal Government work)",
      },
    },
  },
  tools: {
    framing:
      "Reference pages on document-system formats, queues, and protocols. The infrastructure layer that the printer connects to and the document moves through.",
    significance:
      "Formats, queues, and protocols are the infrastructure the visible printer sits on top of. This section matters because the document's real journey — how it is encoded, queued, and moved — happens in this layer, mostly out of sight.",
    image: {
      src: "/images/home/then-tractor-feed.jpg",
      alt: "Folded sheet of continuous-form computer paper with perforated sprocket strips along both edges",
      width: 1600,
      height: 899,
      caption:
        "Continuous-form tractor-feed paper — the material standard that shaped the document-format and queue infrastructure this section documents.",
      credit: {
        source: "ProjectManhattan, Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Paper_for_dot_matrix_printers.jpg",
        license: "CC BY-SA 3.0",
      },
    },
  },
  glossary: {
    framing:
      "An alphabetic index of printing and document terminology. Definitions are short; each links onward to the entry where the concept does the real work.",
    significance:
      "Precise terminology is what keeps the rest of the archive honest. A shared, exact vocabulary is the precondition for every claim made elsewhere; the definitions here are deliberately short and link to where each term does its real work.",
  },
  "mobile-printing": {
    framing:
      "Wireless printing standards and the device-to-printer workflows they support. How a phone or tablet reaches a printer without a driver in the conventional sense.",
    significance:
      "Mobile printing is where the archive's history reaches the present. The driverless, wireless handoff from a phone to a printer is the current form of a problem the rest of the catalogue traces from its mechanical origins.",
  },
  fax: {
    framing:
      "Document transmission technology — how a signed page moved across distance in minutes, and why that mattered for commercial tempo. Treated as both a historical and a technical subject.",
    significance:
      "Fax is the archive's clearest case of a technology that became infrastructure, receded, and persisted anyway. Its arc — urgency, ubiquity, decline, survival — is a template for reading the rest of the document-technology story.",
    image: {
      src: "/images/fax/history-of-business-faxing--panasonic-kx-f90.jpg",
      alt: "Panasonic KX-F90 office fax machine with corded handset and paper output tray",
      width: 1282,
      height: 841,
      caption:
        "Panasonic KX-F90 — a typical 1980s/early-1990s compact office fax with integrated handset and thermal-roll output.",
      credit: {
        source: "Pittigrilli, cropped by Georgfotoart, Wikimedia Commons",
        url: "https://commons.wikimedia.org/wiki/File:Panasonic_KX-F90_(cropped).jpg",
        license: "CC BY-SA 4.0",
      },
    },
    tone: "sepia",
  },
};

export function hubMetadata(section: SectionId): Metadata {
  const m = getSectionMeta(section);
  return buildMetadata({
    title: m.title,
    description: m.description,
    path: `/${section}`,
  });
}

export function SectionHub({ section }: { section: SectionId }) {
  const m = getSectionMeta(section);
  const items = getSection(section);
  const crumbs = getBreadcrumbs(section);
  const isHistory = section === "history";
  const profile = HUB_PROFILE[section];

  const groups = new Map<string, typeof items>();
  for (const e of items) {
    const key = e.cluster ?? "__none__";
    if (!groups.has(key)) groups.set(key, []);
    groups.get(key)!.push(e);
  }
  const useGroups = groups.size > 1 && items.length >= 6;

  return (
    <>
      <Container width="wide" className="pt-8">
        <Breadcrumbs items={crumbs} />
      </Container>
      <div className="mt-6">
        <Frontispiece
          kicker="Section"
          title={m.title}
          lede={m.description}
          meta={`${items.length} ${items.length === 1 ? "entry" : "entries"}`}
          image={profile.image}
          tone={profile.tone ?? "default"}
          preload={profile.preload}
          titleClassName="text-display-sm"
        />
      </div>

      <Container width="prose" className="mt-12">
        <p className="font-serif text-lg text-ink-soft text-pretty">
          {profile.framing}
        </p>
        <aside className="mt-8 border-l-2 border-rule-strong bg-paper-raised px-6 py-5">
          <p className="kicker">Why this section matters</p>
          <p className="mt-2 text-ink-soft text-pretty">
            {profile.significance}
          </p>
        </aside>
      </Container>

      {isHistory ? <EvolutionBand /> : null}

      <Container width="wide" className="py-14">
        <JsonLd data={breadcrumbSchema(crumbs)} />
        {items.length === 0 ? (
          <p className="text-ink-faint">
            New entries are being added to this section.
          </p>
        ) : section === "glossary" ? (
          <GlossaryIndex items={items} />
        ) : section === "troubleshooting" ? (
          <DiagnosticGroups items={items} />
        ) : section === "workflows" ? (
          <WorkflowGroups items={items} />
        ) : useGroups ? (
          [...groups.entries()].map(([key, list], idx) => (
            <section
              key={key}
              aria-labelledby={`group-${key}`}
              className={idx > 0 ? "mt-14" : ""}
            >
              <p id={`group-${key}`} className="kicker">
                {key === "__none__"
                  ? "More in this section"
                  : key.replace(/-/g, " ")}
              </p>
              <SectionList items={list} />
            </section>
          ))
        ) : (
          <SectionList items={items} />
        )}
      </Container>
    </>
  );
}
