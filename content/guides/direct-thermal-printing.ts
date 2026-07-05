import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "direct-thermal-printing",
  "title": "Direct Thermal Printing",
  "description": "History and technology of direct thermal printing: heat-sensitive coated media, no ink or ribbon, and its role in receipts, labels, and tickets.",
  "summary": "Direct thermal printing is a non-impact digital process in which a thermal printhead applies heat directly to heat-sensitive coated media, triggering a chemical color change that forms text, barcodes, and images without ink, toner, or ribbon. Descended from 1930s heat-recording and 1950s thermal copying, it matured with leucopigment chemistry in the 1960s and reached data terminals in the 1971 Texas Instruments Silent 700. Simple and low-maintenance, it dominates receipts, shipping labels, and tickets, but its images fade under heat, light, and abrasion, making it unsuitable for permanent or archival use.",
  "difficulty": "intermediate",
  "estimatedTime": "7 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Direct thermal printing descends from a long lineage of heat-based recording. According to Wikipedia's \"Thermal printing\" article, heat-sensitive recording was first used in the 1930s in electrocardiograph (ECG) recorders. In 1950, the same broad family of heat imaging was applied by 3M in its Thermofax copying machine — a thermal copying process that is best understood as a precursor to, rather than an example of, modern direct thermal printing."
    },
    {
      "kind": "paragraph",
      "text": "The chemistry that underlies contemporary direct thermal media took shape in the 1960s. Wikipedia records that earlier, unreliable formulations were replaced by a better process based on leucopigments (leuco dyes), first introduced by NCR Corporation for military communications in the 1960s. This leuco-dye family remains the basis of thermal paper today."
    },
    {
      "kind": "paragraph",
      "text": "The thermal printhead as a semiconductor device is credited to Jack Kilby of Texas Instruments. Wikipedia's biography of Kilby states that he \"was also a co-inventor of the handheld calculator and the thermal printer, for which he had the patents.\" The relevant patent is documented on Google Patents as U.S. Patent 3,496,333, \"Thermal printer\", with inventors Earl G. Alexander, Stephen P. Emmons, and Jack S. Kilby, assigned to Texas Instruments and granted February 17, 1970. The granted patent was filed September 26, 1968, as a continuation of an earlier application dated October 1, 1965."
    },
    {
      "kind": "paragraph",
      "text": "The first widely documented commercial thermal-printing product to use heat-sensitive paper was the Texas Instruments Silent 700 data terminal. Both Wikipedia and the Computer History Museum date its introduction to 1971. It printed with a 5 x 7 dot-matrix heating element onto a roll of heat-sensitive paper. The Silent 700 communicated at 30 characters per second through an integral acoustically coupled modem; that figure describes the data/communication rate rather than a stated print speed. Neither the Wikipedia article nor the museum record describes the Silent 700 as the first thermal printer, so it is best characterized as the first widely documented commercial product of its kind."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Direct thermal printing relies on two elements: a thermochromic (heat-sensitive) coating on the media, and a thermal printhead carrying an array of tiny, individually addressable resistive heating elements."
    },
    {
      "kind": "paragraph",
      "text": "According to Wikipedia's \"Thermal paper\" article, the media's active coating is a solid-state mixture containing:"
    },
    {
      "kind": "list",
      "items": [
        "a leuco dye — usually triaryl-methane phthalide dyes or fluoran dyes — which is colorless in its normal crystalline state;",
        "a developer, an organic acid such as bisphenol A (BPA) or bisphenol S (BPS);",
        "a sensitizer, often simple ether molecules that melt at approximately 100 degrees Celsius, which tunes the activation temperature; and",
        "frequently a protective topcoat to resist UV light, water, oils and fats, and plasticizers, and to reduce printhead wear."
      ]
    },
    {
      "kind": "paragraph",
      "text": "As the paper passes over the printhead, selected elements heat individual spots. The heat melts the coating's matrix, allowing the dye to react with the acidic developer and shift into its colored form. Rapid cooling then \"freezes\" the dye in its colored state, producing the printed mark. Most media turn black, though some coatings produce other colors and two-color papers exist that react at different temperature thresholds. No ribbon, ink, or toner is consumed — only the coated media and the electrical energy that generates heat."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "paragraph",
      "text": "The technology evolved in overlapping stages, each documented by Wikipedia and the Computer History Museum:"
    },
    {
      "kind": "list",
      "items": [
        "Recording origins (1930s): heat-based marking appeared in ECG chart recorders.",
        "Thermal copying (1950): 3M's Thermofax brought heat imaging into offices as a precursor chemistry.",
        "Chemistry maturation (1960s): NCR-associated work and the shift to leucopigment/leuco-dye systems greatly improved reliability.",
        "Semiconductor printhead: the Kilby-era Texas Instruments work made compact, silent, ribbonless printing practical.",
        "Commercial terminals (1971): the TI Silent 700 series brought thermal printing to data terminals in a small, quiet, portable form.",
        "POS and labeling era: thermal paper became standard for cash registers, adding machines, and credit-card terminals, and direct thermal later became a mainstay of barcode and shipping-label printing.",
        "Media improvements: protective topcoats and more stable formulations extended legibility and durability beyond the earliest papers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented advantages of direct thermal printing are qualitative:"
    },
    {
      "kind": "list",
      "items": [
        "No ribbon, ink, or toner to buy, load, monitor, or replace, which reduces consumables and supply complexity (Zebra; Wikipedia).",
        "Mechanical and operational simplicity, since the media is effectively the only active consumable, making printers easy to operate and maintain (Zebra).",
        "Quieter and generally faster than impact/dot-matrix printers, with printers that are smaller, lighter, and lower-power (Wikipedia).",
        "Well-suited to short-lifespan output such as receipts, tickets, and shipping labels, where permanence is not required (Zebra)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "No print speeds, resolutions, prices, or benchmark figures are asserted here, because the authoritative sources present these advantages qualitatively."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Disadvantages"
    },
    {
      "kind": "paragraph",
      "text": "The trade-offs are likewise documented qualitatively:"
    },
    {
      "kind": "list",
      "items": [
        "Image fading and limited longevity: the leuco dyes are often unstable and revert toward their colorless crystalline form, especially when stored in hot or humid conditions (Wikipedia).",
        "Environmental sensitivity: printed media is vulnerable to heat, light (including UV and sunlight), oils and fats, plasticizers, water, and abrasion, any of which can render it unreadable (Wikipedia; Zebra).",
        "Not for permanent or archival use: unsuitable where labels must last long-term or survive harsh conditions (Zebra).",
        "Typically monochrome: most systems print a single color, usually black, and multi-color capability is limited (Wikipedia).",
        "Health and regulatory concerns with developers: BPA can transfer from receipts to skin. Wikipedia notes measurable transfer on contact — roughly ten times more to wet or greasy fingers than to dry ones — and records that Suffolk County, New York, banned BPA in thermal receipt paper effective January 3, 2014."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Direct thermal remains the standard for high-volume, short-lived printed output. Common applications documented by Zebra and Wikipedia include:"
    },
    {
      "kind": "list",
      "items": [
        "Point-of-sale receipts from cash registers, credit-card and EFTPOS terminals, and adding machines;",
        "Shipping and logistics labels, including carrier and e-commerce shipping labels;",
        "Tickets and wristbands, and patient or visitor identification labels;",
        "Barcode labels intended for short-term use in retail and warehousing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "It is generally chosen over thermal transfer when the label or receipt does not need to survive long or endure harsh handling."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "paragraph",
      "text": "Thermal transfer printing is the closest sibling and the standard point of contrast. Instead of reacting a coating within the paper, thermal transfer uses the printhead to melt a wax- or resin-based ribbon, transferring pigment onto the media so that the image becomes part of the media. According to Zebra, this yields far more durable, long-lasting images that resist heat, moisture, UV, chemicals, sterilization, and rubbing, and it works on a wide variety of substrates including paper, plastic, and polyester. Direct thermal uses no ribbon, whereas thermal transfer requires and consumes one. The rule of thumb from the sources is direct thermal for short-lifespan needs and thermal transfer for durable or archival needs."
    },
    {
      "kind": "paragraph",
      "text": "Impact and dot-matrix printing is the older receipt and terminal technology that direct thermal displaced in many uses; Wikipedia notes thermal printing is quieter, faster, lighter, and lower-power."
    },
    {
      "kind": "paragraph",
      "text": "Dye-sublimation (thermal dye transfer) is a related heat-driven, ribbon-based photo-printing method — distinct from direct thermal, which uses no ribbon."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Several manufacturers are documented in connection with the technology's development:"
    },
    {
      "kind": "list",
      "items": [
        "Texas Instruments is associated with the semiconductor thermal printhead, through Jack Kilby and U.S. Patent 3,496,333, and with the Silent 700 thermal terminal (Wikipedia; Computer History Museum).",
        "NCR Corporation is associated with early thermal imaging chemistry, having introduced the leucopigment process for military communications in the 1960s (Wikipedia).",
        "3M is associated with the Thermofax thermal copying precursor around 1950 (Wikipedia)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Among current vendors, Zebra Technologies publicly documents direct-thermal product lines and the direct-thermal versus thermal-transfer distinction in its technical materials. Other vendors, including Brother and Citizen Systems, and Epson in the point-of-sale receipt segment, are widely associated with direct thermal printing, though specific modern model-line names are not documented here against a first-tier historical or technical source."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "paragraph",
      "text": "The Texas Instruments Silent 700 series is the best-documented family of direct-thermal terminals. Wikipedia records that the series included models such as the Model 725, Model 745, and later 780-series terminals, all of which printed onto a roll of heat-sensitive paper. The Computer History Museum catalogs a Silent 700 Model 745 with a built-in thermal printer."
    },
    {
      "kind": "paragraph",
      "text": "Modern direct-thermal receipt lines and label printers exist and are widely marketed by contemporary vendors, but specific current model-line names are not asserted here, as they were not confirmed against a first-tier historical or technical source in the material underlying this page."
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
          "period": "1930s",
          "text": "Heat-sensitive recording used in electrocardiograph recorders (Wikipedia)."
        },
        {
          "period": "1950",
          "text": "3M Thermofax brings thermal (heat) copying into offices as a precursor chemistry (Wikipedia)."
        },
        {
          "period": "1960s",
          "text": "NCR introduces the leucopigment (leuco-dye) process for military communications (Wikipedia)."
        },
        {
          "period": "October 1, 1965",
          "text": "Original application later continued in the Texas Instruments thermal-printer patent is filed (Google Patents)."
        },
        {
          "period": "September 26, 1968",
          "text": "The granted thermal-printer patent (U.S. 3,496,333) is filed as a continuation (Google Patents)."
        },
        {
          "period": "February 17, 1970",
          "text": "U.S. Patent 3,496,333, \"Thermal printer\" (Alexander, Emmons, Kilby; Texas Instruments), is granted (Google Patents)."
        },
        {
          "period": "1971",
          "text": "Texas Instruments introduces the Silent 700; it prints via a 5 x 7 dot-matrix heating element onto heat-sensitive paper and communicates at 30 characters per second through an acoustically coupled modem (Wikipedia; Computer History Museum)."
        },
        {
          "period": "January 3, 2014",
          "text": "Suffolk County, New York, ban on BPA in thermal receipt paper takes effect (Wikipedia)."
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
      "slug": "thermal-transfer-printing"
    },
    {
      "section": "history",
      "slug": "thermal-printing-history"
    },
    {
      "section": "glossary",
      "slug": "thermal-printing"
    },
    {
      "section": "history",
      "slug": "how-impact-printing-worked"
    },
    {
      "section": "history",
      "slug": "dot-matrix-printers-explained"
    },
    {
      "section": "workflows",
      "slug": "print-shipping-labels"
    }
  ],
  "faqs": [
    {
      "q": "Does direct thermal printing use ink or toner?",
      "a": "No. Direct thermal printing uses no ink, toner, or ribbon. The image-forming chemistry is built into a heat-sensitive coating on the media itself; a thermal printhead applies heat that triggers a color change in the coating."
    },
    {
      "q": "Why do direct thermal receipts and labels fade?",
      "a": "The coating uses leuco dyes that are often unstable and revert toward their colorless crystalline form, especially in hot or humid storage. Printed media is also sensitive to light, oils, plasticizers, water, and abrasion, so it is unsuitable for permanent or archival use."
    },
    {
      "q": "What is the difference between direct thermal and thermal transfer printing?",
      "a": "Direct thermal reacts a heat-sensitive coating in the paper and uses no ribbon. Thermal transfer melts a wax- or resin-based ribbon to transfer pigment onto the media, producing far more durable images that resist heat, moisture, UV, chemicals, and rubbing. Direct thermal suits short-lifespan output; thermal transfer suits durable needs."
    },
    {
      "q": "When did direct thermal printing first appear?",
      "a": "Heat-sensitive recording dates to the 1930s in electrocardiograph recorders, with 3M's Thermofax thermal copying appearing in 1950. The leucopigment chemistry behind modern thermal paper was introduced by NCR in the 1960s, and the Texas Instruments Silent 700 terminal brought thermal printing to data terminals in 1971."
    },
    {
      "q": "Who invented the thermal printhead?",
      "a": "Jack Kilby of Texas Instruments is credited as a co-inventor of the thermal printer. The relevant U.S. Patent 3,496,333, \"Thermal printer,\" lists inventors Earl G. Alexander, Stephen P. Emmons, and Jack S. Kilby, was assigned to Texas Instruments, and was granted February 17, 1970."
    }
  ],
  "sources": [
    {
      "title": "Thermal printing",
      "url": "https://en.wikipedia.org/wiki/Thermal_printing",
      "publisher": "Wikipedia"
    },
    {
      "title": "Thermal paper",
      "url": "https://en.wikipedia.org/wiki/Thermal_paper",
      "publisher": "Wikipedia"
    },
    {
      "title": "Silent 700",
      "url": "https://en.wikipedia.org/wiki/Silent_700",
      "publisher": "Wikipedia"
    },
    {
      "title": "Jack Kilby",
      "url": "https://en.wikipedia.org/wiki/Jack_Kilby",
      "publisher": "Wikipedia"
    },
    {
      "title": "US3496333A — Thermal printer (Alexander, Emmons, Kilby; Texas Instruments)",
      "url": "https://patents.google.com/patent/US3496333A/en",
      "publisher": "Google Patents"
    },
    {
      "title": "Texas Instruments Silent 700 terminal (Model 745), X1612.99",
      "url": "https://www.computerhistory.org/collections/catalog/X1612.99",
      "publisher": "Computer History Museum"
    },
    {
      "title": "What Is the Difference Between Direct Thermal and Thermal Transfer Printing?",
      "url": "https://www.zebra.com/us/en/resource-library/faq/difference-between-direct-thermal-and-thermal-transfer-printing.html",
      "publisher": "Zebra Technologies"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "direct thermal printing",
    "thermal printing",
    "thermal paper",
    "heat-sensitive paper",
    "leuco dye",
    "thermal printhead",
    "direct thermal vs thermal transfer",
    "texas instruments silent 700",
    "point-of-sale receipts",
    "shipping labels",
    "bpa thermal paper",
    "non-impact printing"
  ],
  "cluster": "printing-technology"
};

export default entry;
