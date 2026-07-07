import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "lab-color",
  "title": "CIELAB Color Space",
  "description": "CIELAB (CIE L*a*b*): the device-independent, perceptually oriented color space used as a reference and the basis for color-difference (ΔE) measurement.",
  "summary": "CIELAB (CIE L*a*b*), defined by the International Commission on Illumination in 1976, expresses color with a lightness axis (L*) and two color-opponent axes (a*, b*) derived by a nonlinear transformation of CIE XYZ tristimulus values. It is device-independent and approximately perceptually uniform, serving two dominant roles: a vendor-neutral reference for specifying and measuring color, and the coordinate basis for color-difference (ΔE) formulas. It is standardized as ISO/CIE 11664-4 and is one of the permitted encodings of the ICC Profile Connection Space.",
  "difficulty": "advanced",
  "estimatedTime": "7 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "CIELAB (also written CIE L\\a\\b\\) is a color space defined by the International Commission on Illumination (CIE) in 1976. It expresses color with three coordinates: L\\ for perceptual lightness, and a\\ and b\\ for the two chromatic (color-opponent) axes. It was designed as an approximately perceptually uniform space, derived by a nonlinear transformation of CIE 1931 XYZ tristimulus values."
    },
    {
      "kind": "paragraph",
      "text": "CIELAB serves two dominant roles in imaging and printing: as a device-independent reference for specifying color, and as the basis for color-difference (ΔE) measurement. It is standardized as ISO/CIE 11664-4."
    },
    {
      "kind": "paragraph",
      "text": "ICC profiles, CMYK, halftoning, and the raster image processor (RIP) each have their own reference pages; this page cross-references them rather than restating them."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is / definition"
    },
    {
      "kind": "paragraph",
      "text": "CIELAB is a three-dimensional, opponent-color model:"
    },
    {
      "kind": "list",
      "items": [
        "L\\* — lightness, ranging from 0 (black) to 100 (a diffuse white).",
        "a\\ — a red–green axis: +a\\ toward red, −a\\* toward green.",
        "b\\ — a yellow–blue axis: +b\\ toward yellow, −b\\* toward blue.",
        "a\\ = 0, b\\ = 0 is the neutral (achromatic, gray) axis."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The a\\ and b\\ axes have no fixed numeric limits; their range depends on the color and on the reference white. Because CIELAB is computed from CIE XYZ — which is grounded in the CIE standard observer derived from color-matching experiments, not in any physical device — CIELAB colors are device-independent: the same L\\a\\b\\* values denote the same intended color regardless of monitor, camera, or press."
    },
    {
      "kind": "paragraph",
      "text": "A common cylindrical restatement is CIELCh (L\\, C\\ = chroma, h = hue angle), the same space expressed in polar form; C\\* = 0 is the gray axis."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "In 1976 the CIE recommended two coordinate systems, CIELAB and CIELUV, both nonlinear functions of X, Y, and Z. The recommendation was an attempt to unify the then-diverse practice of uniform color spaces and color-difference formulae."
    },
    {
      "kind": "paragraph",
      "text": "The space was later published as a formal standard, jointly adopted by ISO and the CIE as Colorimetry — Part 4: CIE 1976 L\\a\\b\\ colour space*. The 2007/2008 text (CIE S 014-4/E:2007 / ISO 11664-4:2008) was subsequently superseded by ISO/CIE 11664-4:2019, cataloged as a minor revision of the joint standard."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "CIELAB is computed from CIE XYZ relative to a reference white (Xn, Yn, Zn):"
    },
    {
      "kind": "list",
      "items": [
        "L\\* = 116 · f(Y/Yn) − 16",
        "a\\* = 500 · ( f(X/Xn) − f(Y/Yn) )",
        "b\\* = 200 · ( f(Y/Yn) − f(Z/Zn) )"
      ]
    },
    {
      "kind": "paragraph",
      "text": "where the nonlinearity f(t) is piecewise, with δ = 6/29:"
    },
    {
      "kind": "list",
      "items": [
        "f(t) = t^(1/3) for t > δ³",
        "f(t) = t / (3δ²) + 4/29 for t ≤ δ³"
      ]
    },
    {
      "kind": "paragraph",
      "text": "The cube-root branch approximates the compressive, nonlinear response of human lightness perception; the linear branch near black avoids the infinite slope of the cube root at t = 0 and is chosen to match the value and slope of the cube-root branch at the transition point."
    },
    {
      "kind": "paragraph",
      "text": "Reference-white values commonly used (2° / CIE 1931 standard observer):"
    },
    {
      "kind": "list",
      "items": [
        "D65: Xn = 95.0489, Yn = 100, Zn = 108.8840",
        "D50: Xn = 96.4212, Yn = 100, Zn = 82.5188"
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the transform depends on the chosen white, any L\\a\\b\\* specification is only fully defined together with its reference white/illuminant and observer. Values for the 10° observer differ."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the color / print pipeline"
    },
    {
      "kind": "paragraph",
      "text": "CIELAB functions as an interchange and reference space rather than a rendering space. Scanners, cameras, and displays produce device RGB; presses and printers consume CMYK. CIELAB provides the vendor-neutral coordinate system in which colors are specified, measured, and compared — for example, a spot color or a print-target aim point expressed as L\\a\\b\\* values read from a spectrophotometer."
    },
    {
      "kind": "paragraph",
      "text": "Process-control print standards use CIELAB tolerances to judge conformance: the ISO 12647 family (process control for the production of halftone color separations, proofs, and production prints) expresses aim values and tolerances in CIELAB / ΔE terms."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to ICC profiles and CMYK"
    },
    {
      "kind": "paragraph",
      "text": "Within ICC color management, the Profile Connection Space (PCS) — the neutral hub through which device profiles connect — is defined on a D50 reference and may be encoded as either CIEXYZ or CIELAB. The ICC specifies the PCS white point as XYZ ≈ (0.9642, 1.0000, 0.8249), a D50 approximation."
    },
    {
      "kind": "paragraph",
      "text": "CIELAB is often preferred for PCS lookup tables because its perceptual spacing makes interpolation of color LUTs more even. This is how device-dependent CMYK acquires a device-independent meaning: a CMYK output profile maps ink combinations to PCS (XYZ/LAB) values and back, so CMYK numbers gain an absolute colorimetric interpretation."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printer technologies"
    },
    {
      "kind": "paragraph",
      "text": "CIELAB is printer-technology-neutral: it describes the intended color, not the marking method. Offset lithography, flexography, inkjet, dye-sublimation, and electrophotography (toner) all produce color through halftoning or ink/toner mixtures, but each process is characterized and controlled by measuring printed patches in CIELAB and comparing them to aim values via ΔE."
    },
    {
      "kind": "paragraph",
      "text": "Because different processes and substrates achieve different gamuts, CIELAB is also the space in which gamut extent and gamut mismatches are commonly visualized and quantified. It supports process control — measuring printed reference charts and computing ΔE to targets — independent of the underlying marking engine."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common problems"
    },
    {
      "kind": "list",
      "items": [
        "Perceptual non-uniformity in practice: CIELAB is only approximately uniform. Equal Euclidean distances do not correspond to equal perceived differences everywhere, most notably in saturated and blue regions — which motivated later difference formulas (CIE94, CIEDE2000).",
        "Reference-white / illuminant dependence: L\\a\\b\\* values are undefined without stating the reference white and observer; mixing D50- and D65-referenced values causes errors.",
        "Measurement conditions: Instrument geometry, illumination, and observer (2° vs 10°) affect measured L\\a\\b\\*; comparisons require consistent conditions.",
        "Naive ΔE (CIE76): The plain Euclidean ΔE\\*ab can overstate or understate perceived difference in some regions, so it can misjudge pass/fail tolerances."
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
        "Device independence — a single, vendor-neutral reference for specifying and communicating color.",
        "Perceptual orientation — lightness and opponent chroma axes align with intuitive dimensions (lighter/darker, red/green, yellow/blue) and roughly with the perceived magnitude of difference.",
        "Basis for color difference — enables a single-number ΔE metric for tolerancing and quality control.",
        "Full-gamut coverage — encompasses all colors of the standard observer, so it can reference colors outside any given device gamut.",
        "Standardized — defined by the CIE, published as ISO/CIE standards, and used as an ICC Profile Connection Space encoding."
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
        "Not truly uniform, especially in saturated and blue regions.",
        "Requires a specified white point and observer to be well defined.",
        "Not a display or rendering space — it is a reference/interchange model, not used directly to render pixels or inks.",
        "Simple ΔE\\*ab is imperfect; accurate tolerancing generally uses CIEDE2000 or CMC.",
        "Does not model appearance phenomena (surround, adaptation, contrast) captured by full color-appearance models such as CIECAM."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Color difference (ΔE)"
    },
    {
      "kind": "paragraph",
      "text": "CIELAB is the coordinate basis for the standard color-difference formulas:"
    },
    {
      "kind": "list",
      "items": [
        "CIE76 (ΔE\\ab): the original 1976 Euclidean distance, ΔE\\ab = √( (ΔL\\)² + (Δa\\)² + (Δb\\*)² ). A value of roughly 2.3 is often cited as an approximate just-noticeable difference (JND), though this varies by region and viewing conditions.",
        "CIE94 (1994): adds parametric weighting factors (kL, kC, kH) for lightness, chroma, and hue; it is asymmetric (a quasimetric).",
        "CIEDE2000 (ΔE00, published 2001): adds further corrections for lightness, chroma, hue, chroma–hue interaction, and a hue-rotation term for the blue region. It is standardized as ISO/CIE 11664-6 (2014 edition; superseded by a 2022 edition), with input L\\a\\b\\* computed per ISO/CIE 11664-4.",
        "CMC l:c (1984): developed by the Colour Measurement Committee of the Society of Dyers and Colourists, used in L\\C\\h form with weighting ratios such as 2:1 and 1:1."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "CIELAB remains the dominant reference space for specifying and measuring color in printing, packaging, textiles, and general color management. It underpins spot-color specification, print process control (the ISO 12647 family's aim/tolerance work), and the ICC PCS."
    },
    {
      "kind": "paragraph",
      "text": "CIEDE2000 is the current recommended color-difference formula for most industrial tolerancing, computed on CIELAB coordinates. Newer perceptual and appearance models (for example CAM16-UCS and CIECAM-based uniform spaces) address CIELAB's uniformity shortcomings, but they build on the same CIE colorimetric foundation and have not displaced CIELAB as the everyday interchange and measurement space."
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
          "period": "1976",
          "text": "CIE recommends CIELAB and CIELUV."
        },
        {
          "period": "1984",
          "text": "CMC l:c color-difference formula (Society of Dyers and Colourists)."
        },
        {
          "period": "1994",
          "text": "CIE94 color-difference formula (published as CIE 116-1995)."
        },
        {
          "period": "2001",
          "text": "CIEDE2000 color-difference formula published (CIE technical report)."
        },
        {
          "period": "2007 / 2008",
          "text": "CIELAB standardized as CIE S 014-4/E:2007 and ISO 11664-4:2008."
        },
        {
          "period": "2014",
          "text": "CIEDE2000 standardized as ISO/CIE 11664-6:2014."
        },
        {
          "period": "2019",
          "text": "ISO/CIE 11664-4:2019 supersedes the 2007/2008 text (minor revision)."
        },
        {
          "period": "2022",
          "text": "ISO/CIE 11664-6:2022 edition published."
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
      "slug": "xyz-color"
    },
    {
      "section": "guides",
      "slug": "color-spaces"
    },
    {
      "section": "guides",
      "slug": "device-independent-color"
    },
    {
      "section": "tools",
      "slug": "icc-profiles"
    },
    {
      "section": "tools",
      "slug": "cmyk"
    },
    {
      "section": "guides",
      "slug": "gamut-mapping"
    }
  ],
  "sources": [
    {
      "title": "CIELAB color space",
      "url": "https://en.wikipedia.org/wiki/CIELAB_color_space",
      "publisher": "Wikipedia"
    },
    {
      "title": "Color difference",
      "url": "https://en.wikipedia.org/wiki/Color_difference",
      "publisher": "Wikipedia"
    },
    {
      "title": "ISO/CIE 11664-4:2019 — Colorimetry Part 4: CIE 1976 L*a*b* colour space",
      "url": "https://www.iso.org/standard/74166.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 11664-4:2008 — Colorimetry Part 4: CIE 1976 L*a*b* colour space (superseded)",
      "url": "https://www.iso.org/standard/52497.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/CIE 11664-6:2014 — Colorimetry Part 6: CIEDE2000 colour-difference formula",
      "url": "https://www.iso.org/standard/63731.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO/CIE 11664-6:2022 — Colorimetry Part 6: CIEDE2000 colour-difference formula",
      "url": "https://www.iso.org/standard/82662.html",
      "publisher": "ISO"
    },
    {
      "title": "Colorimetry — Part 4: CIE 1976 L*a*b* colour space",
      "url": "https://cie.co.at/publications/colorimetry-part-4-cie-1976-lab-colour-space-0",
      "publisher": "CIE (International Commission on Illumination)"
    },
    {
      "title": "Profile connection space",
      "url": "https://www.color.org/profile.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "Why is the media white point of a display profile always D50?",
      "url": "https://www.color.org/whyd50.xalter",
      "publisher": "International Color Consortium"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "cielab",
    "cie lab",
    "l*a*b*",
    "cie 1976",
    "color difference",
    "delta e",
    "ciede2000",
    "device-independent color",
    "iso 11664-4",
    "profile connection space",
    "reference white",
    "color measurement"
  ],
  "cluster": "color-management"
};

export default entry;
