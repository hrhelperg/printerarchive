import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "orientation-detection",
  "title": "Page Orientation Detection",
  "description": "How document-image pipelines detect a page's 90-degree rotation (0/90/180/270) before OCR, including Tesseract OSD and modern classifiers.",
  "summary": "Page orientation detection is the document-image processing step that determines a page's dominant text rotation in multiples of 90 degrees (0, 90, 180, or 270) so the page can be turned upright before optical character recognition, which otherwise produces garbled output on non-upright input. It is distinct from and coarser than skew detection, which corrects fractional-degree tilt. The canonical method in the open-source Tesseract engine is Orientation and Script Detection (OSD), described by Unnikrishnan and Smith (Google) at MOCR '09, which reuses Tesseract's shape classifier to vote across four rotations of sampled connected components and simultaneously identifies the writing script. Modern pipelines also use deep-learning rotation classifiers. Orientation detection sits early in the capture/OCR pipeline, feeds correct rotation into scanning and archival workflows, and underpins correct PDF page presentation.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solves"
    },
    {
      "kind": "paragraph",
      "text": "Most OCR engines make the natural assumption that the text in the image being processed is upright, which need not always be the case. When a page is captured at 90, 180, or 270 degrees, recognition produces garbage output. Common causes of a non-upright page, per the source method paper, include tables and figures printed in landscape within a portrait book, a document fed into a scanner in the wrong orientation, and camera capture at the wrong base rotation."
    },
    {
      "kind": "paragraph",
      "text": "A brute-force remedy — running full OCR at every orientation (and every candidate language) and keeping the best result — is impractically slow and also needs a separate procedure to decide which output is valid. Page orientation detection solves the problem cheaply, before recognition, by estimating the correct rotation directly from the image."
    },
    {
      "kind": "paragraph",
      "text": "Orientation detection is distinct from, and coarser than, skew detection and deskewing, which correct the small angular deviation of text lines from true horizontal caused by imperfect scanning or camera placement. Orientation answers \"which of the four cardinal rotations is this page in?\"; skew answers \"by how many fractional degrees are the text lines tilted?\" A robust pipeline typically performs orientation first (a discrete four-way decision) and then fine skew correction (a continuous small-angle estimate)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History and origin"
    },
    {
      "kind": "paragraph",
      "text": "The canonical published description of the orientation-and-script method used in the open-source Tesseract OCR engine is Ranjith Unnikrishnan and Ray Smith (Google Inc.), \"Combined script and page orientation estimation using the Tesseract OCR engine,\" presented at MOCR '09, the International Workshop on Multilingual OCR, on 25 July 2009 in Barcelona, Spain (ACM; DOI 10.1145/1577802.1577809). The paper's copyright notice reads verbatim \"MOCR '09, July 25, 2009 Barcelona, Spain ... Copyright 2009 ACM 978-1-60558-698-4/09/07.\" The same paper is also listed under the slightly different title \"Combined Orientation and Script Detection using the Tesseract OCR Engine.\""
    },
    {
      "kind": "paragraph",
      "text": "The method builds on Tesseract's existing static character and shape classifier, described in R. Smith, \"An Overview of the Tesseract OCR Engine,\" Proc. 9th ICDAR, 2007. Its connected-component extraction and image-processing primitives come from the Leptonica image-processing library."
    },
    {
      "kind": "paragraph",
      "text": "Script and orientation detection as a research problem predates Tesseract's OSD. The 2009 paper situates its local, connected-component approach against earlier script-identification work, including Hochberg, Kelly, Thomas, and Kerns, \"Automatic Script Identification From Document Images Using Cluster-Based Templates,\" IEEE PAMI (1997); A. L. Spitz, \"Determination of the Script and Language Content of Document Images,\" IEEE PAMI (1997); and Busch, Boles, and Sridharan, \"Texture for Script Identification,\" IEEE PAMI (2005)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Tesseract's Orientation and Script Detection (OSD) uses a local, connected-component approach: it classifies individual connected components independently, so it needs neither word segmentation nor text-line finding as a preprocessing step and can work on small images."
    },
    {
      "kind": "paragraph",
      "text": "Training is performed offline in three stages. First, candidate classes are created by rendering natural text from web-crawled corpora using the International Components for Unicode (ICU) layout engine, which provides support for a variety of non-Latin scripts including Devanagari and Arabic, with varying degradation (morphological erosion and dilation, plus noise); connected components are extracted and aligned to characters to form word fragments, where a fragment may represent one or more characters and one or more connected components. Second, fragments are ranked by frequency of occurrence and pruned by cumulative coverage (a per-script parameter), because a small set of classes suffices for many scripts. Third, the selected fragments train Tesseract's static shape classifier; the reported training set comprises 1,808 classes across the scripts, one font per script, with Indo-Arabic numerals added as a \"Common\" class."
    },
    {
      "kind": "paragraph",
      "text": "At runtime, per page:"
    },
    {
      "kind": "list",
      "items": [
        "Binarize the image and segment it into connected components, grouping horizontally overlapping components into blobs.",
        "For each blob in a randomly selected subset, reject those with implausible aspect ratio or size or low-confidence classification, classify the blob to its most likely script, and accumulate the confidence score.",
        "Repeat the classification after rotating the connected component into the three other orientations (90, 180, and 270 degrees from the input).",
        "This yields four sets of per-script counts plus an accumulated confidence score per orientation. Choose the orientation with the highest total confidence as the page orientation, then choose the script with the highest count for that orientation."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Pseudo-scripts are handled with fractional counts: Japanese is treated as Katakana plus Hiragana plus Han, and Korean as Hangul plus Han, with the weight of Han characters chosen as 0.2 toward Japanese and 0.6 toward Korean in the implementation. The key efficiency trick is interleaving blob rotation with shape classification, so the same classifier is reused on rotated copies of each component and orientation falls out of the same computation as script."
    },
    {
      "kind": "paragraph",
      "text": "Tesseract's shape classifier itself (recapped from Smith 2007) uses 4-D segments (x and y position, direction, length) of a polygonized outline for trained prototypes and 3-D unit-length fragments for the unknown, with a two-stage classify: a fast class pruner (described as akin to \"forgiving hashing\") followed by shape-distance matching on the shortlist."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Algorithms and variants"
    },
    {
      "kind": "list",
      "items": [
        "Tesseract OSD: connected-component shape-classifier voting across four rotations, as described above. It is exposed via page-segmentation mode 0 (--psm 0), uses the model file osd.traineddata, and produces an output including detected orientation in degrees, the rotation needed to correct it, an orientation confidence, the detected script, and a script confidence.",
        "Text-based / OCR-statistics approach: a comparison baseline in the 2009 paper that runs a full OCR engine in one or more pilot language modes and analyzes the statistics of the (garbled) output to infer script and orientation. It scales poorly to many scripts and was less accurate in the paper's tests.",
        "Brute-force \"try all four orientations\": run OCR at 0, 90, 180, and 270 degrees and keep the highest-confidence result. Simple and engine-agnostic but slow.",
        "Deep-learning image classifiers: modern pipelines commonly train a network to classify the page rotation directly. PaddleOCR ships a document-orientation classifier (PP-LCNet_x1_0_doc_ori, four classes 0/90/180/270, built on the PP-LCNet backbone). Recent research includes the November 2025 arXiv work \"Seeing Straight: Document Orientation Detection for Efficient OCR\" (arXiv:2511.04161), which introduces an OCR-Rotation-Bench evaluation set; any specific accuracy figures reported there are that paper's own claims."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the capture/OCR pipeline"
    },
    {
      "kind": "paragraph",
      "text": "A typical ordering in a document-capture or OCR pipeline is:"
    },
    {
      "kind": "list",
      "items": [
        "Image acquisition (scan or photo).",
        "Binarization / thresholding.",
        "Page orientation detection (0/90/180/270) plus optional script detection, then rotate the page upright. Tesseract OSD lives at this stage; the paper reports it is roughly as costly as Tesseract's thresholding step.",
        "Skew detection and fine deskew, rotating by a small fractional angle so text lines are horizontal.",
        "Layout analysis / page segmentation into blocks, lines, and words.",
        "Character and line recognition (OCR proper), using the now-known script or language model.",
        "Post-processing (dictionary correction, output formatting)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Detecting the coarse cardinal rotation before fine skew correction keeps each stage simple: orientation handles the discrete four-way decision, and deskew then handles only the residual small angle."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Cheap relative to full OCR. The paper reports the OSD classifier is time-bounded by a maximum number of blobs and runs in roughly 0.5 to 0.6 seconds, comparable to the thresholding step (0.3 to 1.2 seconds) and about 6 to 10 times faster than the text-based comparison approach.",
        "No line-finding or word-segmentation prerequisite, and it works on small inputs.",
        "Simultaneously yields the script, a valuable input for choosing the language model in downstream OCR.",
        "Broad script coverage in one model. The paper handles 14 scripts (Latin, Cyrillic, Greek, Hebrew, Arabic, Han, Japanese, Korean, Thai, Devanagari, Kannada, Tamil, Telugu, and Bengali) spanning more than 40 languages, and also distinguishes between Fraktur and non-Fraktur fonts.",
        "On its evaluation dataset of 1,846 documents, the paper reports an orientation error rate of 0.2% and a script-identification error rate of 1.84%."
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
        "Little text on the page raises error, because the method samples connected components and sparse text gives fewer votes.",
        "Han-versus-Japanese confusion accounts for a notable share of the paper's script errors, because the scripts share many symbols. This is a script-detection failure rather than strictly an orientation failure.",
        "Degraded or handwritten text, unusual images or line drawings not removed in preprocessing, and fonts not represented in training all degrade results.",
        "The method requires binarization and non-text removal upstream; garbage blobs from figures can mislead it if not filtered.",
        "It detects only the four cardinal rotations (and script); it does not correct fine skew, and standard OSD does not resolve mirrored or flipped text on its own.",
        "Only the dominant orientation is estimated, so mixed-orientation pages (for example a rotated table amid portrait body text) get a single answer."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to OCR and scanning"
    },
    {
      "kind": "paragraph",
      "text": "Orientation detection exists specifically to serve OCR: recognition accuracy collapses on non-upright pages, so detecting and correcting rotation up front is a precondition for usable output. In Tesseract it is tightly coupled to OCR, reusing the same shape classifier and training infrastructure, and it also supplies the script, which informs language-model selection for the recognition pass."
    },
    {
      "kind": "paragraph",
      "text": "In scanning workflows — automatic-document-feeder scanners, mobile capture, and batch digitization — pages routinely arrive in the wrong orientation because of misfeeds, landscape inserts, or phone photos, which makes automated orientation detection a standard front-end feature."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF and archival"
    },
    {
      "kind": "paragraph",
      "text": "PDF page rotation is metadata, not pixels. A PDF page has a /Rotate entry (0, 90, 180, or 270) that instructs viewers how to display the page, defined in ISO 32000-2:2020 (clause 7.7.3, page objects); the underlying content stream or scanned image may be stored in a different physical orientation. Orientation detection on the rasterized page is what lets a digitization pipeline set /Rotate correctly, or bake in the rotation, so that a searchable or archival PDF displays upright and its embedded OCR text layer aligns with the visible glyphs."
    },
    {
      "kind": "paragraph",
      "text": "For long-term archival such as library and book digitization — the 2009 paper's evaluation corpus was scanned books — correct orientation is essential so that stored page images and their OCR text layers are usable and consistently presented across a collection. Standards bodies address the container and preservation format (for example PDF/A) but not the orientation-detection algorithm itself; orientation correctness is a data-quality property enforced during capture."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Orientation detection remains a standard preprocessing stage in contemporary OCR stacks. Tesseract's OSD (--psm 0) is still shipped and widely used. Alongside it, deep-learning rotation classifiers have become common, such as PaddleOCR's document-orientation classifier, and recent research continues to push robustness, including vision-encoder classifiers and dedicated rotation benchmarks (the November 2025 \"Seeing Straight\" work). Camera-based and mobile document capture, where arbitrary rotation is routine, keep the problem practically important."
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
          "period": "1997",
          "text": "Cluster-template and shape-based script-identification methods published (Hochberg et al.; Spitz), IEEE PAMI; precursor script-detection work later cited by Unnikrishnan and Smith."
        },
        {
          "period": "2005",
          "text": "Busch, Boles, and Sridharan, texture-based script identification, IEEE PAMI."
        },
        {
          "period": "2007",
          "text": "R. Smith, \"An Overview of the Tesseract OCR Engine,\" 9th ICDAR; the shape classifier that OSD later reuses."
        },
        {
          "period": "25 July 2009",
          "text": "Unnikrishnan and Smith, \"Combined script and page orientation estimation using the Tesseract OCR engine,\" MOCR '09, Barcelona; the canonical description of Tesseract OSD, evaluated on 1,846 documents across 14 scripts and reporting a 0.2% orientation error rate and a 1.84% script-identification error rate."
        },
        {
          "period": "November 2025",
          "text": "\"Seeing Straight: Document Orientation Detection for Efficient OCR\" (arXiv:2511.04161), a deep-learning treatment with an accompanying rotation benchmark."
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
      "slug": "image-deskew"
    },
    {
      "section": "guides",
      "slug": "ocr-preprocessing"
    },
    {
      "section": "guides",
      "slug": "ocr-layout-analysis"
    },
    {
      "section": "guides",
      "slug": "optical-character-recognition"
    },
    {
      "section": "guides",
      "slug": "image-binarization"
    },
    {
      "section": "guides",
      "slug": "ocr-accuracy"
    }
  ],
  "faqs": [
    {
      "q": "What is page orientation detection?",
      "a": "It is the document-image processing step that determines a page's dominant text rotation in multiples of 90 degrees (0, 90, 180, or 270) so the page can be turned upright before OCR, which otherwise produces garbled output on non-upright pages."
    },
    {
      "q": "How is orientation detection different from skew correction?",
      "a": "Orientation detection makes a discrete four-way choice among the cardinal 90-degree rotations, while skew detection corrects the small fractional-degree tilt of text lines. Pipelines typically do orientation first, then fine deskew."
    },
    {
      "q": "What is Tesseract OSD?",
      "a": "OSD stands for Orientation and Script Detection, Tesseract's combined capability exposed as page-segmentation mode 0 (--psm 0) using the osd.traineddata model. It reuses Tesseract's shape classifier to vote across four rotations of sampled connected components and also identifies the writing script."
    },
    {
      "q": "Where does the Tesseract method come from?",
      "a": "It is described by Ranjith Unnikrishnan and Ray Smith (Google) in \"Combined script and page orientation estimation using the Tesseract OCR engine,\" presented at MOCR '09 in Barcelona on 25 July 2009."
    },
    {
      "q": "When does orientation detection fail?",
      "a": "It struggles with pages that have little text, degraded or handwritten text, fonts absent from training, and unfiltered figures. It also detects only the dominant orientation, so mixed-orientation pages get a single answer, and it does not correct fine skew or mirrored text."
    }
  ],
  "sources": [
    {
      "title": "Combined script and page orientation estimation using the Tesseract OCR engine (Unnikrishnan & Smith, MOCR '09)",
      "url": "https://dl.acm.org/doi/10.1145/1577802.1577809",
      "publisher": "ACM Digital Library"
    },
    {
      "title": "Combined Orientation and Script Detection using the Tesseract OCR Engine (paper PDF)",
      "url": "https://tesseract-ocr.github.io/docs/Combined_Orientation_and_Script_Detection_using_the_Tesseract_OCR_Engine.pdf",
      "publisher": "Tesseract OCR project"
    },
    {
      "title": "Automatic Script Identification From Document Images Using Cluster-Based Templates (Hochberg et al., IEEE PAMI 1997)",
      "url": "https://dl.acm.org/doi/10.1109/34.574802",
      "publisher": "IEEE / ACM Digital Library"
    },
    {
      "title": "Determination of the Script and Language Content of Document Images (Spitz, IEEE PAMI 1997)",
      "url": "https://www.semanticscholar.org/paper/Determination-of-the-Script-and-Language-Content-of-Spitz/74b55587563c5c3bac91bdb3b3f0ffe219614f5f",
      "publisher": "Semantic Scholar"
    },
    {
      "title": "An Overview of the Tesseract OCR Engine (Smith, ICDAR 2007)",
      "url": "https://www.semanticscholar.org/paper/An-Overview-of-the-Tesseract-OCR-Engine-Smith/89d9aae7e0c8b6edd56d0d79b277c07b7ab66fda",
      "publisher": "Semantic Scholar"
    },
    {
      "title": "Document Image Orientation Classification Module (PP-LCNet_x1_0_doc_ori)",
      "url": "https://www.paddleocr.ai/v3.0.0/en/version3.x/module_usage/doc_img_orientation_classification.html",
      "publisher": "PaddleOCR"
    },
    {
      "title": "Seeing Straight: Document Orientation Detection for Efficient OCR",
      "url": "https://arxiv.org/abs/2511.04161",
      "publisher": "arXiv"
    },
    {
      "title": "Leptonica skew.c source",
      "url": "https://github.com/DanBloomberg/leptonica/blob/master/src/skew.c",
      "publisher": "Leptonica (D. Bloomberg)"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "page orientation detection",
    "orientation and script detection",
    "tesseract osd",
    "document image preprocessing",
    "ocr preprocessing",
    "script detection",
    "page rotation",
    "psm 0",
    "osd.traineddata",
    "skew vs orientation",
    "connected component classification",
    "document capture pipeline"
  ],
  "cluster": "image-preprocessing"
};

export default entry;
