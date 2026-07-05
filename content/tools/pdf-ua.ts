import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "pdf-ua",
  "title": "PDF/UA (ISO 14289)",
  "description": "PDF/UA (ISO 14289) is the international standard defining how PDF files must be structured to be reliably accessible to assistive technology.",
  "summary": "PDF/UA (\"PDF/Universal Accessibility\"), standardized by ISO as ISO 14289, defines how the PDF format must be used so that documents work reliably with assistive technology such as screen readers, magnifiers, and braille displays. It is not a separate file format: a PDF/UA file is an ordinary PDF that additionally satisfies strict requirements, chiefly complete and correct tagging of content. Published in two parts — ISO 14289-1 (PDF/UA-1, first issued 2012) built on ISO 32000-1 (PDF 1.7), and ISO 14289-2 (PDF/UA-2, 2024) built on ISO 32000-2 (PDF 2.0) — the standard turns the optional \"Tagged PDF\" facility into a precise, testable conformance target. It specifies requirements on both conforming files and conforming readers, is vendor- and OS-neutral, and is commonly paired with WCAG for policy compliance and with PDF/A for archiving.",
  "purpose": "Defines how PDF files must be structured so documents are reliably accessible to assistive technology.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Work on a dedicated PDF accessibility standard began in the AIIM Standards Committee, which launched the project in 2004. Duff Johnson has chaired the committee since 2005. In 2009 the AIIM committee became the U.S. committee for the ISO work item (ISO/AWI 14289), with Cherie Ekholm of Microsoft serving as International Project Leader. (These committee and personal attributions are drawn from secondary sources and are reported as such.)"
    },
    {
      "kind": "paragraph",
      "text": "ISO 14289-1 (PDF/UA-1) was first published in July 2012. A corrected edition, ISO 14289-1:2014, followed in December 2014; the PDF Association describes that edition as the first fully accessible standard ISO itself published, with the standard document conforming to PDF/UA."
    },
    {
      "kind": "paragraph",
      "text": "ISO 14289-2 (PDF/UA-2) was published in March 2024, aligned with PDF 2.0. It extends the model to the structure element types introduced in PDF 2.0 and adds new capabilities such as accessible mathematics via MathML."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Base PDF, and its ISO 32000 successor, can display a page perfectly while carrying no machine-readable information about what the content actually is — which text is a heading, which region is a table versus a decorative rule, what order the content should be read in, or what a scanned image depicts. Assistive technology therefore had to guess, often producing scrambled reading order, skipped content, unlabeled form fields, and images with no description."
    },
    {
      "kind": "paragraph",
      "text": "PDF/UA turned the loose, optional \"Tagged PDF\" facility already present in the PDF specification into a precise, testable conformance target. It states exactly which structures must be present, how they must be formed, and what is prohibited, so that accessibility becomes verifiable rather than aspirational. Crucially, it defines requirements not only for conforming files but also for conforming readers, processors, and assistive technology, so that accessibility information carried in a file is actually surfaced to the user."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "PDF/UA builds on the Tagged PDF feature of ISO 32000. PDF/UA-1 references ISO 32000-1 (PDF 1.7); PDF/UA-2 references ISO 32000-2 (PDF 2.0). Rather than inventing new syntax, PDF/UA restricts and mandates use of features already defined in the base format. Core requirements include:"
    },
    {
      "kind": "list",
      "items": [
        "A complete structure (tag) tree covering all real content, with tags that correctly represent semantics — headings, paragraphs, lists, tables, figures, links, form fields, and so on.",
        "Logical reading order expressed through the structure tree, independent of the order objects happen to be drawn on the page.",
        "Artifact marking: purely decorative or repeating page furniture (background rules, running headers and footers, page numbers) must be marked as artifacts so it is excluded from the reading stream.",
        "Text extractability via Unicode: fonts must be embedded and every character mapped to Unicode so text can be read aloud, searched, and reflowed.",
        "Alternative text for meaningful graphics, and correct labeling and associations for form fields and annotations.",
        "Metadata and document properties, such as document title and language, that identify the document to assistive technology.",
        "Prohibitions: information conveyed by color or contrast alone, inaccessible scripting, and security settings that block assistive-technology access are not permitted."
      ]
    },
    {
      "kind": "paragraph",
      "text": "PDF/UA-2 extends this model to the structure element types introduced in PDF 2.0, adds detailed requirements for mathematics via MathML, expands requirements for annotations and structure-element attributes, and permits multiple associated tag sets so that a document can carry, for example, both PDF structure and MathML."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "PDF/UA is a late-stage, output-format constraint. It governs the finished PDF delivered for reading, archiving, or distribution — after authoring, layout, and PDF generation. In practice accessibility must be considered upstream, through styles, alternative text, and reading order in the authoring tool, but conformance is asserted and validated against the produced PDF."
    },
    {
      "kind": "paragraph",
      "text": "It concerns the semantic layer of the document rather than its visual rendering or its path to a physical printer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "PDF/UA has essentially no direct relationship to physical printing or to page description on a printer. Its subject matter is the semantic accessibility of the on-screen or electronic document consumed by assistive technology. The tagging and structure it requires are ignored by a printer's raster and marking engine, which reproduces only the visible marks."
    },
    {
      "kind": "paragraph",
      "text": "A PDF/UA file prints identically to the same file without tags. To be explicit: PDF/UA is a document-accessibility standard, not a printing or imaging standard."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "PDF/UA is OS-neutral. The accessibility payload lives inside the PDF and is exposed by conforming PDF processors to whatever accessibility infrastructure the platform provides — for example, the accessibility APIs used by screen readers on Windows, macOS, Linux, and mobile platforms."
    },
    {
      "kind": "paragraph",
      "text": "The standard defines what the file must contain and what a conforming reader must do; it does not mandate any particular operating system, API, or product."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "list",
      "items": [
        "PDF: PDF/UA is a conformance profile layered on the base PDF standard, ISO 32000. PDF/UA-1 references ISO 32000-1:2008 (PDF 1.7); PDF/UA-2 references ISO 32000-2 (PDF 2.0). It restricts and requires use of features already defined there rather than inventing new syntax.",
        "PostScript: There is no direct relationship. PostScript is a page-description and printing language with no semantic structure model; accessibility structure is a PDF-layer concept. A document distilled from PostScript to PDF gains no PDF/UA structure automatically.",
        "Drivers: \"Print to PDF\" style drivers or virtual printers typically flatten a document to marks and generally do not produce conformant tagged structure on their own. PDF/UA conformance usually requires an authoring or export path that preserves semantics, or a dedicated remediation step."
      ]
    },
    {
      "kind": "paragraph",
      "text": "PDF/UA is frequently combined with PDF/A (ISO 19005, archiving). The two profiles are complementary — PDF/A preserves visual fidelity for the long term while PDF/UA preserves accessibility — and a single file can conform to both."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "PDF/UA is the reference technical standard used by governments, universities, publishers, and enterprises to demonstrate that PDFs are accessible. It underpins conformance claims tied to accessibility mandates and procurement rules in many jurisdictions, and it is commonly paired with WCAG for policy compliance and with PDF/A for archiving."
    },
    {
      "kind": "paragraph",
      "text": "In the United States, the Access Board identified PDF/UA as equivalent to WCAG 2.0 for appropriate content (February 2015), and the Library of Congress listed PDF/UA among its format descriptions for page-oriented content (October 2012)."
    },
    {
      "kind": "paragraph",
      "text": "Validation is supported by tooling built around the standard — for example the Matterhorn Protocol, the PDF Association's checkpoint framework (published August 2013 with 31 checkpoints and 136 failure conditions), and third-party accessibility checkers. Such tools are implementations around the standard, not part of ISO 14289 itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Turns \"accessible PDF\" into a precise, testable specification instead of a subjective goal.",
        "Format-specific: it states exactly how to satisfy accessibility inside PDF, filling gaps that general guidelines such as WCAG leave to interpretation.",
        "Compatible with PDF/A and WCAG, so one document can meet archiving, accessibility, and web-policy needs.",
        "Preserves the fixed layout and print fidelity of PDF while adding a semantic layer for assistive technology.",
        "Vendor-neutral and internationally standardized through ISO."
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
        "Requires correct authoring or remediation. Conformance is hard to achieve by naive \"export to PDF\" and cannot be guaranteed by automated checks alone; many requirements need human judgment — for instance, whether alternative text is genuinely meaningful or reading order is truly logical.",
        "No effect on physical printing, and none on documents that remain untagged image scans.",
        "Full conformance testing combines automated and manual review. Automated tools can detect the presence of tags but not always their correctness.",
        "PDF/UA-2 depends on PDF 2.0 and richer tooling, so ecosystem support lags the older PDF/UA-1.",
        "The ISO standards themselves are paid documents, though some companion materials from the PDF Association are free."
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
        "ISO 32000-1 (PDF 1.7) and ISO 32000-2 (PDF 2.0) — the base PDF format that PDF/UA constrains.",
        "ISO 19005 (PDF/A) — the archiving profile, commonly combined with PDF/UA.",
        "W3C WCAG 2.x — general web-content accessibility guidelines; PDF/UA is the PDF-specific means of meeting them.",
        "W3C MathML — used by PDF/UA-2 for accessible mathematics.",
        "Matterhorn Protocol — the PDF Association's checkpoint framework for testing PDF/UA-1 conformance.",
        "WTPDF (Well-Tagged PDF) — a freely available PDF Association specification for tagged PDF aligned with the PDF 2.0 era."
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
          "period": "2004",
          "text": "AIIM Standards Committee begins work on a PDF accessibility standard."
        },
        {
          "period": "2005",
          "text": "Duff Johnson becomes committee chair."
        },
        {
          "period": "2008",
          "text": "PDF becomes an ISO standard as ISO 32000-1 (PDF 1.7), the base that PDF/UA-1 builds on."
        },
        {
          "period": "2009",
          "text": "AIIM committee becomes the U.S. committee for ISO/AWI 14289."
        },
        {
          "period": "2012 (July)",
          "text": "ISO 14289-1 (PDF/UA-1) first published."
        },
        {
          "period": "2012 (October)",
          "text": "U.S. Library of Congress lists PDF/UA among its format descriptions for page-oriented content."
        },
        {
          "period": "2013 (August)",
          "text": "Matterhorn Protocol published (31 checkpoints, 136 failure conditions)."
        },
        {
          "period": "2014 (June)",
          "text": "PDF/UA Reference Suite first published."
        },
        {
          "period": "2014 (December)",
          "text": "ISO 14289-1:2014 (corrected edition) published."
        },
        {
          "period": "2015 (February)",
          "text": "U.S. Access Board identifies PDF/UA as equivalent to WCAG 2.0 for appropriate content."
        },
        {
          "period": "2017",
          "text": "PDF 2.0 published as ISO 32000-2 (reissued 2020), later the basis for PDF/UA-2."
        },
        {
          "period": "2024 (March)",
          "text": "ISO 14289-2 (PDF/UA-2) published, aligned with PDF 2.0, adding MathML and expanded structure and annotation requirements."
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
      "slug": "what-is-pdf"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    },
    {
      "section": "glossary",
      "slug": "ocr"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    }
  ],
  "faqs": [
    {
      "q": "Is PDF/UA a different file format from a normal PDF?",
      "a": "No. A PDF/UA file is an ordinary PDF that additionally satisfies the requirements of ISO 14289 — chiefly complete and correct tagging. It opens in any PDF reader and prints identically to an untagged version."
    },
    {
      "q": "What is the difference between PDF/UA and WCAG?",
      "a": "WCAG is a general set of web-content accessibility guidelines that leaves format-specific details to interpretation. PDF/UA (ISO 14289) is the PDF-specific technical standard that states exactly how to meet accessibility inside PDF; the two are commonly used together for policy compliance."
    },
    {
      "q": "What is the difference between PDF/UA-1 and PDF/UA-2?",
      "a": "PDF/UA-1 (ISO 14289-1, first published 2012) builds on ISO 32000-1 (PDF 1.7). PDF/UA-2 (ISO 14289-2, published March 2024) builds on ISO 32000-2 (PDF 2.0), extends the model to PDF 2.0 structure types, and adds features such as accessible mathematics via MathML."
    },
    {
      "q": "Does PDF/UA affect how a document prints?",
      "a": "No. PDF/UA governs the semantic accessibility layer consumed by assistive technology. A printer's marking engine reproduces only the visible marks, so a PDF/UA file prints the same as the same file without tags."
    },
    {
      "q": "Can a file conform to both PDF/UA and PDF/A?",
      "a": "Yes. The profiles are complementary — PDF/A (ISO 19005) preserves long-term visual fidelity while PDF/UA preserves accessibility — and a single file can conform to both."
    }
  ],
  "sources": [
    {
      "title": "ISO 14289-1:2014 — Electronic document file format enhancement for accessibility (PDF/UA-1)",
      "url": "https://www.iso.org/standard/64599.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 14289-1:2012 (original edition record)",
      "url": "https://www.iso.org/standard/54564.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 14289-2:2024 (PDF/UA-2 record)",
      "url": "https://www.iso.org/standard/82278.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 32000-2:2017 (PDF 2.0 record)",
      "url": "https://www.iso.org/standard/63534.html",
      "publisher": "ISO"
    },
    {
      "title": "PDF/UA-1, PDF Enhancement for Accessibility, Use of ISO 32000-1 (format description)",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000350.shtml",
      "publisher": "U.S. Library of Congress"
    },
    {
      "title": "ISO 14289-1 — PDF Association resource page",
      "url": "https://pdfa.org/resource/iso-14289-pdfua/",
      "publisher": "PDF Association"
    },
    {
      "title": "ISO 14289-2 (PDF/UA-2)",
      "url": "https://pdfa.org/iso-14289-2-pdfua-2/",
      "publisher": "PDF Association"
    },
    {
      "title": "Well-Tagged PDF (WTPDF)",
      "url": "https://pdfa.org/wtpdf/",
      "publisher": "PDF Association"
    },
    {
      "title": "PDF/UA",
      "url": "https://en.wikipedia.org/wiki/PDF/UA",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "pdf/ua",
    "iso 14289",
    "pdf accessibility",
    "tagged pdf",
    "pdf/ua-1",
    "pdf/ua-2",
    "accessible pdf",
    "matterhorn protocol",
    "iso 32000",
    "assistive technology",
    "screen reader pdf",
    "wcag pdf"
  ],
  "cluster": "document-standards"
};

export default entry;
