import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "laser-printing",
  "title": "Laser Printing",
  "description": "History and technology of laser printing, the electrophotographic process invented by Gary Starkweather at Xerox that launched digital computer printing.",
  "summary": "Laser printing is a non-impact, dry electrophotographic (xerographic) process in which a computer-controlled laser writes a latent electrostatic image onto a charged rotating drum, which then attracts dry toner that is transferred to paper and fused with heat and pressure. Conceived by Xerox engineer Gary Starkweather in the late 1960s and first built as a working prototype at Xerox PARC around 1971, laser printing became the foundation of digital, page-oriented computer output. It powers everything from desktop office printers to high-volume production presses for transactional documents such as bills, statements, and policies.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The core insight behind laser printing is consistently attributed to Gary Starkweather, an engineer and physicist then at Xerox. According to the Computer History Museum, in 1967 Starkweather realized that a copy machine's light-sensitive drum did not have to be exposed to a paper original — a computer could instead \"write\" the image with a laser. He pursued the idea at Xerox's Webster, New York research facility in the late 1960s (some sources date the invention work there to 1969), and after Xerox's product divisions showed little interest, he transferred to the newly formed Xerox Palo Alto Research Center (PARC) in 1971."
    },
    {
      "kind": "paragraph",
      "text": "At PARC, Starkweather adapted a Xerox copier into SLOT (\"Scanned Laser Output Terminal\"; the Computer History Museum renders the name as \"Scanning Laser Output Terminal\"). Within roughly a year he had built what CHM and other sources describe as the first working laser printer. In 1972, working with Butler Lampson and Ronald Rider, a control system and character generator were added, producing a system referred to as EARS (the expansion of the acronym is attributed and not fully verified here), which fed into what became the Xerox 9700."
    },
    {
      "kind": "paragraph",
      "text": "The question of the \"first\" laser printer involves three distinct, individually documented milestones that are often conflated. Starkweather's PARC prototype was the first working laser printer (around 1971–72). IBM announced the IBM 3800 (model 001) on April 15, 1975 and first shipped it in July 1976; it is commonly regarded as the first commercially available laser printer, though Wikipedia's own IBM 3800 article notes competing claims for the Xerox 1200 (announced 1973, shipped late 1974) and the Honeywell Page Printing System (announced 1974). Xerox brought the PARC lineage to market with the Xerox 9700 in 1977, demonstrating it at the National Computer Conference in Dallas."
    },
    {
      "kind": "paragraph",
      "text": "The desktop era arrived in 1984, when Hewlett-Packard introduced the HP LaserJet, built around a Canon \"CX\" laser engine with HP's own control software, bringing laser printing to the office desktop. Apple followed in 1985 with the LaserWriter, also based on the Canon CX engine but adding Adobe PostScript (introduced by Adobe in 1984), the first widely adopted page-description language for laser printers and a catalyst for desktop publishing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Laser printing is an electrophotographic (xerographic) process, commonly described in a sequence of steps (per Wikipedia's \"Laser printing\"):"
    },
    {
      "kind": "list",
      "items": [
        "Charging — A charge source (a primary charge roller, or in older designs a corona wire) applies a uniform electrostatic charge across the surface of a rotating photoconductor drum. In the process as documented, the drum is given a uniform negative potential.",
        "Exposing (laser writing) — A laser beam is switched on and off (modulated) and swept across the drum by a rotating polygonal mirror, line by line. Where the laser strikes the photoconductive surface, it makes that spot conductive and discharges the local charge, leaving a latent electrostatic image of the page on the drum.",
        "Developing — Fine, dry toner (a plastic and pigment powder) is charged and brought near the drum by a developer roller. Toner adheres to the drum according to the charge pattern.",
        "Transferring — The drum rotates against the paper and the toner is transferred onto it, aided by an opposite charge applied to the paper. Color machines often use an intermediate transfer belt to combine layers before transfer to paper.",
        "Fusing — The paper passes through heated fuser rollers, where heat and pressure melt the thermoplastic toner and permanently bond it to the paper fibers.",
        "Cleaning and recharging — A blade or discharge step removes residual toner and neutralizes leftover charge so the drum is ready for the next page cycle."
      ]
    },
    {
      "kind": "paragraph",
      "text": "For color laser printing, the same process is repeated for cyan, magenta, yellow, and black (CMYK) toners. The four color planes must be precisely registered; many color machines use a rotating transfer belt to align them before transferring the combined image to paper."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "list",
      "items": [
        "Mainframe and data-center era (mid-1970s): Room-sized, high-speed continuous-form printers such as the IBM 3800 and Xerox 9700 handled centralized high-volume output.",
        "Desktop era (mid-1980s): Compact, affordable engines (Canon CX) packaged by HP (LaserJet, 1984) and Apple (LaserWriter, 1985). PostScript and later PCL page-description languages standardized computer-to-printer communication and enabled desktop publishing.",
        "Color desktop era (early to mid 1990s): The QMS ColorScript Laser 1000 appeared in 1993 as an early desktop color laser printer, and HP's first color laser, the Color LaserJet, was introduced in September 1994 (documented as using a Konica print engine). Color laser gradually moved from very expensive to mainstream office equipment.",
        "Modern era: Multifunction laser devices (print, scan, copy, fax), networked office fleets, LED-array printheads as an alternative to scanning lasers, and continued high-volume production and continuous-feed systems."
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
        "Sharp, crisp text and clean line and edge reproduction, well suited to office documents.",
        "High throughput for volume printing, which is why the technology came to dominate transactional and statement printing.",
        "Smudge- and water-resistant output, because toner is a plastic fused into the paper rather than a liquid ink that soaks in.",
        "Consistent, repeatable quality page after page, with stable consumables — dry toner does not dry out the way liquid ink can.",
        "Non-impact and relatively quiet compared with earlier impact printers."
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
        "Fusing requires significant heat, meaning warm-up time and higher instantaneous power draw, and the hot fuser is a wear and service item.",
        "Color laser was historically expensive and complex relative to inkjet, requiring four toner cartridges plus registration hardware such as transfer belts; early color laser printers were very costly.",
        "Photographic, continuous-tone color was traditionally a relative weakness compared with inkjet for glossy photo output, since laser relies on halftoning of toner.",
        "Bulk and mechanical complexity — drums, rollers, fusers, and (in color) belts add moving parts and maintenance items.",
        "Early and large machines were physically enormous and confined to data centers, such as the room-sized IBM 3800."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Laser printing remains the standard for office document printing — text-heavy correspondence, reports, and forms — and for high-volume production printing of transactional documents such as bills, bank and credit-card statements, insurance policies, and investment reports, the market the Xerox 9700 originally created. Monochrome laser printers and multifunction laser devices are ubiquitous in offices, and color laser is now common for business color output. The digital, page-oriented output these machines pioneered underpins much of the modern printing industry."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "list",
      "items": [
        "Xerography / photocopying: Laser printing is a direct descendant of xerography (electrophotography). The key change was replacing the optical image of a physical original with a computer-controlled laser writing a latent image on the same kind of photoconductor drum; early prototypes were literally built from copiers.",
        "LED printers: A close relative that uses a fixed array of LEDs instead of a scanning laser and polygon mirror to expose the drum; the rest of the electrophotographic process is essentially the same.",
        "Inkjet printing: The main competing non-impact desktop technology; laser is generally favored for text and volume, while inkjet was historically favored for low-cost color and photo output.",
        "Impact printing (dot-matrix, line printers): The technology laser printing largely displaced for computer output, being faster, quieter, and higher quality.",
        "Page-description languages (PostScript, PCL): Not printing technologies themselves but standards tightly bound to laser printers' adoption, enabling device-independent page rendering and desktop publishing."
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
        "Xerox — Origin of the technology (Starkweather at Webster and PARC); the Xerox 9700 and subsequent production and office laser lines.",
        "IBM — The IBM 3800 (1976), commonly regarded as the first commercially available laser printer, for mainframe data centers.",
        "Canon — A key laser print-engine maker; the Canon CX engine powered the first HP LaserJet and the Apple LaserWriter, and Canon has long supplied engines used across the industry as well as its own printers.",
        "Hewlett-Packard (HP) — Brought laser printing to the desktop with the HP LaserJet (1984, Canon engine) and introduced its first color laser, the Color LaserJet (1994, Konica engine); a dominant office laser brand.",
        "Apple — The LaserWriter (1985), which paired the Canon engine with PostScript and helped start desktop publishing.",
        "Konica (Konica Minolta) — Supplied the print engine for HP's first Color LaserJet.",
        "QMS — An early desktop color laser (ColorScript Laser 1000, 1993).",
        "Brother — Named among the major manufacturers of laser printers. Other widely recognized laser-printer manufacturers include Lexmark and Kyocera; Kyocera is popularly associated with long-life amorphous-silicon drum designs, though that specific engineering claim is not verified here."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "paragraph",
      "text": "Documented product-line names tied to laser printing:"
    },
    {
      "kind": "list",
      "items": [
        "Xerox 9700 and the production Xerox lines that followed.",
        "IBM 3800 (mainframe laser printer).",
        "HP LaserJet (desktop monochrome line) and HP Color LaserJet (color line).",
        "Apple LaserWriter.",
        "QMS ColorScript (early color laser).",
        "Research and prototype lineage: SLOT and EARS at Xerox PARC."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Brother, Lexmark, and Kyocera market their own laser product families, though specific model-line names for those were not individually verified in this research pass."
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
          "period": "1967",
          "text": "Gary Starkweather conceives using a computer-written laser image instead of exposing a copier drum to a paper original (Computer History Museum)."
        },
        {
          "period": "Late 1960s (1969)",
          "text": "Starkweather works on the laser-printing idea at Xerox's Webster, New York research facility."
        },
        {
          "period": "1971",
          "text": "Starkweather transfers to Xerox PARC and adapts a Xerox copier into SLOT; builds the first working laser printer at PARC."
        },
        {
          "period": "1972",
          "text": "With Butler Lampson and Ronald Rider, a control system and character generator are added, producing EARS."
        },
        {
          "period": "1975",
          "text": "IBM announces the IBM 3800 (model 001) on April 15."
        },
        {
          "period": "1976",
          "text": "The IBM 3800 first ships; it is commonly regarded as the first commercially available laser printer (with competing claims noted for the Xerox 1200 and Honeywell systems)."
        },
        {
          "period": "1977",
          "text": "Xerox introduces the Xerox 9700, demonstrated at the National Computer Conference in Dallas."
        },
        {
          "period": "1984",
          "text": "HP introduces the HP LaserJet (Canon CX engine); Adobe introduces PostScript."
        },
        {
          "period": "1985",
          "text": "Apple introduces the LaserWriter (Canon CX engine plus PostScript)."
        },
        {
          "period": "1993",
          "text": "QMS ColorScript Laser 1000, an early desktop color laser printer."
        },
        {
          "period": "1994",
          "text": "HP introduces the Color LaserJet (September), its first color laser (Konica engine)."
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
      "slug": "how-laser-printers-work"
    },
    {
      "section": "history",
      "slug": "evolution-of-laser-printing"
    },
    {
      "section": "guides",
      "slug": "electrophotography"
    },
    {
      "section": "guides",
      "slug": "xerography"
    },
    {
      "section": "brands",
      "slug": "hewlett-packard"
    },
    {
      "section": "brands",
      "slug": "canon"
    }
  ],
  "faqs": [
    {
      "q": "Who invented laser printing?",
      "a": "Laser printing is attributed to Gary Starkweather, an engineer and physicist at Xerox. The Computer History Museum credits him with realizing in 1967 that a computer-controlled laser could write an image onto a copier's light-sensitive drum, and he built the first working laser printer at Xerox PARC around 1971."
    },
    {
      "q": "What was the first commercial laser printer?",
      "a": "The IBM 3800, first shipped in July 1976, is commonly regarded as the first commercially available laser printer, a mainframe data-center machine. However, competing claims exist for the Xerox 1200 (shipped 1974) and the Honeywell Page Printing System (announced 1974). The Xerox 9700 (1977) productized the original PARC lineage."
    },
    {
      "q": "How does a laser printer work?",
      "a": "A laser printer uses an electrophotographic process: a charge roller gives a rotating drum a uniform charge, a modulated laser scans the drum to write a latent electrostatic image, dry toner adheres to that pattern, the toner is transferred to paper, and heated fuser rollers melt and bond it permanently. The drum is then cleaned and recharged for the next page."
    },
    {
      "q": "When did laser printers reach the desktop?",
      "a": "Laser printing reached the desktop in 1984 with the HP LaserJet, built on a Canon CX engine. Apple followed in 1985 with the LaserWriter, which added Adobe PostScript and helped launch desktop publishing."
    },
    {
      "q": "What is the difference between laser and LED printers?",
      "a": "Both use the same electrophotographic process, but a laser printer exposes the drum with a scanning laser beam steered by a rotating polygon mirror, while an LED printer uses a fixed array of LEDs to expose the drum. The charging, developing, transferring, and fusing steps are essentially the same."
    }
  ],
  "sources": [
    {
      "title": "Laser printing",
      "url": "https://en.wikipedia.org/wiki/Laser_printing",
      "publisher": "Wikipedia"
    },
    {
      "title": "Laser Printers, CHM Revolution",
      "url": "https://www.computerhistory.org/revolution/input-output/14/351",
      "publisher": "Computer History Museum"
    },
    {
      "title": "Gary Starkweather",
      "url": "https://en.wikipedia.org/wiki/Gary_Starkweather",
      "publisher": "Wikipedia"
    },
    {
      "title": "IBM 3800",
      "url": "https://en.wikipedia.org/wiki/IBM_3800",
      "publisher": "Wikipedia"
    },
    {
      "title": "Xerox 9700",
      "url": "https://en.wikipedia.org/wiki/Xerox_9700",
      "publisher": "Wikipedia"
    },
    {
      "title": "Xerox Celebrates the 40th Anniversary of the Xerox 9700",
      "url": "https://www.news.xerox.com/news/40-year-anniversay-of-the-Xerox-9700-and-its-innovation",
      "publisher": "Xerox Newsroom"
    },
    {
      "title": "Laser Printing Guide and History",
      "url": "https://www.xerox.com/en-us/office/insights/laser-printers",
      "publisher": "Xerox"
    },
    {
      "title": "HP LaserJet",
      "url": "https://en.wikipedia.org/wiki/HP_LaserJet",
      "publisher": "Wikipedia"
    },
    {
      "title": "LaserWriter",
      "url": "https://en.wikipedia.org/wiki/LaserWriter",
      "publisher": "Wikipedia"
    },
    {
      "title": "NIHF Inductee Gary K. Starkweather, Who Invented Laser Printers",
      "url": "https://www.invent.org/inductees/gary-k-starkweather",
      "publisher": "National Inventors Hall of Fame"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "laser printing",
    "laser printer",
    "electrophotographic printing",
    "xerography",
    "gary starkweather",
    "xerox parc",
    "xerox 9700",
    "ibm 3800",
    "hp laserjet",
    "apple laserwriter",
    "toner",
    "postscript"
  ],
  "cluster": "printing-technology"
};

export default entry;
