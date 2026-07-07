import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "soft-proofing",
  "title": "Soft Proofing",
  "description": "How soft proofing simulates a printing condition on a calibrated display using ICC output profiles, rendering intents, and ISO standards.",
  "summary": "Soft proofing is the practice of previewing, on a calibrated and characterized display, how a document will appear when reproduced by a specific printing condition — a particular combination of press or printer, colorant set, and substrate. The imaging application transforms document colors through the output ICC profile using a chosen rendering intent, then renders the result on screen, optionally simulating the substrate's paper white and ink black. This lets an operator judge color, spot out-of-gamut areas, and correct problems before committing ink to paper. The workflow is standardized: ISO 14861:2015 specifies requirements for colour soft-proofing systems, ISO 12646:2015 specifies the display characteristics such systems require, and ISO 3664:2009 defines viewing conditions. Because a soft proof is displayed on an emissive screen rather than viewed as reflective ink on paper, it is a predictive tool rather than, by itself, a contractual color reference — a role standardized hard proofs (ISO 12647-7) fill.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Soft proofing is the practice of previewing, on a calibrated and characterized display, how a document will appear once reproduced by a specific printing condition — a particular combination of press or printer, colorant set, and substrate. Rather than committing ink to paper, the imaging application transforms the document's colors through the output ICC profile (using a chosen rendering intent) and renders that transformed result on screen, so the operator can judge color, spot out-of-gamut areas, and correct problems before a physical print is made."
    },
    {
      "kind": "paragraph",
      "text": "The term \"soft\" contrasts with a hard proof (a physical printed proof). A soft proof is a simulation: because it is shown on an emissive screen rather than viewed as reflective ink on paper, it is a useful predictive tool but not, on its own, a contractual color reference in the sense of a standardized hard proof. The practice is standardized — ISO 14861:2015 specifies requirements for colour soft-proofing systems, and ISO 12646:2015 specifies the display characteristics such systems require."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is / definition"
    },
    {
      "kind": "paragraph",
      "text": "ISO 14861:2015 (Graphic technology — Requirements for colour soft proofing systems) scopes such systems as ones used to produce, from digital data, images on electronic displays that are intended to simulate a characterized printing condition defined by a set of characterization data and spot colours defined by a physical reference. This is the dedicated standards-based definition of soft proofing."
    },
    {
      "kind": "paragraph",
      "text": "At the application level, the feature is a temporary, non-destructive on-screen simulation of a chosen output device. In Adobe Photoshop it is reached through View → Proof Setup → Custom, where the operator selects a Device to Simulate (an output profile) and a Rendering Intent, then toggles the preview with Proof Colors."
    },
    {
      "kind": "paragraph",
      "text": "Conceptually a soft proof has two stages: (1) converting document color into the output profile's space via the rendering intent, then (2) applying display-side adjustments — notably simulating the substrate white and the ink/black behavior — so the on-screen appearance approximates reflective print."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Soft proofing as a workflow depends on device-independent color management, which arrived with the International Color Consortium (ICC), founded in 1993 by eight founding vendors (Adobe, Agfa, Apple, Kodak, Microsoft, Silicon Graphics, Sun Microsystems, and Taligent). The ICC profile format was first released in 1994 (ICCv2). Once output devices could be characterized by ICC profiles, applications could transform a document through an output profile and display the result — the technical basis for soft proofing. (See the ICC profiles reference for the full ICC timeline.)"
    },
    {
      "kind": "paragraph",
      "text": "Standardization of the practice itself is comparatively recent and documented. ISO 12646 (\"Displays for colour proofing\") appeared in editions including 2004, 2008 (with Amendment 1:2010), and 2015, the 2015 edition being retitled to end \"— Characteristics.\" ISO 14861:2015 is the dedicated standard for colour soft-proofing systems."
    },
    {
      "kind": "paragraph",
      "text": "No reliably sourced \"first soft-proofing feature\" date exists for any specific application, so no such claim is made here; what is documented is the standards lineage above and the ICC's founding and first-release dates."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "list",
      "items": [
        "Input color is interpreted via the document's source profile — an RGB working space such as sRGB (defined in IEC 61966-2-1) or a CMYK profile.",
        "The output profile is applied. The chosen printer/paper ICC profile (the \"Device to Simulate\") maps document color to the output device's gamut through the ICC Profile Connection Space (PCS).",
        "A rendering intent governs gamut mapping — how colors that fall outside the output gamut are handled.",
        "Display-side substrate simulation makes the screen behave more like reflective print. Simulate Paper Color lowers the on-screen white toward the substrate's actual white as recorded in the profile, instead of the monitor's bright white; Simulate Black Ink lightens the displayed blacks to the density the ink and paper can actually achieve, compressing dynamic range to match print.",
        "Gamut warning (optional). The application can flag pixels that fall outside the output device's reproducible gamut. In Photoshop this is View → Gamut Warning. Separately, the display's own gamut limits which colors can actually be previewed on screen.",
        "The transform is preview-only. Toggling Proof Colors changes the display, not the file's stored values; a \"Preserve Numbers\" option additionally previews what happens if numbers are sent to the device without conversion."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For a soft proof to be meaningful, the display must be calibrated and characterized (profiled) and viewed under controlled ambient light. ISO 12646 specifies the display requirements (uniformity, luminance, convergence, refresh, resolution, glare, and viewing-angle behavior; the 2015 edition defines two conformance levels), and ISO 3664:2009 specifies viewing conditions for graphic technology, including the P1 critical-evaluation condition (2000 ± 500 lux) and the P2 practical-appraisal condition (500 ± 125 lux)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the color/print pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Soft proofing is a prepress / pre-output verification step. It occurs after color correction and profile assignment but before committing to a hard proof or to the press or printer. It sits alongside — and complements — the raster image processor (RIP), which performs the actual color conversion and halftoning at output time. The soft proof is a preview of what the output path will do; it does not replace the RIP, the imposition, or the physical proof."
    },
    {
      "kind": "paragraph",
      "text": "In a contract-proof workflow the sequence is typically: design → color management / soft proof (screen) → hard or contract proof (ISO 12647-7) → production print (ISO 12647 series)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to ICC profiles and CMYK"
    },
    {
      "kind": "paragraph",
      "text": "Soft proofing is only as accurate as the ICC output profile chosen. Each substrate/ink/press combination generally needs its own profile (ISO 15076-1 / ICC.1 defines the profile format; see the ICC profiles reference)."
    },
    {
      "kind": "paragraph",
      "text": "Rendering intents, defined by the ICC, determine gamut mapping. The ICC specifies four:"
    },
    {
      "kind": "list",
      "items": [
        "Perceptual — compresses the whole gamut to fit the destination, preserving relationships between colors; the exact behavior is vendor-specific; suited to pictorial images.",
        "Media-relative colorimetric — reproduces in-gamut colors exactly relative to the media white and clips out-of-gamut colors to the nearest reproducible value.",
        "ICC-absolute colorimetric — like relative colorimetric but additionally simulates the source media white point; the ICC describes this intent as intended for cross-rendering simulations of one output condition on another — i.e., the intent used when a soft or hard proof must reproduce the target substrate's paper white.",
        "Saturation — favors vivid, saturated colors over exact hue and lightness; suited to charts and diagrams."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Most print output profiles are CMYK, so the soft proof shows the effect of the RGB→CMYK (or CMYK→CMYK) conversion, including gamut clipping of saturated RGB colors that CMYK cannot reproduce. This is why gamut warnings are common when soft-proofing vivid imagery to CMYK. (See the CMYK reference.)"
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printer technologies"
    },
    {
      "kind": "paragraph",
      "text": "Soft proofing is device- and technology-neutral: it works from a characterization of whatever output condition is profiled — offset, gravure, or flexo presses, inkjet, dye-sublimation, or toner/electrophotographic devices — because it relies on the ICC output profile rather than on the marking mechanism. ISO 12647-7 (hard proofing) is likewise stated to be independent of the method used to produce a digital proof print."
    },
    {
      "kind": "paragraph",
      "text": "Practically, the accuracy of a soft proof for any given technology depends on how well that device and substrate are profiled and how stable they are; the display simply renders the profiled behavior. Halftoning and screening artifacts specific to a technology are generally not shown by a soft proof."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common problems"
    },
    {
      "kind": "list",
      "items": [
        "Uncalibrated or non-conformant display. Without calibration and profiling and adequate hardware (ISO 12646), on-screen colors are unreliable regardless of the output profile.",
        "Uncontrolled ambient light. Screen and print appearance are both light-dependent; mismatched or bright ambient light breaks the comparison (ISO 3664).",
        "Wrong or generic output profile. Using a canned or manufacturer-generic profile instead of one matching the actual paper and ink can misrepresent gamut and neutrals.",
        "Paper-white simulation shock. Enabling Simulate Paper Color and Black Ink visibly dulls the image and lowers contrast on screen; operators unfamiliar with the effect may over-correct.",
        "Display gamut smaller than print gamut. Some printable colors cannot be shown on the monitor, so they cannot be previewed accurately.",
        "Confusing preview with conversion. The proof is a preview; the stored file is unchanged unless a conversion is actually applied."
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
        "Cost and speed. Avoids consuming paper, ink, and press or printer time for every iteration.",
        "Early detection of gamut problems. Gamut warnings surface out-of-gamut colors before output.",
        "Rendering-intent comparison. Lets the operator preview how perceptual versus colorimetric intents will treat an image.",
        "Substrate and paper-white preview. Simulating paper white and ink density gives a realistic expectation of contrast and neutrals.",
        "Standardized and repeatable. When performed to ISO 14861, ISO 12646, and ISO 3664, soft proofing is a defined, conformance-testable process rather than an ad-hoc preview."
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
        "Emissive versus reflective. The fundamental limitation: monitors emit light while prints reflect ambient light. A backlit white cannot fully stand in for reflective paper white, and monitors typically render deeper blacks and higher dynamic range than print achieves, so contrast and white/black rendition are approximations.",
        "Display gamut gaps. A monitor's gamut may not encompass the full printer gamut, so some printable colors cannot be shown for preview.",
        "No physical attributes. A soft proof cannot reproduce substrate texture, gloss or finish, the true appearance of spot colors, metallics, spot varnishes, or fine screening/halftone and moiré behavior.",
        "Not automatically contractual. A standardized hard proof (ISO 12647-7) is the recognized contract-proof reference between data supplier and printer. A soft proof can be governed by ISO 14861 but does not by itself substitute for a physical contract proof unless the parties agree to a conformant soft-proofing setup.",
        "Environment-sensitive. Accuracy is contingent on display quality, correct profiles, calibration, and controlled ambient light; remove any of these and the proof degrades."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Soft proofing remains a standard prepress step and is directly supported by mainstream imaging applications (for example, Photoshop's Proof Setup and Proof Colors, and equivalent features in other editors and RIP front-ends). It is codified in current ISO standards — ISO 14861:2015 for systems, ISO 12646:2015 for displays, and ISO 3664:2009 for viewing conditions — which signals ongoing industry use."
    },
    {
      "kind": "paragraph",
      "text": "Its role is complementary to, not a replacement for, standardized hard or contract proofing (ISO 12647-7) where a physical reference is required. Improvements in wide-gamut, high-uniformity displays have expanded what can be previewed on screen, but the emissive-versus-reflective limitation is inherent and unchanged."
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
          "period": "1993",
          "text": "International Color Consortium founded by eight founding vendors."
        },
        {
          "period": "1994",
          "text": "ICC profile format first released (ICCv2)."
        },
        {
          "period": "2009",
          "text": "ISO 3664:2009, the current graphic-technology viewing-conditions edition, published."
        },
        {
          "period": "2004",
          "text": "ISO 12646 first edition (displays for colour proofing)."
        },
        {
          "period": "2008",
          "text": "ISO 12646:2008 (with Amendment 1:2010)."
        },
        {
          "period": "2015",
          "text": "ISO 14861:2015 (requirements for colour soft-proofing systems) and ISO 12646:2015 (retitled \"— Characteristics\") published."
        },
        {
          "period": "2016",
          "text": "ISO 12647-7:2016 (hard / contract proofing), the standardized hard-proof reference soft proofing is contrasted against, published."
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
      "slug": "hard-proofing"
    },
    {
      "section": "guides",
      "slug": "rendering-intents"
    },
    {
      "section": "guides",
      "slug": "monitor-to-printer-matching"
    },
    {
      "section": "tools",
      "slug": "icc-profiles"
    },
    {
      "section": "guides",
      "slug": "color-management"
    },
    {
      "section": "tools",
      "slug": "cmyk"
    }
  ],
  "faqs": [
    {
      "q": "What is soft proofing?",
      "a": "Soft proofing is previewing, on a calibrated and characterized display, how a document will look when printed under a specific printing condition. The imaging application transforms the document's colors through the output ICC profile using a chosen rendering intent and renders the result on screen, so an operator can judge color and catch problems before printing."
    },
    {
      "q": "How is a soft proof different from a hard proof?",
      "a": "A soft proof is an on-screen simulation shown on an emissive display; a hard proof is a physical printed proof viewed as reflective ink on paper. A soft proof is a predictive tool and can be governed by ISO 14861, but it does not by itself serve as a contractual color reference the way a standardized hard proof (ISO 12647-7) does, because a backlit screen cannot fully stand in for reflective paper."
    },
    {
      "q": "Which standards govern soft proofing?",
      "a": "ISO 14861:2015 specifies requirements for colour soft-proofing systems, ISO 12646:2015 specifies the display characteristics such systems require, and ISO 3664:2009 specifies viewing conditions, including the P1 critical-evaluation condition (2000 ± 500 lux) and the P2 practical-appraisal condition (500 ± 125 lux)."
    },
    {
      "q": "Why do colors look duller when I enable paper-white simulation?",
      "a": "Simulate Paper Color lowers the on-screen white toward the substrate's actual white recorded in the profile instead of the monitor's bright white, and Simulate Black Ink lightens displayed blacks to the density ink and paper can achieve. Together they compress dynamic range to match reflective print, which visibly reduces contrast; operators unfamiliar with the effect may over-correct."
    },
    {
      "q": "Does soft proofing change my file?",
      "a": "No. Toggling the proof preview changes only the display, not the file's stored color values. The document is unchanged unless an actual conversion is applied."
    }
  ],
  "sources": [
    {
      "title": "ISO 14861:2015 — Graphic technology — Requirements for colour soft proofing systems",
      "url": "https://www.iso.org/standard/63540.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 12646:2015 — Graphic technology — Displays for colour proofing — Characteristics",
      "url": "https://www.iso.org/standard/57311.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 3664:2009 — Graphic technology and photography — Viewing conditions",
      "url": "https://www.iso.org/standard/43234.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 12647-7:2016 — Proofing processes working directly from digital data",
      "url": "https://www.iso.org/standard/66426.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15076-1:2010 — Image technology colour management — ICC profile format",
      "url": "https://www.iso.org/standard/54754.html",
      "publisher": "ISO"
    },
    {
      "title": "About the ICC (founding and members)",
      "url": "https://www.color.org/abouticc.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "Revealing ICC Color Management: rendering intents",
      "url": "https://archive.color.org/files/render.pdf",
      "publisher": "International Color Consortium"
    },
    {
      "title": "Proofing colors in Photoshop",
      "url": "https://helpx.adobe.com/photoshop/using/proofing-colors.html",
      "publisher": "Adobe"
    },
    {
      "title": "Soft Proofing: Matching On-Screen Photos with Prints",
      "url": "https://www.cambridgeincolour.com/tutorials/soft-proofing.htm",
      "publisher": "Cambridge in Colour"
    },
    {
      "title": "What is ISO 3664:2009 (P1/P2 illuminance)",
      "url": "https://www.gtilite.com/2011/01/what-is-iso-3664-2009/",
      "publisher": "GTI Graphic Technology"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "soft proofing",
    "soft proof",
    "icc output profile",
    "rendering intent",
    "iso 14861",
    "iso 12646",
    "iso 3664",
    "simulate paper color",
    "gamut warning",
    "hard proof",
    "color management",
    "proof colors"
  ],
  "cluster": "color-management"
};

export default entry;
