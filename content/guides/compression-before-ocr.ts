import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "compression-before-ocr",
  "title": "Compression Before OCR",
  "description": "How lossless, lossy, and layered image compression is applied to scanned pages before OCR, and why the choice affects recognition fidelity.",
  "summary": "\"Compression before OCR\" covers the decisions about how a scanned page image is encoded — losslessly or lossily, in bilevel or continuous-tone form, or as a layered Mixed Raster Content container — before an OCR engine reads it. Compression shrinks files for storage and transmission, while OCR depends on the fidelity of character edges and stroke shapes; lossy encoding that looks acceptable to a human can degrade or, in the documented Xerox JBIG2 case, silently substitute glyphs. The main families are continuous-tone coders (JPEG, JPEG 2000), bilevel/facsimile coders (CCITT Group 4, JBIG, JBIG2), and the Mixed Raster Content (ITU-T T.44) model. Lossless bilevel (Group 4, lossless JBIG2) and visually lossless JPEG 2000 are preferred for material destined for recognition or preservation, and archival regulators (NARA, FADGI, BSI) constrain lossy document compression accordingly.",
  "difficulty": "advanced",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "Compression of document images grew out of facsimile standardization at the CCITT (now the ITU-T Telecommunication Standardization Sector). CCITT Group 4 bilevel fax coding was first standardized as ITU-T Recommendation T.6 in 1984 (with a later 1988 edition), using the two-dimensional MMR (Modified Modified READ) scheme, which is lossless for black-and-white images and remains embedded in TIFF, CALS, and PDF."
    },
    {
      "kind": "paragraph",
      "text": "Bilevel coding continued with JBIG (Joint Bi-level Image Experts Group) and then JBIG2, published as ITU-T T.88 (February 2000) and ISO/IEC 14492 (2001), which added symbol-dictionary and lossy modes. For continuous-tone material, JPEG was approved as ITU-T T.81 (September 1992), with the corresponding ISO/IEC 10918-1 published in 1994; JPEG 2000 followed as the ISO/IEC 15444 family from December 2000. The layered Mixed Raster Content (MRC) model was standardized as ITU-T Recommendation T.44 (first approved 1 April 1999) and ISO/IEC 16485:2000."
    },
    {
      "kind": "paragraph",
      "text": "The practical importance of compression as a distinct pre-OCR concern was crystallized by the 2013 Xerox scanner incident, the most widely documented real-world case of a compression choice altering document content."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solves"
    },
    {
      "kind": "paragraph",
      "text": "Scanned pages are large, and a repository of millions of pages is otherwise unmanageable for storage, transfer, and delivery. Compression before OCR addresses several needs:"
    },
    {
      "kind": "list",
      "items": [
        "Storage and bandwidth — shrinking archival masters and access derivatives.",
        "Pipeline throughput — smaller images move faster between capture, storage, and the OCR stage.",
        "Container packaging — producing searchable PDFs in which the page image and the OCR text layer coexist at a reasonable file size. Bilevel coders such as Group 4 and JBIG2 and the layered MRC model are used precisely to keep such PDFs small."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The design goal is to obtain these savings without removing the visual information that the OCR engine and the human reader rely on."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Three encoding strategies are applied to document rasters."
    },
    {
      "kind": "paragraph",
      "text": "Bilevel (1-bit) coding. After binarization, each pixel is black or white. Facsimile coders (Group 4 / T.6 / MMR) exploit run-lengths and vertical correlation between scan lines; they are lossless with respect to the bilevel image. JBIG2 goes further by treating repeated marks (letters) as reusable symbols."
    },
    {
      "kind": "paragraph",
      "text": "Continuous-tone coding. JPEG and JPEG 2000 transform image blocks or wavelet subbands and quantize the resulting coefficients. JPEG is lossy in its common baseline mode; JPEG 2000 supports both lossy and mathematically lossless modes."
    },
    {
      "kind": "paragraph",
      "text": "Layered decomposition (MRC). The page is split into a binary selector/mask plus continuous-tone foreground and background layers, each coded with the codec best suited to it."
    },
    {
      "kind": "paragraph",
      "text": "OCR operates on the decoded image. If the codec discarded or altered edge detail, the recognizer inherits that damage, which is why lossless or visually lossless coding is preferred for material destined for recognition and preservation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Algorithms and variants"
    },
    {
      "kind": "paragraph",
      "text": "CCITT Group 4 (T.6 / MMR). Lossless, bilevel only. Its 2-D encoding derives from Group 3's Modified READ, itself built on Modified Huffman coding. It is widely embedded in TIFF, CALS, and PDF."
    },
    {
      "kind": "paragraph",
      "text": "JBIG2 (T.88 / ISO/IEC 14492). Segments the page into text, halftone, and generic regions."
    },
    {
      "kind": "list",
      "items": [
        "Symbol dictionary: for text, one representative bitmap per distinct symbol is stored and then referenced across the page.",
        "Pattern Matching & Substitution (PM&S): a lossy mode that replaces each mark with a matching dictionary symbol; it can introduce substitution errors.",
        "Soft Pattern Matching (SPM): stores refinement data encoding the difference between the actual mark and the dictionary symbol, reducing substitution errors.",
        "Generic region coding uses the MQ arithmetic coder — the same coder used in JPEG 2000 — or Huffman coding."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Per figures published with the standard and cited by Wikipedia, lossless JBIG2 typically produces files 3–5× smaller than Fax Group 4 and 2–4× smaller than JBIG; these are standards-body/press figures rather than independent benchmarks."
    },
    {
      "kind": "paragraph",
      "text": "JPEG (T.81 / ISO/IEC 10918-1). Block-DCT with quantization; baseline mode is lossy. Aggressive quantization produces ringing and \"mosquito\" artifacts along the high-contrast edges of text."
    },
    {
      "kind": "paragraph",
      "text": "JPEG 2000 (ISO/IEC 15444). Wavelet-based, supporting both lossy and lossless coding, with rate control toward a target compression ratio. It is the codec archival guidance permits for visually lossless masters."
    },
    {
      "kind": "paragraph",
      "text": "Mixed Raster Content (T.44). A binary selector/mask picks, per pixel, between a foreground and a background continuous-tone layer. Per the standard the mask may be coded with T.4/JBIG/JBIG2 and the image layers with JPEG/JBIG1/run-length. MRC underpins small searchable/scanned PDFs; DjVu uses the same layered principle (with its own JB2 and IW44 codecs) rather than implementing T.44."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture/OCR pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A typical order is: scan → preprocessing (deskew, binarize, denoise) → encode/compress → store/transmit → decode → OCR → package (searchable PDF)."
    },
    {
      "kind": "paragraph",
      "text": "The compression choice can appear twice: as the coding of the archival master or working image fed to OCR, and as the coding of the page image inside the output PDF alongside the recognized text layer. Binarization and bilevel compression (Group 4, JBIG2) are often coupled — the same binarization that helps OCR also enables the smallest bilevel encodings."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Large storage and bandwidth savings, especially from bilevel (Group 4, JBIG2) and layered (MRC) coding of text-dominant pages.",
        "Lossless options preserve recognition fidelity. Group 4 and lossless JBIG2 shrink files without altering pixels, so OCR sees exactly the source image.",
        "Layered MRC keeps color and grayscale scanned PDFs small while retaining sharp text via the binary mask.",
        "Standardized and widely supported across TIFF, PDF, and fax ecosystems, aiding interoperability and long-term readability."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Limitations and failure modes"
    },
    {
      "kind": "list",
      "items": [
        "Lossy JPEG degrades text edges. Higher compression introduces smudging and ringing around characters, reducing recognition accuracy; guidance recommends lossless formats where OCR quality matters.",
        "Lossy JBIG2 (PM&S) can substitute characters. The most serious documented failure: pattern matching can replace one glyph with a visually similar but different one (for example, 6↔8), producing output that looks correct at first glance yet is factually wrong. For this reason OCRmyPDF removed its lossy JBIG2 option, citing \"the well-known risk of character substitution errors,\" and now uses lossless JBIG2, falling back to CCITT.",
        "MRC segmentation artifacts. Poor mask segmentation causes halos around objects and can compromise soft edges and scanned tonal data.",
        "Generation loss. Re-compressing an already-lossy image further harms OCR.",
        "Codec constraints in older MRC. T.44 permits only older standardized codecs for its layers, limiting efficiency versus modern alternatives."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and scanning"
    },
    {
      "kind": "paragraph",
      "text": "OCR accuracy is bounded by input fidelity. Lossless bilevel and continuous-tone coding is neutral to OCR, since the recognizer sees the original pixels. Lossy continuous-tone coding trades edge sharpness for size and can lower recognition accuracy as the compression level rises."
    },
    {
      "kind": "paragraph",
      "text": "Lossy symbol-substitution coding (JBIG2 PM&S) is uniquely dangerous because it can change content rather than merely blur it — the failure is not \"unreadable text\" but \"confidently wrong text,\" which OCR then faithfully transcribes. The practical rule in capture engineering is to compress losslessly, or visually losslessly, anything intended for recognition or preservation, and never to use lossy symbol substitution for documents where exact characters — especially numbers — matter."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and archival"
    },
    {
      "kind": "paragraph",
      "text": "Searchable PDFs commonly pair a compressed page image (Group 4 or JBIG2 for bilevel; JPEG, JPEG 2000, or MRC layers for color/gray) with an invisible OCR text layer."
    },
    {
      "kind": "paragraph",
      "text": "Archival policy is explicit about lossy document compression. The U.S. National Archives (NARA), under 36 CFR Part 1236 Subpart E (effective June 5, 2023), does not accept digitized permanent records saved with lossy compression such as JPEG or JBIG2; it permits visually lossless JPEG 2000 with a compression ratio not to exceed 20:1, subject to visual artifact testing."
    },
    {
      "kind": "paragraph",
      "text": "The Federal Agencies Digital Guidelines Initiative (FADGI, Technical Guidelines 3rd Edition, finalized 2023) grades image quality on a star scale and ties OCR suitability to its tiers, with lower tiers not necessarily meeting OCR requirements; it treats lossless JPEG 2000 as competitive with TIFF for archival masters."
    },
    {
      "kind": "paragraph",
      "text": "In Germany, BSI Technical Guideline TR-03138 (RESISCAN), effective 16 March 2015, prohibits lossy JBIG2 (both Pattern Matching & Substitution and Soft Pattern Matching) for legally-significant substitute scanning, where the paper original is destroyed; lossless, non-pattern-matching JBIG2 is unaffected."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Bilevel and layered compression remain standard in high-volume document capture, multifunction-printer scan-to-PDF, and mass-digitization programs. Lossless JBIG2 and Group 4 continue as default bilevel encodings in tools such as OCRmyPDF, where the former lossy JBIG2 flags are now ignored with a warning."
    },
    {
      "kind": "paragraph",
      "text": "The 2013 Xerox episode continues to inform preservation policy: NARA, FADGI, and BSI have codified prohibitions or limits on lossy document compression, and OCR-oriented tooling defaults to lossless or visually lossless coding. JPEG 2000's rate-controlled, visually lossless mode is the sanctioned compromise for color and grayscale masters where pure lossless coding is too large."
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
          "period": "1984",
          "text": "CCITT Group 4 (ITU-T T.6, MMR) first standardized (later 1988 edition); lossless bilevel fax coding."
        },
        {
          "period": "1992",
          "text": "JPEG approved as ITU-T T.81 (ISO/IEC 10918-1 published 1994)."
        },
        {
          "period": "1999",
          "text": "ITU-T T.44 (Mixed Raster Content) first approved; ISO/IEC 16485:2000 follows."
        },
        {
          "period": "2000",
          "text": "JBIG2 published as ITU-T T.88; JPEG 2000 (ISO/IEC 15444) begins."
        },
        {
          "period": "2001",
          "text": "JBIG2 published as ISO/IEC 14492."
        },
        {
          "period": "August 2013",
          "text": "David Kriesel reports number substitutions (e.g., 6→8) on Xerox WorkCentre/ColorQube devices, traced to lossy JBIG2 pattern matching; per his account Xerox confirms and issues patches disabling pattern matching (dates from Kriesel's timeline)."
        },
        {
          "period": "March 2015",
          "text": "BSI TR-03138 (RESISCAN) prohibition of lossy JBIG2 for legally-significant substitute scanning takes effect."
        },
        {
          "period": "2023",
          "text": "NARA digitization rule (36 CFR 1236 Subpart E) effective June 5; FADGI Technical Guidelines 3rd Edition finalized."
        },
        {
          "period": "Recent OCRmyPDF releases",
          "text": "lossy JBIG2 mode removed; the corresponding flags are ignored with a warning."
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
      "slug": "tiff"
    },
    {
      "section": "tools",
      "slug": "pdf-a"
    },
    {
      "section": "workflows",
      "slug": "scan-to-searchable-pdf"
    },
    {
      "section": "guides",
      "slug": "image-binarization"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    },
    {
      "section": "guides",
      "slug": "ocr-accuracy"
    }
  ],
  "faqs": [
    {
      "q": "Is it safe to use JBIG2 compression before OCR?",
      "a": "Lossless JBIG2 is safe because it does not alter pixels, so OCR sees the original image. Lossy JBIG2 in Pattern Matching & Substitution (PM&S) mode is risky: it can replace one glyph with a visually similar but different one (for example 6 and 8), producing confidently wrong text. Tools such as OCRmyPDF removed their lossy JBIG2 option for this reason and now default to lossless JBIG2, falling back to CCITT Group 4."
    },
    {
      "q": "Does JPEG compression hurt OCR accuracy?",
      "a": "Baseline JPEG is lossy and introduces ringing and 'mosquito' artifacts along the high-contrast edges of text. As the compression level rises, these artifacts blur character edges and can reduce recognition accuracy, which is why guidance recommends lossless or visually lossless formats for material destined for OCR."
    },
    {
      "q": "What compression do archival standards allow for OCR-quality scans?",
      "a": "NARA's 36 CFR Part 1236 Subpart E (effective June 5, 2023) does not accept permanent records saved with lossy compression such as JPEG or JBIG2, but permits visually lossless JPEG 2000 at a compression ratio not exceeding 20:1 with visual artifact testing. FADGI treats lossless JPEG 2000 as competitive with TIFF for archival masters, and Germany's BSI TR-03138 (RESISCAN) prohibits lossy JBIG2 for legally-significant substitute scanning."
    },
    {
      "q": "What is Mixed Raster Content (MRC) and how does it relate to OCR?",
      "a": "MRC (ITU-T T.44 / ISO/IEC 16485:2000) is a layered model that splits a page into a binary selector mask plus foreground and background continuous-tone layers, each coded with a suitable codec. It keeps color and grayscale scanned PDFs small while retaining sharp text via the mask, which supports OCR. DjVu uses the same layered principle with its own codecs rather than implementing T.44."
    }
  ],
  "sources": [
    {
      "title": "ITU-T T.6 (Group 4) format description",
      "url": "https://www.loc.gov/preservation/digital/formats/fdd/fdd000136.shtml",
      "publisher": "Library of Congress"
    },
    {
      "title": "ITU-T T.81 (JPEG) Recommendation",
      "url": "https://www.w3.org/Graphics/JPEG/itu-t81.pdf",
      "publisher": "ITU-T / W3C"
    },
    {
      "title": "ITU-T T.88 (JBIG2) Recommendation",
      "url": "https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-T.88-200002-S!!PDF-E&type=items",
      "publisher": "ITU-T"
    },
    {
      "title": "ITU-T T.44 (Mixed Raster Content) Recommendation",
      "url": "https://www.itu.int/rec/dologin_pub.asp?lang=e&id=T-REC-T.44-199904-S!!PDF-E&type=items",
      "publisher": "ITU-T"
    },
    {
      "title": "ISO/IEC 16485:2000 (Mixed Raster Content)",
      "url": "https://www.iso.org/standard/32228.html",
      "publisher": "ISO"
    },
    {
      "title": "JBIG2",
      "url": "https://en.wikipedia.org/wiki/JBIG2",
      "publisher": "Wikipedia"
    },
    {
      "title": "JPEG 2000",
      "url": "https://en.wikipedia.org/wiki/JPEG_2000",
      "publisher": "Wikipedia"
    },
    {
      "title": "Group 4 compression",
      "url": "https://en.wikipedia.org/wiki/Group_4_compression",
      "publisher": "Wikipedia"
    },
    {
      "title": "Mixed raster content",
      "url": "https://en.wikipedia.org/wiki/Mixed_raster_content",
      "publisher": "Wikipedia"
    },
    {
      "title": "36 CFR 1236.48 — Digitizing Permanent Federal Records",
      "url": "https://www.ecfr.gov/current/title-36/chapter-XII/subchapter-B/part-1236/subpart-E/section-1236.48",
      "publisher": "U.S. eCFR / NARA"
    },
    {
      "title": "Federal Records Management: Digitizing Permanent Records (final rule)",
      "url": "https://www.federalregister.gov/documents/2023/05/04/2023-09050/federal-records-management-digitizing-permanent-records-and-reviewing-records-schedules",
      "publisher": "Federal Register / NARA"
    },
    {
      "title": "3rd Edition of FADGI Still Image Digitization Guidelines Finalized",
      "url": "https://blogs.loc.gov/thesignal/2023/05/fadgi-third-edition-still-image/",
      "publisher": "Library of Congress, The Signal"
    },
    {
      "title": "Installing the JBIG2 encoder (lossless vs lossy discussion)",
      "url": "https://ocrmypdf.readthedocs.io/en/latest/jbig2.html",
      "publisher": "OCRmyPDF documentation"
    },
    {
      "title": "Xerox WorkCentres are switching written numbers when scanning",
      "url": "https://www.dkriesel.com/en/blog/2013/0802_xerox-workcentres_are_switching_written_numbers_when_scanning",
      "publisher": "David Kriesel"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "compression before ocr",
    "jbig2",
    "ccitt group 4",
    "jpeg 2000 ocr",
    "mixed raster content",
    "lossy compression ocr",
    "jbig2 character substitution",
    "visually lossless",
    "searchable pdf compression",
    "mrc t.44",
    "xerox scanning bug",
    "nara digitization jpeg 2000"
  ],
  "cluster": "image-preprocessing",
  "modernTools": [
    "pdf-editor",
    "zip-rar"
  ]
};

export default entry;
