import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "electrophotography",
  "title": "Electrophotography",
  "description": "The dry, electrostatic imaging process behind photocopiers, laser printers, and LED printers, invented by Chester Carlson and commercialized as xerography.",
  "summary": "Electrophotography is a dry, electrostatic imaging process that forms images by using light to alter the charge on a photoconductive surface, developing the resulting latent image with charged toner that is transferred to paper and fused with heat. Invented by Chester Carlson, who made the first successful image in 1938 and received U.S. Patent 2,297,691 in 1942, it was commercialized by the Haloid Company (later Xerox) under the coined brand name \"xerography.\" It is the imaging principle underlying office photocopiers, laser printers, and LED printers.",
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
      "text": "Electrophotography is a dry, electrostatic imaging process. It forms images by using light to selectively alter the electrical charge on a photoconductive surface, then developing that invisible (\"latent\") charge pattern with fine, charged pigment particles (toner) that are transferred to paper and fixed in place with heat. It is the imaging principle that underlies the overwhelming majority of office photocopiers, laser printers, and LED printers."
    },
    {
      "kind": "paragraph",
      "text": "The process is popularly known as xerography — but \"xerography\" began as a marketing name and \"Xerox\" is a company trademark, whereas \"electrophotography\" is the generic technical term for the underlying process. The technology is distinctive because it is a dry process, using no liquid photographic chemistry, and relies on two ordinary physical phenomena: opposite electrical charges attract, and certain materials (photoconductors) conduct electricity much better when illuminated."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "The process was invented by Chester Floyd Carlson (born February 8, 1906, in Seattle; died September 19, 1968, in New York City), an American physicist and patent attorney. Frustrated by the slow, costly business of copying patent drawings and specifications, Carlson began experimenting in the mid-1930s and filed a preliminary patent application on October 18, 1937."
    },
    {
      "kind": "paragraph",
      "text": "The first successful electrophotographic image was made on October 22, 1938, in a rented space in Astoria, Queens, New York. Carlson worked with an assistant, physicist Otto Kornei (described in sources as Austrian; his exact nationality is attributed rather than firmly documented), who lettered \"10.-22.-38 ASTORIA.\" in India ink on a glass microscope slide. Using a sulfur-coated zinc plate that was electrostatically charged, exposed to the slide's image, and dusted with lycopodium powder, they transferred the powder image to wax paper — the historic proof of concept. Kornei was skeptical about the invention's future and later left the project."
    },
    {
      "kind": "paragraph",
      "text": "Carlson called his process \"electrophotography.\" More than twenty companies declined to develop it. In 1944 the nonprofit Battelle Memorial Institute of Columbus, Ohio, agreed to fund development work. Around 1946 the Haloid Company of Rochester, New York, obtained commercial rights. Because \"electrophotography\" was a cumbersome name, Haloid adopted the coined term \"xerography\" (about 1948) — from the Greek xēros (\"dry\") and graphein (\"writing\") — to emphasize the dry nature of the process. Haloid later renamed itself Xerox."
    },
    {
      "kind": "paragraph",
      "text": "Carlson's patent, U.S. Patent 2,297,691, was granted on October 6, 1942. His work built on earlier foundational research, notably that of Hungarian physicist Pál Selényi on electrostatic image recording."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Electrophotography is conventionally described as a sequence of steps carried out on a rotating photoconductor drum (the \"photoreceptor\" or, in modern machines, the organic photoconductor / OPC drum):"
    },
    {
      "kind": "list",
      "items": [
        "Charging — A uniform electrostatic charge is applied across the photoconductor's surface, historically by a corona discharge (a thin charged wire) and in many modern machines by a charge roller. Documented illustrative examples place this on the order of several hundred volts.",
        "Exposure — Light selectively discharges the surface. Where light strikes the photoconductor, its resistance drops and the charge drains away; where no light falls, the charge remains. This leaves an invisible latent electrostatic image. In a copier the light is reflected from the original document; in a laser printer a modulated laser beam scanned by a rotating polygon mirror \"writes\" the image; in an LED printer a stationary array of light-emitting diodes exposes the drum line by line.",
        "Development — Charged toner particles (fine pigment/plastic powder, often on a magnetic developer) are brought near the drum and adhere to the appropriately charged regions, making the latent image visible.",
        "Transfer — The paper is given an opposite charge so that the toner is electrostatically pulled from the drum onto the paper.",
        "Separation / detack — The paper is separated from the drum, often assisted by an AC corona, to prevent it clinging.",
        "Fusing — The paper passes through heated pressure rollers (the fuser) that melt the plastic toner so it permanently bonds to the paper fibers.",
        "Cleaning — Residual toner and charge are removed from the drum so the cycle can repeat."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The two enabling physical facts are that opposite charges attract (used in development and transfer) and that photoconductive materials conduct when illuminated (used in exposure to form the latent image)."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "list",
      "items": [
        "Powder-and-plate origins (1938): manual sulfur/zinc plates and lycopodium powder.",
        "Selenium photoreceptors: early commercial machines used selenium (and later selenium-alloy) drums as the photoconductor.",
        "First automated copiers (late 1950s): the reflective-light office copier, epitomized by the Xerox 914, introduced in 1959.",
        "Laser printing (early 1970s): the addition of a computer-driven laser to a xerographic engine, decoupling the image source from a physical original — invented by Gary Starkweather at Xerox. He conceived the idea in 1969 at Xerox's Webster research center and built the SLOT (Scanning Laser Output Terminal) prototype at Xerox PARC in 1971, using a Xerox 7000 copier as its base. The Xerox 9700 laser printer launched in 1977.",
        "LED printing (1980s): replacement of the laser/scanner assembly with a fixed LED array. OKI ran joint research with NTT from 1977, first developed an LED page printer around 1981, and commercialized it in 1986.",
        "Organic photoconductors (OPC): modern drums largely use organic photoconductive coatings rather than selenium.",
        "Color electrophotography: multi-pass or tandem (four-station cyan/magenta/yellow/black) engines extended the process to full color for both copiers and printers."
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
        "Dry process: requires no liquid photographic chemistry, developer baths, or specially coated photographic paper — it prints on ordinary plain paper.",
        "Permanent, durable output: fused toner is heat-bonded into the paper, producing smudge-resistant, water-resistant prints.",
        "Reusable imaging surface: the photoconductor is cleaned and re-used cycle after cycle, so consumable cost is largely toner and paper.",
        "Well suited to high-volume, repeated copying: the electrostatic cycle can be repeated rapidly, which is why it dominates office copying and page printing.",
        "Digital flexibility (laser/LED variants): because the latent image is written by light under computer control, any digital page — text, graphics, or images — can be printed without a physical master."
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
        "Mechanical and thermal complexity: the process requires a charged drum, precise optics or LED arrays, developer/toner handling, and a hot fuser, making devices more complex than simple impact or inkjet mechanisms. Laser scanning systems in particular have more moving parts than LED heads.",
        "Heat requirement: fusing needs heat, which consumes energy, adds warm-up time, and can constrain media that cannot tolerate the fuser temperature.",
        "Consumables and maintenance: toner, drums/photoconductors, and fuser components wear and require replacement.",
        "Sensitivity of the process: electrostatic charging can be affected by environmental conditions, and toner is a fine powder that must be contained."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Electrophotography remains the dominant technology for a range of office and production devices:"
    },
    {
      "kind": "list",
      "items": [
        "Office and production photocopiers.",
        "Laser printers (monochrome and color), from desktop units to high-speed production presses.",
        "LED printers, which use the same electrophotographic cycle but with an LED array instead of a scanning laser.",
        "Digital production printing and multifunction printers (MFPs) that combine copy, print, scan, and fax."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Both laser and LED printers are, technically, electrophotographic devices; they differ only in the light source used for the exposure step."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "list",
      "items": [
        "Xerography: not a separate technology but the trademarked, brand-derived name for electrophotography as commercialized by Haloid/Xerox; the two terms describe the same process, one generic and one branded.",
        "Laser vs. LED printing: both are electrophotographic; the distinction is the exposure light source — a scanned laser beam versus a fixed diode array.",
        "Inkjet printing: a fundamentally different, non-electrophotographic technology that sprays liquid ink directly onto paper, with no photoconductor, charging, or fusing.",
        "Traditional (silver-halide) photography: electrophotography was explicitly conceived as a dry alternative, contrasting with wet, chemically developed photographic processes.",
        "Electrostatic recording / earlier electrostatic imaging: electrophotography draws on prior electrostatic imaging research, such as Pál Selényi's work."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "paragraph",
      "text": "Documented associations with the technology include:"
    },
    {
      "kind": "list",
      "items": [
        "Haloid / Xerox Corporation — commercialized the process and coined the \"xerography\" brand; producer of the first automated xerographic office copiers and, via Gary Starkweather's work, of laser printers.",
        "Battelle Memorial Institute — the research organization that funded early development.",
        "OKI Electric Industry — pioneer and long-standing producer of LED electrophotographic printers."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Other companies widely associated with electrophotographic copiers and laser/LED printers include Canon (a major maker of laser print engines), Hewlett-Packard (whose LaserJet line historically used Canon engines), Ricoh, Konica Minolta, Kyocera, Brother, and Lexmark, all named as prominent participants in the electrophotographic printer and copier market."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "paragraph",
      "text": "Product-line names tied to this technology include:"
    },
    {
      "kind": "list",
      "items": [
        "Xerox 914 — landmark automatic plain-paper office copier, introduced in 1959.",
        "Xerox 9700 — early commercial laser printer, launched in 1977.",
        "HP LaserJet — long-running laser printer family.",
        "Canon laser beam printer (LBP) engines and copiers.",
        "OKI LED printers."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Laser and LED lines from Brother, Ricoh, Konica Minolta, Kyocera, and Lexmark are likewise electrophotographic families."
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
          "period": "1937 (October 18)",
          "text": "Carlson files a preliminary patent application for electrophotography."
        },
        {
          "period": "1938 (October 22)",
          "text": "First successful electrophotographic image made in Astoria, Queens, by Carlson and Otto Kornei."
        },
        {
          "period": "1942 (October 6)",
          "text": "U.S. Patent 2,297,691 granted to Carlson."
        },
        {
          "period": "1944",
          "text": "Battelle Memorial Institute agrees to fund development."
        },
        {
          "period": "~1946",
          "text": "Haloid Company (later Xerox) acquires commercial rights."
        },
        {
          "period": "~1948",
          "text": "Term \"xerography\" coined and adopted by Haloid."
        },
        {
          "period": "1959",
          "text": "Xerox 914, the first automated plain-paper office copier, introduced."
        },
        {
          "period": "1969–1971",
          "text": "Gary Starkweather conceives (1969) and builds (1971, at Xerox PARC) the first laser printer prototype."
        },
        {
          "period": "1977",
          "text": "Xerox 9700 laser printer launched."
        },
        {
          "period": "~1981–1986",
          "text": "First LED printer developed by OKI (~1981) and commercialized (1986)."
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
      "slug": "xerography"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "guides",
      "slug": "led-printing"
    },
    {
      "section": "history",
      "slug": "how-early-laser-printers-worked"
    },
    {
      "section": "glossary",
      "slug": "toner"
    },
    {
      "section": "guides",
      "slug": "how-laser-printers-work"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between electrophotography and xerography?",
      "a": "They describe the same process. \"Electrophotography\" is the generic technical term for the dry, electrostatic imaging process; \"xerography\" is the brand-derived name coined by the Haloid Company (later Xerox) around 1948, from the Greek for \"dry writing.\""
    },
    {
      "q": "Who invented electrophotography?",
      "a": "American physicist and patent attorney Chester Floyd Carlson invented it. He made the first successful electrophotographic image on October 22, 1938, in Astoria, Queens, with his assistant Otto Kornei, and received U.S. Patent 2,297,691 in 1942."
    },
    {
      "q": "Are laser printers and LED printers both electrophotographic?",
      "a": "Yes. Both use the same electrophotographic cycle of charging, exposure, development, transfer, and fusing. They differ only in the light source used to expose the drum: a scanning laser beam versus a fixed array of light-emitting diodes."
    },
    {
      "q": "How does electrophotography differ from inkjet printing?",
      "a": "Electrophotography is a dry process that uses a charged photoconductor drum, powdered toner, and a heated fuser. Inkjet printing is a fundamentally different technology that sprays liquid ink directly onto paper, with no photoconductor, charging, or fusing step."
    }
  ],
  "sources": [
    {
      "title": "Xerography",
      "url": "https://en.wikipedia.org/wiki/Xerography",
      "publisher": "Wikipedia"
    },
    {
      "title": "Chester Carlson",
      "url": "https://en.wikipedia.org/wiki/Chester_Carlson",
      "publisher": "Wikipedia"
    },
    {
      "title": "Gary Starkweather",
      "url": "https://en.wikipedia.org/wiki/Gary_Starkweather",
      "publisher": "Wikipedia"
    },
    {
      "title": "LED printer",
      "url": "https://en.wikipedia.org/wiki/LED_printer",
      "publisher": "Wikipedia"
    },
    {
      "title": "Xerox 914",
      "url": "https://en.wikipedia.org/wiki/Xerox_914",
      "publisher": "Wikipedia"
    },
    {
      "title": "Xerox PARC Scanning Laser Output Terminal (SLOT)",
      "url": "https://www.computerhistory.org/revolution/input-output/14/351/1887",
      "publisher": "Computer History Museum"
    },
    {
      "title": "Laser Printers",
      "url": "https://www.computerhistory.org/revolution/input-output/14/351",
      "publisher": "Computer History Museum"
    },
    {
      "title": "Part 14: Venturing into Optoelectronics with LED Printers",
      "url": "https://oki.com/en/130column/14.html",
      "publisher": "OKI"
    },
    {
      "title": "Xerox Photocopier Model 914, Introduced in 1959",
      "url": "https://www.thehenryford.org/collections-and-research/digital-collections/artifact/278224/",
      "publisher": "The Henry Ford"
    },
    {
      "title": "Chester F. Carlson | Xerography, Photocopying, Electrophotography",
      "url": "https://www.britannica.com/biography/Chester-F-Carlson",
      "publisher": "Encyclopaedia Britannica"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "electrophotography",
    "xerography",
    "chester carlson",
    "laser printer",
    "led printer",
    "photocopier",
    "toner",
    "photoconductor",
    "latent image",
    "xerox",
    "electrostatic imaging"
  ],
  "cluster": "printing-technology"
};

export default entry;
