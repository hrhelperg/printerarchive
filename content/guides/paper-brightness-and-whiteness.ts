import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "paper-brightness-and-whiteness",
  "title": "Paper Brightness and Whiteness",
  "description": "How paper brightness (ISO 2470 blue reflectance) and whiteness (CIE, ISO 11475) are defined, measured, affected by optical brighteners, and used in printing.",
  "summary": "Paper brightness and whiteness are optical properties that describe how much light a sheet reflects and how close its color is to an ideal white. Brightness is a narrow measurement of blue-light reflectance near 457 nm, standardized by ISO 2470 and the TAPPI methods, while whiteness — notably the CIE whiteness of ISO 11475 — evaluates reflectance across the whole visible spectrum together with any residual tint. Both are strongly affected by optical brightening agents, which absorb ultraviolet light and re-emit it as blue, so measurements must control the ultraviolet content of the light source. In printing, brightness and whiteness set the substrate white point that governs contrast, perceived color, and how a design's unprinted areas appear.",
  "difficulty": "intermediate",
  "estimatedTime": "11 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and scope"
    },
    {
      "kind": "paragraph",
      "text": "Brightness and whiteness are two related but distinct optical properties of paper, board, and pulp. Both describe how a sheet interacts with light, and both are used to grade printing and writing substrates, but they measure different things."
    },
    {
      "kind": "paragraph",
      "text": "Brightness, in the papermaking sense, is a measurement of the amount of blue light a sheet reflects. It is deliberately narrow: the standardized instruments respond to a band of light centered in the blue part of the spectrum rather than to the full range the eye sees. Because early yellowing of pulp and paper shows up first as a loss of blue reflectance, this single blue-band figure is a sensitive, repeatable indicator of how \"clean\" or \"unyellowed\" a sheet is. Brightness is reported as a percentage on a scale where a perfect, perfectly reflecting diffuser would read 100."
    },
    {
      "kind": "paragraph",
      "text": "Whiteness is a broader judgment of how closely a sheet approaches an ideal white across the whole visible spectrum, taking into account not just how much light it reflects but also whether that reflection is neutral or carries a tint. A sheet can be very bright (high blue reflectance) yet not read as a pure white if it is, for example, slightly cream or slightly green. Whiteness metrics are built to correlate with the visual impression of whiteness under a defined viewing light."
    },
    {
      "kind": "paragraph",
      "text": "This page is a descriptive technical reference. It explains what brightness and whiteness are, the named standards and methods used to measure them, the role of optical brighteners, and how these properties matter in printing. It is not a buying guide: it names measurement standards but does not reproduce their numeric limits as universal specifications, it gives no brand product lines or prices, and any figures shown are typical values reported by the cited sources rather than guarantees."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Brightness, whiteness, and shade: three related properties"
    },
    {
      "kind": "paragraph",
      "text": "It helps to separate three ideas that are often blurred together in everyday language."
    },
    {
      "kind": "list",
      "items": [
        "Brightness is a narrow-band reflectance measurement in the blue region. It answers, in effect, \"how much blue light comes back?\" It is a single number and does not, by itself, describe color.",
        "Whiteness is a full-spectrum evaluation of how close the sheet is to an ideal white. It combines overall reflectance with how neutral (untinted) that reflectance is.",
        "Shade (or tint) is the direction of any residual color in a nominally white sheet — for example a neutral or \"true\" white, a cool \"blue-white,\" or a warm \"cream\" or \"natural\" white."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because brightness looks only at blue light, adding a trace of blue or violet colorant to a sheet raises its blue reflectance and can increase both the measured brightness and the perceived whiteness, even though the sheet is technically slightly less reflective overall. This is the long-standing practice of \"blue-white\" shading. It is why two sheets can share the same brightness figure and still look different: one may read as a clean cool white and the other as a warmer, creamier white, depending on shade."
    },
    {
      "kind": "paragraph",
      "text": "The practical consequence is that no single number fully describes the appearance of a white sheet. Brightness, whiteness, and shade are complementary descriptors, and reputable specifications for premium papers often report more than one of them."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How paper brightness is measured"
    },
    {
      "kind": "paragraph",
      "text": "Paper brightness is defined by international and industry standards that fix the light, the geometry, and the effective wavelength of the measurement so that results are comparable between laboratories."
    },
    {
      "kind": "paragraph",
      "text": "ISO brightness is specified by ISO 2470-1, \"Measurement of diffuse blue reflectance factor.\" It uses diffuse illumination with reflectance measured perpendicular to the sheet (a d/0 geometry), and it responds to blue light with an effective wavelength of 457 nm and a half-bandwidth of about 44 nm, as set out in the standard. The illumination is ultraviolet-included, with the ultraviolet content adjusted so that it corresponds to CIE illuminant C, which represents indoor daylight conditions. The result is called the ISO brightness."
    },
    {
      "kind": "paragraph",
      "text": "The TAPPI methods, widely used in North America, define brightness with different measurement geometries:"
    },
    {
      "kind": "list",
      "items": [
        "TAPPI T 452 measures directional reflectance at 457 nm using a 45°/0° geometry. It descends from the General Electric (GE) reflection meter adopted in the late 1940s, and the figure it produces is commonly called \"GE brightness.\"",
        "TAPPI T 525 measures diffuse brightness with a d/0 geometry, comparable in principle to ISO 2470, and provides a single-number index suitable for white and near-white samples."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the directional (45°/0°) and diffuse (d/0°) geometries differ, the GE and ISO brightness scales are not simply interchangeable; the cited sources describe them as related but without a single fixed conversion, and report ISO brightness as typically running about one to one-and-a-half units lower than GE brightness for a minimally brightened sheet. That direction is not universal, however: for heavily optically-brightened papers the same sheet can read higher under ISO than under GE, because ISO 2470-1's ultraviolet-included illuminant C excites the brighteners more strongly. A single brightness index is intended for white and near-white stocks; it is not a meaningful descriptor for strongly colored papers."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How paper whiteness is measured"
    },
    {
      "kind": "paragraph",
      "text": "Whiteness is measured over the full visible spectrum rather than in a single blue band, and it is expressed through a whiteness formula that rewards high, neutral reflectance and penalizes tint."
    },
    {
      "kind": "paragraph",
      "text": "The most widely cited metric is CIE whiteness, standardized for paper and board in ISO 11475 for D65/10° (outdoor daylight) conditions, with ISO 11476 defining a companion determination under illuminant C (indoor conditions). The CIE whiteness value combines a term based on overall reflectance with a term that measures how far the sheet's color departs from the neutral point, so a sheet that is both highly reflective and close to neutral scores highest. Accompanying \"tint\" values are used to report the direction of any residual coloration (for example, a greenish or reddish deviation)."
    },
    {
      "kind": "paragraph",
      "text": "On the CIE scale, a perfect reflecting, non-fluorescent white material would have a whiteness of 100. In practice, brightened office and printing papers are commonly reported in roughly the 130 to 170 range because fluorescent whitening pushes the value above the non-fluorescent baseline; these figures are typical values reported by the cited sources, not universal specifications, and they depend heavily on the measurement conditions described below."
    },
    {
      "kind": "paragraph",
      "text": "Because whiteness responds to the whole spectrum and to tint, it correlates more closely with the everyday visual impression of \"how white is this sheet?\" than a blue-band brightness figure does, which is why publication and premium-paper specifications frequently report whiteness alongside, or instead of, brightness."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Optical brightening agents and the role of ultraviolet light"
    },
    {
      "kind": "paragraph",
      "text": "Modern white papers very often contain optical brightening agents (OBAs), also called fluorescent whitening agents (FWAs). These are fluorescent compounds that absorb invisible ultraviolet (UV) energy and re-emit it as visible blue light. Because they add blue emission on top of ordinary reflection, they raise both the measured brightness and the perceived whiteness and can push whiteness values above the non-fluorescent limit of 100."
    },
    {
      "kind": "paragraph",
      "text": "The catch is that a fluorescent sheet's measured brightness and whiteness depend on how much UV is present in the measuring light. Two instruments, or two viewing environments, with different UV content will report different values for the same brightened sheet. Measurement standards therefore control the UV component. ISO brightness (ISO 2470-1) adjusts the UV to correspond to illuminant C; CIE whiteness (ISO 11475) does so for D65 daylight."
    },
    {
      "kind": "paragraph",
      "text": "For color measurement in printing, ISO 13655 defines a set of measurement conditions that fix the UV component of the light so that data can be exchanged reliably:"
    },
    {
      "kind": "list",
      "items": [
        "M0 is a legacy condition with an undefined (typically incandescent) source; the standard notes it is not recommended when samples fluoresce.",
        "M1 uses a D50 illuminant with defined UV content (UV-included) and is regarded as the preferred condition for measuring optically brightened substrates.",
        "M2 is a UV-cut (UV-excluded) condition, useful for isolating the effect of brighteners by comparison with a UV-included measurement."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Two practical points follow. First, because brighteners depend on UV, a sheet can look markedly whiter under UV-rich daylight than under UV-poor indoor light — a source of appearance mismatch between environments. Second, optical brighteners can lose effect over time as they degrade with light exposure, so a sheet's brightness and whiteness are not necessarily permanent."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Grades and how brightness and whiteness vary by paper type"
    },
    {
      "kind": "paragraph",
      "text": "Brightness and whiteness are not fixed at a single \"correct\" level; different paper grades are engineered to different targets for functional and aesthetic reasons. The categories below are qualitative descriptions of common grade families, not exhaustive specifications."
    },
    {
      "kind": "list",
      "items": [
        "Office and copy papers are frequently marketed with an explicit brightness figure — in North American markets often a GE/TAPPI value in roughly the low-90s and up — where a higher number is promoted as a whiter, higher-contrast sheet. These figures are market conventions reported by the cited sources rather than universal standards.",
        "Offset and publication (book) papers are made in both bright-white and warmer \"natural\" or \"cream\" shades. Cream and natural stocks are often chosen for long-form reading because a lower, warmer white can reduce glare and perceived harshness; bright-white stocks are chosen where crisp contrast and color pop are wanted.",
        "Coated art and gloss papers generally combine high brightness and whiteness with a smooth, sometimes glossy surface, supporting high contrast and a wide apparent color gamut.",
        "Groundwood and newsprint grades are typically lower in brightness and warmer in shade, reflecting lower-cost, higher-lignin furnishes that yellow more readily.",
        "Inkjet and photo media are commonly made to very high whiteness, often with substantial optical brightener content, to maximize contrast and the appearance of vivid color; see the related note on inkjet photo media."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Across all of these, brightness and whiteness are chosen in balance with other properties — opacity, weight, finish, and cost — rather than maximized in isolation. A \"brighter\" or \"whiter\" sheet is not automatically better for every job."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in printing and print quality"
    },
    {
      "kind": "paragraph",
      "text": "The brightness, whiteness, and shade of the substrate set the visual and colorimetric baseline against which everything printed on it is judged."
    },
    {
      "kind": "paragraph",
      "text": "Contrast and legibility: brightness governs the contrast between ink and paper. A brighter sheet reflects more light from the unprinted areas, increasing the tonal separation between text or image and background, which can make text look crisper and images look more contrasty. Whiteness and shade set how the unprinted \"white\" of a design reads — a cool bright-white background feels different from a warm cream one even before any ink is applied."
    },
    {
      "kind": "paragraph",
      "text": "Color and gamut: in color management, the paper white is the anchor, or white point, of an output ICC profile. A whiter, brighter substrate generally allows a larger apparent color gamut and lighter, cleaner highlights, while a warmer or duller sheet shifts and compresses the reproducible range. In soft proofing and hard proofing, the paper's white is what \"simulated paper white\" attempts to reproduce so that a proof predicts the final sheet."
    },
    {
      "kind": "paragraph",
      "text": "Brighteners and measurement consistency: because optical brighteners make measured color depend on UV content, the measurement condition (for example ISO 13655 M1 versus M2) must be chosen and kept consistent between the proofing device, the measuring instrument, and the production stock. A mismatch is a common cause of proofs that do not match press sheets, particularly in the highlights and in nominally neutral areas. Substrate-relative color evaluation and UV-aware measurement conditions exist specifically to manage this."
    },
    {
      "kind": "paragraph",
      "text": "Appearance under different lights: because whiteness and shade interact with the viewing illuminant, the same printed piece can look different under store lighting, office lighting, and daylight — an instance of illuminant-dependent appearance that paper white contributes to alongside the inks."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relation to adjacent paper properties and concepts"
    },
    {
      "kind": "paragraph",
      "text": "Brightness and whiteness are surface-optical, reflectance-based properties and should not be confused with several neighboring concepts, each of which has its own reference."
    },
    {
      "kind": "list",
      "items": [
        "Opacity is a different optical property: it describes how much a sheet blocks light from passing through, rather than how much it reflects or how neutral that reflection is. Opacity is standardized separately (for example ISO 2471) and is the property most directly connected to print show-through. A sheet can be highly bright yet relatively low in opacity, or the reverse. See the related pages on paper opacity and the show-through defect.",
        "Finish and coating strongly influence measured and perceived brightness. Coated and calendered surfaces tend to raise brightness and gloss and change how light reflects; see the comparison of coated and uncoated paper.",
        "Gloss is specular (mirror-like) reflection and is distinct from brightness, which is a diffuse reflectance measurement; a matte sheet and a glossy sheet can share a brightness figure while looking very different.",
        "Weight and caliper (grammage and thickness), standardized under ISO 536 and reported alongside ISO 216 trimmed sizes, are physical rather than optical descriptors, though heavier or bulkier sheets often also carry higher opacity.",
        "A paper's residual shade contributes to the overall color balance of a reproduction; an off-neutral paper white can read as a subtle overall tint in the same way an image color cast does."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These properties are specified together because a printing substrate is selected as a balance among optical appearance (brightness, whiteness, shade, opacity, gloss), physical form (weight, caliper, size), and surface (finish, coating), matched to the printing process and the intended use."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing paper/media types and properties and how they are measured. It is not a buying guide: it gives no brand product lines, prices, or model-specific compatibility, and any specific values are typical figures from the cited sources, not guarantees. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "color-cast"
    },
    {
      "section": "guides",
      "slug": "paper-opacity"
    },
    {
      "section": "guides",
      "slug": "coated-vs-uncoated-paper"
    },
    {
      "section": "guides",
      "slug": "show-through"
    },
    {
      "section": "guides",
      "slug": "paper-weight-and-caliper"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between paper brightness and whiteness?",
      "a": "Brightness is a narrow measurement of how much blue light a sheet reflects, defined near an effective wavelength of 457 nm by standards such as ISO 2470 and the TAPPI methods. Whiteness, such as the CIE whiteness of ISO 11475, evaluates reflectance across the whole visible spectrum together with any residual tint, so it correlates more closely with the visual impression of how white a sheet looks. A sheet can be very bright yet not read as a pure white if it carries a warm or greenish shade."
    },
    {
      "q": "Why can a paper's whiteness value be greater than 100?",
      "a": "On the CIE whiteness scale, a perfect reflecting, non-fluorescent white material scores 100. Many white papers contain optical brightening agents that absorb ultraviolet light and re-emit it as visible blue, adding emission on top of ordinary reflection. This pushes the whiteness value above 100 — the cited sources report brightened office and printing papers commonly in roughly the 130 to 170 range, though the exact value depends on the ultraviolet content of the measuring light."
    },
    {
      "q": "Which standards are used to measure paper brightness and whiteness?",
      "a": "ISO brightness is defined by ISO 2470-1 (diffuse blue reflectance at an effective 457 nm). North American practice also uses TAPPI T 452 (directional 45°/0° reflectance, the basis of \"GE brightness\") and TAPPI T 525 (diffuse brightness). Whiteness is most commonly reported as CIE whiteness, standardized in ISO 11475 for D65 daylight and ISO 11476 for illuminant C conditions."
    },
    {
      "q": "Why do optical brighteners matter for color measurement?",
      "a": "Optical brighteners fluoresce under ultraviolet light, so a brightened sheet's measured brightness, whiteness, and color depend on how much ultraviolet is in the measuring or viewing light. ISO 13655 defines measurement conditions — M0 (undefined source), M1 (D50 with defined UV, preferred for brightened substrates), and M2 (UV-cut) — so that measurements are repeatable and comparable. Mismatched conditions between a proof, an instrument, and the production stock are a common cause of proof-to-print discrepancies."
    },
    {
      "q": "Does higher brightness always mean better paper for printing?",
      "a": "Not necessarily. Higher brightness raises the contrast between ink and paper and can make color look more vivid, which suits many jobs, but it is only one factor. Long-form book papers are often made in warmer, lower-brightness \"natural\" or \"cream\" shades to reduce glare and improve reading comfort, and brightness must be balanced against opacity, weight, finish, and the demands of the printing process. The right level depends on the intended use rather than being maximized in isolation."
    }
  ],
  "sources": [
    {
      "title": "ISO 2470-1:2016 — Paper, board and pulps — Measurement of diffuse blue reflectance factor — Part 1: Indoor daylight conditions (ISO brightness)",
      "url": "https://www.iso.org/standard/69090.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 11475:2017 — Paper and board — Determination of CIE whiteness, D65/10 degrees (outdoor daylight)",
      "url": "https://www.iso.org/standard/63614.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "TAPPI/ANSI T 452 — Brightness of pulp, paper and paperboard (directional reflectance at 457 nm)",
      "url": "https://imisrise.tappi.org/TAPPI/Products/01/T/0104T452.aspx",
      "publisher": "TAPPI (Technical Association of the Pulp and Paper Industry)"
    },
    {
      "title": "Brightness in the Paper Industry",
      "url": "https://www.datacolor.com/wp-content/uploads/2022/03/brightness_in_paper_industry.pdf",
      "publisher": "Datacolor"
    },
    {
      "title": "Learn More About M Standards (ISO 13655 measurement conditions)",
      "url": "https://www.xrite.com/page/learn-more-about-m-standards",
      "publisher": "X-Rite"
    },
    {
      "title": "Evaluating the ISO Standards for UV-Content Adjustment Based on Brightness and Whiteness",
      "url": "https://onlinelibrary.wiley.com/doi/10.1002/col.22993",
      "publisher": "Color Research & Application (Wiley)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "paper brightness",
    "paper whiteness",
    "iso 2470",
    "cie whiteness",
    "iso 11475",
    "optical brightening agents",
    "tappi t452",
    "blue reflectance factor",
    "paper shade",
    "substrate white point",
    "m1 measurement condition",
    "print contrast"
  ],
  "cluster": "paper-technologies"
};

export default entry;
