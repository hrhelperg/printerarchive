import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "hp-gl",
  "title": "HP-GL (Hewlett-Packard Graphics Language)",
  "description": "HP-GL is Hewlett-Packard's vector command language for pen plotters; HP-GL/2 became the vector-graphics layer of PCL 5.",
  "summary": "HP-GL (Hewlett-Packard Graphics Language) is a vector graphics command language created by Hewlett-Packard to drive pen plotters. It represents drawings as a stream of short, human-readable two-letter instructions that move a pen, raise or lower it, select pens, and draw primitives such as lines, arcs, circles, and stroked text. Because it describes geometry rather than pixels, an HP-GL file is resolution-independent. Its successor, HP-GL/2, added programmable line width and a compact encoded coordinate format, and became the vector-graphics component of HP's PCL 5 printer language, bringing plotter-style vector output to raster laser and inkjet printers. HP-GL/2 remains the vector layer of the PCL family and a native input language for wide-format plotters.",
  "purpose": "A vector command language for driving pen plotters, later embedded as the vector-graphics layer of PCL 5.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "HP-GL was introduced with the HP 9872 plotter in 1977 and went on to be supported across HP's plotter line, becoming a broadly adopted standard for almost all plotters of the era. Its precise internal origin story is documented by HP's San Diego Division, but the primary HP narrative could not be retrieved directly during research, so individual attributions are deliberately omitted here."
    },
    {
      "kind": "paragraph",
      "text": "Through the late 1970s and the 1980s, HP-GL spread beyond HP hardware as CAD, drafting, and technical-illustration software adopted it as a common export format for driving plotters. Files were typically given extensions such as .plt, .hgl, or .hpgl."
    },
    {
      "kind": "paragraph",
      "text": "HP-GL/2, the second-generation language, was standardized as the vector-graphics portion of HP's PCL 5 printer command language. PCL 5 (which also added Intellifont scalable fonts) shipped on the HP LaserJet III in 1990, bringing plotter-style vector output to office laser printers alongside PCL raster graphics and text. HP paired HP-GL/2 with HP RTL (Raster Transfer Language) so that a single data stream could carry both vector and raster content — the model used by HP DesignJet wide-format plotters."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Early digital plotters needed a compact, device-oriented way to be told what to draw. Sending a full raster bitmap was impractical: plotters draw with physical pens, and the natural description of an engineering drawing is a set of lines and curves, not pixels. HP-GL provided:"
    },
    {
      "kind": "list",
      "items": [
        "A resolution-independent description of a drawing (geometry, not dots), so the same file could drive plotters of different precision.",
        "A compact, low-bandwidth command stream suited to the slow serial and GPIB links of the era.",
        "A hardware-neutral vocabulary that application software could target once, instead of writing a bespoke driver for every plotter model — which is why it became a common CAD export format."
      ]
    },
    {
      "kind": "paragraph",
      "text": "HP-GL/2 later addressed HP-GL's gaps — notably the absence of programmable line width and the verbosity of ASCII coordinates — and allowed vector content to coexist with raster and text on raster printers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "An HP-GL program is a sequence of instructions, each consisting of a two-letter mnemonic, zero or more parameters separated by commas, and a terminator (the semicolon by default). Whitespace and line breaks are generally ignored except inside label text. For example, PA100,100; moves to absolute coordinate (100,100) and SP2; selects pen number 2."
    },
    {
      "kind": "paragraph",
      "text": "Core concepts:"
    },
    {
      "kind": "list",
      "items": [
        "Pen motion and state. PU (pen up) and PD (pen down) control whether motion draws a line. PA (plot absolute) and PR (plot relative) move the pen to coordinates. SP (select pen) chooses among the pens available in the plotter's carousel.",
        "Coordinate system. Native plotter units are fine and integer-based; HP-GL's plotter unit is 0.025 mm (25 micrometres), i.e. 40 units per millimetre and 1016 per inch. IP sets scaling points and SC maps a user coordinate system onto them, enabling scaling, mirroring, and drawing in real-world units.",
        "Primitives. Commands draw arcs, circles, rectangles, wedges, and filled polygons, with line style set by a line-type command.",
        "Text. Labels are drawn as stroked characters, with controls for size, slant, and direction.",
        "Setup. Initialization and default-mode commands reset the device; a clipping window and coordinate rotation can also be set."
      ]
    },
    {
      "kind": "paragraph",
      "text": "HP-GL/2 adds and refines several capabilities. It introduced a programmable pen width (PW) and pen color assignment (PC) — line width was not expressible in original HP-GL, where thickness came from the physical pen loaded. It also added improved line and fill attributes and Polyline Encoded (PE), a compact, binary-capable encoding of coordinate deltas and pen flags that produces smaller files and shorter transfer times than verbose ASCII coordinate lists. HP-GL/2 groups its commands into functional sets covering configuration and status, vector drawing, polygons, line-and-fill attributes, and characters."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "HP-GL is an output and device-control language near the end of the pipeline: an application (CAD, drafting, illustration) generates the drawing and serializes it to HP-GL or HP-GL/2, which the plotter or printer's interpreter consumes to produce marks on media."
    },
    {
      "kind": "paragraph",
      "text": "In the PCL world, HP-GL/2 is not a standalone file wrapper but a mode within a PCL data stream. PCL establishes a picture frame on the page, then hands off to HP-GL/2 to draw vectors inside it, and can return to PCL for text and raster. This lets vector drawings, raster images (via HP RTL), and PCL text share a single page."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "HP-GL originated as a plotter language, but HP-GL/2 is directly supported by many raster printers because it is the vector-graphics layer of PCL 5 and later. On such printers the interpreter rasterizes HP-GL/2 vectors to the device's dot grid at print time."
    },
    {
      "kind": "paragraph",
      "text": "On true plotters and wide-format devices, HP-GL/2 — often combined with HP RTL for raster content — is a primary native input language. HP DesignJet large-format printers are a canonical modern example of devices that accept HP-GL/2."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "HP-GL/2 is a device language rather than an operating-system feature, but operating systems expose it through their printing subsystems. Microsoft Windows, for example, documents HP-GL/2 monochrome (PCL-5e) vector graphics as a vector output path for printer drivers, allowing a driver to emit data in the format that is optimal for the device."
    },
    {
      "kind": "paragraph",
      "text": "On Unix and Linux, plotting has historically been driven either by applications emitting HP-GL directly to a device or through print spoolers, with HP-GL/2 inside PCL handled by PCL interpreters. In all cases the operating system's role is to transport the language to the device or driver, not to define it."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "list",
      "items": [
        "PostScript. PostScript (Adobe) is a general page-description language spanning text, vector, and raster with its own imaging model; HP-GL/2 is a narrower, plotter-derived vector language embedded within PCL. They are parallel device languages from different vendors rather than layers of one stack. Many CAD tools could export to either an HP-GL/2 plotter or a PostScript device via the appropriate driver.",
        "PDF. PDF (Adobe, later ISO 32000) is a document interchange and archival format, not a device-control stream. HP-GL and .plt files are frequently converted into PDF (and vice versa) so that plotter drawings can be viewed and archived; the two serve different roles.",
        "Drivers. In practice a printer or plotter driver is what emits HP-GL/2, usually wrapped in PCL, from an application's drawing. HP-GL/2's design goal of a common vector vocabulary reduced the per-model driver burden.",
        "CAD formats. In CAD workflows, drawings are authored in formats such as AutoCAD DXF/DWG and then plotted to HP-GL or HP-GL/2 (often .plt) for output; HP-GL is an output format, not an editable design format."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Pen plotters are largely obsolete, but HP-GL/2 persists in several roles:"
    },
    {
      "kind": "list",
      "items": [
        "As the vector-graphics component of PCL, still implemented in many laser and inkjet printers.",
        "As a native input language for wide-format and large-format plotters (for example, HP DesignJet) used in architecture, engineering, and construction, GIS, and technical printing.",
        "As a legacy interchange and output format: because nearly every CAD package could export HP-GL, large archives of .plt and .hpgl files exist, and conversion tools translate them to PDF, SVG, and other modern formats.",
        "In fabrication-adjacent uses, HP-GL-style vector output is sometimes consumed by cutting plotters and CNC or laser tools that follow pen-up/pen-down motion semantics."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Resolution-independent vector description: one file renders crisply at any device resolution.",
        "Compact and low-bandwidth, especially in HP-GL/2's Polyline Encoded (PE) form.",
        "A simple, readable, well-documented command set that is easy to generate programmatically.",
        "Broad, long-standing support across plotters and PCL printers, plus near-universal historical CAD export support — giving strong interoperability and longevity.",
        "HP-GL/2 integrates cleanly with PCL text and HP RTL raster, so mixed-content pages are possible."
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
        "Original HP-GL could not express line width (thickness came from the physical pen), limited color to the pens in the carousel, and used verbose ASCII coordinates — all addressed only in HP-GL/2.",
        "It is a device-control language, not a document or editing format: no reflowable text, no interactive features, weak metadata, and limited standardized handling of embedded raster images (raster requires the companion HP RTL).",
        "The imaging model is narrower than PostScript or PDF, with more limited typography, transparency, and color management than full page-description languages.",
        "It is vendor-originated and vendor-controlled rather than an independent ISO/IEC standard, so behavior can vary between implementations and dialects."
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
        "PCL (Printer Command Language, HP) — HP-GL/2 is embedded as its vector-graphics component from PCL 5 onward.",
        "HP RTL (Raster Transfer Language, HP) — companion language carrying raster data alongside HP-GL/2 vectors, notably on DesignJet plotters.",
        "PostScript (Adobe) — a competing device page-description language.",
        "PDF / ISO 32000 (Adobe/ISO) — portable document format and a common conversion target for HP-GL drawings.",
        "DXF / DWG (Autodesk) — CAD interchange formats commonly plotted to HP-GL or HP-GL/2."
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
          "period": "1977",
          "text": "HP-GL introduced with the HP 9872 plotter; it becomes a widely adopted plotter language."
        },
        {
          "period": "Late 1970s–1980s",
          "text": "HP-GL adopted broadly by CAD and drafting software as a standard plotter export and output format."
        },
        {
          "period": "1990",
          "text": "PCL 5, incorporating HP-GL/2 vector graphics and Intellifont scalable fonts, ships on the HP LaserJet III, bringing vector output to office laser printers."
        },
        {
          "period": "1990s onward",
          "text": "HP-GL/2 paired with HP RTL becomes the language model for HP DesignJet wide-format plotters; HP-GL/2 remains the vector layer of later PCL revisions."
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
      "section": "brands",
      "slug": "hewlett-packard"
    },
    {
      "section": "tools",
      "slug": "pcl"
    },
    {
      "section": "guides",
      "slug": "page-wide-printing"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "tools",
      "slug": "what-is-pdf"
    },
    {
      "section": "guides",
      "slug": "how-printer-drivers-work"
    }
  ],
  "faqs": [
    {
      "q": "What is HP-GL?",
      "a": "HP-GL (Hewlett-Packard Graphics Language) is a vector command language developed by Hewlett-Packard to drive pen plotters. Each instruction is a two-letter mnemonic with optional numeric parameters that tells the device to move a pen, raise or lower it, select a pen, or draw primitives such as lines, arcs, circles, and stroked text. Because it describes geometry rather than pixels, an HP-GL file is resolution-independent."
    },
    {
      "q": "What is the difference between HP-GL and HP-GL/2?",
      "a": "HP-GL/2 is the second-generation language. It added capabilities missing from original HP-GL — notably programmable line width (PW), pen color assignment (PC), improved line and fill attributes, and the compact, binary-capable Polyline Encoded (PE) coordinate format. HP-GL/2 was standardized as the vector-graphics component of HP's PCL 5 printer language, which shipped on the HP LaserJet III in 1990."
    },
    {
      "q": "When was HP-GL introduced?",
      "a": "HP-GL was introduced with the HP 9872 plotter in 1977 and became a widely adopted standard across plotters. HP-GL/2 arrived later as the vector layer of PCL 5, which shipped on the HP LaserJet III in 1990. The two are distinct: original HP-GL is the standalone plotter language, while HP-GL/2 is the PCL-embedded vector language."
    },
    {
      "q": "Is HP-GL an ISO standard?",
      "a": "No. HP-GL and HP-GL/2 are vendor languages created and controlled by Hewlett-Packard, later embedded within HP's PCL printer command language. There is no evidence they were standardized as an independent ISO/IEC standard, so behavior can vary somewhat between implementations and dialects."
    },
    {
      "q": "Is HP-GL still used today?",
      "a": "Yes, mainly as HP-GL/2. It remains the vector-graphics component of PCL, implemented in many laser and inkjet printers, and it is a native input language for wide-format plotters such as HP DesignJet used in architecture, engineering, construction, and GIS. Large archives of legacy .plt and .hpgl files are also routinely converted to PDF, SVG, and other formats."
    }
  ],
  "sources": [
    {
      "title": "HP-GL",
      "url": "https://en.wikipedia.org/wiki/HP-GL",
      "publisher": "Wikipedia"
    },
    {
      "title": "Printer Command Language",
      "url": "https://en.wikipedia.org/wiki/Printer_Command_Language",
      "publisher": "Wikipedia"
    },
    {
      "title": "PCL5 — HP Developer Portal",
      "url": "https://developers.hp.com/hp-printer-command-languages-pcl/doc/pcl5",
      "publisher": "Hewlett-Packard"
    },
    {
      "title": "HP-GL/2 Vector Graphics (bpl13211.pdf)",
      "url": "http://www.hp.com/ctg/Manual/bpl13211.pdf",
      "publisher": "Hewlett-Packard"
    },
    {
      "title": "HP-GL/2 and HP RTL Reference Guide",
      "url": "https://people.wou.edu/~soukupm/HPGL2-RTL_ReferenceGuide.pdf",
      "publisher": "Hewlett-Packard (hosted by Western Oregon University)"
    },
    {
      "title": "HP-GL/2 Monochrome (PCL-5e) Vector Graphics Support",
      "url": "https://learn.microsoft.com/en-us/windows-hardware/drivers/print/hp-gl-2-monochrome--pcl-5e--vector-graphics-support",
      "publisher": "Microsoft Learn"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "hp-gl",
    "hpgl",
    "hp-gl/2",
    "hewlett-packard graphics language",
    "pen plotter language",
    "vector graphics language",
    "pcl 5",
    "hp rtl",
    "plotter unit",
    "polyline encoded",
    "designjet",
    "plt file"
  ],
  "cluster": "page-description-languages"
};

export default entry;
