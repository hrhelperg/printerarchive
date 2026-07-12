import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "paper-finish",
  "title": "Paper Finish & Calendering",
  "description": "Paper finish is a sheet's surface texture, smoothness, and gloss, largely set by calendering. Covers finish types, how they're measured, and their role in print.",
  "summary": "Paper finish describes the surface character of a sheet - its smoothness or roughness, texture, and gloss - which is largely established by calendering, a finishing operation that presses the paper web through roll nips under pressure (and often heat and moisture). This reference explains the main uncoated and coated finish grades, how surface smoothness and gloss are measured under named TAPPI and ISO methods, and how finish influences ink transfer and print quality. It is a descriptive overview of the media property itself and the process that produces it, distinct from specific print defects or printing processes covered elsewhere.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What paper finish and calendering are"
    },
    {
      "kind": "paragraph",
      "text": "Paper finish is the surface character of a sheet of paper or board: how smooth or rough its top surface is, whether it carries a texture or pattern, and how much it reflects light specularly (its gloss). Finish is a property of the media - it describes the structure of the sheet's surface rather than its basis weight, color, or fiber content, although it is related to those attributes."
    },
    {
      "kind": "paragraph",
      "text": "Calendering is the mechanical finishing operation that most directly determines finish. The continuous paper web is passed through one or more nips - the line of contact between a pair of pressed rolls - which compress and smooth the surface. The two words are often used together but describe different things: finish is the resulting property or grade, while calendering is the process that produces it."
    },
    {
      "kind": "paragraph",
      "text": "Finish is not created by calendering alone. It can also be established by coating (applying a mineral pigment layer that is then smoothed) and by embossing (pressing a raised or textured pattern into the sheet). Because of this, two sheets of the same weight can have very different finishes, and the same finish name can be reached by more than one route."
    },
    {
      "kind": "list",
      "items": [
        "Finish - the surface property or named grade (e.g., antique, machine finish, gloss).",
        "Calendering - the roll-nip pressing process used to raise smoothness and gloss.",
        "Coating / embossing - alternative or additional ways a finish is formed."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How calendering produces finish"
    },
    {
      "kind": "paragraph",
      "text": "Calendering works by pressing the sheet in a roll nip so that fiber and any surface coating are flattened and compacted, reducing surface irregularity. The result is a smoother, glossier surface and a thinner, denser sheet."
    },
    {
      "kind": "paragraph",
      "text": "There are two broad settings in which it is done. Machine calendering happens inline, at the dry end of the paper machine, using a stack of hard rolls; it yields a moderate, even finish often called machine finish. Supercalendering is a separate, off-machine operation that produces higher smoothness and gloss. A supercalender uses a vertical stack of rolls in which hard, polished steel rolls alternate with softer, resilient rolls (traditionally cotton or compressed-fiber rolls, and in modern machines often polymer-covered rolls). The difference in hardness between adjacent rolls, together with slip in the nip, works the surface more intensively than a hard-roll stack alone."
    },
    {
      "kind": "paragraph",
      "text": "Several variables control the outcome, including nip pressure, the number of nips, roll temperature, and the sheet's moisture content. Soft-nip and hot (thermal) calendering are common variants that aim to raise smoothness and gloss while limiting the loss of thickness."
    },
    {
      "kind": "paragraph",
      "text": "Calendering involves trade-offs. Increasing it raises surface smoothness and gloss, but it also compresses the sheet, reducing its caliper (thickness) and bulk and densifying it. Over-calendering can lower opacity and stiffness and can leave the sheet more prone to distortions when moisture changes. For this reason a finish is normally chosen as a balance of properties rather than simply maximized."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Types and grades of finish"
    },
    {
      "kind": "paragraph",
      "text": "Finish grades fall into two families - uncoated and coated - and within each there are conventional names. These names describe relative surface character; the exact appearance and any numeric ranges vary by mill and region, so the labels should be read as conventions rather than universal specifications."
    },
    {
      "kind": "paragraph",
      "text": "Uncoated finishes (from rougher/bulkier to smoother), in roughly increasing order of calendering:"
    },
    {
      "kind": "list",
      "items": [
        "Antique / eggshell - lightly finished, relatively rough and bulky, with a soft surface.",
        "Vellum - a smooth but still toothy, matte surface.",
        "Machine finish (MF) - the moderate finish produced inline on the paper machine's calender stack.",
        "English finish (EF) - smoother than machine finish, produced with additional calendering.",
        "Supercalendered (SC) - high smoothness and gloss from off-machine supercalendering."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Textured and decorative finishes are pressed or formed into the sheet rather than simply smoothed - for example laid, wove, linen, felt-marked, and other embossed patterns. These deliberately add surface character rather than remove it."
    },
    {
      "kind": "paragraph",
      "text": "Coated finishes carry a pigment coating whose surface is then worked to a target level:"
    },
    {
      "kind": "list",
      "items": [
        "Matte / dull - low gloss, a coated surface that stays flat in reflectance.",
        "Satin / silk - an intermediate sheen between matte and gloss.",
        "Gloss - high specular reflectance.",
        "Cast-coated - among the highest-gloss finishes, formed by drying the coating against a polished surface."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The distinction between coated and uncoated media is closely tied to finish and is treated in more depth in the coated-versus-uncoated reference."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Measuring smoothness and gloss"
    },
    {
      "kind": "paragraph",
      "text": "Because \"finish\" bundles several attributes, it is not captured by one number. Instead, the two most measured components - surface smoothness/roughness and gloss - each have their own standardized test methods, and results are only comparable within the same method."
    },
    {
      "kind": "paragraph",
      "text": "Smoothness / roughness is most commonly measured by air-leak (air-resistance) methods. These gauge how easily air escapes from between the sheet and a smooth reference surface pressed against it: a smoother sheet lets less air through. Widely used air-leak methods include Bekk (standardized as ISO 5627), Sheffield, Bendtsen, and Parker Print Surf (standardized as TAPPI T 555). Parker Print Surf is designed so that its clamp pressures and measuring geometry simulate conditions in a printing nip. Optical profilometry and surface-topography techniques are also used to characterize the surface directly."
    },
    {
      "kind": "paragraph",
      "text": "Gloss is measured photometrically - the amount of light reflected specularly at a fixed illumination-and-viewing geometry. For paper, gloss is commonly measured at a 75-degree geometry (for example, TAPPI T 480). Reported gloss units depend on the geometry and method, so comparisons must hold the method constant."
    },
    {
      "kind": "paragraph",
      "text": "These methods define how to measure, not a required value. There is no single universal target for smoothness or gloss; appropriate values depend on the grade and the intended printing process."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related standardized media properties"
    },
    {
      "kind": "paragraph",
      "text": "Finish rarely acts alone. It is chosen alongside other measurable properties of the media, most of which are defined by named international standards. Naming a standard here indicates what it governs and how the property is measured; it does not imply any particular numeric value, which varies by grade."
    },
    {
      "kind": "list",
      "items": [
        "Grammage (basis weight) - mass per unit area, expressed in grams per square metre. Its determination is specified by ISO 536.",
        "Caliper (thickness) and bulk - directly affected by calendering, since pressing the sheet reduces thickness and densifies it. These dimensions are discussed in the paper-weight-and-caliper reference.",
        "ISO brightness - the diffuse blue reflectance factor of paper, board, and pulp, measured under the method of ISO 2470 (with parts covering different illumination conditions).",
        "Opacity - the extent to which a sheet blocks light from what is behind it, determined by the diffuse-reflectance method of ISO 2471.",
        "Trimmed sizes - the A and B series are defined by ISO 216 (in which A0 is defined to have an area of one square metre before rounding); the related C (envelope) series was historically defined by ISO 269 and is now aligned with the ISO 216 family."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Calendering interacts with several of these: increasing it tends to reduce caliper and bulk and can lower opacity and brightness even as it raises smoothness and gloss, which is why finish selection is a balancing exercise across the whole property set."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in printing and print quality"
    },
    {
      "kind": "paragraph",
      "text": "Finish matters in printing because it governs how ink or toner meets the surface. A smoother, more calendered or coated surface improves ink holdout - ink and pigment sit on top of the sheet rather than being absorbed or wicking into the fiber - which supports sharper halftone dots, higher print gloss, more uniform solid areas, and better reproduction of fine detail. These effects are especially relevant to offset and gravure printing."
    },
    {
      "kind": "paragraph",
      "text": "Surface smoothness also influences dot gain: on a smoother surface, halftone dots tend to spread less mechanically, so tone reproduction is more controlled. This relationship is covered in the dot-gain reference. A rougher, uncoated finish absorbs more ink and generally yields a softer image, but it is often preferred where writability, a matte non-glare surface, high bulk, or particular toner behavior is wanted."
    },
    {
      "kind": "paragraph",
      "text": "Different printing processes place different demands on finish. Inkjet relies on controlled absorption and, for photo-quality output, on receptive coatings, so the substrate's surface chemistry and porosity matter as much as its smoothness (see the inkjet-printing and inkjet-photo-paper references). Electrophotographic (laser) printing fuses toner onto the surface under heat and pressure, so surface uniformity and heat response are relevant. Because calendering densifies the sheet, an over-finished stock can also be more sensitive to moisture-driven distortion; the resulting curl is treated as a separate defect topic."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relation to adjacent concepts and page boundaries"
    },
    {
      "kind": "paragraph",
      "text": "This reference covers the media property (finish) and the process (calendering) that produces it. Several closely related topics are handled separately to avoid duplication:"
    },
    {
      "kind": "list",
      "items": [
        "Defects describe failures of the printed result rather than the finish itself. Paper curl is a dimensional distortion of the sheet; show-through and print mottle are appearance defects. These are documented in their own defect references; this page instead describes the surface property that can influence them.",
        "Printing processes - inkjet, laser/electrophotography, and dye-sublimation - are methods that act on a finished substrate. Finish is an attribute of the media those processes print onto, not one of the processes.",
        "Other media dimensions - weight and caliper, opacity, brightness and whiteness, coated versus uncoated construction, and trimmed sizes - are related properties measured by their own standards. Finish is specifically the surface dimension of the sheet, and it is normally specified together with these other dimensions when a grade is chosen."
      ]
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
      "slug": "coated-vs-uncoated-paper"
    },
    {
      "section": "guides",
      "slug": "paper-brightness-and-whiteness"
    },
    {
      "section": "guides",
      "slug": "paper-weight-and-caliper"
    },
    {
      "section": "guides",
      "slug": "paper-opacity"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between paper finish and calendering?",
      "a": "Finish is the property - a sheet's surface smoothness, texture, and gloss. Calendering is the mechanical process that produces a given finish by pressing the paper web through roll nips. Coating and embossing can also create finishes, so calendering is one route to a finish rather than the only one."
    },
    {
      "q": "How is paper smoothness measured?",
      "a": "Most commonly by air-leak (air-resistance) methods - Bekk (ISO 5627), Sheffield, Bendtsen, and Parker Print Surf (TAPPI T 555) - which measure how easily air escapes between the sheet and a smooth reference surface; smoother sheets leak less. Gloss is measured photometrically at a fixed geometry, commonly 75 degrees for paper. Results are method-specific and only comparable within the same method."
    },
    {
      "q": "Does calendering change other paper properties?",
      "a": "Yes. More intensive calendering raises surface smoothness and gloss but also compresses the sheet, reducing caliper (thickness) and bulk and densifying it, and it can lower opacity and stiffness. Because of these trade-offs, a finish is normally chosen as a balance across properties rather than simply maximized."
    },
    {
      "q": "How does finish affect print quality?",
      "a": "Smoother, more calendered or coated surfaces improve ink holdout, sharpen halftone dots, raise print gloss, give more uniform solids, and generally reduce mechanical dot gain. Rougher, uncoated finishes absorb more ink and produce a softer image but are often preferred for writability, a non-glare surface, or high bulk."
    },
    {
      "q": "What standards govern paper finish and related properties?",
      "a": "There is no single universal finish number. Related media properties are standardized instead: grammage by ISO 536, ISO brightness by ISO 2470, opacity by ISO 2471, and trimmed sizes by ISO 216, while smoothness and gloss use test methods such as Parker Print Surf (TAPPI T 555). These standards define how a property is measured, not a required value."
    }
  ],
  "sources": [
    {
      "title": "Calendering",
      "url": "https://www.britannica.com/technology/calendering",
      "publisher": "Encyclopaedia Britannica"
    },
    {
      "title": "Papermaking - Paper grades",
      "url": "https://www.britannica.com/technology/papermaking/Paper-grades",
      "publisher": "Encyclopaedia Britannica"
    },
    {
      "title": "Supercalendered finish",
      "url": "https://www.britannica.com/topic/supercalendered-finish",
      "publisher": "Encyclopaedia Britannica"
    },
    {
      "title": "ISO 536:2019 - Paper and board - Determination of grammage",
      "url": "https://www.iso.org/standard/77583.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 2470-2:2008 - Measurement of diffuse blue reflectance factor - Part 2: D65 brightness",
      "url": "https://www.iso.org/standard/38053.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 2471:2008 - Paper and board - Determination of opacity (paper backing)",
      "url": "https://www.iso.org/standard/39771.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "ISO 216:2007 - Trimmed sizes - A and B series, and indication of machine direction",
      "url": "https://www.iso.org/standard/36631.html",
      "publisher": "International Organization for Standardization"
    },
    {
      "title": "TAPPI T 555 - Parker Print-Surf roughness",
      "url": "https://ipstesting.com/find-a-test/tappi-test-methods/tappi-t-555-parker-print-surf/",
      "publisher": "SGS-IPS Testing"
    },
    {
      "title": "ISO 2470-1 - Measurement of diffuse blue reflectance factor - Part 1: Indoor daylight conditions (ISO brightness)",
      "url": "https://ipstesting.com/find-a-test/iso-test-methods/iso-2470-1-brightness-c-illuminant/",
      "publisher": "SGS-IPS Testing"
    },
    {
      "title": "ISO 5627 - Paper and board - Determination of smoothness (Bekk method)",
      "url": "https://industrialphysics.com/standards/iso-5627/",
      "publisher": "Industrial Physics"
    },
    {
      "title": "TAPPI T 480 - Specular gloss of paper and paperboard at 75 degrees",
      "url": "https://ipstesting.com/find-a-test/tappi-test-methods/tappi-t-480-gloss/",
      "publisher": "SGS-IPS Testing"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "paper finish",
    "calendering",
    "supercalender",
    "paper smoothness",
    "paper gloss",
    "machine finish",
    "english finish",
    "coated paper finish",
    "uncoated paper finish",
    "parker print surf",
    "paper surface texture",
    "print quality substrate"
  ],
  "cluster": "paper-technologies"
};

export default entry;
