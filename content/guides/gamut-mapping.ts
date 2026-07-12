import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "gamut-mapping",
  "title": "Color gamut and gamut mapping",
  "description": "How color gamut is defined and how gamut mapping (clipping, compression, ICC rendering intents) reconciles colors across color spaces.",
  "summary": "A color gamut is the range of colors a device or color space can capture, display, or reproduce; it is device- and medium-dependent and is represented either as a region on a chromaticity diagram or, more completely, as a three-dimensional color solid in a space such as CIELAB. Gamut mapping is the set of strategies used to reconcile colors that exist in a source space but cannot be reproduced in a (usually smaller) destination space, most commonly when a wide-gamut RGB image is prepared for a narrower CMYK print process. The two fundamental approaches are clipping (leave in-gamut colors unchanged and move only out-of-gamut colors to the nearest reproducible color at the gamut boundary) and compression (rescale the whole source gamut into the destination so tonal and hue relationships are preserved). In the ICC color-management architecture these approaches are exposed through four rendering intents: perceptual, saturation, media-relative colorimetric, and ICC-absolute colorimetric. This is a neutral technical reference; for the adjacent stages it references PrinterArchive's pages on ICC profiles, CMYK, halftoning, and the raster image processor rather than duplicating them.",
  "difficulty": "advanced",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "A color gamut is the range of colors a device or color space can capture, display, or reproduce. Gamut mapping is the set of strategies used to reconcile colors that exist in a source color space but cannot be reproduced in a (usually smaller) destination space, most commonly when a wide-gamut RGB image is prepared for a narrower CMYK print process."
    },
    {
      "kind": "paragraph",
      "text": "The two fundamental approaches are clipping (leave in-gamut colors alone and move only out-of-gamut colors to the nearest reproducible color at the gamut boundary) and compression (rescale the whole source gamut into the destination so tonal and hue relationships are preserved). In the International Color Consortium (ICC) color-management architecture, these approaches are exposed to users through four rendering intents, each of which binds color data to a defined set of gamut-mapping rules to produce an expected result."
    },
    {
      "kind": "paragraph",
      "text": "This page is a technical reference. The adjacent pipeline stages it touches are covered in PrinterArchive's pages on ICC profiles, CMYK, halftoning, and the raster image processor."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "What it is / definition"
    },
    {
      "kind": "paragraph",
      "text": "A gamut is the set of colors that a given device can produce or that a color space can encode. It is a region (not necessarily convex) in a colorimetric space, and it is device- and medium-dependent."
    },
    {
      "kind": "paragraph",
      "text": "Gamut is commonly visualized in two ways:"
    },
    {
      "kind": "list",
      "items": [
        "As a region on the CIE 1931 chromaticity diagram, a two-dimensional chromaticity projection.",
        "As a three-dimensional color solid in a space such as CIELAB, which captures lightness/luminance extent as well as chromaticity extent."
      ]
    },
    {
      "kind": "paragraph",
      "text": "A gamut boundary is the outer surface of that color solid. Gamut-mapping algorithms operate relative to the source and destination gamut boundaries. In general terms, gamut mapping describes strategies for replacing colors of the initial color space that cannot be reproduced in the target color space, ideally without changing the overall color effect of the final result."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History where documented"
    },
    {
      "kind": "paragraph",
      "text": "The word \"gamut\" derives from medieval music (\"gamma ut\") and, according to Wikipedia, was applied to a range of colors in the 1850s."
    },
    {
      "kind": "paragraph",
      "text": "Foundational color-solid theory predates digital printing. Wikipedia attributes the following, and the underlying primary papers should be consulted before treating the years as authoritative: Erwin Schrodinger's work on maximum-saturation (optimal) colors (reportedly 1919); David MacAdam's calculation of the optimal-color limits, the \"MacAdam limits\" (reportedly 1935); and Michael R. Pointer's characterization of the gamut of real surface colors from measured samples (reportedly 1980). These are reported historical attributions, not ICC- or ISO-verified facts."
    },
    {
      "kind": "paragraph",
      "text": "The ICC was formed in 1993 by eight vendors: Adobe, Agfa, Apple, Kodak, Microsoft, Silicon Graphics, Sun Microsystems, and Taligent. Its purpose was to create an open, vendor-neutral color-management architecture; rendering intents are part of that architecture. The ICC profile specification was later published as an ISO standard, ISO 15076-1 (first edition 2005, based on ICC.1:2004-10; subsequent editions in 2010 and 2025, the latter based on ICC.1:2022)."
    },
    {
      "kind": "paragraph",
      "text": "To standardize how gamut-mapping algorithms are compared, the CIE published CIE 156:2004, \"Guidelines for the Evaluation of Gamut Mapping Algorithms.\" For ICC v4 profiles, the ICC adopted a Perceptual Reference Medium Gamut (PRMG), the reference medium gamut defined in ISO 12640-3, as a recommended reference target for the perceptual and saturation intents; it was introduced to improve interoperability of the v2 perceptual intent, which had been implementation-defined."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Why mapping is needed. When a color in the source (for example an sRGB or Adobe RGB image) falls outside the destination gamut (for example a specific CMYK press condition), it cannot be reproduced exactly. A decision must be made about where that color goes, and, depending on the strategy, whether in-gamut colors are also adjusted."
    },
    {
      "kind": "paragraph",
      "text": "Clipping. In-gamut source colors are reproduced unchanged; only out-of-gamut colors are moved to the nearest reproducible color, typically at the destination gamut boundary. This maximizes colorimetric accuracy for colors that already fit, but multiple distinct out-of-gamut colors can collapse onto the same boundary color, losing detail and gradation in saturated areas. The Wikipedia Gamut article notes that naive clipping \"would burn the image.\""
    },
    {
      "kind": "paragraph",
      "text": "Compression. The entire source gamut is rescaled to fit inside the destination gamut, so the spacing between colors is preserved rather than clipped at the edge. This preserves smooth gradients and overall tonal relationships across the whole image, at the cost of slightly desaturating or shifting colors that would otherwise have been reproduced exactly."
    },
    {
      "kind": "paragraph",
      "text": "Rendering intents package these strategies:"
    },
    {
      "kind": "list",
      "items": [
        "Perceptual — uses compression; smoothly moves out-of-gamut colors into gamut to preserve overall visual relationships and gradations, while distorting some in-gamut colors. Favored for photographic images with many out-of-gamut colors.",
        "Saturation — maps colors to emphasize vividness rather than colorimetric accuracy; aimed at business graphics, charts, and vector art.",
        "Media-relative colorimetric — uses clipping; keeps in-gamut colors as accurate as possible, moves out-of-gamut colors to the nearest boundary color, and scales source white to destination (media/paper) white.",
        "ICC-absolute colorimetric — like relative colorimetric (clipping) but does not rescale to media white; it reproduces the source's absolute colorimetry, including simulating the source paper/white point. Used for proofing one medium on another."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Black point compensation (BPC) is a related but separate adjustment applied by the application or color-management module (CMM); it is not itself an ICC rendering intent. It maps source black to destination black so shadow detail is not lost when the darkest reproducible black differs between spaces. BPC is not applied for the absolute colorimetric intent."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits in the color/print pipeline"
    },
    {
      "kind": "paragraph",
      "text": "Gamut mapping happens during color conversion between profiles, performed by the CMM using ICC profiles. In a print workflow it typically occurs when a document or image is converted from its working RGB (or a source CMYK) into the output profile describing the printer, paper, and ink condition, before or as part of handoff to the raster image processor."
    },
    {
      "kind": "paragraph",
      "text": "The raster image processor then handles screening and halftoning and drives the marking engine. See PrinterArchive's pages on ICC profiles, CMYK, halftoning, and the raster image processor for those adjacent stages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to ICC profiles and CMYK"
    },
    {
      "kind": "paragraph",
      "text": "ICC profiles describe a device's color gamut and define the mapping between the device space and the Profile Connection Space (PCS), which is parameterized in CIEXYZ or CIELAB. Gamut mapping is realized through the profile's transforms for each rendering intent, and a profile can carry different tables or behaviors per intent. Choosing an intent therefore selects which gamut-mapping behavior the CMM applies."
    },
    {
      "kind": "paragraph",
      "text": "CMYK output gamuts are generally smaller and irregularly shaped compared with common RGB working spaces, which is why RGB-to-CMYK conversion is the canonical gamut-mapping case. A CMYK gamut is not strictly a subset of RGB, however: there are colors inside the CMYK gamut that fall outside commonly used RGB color spaces such as sRGB and Adobe RGB, so mapping can be required in both directions."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to printer technologies"
    },
    {
      "kind": "paragraph",
      "text": "Printing is a subtractive process (cyan, magenta, yellow, and black inks or toner on a substrate), whereas displays are additive (red, green, and blue emitters). Additive RGB devices form roughly triangular gamuts on the CIE 1931 diagram, bounded by their primaries; subtractive CMYK gamuts have rounded corners because of non-ideal ink absorption spectra and ink-paper interaction."
    },
    {
      "kind": "paragraph",
      "text": "Because a print gamut depends on the specific ink set, substrate, and screening, gamut mapping is tied to the exact output condition. Adding inks, as in extended-gamut or multi-color printing beyond CMYK, enlarges the printable gamut and changes what must be mapped. Standardized print conditions defined by process-control standards such as ISO 12647 describe reproducible target gamuts that output profiles characterize."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Common problems"
    },
    {
      "kind": "list",
      "items": [
        "Loss of saturated detail or tonal flattening when clipping collapses several distinct out-of-gamut colors onto one boundary color.",
        "Global desaturation or hue/appearance shifts from compression affecting colors that were already reproducible.",
        "Banding or posterization in gradients when mapping is done crudely.",
        "Wrong intent for the content — for example, colorimetric clipping on a photograph full of out-of-gamut colors, or perceptual compression on a corporate spot color that needed accuracy.",
        "Profile or condition mismatch — mapping to a profile that does not match the actual paper and ink produces unpredictable out-of-gamut behavior.",
        "No single perfect algorithm — compression algorithms approximate transformations, and none can be truly perfect."
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
        "Enables consistent, predictable color across devices with different gamuts within one managed (ICC) workflow.",
        "Rendering intents give content-appropriate control: preserve overall appearance (perceptual), emphasize vividness (saturation), or maximize accuracy (colorimetric).",
        "The approach is vendor-neutral and standardized (ICC / ISO 15076), so profiles and intents behave portably across operating systems and applications.",
        "Colorimetric intents, together with absolute mode, support cross-media proofing by simulating one print condition, including its paper white, on another device."
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
        "Any mapping into a smaller gamut is inherently lossy; some source colors cannot be reproduced.",
        "The best intent is image- and use-dependent; there is no universally correct choice.",
        "Standard ICC rendering intents are largely pointwise or global transforms and do not account for spatial context, which is part of why research on spatial gamut-mapping algorithms and the CIE 156 evaluation guidelines exist.",
        "Results depend on profile quality and accurate characterization of the real output condition.",
        "Perceptual results can differ between ICC v2 (implementation-defined perceptual behavior) and v4 (which references the PRMG), so appearance can vary by profile version and CMM."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern relevance"
    },
    {
      "kind": "paragraph",
      "text": "Wide-gamut displays, HDR, and extended-gamut (multi-ink) printing keep gamut mapping central: content is increasingly authored in gamuts larger than any single output device can reproduce, so mapping between them is unavoidable."
    },
    {
      "kind": "paragraph",
      "text": "The ICC architecture remains the industry standard, published as ISO 15076-1 (current edition based on ICC.1:2022), and rendering intents remain the primary user-facing control for gamut mapping in design and print applications. CIE 156:2004 continues to frame how new gamut-mapping algorithms are evaluated and compared."
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
          "period": "1850s",
          "text": "\"Gamut\" applied to a range of colors (reported via Wikipedia)."
        },
        {
          "period": "1919",
          "text": "Schrodinger's theory of optimal (maximum-saturation) colors (reported via Wikipedia; verify primary source)."
        },
        {
          "period": "1931",
          "text": "CIE 1931 color spaces and chromaticity diagram established, the standard reference for visualizing gamuts."
        },
        {
          "period": "1935",
          "text": "MacAdam's calculation of optimal-color limits (reported via Wikipedia; verify primary source)."
        },
        {
          "period": "1980",
          "text": "Pointer's gamut of real surface colors (reported via Wikipedia; verify primary source)."
        },
        {
          "period": "1993",
          "text": "ICC founded by eight vendors."
        },
        {
          "period": "1999",
          "text": "sRGB standardized as IEC 61966-2-1, a common source RGB gamut."
        },
        {
          "period": "2004",
          "text": "CIE 156:2004 guidelines for evaluating gamut-mapping algorithms."
        },
        {
          "period": "2005",
          "text": "ICC profile spec published as ISO 15076-1:2005 (based on ICC.1:2004-10)."
        },
        {
          "period": "2010",
          "text": "ISO 15076-1:2010."
        },
        {
          "period": "2022 / 2025",
          "text": "ICC.1:2022 specification; ISO 15076-1:2025 based on ICC.1:2022."
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
      "slug": "rendering-intents"
    },
    {
      "section": "guides",
      "slug": "color-spaces"
    },
    {
      "section": "guides",
      "slug": "rgb-to-cmyk-conversion"
    },
    {
      "section": "guides",
      "slug": "soft-proofing"
    },
    {
      "section": "tools",
      "slug": "icc-profiles"
    },
    {
      "section": "tools",
      "slug": "cmyk"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between a color gamut and gamut mapping?",
      "a": "A color gamut is the range of colors a device or color space can capture, display, or reproduce, represented as a region (not necessarily convex) in a colorimetric space. Gamut mapping is the process of reconciling colors that exist in a source space but fall outside a destination space, usually when converting a wider space into a narrower one."
    },
    {
      "q": "What is the difference between clipping and compression?",
      "a": "Clipping leaves in-gamut colors unchanged and moves only out-of-gamut colors to the nearest reproducible color at the gamut boundary, maximizing accuracy for colors that already fit but risking loss of detail where distinct colors collapse together. Compression rescales the whole source gamut into the destination to preserve tonal and hue relationships and smooth gradients, at the cost of shifting or desaturating some colors."
    },
    {
      "q": "What are the four ICC rendering intents?",
      "a": "Perceptual (compression to preserve overall appearance and gradations, favored for photographs), saturation (emphasizes vividness for business graphics), media-relative colorimetric (clipping with source white scaled to media white), and ICC-absolute colorimetric (clipping without rescaling to media white, reproducing absolute colorimetry including the source paper white, used for cross-media proofing)."
    },
    {
      "q": "Why is RGB-to-CMYK the classic gamut-mapping case?",
      "a": "CMYK output gamuts are generally smaller and irregularly shaped compared with common RGB working spaces, so many RGB colors fall outside what a press can reproduce and must be mapped. The relationship is not strictly one-directional, though: some colors inside a CMYK gamut fall outside sRGB or Adobe RGB, so mapping can be needed in both directions."
    },
    {
      "q": "Is black point compensation a rendering intent?",
      "a": "No. Black point compensation is a separate correction applied by the application or color-management module that maps source black to destination black so shadow detail is preserved. It is not one of the ICC rendering intents and is not applied for the absolute colorimetric intent."
    }
  ],
  "sources": [
    {
      "title": "About ICC",
      "url": "https://www.color.org/abouticc.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "Profile Connection Space",
      "url": "https://www.color.org/profile.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "The Perceptual Reference Medium Gamut (PRMG)",
      "url": "https://www.color.org/v4_prmg.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ICC.1:2022 Specification",
      "url": "https://www.color.org/specification/ICC.1-2022-05.pdf",
      "publisher": "International Color Consortium"
    },
    {
      "title": "ICC profile specification published as ISO 15076-1:2005",
      "url": "https://www.color.org/News/060208.xalter",
      "publisher": "International Color Consortium"
    },
    {
      "title": "Definition & Use of the ISO 12640-3 Reference Color Gamut (Holm & Tastl)",
      "url": "https://library.imaging.org/cic/articles/14/1/art00012",
      "publisher": "Society for Imaging Science and Technology"
    },
    {
      "title": "ISO 15076-1:2005",
      "url": "https://www.iso.org/standard/40317.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15076-1:2010",
      "url": "https://www.iso.org/standard/54754.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 15076-1:2025",
      "url": "https://www.iso.org/standard/86740.html",
      "publisher": "ISO"
    },
    {
      "title": "Guidelines for the Evaluation of Gamut Mapping Algorithms (CIE 156:2004)",
      "url": "https://www.cie.co.at/publications/guidelines-evaluation-gamut-mapping-algorithms",
      "publisher": "CIE"
    },
    {
      "title": "IEC 61966-2-1:1999 (sRGB)",
      "url": "https://webstore.iec.ch/en/publication/6169",
      "publisher": "IEC"
    },
    {
      "title": "Gamut",
      "url": "https://en.wikipedia.org/wiki/Gamut",
      "publisher": "Wikipedia"
    },
    {
      "title": "Rendering intent",
      "url": "https://en.wikipedia.org/wiki/Rendering_intent",
      "publisher": "Wikipedia"
    },
    {
      "title": "International Color Consortium",
      "url": "https://en.wikipedia.org/wiki/International_Color_Consortium",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-06",
  "updated": "2026-07-06",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "color gamut",
    "gamut mapping",
    "rendering intent",
    "perceptual intent",
    "colorimetric intent",
    "saturation intent",
    "clipping",
    "gamut compression",
    "icc profile",
    "profile connection space",
    "cielab",
    "rgb to cmyk"
  ],
  "cluster": "color-management"
};

export default entry;
