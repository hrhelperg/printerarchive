import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "xerography",
  "title": "Xerography",
  "description": "The dry electrostatic imaging process behind the plain-paper copier and the laser printer, invented by Chester Carlson and commercialized by Xerox.",
  "summary": "Xerography is a dry electrostatic printing and copying process that forms images with charged, powdered toner instead of wet chemistry or ink. A photoconductor is uniformly charged, exposed to a light image so charge drains from the lit areas, and the surviving latent electrostatic image is developed with toner, transferred to plain paper, and fused by heat. Invented by Chester Carlson (first image 1938) and commercialized by the Haloid Company, later Xerox, it is the imaging principle behind the plain-paper photocopier and, later, the laser and LED printer.",
  "difficulty": "advanced",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "History"
    },
    {
      "kind": "paragraph",
      "text": "Xerography was the work of Chester F. Carlson (1906-1968), an American physicist, patent attorney, and inventor born in Seattle. In the mid-1930s Carlson set out to find a fast, dry way to copy patent drawings and text, drawing on the emerging science of photoconductivity. He filed a first preliminary patent application on October 18, 1937."
    },
    {
      "kind": "paragraph",
      "text": "The breakthrough came on October 22, 1938, in Astoria, Queens, New York. Working with a hired assistant, the Austrian physicist Otto Kornei, Carlson produced the first xerographic image. Kornei lettered \"10.-22.-38 ASTORIA\" in India ink on a glass microscope slide; using an electrostatically charged, sulfur-coated photoconductive plate and powder, they transferred the image to wax paper. Kornei later dissolved the partnership, reportedly skeptical of the technology's prospects."
    },
    {
      "kind": "paragraph",
      "text": "Carlson received U.S. Patent 2,297,691 for electrophotography on October 6, 1942. Commercial interest was slow to follow: more than twenty companies declined to develop the idea between 1939 and 1944, a group that included IBM and, as commonly reported, Kodak, General Electric, and RCA."
    },
    {
      "kind": "paragraph",
      "text": "The turning point came at the Battelle Memorial Institute in Columbus, Ohio, where engineer Russell Dayton championed the invention in 1944; by the fall of 1945 Battelle had agreed to develop it and act as Carlson's agent. In December 1946, Battelle, Carlson, and the Haloid Company of Rochester, New York, a photographic-paper maker, signed the first commercial licensing agreement."
    },
    {
      "kind": "paragraph",
      "text": "The name \"xerography\" was coined in 1948, when a Battelle staffer approached a classics professor at Ohio State University for a term rooted in the Greek xeros (\"dry\") and graphein (\"writing\"). Haloid made the first public announcement of xerography on October 22, 1948, ten years to the day after the first image."
    },
    {
      "kind": "paragraph",
      "text": "Attribution notes: sources agree the term originated with an Ohio State classics professor but vary on the specific individuals' names, so the personal attribution is best treated as reported. Characterizations of Kornei's later skepticism are narrative and are stated here as reported."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "Xerography rests on two physical facts: opposite electric charges attract, and certain photoconductive materials become electrically conductive where light strikes them. The classic imaging cycle has these stages:"
    },
    {
      "kind": "list",
      "items": [
        "Charging. A corona discharge device (a corotron or scorotron wire, or a charge roller) lays a uniform electrostatic charge over the surface of a photoconductor, historically a coated plate and later a rotating drum or belt.",
        "Exposure. The image of the original is projected onto the charged photoconductor, either by reflected light through a lens or, in laser and LED printers, by a modulated light source. Where light lands, the surface becomes conductive and the charge drains away; the dark image areas keep their charge. What remains is a latent electrostatic image.",
        "Development. Fine toner particles, a pigmented thermoplastic powder, are given an electric charge (in two-component systems through the triboelectric effect against carrier beads) and brought near the drum, where they cling to the charged latent-image areas.",
        "Transfer. A sheet of ordinary paper is pressed against the drum while a transfer corona or roller applies an opposite charge behind the paper, pulling the toner off the drum onto the sheet.",
        "Separation (detack). The charge is partially neutralized so the paper releases from the drum.",
        "Fusing. The paper passes through heat and pressure, typically a heated roller, melting the toner so it bonds permanently to the paper.",
        "Cleaning. Residual toner is scraped or brushed from the drum and the surface is discharged, readying it for the next cycle."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Specific charge voltages, drum materials, and toner formulations vary by machine and era; the qualitative steps above are the documented constants of the process."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "paragraph",
      "text": "Xerography evolved from Carlson's hand-worked flat, sulfur-coated plates and loose powder into automated drum-based machines. The manual Xerox Model A (1949) required many separate steps; the Xerox 914 (1959) automated the full cycle for plain paper, making office copying practical."
    },
    {
      "kind": "paragraph",
      "text": "The photoconductor itself evolved. Early machines used amorphous selenium and selenium-alloy drums; later machines moved toward organic photoconductors (OPC), a shift IBM pursued in part to work around Xerox's selenium patents."
    },
    {
      "kind": "paragraph",
      "text": "The decisive branch came when the light source was changed from a reflected optical image to a computer-controlled beam. At Xerox, physicist Gary Starkweather conceived the idea in 1967, built a prototype in 1969, and, after transferring to Xerox PARC in 1971, built a working laser printer known as SLOT (Scanned Laser Output Terminal) by modifying a Xerox copier: the same xerographic imaging engine, but with the latent image written by a laser. This line of work led to the commercial Xerox 9700 laser printer in 1977. LED printers later substituted an LED array for the laser while keeping the same electrophotographic engine."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented advantages of xerography are qualitative:"
    },
    {
      "kind": "list",
      "items": [
        "Dry process. It requires no liquid developing chemicals, unlike the wet reproduction methods common when it was introduced. This is the very property the name \"xerography\" was chosen to highlight.",
        "Plain paper. It prints on ordinary, untreated paper, a key advance of the Xerox 914 over coated-paper predecessors.",
        "On-demand duplication. It reproduces text and line or graphic originals without preparing a printing plate or master, distinguishing it from traditional offset and letterpress printing.",
        "Adaptable light source. The same imaging engine works whether the latent image is written by a reflected optical image (a copier) or a digital beam (a laser or LED printer), which enabled the shift from analog copying to digital printing."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Disadvantages"
    },
    {
      "kind": "paragraph",
      "text": "The documented disadvantages are likewise qualitative:"
    },
    {
      "kind": "list",
      "items": [
        "Mechanical and process complexity. The multi-stage cycle of charging, exposure, development, transfer, fusing, and cleaning requires precise coordination among many subsystems, which historically made machines large and maintenance-intensive.",
        "Heat-based fusing. Fixing toner requires heat and pressure, a source of energy use and a constraint on the media that can be used.",
        "Consumables and residue. The process relies on toner and requires a cleaning stage to remove residual toner from the photoconductor on every cycle."
      ]
    },
    {
      "kind": "paragraph",
      "text": "No performance, speed, resolution, cost, or benchmark comparisons are asserted, as authoritative sources do not support such figures for the process in general."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Modern use"
    },
    {
      "kind": "paragraph",
      "text": "Xerography, also called electrophotography, remains the dominant technology in office and production printing. It is the imaging method inside photocopiers, laser printers, LED printers, and many digital production presses. Documented accounts note that it has progressively displaced traditional offset printing for shorter-run and on-demand work, where preparing a plate would be uneconomical. Color xerographic systems extend the same principle to four-toner (CMYK) imaging."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "list",
      "items": [
        "Electrophotography. \"Electrophotography\" is Carlson's original name for the process; \"xerography\" is the same technology under the name adopted in 1948. In modern usage the terms are essentially synonymous, with \"electrophotography\" serving as the generic engineering term.",
        "Laser and LED printing. These are xerography in which the latent image is written by a modulated laser or LED array under computer control, rather than by projecting a reflected image of a physical original. They share the same charge, expose, develop, transfer, fuse, and clean engine.",
        "Photoconductivity and electrostatics. The process is a direct application of photoconductivity (light-induced conductivity) and electrostatic attraction. Carlson credited earlier electrostatic-imaging work by the Hungarian physicist Pal (Paul) Selenyi as an influence.",
        "Offset printing. Xerography is a non-impact, plateless alternative that competes with offset lithography, particularly for on-demand and variable-data printing."
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
        "Haloid Company / Haloid Xerox / Xerox Corporation. The firm that licensed the invention (1946), named it (1948), and commercialized it. Haloid was renamed Haloid Xerox in 1958 and later became Xerox Corporation. It is the company most closely identified with the technology.",
        "Battelle Memorial Institute. The Columbus, Ohio research organization that developed Carlson's invention toward practicality and brokered the Haloid license.",
        "Companies that declined the invention early on are part of its documented history, including IBM and, as commonly reported, Kodak, General Electric, and RCA."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The broader modern electrophotographic printing industry, spanning laser and LED printers and copiers, includes many manufacturers beyond Xerox; only those directly documented in the sources consulted are named here."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "list",
      "items": [
        "Xerox Model A (1949) - the first commercial xerographic copier, a manual, multi-step machine.",
        "Xerox 914 (introduced 1959) - the first successful automatic plain-paper copier, publicly demonstrated on September 16, 1959, and named for its ability to copy originals up to 9 by 14 inches. (Some sources cite 1960 as the commercial release year; the 1959 public introduction is used here.)",
        "Xerox 9700 (1977) - an early commercial xerographic laser printer, developed from Xerox PARC's SLOT laser-printing work."
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
          "period": "c. 1934-1937",
          "text": "Carlson begins seeking a dry copying process; files a first preliminary patent application on October 18, 1937."
        },
        {
          "period": "October 22, 1938",
          "text": "First xerographic image (\"10.-22.-38 ASTORIA\") made by Carlson and Otto Kornei in Astoria, Queens."
        },
        {
          "period": "October 6, 1942",
          "text": "Carlson granted U.S. Patent 2,297,691 for electrophotography."
        },
        {
          "period": "1944-1945",
          "text": "Battelle Memorial Institute takes up development of the invention."
        },
        {
          "period": "December 1946",
          "text": "Battelle, Carlson, and Haloid sign the first commercial license."
        },
        {
          "period": "1948",
          "text": "The term \"xerography\" is coined; Haloid makes the first public announcement of xerography on October 22, 1948."
        },
        {
          "period": "1949",
          "text": "Haloid introduces the Xerox Model A, the first commercial xerographic copier."
        },
        {
          "period": "1958",
          "text": "Haloid is renamed Haloid Xerox."
        },
        {
          "period": "1959",
          "text": "The Xerox 914, the first successful automatic plain-paper copier, is introduced (publicly demonstrated September 16, 1959)."
        },
        {
          "period": "1967 / 1971",
          "text": "Gary Starkweather conceives the laser printer (1967) and builds a working prototype at Xerox PARC (1971), applying xerography to computer-driven output."
        },
        {
          "period": "1977",
          "text": "The Xerox 9700 commercial laser printer is launched."
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
      "slug": "electrophotography"
    },
    {
      "section": "brands",
      "slug": "xerox"
    },
    {
      "section": "guides",
      "slug": "laser-printing"
    },
    {
      "section": "history",
      "slug": "history-of-printers"
    },
    {
      "section": "history",
      "slug": "evolution-of-laser-printing"
    },
    {
      "section": "history",
      "slug": "how-early-laser-printers-worked"
    }
  ],
  "faqs": [
    {
      "q": "Who invented xerography?",
      "a": "The American physicist and patent attorney Chester F. Carlson invented it. He produced the first xerographic image on October 22, 1938, in Astoria, Queens, working with his assistant Otto Kornei, and received U.S. Patent 2,297,691 for electrophotography in 1942."
    },
    {
      "q": "What does the word xerography mean?",
      "a": "It comes from the Greek xeros, meaning dry, and graphein, meaning writing. The name, coined in 1948, was chosen to emphasize that the process forms images with dry powdered toner rather than the wet chemistry used by earlier copying methods."
    },
    {
      "q": "How is xerography related to laser printing?",
      "a": "A laser printer is a xerographic (electrophotographic) machine in which the latent electrostatic image is written by a modulated laser under computer control instead of by a reflected optical image. It shares the same charge, expose, develop, transfer, fuse, and clean engine as a photocopier."
    },
    {
      "q": "What was the Xerox 914?",
      "a": "Introduced in 1959, the Xerox 914 was the first successful automatic plain-paper copier. It automated the full xerographic cycle and was named for its ability to copy originals up to 9 by 14 inches. It made office copying practical and helped establish Xerox."
    },
    {
      "q": "Is xerography still used today?",
      "a": "Yes. Xerography, also called electrophotography, remains the dominant technology in office and production printing. It is the imaging method inside photocopiers, laser printers, LED printers, and many digital production presses, including color CMYK systems."
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
      "title": "Xerox 914",
      "url": "https://en.wikipedia.org/wiki/Xerox_914",
      "publisher": "Wikipedia"
    },
    {
      "title": "Gary Starkweather",
      "url": "https://en.wikipedia.org/wiki/Gary_Starkweather",
      "publisher": "Wikipedia"
    },
    {
      "title": "Chester Carlson and the Birth of Xerography",
      "url": "https://www.xerox.com/en-us/innovation/insights/chester-carlson-xerography",
      "publisher": "Xerox"
    },
    {
      "title": "The Story of Xerography (PDF)",
      "url": "https://www.xerox.com/downloads/usa/en/innovation/innovation_storyofxerography.pdf",
      "publisher": "Xerox"
    },
    {
      "title": "How Xerox began: Carlson, Wilson, and the University of Rochester",
      "url": "https://www.rochester.edu/newscenter/review-sept-oct-2013-chester-carlson-haloid-xerox-electrophotography/",
      "publisher": "University of Rochester"
    },
    {
      "title": "Xerox 914 Plain Paper Copier",
      "url": "https://americanhistory.si.edu/collections/object/nmah_1085916",
      "publisher": "Smithsonian National Museum of American History"
    },
    {
      "title": "Laser Printers — CHM Revolution",
      "url": "https://www.computerhistory.org/revolution/input-output/14/351",
      "publisher": "Computer History Museum"
    },
    {
      "title": "Milestones: Development of the Commercial Laser Printer, 1971-1977",
      "url": "https://ethw.org/Milestones:Development_of_the_Commercial_Laser_Printer,_1971-1977",
      "publisher": "Engineering and Technology History Wiki (IEEE)"
    },
    {
      "title": "NIHF Inductee Gary K. Starkweather",
      "url": "https://www.invent.org/inductees/gary-k-starkweather",
      "publisher": "National Inventors Hall of Fame"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "xerography",
    "electrophotography",
    "chester carlson",
    "xerox 914",
    "plain paper copier",
    "laser printer origin",
    "toner imaging",
    "photoconductor drum",
    "haloid",
    "latent electrostatic image",
    "dry copying process",
    "gary starkweather"
  ],
  "cluster": "printing-technology"
};

export default entry;
