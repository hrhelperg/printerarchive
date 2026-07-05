import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "postscript",
  "title": "PostScript",
  "description": "PostScript is Adobe's device-independent page-description language and stack-based programming language that launched desktop publishing in the 1980s.",
  "summary": "PostScript is a page-description language and stack-based programming language created by Adobe Systems and first brought to market in 1984. It describes the appearance of a page — text, vector graphics, sampled images, and color — independently of any specific output device, and is interpreted by a Raster Image Processor (RIP) that renders it at the device's native resolution. First shipped in the Apple LaserWriter in 1985, PostScript's device-independent imaging model became the technical foundation of desktop publishing and later of Adobe's Portable Document Format (PDF).",
  "purpose": "A device-independent page-description language for describing printed and displayed pages.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "PostScript's conceptual lineage predates Adobe. Related ideas trace to page and imaging languages developed at Xerox PARC, including the \"Press\" printer format of the mid-1970s and \"JaM\" (created in 1978 by Martin Newell and John Gaffney). At Xerox PARC, a group that included John Warnock and Charles Geschke worked on Interpress, a page-description language for controlling laser printers. When Xerox was slow to commercialize Interpress, Warnock and Geschke left to build a product of their own."
    },
    {
      "kind": "paragraph",
      "text": "Warnock and Geschke founded Adobe Systems in December 1982 (the company was named after Adobe Creek). Working with Doug Brotz, Ed Taft, and Bill Paxton, they developed PostScript — a language conceptually related to Interpress but redesigned. PostScript was Adobe's first product and reached the market in 1984. The earliest surviving source code, released publicly by the Computer History Museum in 2022 with Adobe's permission, is dated to late February 1984 (this is the date of the surviving artifact, not necessarily the first PostScript code ever written)."
    },
    {
      "kind": "paragraph",
      "text": "A pivotal early relationship was with Apple. Steve Jobs engaged Adobe around 1983, and Apple licensed PostScript (accounts cite a royalty advance together with an equity investment, though the exact figures differ between sources). Apple's LaserWriter, announced January 23, 1985 and shipping that year, was the first printer to ship with PostScript. Combined with page-layout software such as Aldus PageMaker and the Macintosh, the LaserWriter is widely credited with launching the desktop-publishing revolution of the mid-1980s."
    },
    {
      "kind": "paragraph",
      "text": "Subsequent major revisions followed: PostScript Level 2 in 1991 and PostScript 3, announced at the end of 1997 (with products shipping around 1998). The original 1984 release was simply \"PostScript\"; the \"Level 1\" designation was applied retroactively once Level 2 existed. Adobe also created Display PostScript (DPS) to use the same imaging model for on-screen rendering, notably on NeXT computers. In the 1990s Adobe developed PDF, which shares PostScript's imaging model, and over the 2000s print workflows increasingly shifted toward PDF-based pipelines."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before device-independent page-description languages, output was tightly coupled to specific printer hardware and command sets: fonts, layouts, and graphics often had to be re-authored or re-encoded for each device, and quality was limited by device-specific bitmap fonts and control codes."
    },
    {
      "kind": "paragraph",
      "text": "PostScript let a single document description drive many different output devices — from an office laser printer to a high-resolution imagesetter — at each device's native resolution. Because everything (text, line art, and images) was expressed in one common mathematical model, content could be scaled, rotated, and positioned freely, and the same file could produce consistent results across different manufacturers' devices. This decoupling of document content from device hardware is what made professional-quality output reproducible and portable."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A PostScript file is a program written in the PostScript language. The language uses postfix (reverse-Polish) notation and an operand stack: operators consume operands that have been pushed onto the stack. It describes an imaging model in which all marks on the page are built from straight lines and cubic Bézier curves — filled or stroked — plus sampled (raster) images and color. Text is treated as graphics: glyphs are outline descriptions, and Adobe's Type 1 font format uses Bézier outlines together with \"hinting,\" procedures that improve legibility at low resolutions."
    },
    {
      "kind": "paragraph",
      "text": "An interpreter — the Raster Image Processor, or RIP — executes the program. Because PostScript is a full, dynamically typed, Turing-complete programming language, a file can contain variables, procedures, loops, and conditionals, and can compute content at RIP time. The interpreter maintains a graphics state (current transformation matrix, colors, clipping path, current font, and so on). The final step is rasterization: converting the resolution-independent description into a pixel or dot bitmap at the output device's resolution."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "PostScript sits between the authoring application and the physical marking engine. An application, or its print driver, generates a PostScript description of the page. That description is transmitted to a RIP — which may live inside the printer, in a dedicated hardware or software RIP server, or as a software component on a host computer."
    },
    {
      "kind": "paragraph",
      "text": "The RIP interprets the PostScript, applies device-specific settings such as resolution, halftoning or screening, and color separations, and produces the raster that drives the marking engine (laser printer, imagesetter, platesetter, and the like). In prepress specifically, PostScript historically carried jobs from design applications through to imagesetters and platemaking. To make files more portable and predictable across this pipeline, Adobe defined the Document Structuring Conventions (DSC), a commenting and structuring convention for PostScript files."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "PostScript is a printer-control and imaging language, and a \"PostScript printer\" is one containing (or fed by) a PostScript interpreter/RIP. The first such printer was the Apple LaserWriter, announced in 1985."
    },
    {
      "kind": "paragraph",
      "text": "Many manufacturers licensed PostScript to build compatible devices, which is part of why it became a cross-vendor standard in professional printing. High-end, office, and workgroup laser printers commonly supported PostScript. Over time, low-cost consumer printers — especially inkjets — frequently omitted onboard PostScript in favor of cheaper host-based rendering and simpler proprietary or standardized languages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "PostScript's imaging model influenced operating-system display technology. Adobe created Display PostScript (DPS) to render on screen using the same model used for print; DPS was used most prominently in NeXTSTEP on NeXT computers."
    },
    {
      "kind": "paragraph",
      "text": "On other platforms, PostScript is typically handled through printing subsystems and drivers rather than serving as the native screen-imaging model. On Unix and Linux, the CUPS printing system and interpreters such as Ghostscript (a PostScript/PDF interpreter) are commonly used to process PostScript. Windows and macOS support PostScript printing via drivers and print pipelines, though modern systems increasingly use PDF-centric spooling."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "PDF (Portable Document Format), developed by Adobe in the 1990s, shares PostScript's imaging model, and the two are largely mutually convertible for their graphics and text content. The key difference is that PostScript is a general-purpose programming language — with variables, control flow, and RIP-time computation — whereas PDF is a fixed, page-oriented document format that deliberately omits general programmability. That omission makes PDF more predictable, page-random-access, and easier to view and archive."
    },
    {
      "kind": "paragraph",
      "text": "EPS (Encapsulated PostScript) is a constrained PostScript form used to embed a single graphic in other documents. On the driver side, print drivers or applications emit PostScript — often following Adobe's Document Structuring Conventions (DSC) — for a RIP to interpret. Over time, print workflows have shifted toward PDF as the interchange format (for example, Adobe's PDF Print Engine initiative in the 2000s), with PDF increasingly replacing PostScript as the file that moves through the pipeline."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "PostScript remains in use in professional and high-end printing and prepress, and interpreters such as Ghostscript keep it usable across platforms for viewing, conversion, and printing. However, its role has narrowed: PDF has become the dominant document interchange format and increasingly the native print-pipeline format, and many consumer printers never included PostScript."
    },
    {
      "kind": "paragraph",
      "text": "PostScript's imaging model persists indirectly through PDF, which is derived from it. The Type 1 font format built for PostScript has also been largely superseded — Adobe stopped developing Type 1 fonts and ended support for them across its applications after January 2023 — with OpenType (co-developed by Adobe and Microsoft) serving as the common successor."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Device independence: one description drives many devices, each at its native resolution.",
        "Unified imaging model: text, vector art, and images are described in one mathematical framework, so content can be scaled, rotated, and transformed without loss.",
        "Cross-vendor standardization through licensing, with publicly available language specifications.",
        "Full programmability: a page can be computed at RIP time, enabling flexible, data-driven output.",
        "High-quality typography via outline fonts with hinting."
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
        "Programmability adds complexity and potential unpredictability: a job's output can depend on interpreter state and execution, and files are not random-access by page.",
        "Interpreting and rasterizing complex PostScript can be computationally heavy, historically requiring capable RIPs.",
        "No built-in page-independence or the fixed, self-contained predictability that PDF later provided; PostScript also lacks native features PDF added over time, such as transparency in later PDF versions.",
        "Onboard PostScript interpreters added cost, contributing to its absence on many low-end printers.",
        "As a general language, poorly structured PostScript can be fragile across interpreters, which is why conventions like DSC were needed to make files more portable."
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
        "Interpress (Xerox) — the page-description language predecessor from which PostScript conceptually descended.",
        "PCL (Printer Command Language) — an alternative printer-language ecosystem.",
        "PDF — Adobe's fixed-layout document format, which shares PostScript's imaging model.",
        "EPS (Encapsulated PostScript) — a single-graphic subset used for embedding.",
        "Document Structuring Conventions (DSC) — a commenting and structuring convention for portable PostScript files.",
        "Type 1 fonts / OpenType — the PostScript outline font format and its later successor.",
        "Print subsystems and interpreters — such as CUPS and Ghostscript — used to process PostScript."
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
          "period": "mid-1970s",
          "text": "Xerox PARC develops the \"Press\" printer format."
        },
        {
          "period": "1978",
          "text": "\"JaM\" language created at Xerox PARC by Martin Newell and John Gaffney."
        },
        {
          "period": "late 1970s–early 1980s",
          "text": "Interpress developed at Xerox PARC (contributors include Warnock and Geschke); Xerox is slow to commercialize it."
        },
        {
          "period": "December 1982",
          "text": "John Warnock and Charles Geschke found Adobe Systems."
        },
        {
          "period": "1983 (era)",
          "text": "Steve Jobs / Apple engages Adobe; Apple licenses PostScript."
        },
        {
          "period": "February 1984 (era)",
          "text": "Date of the earliest surviving PostScript source code, later released publicly by the Computer History Museum in 2022."
        },
        {
          "period": "1984",
          "text": "PostScript first brought to market (later retroactively called Level 1); Adobe's first product."
        },
        {
          "period": "January 23, 1985",
          "text": "Apple LaserWriter announced; the first printer to ship with PostScript, catalyzing desktop publishing."
        },
        {
          "period": "late 1980s",
          "text": "Display PostScript created; used on NeXT computers."
        },
        {
          "period": "1991",
          "text": "PostScript Level 2 introduced (in-RIP separations, image decompression such as JPEG/CCITT, composite fonts, forms and caching)."
        },
        {
          "period": "1990s",
          "text": "Adobe develops PDF, sharing PostScript's imaging model."
        },
        {
          "period": "1997",
          "text": "PostScript 3 announced (products shipping around 1998); improved color handling and new filters."
        },
        {
          "period": "2000s",
          "text": "Print workflows shift toward PDF-based pipelines (for example, Adobe PDF Print Engine); onboard PostScript becomes uncommon on low-end printers."
        },
        {
          "period": "2022",
          "text": "Computer History Museum publicly releases early PostScript source code, with Adobe's permission."
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
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "history",
      "slug": "history-of-desktop-publishing"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "tools",
      "slug": "iso-32000"
    },
    {
      "section": "tools",
      "slug": "pcl"
    },
    {
      "section": "tools",
      "slug": "what-is-pdf"
    }
  ],
  "faqs": [
    {
      "q": "Is PostScript a programming language or a file format?",
      "a": "Both. PostScript is a full, dynamically typed, stack-based, Turing-complete programming language, and a PostScript file is a program in that language. It functions as a page-description format because those programs describe the appearance of a page for an interpreter (RIP) to render."
    },
    {
      "q": "What is the difference between PostScript and PDF?",
      "a": "They share the same imaging model, but PostScript is a general-purpose programming language with variables, control flow, and computation performed at print time, whereas PDF is a fixed, page-oriented document format that omits general programmability. That makes PDF more predictable, page-random-access, and easier to view and archive. PDF was developed by Adobe in the 1990s and has largely become the dominant interchange and print-pipeline format."
    },
    {
      "q": "What was the first PostScript printer?",
      "a": "The Apple LaserWriter, announced January 23, 1985, was the first printer to ship with PostScript. Combined with page-layout software and the Macintosh, it is widely credited with launching the desktop-publishing revolution of the mid-1980s."
    },
    {
      "q": "Who created PostScript?",
      "a": "PostScript was created at Adobe Systems, founded in December 1982 by John Warnock and Charles Geschke, who had previously worked on the Interpress page-description language at Xerox PARC. The development team also included Doug Brotz, Ed Taft, and Bill Paxton. PostScript was Adobe's first product and reached the market in 1984."
    },
    {
      "q": "Is PostScript still used today?",
      "a": "Yes, but in a narrowed role. It remains in use in professional and high-end printing and prepress, and interpreters such as Ghostscript keep it usable across platforms. However, PDF has become the dominant document interchange and print-pipeline format, and many consumer printers never included PostScript. Its imaging model persists indirectly through PDF, which is derived from it."
    }
  ],
  "sources": [
    {
      "title": "PostScript",
      "url": "https://en.wikipedia.org/wiki/PostScript",
      "publisher": "Wikipedia"
    },
    {
      "title": "LaserWriter",
      "url": "https://en.wikipedia.org/wiki/LaserWriter",
      "publisher": "Wikipedia"
    },
    {
      "title": "Adobe Inc.",
      "url": "https://en.wikipedia.org/wiki/Adobe_Inc.",
      "publisher": "Wikipedia"
    },
    {
      "title": "Adobe Inc. History, Products & Facts",
      "url": "https://www.britannica.com/money/Adobe-Systems-Incorporated",
      "publisher": "Encyclopaedia Britannica"
    },
    {
      "title": "Computer History Museum Makes Adobe PostScript's Source Code Available to the Public",
      "url": "https://computerhistory.org/press-releases/computer-history-museum-makes-adobe-postscripts-source-code-available-to-the-public-as-a-part-of-its-art-of-code-series/",
      "publisher": "Computer History Museum"
    },
    {
      "title": "PostScript: A Digital Printing Press",
      "url": "https://computerhistory.org/blog/postscript-a-digital-printing-press/",
      "publisher": "Computer History Museum"
    },
    {
      "title": "Inventing PostScript, the Tech That Took the Pain out of Printing",
      "url": "https://spectrum.ieee.org/adobe-postscript",
      "publisher": "IEEE Spectrum"
    },
    {
      "title": "How PostScript Kickstarted Desktop Publishing",
      "url": "https://spectrum.ieee.org/adobe-postscript-code",
      "publisher": "IEEE Spectrum"
    },
    {
      "title": "PostScript Type 1 fonts end of support",
      "url": "https://helpx.adobe.com/fonts/kb/postscript-type-1-fonts-end-of-support.html",
      "publisher": "Adobe"
    },
    {
      "title": "The history of Adobe PostScript",
      "url": "https://www.prepressure.com/postscript/basics/history",
      "publisher": "Prepressure"
    },
    {
      "title": "Apple Announces New High-Resolution Laser Printer (archived 1985 press release)",
      "url": "https://www.tech-insider.org/mac/research/1985/0123-a.html",
      "publisher": "Apple (archived)"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "postscript",
    "page-description language",
    "adobe",
    "pdl",
    "raster image processor",
    "rip",
    "desktop publishing",
    "laserwriter",
    "pdf",
    "type 1 fonts",
    "display postscript",
    "eps"
  ],
  "cluster": "page-description-languages"
};

export default entry;
