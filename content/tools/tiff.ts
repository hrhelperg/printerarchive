import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "tiff",
  "title": "TIFF (Tagged Image File Format)",
  "description": "A tag-based container format for raster images, developed in the desktop-publishing era and standardized at Revision 6.0 (1992), now owned by Adobe.",
  "summary": "TIFF (Tagged Image File Format) is a tag-based container format for raster images, created in the mid-1980s desktop-publishing and desktop-scanning world. A TIFF file is a directory of tagged fields describing one or more images, with pixel data that may use any of several encodings and compression schemes. The current and last major version is Revision 6.0 (June 3, 1992), which split the format into Baseline TIFF and optional Extensions. Adobe, having acquired the original steward Aldus in 1994, holds the specification. TIFF is primarily a source/master and interchange format rather than a printer or page-description language, and remains a leading choice for high-fidelity master and archival imaging.",
  "purpose": "A tag-based container format for storing and interchanging raster (bitmapped) images across platforms.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "TIFF originated in the desktop-publishing and desktop-scanning world of the mid-1980s. Wikipedia attributes its creation to Stephen Carlsen, an engineer at Aldus Corporation, working on desktop publishing. The Library of Congress format registry frames development at the organization level, describing TIFF as \"developed by the Aldus and Microsoft Corporations,\" originally for use with PostScript printing. A second stated motive was \"to encourage desktop scanner vendors of the mid-1980s to agree on a common scanned image file format, rather than have each company promulgate its own proprietary format.\" Attribution is therefore best treated at the era/organization level: Aldus is the consistently cited primary steward, and a single definitive inventor is disputed across sources."
    },
    {
      "kind": "paragraph",
      "text": "In its earliest form TIFF handled only bilevel (1-bit) images, because that was all early desktop scanners produced. It later grew to grayscale and then color as scanners and disk capacity improved."
    },
    {
      "kind": "paragraph",
      "text": "The published version lineage (dates per Wikipedia, corroborated by the LoC registry and FileFormat.Info) runs from Revision 3.0, the first published specification (autumn 1986, widely labeled the first real \"version\" since there was no publicly numbered 1.0/2.0 release), through Revision 4.0 (April 1987, minor enhancements) and Revision 5.0 (October 1988, which added palette-color images and LZW compression; the underlying Aldus/Microsoft technical memorandum is dated 8/8/88), to Revision 6.0 (June 3, 1992), which introduced the Baseline vs. Extensions distinction and remains the current version."
    },
    {
      "kind": "paragraph",
      "text": "Adobe Systems acquired Aldus in 1994 and holds the copyright on the TIFF 6.0 specification. There has been no major revision since 1992; instead two supplements were issued: the PageMaker 6.0 TIFF Technical Notes (September 14, 1995) and the Photoshop TIFF Technical Notes (March 22, 2002), the latter correcting the earlier flawed JPEG-in-TIFF definition."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Before TIFF, each scanner and imaging vendor tended to promote its own proprietary raster format, fragmenting the desktop-publishing ecosystem. TIFF's goal was a single, vendor-neutral interchange format that scanner makers, publishing software, and printers could all agree on, and that was extensible so it would not need constant re-standardization as image capabilities grew."
    },
    {
      "kind": "paragraph",
      "text": "The tag-based design let new capabilities such as higher bit depth, color, and new compression schemes be added as new tags without breaking older readers. That is why a format originally designed for 1-bit scans could later carry full-color prepress images."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "A TIFF file has three logical parts, of which only the first two are strictly required (per the LoC / FileFormat.Info description): an Image File Header (IFH), one or more Image File Directories (IFDs), and the bitmap (pixel) data."
    },
    {
      "kind": "list",
      "items": [
        "Header / byte order. The file begins with a two-byte order marker: II (Intel, little-endian) or MM (Motorola, big-endian). This is followed by a version identifier (the constant 42, described in the TIFF 6.0 spec as \"an arbitrary but carefully chosen number\") and a pointer (offset) to the first IFD. Because byte order is declared up front, TIFF is inherently cross-platform.",
        "IFD and tags. Each IFD is a list of tags. Per the LoC registry, each tag \"is a 12-byte record that contains a specific piece of information about the bitmapped data,\" and tags are stored in contiguous, sorted groups within each IFD. A tag records values such as image width, height, bits per sample, compression method, photometric interpretation (color model), and where the pixel data lives (strip/tile offsets). Values that do not fit in the record are referenced by offset elsewhere in the file.",
        "Subfiles / multi-page. Each IFD plus its associated bitmap is a subfile. An IFD can point to a \"next IFD,\" forming a chain, so a single TIFF file can hold multiple images. The LoC notes \"there is no limit to the number of subfiles a TIFF image file may contain\" — the mechanism behind multi-page TIFF for fax pages and scanned documents.",
        "Baseline vs. Extensions. Revision 6.0 split the spec into Baseline TIFF, which every conforming reader must support, and optional Extensions. Baseline covers bilevel, grayscale, palette-color, and RGB images with uncompressed, PackBits, and CCITT Group 3 (1-D Modified Huffman) encodings. Extensions add CMYK, YCbCr, and CIE Lab* color, plus CCITT T.4/T.6 (Group 3/4 fax), LZW, and JPEG compression."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "TIFF is primarily a source/master and interchange format, not a page-description or printer command language. In the classic prepress pipeline it holds the high-resolution raster images (scanned art, photographs) that are placed into a page-layout application such as QuarkXPress or Adobe InDesign, which then composes the page and emits PostScript or PDF for the imagesetter or press."
    },
    {
      "kind": "paragraph",
      "text": "In document capture, a scanner or fax produces TIFF, which is then archived, OCR'd, or printed. It is a container the pipeline reads from and writes to, sitting upstream of the final print stream."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "TIFF is not itself a printer language — it carries no page layout, text flow, or drawing commands the way PostScript or PCL do. Its connection to printing is indirect but strong: it was created partly for PostScript-based publishing workflows, and TIFF images are routinely placed into documents that are then rendered to a printer."
    },
    {
      "kind": "paragraph",
      "text": "Some raster-oriented and wide-format/plotting workflows also send TIFF directly to a RIP (raster image processor), and multi-page TIFF is a common spool and archive format for fax and copier/MFP devices. In all cases the printer or RIP must rasterize or interpret the TIFF; the file describes pixels, not a print job."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "TIFF is OS-agnostic by design. The II/MM byte-order marker exists precisely so files can move between little-endian (Intel/Windows) and big-endian (Motorola/classic Mac) systems."
    },
    {
      "kind": "paragraph",
      "text": "It is broadly supported across platforms: Apple's imaging frameworks, Windows imaging APIs, and the open-source libtiff library — the de facto reference implementation used across Linux/Unix and by many applications — all read and write it. On the classic Mac OS the format also carried the file type code TIFF. No single operating system owns the format."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "list",
      "items": [
        "PostScript: TIFF was designed in the PostScript-publishing era and functions as the raster-image supplier to PostScript workflows; the images are embedded or referenced when a layout is emitted as PostScript.",
        "PDF: PDF is a page-description container; TIFF images are typically converted or embedded (a common operation is \"TIFF to PDF,\" for example wrapping scanned pages). The two overlap in the fax and scan-archive space, and some encodings such as CCITT Group 4 and JPEG are shared between TIFF and PDF.",
        "Compression lineage: TIFF and PDF/PostScript share several codecs (CCITT Group 3/4 fax coding, LZW, JPEG), which is why images move between them with minimal recompression.",
        "Drivers: TIFF is not a printer driver format. Drivers translate application output into the printer's language (PostScript/PCL); TIFF may be an input to that process rather than part of it."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "TIFF remains a leading format for high-fidelity master and archival images. The Library of Congress reports holding \"over 3.5 PB\" of TIFF in its digital collections (as of early 2022) and, via the Federal Agencies Digital Guidelines Initiative (FADGI), recommends TIFF as a preferred master format for photographs, other digital graphics, CAD raster images, and — with a TIFF World File — for GIS/georeferenced raster."
    },
    {
      "kind": "paragraph",
      "text": "It is widely supported in image editing (Adobe Photoshop and others), page layout (QuarkXPress, InDesign), and scanning, faxing, word processing, and OCR software. Digital cameras commonly embed EXIF metadata using TIFF's own tag structure. Domain variants extend its reach: GeoTIFF (geospatial), TIFF/EP and DNG (photography/raw), TIFF/IT (prepress), and BigTIFF (very large files)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Lossless, high-fidelity storage (uncompressed or lossless-compressed), suited to master and archival copies.",
        "Flexibility: many bit depths, color models (grayscale, palette, RGB, CMYK, YCbCr, Lab*), and multiple compression schemes in one container.",
        "Extensibility via the tag mechanism and a tag registry, so new capabilities do not break the format.",
        "Multi-page support in a single file (documents, fax).",
        "Cross-platform by design, through the declared byte order.",
        "Rich embedded metadata (ICC profiles, EXIF, ImageDescription, and more) and strong preservation standing, being recommended by LoC/FADGI and other national archives.",
        "Open, stable, well-documented specification with a mature reference implementation (libtiff)."
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
        "4 GB file-size ceiling: standard TIFF uses 32-bit offsets, capping file size at 2³² bytes (about 4 GB). The LoC quotes: \"the largest offset that can be specified is thus 2³² bytes, or 4 GB.\" BigTIFF (64-bit offsets) was created to overcome this.",
        "Complexity / fragmentation: the flexibility that makes TIFF powerful means not every reader supports every tag or extension, so some valid TIFFs will not open everywhere (extension tags \"may not be recognized by all readers\").",
        "Large files: lossless and uncompressed TIFFs are big, a burden for web delivery, where JPEG and PNG are usual.",
        "No native web display in browsers as a rule; TIFF is a production and archive format, not a delivery format.",
        "Historical LZW patent friction: LZW compression was subject to Unisys patent claims; those patents are generally reported as expired in 2003 (U.S.) and 2004 (Europe/Japan). The hedge is retained because sources themselves hedge.",
        "Limited accessibility semantics: metadata tags such as ImageDescription (270) exist but are not reliably surfaced to assistive technology, and the format lacks sRGB as a native PhotometricInterpretation value in 6.0."
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
        "TIFF/EP — ISO 12234-2:2001 (Electronic still-picture imaging — Removable memory — Part 2: TIFF/EP image data format); a subset of Adobe TIFF plus Exif, used as a basis for camera raw work and related to DNG.",
        "TIFF/IT — ISO 12639:2004, prepress digital data exchange / image technology for graphic arts.",
        "GeoTIFF (Revision 1.0) — georeferencing tags for GIS raster, later an OGC standard.",
        "BigTIFF — a 64-bit-offset extension (effort founded around 2004) removing the 4 GB limit.",
        "Adobe DNG (Digital Negative) — a TIFF/EP-based raw image format.",
        "EXIF — camera metadata that reuses TIFF's IFD/tag structure.",
        "TIFF-FX (Tag Image File Format Fax eXtended) — an Internet-fax file format based on TIFF 6.0, defined by IETF RFC 2301 and later obsoleted by RFC 3949. Note: the image/tiff MIME sub-type registration is a separate document, RFC 2302.",
        "Shared codecs: CCITT Group 3 (T.4) and Group 4 (T.6) fax coding, PackBits, LZW, and JPEG."
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
          "period": "1986 (autumn)",
          "text": "First published TIFF specification (widely labeled Revision 3.0) by Aldus, after meetings with scanner and software vendors."
        },
        {
          "period": "1987 (April)",
          "text": "Revision 4.0, minor enhancements."
        },
        {
          "period": "1988 (October)",
          "text": "Revision 5.0 adds palette-color images and LZW compression (Aldus/Microsoft technical memorandum dated 8/8/88)."
        },
        {
          "period": "1992 (June 3)",
          "text": "Revision 6.0 Final introduces Baseline vs. Extensions; remains the current version."
        },
        {
          "period": "1994",
          "text": "Adobe acquires Aldus and assumes ownership of the TIFF specification."
        },
        {
          "period": "1995 (September 14)",
          "text": "PageMaker 6.0 TIFF Technical Notes (Supplement 1)."
        },
        {
          "period": "1998",
          "text": "RFC 2301 defines the TIFF-FX file format for Internet fax (later obsoleted by RFC 3949)."
        },
        {
          "period": "2001",
          "text": "TIFF/EP standardized as ISO 12234-2."
        },
        {
          "period": "2002 (March 22)",
          "text": "Photoshop TIFF Technical Notes (Supplement 2), correcting JPEG-in-TIFF."
        },
        {
          "period": "2003–2004",
          "text": "LZW patents reported expired (U.S. 2003; Europe/Japan 2004)."
        },
        {
          "period": "2004",
          "text": "BigTIFF effort founded to exceed the 4 GB limit; TIFF/IT published as ISO 12639:2004."
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
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "fax",
      "slug": "how-fax-machines-work"
    },
    {
      "section": "glossary",
      "slug": "ocr"
    }
  ],
  "faqs": [
    {
      "q": "Is TIFF a printer language like PostScript or PCL?",
      "a": "No. TIFF describes pixels, not print jobs — it carries no page layout, text flow, or drawing commands. It is a source and interchange format that gets placed into documents, or sent to a RIP that rasterizes it, rather than a page-description or printer command language."
    },
    {
      "q": "What is the current version of TIFF?",
      "a": "Revision 6.0, dated June 3, 1992, which introduced the Baseline vs. Extensions distinction. There has been no major revision since; two supplements followed (1995 and 2002). Adobe, which acquired Aldus in 1994, holds the specification."
    },
    {
      "q": "Why can't TIFF files be larger than about 4 GB?",
      "a": "Standard TIFF uses 32-bit offsets, so the largest addressable offset is 2³² bytes (about 4 GB), per the Library of Congress. BigTIFF, a 64-bit-offset extension, was created to overcome this limit."
    },
    {
      "q": "What is the difference between Baseline TIFF and Extensions?",
      "a": "Baseline TIFF is the mandatory core every conforming reader must support (bilevel, grayscale, palette-color, and RGB with uncompressed, PackBits, and CCITT Group 3 encodings). Extensions are optional additions such as CMYK/YCbCr/L*a*b* color and T.4/T.6, LZW, and JPEG compression."
    },
    {
      "q": "How does a TIFF file work internally?",
      "a": "It has an Image File Header with a byte-order marker (II or MM) and the version constant 42, one or more Image File Directories (IFDs) made of 12-byte tag records describing the image, and the pixel data. IFDs can chain together, enabling multi-page TIFF."
    }
  ],
  "sources": [
    {
      "title": "TIFF, Revision 6.0 — Sustainability of Digital Formats",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000022.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "TIFF Revision 6.0, Final (June 3, 1992) — specification PDF",
      "url": "https://www.itu.int/itudoc/itu-t/com16/tiff-fx/docs/tiff6.pdf",
      "publisher": "ITU-T (hosting the Adobe/Aldus specification)"
    },
    {
      "title": "TIFF Revision 6.0 (specification archive)",
      "url": "https://archive.org/details/TIFF6",
      "publisher": "Internet Archive"
    },
    {
      "title": "TIFF/EP — ISO 12234-2:2001",
      "url": "https://www.iso.org/standard/29377.html",
      "publisher": "ISO"
    },
    {
      "title": "TIFF/IT for Image Technology (ISO 12639)",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000072.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "BigTIFF — Sustainability of Digital Formats",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000328.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "BigTIFF Design",
      "url": "http://libtiff.maptools.org/bigtiffdesign.html",
      "publisher": "libtiff project"
    },
    {
      "title": "RFC 2301 — File Format for Internet Fax (TIFF-FX)",
      "url": "https://www.rfc-editor.org/rfc/rfc2301.html",
      "publisher": "IETF"
    },
    {
      "title": "RFC 2302 — Tag Image File Format (TIFF) image/tiff MIME Sub-type Registration",
      "url": "https://www.rfc-editor.org/rfc/rfc2302.html",
      "publisher": "IETF"
    },
    {
      "title": "TIFF",
      "url": "https://en.wikipedia.org/wiki/TIFF",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "tiff",
    "tagged image file format",
    "raster image format",
    "baseline tiff",
    "aldus",
    "adobe tiff 6.0",
    "libtiff",
    "bigtiff",
    "geotiff",
    "tiff/ep",
    "image container format",
    "multi-page tiff"
  ],
  "cluster": "document-standards"
};

export default entry;
