import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "pdf-a",
  "title": "PDF/A",
  "description": "PDF/A (ISO 19005) is the archival subset of PDF for long-term preservation, using embedded fonts, device-independent color, and standardized metadata.",
  "summary": "PDF/A is the ISO 19005 archival profile of PDF. It constrains PDF into a self-contained, device-independent form so a document's visual appearance can be reproduced faithfully over the long term, regardless of the software or hardware used to create or render it.",
  "purpose": "An ISO-standardized archival subset of PDF for preserving a document's visual appearance over the long term.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "PDF/A is the archival subset of PDF (Portable Document Format), standardized by the International Organization for Standardization (ISO) as the ISO 19005 family. It defines a constrained, self-contained form of PDF whose purpose is the long-term preservation of electronic documents — specifically, preserving a document's static visual appearance over time, independent of the software, hardware, or operating systems used to create, store, or render it."
    },
    {
      "kind": "paragraph",
      "text": "The governing design principle is self-containment: a conforming file must carry everything required to reproduce it faithfully — fonts, color definitions, and metadata — and must exclude anything that ties rendering to an external resource or a future runtime environment, such as external font or color references, encryption, or executable content."
    },
    {
      "kind": "paragraph",
      "text": "PDF/A is not a new file format but a documented profile of PDF. Every PDF/A file is a valid PDF, but not every PDF is a valid PDF/A."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "PDF/A originated as a US initiative led by AIIM (the Association for Information and Image Management) and NPES (an association representing printing, publishing, and converting technology suppliers), with the Administrative Office of the U.S. Courts also named among the initiators. The work then moved into ISO under Technical Committee 171, Subcommittee 2 (ISO/TC 171/SC2), with AIIM acting as secretariat."
    },
    {
      "kind": "paragraph",
      "text": "Per the development record, an initial AIIM/NPES committee meeting took place in October 2002, an Initial Working Draft followed in 2003, and a New Work Item and Joint Working Group were formed the same year. The Draft International Standard was approved in 2005, and the first part was based on the Adobe PDF Reference 1.4."
    },
    {
      "kind": "paragraph",
      "text": "The first part, ISO 19005-1:2005 (PDF/A-1), was approved in September 2005 and published by ISO in 2005 (catalogued as ISO 19005-1:2005). Subsequent parts extended the family: ISO 19005-2:2011 (PDF/A-2), ISO 19005-3:2012 (PDF/A-3), and ISO 19005-4:2020 (PDF/A-4)."
    },
    {
      "kind": "paragraph",
      "text": "Some secondary sources report the exact publication month differently; the ISO catalog year is 2005."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Ordinary PDF files are not reliably self-contained. They may reference fonts installed only on the authoring machine, depend on device-specific color, embed encryption or JavaScript, link to external files or the network, or use features whose future rendering is uncertain. Such files can render differently — or not at all — years later."
    },
    {
      "kind": "paragraph",
      "text": "PDF/A addresses this by profiling PDF into a form that renders consistently and independently over the long term. That predictability is the core requirement for legal, governmental, library, and business records that must remain readable and visually faithful for decades."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "PDF/A works by restricting and requiring features of the underlying PDF specification."
    },
    {
      "kind": "paragraph",
      "text": "Required features:"
    },
    {
      "kind": "list",
      "items": [
        "Mandatory font embedding — all fonts used must be embedded so text renders identically without relying on system-installed fonts.",
        "Device-independent color — color must be specified reproducibly, using ICC color profiles or otherwise device-independent color spaces rather than device-dependent color.",
        "Standardized metadata — XMP (Extensible Metadata Platform) metadata is required, including an identifier marking the file as PDF/A and its part and conformance level."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Prohibited features:"
    },
    {
      "kind": "list",
      "items": [
        "Encryption, JavaScript and executable/launch actions, audio and video, external content references, and certain compression schemes (for example, LZW) are forbidden. Transparency and layers were not permitted in PDF/A-1, a restriction relaxed in later parts."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Conformance levels express how much semantic fidelity is preserved beyond visual appearance:"
    },
    {
      "kind": "list",
      "items": [
        "Level B (Basic) — guarantees reliable reproduction of the document's visual appearance; does not require Unicode text mapping or logical structure.",
        "Level U (Unicode) — adds reliable Unicode character mapping so text can be searched and copied correctly, but does not require logical structure or reading order. Introduced in PDF/A-2.",
        "Level A (Accessible/Tagged) — builds on Level B and adds Tagged PDF: logical document structure, defined reading order, and Unicode semantics, supporting accessibility and reliable text extraction."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Each part maps to an underlying PDF version:"
    },
    {
      "kind": "list",
      "items": [
        "PDF/A-1 — based on PDF 1.4; levels a and b.",
        "PDF/A-2 — based on PDF 1.7 (ISO 32000-1:2008); levels a, b, and u; adds JPEG 2000 compression, transparency, optional content (layers), and the ability to embed other PDF/A files as attachments.",
        "PDF/A-3 — based on PDF 1.7; levels a, b, and u; differs from PDF/A-2 only in permitting the embedding of arbitrary (non-PDF/A) file types as attachments, with an explicit relationship declared via the AFRelationship key.",
        "PDF/A-4 — based on PDF 2.0 (ISO 32000-2:2020); eliminates the a/b/u level distinction and instead defines the base PDF/A-4 plus optional flavors PDF/A-4f (non-PDF/A file attachments) and PDF/A-4e (engineering/3D content, such as RichMedia, PRC, or U3D)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "PDF/A sits at the output and archival end of the document lifecycle, after content is authored and laid out. A document is typically created in an authoring or rendering application and then exported to, or converted into, PDF/A as the preservation-ready deliverable."
    },
    {
      "kind": "paragraph",
      "text": "It is a container and exchange-and-storage format rather than a page-imaging or spooling language used to drive a marking engine."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "PDF/A is not a printer control language and is not sent to a printer's marking engine the way PostScript or PCL page-description output is. Its relationship to printing is indirect: because a PDF/A file embeds fonts and uses device-independent color, it is designed to be reproduced — on screen or on paper — consistently regardless of the output device."
    },
    {
      "kind": "paragraph",
      "text": "PDF/A targets faithful reproduction of appearance, but the actual rasterization for a specific printer is handled by a PDF-capable print pipeline or RIP, not by PDF/A itself. The print-production sibling standard for reliable prepress output is PDF/X, a separate ISO profile."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "PDF/A is explicitly OS-independent — independence from the operating system and rendering software is one of its motivating goals. A conforming file is meant to render identically across platforms and over time."
    },
    {
      "kind": "paragraph",
      "text": "Because font and color resources are embedded rather than resolved from the host OS, PDF/A avoids the platform-specific font-substitution and color-management differences that can otherwise alter a document's appearance across operating systems."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "PDF/A is a constrained profile of PDF, so it inherits PDF's imaging model, which itself descends from Adobe's PostScript page-description model. PDF is a fixed-layout, object-based document format derived from PostScript concepts."
    },
    {
      "kind": "paragraph",
      "text": "Each PDF/A part is pinned to a specific base PDF version: PDF 1.4 for PDF/A-1, PDF 1.7 for PDF/A-2 and PDF/A-3, and PDF 2.0 for PDF/A-4. In practice, PDF/A files are produced by \"PDF printer\" and export drivers or by conversion libraries that emit conforming PDF and then embed fonts, attach ICC profiles, write the XMP identifier, and strip prohibited constructs."
    },
    {
      "kind": "paragraph",
      "text": "PDF/A does not replace PostScript or printer drivers; it defines what the resulting archival PDF is allowed to contain."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "PDF/A is widely used for long-term document preservation and records management, including government and court e-filing, libraries and archives, corporate records retention, and regulated recordkeeping."
    },
    {
      "kind": "paragraph",
      "text": "Later parts enabled hybrid use cases. PDF/A-3's arbitrary-attachment capability underpins electronic-invoicing formats that embed structured machine-readable data (for example, XML) inside a human-readable archival PDF, as used by invoice standards such as ZUGFeRD and Factur-X."
    },
    {
      "kind": "paragraph",
      "text": "Conformance is checked with validators. veraPDF is the reference PDF/A validator, developed by the PDF Association and the Open Preservation Foundation with the digital-preservation community, offering GUI, command-line/batch, and API validation against the ISO 19005 specifications."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Self-contained and reproducible: appearance is preserved without external dependencies.",
        "OS-, hardware-, and software-independent rendering intended to remain stable over decades.",
        "Standardized, machine-readable identification and metadata (XMP) for archival management.",
        "Multiple conformance levels let organizations trade off effort against fidelity — visual-only (B), searchable (U), or fully accessible and structured (A).",
        "Backed by an open ISO standard and an open reference validator (veraPDF), reducing vendor lock-in."
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
        "Feature restrictions: no encryption, JavaScript, audio/video, external references, or executable/launch actions; PDF/A-1 additionally disallowed transparency and layers.",
        "Higher fidelity levels are demanding: true Level A (Tagged) requires correct logical structure and Unicode semantics, which is hard to achieve for scanned or poorly authored documents.",
        "Larger files: mandatory font and color-profile embedding increases size relative to non-embedded PDFs.",
        "Conformance is a claim that must be validated; a file merely labeled PDF/A is not guaranteed to conform, and different parts and levels have materially different requirements.",
        "By design, PDF/A preserves visual appearance rather than full interactivity or dynamic behavior — dynamic content is deliberately excluded."
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
        "PDF (ISO 32000) — the base standard PDF/A profiles (ISO 32000-1 corresponds to PDF 1.7; ISO 32000-2 to PDF 2.0).",
        "PDF/X — an ISO profile of PDF for reliable print and graphic-arts production (prepress).",
        "PDF/UA (ISO 14289) — PDF for universal accessibility; PDF/A Level A and PDF/UA are complementary for accessible archives.",
        "PDF/E — a PDF profile for engineering documents.",
        "XMP (ISO 16684) — the metadata framework PDF/A requires for identification.",
        "ICC profiles — used to specify device-independent color in PDF/A."
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
          "period": "2002",
          "text": "Initial AIIM/NPES PDF/A committee work begins in the US; the effort later moves into ISO/TC 171/SC2."
        },
        {
          "period": "2003",
          "text": "Initial Working Draft prepared; New Work Item approved and Joint Working Group formed."
        },
        {
          "period": "2005",
          "text": "Draft International Standard approved and ISO 19005-1:2005 (PDF/A-1) published, based on PDF 1.4; conformance levels A and B."
        },
        {
          "period": "2011",
          "text": "ISO 19005-2:2011 (PDF/A-2) published, based on PDF 1.7 (ISO 32000-1:2008); adds Level U, transparency, layers, JPEG 2000, and embedding of PDF/A attachments."
        },
        {
          "period": "2012",
          "text": "ISO 19005-3:2012 (PDF/A-3) published; like PDF/A-2 but permits arbitrary file-type attachments."
        },
        {
          "period": "2020",
          "text": "ISO 19005-4:2020 (PDF/A-4) published, based on PDF 2.0 (ISO 32000-2:2020); replaces a/b/u levels with base PDF/A-4 plus optional PDF/A-4e and PDF/A-4f."
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
      "slug": "iso-32000"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
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
      "section": "history",
      "slug": "enterprise-document-management"
    }
  ],
  "faqs": [
    {
      "q": "Is every PDF a PDF/A?",
      "a": "No. PDF/A is a constrained profile of PDF. Every PDF/A file is a valid PDF, but a general PDF must meet additional requirements — embedded fonts, device-independent color, XMP identification, and no prohibited features — to qualify as PDF/A."
    },
    {
      "q": "What is the difference between PDF/A conformance levels A, B, and U?",
      "a": "Level B guarantees reliable reproduction of visual appearance. Level U adds reliable Unicode character mapping so text can be searched and copied. Level A adds Tagged PDF with logical structure and reading order for accessibility. Level U was introduced in PDF/A-2."
    },
    {
      "q": "How is PDF/A different from PDF/X?",
      "a": "PDF/A is an ISO profile for long-term archival preservation of a document's appearance. PDF/X is a separate ISO profile aimed at reliable print and graphic-arts production (prepress). They serve different stages of the document lifecycle."
    },
    {
      "q": "How do you verify that a file really conforms to PDF/A?",
      "a": "Conformance is a claim that must be validated. veraPDF, developed by the PDF Association and Open Preservation Foundation, is the reference validator and checks files against the ISO 19005 specifications via GUI, command line, or API."
    },
    {
      "q": "Why can PDF/A files embed other files, and what is that used for?",
      "a": "PDF/A-3 permits embedding arbitrary (non-PDF/A) attachments, declared via the AFRelationship key. This underpins e-invoicing formats such as ZUGFeRD and Factur-X, which embed machine-readable XML inside a human-readable archival PDF."
    }
  ],
  "sources": [
    {
      "title": "ISO 19005-1:2005 — Document management — Electronic document file format for long-term preservation — Part 1: Use of PDF 1.4 (PDF/A-1)",
      "url": "https://www.iso.org/standard/38920.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-4:2020 — Document management — Electronic document file format for long-term preservation — Part 4: Use of ISO 32000-2 (PDF/A-4)",
      "url": "https://www.iso.org/standard/71832.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005 (PDF/A) — overview of parts, years, and base PDF versions",
      "url": "https://pdfa.org/resource/iso-19005-pdfa/",
      "publisher": "PDF Association"
    },
    {
      "title": "The PDF/A Standards — parts, conformance levels, and added features",
      "url": "https://www.pdflib.com/pdf-knowledge-base/pdfa/the-pdfa-standards/",
      "publisher": "PDFlib GmbH"
    },
    {
      "title": "History and origin of the PDF/A format",
      "url": "https://www.pdf-tools.com/pdf-knowledge/history-origin-format-pdfa/",
      "publisher": "PDF Tools AG"
    },
    {
      "title": "What is PDF/A? Requirements, prohibited features, and validation",
      "url": "https://www.nutrient.io/blog/what-is-pdf-a/",
      "publisher": "Nutrient"
    },
    {
      "title": "veraPDF — the industry-supported PDF/A validation reference",
      "url": "https://verapdf.org/",
      "publisher": "veraPDF Consortium / PDF Association / Open Preservation Foundation"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "pdf/a",
    "iso 19005",
    "pdf archiving",
    "long-term preservation",
    "pdf/a-1",
    "pdf/a-2",
    "pdf/a-3",
    "pdf/a-4",
    "verapdf",
    "archival pdf",
    "tagged pdf",
    "conformance levels"
  ],
  "cluster": "document-standards"
};

export default entry;
