import type { WorkflowEntry } from "@/lib/content/types";

const entry: WorkflowEntry = {
  "section": "workflows",
  "slug": "ocr-for-newspapers",
  "title": "OCR for Newspapers",
  "description": "How optical character recognition converts scanned newspaper pages into searchable text, and why historic newspapers make it uniquely hard.",
  "summary": "Optical character recognition (OCR) for newspapers is the automated conversion of scanned newspaper and periodical page images into machine-readable, searchable text. It underpins large historic-newspaper digitization programs such as the U.S. National Digital Newspaper Program (NDNP) and its Chronicling America service, and the National Library of Australia's Trove. Newspaper OCR is unusually difficult because of dense multi-column layouts, mixed fonts, and degraded microfilm sources, and because achieving perfect accuracy on historical material is, in the Library of Congress's words, \"virtually impossible.\" Programs standardize on open METS/ALTO metadata, retain lossless master images so pages can be re-OCR'd later, and treat imperfect OCR as still valuable for search.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Optical character recognition (OCR) for newspapers is the automated conversion of scanned page images of newspapers and periodicals into machine-readable, searchable text. It is the enabling technology behind large-scale historic-newspaper digitization programs run by national libraries and their partners, most prominently the U.S. National Digital Newspaper Program (NDNP) — a partnership of the National Endowment for the Humanities (NEH) and the Library of Congress that launched in 2005 and delivers content through the Chronicling America website. As of the Library of Congress's 2025 statements, Chronicling America provides keyword-searchable access to over 23 million newspaper pages."
    },
    {
      "kind": "paragraph",
      "text": "Newspaper OCR is a distinct and unusually difficult application of the technology. Unlike a clean office document or a book page, a newspaper page combines dense multi-column layouts, mixed fonts and type sizes, headlines, advertisements, tables, and images, and the source material is very often decades-old newsprint captured onto microfilm rather than scanned from the original paper. As the Library of Congress states plainly, \"achieving 100% accuracy in an automated OCR process is virtually impossible\" for historical newspapers on microfilm, because factors such as original newsprint damage, deterioration prior to microfilming, poor microfilming practices, tight columns, and tiny text sizes all interfere with recognition."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The core recognition step in newspaper OCR is the same character-recognition problem found in any OCR system, but the newspaper use case is defined by three surrounding challenges that the literature treats as central: complex multi-column layout that must be analyzed before any text is recognized; article segmentation and reading order, since a single article may span several columns or continue elsewhere on the page; and degraded microfilm sources, where image quality is frequently the dominant limit on accuracy."
    },
    {
      "kind": "paragraph",
      "text": "Rose Holley's widely cited 2009 D-Lib Magazine study of the Australian Newspaper Digitisation Program describes the standard sequence, which remains broadly accurate as a conceptual model:"
    },
    {
      "kind": "list",
      "items": [
        "Pre-processing. The page image may be de-skewed so text lines are horizontal, and de-speckled, before recognition. Because OCR engines generally require clear black/white contrast, grayscale images are often optimized and binarized (converted to bi-tonal) to sharpen character edges.",
        "Layout/structure analysis. The software divides the page into elements — text blocks (columns), tables, images — then divides lines into words and words into characters.",
        "Character recognition. Each isolated character is compared against pattern models; the engine analyzes stroke edges and the discontinuity between character and background, forms hypotheses, and makes a best-guess decision. Each decision receives a confidence rating — in the ALTO standard, an integer from 0 to 9, where 9 is most confident.",
        "Word-level/dictionary analysis. Once characters form a word, built-in dictionaries may be consulted; a dictionary match can raise the confidence of the constituent characters.",
        "Article composition. Candidate blocks are grouped into articles using layout and language cues, producing the reading-order structure recorded in the output metadata."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Holley notes that some engines (she names ABBYY FineReader for that era) support training, where a human confirms or corrects the engine's reading of old or distorted fonts, but that training has generally been considered too time-consuming to be viable at mass scale. Handwriting, script fonts, and gothic/blackletter type remain difficult."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The capture-to-text pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A representative program pipeline, documented for NDNP/Chronicling America and for the National Library of Australia's Trove, runs roughly as follows:"
    },
    {
      "kind": "list",
      "items": [
        "Source selection. Programs select public-domain titles. Holley recommends preferring first-generation master negative microfilm over later-generation copies, or original hard copy where budget allows. NDNP awardees select newspapers in the public domain and convert them into digital files primarily from microfilm.",
        "Scanning. Pages are scanned to a lossless raster format. Holley's recommended baseline is 300 dpi or above in a lossless format (TIFF) so no image information is lost. The Trove program scans primarily from 35mm master-negative (and second-generation) silver-gelatin microfilm into a pair of images: a 400 dpi raw grayscale TIFF and an image-optimized bi-tonal TIFF.",
        "Image optimization / binarization. Grayscale images are optimized for OCR (contrast and density) and converted to bi-tonal before recognition.",
        "OCR and layout/zoning. The OCR engine — ABBYY FineReader in the Trove program, and the open-source Tesseract engine in the Library of Congress's current NDNP reprocessing — recognizes text and produces layout, word coordinates, and confidence data.",
        "Structured output. Results are written to standardized XML in the METS/ALTO family, plus derivative images and a searchable PDF.",
        "Optional correction. Some programs add crowdsourced human correction (Trove) or automated post-processing (the Library of Congress's NDNP-Open-OCR)."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Accuracy and verification considerations"
    },
    {
      "kind": "paragraph",
      "text": "Accuracy is the central, and frequently misunderstood, issue in newspaper OCR."
    },
    {
      "kind": "list",
      "items": [
        "Confidence is not accuracy. OCR software reports a confidence level per character (0–9 in ALTO); it does not know whether a character is actually correct. True accuracy can only be established by a human proofreading or re-keying and comparing against the OCR output — which is not feasible at full corpus scale. Holley notes that confidence is often used as a proxy for accuracy in practice.",
        "Character versus word, page versus article. Figures are reported sometimes at the character level and sometimes at the word level, and at page or article level, and these are frequently conflated. Holley concluded that no firm \"acceptable\" baseline could be set until the measurement method was standardized.",
        "Source condition usually dominates. As the Koninklijke Bibliotheek (Dutch national library) found and Holley quotes: \"Usually the quality of the OCR text says more about the condition of the original materials than it does about the performance of the OCR software.\"",
        "Documented ranges (program- and sample-specific, not universal). The KB survey quoted by Holley ranged from 99.8% word accuracy on 700,000 pages with manual correction down to 68% character accuracy with no correction on 350,000 pages of early-20th-century newspapers. Holley's own 45-page Australian sample (1803–1954) showed raw character confidence from 71% to 98.02% with no correction. The Trove program reports general OCR accuracy of roughly 80–90% (independent 2013 research; about 94% for late-1840s material and under 80% for the early 1920s), with re-keyed titles, subtitles, authors, and first four lines near 99%.",
        "Rules of thumb cited by Holley — with the caveat that character-versus-word was not agreed — treat \"good\" as roughly 98–99% correct, \"average\" as about 90–98%, and \"poor\" as below 90%. These figures date from 2009; engines have improved since.",
        "Why imperfect OCR is still useful. The Library of Congress research guide notes that important concept words often appear more than once in an article, so if OCR misreads one instance but correctly reads another, the passage remains retrievable in full-text search."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Formats and output"
    },
    {
      "kind": "paragraph",
      "text": "Newspaper OCR programs standardize on a small set of preservation and access formats:"
    },
    {
      "kind": "list",
      "items": [
        "ALTO XML — a layout-and-text standard maintained by the Library of Congress, titled \"Technical Metadata for Layout and Text Objects\" (originally derived from the phrase \"Analyzed Layout and Text Object\"). ALTO records the physical layout (page, block, text-line, and word geometry via HPOS/VPOS/HEIGHT/WIDTH coordinates), the recognized text, and per-character or per-word confidence. The standard has evolved through numbered versions; explicit ReadingOrder was added in v4.3, and version 4.4 is the current Official version, adding page-level language, rotation, and other-languages attributes. Version 2.1 (August 2014) was the long-standing default schema. Chronicling America's The Winchester News is cited by the standard as a live ALTO example.",
        "METS (Metadata Encoding and Transmission Standard), also Library of Congress-maintained, serves as the wrapper that ties page images, ALTO text, and descriptive metadata together and expresses the issue/page/article structure. NDNP guidance explicitly addresses structural metadata and use of XML.",
        "Images. Lossless master TIFF is used for preservation; derivative access images (JPEG2000/JP2 are commonly used in these programs) are generated for delivery. Trove specifically produces a raw grayscale TIFF plus an optimized bi-tonal TIFF.",
        "Searchable PDF. A PDF with a hidden text layer for reading and download. The Library of Congress's NDNP-Open-OCR pipeline creates new ALTO XML and PDF files together for NDNP batches."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Programs typically also expose bulk OCR datasets and public APIs for computational access."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and searchable PDF"
    },
    {
      "kind": "paragraph",
      "text": "For newspapers, PDF is primarily a delivery and access format rather than the master record. The authoritative machine-readable text and layout live in the ALTO/METS XML; the searchable PDF is a derivative that overlays the OCR text as an invisible layer beneath the page image, so a reader can view the original page while still selecting, copying, and searching the text."
    },
    {
      "kind": "paragraph",
      "text": "In the Library of Congress reprocessing pipeline, updated ALTO XML and updated PDF are generated together from the same OCR run, which keeps the searchable PDF's hidden text in sync with the corrected text index. The quality of any searchable PDF is therefore only as good as the underlying OCR: the visible page image is unchanged, but the selectable text can be wrong or missing wherever recognition failed."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to document management"
    },
    {
      "kind": "paragraph",
      "text": "Newspaper OCR is a specialized, large-scale instance of the broader \"digitize-then-index\" pattern used in document and records management. The searchable text produced by OCR is what makes an otherwise image-only archive findable: it powers full-text indexing, keyword search, and — via word coordinates in ALTO — the ability to highlight a matched term on the page image. The METS/ALTO structure additionally functions as structural metadata describing issues, pages, and articles, comparable to the descriptive and structural metadata layers in a document management system."
    },
    {
      "kind": "paragraph",
      "text": "The distinguishing features versus generic document management are the emphasis on preservation-grade masters and open, standardized metadata; article-level segmentation and reading order; and explicit handling of imperfect, source-limited OCR rather than assuming clean, born-digital text."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Full-text search over millions of pages that would otherwise be browsable only by date and title — the primary payoff, and useful even at imperfect accuracy because of keyword redundancy within articles.",
        "Word-level coordinates (via ALTO) enable on-image highlighting of search hits and downstream text mining.",
        "Standardized, open outputs (ALTO and METS, both Library of Congress standards) support interoperability, long-term preservation, and reuse across institutions.",
        "Computational access at scale through bulk OCR datasets and public APIs, enabling data-driven historical research.",
        "Automation economics. OCR makes mass digitization of hundreds of thousands to millions of pages feasible where full manual transcription would not be.",
        "Improvable over time. The same page images can be re-OCR'd with better engines later, as demonstrated by the Library of Congress reprocessing pre-2012 content with a modern Tesseract-based pipeline."
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
        "No guarantee of 100% accuracy on historical newspapers; some error is unavoidable (Library of Congress).",
        "Source-quality ceiling. Damaged or deteriorated newsprint and poor or later-generation microfilm cap achievable accuracy regardless of engine quality.",
        "Layout difficulty. Tight columns, tiny type, skew, and complex multi-column layouts degrade both recognition and segmentation.",
        "Article segmentation is error-prone. Grouping blocks into correct articles and reading order, including continuations across the page, is a hard problem separate from character recognition.",
        "Font and script limits. Handwriting, script and decorative fonts, and gothic/blackletter type are historically problematic.",
        "Measurement ambiguity. Confidence is not accuracy, and character-versus-word and page-versus-article reporting are inconsistent across programs, making cross-program accuracy claims unreliable.",
        "Non-Latin and multilingual scripts add further difficulty and remain an active research area."
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
        "Prefer the best available source. Use first-generation master-negative microfilm or original hard copy where possible, and avoid second-generation film copies (Holley).",
        "Scan lossless and at adequate resolution — 300 dpi or higher, lossless TIFF, with grayscale capture and OCR-oriented image optimization/binarization (Holley; Trove uses 400 dpi).",
        "Pre-process by de-skewing and de-speckling before OCR, and ensure adequate white space so text boundaries can be detected.",
        "Record confidence and coordinates in ALTO so accuracy can be assessed and hits can be highlighted later.",
        "Plan for correction where it matters. Options include selective re-keying of high-value elements such as headlines and first lines, and crowdsourced correction (as in Trove), which can push corrected elements to high accuracy while leaving body text at raw-OCR levels.",
        "Treat OCR as re-runnable. Retain the master images so content can be reprocessed with improved engines, and version and track reprocessed batches, as the Library of Congress does publicly."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Newspaper OCR remains an active, evolving field. In connection with the NDNP's 20th year, the Library of Congress launched an initiative to reprocess select newspaper content digitized before 2012 to improve its machine-readable text, using the open-source Tesseract OCR engine plus customized post-processing in a pipeline it calls NDNP-Open-OCR. The pipeline creates new ALTO XML and PDF files for NDNP batches, can be deployed locally or in common cloud environments, and is accessed via a command-line interface."
    },
    {
      "kind": "paragraph",
      "text": "The number of reprocessed pages is reported on a live counter: the April 2025 blog cited over 170,000 pages, and the Library's research guide later reported 244,946. The Library has publicly presented on the pipeline, including a September 2025 talk to the British Library titled \"Twenty-Year-Old OCR Gets A Makeover: New OCR Pipeline for Historic American Newspapers\" (pipeline version 1.1). Separately, the research community is investigating deep-neural-network page segmentation for historical newspapers and large-language-model-based post-OCR correction, indicating that both the recognition and the segmentation halves of the problem continue to advance."
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
          "period": "Early 1990s",
          "text": "OCR is first used by libraries for historic newspaper digitization; early experiments such as the British Library's Burney collection and Australia's ACDP with the Ferguson collection are considered largely unsuccessful given the difficulty of historic newspapers (Holley, D-Lib 2009)."
        },
        {
          "period": "1993–2005",
          "text": "OCR software developments (Holley cites ABBYY FineReader) improve results on historic newspapers."
        },
        {
          "period": "2005",
          "text": "NEH and the Library of Congress launch the National Digital Newspaper Program (NDNP), which supports Chronicling America."
        },
        {
          "period": "2007–2008",
          "text": "The National Library of Australia's Australian Newspaper Digitisation Program tests methods to improve OCR accuracy (Holley)."
        },
        {
          "period": "March 2009",
          "text": "Rose Holley publishes \"How Good Can It Get?\" in D-Lib Magazine (Vol. 15, No. 3/4)."
        },
        {
          "period": "August 2014",
          "text": "ALTO version 2.1 noted as the long-standing default schema (per the Library of Congress ALTO standard page); later versions v3.x and v4.x follow, with v4.4 as the current Official version."
        },
        {
          "period": "April 2025",
          "text": "The Library of Congress announces the OCR reprocessing effort for Chronicling America (Tesseract plus custom post-processing), reporting over 170,000 pages reprocessed at that time."
        },
        {
          "period": "September 2025",
          "text": "The Library of Congress presents \"Twenty-Year-Old OCR Gets A Makeover\" (NDNP-Open-OCR version 1.1) to the British Library."
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
      "slug": "ocr-for-archives"
    },
    {
      "section": "guides",
      "slug": "ocr-layout-analysis"
    },
    {
      "section": "workflows",
      "slug": "ocr-for-books"
    },
    {
      "section": "guides",
      "slug": "optical-character-recognition"
    },
    {
      "section": "guides",
      "slug": "ocr-accuracy"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    }
  ],
  "sources": [
    {
      "title": "Improving Machine-Readable Text for Newspapers in Chronicling America",
      "url": "https://blogs.loc.gov/headlinesandheroes/2025/04/ocr-reprocessing/",
      "publisher": "Library of Congress"
    },
    {
      "title": "Improved Machine-Readable Text for Newspapers (Chronicling America research guide)",
      "url": "https://guides.loc.gov/chronicling-america/improved-text",
      "publisher": "Library of Congress"
    },
    {
      "title": "Guidelines & Resources — National Digital Newspaper Program",
      "url": "https://www.loc.gov/ndnp/guidelines/",
      "publisher": "Library of Congress"
    },
    {
      "title": "About this Collection | Chronicling America",
      "url": "https://www.loc.gov/collections/chronicling-america/about-this-collection/",
      "publisher": "Library of Congress"
    },
    {
      "title": "ALTO: Technical Metadata for Layout and Text Objects",
      "url": "https://www.loc.gov/standards/alto/",
      "publisher": "Library of Congress"
    },
    {
      "title": "METS: Metadata Encoding and Transmission Standard",
      "url": "https://www.loc.gov/standards/mets/",
      "publisher": "Library of Congress"
    },
    {
      "title": "Rose Holley, \"How Good Can It Get? Analysing and Improving OCR Accuracy in Large Scale Historic Newspaper Digitisation Programs\"",
      "url": "https://www.dlib.org/dlib/march09/holley/03holley.html",
      "publisher": "D-Lib Magazine"
    },
    {
      "title": "Technical ecosystem — Trove",
      "url": "https://trove.nla.gov.au/about/what-trove/technical-ecosystem",
      "publisher": "National Library of Australia"
    },
    {
      "title": "Chronicling America: Historic American Newspapers",
      "url": "https://www.neh.gov/explore/chronicling-america-historic-american-newspapers",
      "publisher": "National Endowment for the Humanities"
    },
    {
      "title": "Logical segmentation for article extraction in digitized old newspapers",
      "url": "https://arxiv.org/abs/1210.0999",
      "publisher": "arXiv"
    },
    {
      "title": "An Evaluation of DNN Architectures for Page Segmentation of Historical Newspapers",
      "url": "https://arxiv.org/abs/2004.07317",
      "publisher": "arXiv"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ocr for newspapers",
    "newspaper digitization",
    "chronicling america",
    "national digital newspaper program",
    "ndnp",
    "alto xml",
    "mets",
    "trove",
    "ocr accuracy",
    "historic newspapers",
    "tesseract",
    "article segmentation"
  ],
  "cluster": "ocr-workflows",
  "goal": "Automated conversion of scanned newspaper page images into machine-readable, searchable text.",
  "toolsUsed": [
    "A scanner or camera capture",
    "OCR-capable software"
  ]
};

export default entry;
