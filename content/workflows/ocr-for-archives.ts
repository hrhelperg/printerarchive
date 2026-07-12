import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "ocr-for-archives",
  "title": "OCR for Archives",
  "description": "How optical character recognition makes archival and library scans searchable while preserving the original page image as the authoritative record.",
  "summary": "Optical character recognition (OCR) in archives and libraries converts images of documents into searchable, machine-encoded text while the original page image remains the authoritative representation. This \"image is primary, text is an access aid\" model is explicit in programs such as the Library of Congress's Chronicling America, which displays scanned pages alongside uncorrected OCR. Archival OCR runs on raster masters (often TIFF or JPEG 2000), typically using open engines such as Tesseract, and emits structured formats like ALTO and METS or a searchable PDF/A with an OCR text layer beneath the image. Accuracy is variable and often left uncorrected at scale, with historical typefaces and degraded material posing documented challenges; institutions increasingly reprocess legacy scans with improved engines rather than proofreading by hand.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Optical character recognition (OCR) is the process of converting images of text — typically scans or photographs of physical documents — into machine-encoded, searchable character data. In the archival and library context, OCR is rarely used to replace the digitized page. Instead, it makes image-based collections searchable and text-navigable while the original page image is preserved and remains the authoritative representation."
    },
    {
      "kind": "paragraph",
      "text": "This \"image is primary, text is an access aid\" model is explicit in major programs. The U.S. Library of Congress states that pages in Chronicling America are scanned (primarily from microfilm) and automatically processed for full-text searching through OCR, and that the resulting text is left uncorrected — with both the page image and the uncorrected OCR text shown to users."
    },
    {
      "kind": "paragraph",
      "text": "The reasoning behind accepting imperfect OCR is practical. As the Library of Congress explains, although errors in the OCR text may be common, OCR is still a powerful tool for making text-based items searchable; if OCR misreads one instance of a keyword in a passage but correctly reads a second instance, the passage will still be found in a full-text search. Because the human-readable artifact is the image, OCR errors degrade discoverability rather than the record itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "OCR for archives operates on raster images of documents — commonly TIFF or JPEG 2000 masters, and sometimes microfilm scans. An OCR engine detects regions of text, segments them into lines, words, and characters, and classifies the glyph shapes into character codes. Modern open engines such as Tesseract use trained recognition models (Tesseract adopted an LSTM-based recognizer in version 4) and can output not only plain text but structured data containing the position of each recognized word on the page."
    },
    {
      "kind": "paragraph",
      "text": "Tesseract is among the most widely used open-source engines in archival pipelines. It originated at Hewlett-Packard Laboratories in Bristol, UK, and at Hewlett-Packard in Greeley, Colorado, developed between 1985 and 1994. HP released it as open source in 2005, and from 2006 it was developed at Google, with Ray Smith as lead developer."
    },
    {
      "kind": "paragraph",
      "text": "For historical material, engines are frequently supplemented with image preprocessing (deskewing, binarization, noise removal) and layout analysis to handle complex structures such as multi-column newspapers, marginalia, and tables. The academic literature treats historical OCR as a distinct and harder problem than modern-document OCR, owing to physical degradation, obsolete typefaces (such as blackletter), and non-standard orthography, as documented in surveys of historical document processing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The capture-to-text pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A representative archival pipeline, drawn from documented programs at the Library of Congress and the Internet Archive, proceeds through several stages:"
    },
    {
      "kind": "list",
      "items": [
        "Capture — Each page is imaged with a high-resolution scanner or camera, or scanned from microfilm. The Internet Archive, for example, images each page with a high-resolution camera, then crops and deskews it, storing masters as JPEG 2000 in a _jp2.zip container.",
        "Image processing — Deskew, crop, binarize or clean, and (for microfilm) normalize contrast.",
        "Layout and structure analysis — Detect columns, articles, reading order, and text blocks. Newspaper programs capture both logical structure (the reading order of articles) and physical layout (text lines and their coordinates).",
        "Character recognition — The OCR engine converts glyph images into characters.",
        "Output generation — Text is emitted in one or more structured formats, often with word-level bounding-box coordinates so search hits can be highlighted on the page image.",
        "Indexing — The OCR text is loaded into a full-text search index; the page image remains the display object.",
        "Correction or reprocessing (optional) — Some programs re-run improved OCR engines over older scans, as in the Library of Congress's 2025 reprocessing effort."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and verification considerations"
    },
    {
      "kind": "paragraph",
      "text": "Archival OCR accuracy is highly variable and depends on source condition, typeface, language, and scan quality. Several documented points recur across authoritative sources:"
    },
    {
      "kind": "list",
      "items": [
        "Historical material performs worse than modern print. Recent research emphasizes that general OCR struggles with historical typefaces and low-resource scripts, which is precisely why specialized or fine-tuned approaches are pursued.",
        "Uncorrected OCR is the norm at scale. Chronicling America explicitly ships uncorrected OCR and advises researchers to search shorter words or phrases to compensate for recognition errors.",
        "Verification is often by reprocessing rather than manual proofing. In 2025 the Library of Congress launched an effort to reprocess newspapers digitized in the program's early years using the Tesseract engine plus customized post-processing (an open-source \"NDNP-Open-OCR\" workflow), reporting that it had reprocessed over 170,000 newspaper pages to improve the machine-readable text that powers keyword search.",
        "Metrics are inconsistent. A preprint survey of OCR evaluation notes that standard metrics such as character and word error rate, together with the relative invisibility of historical documents in benchmarks, complicate measuring archival OCR quality; that preprint frames its analysis around evaluation equity for marginalized historical newspapers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Formats and output"
    },
    {
      "kind": "paragraph",
      "text": "Archival OCR is commonly emitted in several complementary formats:"
    },
    {
      "kind": "list",
      "items": [
        "Plain text (.txt) — Simple full-text for indexing.",
        "ALTO XML (Analyzed Layout and Text Object) — An XML schema, maintained by the Library of Congress, that captures OCR results together with the physical layout and coordinate/bounding-box information for text elements. It is standard in newspaper and book digitization.",
        "METS (Metadata Encoding and Transmission Standard) — Also maintained by the Library of Congress, a wrapper that binds together structural metadata, page images, and OCR. METS/ALTO is the common pairing for newspapers.",
        "hOCR — An embedded-coordinate output format; the Internet Archive's OCR runs on Tesseract and emits hOCR (XHTML carrying word coordinates).",
        "DjVu / DjVu XML — Used historically by the Internet Archive; this is legacy tooling that has been de-emphasized in favor of Tesseract, hOCR, and JPEG 2000 in current workflows.",
        "Searchable PDF / PDF/A — A PDF containing the page image with an invisible OCR text layer positioned beneath it."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "The \"searchable PDF\" is the archival delivery format most directly tied to the accept-imperfect-OCR-with-image approach. A searchable PDF keeps the scanned page image as captured and adds an OCR text layer positioned beneath the image, so the page looks identical to the scan but is now searchable and its text is selectable and copyable."
    },
    {
      "kind": "paragraph",
      "text": "The open-source tool OCRmyPDF implements this pattern: it places OCR text accurately below the existing images, uses the Tesseract engine, keeps the exact resolution of the original embedded images, and generates a searchable PDF/A file."
    },
    {
      "kind": "paragraph",
      "text": "For long-term archiving, PDF/A is the ISO-standardized \"PDF for archive\" (the ISO 19005 series: PDF/A-1 in ISO 19005-1:2005, PDF/A-2 in ISO 19005-2:2011, and PDF/A-3 in ISO 19005-3:2012). It constrains PDF to features suitable for preservation — for example, prohibiting external font linking and certain dynamic features — so a document's visual appearance is reproducible over time. Notably for OCR, PDF/A's higher conformance levels require complete and correct Unicode mapping of text content, which is what makes the embedded OCR text reliably searchable and extractable."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to document management"
    },
    {
      "kind": "paragraph",
      "text": "Beyond memory institutions, the same technique underpins document management and records systems: OCR transforms an image-only archive into a searchable, indexable corpus without discarding the source image. In this setting, OCR output feeds full-text indexes, retention and records systems, and downstream extraction, while the imaged original is retained as the record of provenance."
    },
    {
      "kind": "paragraph",
      "text": "The archival distinction is one of emphasis. Cultural-heritage programs prioritize preservation of the source image and faithful representation (image-primary), whereas business document management often also relies on the extracted text for automated processing. The searchable-PDF and PDF/A pattern serves both use cases."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Makes otherwise \"dark\" image collections discoverable via keyword and full-text search.",
        "Preserves the original page image as the authoritative artifact; OCR is additive, not destructive.",
        "Enables highlighting of search hits on the page image when word coordinates are captured (via ALTO or hOCR).",
        "Supports text extraction, copy and paste, and downstream computational analysis such as text mining and dataset creation.",
        "Improves accessibility, including screen-reader access to scanned text.",
        "Scales: open-source engines such as Tesseract run over very large collections, and programs report reprocessing at large scale."
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
        "Accuracy is imperfect and often left uncorrected, especially on degraded, historical, multi-column, or non-Latin material; errors reduce recall in search.",
        "Layout complexity (newspapers, tables, marginalia) challenges reading-order detection and segmentation.",
        "Handwriting generally requires handwritten text recognition (HTR), a related but distinct technology, rather than classic printed-text OCR.",
        "Historical typefaces and low-resource languages are underserved by general engines, which can bias what becomes searchable.",
        "Metrics and benchmarking for historical OCR are inconsistent, complicating quality claims.",
        "OCR text alone can lose the visual and material context of the original, which is one reason the image is retained."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Practical considerations"
    },
    {
      "kind": "list",
      "items": [
        "Scan quality drives OCR quality. Higher-resolution, well-processed masters yield better recognition; archival programs capture high-resolution masters (such as JPEG 2000) and derive OCR from cleaned images.",
        "Keep the image; add the text. The dominant archival pattern is image plus an aligned or invisible text layer (searchable PDF/A), or image plus a sidecar ALTO/METS file.",
        "Preserve coordinates. Capturing word coordinates (ALTO or hOCR) enables on-image hit highlighting.",
        "Plan for reprocessing. Because OCR engines improve over time, treating OCR as re-derivable from preserved masters — rather than a one-time cost — is a documented strategy, as in the Library of Congress's 2025 reprocessing.",
        "Set search UX expectations. Programs advise users that OCR is uncorrected and suggest search strategies accordingly, such as using shorter search terms."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "OCR for archives remains an active, evolving field. Open-source engines such as Tesseract continue to be central, and libraries are actively reprocessing legacy scans with improved OCR pipelines, as the Library of Congress did in 2025."
    },
    {
      "kind": "paragraph",
      "text": "Research is moving toward more sample-efficient and extensible recognition for historical and low-resource collections — for example, framing OCR as character-level image retrieval — and toward handwritten text recognition for manuscript material. Standards infrastructure (ALTO, METS, and PDF/A) remains the backbone that lets institutions preserve images while keeping text searchable and portable."
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
          "period": "1985–1994",
          "text": "The Tesseract OCR engine is developed at Hewlett-Packard Laboratories (Bristol, UK) and at Hewlett-Packard (Greeley, Colorado)."
        },
        {
          "period": "1995",
          "text": "Tesseract ranks among the top performers in the UNLV OCR accuracy test."
        },
        {
          "period": "2005",
          "text": "HP releases Tesseract as open source. PDF/A-1 is published as ISO 19005-1:2005."
        },
        {
          "period": "2006",
          "text": "Development of Tesseract continues at Google."
        },
        {
          "period": "2007",
          "text": "Ray Smith publishes An Overview of the Tesseract OCR Engine (ICDAR). The Chronicling America website launches under the National Digital Newspaper Program, a Library of Congress and NEH partnership founded in 2005."
        },
        {
          "period": "2011",
          "text": "PDF/A-2 is published as ISO 19005-2:2011."
        },
        {
          "period": "2012",
          "text": "PDF/A-3 is published as ISO 19005-3:2012."
        },
        {
          "period": "2025",
          "text": "The Library of Congress begins reprocessing early Chronicling America scans with a Tesseract-based pipeline (NDNP-Open-OCR), reporting over 170,000 pages reprocessed."
        }
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical and historical reference. Figures and dates are drawn from documented sources; it does not include current pricing, marketing claims, or product recommendations, and is not legal, financial, or medical advice. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "workflows",
      "slug": "ocr-for-books"
    },
    {
      "section": "workflows",
      "slug": "ocr-for-newspapers"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "guides",
      "slug": "history-of-scanning"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    },
    {
      "section": "workflows",
      "slug": "ocr-workflow"
    }
  ],
  "faqs": [
    {
      "q": "Does OCR replace the scanned page in an archive?",
      "a": "No. In archival and library practice the original page image remains the authoritative representation, and OCR is added as a searchable text layer or sidecar file. Programs such as the Library of Congress's Chronicling America display the scanned image alongside the OCR text."
    },
    {
      "q": "Why do archives publish uncorrected OCR?",
      "a": "Correcting OCR at scale is impractical, and imperfect text still supports discovery. The Library of Congress notes that if OCR misreads one instance of a keyword but correctly reads another in the same passage, a full-text search will still find it. Errors reduce discoverability rather than damaging the record itself."
    },
    {
      "q": "What file formats are used for archival OCR?",
      "a": "Common outputs include plain text, ALTO XML and METS (both maintained by the Library of Congress), hOCR, and searchable PDF/PDF-A. ALTO and hOCR store word coordinates so search hits can be highlighted on the page image; METS/ALTO is the standard pairing for newspapers."
    },
    {
      "q": "What is a searchable PDF/A and how does it relate to OCR?",
      "a": "A searchable PDF keeps the scanned page image and adds an OCR text layer beneath it, so the page looks identical to the scan but becomes searchable. PDF/A is the ISO 19005 archival profile of PDF; its higher conformance levels require correct Unicode mapping so embedded OCR text is reliably searchable. Tools such as OCRmyPDF produce PDF/A output using Tesseract."
    },
    {
      "q": "Can OCR read handwriting in archives?",
      "a": "Generally no. Classic printed-text OCR is distinct from handwritten text recognition (HTR), which is the technology used for manuscript material. Historical typefaces and low-resource languages also remain challenging for general OCR engines."
    }
  ],
  "sources": [
    {
      "title": "Tesseract Open Source OCR Engine (README history)",
      "url": "https://github.com/tesseract-ocr/tesseract",
      "publisher": "Tesseract project"
    },
    {
      "title": "Tesseract OCR project site",
      "url": "https://tesseractocr.org/",
      "publisher": "Tesseract project"
    },
    {
      "title": "An Overview of the Tesseract OCR Engine (Ray Smith)",
      "url": "https://research.google.com/pubs/archive/33418.pdf",
      "publisher": "Google Research"
    },
    {
      "title": "Chronicling America — Search Tips",
      "url": "https://guides.loc.gov/chronicling-america/search-tips",
      "publisher": "Library of Congress"
    },
    {
      "title": "Improving Machine-Readable Text for Newspapers in Chronicling America",
      "url": "https://blogs.loc.gov/headlinesandheroes/2025/04/ocr-reprocessing/",
      "publisher": "Library of Congress, Headlines & Heroes"
    },
    {
      "title": "ALTO (Analyzed Layout and Text Object) standard",
      "url": "https://www.loc.gov/standards/alto/",
      "publisher": "Library of Congress"
    },
    {
      "title": "METS (Metadata Encoding and Transmission Standard)",
      "url": "https://www.loc.gov/standards/mets/mets-home.html",
      "publisher": "Library of Congress"
    },
    {
      "title": "OCR at the Internet Archive (Tesseract and hOCR)",
      "url": "https://archive.org/developers/ocr.html",
      "publisher": "Internet Archive"
    },
    {
      "title": "OCRmyPDF (adds an OCR text layer; PDF/A; Tesseract)",
      "url": "https://github.com/ocrmypdf/OCRmyPDF",
      "publisher": "OCRmyPDF project"
    },
    {
      "title": "ISO 19005-1:2005 (PDF/A-1)",
      "url": "https://www.iso.org/standard/38920.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005-3:2012 (PDF/A-3)",
      "url": "https://www.iso.org/standard/57229.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 19005 (PDF/A) overview",
      "url": "https://pdfa.org/resource/iso-19005-pdfa/",
      "publisher": "PDF Association"
    },
    {
      "title": "Historical Document Processing: A Survey of Techniques, Tools, and Trends",
      "url": "https://arxiv.org/abs/2002.06300",
      "publisher": "arXiv"
    },
    {
      "title": "Efficient OCR for Building a Diverse Digital History",
      "url": "https://arxiv.org/abs/2304.02737",
      "publisher": "arXiv"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ocr for archives",
    "optical character recognition",
    "archival digitization",
    "chronicling america",
    "tesseract",
    "alto xml",
    "mets",
    "searchable pdf",
    "pdf/a",
    "ocrmypdf",
    "library of congress",
    "full-text search"
  ],
  "cluster": "ocr-workflows",
  "modernTools": [
    "zip-rar",
    "pdf-editor"
  ],
  "goal": "Using OCR to make digitized archival collections searchable while preserving the original page image.",
  "toolsUsed": [
    "A scanner or camera capture",
    "OCR-capable software"
  ]
};

export default entry;
