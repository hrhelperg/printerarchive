import type { ToolEntry } from "@/lib/content/types";

const entry: ToolEntry = {
  "section": "tools",
  "slug": "cmyk",
  "title": "CMYK Color Model",
  "description": "CMYK is the subtractive four-ink color model (cyan, magenta, yellow, key/black) used in process color printing and ICC-managed prepress workflows.",
  "summary": "CMYK is the standard subtractive process-color model used in color printing. Its four inks — cyan, magenta, yellow, and K (the key/black plate) — are laid on a light substrate where they absorb portions of reflected light; the remaining reflected light is perceived as color. This is the inverse of the additive RGB model used by light-emitting displays. Because it is realized through physical inks on physical substrates, CMYK is device-dependent: identical CMYK numbers yield different measured colors on different presses, inks, and papers, so reproduction is governed by color-management systems and ICC profiles rather than by any single fixed RGB-to-CMYK formula.",
  "purpose": "The subtractive four-ink model (cyan, magenta, yellow, black) used for process color printing.",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Trichromatic (three-color) printing predates the modern CMYK process by roughly two centuries. The painter and engraver Jacob Christoph Le Blon (1667-1741) developed a mezzotint-based color printing system in the early 1710s, making his first color prints around 1710 using yellow, red, and blue plates; later in his career he often added a black plate to strengthen contrast and detail, an early conceptual ancestor of four-color process printing. He received royal patents for the three-color process in 1719, and in 1725 published Coloritto, an early printed description of trichromatic color printing."
    },
    {
      "kind": "paragraph",
      "text": "The modern cyan/magenta/yellow-plus-black process used in mass printing came together with halftone reproduction in the late 19th century; the CMYK-style four-color process was first implemented in the 1890s for color newspaper illustrations and comic strips. Through the 20th century, four-color process printing became the dominant method for photographic color reproduction on offset lithographic presses, and was later formalized by international process-control and ink standards and by ICC-based color management from the mid-1990s onward."
    },
    {
      "kind": "paragraph",
      "text": "Exact \"first\" attributions in early color printing are genuinely disputed in the historical literature; the dates above describe well-documented milestones rather than definitive single inventions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What problem it solved"
    },
    {
      "kind": "paragraph",
      "text": "Color printing needed a small, fixed set of inks that could reproduce a wide range of colors on paper economically. Rather than mixing a custom ink for every color — impractical for photographs and continuous-tone images — process printing overlays semi-transparent cyan, magenta, and yellow dots, the subtractive primaries, so that varying dot coverage reproduces most colors from just three (later four) inks."
    },
    {
      "kind": "paragraph",
      "text": "The addition of black (K) solved several distinct practical problems that cyan-magenta-yellow alone could not:"
    },
    {
      "kind": "list",
      "items": [
        "Insufficient density: combining 100% cyan, magenta, and yellow produces a dark, imperfect, often brownish result rather than a deep neutral black; a dedicated black ink yields more consistent, denser dark tones and a wider dynamic range.",
        "Text and detail: a single black \"key\" plate renders fine text and outlines crisply, without requiring three inks to register perfectly on top of one another.",
        "Ink cost, ink load, and drying: substituting black for the neutral portion of a color reduces total ink consumption, lowers the total ink laid down in dark areas, and shortens drying time, reducing paper distortion, set-off, and tearing."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Each pixel's color is expressed as four ink amounts, commonly 0-100%. White is the bare paper (no ink); adding cyan subtracts red light, magenta subtracts green, and yellow subtracts blue. Because a press prints solid or no ink at a given tiny location, continuous tone is simulated by halftoning — varying the size and spacing of small dots so the eye integrates them into intermediate tones and colors. The four ink layers are printed at different screen angles to avoid moire patterns."
    },
    {
      "kind": "paragraph",
      "text": "The neutral (gray) component of any color can be thought of as the amount of cyan, magenta, and yellow that overlap equally. Black-generation techniques replace some or all of that overlapping ink with black:"
    },
    {
      "kind": "list",
      "items": [
        "Undercolor Removal (UCR) adds black only in dark, near-neutral shadow areas, removing equivalent cyan, magenta, and yellow there.",
        "Gray Component Replacement (GCR) replaces the gray component across a broader range of colors and tones."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Both reduce total ink, improve gray neutrality and stability under varying lighting, aid registration (fewer inks to balance), and speed drying — at the cost of some color-adjustment latitude and, if applied too aggressively, weakened shadow contrast. A related control is Total Area Coverage (TAC), or total ink limit — the maximum summed percentage of all four inks (commonly in the range of about 300-340% on coated stock as a typical, not standard-mandated, figure) — which prevents over-inking."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the print/document pipeline"
    },
    {
      "kind": "paragraph",
      "text": "CMYK is the output-color stage of a print pipeline. A typical flow: content is authored in RGB or a working space; at prepress it is color-separated into the four CMYK channels using a destination profile appropriate to the press and paper; the separations are halftoned or screened; plates or digital imaging engines are driven from those separations; and the press lays the inks down in sequence with registration aligning the layers."
    },
    {
      "kind": "paragraph",
      "text": "Process-control standards then verify that solid densities, tone value increase (dot gain), gray balance, and color differences fall within tolerance. This separation of authoring space from output space is why the same document can be prepared once and reliably reproduced against a specific, characterized print condition."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printers"
    },
    {
      "kind": "paragraph",
      "text": "CMYK is the native color language of most color printers — offset presses, digital presses, and desktop and office color devices — because they physically deposit cyan, magenta, yellow, and black colorants. Printer behavior determines the actual color of a given CMYK value, so each printer/ink/media combination is characterized (measured) to build a device profile."
    },
    {
      "kind": "paragraph",
      "text": "Some devices extend beyond four inks — for example adding light cyan and magenta, orange/green/violet, or additional blacks — to widen gamut or smooth gradients, but the four-process foundation remains CMYK. Process color contrasts with spot color, where a dedicated premixed ink reproduces one fixed, predictable color rather than being built from CMYK dots."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to operating systems"
    },
    {
      "kind": "paragraph",
      "text": "Operating systems mediate CMYK through their color-management frameworks and print subsystems rather than defining the model themselves. Color-management stacks — for example ICM on Windows, ColorSync on macOS, and CUPS with littleCMS-based handling on Linux — load ICC profiles, perform the color transforms between source and destination spaces, and pass rasterized or separated data to the printer via the print driver or spooler."
    },
    {
      "kind": "paragraph",
      "text": "The operating system's role is to apply the correct source and destination profiles and rendering intent so that on-screen (RGB) and printed (CMYK) results correspond as closely as the devices allow."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to PDF / PostScript / drivers"
    },
    {
      "kind": "paragraph",
      "text": "CMYK is a first-class color space in the page-description languages that dominate print."
    },
    {
      "kind": "list",
      "items": [
        "PostScript and PDF both define a device CMYK color space (in PDF, DeviceCMYK) alongside device-independent CIE-based spaces and Separation/DeviceN color spaces for spot and multi-ink workflows. This lets a single document carry both process and spot colors together with embedded ICC profiles.",
        "PDF/X, an ISO subset of PDF for graphic-arts exchange (the ISO 15930 family), exists specifically to make print handoff reliable; it constrains color to well-defined CMYK, spot, and ICC handling and requires an output intent identifying the target print condition.",
        "Print drivers and RIPs perform the final separation, screening/halftoning, ink-limiting (TAC), and black generation (GCR/UCR) as they convert incoming content to the specific device's CMYK."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "CMYK remains the default for essentially all process color printing: commercial offset, packaging, publications, and digital, inkjet, and laser printing. Contemporary workflows are ICC-managed end to end — RGB or Lab source content is converted to a destination CMYK defined by a characterization dataset or profile for a standardized print condition."
    },
    {
      "kind": "paragraph",
      "text": "Widely used references include FOGRA characterization data and profiles (such as FOGRA51 and FOGRA52, associated with ISO 12647-2:2013) in Europe, and GRACoL, published by IDEAlliance, in North America. Soft-proofing on a calibrated display simulates the CMYK output before printing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Reproduces a broad range of colors from a small, standardized ink set, enabling economical photographic and continuous-tone printing.",
        "Black ink gives dense neutral blacks, crisp text and detail, lower ink cost, faster drying, and better registration tolerance via GCR/UCR.",
        "Backed by mature international standards (ISO 12647 process control, ISO 2846 inks) and ICC color management, giving repeatable, exchangeable results across vendors.",
        "Directly matches how printing presses physically work — subtractive inks on paper."
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
        "Device-dependent: identical CMYK numbers print differently across presses, inks, and papers, requiring profiling and color management.",
        "Smaller gamut than emissive RGB displays: many bright, saturated, and highly luminous colors (and some deep blues and greens) fall outside typical CMYK gamut, forcing gamut mapping when converting from RGB.",
        "No single reversible RGB-to-CMYK formula; conversion is an approximation guided by profiles and rendering intents, and can be lossy.",
        "Reproduction depends on physical variables — dot gain / tone value increase, ink density, substrate, and TAC limits — that must be controlled.",
        "Four-ink process alone cannot reproduce certain spot colors, metallics, or fluorescents, which need dedicated inks."
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
        "RGB: the complementary additive model for displays and capture; CMYK is its subtractive print-side counterpart.",
        "CIE colorimetry (CIEXYZ, CIELAB): device-independent color spaces used as the reference and interchange for measuring and converting colors.",
        "ICC profile format: the vendor-neutral color-management standard (ISO 15076-1) that maps device colors through a Profile Connection Space (CIELAB/CIEXYZ), using rendering intents (perceptual, relative colorimetric, saturation, absolute colorimetric) to handle gamut mapping in RGB-to-CMYK conversion.",
        "ISO 12647: graphic technology process control for half-tone color separations, proof, and production prints; Part 2 covers offset lithography.",
        "ISO 2846: color and transparency of process printing ink sets.",
        "PostScript, PDF, and PDF/X (ISO 32000, ISO 15930): page-description and print-exchange standards carrying CMYK, spot, and ICC color.",
        "Spot color systems: premixed-ink references used alongside or instead of process CMYK."
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
          "period": "1667-1741",
          "text": "Lifespan of Jacob Christoph Le Blon, developer of an early trichromatic (three-plate) color printing process; he sometimes added a fourth black plate."
        },
        {
          "period": "c. 1710",
          "text": "Le Blon produces his first color prints using a three-primary plate system (mezzotint), with yellow, red, and blue plates."
        },
        {
          "period": "1719",
          "text": "Le Blon receives royal patents for his three-color printing process."
        },
        {
          "period": "1725",
          "text": "Le Blon publishes Coloritto, an early printed description of trichromatic color printing."
        },
        {
          "period": "1890s",
          "text": "CMYK-style four-color process implemented for color newspaper illustrations and comic strips, using halftone reproduction."
        },
        {
          "period": "2005",
          "text": "The ICC profile format is adopted as International Standard ISO 15076-1 (revised 2010)."
        },
        {
          "period": "2013",
          "text": "ISO 12647-2:2013 revision. (The associated FOGRA51 and FOGRA52 characterization datasets were later published, in 2015, for these print conditions.)"
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
      "slug": "icc-profiles"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "history",
      "slug": "evolution-of-color-printing"
    },
    {
      "section": "guides",
      "slug": "what-is-postscript-printing"
    },
    {
      "section": "history",
      "slug": "history-of-desktop-publishing"
    }
  ],
  "faqs": [
    {
      "q": "What does CMYK stand for?",
      "a": "CMYK stands for cyan, magenta, yellow, and K — the key plate, which is black. These are the four process inks used in color printing."
    },
    {
      "q": "Why is CMYK subtractive while RGB is additive?",
      "a": "CMYK inks sit on a light substrate and absorb (subtract) portions of reflected light, so the remaining reflected light is the color seen. RGB displays instead emit and combine red, green, and blue light, which is additive. CMYK is the print-side inverse of RGB."
    },
    {
      "q": "Why is black a separate ink instead of mixing cyan, magenta, and yellow?",
      "a": "Combining full cyan, magenta, and yellow produces a dark, often brownish result rather than a deep neutral black. A dedicated black ink gives denser blacks, crisper text and detail, lower ink cost, faster drying, and easier registration."
    },
    {
      "q": "Is there a single formula to convert RGB to CMYK?",
      "a": "No. CMYK is device-dependent, so the same numbers print differently on different presses, inks, and papers. Conversion is an approximation guided by ICC profiles and rendering intents, not a fixed reversible equation."
    },
    {
      "q": "What are GCR, UCR, and TAC?",
      "a": "Gray Component Replacement (GCR) and Undercolor Removal (UCR) substitute black for overlapping cyan, magenta, and yellow to reduce ink and improve gray neutrality. Total Area Coverage (TAC) is the maximum summed ink percentage allowed, which prevents over-inking."
    }
  ],
  "sources": [
    {
      "title": "CMYK color model",
      "url": "https://en.wikipedia.org/wiki/CMYK_color_model",
      "publisher": "Wikipedia"
    },
    {
      "title": "Jacob Christoph Le Blon",
      "url": "https://en.wikipedia.org/wiki/Jacob_Christoph_Le_Blon",
      "publisher": "Wikipedia"
    },
    {
      "title": "ICC specification published as ISO 15076-1:2005",
      "url": "https://www.color.org/News/060208.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ISO 15076-1:2010 — Image technology colour management (ICC profile format)",
      "url": "https://www.iso.org/standard/54754.html",
      "publisher": "ISO"
    },
    {
      "title": "FOGRA characterization data (FOGRA51/52, ISO 12647-2:2013)",
      "url": "https://www.color.org/chardata/FOGRA.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ISO 15930 (PDF/X)",
      "url": "https://pdfa.org/resource/iso-15930-pdfx/",
      "publisher": "PDF Association"
    },
    {
      "title": "ISO 15930-6:2003 (PDF/X-3)",
      "url": "https://www.iso.org/standard/39940.html",
      "publisher": "ISO"
    },
    {
      "title": "Grey component replacement",
      "url": "https://en.wikipedia.org/wiki/Grey_component_replacement",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "cmyk",
    "cmyk color model",
    "subtractive color",
    "process color printing",
    "four-color process",
    "key plate",
    "black generation",
    "gcr",
    "ucr",
    "gray component replacement",
    "undercolor removal",
    "halftone"
  ],
  "cluster": "color-and-imaging"
};

export default entry;
