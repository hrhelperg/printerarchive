import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "inkjet-printing",
  "title": "Inkjet Printing",
  "description": "Inkjet printing history, technology, and manufacturers: continuous inkjet, thermal bubble-jet, and piezoelectric drop-on-demand explained.",
  "summary": "Inkjet printing is a non-impact technology that forms images by propelling tiny droplets of liquid ink directly onto a substrate. Its lineage runs from mid-20th-century continuous-jet chart recorders through charged-droplet continuous inkjet to the drop-on-demand systems — thermal (bubble-jet) and piezoelectric — that made low-cost desktop color printing possible. It is the dominant consumer printing technology and spans photography, fine art, wide-format, industrial, and functional deposition applications.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Overview"
    },
    {
      "kind": "paragraph",
      "text": "Inkjet printing is a non-impact printing technology in which images and text are formed by propelling small droplets of liquid ink directly onto a substrate — paper, film, textile, ceramic, and many other materials. Because it lays down ink without a master image carrier (unlike offset lithography) and without an impact mechanism (unlike dot-matrix), it is inherently digital and highly flexible in what it can print on."
    },
    {
      "kind": "paragraph",
      "text": "Two broad families exist. Continuous inkjet (CIJ) produces an unbroken stream of charged droplets that are steered electrostatically. Drop-on-demand (DOD) ejects droplets only when they are needed; within DOD, the two dominant architectures are thermal (bubble-jet) and piezoelectric. Inkjet is the dominant consumer and home printing technology and is also used across photography, fine art, and large industrial and wide-format applications."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "list",
      "items": [
        "Continuous-jet origins (late 1940s–1951): Swedish inventor Rune Elmqvist patented a chart-recorder mechanism in which a fine glass tube emitted a continuous jet of ink to trace a line on moving paper, work he later applied to recording electrocardiograms. His patent (US2566443) was issued in 1951, and Siemens is documented as introducing early commercial continuous-inkjet devices — medical strip-chart recorders — around that time."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Charged-droplet continuous inkjet (1965): Richard G. Sweet of Stanford University developed a chart recorder in which the ink jet was broken into a uniform stream of electrically charged droplets that could be deflected by electrodes — the basis of modern CIJ."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Commercial CIJ (1976): IBM adapted continuous-inkjet technology into a commercial printer, the IBM 6640, documented as reaching market in 1976 and among the first office continuous-inkjet printers. Earlier continuous-inkjet devices, such as the A. B. Dick Videojet (from 1969), predate it."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Piezoelectric drop-on-demand (1970s): DOD using piezoelectric actuators was pioneered by several groups. Steven Zoltan (Clevite) received a foundational squeeze-mode piezo DOD patent in 1972; Stemme (Chalmers) received a related bend-type patent in 1973; and Kyser & Sears (Silonics) disclosed a bend-mode design in 1976. The first commercial DOD printer is documented as the Siemens PT-80, which used piezoelectric actuators and reached market in the late 1970s (commonly cited as 1977)."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Thermal inkjet (independent invention, 1977–1978): The thermal (bubble-jet) principle was developed independently by two groups. At Canon in Tokyo, the idea is documented as originating from an accidental observation — a hot soldering iron touched a syringe needle holding ink, causing ink to spurt out — and Canon filed a basic thermal-inkjet patent application in October 1977. Working independently, a team at Hewlett-Packard's Corvallis division arrived at the same principle by 1978. Canon's Ichiro Endo and HP's John Vaught were jointly recognized with the Edwin H. Land Medal in 1995 for their independent inventions of bubble-jet and thermal ink-jet technology."
      ]
    },
    {
      "kind": "list",
      "items": [
        "First commercial thermal/DOD desktop printers (1980s): HP's ThinkJet reached the desktop market in 1984. Canon launched its first Bubble Jet printer, the BJ-80, in December 1985."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Epson Micro Piezo (early 1990s): Epson's Micro Piezo printhead line was commercialized with the Epson Stylus 800 (sold in Japan as the MJ-500), documented as going on sale in 1993 as the first product to use a Micro Piezo head."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Continuous inkjet (CIJ): A pump forces ink under pressure through a microscopic nozzle, producing a continuous stream. The stream naturally breaks into a regular train of droplets via Plateau–Rayleigh instability. Each droplet passes through a charging electrode and then between electrostatic deflection plates; charged drops are steered either onto the substrate or into a gutter for recirculation. Because the jet runs continuously, most drops are recycled and the ink solvent must be actively regulated."
    },
    {
      "kind": "paragraph",
      "text": "Drop-on-demand (DOD): Ink is ejected from each nozzle chamber only when a drop is required, using one of two actuation methods."
    },
    {
      "kind": "list",
      "items": [
        "Thermal (bubble-jet): A tiny resistor or heating element inside the nozzle chamber flash-boils a thin layer of ink, forming a rapidly expanding vapor bubble. The bubble's expansion forces a droplet out of the nozzle; as the bubble collapses, capillary action refills the chamber."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Piezoelectric: A piezoelectric element — typically PZT (lead zirconium titanate) — deforms when a voltage is applied, mechanically squeezing the ink chamber to generate a pressure pulse that ejects a droplet. No heat is applied to the ink."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "paragraph",
      "text": "Inkjet evolved from analog chart recorders (Elmqvist, Sweet) into commercial continuous-inkjet systems (IBM, 1970s), then into drop-on-demand systems that made low-cost desktop printing possible in the 1980s. Thermal DOD (HP ThinkJet, 1984; Canon BJ-80, 1985) and piezoelectric DOD (Epson Micro Piezo, early 1990s) drove the consumer market."
    },
    {
      "kind": "paragraph",
      "text": "Over subsequent decades the technology diversified into photo-quality printing (multi-ink sets and pigment inks), wide-format and industrial printing, and — through refillable high-capacity \"supertank\" systems such as Epson EcoTank, Canon MegaTank, and HP Smart Tank — a shift away from the traditional cartridge model in part of the market. Inkjet deposition also expanded well beyond graphics into functional and industrial uses."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "list",
      "items": [
        "Non-impact and quiet relative to dot-matrix and daisywheel printers."
      ]
    },
    {
      "kind": "list",
      "items": [
        "High resolution and fine detail achievable, making it suitable for photographic and fine-art output."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Practically no warm-up time."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Low hardware entry cost, which helped make desktop color printing widely affordable compared with laser printers of the era."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Substrate and application versatility: prints on many materials and scales, from photo paper to wide-format banners, textiles, ceramics, and optical media."
      ]
    },
    {
      "kind": "list",
      "items": [
        "CIJ-specific: high drop velocity, the ability to jet across a longer standoff distance, and reduced susceptibility to nozzle clogging because the jet runs continuously."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Piezo-specific: compatibility with a wider range of ink chemistries, because the ink is not heated and need not be a heat-tolerant, volatile formulation."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Disadvantages"
    },
    {
      "kind": "list",
      "items": [
        "Nozzle clogging: the very narrow nozzles are prone to clogging, and periodic head-cleaning cycles themselves consume ink."
      ]
    },
    {
      "kind": "list",
      "items": [
        "High OEM ink cost per unit volume, along with cartridge microchips that can prevent refilling or report a cartridge as empty while ink remains."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Moisture and smear sensitivity of water-soluble and dye-based inks; low-quality inks can smudge."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Variable archival durability, depending on ink and paper quality; dye-based inks fade faster than pigment-based inks, and low-quality paper degrades."
      ]
    },
    {
      "kind": "list",
      "items": [
        "CIJ-specific: requires active solvent regulation and recirculation hardware, and most drops are recycled rather than printed."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Thermal-specific: heating stresses the ink and generally limits it to heat-tolerant, largely water-based formulations."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Piezo-specific: printheads are more expensive to manufacture (costly PZT material) and are typically built as long-life fixed heads, so damage can be costly to remedy."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "list",
      "items": [
        "Consumer, home, and SOHO: the dominant home printing technology; multifunction photo printers use expanded ink sets, documented as up to six inks on some Canon and Epson consumer models."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Photography and fine art: photo-quality and fine-art printing, including pigment-ink systems and high ink-count professional photo printers. The highest-quality fine-art inkjet prints are commonly called giclée prints."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Wide-format and industrial: advertising graphics, billboards, vehicle wraps, banners, textiles, ceramics, and optical media, using aqueous, solvent, eco-solvent, and UV-curable inks."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Refillable \"supertank\" systems: Epson EcoTank, Canon MegaTank, and HP Smart Tank."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Functional and emerging deposition: additive manufacturing and 3D printing, PCB solder-paste and conductive-circuit deposition, printed organic electronics (thin-film transistors, OLEDs, solar cells), bioprinting of living cells, and edible-ink printing."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "list",
      "items": [
        "Versus laser (electrophotography): the two dominant digital office and home printing technologies. Inkjet typically has lower-cost hardware and is better suited to photographic color, while laser is toner-based and historically favored for high-volume text."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Versus dot-matrix and daisywheel (impact): inkjet is non-impact, quieter, and higher-resolution."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Descends from analog chart recorders: the earliest inkjet lineage is the continuous-jet chart recorder of Elmqvist and Sweet."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Enables additive and functional processes: inkjet drop deposition underpins parts of 3D printing and printed electronics and bioprinting, extending it beyond 2D graphics."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Related deposition variants documented alongside inkjet include solid or hot-melt (phase-change) ink and dye-sublimation printing."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "list",
      "items": [
        "Canon — independent co-inventor of thermal (Bubble Jet); associated with thermal DOD and the FINE cartridge system."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Hewlett-Packard (HP) — independent co-inventor of thermal inkjet; brought thermal DOD to the desktop with the ThinkJet."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Epson — principal developer and vendor of piezoelectric DOD for the desktop, marketed as Micro Piezo."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Brother — documented among the four leading inkjet vendors, using piezoelectric heads."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Lexmark — documented user of thermal inkjet."
      ]
    },
    {
      "kind": "list",
      "items": [
        "IBM — early commercializer of continuous inkjet."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Siemens — introduced the first commercial DOD printer, the PT-80."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Wikipedia states that four manufacturers account for the majority of inkjet printer sales: Canon, HP, Epson, and Brother. Additional companies documented in wide-format and industrial printing include Kodak, Konica Minolta, Fujifilm, EFI, Durst, Roland DG, Mimaki, and Mutoh."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "paragraph",
      "text": "Documented product-line names tied to inkjet technology:"
    },
    {
      "kind": "list",
      "items": [
        "HP: ThinkJet, DeskJet, OfficeJet and OfficeJet Pro, Designjet (wide-format), PageWide, and Smart Tank."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Canon: Bubble Jet / BJ series (e.g., BJ-80), the PIXMA line with FINE cartridges, and MegaTank."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Epson: Stylus (e.g., Stylus 800 with Micro Piezo) and EcoTank."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Siemens: PT-80, the first commercial DOD printer."
      ]
    },
    {
      "kind": "list",
      "items": [
        "IBM: 6640 (continuous inkjet)."
      ]
    },
    {
      "kind": "list",
      "items": [
        "Kodak (formerly Scitex Digital Printing) industrial: Versamark VJ1000, VT3000, and VX5000."
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
          "period": "Late 1940s",
          "text": "Rune Elmqvist develops a continuous-jet chart-recorder mechanism (later applied to ECG recording); patent US2566443 is issued in 1951."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "~1951",
          "text": "Siemens introduces early commercial continuous-inkjet chart recorders based on Elmqvist's patent."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1965",
          "text": "Richard G. Sweet (Stanford) develops charged-droplet continuous inkjet with electrostatic deflection."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1972",
          "text": "Steven Zoltan (Clevite) receives a foundational piezoelectric DOD patent."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1973",
          "text": "Stemme (Chalmers) receives a related piezoelectric DOD patent."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1976",
          "text": "IBM commercializes continuous inkjet with the IBM 6640; Kyser & Sears (Silonics) disclose a bend-mode piezoelectric DOD design."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1977",
          "text": "Canon's team observes the accidental soldering-iron / ink-syringe effect and files a basic thermal-inkjet (Bubble Jet) patent application in October."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "Late 1970s (cited as 1977)",
          "text": "Siemens PT-80, the first commercial drop-on-demand printer (piezoelectric)."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1978",
          "text": "Thermal inkjet is independently developed at HP by a team including John Vaught."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1984",
          "text": "HP ThinkJet brings thermal drop-on-demand inkjet to the desktop market."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "December 1985",
          "text": "Canon launches its first Bubble Jet printer, the BJ-80."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1993",
          "text": "The Epson Stylus 800 becomes the first product to use an Epson Micro Piezo printhead."
        }
      ]
    },
    {
      "kind": "timeline",
      "events": [
        {
          "period": "1995",
          "text": "Endo and Vaught are jointly awarded the Edwin H. Land Medal for their independent inventions of thermal / bubble-jet inkjet."
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
      "slug": "how-inkjet-printers-work"
    },
    {
      "section": "history",
      "slug": "evolution-of-inkjet-printers"
    },
    {
      "section": "guides",
      "slug": "thermal-inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "piezoelectric-inkjet-printing"
    },
    {
      "section": "brands",
      "slug": "epson"
    },
    {
      "section": "brands",
      "slug": "canon"
    }
  ],
  "faqs": [
    {
      "q": "What is inkjet printing?",
      "a": "Inkjet printing is a non-impact printing technology that forms images and text by propelling small droplets of liquid ink directly onto a substrate such as paper, film, textile, or ceramic. Because it needs no master image carrier and no impact mechanism, it is inherently digital and prints on a wide range of materials."
    },
    {
      "q": "What is the difference between continuous inkjet and drop-on-demand?",
      "a": "Continuous inkjet (CIJ) produces an unbroken stream of charged droplets that are steered electrostatically, recycling most drops back into a gutter. Drop-on-demand (DOD) ejects droplets only when needed, using either a thermal (bubble-jet) or a piezoelectric actuator."
    },
    {
      "q": "How does thermal (bubble-jet) inkjet work?",
      "a": "A tiny resistor inside the nozzle chamber flash-boils a thin layer of ink, forming a rapidly expanding vapor bubble that forces a droplet out of the nozzle. As the bubble collapses, capillary action refills the chamber. It was co-invented independently by Canon and HP in the late 1970s."
    },
    {
      "q": "Who invented thermal inkjet printing?",
      "a": "Thermal inkjet was invented independently and at nearly the same time by a team at Canon (Ichiro Endo, patent filed October 1977) and a team at Hewlett-Packard including John Vaught (by 1978). Endo and Vaught were jointly awarded the Edwin H. Land Medal in 1995 for their independent inventions."
    },
    {
      "q": "What was the first desktop inkjet printer?",
      "a": "HP's ThinkJet, a thermal drop-on-demand printer, reached the desktop market in 1984. Canon followed with its first Bubble Jet printer, the BJ-80, in December 1985."
    }
  ],
  "sources": [
    {
      "title": "Inkjet printing",
      "url": "https://en.wikipedia.org/wiki/Inkjet_printing",
      "publisher": "Wikipedia"
    },
    {
      "title": "A Brief History of Inkjet Printers",
      "url": "https://spectrum.ieee.org/inkjet-printer",
      "publisher": "IEEE Spectrum"
    },
    {
      "title": "Canon celebrates 30th anniversary of launch of first Bubble Jet inkjet printer",
      "url": "https://global.canon/en/news/2015/aug26e2.html",
      "publisher": "Canon Global"
    },
    {
      "title": "Ichiro Endo (biography)",
      "url": "https://www.optica.org/history/biographies/bios/ichiro_endo/",
      "publisher": "Optica"
    },
    {
      "title": "Epson Stylus 800 (milestone products)",
      "url": "https://corporate.epson/en/about/history/milestone-products/1993-3-stylus800.html",
      "publisher": "Seiko Epson Corporation"
    },
    {
      "title": "Elmqvist patent US2566443",
      "url": "https://patents.google.com/patent/US2566443A/en",
      "publisher": "Google Patents"
    },
    {
      "title": "Zoltan patent US3683212",
      "url": "https://patents.google.com/patent/US3683212",
      "publisher": "Google Patents"
    },
    {
      "title": "IBM 6640",
      "url": "https://en.wikipedia.org/wiki/IBM_6640",
      "publisher": "Wikipedia"
    },
    {
      "title": "The History of (And Differences Between) Piezo, Thermal, and Continuous Inkjet Printing",
      "url": "https://imagexpert.com/the-history-of-and-differences-between-piezo-thermal-and-continuous-inkjet-printing/",
      "publisher": "ImageXpert"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "inkjet printing",
    "continuous inkjet",
    "drop-on-demand",
    "thermal inkjet",
    "bubble jet",
    "piezoelectric inkjet",
    "micro piezo",
    "hp thinkjet",
    "canon bubble jet",
    "history of inkjet printers"
  ],
  "cluster": "printing-technology"
};

export default entry;
