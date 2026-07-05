import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "pdf-x",
  "title": "PDF/X",
  "description": "PDF/X is the ISO 15930 family of print-ready PDF subsets that constrain fonts, color, and page geometry for reliable prepress data exchange.",
  "summary": "PDF/X is a family of ISO 15930 standardized subsets of the Portable Document Format engineered for reliable exchange of print-ready data in graphic arts and prepress. A PDF/X file is an ordinary PDF that satisfies extra constraints and carries mandatory metadata to eliminate the common causes of print failure: missing fonts, unpredictable color, and ambiguous page geometry. Each file conforms to exactly one declared conformance level, embedding fonts, constraining or color-managing color, declaring an output intent, and defining page boxes, while prohibiting features that make output non-deterministic. The family originated as ANSI CGATS.12/1-1999 and became the multi-part ISO 15930 series, spanning conservative flattened-CMYK exchange (PDF/X-1a) through modern color-managed, transparency-aware levels (PDF/X-4, PDF/X-6 on PDF 2.0).",
  "purpose": "An ISO-standardized family of PDF subsets for reliable, unambiguous print-ready data exchange in prepress.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "PDF/X originated in North America before becoming an international standard. The Committee for Graphic Arts Technology Standards (CGATS), working under the U.S. graphic-arts standards process, published the first version as an ANSI standard, CGATS.12/1-1999, \"Graphic technology — Prepress digital data exchange — Use of PDF for composite data — Part 1: Complete exchange (PDF/X-1).\" That specification was built on Adobe's PDF 1.2 Reference as extended by Adobe Technical Note #5188, \"PDF features to facilitate ANSI CGATS.12, PDF/X,\" dated 11 January 1999, which defined the additional PDF constructs — such as the output intent — that print exchange required."
    },
    {
      "kind": "paragraph",
      "text": "The CGATS work drew international interest, and a work item was created in ISO Technical Committee TC 130 (Graphic technology) to produce an international standard based on it. This became the multi-part ISO 15930 series, \"Graphic technology — Prepress digital data exchange using PDF\":"
    },
    {
      "kind": "list",
      "items": [
        "ISO 15930-1:2001 defined PDF/X-1 and PDF/X-1a (based on PDF 1.3).",
        "ISO 15930-3:2002 defined PDF/X-3 (based on PDF 1.3), adding support for color-managed workflows.",
        "ISO 15930-4:2003 re-issued PDF/X-1a on PDF 1.4.",
        "ISO 15930-5:2003 defined PDF/X-2 (partial exchange, PDF 1.4); this part was later withdrawn (in 2011) and PDF/X-2 saw little real-world adoption.",
        "ISO 15930-6:2003 re-issued PDF/X-3 on PDF 1.4.",
        "ISO 15930-7:2008 (second edition 2010) defined PDF/X-4 and PDF/X-4p (based on PDF 1.6), adding live transparency and optional-content layers.",
        "ISO 15930-8:2008 (second edition 2010) defined PDF/X-5 and its variants (partial / external-reference exchange, PDF 1.6).",
        "ISO 15930-9:2020 defined PDF/X-6, PDF/X-6p and PDF/X-6n (based on PDF 2.0 / ISO 32000-2)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A related framework standard, ISO 15929, described the general principles for developing PDF/X conformance levels; it was withdrawn in 2008."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before PDF/X, print jobs were exchanged as native application files or as loosely constrained PostScript/PDF, and a large share of production problems traced to a handful of recurring causes: fonts referenced but not embedded (causing substitution and reflow); color defined in device-independent or RGB spaces with no agreed rendering target (causing unpredictable color on press); missing or contradictory page-geometry definitions (so the printer could not tell trim from bleed); and interactive or dynamic content (forms, scripts, movies, annotations) that has no meaning in print but can alter or break rendering."
    },
    {
      "kind": "paragraph",
      "text": "PDF/X addresses each of these by mandating what must be present, by requiring an explicit statement of the intended printing condition, and by prohibiting the general-purpose PDF features that make output non-deterministic. The goal is \"blind exchange\" — especially in PDF/X-1a — a file a printer can output correctly without going back to the originator for corrections or missing pieces."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "PDF/X works as a conformance profile layered on top of ordinary PDF. A conforming file must satisfy a set of requirements, with the specifics varying by conformance level:"
    },
    {
      "kind": "list",
      "items": [
        "Embed all fonts used in the document, so text renders identically everywhere.",
        "Restrict or define color. In the blind-exchange flavors (PDF/X-1 / -1a), all color must be device CMYK, grayscale, or named spot colors — no RGB or device-independent color. In color-managed flavors (PDF/X-3, -4, -6), calibrated RGB, CIELAB and ICC-profile-based color are permitted because a color-management target is defined.",
        "Declare an output intent. The file carries an OutputIntent entry (subtype GTS_PDFX) that names the characterized printing condition and either references or embeds the destination ICC profile via DestOutputProfile. This anchor tells any consumer how the color numbers are meant to be reproduced.",
        "Define page geometry unambiguously. Every page has a MediaBox and must define either a TrimBox or an ArtBox (not both) for the finished page. A BleedBox is optional."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Older levels also exclude non-print and dynamic content: encryption, JavaScript, interactive form actions, multimedia, and (in most levels) OPI-style external image references and transfer functions are prohibited. This exclusion is level-dependent — the newest level, PDF/X-6 (ISO 15930-9:2020), relaxes some of these restrictions and permits certain annotations, form fields, and other content within defined limits."
    },
    {
      "kind": "paragraph",
      "text": "Newer levels progressively allow more modern capability while preserving determinism: PDF/X-4 permits live transparency and optional-content layers (rather than requiring flattening), and PDF/X-6 rebases the model on PDF 2.0."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "PDF/X sits at the handoff point between content creation and print production — the \"delivery\" or final-art stage. A designer or publisher creates content in a layout or design application, then exports or converts it to a specific PDF/X conformance level as the deliverable that goes to a print service provider, prepress department, or ad-delivery system."
    },
    {
      "kind": "paragraph",
      "text": "On the receiving side, prepress tools preflight the file against the declared PDF/X level, then impose, trap, color-manage (honoring the output intent), and RIP it for platemaking or digital output. PDF/X is deliberately a container for finished pages, not an editing or authoring format."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "PDF/X is not a printer page-description language and is not consumed directly by device firmware the way PostScript or PCL are. It is a data-exchange contract consumed by prepress software and RIPs (Raster Image Processors) that ultimately drive imagesetters, platesetters, and digital presses."
    },
    {
      "kind": "paragraph",
      "text": "Its practical benefit to printing is that the RIP receives a file whose fonts, color target, and page boundaries are all explicitly defined, so the interpreter does not have to guess. The output intent in particular tells the RIP's color management the reference printing condition, so color can be converted correctly for the actual press or proofer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "PDF/X is operating-system neutral. Because it is a constrained form of PDF — a self-contained, cross-platform format with fonts and color definitions embedded — a PDF/X file is designed to render and print consistently regardless of the OS, application, or hardware used to create or consume it."
    },
    {
      "kind": "paragraph",
      "text": "There is no OS-specific dependency in the standard; conformance is a property of the file, verified by preflight tools that exist across platforms. This platform independence is a core reason PDF (and PDF/X) displaced OS- and application-tied print workflows."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "PDF/X is a strict subset of PDF: every PDF/X file is a valid PDF, but only PDF files meeting the extra constraints are valid PDF/X. Each conformance level is pinned to a base PDF version (PDF/X-1a and X-3 to PDF 1.3/1.4, PDF/X-4 and X-5 to PDF 1.6, PDF/X-6 to PDF 2.0 / ISO 32000-2) and restricts that version's feature set."
    },
    {
      "kind": "paragraph",
      "text": "Relative to PostScript, PDF/X reflects the industry's migration away from PostScript-based print workflows: PostScript is a programmatic page-description language interpreted at print time, whereas PDF (and PDF/X) is a fixed, resolved page representation that removes the runtime unpredictability of PostScript programs. Historically, PDF/X files were often produced by \"distilling\" PostScript; modern workflows export PDF/X directly."
    },
    {
      "kind": "paragraph",
      "text": "Regarding printer drivers: PDF/X is intended to bypass the uncertainty of OS/application print-driver paths. Instead of relying on a driver to translate an application's output to a device, the finished, self-describing PDF/X file is handed to prepress/RIP software — which is why the format emphasizes embedding and explicit definition over driver- or environment-dependent behavior."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "PDF/X remains the dominant standard for delivering print-ready files in commercial printing, publishing, packaging, and advertising. The two most widely used levels today are:"
    },
    {
      "kind": "list",
      "items": [
        "PDF/X-1a — a fully CMYK/spot, flattened, blind-exchange file. It is conservative and maximally compatible, and is still commonly required by newspapers, magazine ad portals, and older RIP workflows.",
        "PDF/X-4 — the modern default for many print providers. It preserves live transparency and layers (no forced flattening) and supports ICC-based color management (including RGB and Lab retained to a defined output intent), which suits contemporary design tools and color-managed presses."
      ]
    },
    {
      "kind": "paragraph",
      "text": "PDF/X-3 saw significant early adoption, particularly in German-speaking Europe, as an early color-managed option. PDF/X-6 (PDF 2.0-based) is the newest generation and is expected to succeed PDF/X-4 as tooling and RIPs adopt PDF 2.0. PDF/X-2 and the PDF/X-5 external-reference variants have seen comparatively limited real-world use. Preflight and export support for PDF/X is built into major professional design and prepress applications and standalone preflight tools."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Predictable output: embedded fonts, constrained color, and an explicit output intent make on-press results deterministic and reduce reprints.",
        "Self-contained delivery: everything needed to print is in the file (in the complete-exchange levels), enabling blind exchange without round trips to the originator.",
        "Unambiguous page geometry: a mandatory MediaBox plus a TrimBox or ArtBox (and optional BleedBox) let prepress impose and trim correctly.",
        "Interoperability: as an ISO standard and an OS/application-neutral subset of PDF, it is broadly supported by design, preflight, and RIP tools.",
        "Verifiability: conformance is machine-checkable via preflight, so problems are caught before printing.",
        "Graduated capability: the family spans conservative flattened CMYK (X-1a) to modern color-managed, transparency-and-layers workflows (X-4, X-6)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Limitations"
    },
    {
      "kind": "list",
      "items": [
        "Feature restrictions: in most levels, interactivity, scripting, encryption, multimedia, and external references are disallowed, making PDF/X unsuitable for anything but fixed print pages. (The newest level, PDF/X-6, relaxes some of these restrictions.)",
        "Version fragmentation: multiple coexisting levels (X-1a, X-3, X-4, X-5, X-6) and revisions mean a file valid for one required level is not automatically acceptable where another is mandated; a file declares one level only.",
        "Older levels lag modern content: PDF/X-1a requires flattening transparency and forbids RGB/color management, which can degrade designs built with transparency or wide-gamut color.",
        "Practical tooling gaps: some newer capabilities (for example PDF 2.0 features in PDF/X-6) may not be fully supported by all RIPs in the field, limiting real use.",
        "Correct output intent is on the user: choosing the wrong characterized printing condition or profile still yields wrong color even in a valid file; conformance guarantees structure, not that the chosen target matches the actual press."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related standards and protocols"
    },
    {
      "kind": "list",
      "items": [
        "PDF (ISO 32000) — the base format PDF/X constrains; PDF 2.0 is ISO 32000-2.",
        "Other PDF ISO subsets: PDF/A (ISO 19005, archiving), PDF/E (ISO 24517, engineering), PDF/UA (ISO 14289, universal accessibility), PDF/VT (ISO 16612-2, variable and transactional printing).",
        "ISO 15929 (withdrawn 2008) — described the framework and principles for building PDF/X conformance levels.",
        "ANSI CGATS.12 — the original North American PDF/X specification that seeded ISO 15930.",
        "Characterized printing condition datasets and ICC profiles (e.g., SWOP, GRACoL, FOGRA characterizations) referenced by output intents.",
        "ICC color management — provides the DestOutputProfile mechanism used by the output intent."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Timeline"
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1996",
          "text": "Adobe publishes the PDF 1.2 Reference, the technical basis for the first PDF/X work."
        },
        {
          "period": "1999 (11 January)",
          "text": "Adobe Technical Note #5188 defines PDF features (including the output intent) to support CGATS.12 / PDF/X."
        },
        {
          "period": "1999",
          "text": "CGATS publishes ANSI CGATS.12/1-1999, the first PDF/X-1 specification."
        },
        {
          "period": "2001",
          "text": "ISO 15930-1:2001 published, defining PDF/X-1 and PDF/X-1a on PDF 1.3."
        },
        {
          "period": "2002",
          "text": "ISO 15930-3:2002 published, defining PDF/X-3 (color-managed) on PDF 1.3."
        },
        {
          "period": "2003",
          "text": "ISO 15930-4:2003 (PDF/X-1a on PDF 1.4), ISO 15930-5:2003 (PDF/X-2), and ISO 15930-6:2003 (PDF/X-3 on PDF 1.4) published."
        },
        {
          "period": "2008",
          "text": "ISO 15930-7:2008 (PDF/X-4, PDF 1.6, adds transparency and layers) and ISO 15930-8:2008 (PDF/X-5, PDF 1.6) published; ISO 15929 (the PDF/X framework standard) withdrawn."
        },
        {
          "period": "2010",
          "text": "Second editions of ISO 15930-7 (PDF/X-4) and ISO 15930-8 (PDF/X-5) published with corrections."
        },
        {
          "period": "2011",
          "text": "ISO 15930-5 (PDF/X-2) withdrawn."
        },
        {
          "period": "2020 (November)",
          "text": "ISO 15930-9:2020 published, defining PDF/X-6 / PDF/X-6p / PDF/X-6n on PDF 2.0 (ISO 32000-2)."
        }
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "tools",
      "slug": "iso-32000"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "tools",
      "slug": "postscript"
    },
    {
      "section": "history",
      "slug": "history-of-desktop-publishing"
    },
    {
      "section": "tools",
      "slug": "what-is-pdf"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    }
  ],
  "faqs": [
    {
      "q": "What does the \"X\" in PDF/X stand for?",
      "a": "The \"X\" stands for \"eXchange.\" PDF/X is a family of PDF subsets designed for the reliable exchange of print-ready data between content creators and print production, standardized as the ISO 15930 series."
    },
    {
      "q": "Is PDF/X a different file format from PDF?",
      "a": "No. A PDF/X file is an ordinary PDF that satisfies extra constraints and carries mandatory metadata. Every PDF/X file is a valid PDF, but only PDFs that meet the additional requirements — embedded fonts, constrained or color-managed color, an output intent, and defined page boxes — qualify as PDF/X."
    },
    {
      "q": "What is the difference between PDF/X-1a and PDF/X-4?",
      "a": "PDF/X-1a is a conservative, flattened, fully CMYK/spot \"blind exchange\" level with no RGB or color management, still common for newspapers and older RIPs. PDF/X-4 preserves live transparency and layers without flattening and supports ICC-based color management, making it the modern default for many print providers."
    },
    {
      "q": "What is an output intent in PDF/X?",
      "a": "An output intent is a required metadata entry (subtype GTS_PDFX) that names the characterized printing condition and either references or embeds the destination ICC profile (DestOutputProfile). It tells any consumer how the file's color values are meant to be reproduced on press."
    },
    {
      "q": "Which PDF/X level is the newest?",
      "a": "PDF/X-6, defined in ISO 15930-9:2020 (published November 2020), is the newest generation. It is based on PDF 2.0 (ISO 32000-2) and is expected to succeed PDF/X-4 as tools and RIPs adopt PDF 2.0."
    }
  ],
  "sources": [
    {
      "title": "ISO 15930-1:2001 — Prepress digital data exchange using PDF — Part 1 (PDF/X-1, PDF/X-1a)",
      "url": "https://www.iso.org/standard/29061.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15930-3:2002 — Part 3 (PDF/X-3)",
      "url": "https://www.iso.org/standard/34941.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15930-6:2003 — Part 6 (PDF/X-3, PDF 1.4)",
      "url": "https://www.iso.org/standard/39940.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15930-7:2008 — Part 7 (PDF/X-4)",
      "url": "https://www.iso.org/standard/42876.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15930-7:2010 — Part 7 (PDF/X-4, second edition)",
      "url": "https://www.iso.org/standard/55843.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15930-8:2008 — Part 8 (PDF/X-5)",
      "url": "https://www.iso.org/standard/42877.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15930-9:2020 — Part 9 (PDF/X-6, PDF 2.0)",
      "url": "https://www.iso.org/standard/77103.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15930 (PDF/X) resource page",
      "url": "https://pdfa.org/resource/iso-15930-pdfx/",
      "publisher": "PDF Association"
    },
    {
      "title": "The route to PDF/X and where we are now: a personal history",
      "url": "https://pdfa.org/the-route-to-pdf-x-and-where-we-are-now-a-personal-history/",
      "publisher": "PDF Association"
    },
    {
      "title": "The new PDF 2.0 and subset standards",
      "url": "https://pdfa.org/the-new-pdf-2-0-and-subset-standards/",
      "publisher": "PDF Association"
    },
    {
      "title": "ISO 15930-9:2020 PDF/X-6 published",
      "url": "https://www.ugra.ch/en/iso-15930-92020-pdf-x-6-published/",
      "publisher": "Ugra"
    },
    {
      "title": "PDF/X output intents (GTS_PDFX, DestOutputProfile)",
      "url": "https://www.pdflib.com/pdf-knowledge-base/pdfx-output-intents/",
      "publisher": "PDFlib"
    },
    {
      "title": "PDF/X",
      "url": "https://en.wikipedia.org/wiki/PDF/X",
      "publisher": "Wikipedia"
    },
    {
      "title": "PDF/X Format Family (Sustainability of Digital Formats)",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000124.shtml",
      "publisher": "Library of Congress"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "pdf/x",
    "iso 15930",
    "prepress",
    "print-ready pdf",
    "pdf/x-1a",
    "pdf/x-4",
    "output intent",
    "graphic arts",
    "cgats.12",
    "print exchange",
    "destoutputprofile",
    "pdf/x-6"
  ],
  "cluster": "document-standards"
};

export default entry;
