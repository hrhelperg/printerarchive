import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "paper-opacity",
  "title": "Paper Opacity",
  "description": "Paper opacity measures how much a sheet blocks light and show-through. Covers its types, ISO 2471 and TAPPI T 425 measurement, and its role in printing.",
  "summary": "Paper opacity is the optical property that describes how effectively a sheet obscures what lies behind it or is printed on its reverse side. It is expressed as a percentage and is governed by how strongly the sheet scatters and absorbs light, which in turn depends on fiber, filler, grammage, coating, and calendering. Opacity is quantified against standardized methods such as ISO 2471 (paper backing) and TAPPI T 425 (which includes an 89% reflectance backing, or contrast ratio). Because these methods use different backings and geometries, their values are not directly interchangeable.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What paper opacity is"
    },
    {
      "kind": "paragraph",
      "text": "Paper opacity is an optical property that describes the degree to which a sheet of paper prevents light from passing through it, and therefore how well it hides whatever lies behind the sheet or is printed on its reverse side. A perfectly opaque sheet would transmit no light and reveal nothing on the far side; a fully transparent sheet would reveal everything. Most papers fall between these extremes, and opacity is reported as a percentage on a 0-to-100 scale, where higher values indicate a more light-blocking sheet."
    },
    {
      "kind": "paragraph",
      "text": "Conceptually, opacity is a contrast measurement rather than a single absolute reading. It compares how much light a sheet reflects when it is backed by something dark against how much it reflects when backed by something light. The larger the difference between those two conditions, the more light is leaking through the sheet, and the lower its opacity. This ratio-based definition is why opacity is sometimes referred to as a contrast ratio in measurement literature."
    },
    {
      "kind": "paragraph",
      "text": "Opacity should not be confused with the visible consequence of low opacity during use. When printing or writing on one side of a sheet shows through to the other, that visible defect is show-through; opacity is the underlying material property that makes show-through more or less likely. Opacity is likewise distinct from brightness and whiteness, which describe how much and how neutrally a surface reflects light rather than how much it transmits. See the related entry on show-through for the defect itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How opacity arises in the sheet"
    },
    {
      "kind": "paragraph",
      "text": "Opacity is produced by the scattering and absorption of light as it travels through the thickness of the paper. Light entering the sheet meets many internal interfaces where the refractive index changes, primarily between cellulose fibers and the air voids surrounding them, and between the fibers and any mineral particles present. At each interface some light is redirected. The more the light is scattered and turned back before it can pass through, the more opaque the sheet appears. This behavior is commonly described using the Kubelka-Munk model, which relates a sheet's optical response to a light-scattering coefficient and a light-absorption coefficient; the model is widely applied to paper because it captures how scattering builds opacity while absorption (from dyes or dark fibers) contributes in a different way."
    },
    {
      "kind": "paragraph",
      "text": "Several characteristics of the sheet influence how strongly it scatters light:"
    },
    {
      "kind": "list",
      "items": [
        "Fiber furnish and refractive-index contrast: the air-to-fiber interfaces created by the porous fiber network are a primary source of scattering.",
        "Fillers and pigments: fine mineral particles such as titanium dioxide, calcium carbonate, and clay are added partly to raise scattering; titanium dioxide is notable because its high refractive index makes it an efficient scatterer, though filler efficiency falls when particles aggregate.",
        "Grammage and caliper: a heavier or thicker sheet contains more material for light to traverse, generally increasing opacity.",
        "Coating: surface coatings add light-scattering pigment layers that can raise opacity.",
        "Calendering: pressing the sheet smoother and denser reduces internal air voids and fiber-air interfaces, which tends to lower scattering and thus opacity.",
        "Absorption: darker or more heavily dyed sheets absorb transmitted light, which also reduces show-through."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because these factors interact, two sheets of identical weight can have noticeably different opacity depending on their furnish, filler loading, and finishing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Types and grades by opacity"
    },
    {
      "kind": "paragraph",
      "text": "Papers are not sold on a single opacity scale, but opacity is one of the defining differences between grade families, and some grades are engineered deliberately toward high or low opacity."
    },
    {
      "kind": "paragraph",
      "text": "High-opacity and opaque grades are formulated to minimize show-through, typically through higher filler content, favorable fiber furnish, and controlled finishing. So-called lightweight opaque or high-bulk opaque papers are engineered to deliver as much opacity as possible at a reduced grammage, which is why they are associated with applications such as bibles, dictionaries, directories, and other bulky bound volumes where low weight and thickness matter but two-sided legibility is essential."
    },
    {
      "kind": "paragraph",
      "text": "General-purpose printing and writing grades, including bond, book, and offset (text) papers, occupy the middle of the range and balance opacity against weight, cost, brightness, and surface. Newsprint and other low-cost mechanical-pulp grades generally sit lower in opacity relative to their weight."
    },
    {
      "kind": "paragraph",
      "text": "At the opposite end are papers made intentionally translucent, such as tracing paper, vellum, and glassine, where a low-opacity, light-transmitting sheet is the desired product rather than a defect. These grades are highly calendered and densified so that light passes through, which is the same mechanism that lowers opacity in ordinary papers."
    },
    {
      "kind": "paragraph",
      "text": "A closely related concept is two-sidedness, where the two surfaces of a sheet differ in optical behavior; this can make show-through and print appearance differ between the sides even at a given nominal opacity. This entry describes the media property; it does not cover the paper-curl defect, which is treated separately."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How opacity is measured"
    },
    {
      "kind": "paragraph",
      "text": "Opacity is determined instrumentally by measuring diffuse reflectance under a dark backing and under a light backing, then expressing their ratio as a percentage. Two families of named standards are widely used, and they define the reference backings and measurement geometry differently."
    },
    {
      "kind": "paragraph",
      "text": "ISO 2471, 'Paper and board — Determination of opacity (paper backing) — Diffuse reflectance method,' specifies opacity measured with a paper backing: the specimen is backed by an opaque pad of the same paper. The method uses diffuse reflectance and requires the instrument's ultraviolet content to be adjusted to correspond to CIE illuminant C, using a fluorescent reference standard, so that papers containing fluorescent whitening agents can be measured consistently. The standard states it is not applicable to colored papers or boards that incorporate fluorescent dyes or pigments."
    },
    {
      "kind": "paragraph",
      "text": "TAPPI T 425, 'Opacity of paper (15/d geometry, illuminant A/2°, 89% reflectance backing and paper backing),' defines opacity using 15/d measurement geometry under illuminant A/2°. It provides two determinations: one against an 89% reflectance white backing and one against a paper backing. The 89% reflectance version, often called the contrast ratio, is defined as 100 times the ratio of the reflectance of the specimen backed by a black body of 0.5% reflectance or less to the reflectance of the same specimen backed by a white body of 89% absolute reflectance."
    },
    {
      "kind": "paragraph",
      "text": "The physical basis for both methods is the same: a sheet over a white backing reflects more light than the same sheet over a black backing, because light transmitted through an imperfectly opaque sheet is largely returned by the white backing and passes through the paper a second time. The size of that difference reveals how much light the sheet is letting through. Related optical properties are governed by their own standards, including ISO 2470-1 for ISO brightness and ISO 536 for grammage."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Why reported opacity values are not always comparable"
    },
    {
      "kind": "paragraph",
      "text": "Because opacity is defined against a reference backing, the choice of backing changes the number, and different standards use different references. This is a frequent source of confusion when comparing specifications."
    },
    {
      "kind": "paragraph",
      "text": "The TAPPI T 425 contrast-ratio value uses a fixed 89% reflectance white backing, so it is anchored to a standardized bright reference. The ISO 2471 value and the paper-backing option in T 425 back the specimen with a pad of the same paper, producing a figure sometimes described as printing opacity because it reflects the paper against itself as it would appear in a stack or a two-sided print. These are legitimately different quantities."
    },
    {
      "kind": "paragraph",
      "text": "As a result, opacity figures should be read together with the method that produced them, and a value obtained by one method should not be assumed to equal a value from another. Measurement geometry (for example, the 15/d arrangement in TAPPI T 425 versus the diffuse arrangement in ISO 2471) and illuminant differences add further reasons why cross-method comparison is unreliable. This reference does not publish universal numeric opacity targets, because meaningful values depend on the grade, the method, and the backing used."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in printing and print quality"
    },
    {
      "kind": "paragraph",
      "text": "Opacity matters most wherever a sheet is printed or written on both sides, or stacked with other sheets. Adequate opacity keeps the image, text, or ink density on one side from becoming visible on the other, preserving legibility and a clean appearance. Insufficient opacity produces show-through, in which one side's image or text becomes visible on the other through the body of the sheet because the sheet transmits too much light, reducing contrast and reading comfort. A related but distinct defect, print-through, arises mainly when printing ink penetrates into or through the sheet, lowering reflectance on the reverse and making the image visible from the back; it is an ink/paper interaction (a strike-through-type effect) rather than a pure light-transmission effect, so it is driven primarily by ink penetration rather than by base-sheet opacity."
    },
    {
      "kind": "paragraph",
      "text": "Several printing variables interact with a paper's opacity:"
    },
    {
      "kind": "list",
      "items": [
        "Duplex (double-sided) printing places the strongest demand on opacity, because dense coverage on the reverse competes directly with the front image.",
        "Ink density and coverage: heavier ink films and solid areas increase the amount of light that can be seen through the sheet, so more demanding jobs benefit from more opaque stock.",
        "Weight and cost trade-offs: opacity can usually be raised by adding weight, caliper, filler, or coating, but each of these has cost, bulk, or handling consequences, so paper selection is a balance rather than a simple maximization."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Opacity is one contributor to perceived print quality alongside other factors treated in their own entries, such as show-through and print mottle. It is separate from dot gain, which concerns the spread of halftone dots in the ink film rather than light transmission through the substrate; see the dot-gain entry for that phenomenon."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent paper properties"
    },
    {
      "kind": "paragraph",
      "text": "Opacity is one member of a set of interrelated paper properties, and it is easiest to understand alongside them."
    },
    {
      "kind": "list",
      "items": [
        "Brightness and whiteness describe how much light a surface reflects and how neutral that reflection is; they are measured separately (for example, ISO brightness under ISO 2470-1) and can move somewhat independently of opacity. A very bright sheet is not automatically a very opaque one.",
        "Grammage (basis weight) and caliper describe mass per unit area and thickness; both generally correlate with opacity because more material scatters and absorbs more light, but furnish and filler can decouple them, which is exactly what lightweight opaque grades exploit. Grammage is determined under ISO 536; see the entry on paper weight and caliper.",
        "Coated versus uncoated construction affects opacity through the pigment coating layer and the resulting surface; see the coated-versus-uncoated entry.",
        "Transparency and translucency are effectively the inverse of opacity and are the intended property of tracing and glassine papers."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Finally, it is worth separating the property from the defects it influences. Opacity is a measurable characteristic of the media itself. Show-through is the visible defect that low opacity can allow, while print-through is a related but distinct defect driven mainly by printing ink penetrating into or through the sheet rather than by insufficient opacity; paper curl is an unrelated dimensional defect. This page describes the property; the linked entries cover the corresponding defects and processes."
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
      "slug": "show-through"
    },
    {
      "section": "guides",
      "slug": "paper-weight-and-caliper"
    },
    {
      "section": "guides",
      "slug": "paper-brightness-and-whiteness"
    },
    {
      "section": "guides",
      "slug": "coated-vs-uncoated-paper"
    }
  ],
  "faqs": [
    {
      "q": "What is paper opacity?",
      "a": "Paper opacity is an optical property that describes how effectively a sheet blocks transmitted light and hides what is behind it or printed on its reverse. It is reported as a percentage from 0 to 100, with higher values meaning a more light-blocking, less show-through-prone sheet. It is a contrast measurement based on how differently a sheet reflects over a dark backing versus a light backing."
    },
    {
      "q": "How is paper opacity measured?",
      "a": "Opacity is measured by comparing diffuse reflectance over a dark backing and over a light backing. ISO 2471 measures opacity with a paper backing using diffuse reflectance adjusted to CIE illuminant C, while TAPPI T 425 uses 15/d geometry under illuminant A/2° and provides both a paper-backing value and an 89% reflectance backing value known as the contrast ratio."
    },
    {
      "q": "Why do two papers of the same weight have different opacity?",
      "a": "Opacity depends on how strongly the sheet scatters and absorbs light, not on weight alone. Filler content (such as titanium dioxide, calcium carbonate, or clay), fiber furnish, coating, calendering, and dye load all change scattering and absorption. That is why a lightweight opaque grade can out-perform a heavier sheet, and why calendered or densified papers tend to be more translucent."
    },
    {
      "q": "What is the difference between opacity and show-through?",
      "a": "Opacity is a measurable property of the paper itself, describing how much light the sheet transmits. Show-through is the visible defect that occurs during use when insufficient opacity lets one side's image or text appear on the other side. Higher opacity reduces the likelihood of show-through, but they are distinct concepts and are covered in separate entries."
    },
    {
      "q": "Is opacity the same as brightness or whiteness?",
      "a": "No. Brightness and whiteness describe how much light a surface reflects and how neutral that reflection is, measured by standards such as ISO 2470-1, whereas opacity describes how much light the sheet transmits or blocks. A sheet can be very bright yet only moderately opaque, or the reverse, so the properties are specified independently."
    }
  ],
  "sources": [
    {
      "title": "ISO 2471:2008 — Paper and board — Determination of opacity (paper backing) — Diffuse reflectance method",
      "url": "https://www.iso.org/standard/39771.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "TAPPI T 425 — Opacity of paper (15/d geometry, illuminant A/2°, 89% reflectance backing and paper backing)",
      "url": "https://imisrise.tappi.org/TAPPI/Products/01/T/0104T425.aspx",
      "publisher": "TAPPI (Technical Association of the Pulp and Paper Industry)"
    },
    {
      "title": "ISO 2470-1:2016 — Paper, board and pulps — Measurement of diffuse blue reflectance factor — Part 1: Indoor daylight conditions (ISO brightness)",
      "url": "https://www.iso.org/standard/69090.html",
      "publisher": "International Organization for Standardization (ISO)"
    },
    {
      "title": "ISO 536:2019 — Paper and board — Determination of grammage",
      "url": "https://www.iso.org/standard/77583.html",
      "publisher": "International Organization for Standardization (ISO)"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "paper opacity",
    "opacity of paper",
    "iso 2471",
    "tappi t 425",
    "contrast ratio",
    "opaque paper",
    "show-through",
    "light scattering",
    "paper backing method",
    "print quality",
    "basis weight and opacity",
    "titanium dioxide filler"
  ],
  "cluster": "paper-technologies"
};

export default entry;
