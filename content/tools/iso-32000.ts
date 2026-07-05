import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "iso-32000",
  "title": "ISO 32000 (PDF)",
  "description": "ISO 32000 is the ISO standard for the Portable Document Format (PDF): its history, structure, print pipeline role, and PDF 1.7 vs PDF 2.0.",
  "summary": "ISO 32000 is the International Organization for Standardization's specification for the Portable Document Format (PDF), a page-oriented, self-contained electronic document format designed so documents can be exchanged and viewed independent of the environment in which they were created, viewed, or printed. It exists in two parts: ISO 32000-1:2008, which formalized Adobe's PDF Reference 1.7, and ISO 32000-2 (PDF 2.0), published in 2017 and reissued as a dated revision in 2020 — the first PDF version developed within ISO rather than by Adobe. Descended from Adobe's PostScript imaging model, PDF describes a fixed-layout document together with its fonts, graphics, and interactive structure so it renders consistently across platforms.",
  "purpose": "ISO 32000 is the ISO standard defining the Portable Document Format (PDF) for device-independent electronic documents.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "PDF originated inside Adobe Systems. Around 1990-1991, Adobe co-founder John Warnock circulated an internal white paper for a project code-named \"Camelot,\" proposing a way to capture documents from any application and reliably view and print them on any machine — in effect a simplified, exchange-oriented derivative of PostScript sometimes described as \"Interchange PostScript.\" Sources differ on the paper's exact date and wording, so it is best treated as an early-1990s proposal rather than a precisely dated first publication."
    },
    {
      "kind": "paragraph",
      "text": "That effort became PDF, launched commercially with Adobe Acrobat 1.0 in June 1993; the PDF Reference 1.0 was published by Adobe and Addison-Wesley the same month. Over the following years Adobe issued successive revisions — PDF 1.1 through PDF 1.7 — as editions of the PDF Reference, each preserving backward compatibility so that non-deprecated features of earlier versions carried forward. PDF 1.7 was released in November 2006 alongside Adobe Acrobat and Reader 8.0."
    },
    {
      "kind": "paragraph",
      "text": "In January 2007, Adobe announced its intention to standardize PDF 1.7 through ISO Technical Committee 171, Subcommittee 2 (ISO/TC 171/SC 2). Prepared from the sixth edition of the PDF Reference and processed under the ISO fast-track procedure, the specification was published as ISO 32000-1 in July 2008. Adobe describes its PDF Reference 1.7 and ISO 32000-1:2008 as matching, with substantial editorial reorganization but only small functional differences. ISO has periodically confirmed the standard, most recently in 2023."
    },
    {
      "kind": "paragraph",
      "text": "Work continued within ISO on the next generation. PDF 2.0 was published as ISO 32000-2:2017 in July 2017, developed under WG 8 of ISO/TC 171/SC 2 — the first PDF version created without Adobe acting as the controlling author. A corrected dated revision, ISO 32000-2:2020, was published in December 2020."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before PDF, exchanging a formatted document between different applications, operating systems, printers, and fonts routinely broke fidelity: pagination shifted, fonts substituted, and layout changed. PostScript could describe a page precisely for a printer, but it was oriented toward driving output devices, was not efficient for on-screen random-access viewing, and was not a self-contained document container."
    },
    {
      "kind": "paragraph",
      "text": "PDF's contribution was a portable, self-contained, fixed-layout document that renders the same regardless of the creating application or the viewing and printing environment — bundling the page description, embedded fonts, and resources into a single file with a structure suited to viewing as well as printing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A PDF file combines four broad kinds of information, as organized in ISO 32000:"
    },
    {
      "kind": "list",
      "items": [
        "Objects — the basic data model: booleans, numbers, strings, names, arrays, dictionaries, and streams. Everything in a PDF is built from these.",
        "File structure — how objects are stored, accessed, and updated: a header (%PDF-1.N or %PDF-2.0), a body of objects, a cross-reference table for random access, and a trailer that points to the document catalog. PDF supports incremental update — appending changes to the end of a file rather than rewriting it — which is why the effective version can be overridden by a Version entry in the document Catalog, a mechanism introduced with PDF 1.4.",
        "Document structure — how objects form a document: a page tree, the resources each page uses (fonts, images, color spaces), plus annotations, outlines (bookmarks), interactive form fields, and metadata.",
        "Content streams — sequences of drawing operators that place text, vector graphics, and images on a page."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The imaging model — coordinate space, graphics state, path construction and painting, text and font handling, color spaces, and transparency — is a direct descendant of the PostScript imaging model, adapted for a self-contained, viewable document rather than a print-time program."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "PDF functions as a device-independent final-form (and, increasingly, exchange-form) document container that sits between authoring applications and output devices. An application exports or \"prints\" to PDF; the PDF then serves as a stable interchange artifact that can be viewed on screen, archived, digitally signed, or sent to a printer or press."
    },
    {
      "kind": "paragraph",
      "text": "In professional print production, PDF — via subset standards such as PDF/X — is a dominant handoff format between designers and print service providers, carrying color, overprint, output-intent, and other prepress information."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "PDF is not itself a printer-native page description language in the way PostScript or PCL are; it is a document format that a PDF processor renders to a target device. In practice, however, PDF is central to modern printing:"
    },
    {
      "kind": "list",
      "items": [
        "Many modern printers and RIPs (raster image processors) accept PDF directly, and PDF is a commonly supported and recommended document format across driverless-printing standards. Under IPP Everywhere, PDF is a recommended rather than a required format — the required document formats are PWG Raster and JPEG/JFIF — but where a printer advertises support for PDF it is given priority. Apple's AirPrint and the Mopria standards also support PDF as a document format.",
        "PDF 2.0 added print-and-graphic-arts features such as per-page output intents, black point compensation flags on individual objects, and improved halftone and spot-color handling — capabilities aimed at print production.",
        "Conversely, PDF 2.0 removed PostScript XObjects (embedded fragments of PostScript code), reflecting a deliberate move away from PostScript dependency in the print path."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "ISO 32000 is OS-neutral by design; portability across operating environments is its founding goal. Operating systems have nonetheless made PDF a first-class citizen."
    },
    {
      "kind": "paragraph",
      "text": "Apple built PDF into the macOS imaging and printing pipeline, and its printing path relies on PDF as a spool and interchange format. Microsoft Windows and Linux/CUPS environments provide print-to-PDF and native or bundled PDF viewing, and CUPS uses PDF as an internal print job format in modern configurations."
    },
    {
      "kind": "paragraph",
      "text": "These integrations are implementations built on top of the ISO 32000 format rather than parts of the standard itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "PDF is a derivative of PostScript's imaging model but differs fundamentally. PostScript is a full, Turing-complete programming language executed to produce pages; PDF is a static, random-access document structure describing already-composed pages. PDF trades programmability for predictability, self-containment, and efficient viewing. PDF 2.0 continued this separation by removing remaining PostScript-oriented constructs: PostScript XObjects were removed, and the Open Prepress Interface (OPI), a PostScript-era prepress convention, was removed from the specification."
    },
    {
      "kind": "paragraph",
      "text": "Historically PDF was produced via \"print to PDF\" drivers or Acrobat Distiller, which converts PostScript to PDF. The industry trend, reinforced by ISO 32000 and IPP standards, is toward driverless workflows in which applications emit PDF directly and printers consume it, reducing reliance on device-specific print drivers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "PDF is one of the most widely used electronic document formats, applied to business documents, government forms, legal and financial records, academic publishing, e-books, technical documentation, and print production. Its ecosystem includes numerous ISO-standardized subset and derived specifications for particular needs such as archiving, print, accessibility, engineering, and forms."
    },
    {
      "kind": "paragraph",
      "text": "PDF 2.0 (ISO 32000-2) is the current core specification. Through sponsored access arranged by the PDF Association — announced in April 2023 with support from Adobe, Apryse, and Foxit — the ISO 32000-2 (PDF 2.0) bundle, including the ISO/TS extensions, is available at no cost, alongside the freely downloadable copy of ISO 32000-1:2008 that Adobe hosts with ISO permission."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Fidelity and portability: consistent rendering across applications, operating systems, and devices.",
        "Self-containment: fonts, images, color information, and resources can be embedded in a single file.",
        "Open ISO standard: ISO 32000-1 implementations are covered by a royalty-free Adobe public patent license.",
        "Rich feature set: interactive forms, annotations, hyperlinks, bookmarks, digital signatures, encryption, metadata, tagged (accessible) structure, and, in later versions, rich media and 3D.",
        "Incremental update: enables efficient revisions and signature workflows.",
        "Extensibility: the developer Extensions Dictionary mechanism (introduced in PDF 1.7) and, for PDF 2.0, formalized ISO Technical Specifications allow the format to be extended."
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
        "Fixed layout: PDF is optimized for fixed-page presentation, so it reflows poorly on small or variable screens compared with formats such as HTML or EPUB.",
        "Accessibility is not automatic: accessible reading order and semantics depend on correct Tagged PDF authoring; untagged PDFs can be difficult for assistive technology.",
        "Editing: as a final-form container, PDF is more constrained to edit after the fact than native authoring formats.",
        "Complexity and variability: the specification is large, and real-world files vary widely in how faithfully they follow it, historically complicating interoperability and long-term preservation — a motivation for the PDF/A subset.",
        "Version-identification subtlety: the header version can be overridden by the Catalog's Version entry, which can complicate automated format identification.",
        "Patent-license scope: the U.S. Library of Congress notes that Adobe's explicit public patent license was issued for ISO 32000-1:2008 (PDF 1.7) and did not find an equivalent explicit statement tied specifically to ISO 32000-2 — an observation, not evidence of restriction."
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
        "ISO 32000-1:2008 (PDF 1.7) and ISO 32000-2:2017 / :2020 (PDF 2.0) — the two parts of ISO 32000.",
        "PDF subset and derived ISO standards: PDF/A (archiving, ISO 19005), PDF/X (print and graphic arts, ISO 15930), PDF/E (engineering, ISO 24517), PDF/UA (universal accessibility, ISO 14289), and PDF/VT (variable and transactional printing, ISO 16612-2).",
        "ISO/TS 32001, 32002, 32004, and 32005 — Technical Specifications extending PDF 2.0, covering hash-algorithm support, digital-signature extensions, integrity protection in encrypted PDFs, and inclusion of the PDF 1.7 and 2.0 structure namespaces.",
        "PostScript — Adobe's page description language and PDF's technical ancestor.",
        "IPP and IPP Everywhere (IETF/PWG) — network printing protocols in which PDF is a supported document format for driverless printing."
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
          "period": "~1990-1991",
          "text": "John Warnock circulates the internal \"Camelot\" white paper proposing a portable document derived from PostScript (exact dating varies by source)."
        },
        {
          "period": "June 1993",
          "text": "Adobe launches Acrobat 1.0; PDF Reference 1.0 is published by Adobe and Addison-Wesley."
        },
        {
          "period": "1994-2003",
          "text": "PDF 1.1 through 1.5 add features across successive Adobe PDF Reference revisions while preserving backward compatibility."
        },
        {
          "period": "November 2006",
          "text": "PDF 1.7 is released with Adobe Acrobat and Reader 8.0."
        },
        {
          "period": "January 2007",
          "text": "Adobe announces its intent to standardize PDF 1.7 via ISO/TC 171/SC 2."
        },
        {
          "period": "July 2008",
          "text": "ISO 32000-1:2008 is published; PDF 1.7 becomes an ISO standard, and Adobe issues a royalty-free public patent license for compliant implementations."
        },
        {
          "period": "July 2017",
          "text": "ISO 32000-2:2017 (PDF 2.0) is published — the first PDF version developed within ISO; it removes PostScript XObjects and OPI and adds print and graphic-arts enhancements, among other features."
        },
        {
          "period": "December 2020",
          "text": "ISO 32000-2:2020, a dated revision with corrections, clarifications, and new normative content, is published."
        },
        {
          "period": "2023",
          "text": "ISO 32000-1:2008 is confirmed on its most recent review; no-cost access to the ISO 32000-2 (PDF 2.0) bundle is announced via the PDF Association."
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
      "slug": "what-is-pdf"
    },
    {
      "section": "tools",
      "slug": "postscript"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "tools",
      "slug": "pdf-x"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "glossary",
      "slug": "print-driver"
    }
  ],
  "faqs": [
    {
      "q": "What is ISO 32000?",
      "a": "ISO 32000 is the International Organization for Standardization's specification for the Portable Document Format (PDF). It defines a device-independent, fixed-layout electronic document format so files can be exchanged and viewed consistently regardless of the application, operating system, or device used to create, view, or print them."
    },
    {
      "q": "What is the difference between ISO 32000-1 and ISO 32000-2?",
      "a": "ISO 32000-1:2008 is the ISO formalization of Adobe's PDF Reference 1.7 and corresponds to PDF 1.7. ISO 32000-2 corresponds to PDF 2.0, first published in 2017 and reissued as a dated revision in 2020; it was the first PDF version developed within ISO rather than by Adobe, and it removed PostScript XObjects and OPI while adding print and graphic-arts enhancements."
    },
    {
      "q": "Is PDF the required format for driverless printing?",
      "a": "Not universally. Under IPP Everywhere, PDF is a recommended rather than required document format — the required formats are PWG Raster and JPEG/JFIF — though a printer that advertises PDF support gives it priority. Apple's AirPrint and the Mopria standards also support PDF."
    },
    {
      "q": "How is PDF related to PostScript?",
      "a": "PDF descends from PostScript's imaging model but is fundamentally different. PostScript is a Turing-complete programming language executed to produce pages, while PDF is a static, random-access document structure describing already-composed pages, trading programmability for predictability, self-containment, and efficient viewing."
    },
    {
      "q": "Is ISO 32000 free to access?",
      "a": "ISO 32000-1:2008 is available as a free copy Adobe hosts with ISO permission. The ISO 32000-2 (PDF 2.0) bundle, including its ISO/TS extensions, has been available at no cost through sponsored access arranged by the PDF Association, announced in April 2023."
    }
  ],
  "sources": [
    {
      "title": "ISO 32000-1:2008 — Document management — Portable document format — Part 1: PDF 1.7",
      "url": "https://www.iso.org/standard/51502.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 32000-2:2020 — Document management — Portable document format — Part 2: PDF 2.0",
      "url": "https://www.iso.org/standard/75839.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO news: PDF 2.0 published",
      "url": "https://www.iso.org/news/ref2199.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/TS 32002:2022 — Digital signatures for PDF 2.0",
      "url": "https://www.iso.org/standard/45875.html",
      "publisher": "ISO"
    },
    {
      "title": "PDF, Version 1.7 (ISO 32000-1:2008) — Sustainability of Digital Formats",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000277.shtml",
      "publisher": "U.S. Library of Congress"
    },
    {
      "title": "PDF 2.0, ISO 32000-2 (2017, 2020) — Sustainability of Digital Formats",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000474.shtml",
      "publisher": "U.S. Library of Congress"
    },
    {
      "title": "ISO 32000-1 (resource page)",
      "url": "https://pdfa.org/resource/iso-32000-1/",
      "publisher": "PDF Association"
    },
    {
      "title": "ISO 32000-2 (PDF 2.0) (resource page)",
      "url": "https://pdfa.org/resource/iso-32000-2/",
      "publisher": "PDF Association"
    },
    {
      "title": "Announcing no-cost access to ISO 32000-2 (PDF 2.0)",
      "url": "https://pdfa.org/announcing-no-cost-access-to-iso-32000-2-pdf-2-0/",
      "publisher": "PDF Association"
    },
    {
      "title": "IPP Everywhere FAQ (document-format requirements)",
      "url": "https://www.pwg.org/ipp/evefaq.html",
      "publisher": "Printer Working Group (PWG)"
    },
    {
      "title": "Driverless Printing Standards and their PDLs",
      "url": "https://openprinting.github.io/driverless/01-standards-and-their-pdls/",
      "publisher": "OpenPrinting"
    },
    {
      "title": "PDF 2.0 deprecated and removed features",
      "url": "https://www.pdflib.com/pdf-knowledge-base/pdf-20/deprecated-features/",
      "publisher": "PDFlib"
    },
    {
      "title": "Dr. John Warnock's Camelot: The Document That Started Adobe Acrobat/PDF",
      "url": "https://www.elon.edu/u/imagining/expert_predictions/dr-john-warnocks-camelot-the-document-that-started-adobe-acrobat-pdf/",
      "publisher": "Elon University"
    },
    {
      "title": "Document management — Portable document format — Part 1: PDF 1.7 (ISO-approved copy, PDF32000_2008)",
      "url": "https://opensource.adobe.com/dc-acrobat-sdk-docs/standards/pdfstandards/pdf/PDF32000_2008.pdf",
      "publisher": "Adobe (distributed with ISO permission)"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "iso 32000",
    "pdf",
    "portable document format",
    "pdf 1.7",
    "pdf 2.0",
    "iso 32000-1",
    "iso 32000-2",
    "postscript",
    "pdf/a",
    "pdf/x",
    "tagged pdf",
    "document format"
  ],
  "cluster": "document-standards"
};

export default entry;
