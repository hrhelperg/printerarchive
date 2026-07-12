import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "xyz-color",
  "title": "CIE XYZ Color Space",
  "description": "CIE 1931 XYZ, the device-independent tristimulus color space defined by the CIE in 1931 and the colorimetric foundation of ICC-managed print.",
  "summary": "The CIE 1931 XYZ color space is a device-independent, mathematically defined system for specifying color numerically, established by the International Commission on Illumination (CIE) in 1931. Built on the CIE 1931 2 degree standard colorimetric observer, it expresses any color stimulus as three tristimulus values, X, Y, and Z. Because it is grounded in measured human color-matching behavior rather than in any device's inks, phosphors, or filters, CIE XYZ serves as the master reference from which CIELAB, xyY, and RGB working spaces such as sRGB are derived, and it is one of the two encodings permitted for the ICC Profile Connection Space at the center of the color-managed print pipeline.",
  "difficulty": "advanced",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "The CIE 1931 XYZ color space (also written CIE XYZ or CIEXYZ) is a device-independent, mathematically defined system for specifying color numerically, established by the International Commission on Illumination (CIE, Commission Internationale de l'Eclairage) in 1931. It is built on the CIE 1931 standard colorimetric observer (the 2 degree standard observer) and expresses any color stimulus as three numbers, the tristimulus values X, Y, and Z."
    },
    {
      "kind": "paragraph",
      "text": "Because it is grounded in measured human color-matching behavior rather than in any particular device's inks, phosphors, or filters, CIE XYZ serves as the master reference space from which most other practical color spaces are derived, including CIELAB and the sRGB working space. It is also one of the two color encodings permitted for the ICC Profile Connection Space (PCS) that sits at the center of the color-managed print pipeline."
    },
    {
      "kind": "paragraph",
      "text": "Related PrinterArchive reference pages cover ICC profiles, CMYK, halftoning, and the raster image processor (RIP) in depth. This page focuses on XYZ as the underlying colorimetric foundation and cross-references those rather than repeating them."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is / definition"
    },
    {
      "kind": "paragraph",
      "text": "CIE XYZ is a tristimulus color space. A color stimulus, described by a spectral power distribution, is reduced to three values by integrating that spectrum against three color-matching functions, conventionally written x-bar, y-bar, and z-bar (functions of wavelength). The results are the tristimulus values X, Y, and Z. Two stimuli with different spectra that yield the same X, Y, Z will match in color for the standard observer; such pairs are called metamers."
    },
    {
      "kind": "paragraph",
      "text": "Key defining properties, as designed by the CIE in 1931:"
    },
    {
      "kind": "list",
      "items": [
        "The color-matching functions were chosen so that the tristimulus values of any physically realizable color are non-negative, unlike the earlier CIE RGB matching functions, which required negative amounts of a primary for some colors.",
        "The y-bar function was deliberately made equal to the photopic luminous efficiency function, so that the Y tristimulus value is a direct measure of luminance (brightness). X and Z carry no luminance by themselves.",
        "The space is often projected to the two-dimensional CIE 1931 xy chromaticity diagram (and the associated xyY representation), where x and y are normalized chromaticity coordinates and Y remains luminance. The horseshoe-shaped spectral locus of that diagram is a widely reproduced illustration in color science."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The X, Y, Z primaries are mathematical, imaginary primaries: they are more saturated than any real light, which is precisely what allows all real colors to have positive coordinates. They cannot be physically produced by any lamp or ink."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History where documented"
    },
    {
      "kind": "paragraph",
      "text": "The CIE 1931 system emerged from color-matching experiments conducted in the 1920s by W. David Wright and John Guild in Britain, using small (roughly 2 degree) matching fields. Their combined data underpin the 1931 standard."
    },
    {
      "kind": "paragraph",
      "text": "At its 1931 session, held in Cambridge, England, the CIE formalized the CIE RGB and CIE XYZ color spaces, defined the CIE 1931 2 degree standard colorimetric observer with its color-matching functions, and adopted standard illuminants A, B, and C."
    },
    {
      "kind": "paragraph",
      "text": "In 1964 the CIE defined a second set of color-matching functions for a larger 10 degree field, the CIE 1964 supplementary standard colorimetric observer. The CIE recommends this observer whenever correlation with visual color matching of fields larger than about 4 degrees is desired. It is a distinct observer from the 1931 2 degree observer and is not interchangeable with it."
    },
    {
      "kind": "paragraph",
      "text": "In 1976 the CIE defined CIELAB (CIE 1976 L*a*b*) and CIELUV as more perceptually uniform transformations computed from XYZ, to address the perceptual non-uniformity of XYZ (see Limitations)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The tristimulus values are obtained in three conceptual steps:"
    },
    {
      "kind": "paragraph",
      "text": "1. Start with the spectral power distribution of the color stimulus. For a reflecting print, that is the product of the illuminant's spectrum and the sample's spectral reflectance. 2. Multiply that spectrum, wavelength by wavelength across the visible range, by each of the three color-matching functions x-bar, y-bar, and z-bar. 3. Integrate (sum) each product over the visible spectrum. The three results, after the conventional normalization, are X, Y, and Z."
    },
    {
      "kind": "paragraph",
      "text": "For reflecting and transmitting materials the normalization is chosen so that a perfect diffuse white under the reference illuminant gives Y = 100. Y therefore reads as relative luminance, and chromaticity is separated out via x = X / (X + Y + Z) and y = Y / (X + Y + Z)."
    },
    {
      "kind": "paragraph",
      "text": "Because everything downstream is a transform of XYZ, XYZ acts as a hub: measured spectra convert to XYZ; XYZ converts to CIELAB for perceptual work; XYZ maps to and from RGB working spaces through a linear matrix; and XYZ is used inside device profiles."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the color/print pipeline"
    },
    {
      "kind": "paragraph",
      "text": "CIE XYZ, together with its derivative CIELAB, is the neutral meeting point that lets otherwise incompatible devices exchange color:"
    },
    {
      "kind": "list",
      "items": [
        "A spectrophotometer measuring a printed patch reports, at root, XYZ, from which L*a*b* and density are derived.",
        "In an ICC color-managed workflow, every device profile maps its own device values (scanner RGB, monitor RGB, printer CMYK) to and from the Profile Connection Space. The ICC states that the Profile Connection Space \"is based on the CIE 1931 standard colorimetric observer\"; separately, the ICC specification (ICC.1 / ISO 15076) allows the PCS to be encoded as either CIEXYZ or CIELAB.",
        "Because both an input profile and an output profile connect through this shared XYZ/LAB space, transforms for input, display, and output devices can be produced independently and combined at conversion time. That decoupling is what makes portable color management possible."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The default measurement condition for the ICC PCS is standardized: illuminant D50 and the 1931 2 degree observer (per ISO 13655), with print viewing under the graphic-arts conditions defined in ISO 3664. This is why print color management is anchored to D50 rather than the D65 used for displays."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to ICC profiles and CMYK"
    },
    {
      "kind": "list",
      "items": [
        "The ICC PCS is defined in terms of CIE colorimetry, as either PCSXYZ or PCSLAB, both referenced to the D50 white point and the CIE 1931 observer. The ICC D50 reference white has tristimulus values of approximately XYZ = 0.9642, 1.0000, 0.8249 (normalized to Y = 1). XYZ is the linear, luminance-bearing form; CIELAB is the perceptually spaced form computed from XYZ. See the PrinterArchive ICC profiles page for profile structure, rendering intents, and tags.",
        "A CMYK output (printer or press) profile does not describe color in absolute ink terms alone; it ties CMYK combinations to their measured PCS coordinates, ultimately XYZ/LAB under D50. Converting an image to CMYK therefore means: source values to PCS (XYZ/LAB) to CMYK via the output profile, with a rendering intent deciding how out-of-gamut colors are handled. See the PrinterArchive CMYK page.",
        "ISO 12647 process-control standards specify target print colors as CIELAB values, which are themselves XYZ-derived. This is how aim colors and tolerances for presses are communicated."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printer technologies"
    },
    {
      "kind": "paragraph",
      "text": "CIE XYZ is technology-agnostic by design: it describes the color a human observer sees, not how a device makes it. That neutrality is exactly its value across printer types."
    },
    {
      "kind": "list",
      "items": [
        "Offset and press, inkjet, dye-sublimation, and toner/electrophotographic devices all have different colorants and gamuts, but each can be characterized by measuring printed patches, expressing them in XYZ/LAB, and encoding the result in an ICC output profile.",
        "Halftoning and the RIP determine how continuous-tone image data becomes printable dots; the resulting printed color is what gets measured back into XYZ. XYZ itself imposes no dot structure or ink limit. See the PrinterArchive halftoning and raster image processor pages.",
        "Spot-color systems and multi-ink (extended-gamut) printing are likewise reconciled by measuring colorants into XYZ/LAB so they can be matched or proofed against process builds."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common problems"
    },
    {
      "kind": "list",
      "items": [
        "Illuminant or white-point mismatch: XYZ values are only meaningful with a stated observer and, for reflective samples, a stated illuminant. Comparing a D65-referenced value to a D50-referenced one without a chromatic-adaptation transform gives wrong results, a frequent source of error between display (D65) and print (D50) workflows.",
        "Observer confusion: the CIE 1931 2 degree and CIE 1964 10 degree observers give different tristimulus values for the same sample. Mixing them silently causes disagreement between instruments or software.",
        "Metamerism: two samples matching in XYZ under one illuminant can visibly differ under another, because XYZ collapses a full spectrum into three numbers.",
        "Perceptual non-uniformity: equal numerical steps in XYZ do not correspond to equal perceived color differences, so XYZ is a poor space for expressing tolerances. This is what CIELAB and Delta E were created to address.",
        "Measurement geometry and conditions (for example the ISO 13655 M0, M1, and M2 measurement modes, sample backing, and fluorescence from optical brighteners) change the measured XYZ; results are only comparable when conditions match."
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
        "Device-independent and standardized worldwide, enabling unambiguous color exchange.",
        "Grounded in measured human vision through the standard observer, so it predicts visual matches.",
        "Luminance is cleanly separated into Y, which is convenient for many calculations.",
        "All real colors have non-negative coordinates, avoiding the negative values of CIE RGB.",
        "Serves as the mathematical parent of CIELAB, xyY, and RGB working spaces, and as an ICC PCS encoding, forming a single hub that connects the whole pipeline."
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
        "Perceptually non-uniform: numerical distance does not equal perceived difference, so it is unsuitable as a difference or tolerance space; use CIELAB and Delta E instead.",
        "Only as representative as the standard observer: it models an average, not any individual's vision, and the 2 degree versus 10 degree choice matters.",
        "Reduces a spectrum to three values, so it cannot by itself resolve metamerism or predict appearance under a different illuminant without additional adaptation models.",
        "It is a colorimetric specification, not an appearance model: it does not account for surround, adaptation state, or viewing context, which are the domain of CIECAM-type models.",
        "The primaries are imaginary and non-physical, which can be conceptually unintuitive."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "CIE XYZ remains the backbone of digital and print color nearly a century after its definition. It underlies the ICC color-management architecture used across professional print and imaging. It is the space through which sRGB and other RGB working spaces are formally defined: sRGB (IEC 61966-2-1) specifies its primaries and white point as CIE xy chromaticities and defines a linear-RGB-to-XYZ matrix. And it is the measurement basis for spectrophotometry, soft proofing, and ISO print process control. Wide-gamut and HDR imaging pipelines continue to use XYZ, and derivatives such as CIE xy chromaticities, to define primaries and to interchange color between systems."
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
          "period": "1920s",
          "text": "Color-matching experiments by W. David Wright and John Guild provide the underlying data."
        },
        {
          "period": "1931",
          "text": "The CIE defines the CIE RGB and CIE XYZ color spaces, the 1931 2 degree standard colorimetric observer and its color-matching functions, and standard illuminants A, B, and C."
        },
        {
          "period": "1964",
          "text": "The CIE defines the 10 degree supplementary standard colorimetric observer (CIE 1964)."
        },
        {
          "period": "1976",
          "text": "The CIE defines CIELAB (L*a*b*) and CIELUV, computed from XYZ, for improved perceptual uniformity."
        },
        {
          "period": "1999",
          "text": "sRGB is published as IEC 61966-2-1, specifying its color in terms of CIE XYZ / CIE chromaticities."
        },
        {
          "period": "ICC PCS",
          "text": "Specified (ICC.1 / ISO 15076) as CIEXYZ or CIELAB, D50-referenced, using the 1931 observer; measurement per ISO 13655, viewing per ISO 3664."
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
      "slug": "lab-color"
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
      "section": "guides",
      "slug": "color-management"
    },
    {
      "section": "guides",
      "slug": "rgb-color-model"
    },
    {
      "section": "tools",
      "slug": "icc-profiles"
    }
  ],
  "sources": [
    {
      "title": "CIE 1931 color space",
      "url": "https://en.wikipedia.org/wiki/CIE_1931_color_space",
      "publisher": "Wikipedia"
    },
    {
      "title": "Profile Connection Space (PCS) overview",
      "url": "https://www.color.org/profile.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "Why the PCS white point is D50",
      "url": "https://www.color.org/whyd50.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ICC Colorimetry Data (D50 reference white)",
      "url": "https://registry.color.org/colorimetry-data/",
      "publisher": "International Color Consortium"
    },
    {
      "title": "Specification of sRGB",
      "url": "https://www.color.org/srgb.pdf",
      "publisher": "International Color Consortium"
    },
    {
      "title": "IEC 61966-2-1:1999 (sRGB standard record)",
      "url": "https://webstore.iec.ch/en/publication/6169",
      "publisher": "International Electrotechnical Commission"
    },
    {
      "title": "CIE 1964 colour-matching functions, 10 degree observer (data table)",
      "url": "https://cie.co.at/datatable/cie-1964-colour-matching-functions-10-degree-observer",
      "publisher": "International Commission on Illumination (CIE)"
    },
    {
      "title": "CIE Fundamentals for Color Measurements (Y. Ohno)",
      "url": "https://tsapps.nist.gov/publication/get_pdf.cfm?pub_id=841491",
      "publisher": "NIST"
    },
    {
      "title": "What is meant by observer angle",
      "url": "https://www.xrite.com/service-support/what_is_meant_by_the_term_observer_angle",
      "publisher": "X-Rite"
    },
    {
      "title": "CIELAB color space",
      "url": "https://en.wikipedia.org/wiki/CIELAB_color_space",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "cie xyz",
    "cie 1931",
    "tristimulus values",
    "standard colorimetric observer",
    "color-matching functions",
    "device-independent color",
    "profile connection space",
    "cielab",
    "chromaticity diagram",
    "d50",
    "colorimetry",
    "color management"
  ],
  "cluster": "color-management"
};

export default entry;
