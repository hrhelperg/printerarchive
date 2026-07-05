import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "page-wide-printing",
  "title": "Page-Wide Array Printing",
  "description": "History and technology of page-wide array inkjet printing: fixed full-width printheads, single-pass imaging, and the HP PageWide and Memjet lineages.",
  "summary": "Page-wide array printing is a digital inkjet architecture in which a stationary printhead spans the full width of the paper, so the page is imaged in a single pass as the media moves beneath it rather than being scanned by a traversing carriage. The head is built from many small inkjet dies butted or staggered together so their nozzles collectively cover the whole page width. The two names most associated with the modern commercial form are HP PageWide and Memjet, both of which use thermal drop-on-demand ejection. The approach traces to HP's Edgeline (2006) and to research begun at Silverbrook Research in Australia in 1994; the question of who was \"first\" is genuinely contested and is best treated as parallel commercializations rather than a single invention.",
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
      "text": "Page-wide array printing describes a digital printing architecture in which a stationary printhead spans the entire width of the paper. Because the head does not move, the page is imaged in a single pass as the media is transported beneath it, eliminating the reciprocating carriage used by conventional scanning inkjet printers. The head is not one continuous device but an array of many small inkjet dies butted or staggered together so their nozzles collectively cover the full media width. The defining characteristic is architectural — a fixed head, moving paper, and one pass — rather than a specific ink chemistry."
    },
    {
      "kind": "paragraph",
      "text": "The idea of a page-wide head predates today's products, but the well-documented commercial lineage runs through two organizations. HP publicly unveiled its Edgeline platform in October 2006. Edgeline used stationary printheads past which the paper was moved, in a manner HP compared to how paper travels through a LaserJet, printing a page in a single pass. Trade coverage consistently describes it as the direct architectural precursor to HP's later office and web-press page-wide products. Edgeline as an office product line was short-lived and was withdrawn around 2009, but its printhead approach carried forward."
    },
    {
      "kind": "paragraph",
      "text": "Separately, the technology behind Memjet originated at Silverbrook Research in Australia, founded by Kia Silverbrook, where research began in 1994. Memjet, headquartered in San Diego, was formed to commercialize it, and a working prototype printer was shown at the Consumer Electronics Show in 2009."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it works"
    },
    {
      "kind": "paragraph",
      "text": "The physical process, as documented by HP and by general technical descriptions, has four elements:"
    },
    {
      "kind": "list",
      "items": [
        "A fixed, full-width printhead assembly is mounted across the paper path, constructed from many small inkjet chips or dies arrayed edge-to-edge so their nozzle rows together cover the whole page width. For its office PageWide printheads, HP describes roughly six chips per head totalling more than about 25,000 nozzles across the process colors, at a nozzle density on the order of 1,200 per inch per color — figures published by HP for a specific head, not independent measurements.",
        "The paper moves; the head does not. Sheets or a continuous web are transported under the stationary array.",
        "Drop-on-demand ejection. As each slice of paper passes beneath the nozzles, thousands of drop generators fire ink droplets at precisely timed moments so each drop lands in the correct position. HP uses thermal inkjet — a heater vaporizes a tiny bubble that ejects the drop — with pigment-based ink formulated to control drying, dot size, feathering, and color-to-color bleed. Memjet likewise uses a thermal, drop-on-demand page-wide head, fabricated with MEMS (microelectromechanical systems) techniques.",
        "One pass equals one page. Because every horizontal position has a dedicated nozzle, the whole page is laid down in a single continuous pass, with no back-and-forth carriage strokes."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Accuracy depends heavily on paper-transport precision and timing, since the only moving element registering the image is the media itself."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Evolution"
    },
    {
      "kind": "list",
      "items": [
        "Stationary-head office and web systems (mid-2000s): HP Edgeline (2006) and HP's inkjet web presses established the fixed-head, moving-paper model commercially.",
        "Silverbrook to Memjet: research beginning in 1994 led to a MEMS page-wide head, a 2009 CES prototype, and first products from around 2009–2010, initially for labels and desktop color.",
        "HP PageWide branding (2013): the Officejet Pro X series applied the architecture to office desktops under the new PageWide name.",
        "Large-format and production expansion (2014–2015): HP announced production-print ambitions in 2014 and launched the PageWide XL large-format line in 2015, alongside updated web presses.",
        "Memjet generational platforms: Memjet has iterated through named platforms — VersaPass, DuraLink, DuraFlex, DuraBolt, and DuraCore — targeting labels, packaging, commercial, and industrial print with modular page-wide printhead modules."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Advantages"
    },
    {
      "kind": "paragraph",
      "text": "The benefits attributed to the architecture are qualitative and follow directly from its design:"
    },
    {
      "kind": "list",
      "items": [
        "Speed from single-pass imaging. Removing the traversing carriage means the page prints in one pass, so throughput is limited mainly by paper transport rather than by repeated head sweeps. HP and trade press consistently frame this as the central benefit.",
        "Fewer moving parts. With only the paper moving — no carriage, scanning motor, or associated belts for the head — the mechanical system is simplified, which HP associates with reliability and lower energy use.",
        "Consistent drop placement. HP describes the array as built from large numbers of identical drop generators, intended to give uniform drop volume, speed, and trajectory across the page.",
        "Inkjet color at laser-class productivity. The recurring commercial positioning is that the approach combines inkjet color capability with the kind of throughput historically associated with laser office and production machines."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Any speed, resolution, or nozzle figures cited by manufacturers are vendor claims rather than independent test results."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Disadvantages"
    },
    {
      "kind": "list",
      "items": [
        "Printhead cost and complexity. A full-width array containing tens of thousands of nozzles is far more complex to manufacture than a small scanning head; this is inherent to the architecture and is a recurring theme in commentary on cost of ownership.",
        "Nozzle reliability across the full width. Because each position relies on dedicated nozzles that never move, a clogged or failed nozzle can produce a persistent streak or band in a fixed location — there is no head movement to average out defects — making nozzle health, servicing, and maintenance systems critical.",
        "Dependence on precise media transport. Image registration depends on exact, well-sensed paper movement, so transport error translates directly into placement error.",
        "Media and ink constraints. Inks are tuned for drying and bleed control at speed, which constrains supported media and consumables.",
        "Market durability of specific lines. Some HP page-wide office lines were later scaled back or discontinued, reflecting commercial rather than purely technical limitations."
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
        "Office and business printing: high-volume color inkjet printers and multifunction devices in HP's PageWide Pro line.",
        "Large-format and technical printing: architectural, engineering, and GIS plots and posters via HP PageWide XL.",
        "Production and commercial web presses: high-speed transactional, direct-mail, book, and commercial printing on HP's inkjet web-press and PageWide production families.",
        "Labels, packaging, and industrial print: Memjet-powered presses and OEM systems built on the VersaPass, DuraLink, DuraFlex, DuraBolt, and DuraCore platforms, integrated by third-party press manufacturers."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other technologies"
    },
    {
      "kind": "paragraph",
      "text": "Compared with scanning (carriage) inkjet, the contrast is fundamental: a scanning printer moves a small head back and forth across each line, while a page-wide printer keeps the head still and moves only the paper — trading the mechanical simplicity of a small head for a far more complex, full-width one."
    },
    {
      "kind": "paragraph",
      "text": "Relative to laser and LED electrophotography, page-wide inkjet is frequently positioned as a toner-free alternative that offers color inkjet output at throughput levels historically associated with laser office and production machines. HP itself draws the analogy that, like a LaserJet, the paper moves past a stationary marking system — a shared \"moving paper, fixed marking engine\" concept."
    },
    {
      "kind": "paragraph",
      "text": "On the fabrication side, Memjet's heads are described as MEMS-fabricated, and both HP and Memjet use thermal drop-on-demand ejection rather than the piezoelectric approach used by some other industrial inkjet systems."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to manufacturers"
    },
    {
      "kind": "list",
      "items": [
        "HP (Hewlett-Packard / HP Inc.): developer of Edgeline (2006), of the inkjet web presses, and of the PageWide brand (2013); owner of the PageWide Pro, PageWide XL, and PageWide production and web-press lines. HP is the dominant name associated with the term PageWide.",
        "Memjet: a technology-and-components company in San Diego that commercializes the Silverbrook Research page-wide MEMS printhead. Its business model centers on supplying printheads, inks, electronics, and modules to OEM partners rather than being solely an end-printer brand.",
        "Silverbrook Research (Australia): the origin of Memjet's technology, with research dating from 1994.",
        "OEM and press builders: numerous label and press manufacturers integrate Memjet modules into their own branded presses."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The question of who commercialized page-wide inkjet \"first\" is contested. Memjet has publicly claimed to be first to market with a page-wide head imaging the full width of an A4 sheet, while HP's Edgeline stationary-head machines were on the market in 2006. The dispute was litigated: Memjet sued HP in 2015 over page-wide patents covering the Officejet Pro X, the web presses, and PageWide XL, and the matter was later settled. These are best described as parallel, competing commercializations rather than a single invention."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Related printer families"
    },
    {
      "kind": "list",
      "items": [
        "HP: Officejet Pro X (2013, the first PageWide-branded office series); HP PageWide Pro (office); HP PageWide XL (large format, 2015); the HP inkjet Web Press (T-series) and PageWide production presses; and HP Edgeline (the 2006 predecessor).",
        "Memjet: the platform and technology names VersaPass, DuraLink, DuraFlex, DuraBolt, and DuraCore — technology platforms integrated into third-party presses rather than a single consumer printer brand."
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
          "period": "1994",
          "text": "Research that becomes Memjet's page-wide inkjet begins at Silverbrook Research in Australia."
        },
        {
          "period": "October 2006",
          "text": "HP unveils Edgeline, a stationary-printhead, single-pass system in which the paper moves past fixed heads; the precursor to PageWide."
        },
        {
          "period": "c. 2008–2009",
          "text": "HP's inkjet Web Press (T-series) page-wide production printing enters the market, shown at drupa 2008 with commercial launch around PRINT 09."
        },
        {
          "period": "2009",
          "text": "A working Memjet prototype printer is shown at the Consumer Electronics Show."
        },
        {
          "period": "c. 2009–2010",
          "text": "First Memjet-based products, including label printers, are launched."
        },
        {
          "period": "2013",
          "text": "HP introduces the PageWide name with the Officejet Pro X office inkjet series."
        },
        {
          "period": "2014",
          "text": "HP announces its intent to enter the production-print market with PageWide."
        },
        {
          "period": "2015",
          "text": "HP launches PageWide XL large-format printers and updated inkjet web presses."
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
      "slug": "inkjet-printing"
    },
    {
      "section": "brands",
      "slug": "hewlett-packard"
    },
    {
      "section": "guides",
      "slug": "thermal-inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "how-inkjet-printers-work"
    },
    {
      "section": "guides",
      "slug": "laser-vs-inkjet-printers"
    },
    {
      "section": "history",
      "slug": "evolution-of-inkjet-printers"
    }
  ],
  "faqs": [
    {
      "q": "What is page-wide array printing?",
      "a": "It is a digital inkjet architecture in which a stationary printhead spans the full width of the paper. The page is imaged in a single pass as the media moves beneath the fixed head, rather than being scanned line by line by a moving carriage. The head is built from many small inkjet dies arrayed edge-to-edge so their nozzles cover the whole page width."
    },
    {
      "q": "How is page-wide printing different from ordinary inkjet printing?",
      "a": "A conventional scanning inkjet printer moves a small printhead back and forth across each line while the paper advances in steps. A page-wide printer keeps the head still and moves only the paper, so the entire page prints in one continuous pass. This trades the mechanical simplicity of a small head for a much larger and more complex full-width head."
    },
    {
      "q": "Who invented page-wide inkjet printing?",
      "a": "There is no single inventor. HP's Edgeline stationary-head machines reached the market in 2006, while Memjet's technology grew out of research begun at Silverbrook Research in Australia in 1994, with a prototype shown at CES in 2009. The two are best described as parallel commercializations; the rivalry was litigated when Memjet sued HP in 2015 and the case was later settled."
    },
    {
      "q": "What are HP PageWide and Memjet?",
      "a": "They are the two names most associated with modern page-wide array printing. HP PageWide covers HP office printers, PageWide XL large-format machines, and production web presses, all developed by HP. Memjet is a San Diego company that supplies page-wide printheads, inks, and modules to OEM press makers, based on MEMS-fabricated thermal printhead technology from Silverbrook Research."
    },
    {
      "q": "What are the main drawbacks of page-wide printing?",
      "a": "The full-width printhead is costly and complex to manufacture. Because each position relies on dedicated nozzles that never move, a clogged or failed nozzle can leave a persistent streak in one place, so nozzle health and servicing matter more. Image quality also depends on very precise paper transport, and inks are tuned for drying at speed, which constrains supported media."
    }
  ],
  "sources": [
    {
      "title": "Memjet",
      "url": "https://en.wikipedia.org/wiki/Memjet",
      "publisher": "Wikipedia"
    },
    {
      "title": "Kia Silverbrook",
      "url": "https://en.wikipedia.org/wiki/Kia_Silverbrook",
      "publisher": "Wikipedia"
    },
    {
      "title": "Memjet Printing Technology",
      "url": "https://www.memjet.com/technology/",
      "publisher": "Memjet"
    },
    {
      "title": "Memjet Printing Technology (Inkjet Printing in Industry, ch. 24)",
      "url": "https://onlinelibrary.wiley.com/doi/abs/10.1002/9783527828074.ch24",
      "publisher": "Wiley Online Library"
    },
    {
      "title": "What is HP PageWide Technology? | HP Tech Takes",
      "url": "https://www.hp.com/us-en/shop/tech-takes/what-is-hp-pagewide-technology",
      "publisher": "HP"
    },
    {
      "title": "What Is HP PageWide?",
      "url": "https://print.wiki/terms/hp-pagewide/",
      "publisher": "Print Wiki"
    },
    {
      "title": "Ode to HP's Edgeline",
      "url": "https://theimagingchannel.com/ode-to-hps-edgeline/",
      "publisher": "The Imaging Channel"
    },
    {
      "title": "HP Pushes Ink Jet Printing to 70 Pages per Minute",
      "url": "https://phys.org/news/2007-04-hp-ink-jet-pages-minute.html",
      "publisher": "Phys.org"
    },
    {
      "title": "HP Strengthens Graphics Portfolio at PRINT 09 (Inkjet Web Press)",
      "url": "https://www.businesswire.com/news/home/20090911005164/en/HP-Strengthens-Graphics-Portfolio-with-New-Solutions-and-Alliances-at-PRINT-09",
      "publisher": "Business Wire"
    },
    {
      "title": "HP PageWide XL Large-Format Printers",
      "url": "https://www.hp.com/us-en/printers/large-format/pagewide-xl-printers.html",
      "publisher": "HP"
    },
    {
      "title": "Memjet Files Lawsuit Alleging Patent Infringement by Hewlett-Packard",
      "url": "https://www.memjet.com/press-releases/memjet-files-lawsuit-alleging-patent-infringement-by-hewlett-packard/",
      "publisher": "Memjet"
    }
  ],
  "published": "2026-07-05",
  "updated": "2026-07-05",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "page-wide array printing",
    "page-wide inkjet",
    "hp pagewide",
    "memjet",
    "single-pass inkjet",
    "fixed printhead",
    "stationary printhead inkjet",
    "hp edgeline",
    "silverbrook research",
    "thermal drop-on-demand",
    "pagewide xl",
    "inkjet web press"
  ],
  "cluster": "printing-technology"
};

export default entry;
