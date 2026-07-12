import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "ink-delivery-system",
  "title": "Ink Delivery System",
  "description": "The ink delivery system is the fluidic subsystem that stores liquid ink and feeds it, at controlled pressure and free of air and debris, to the inkjet printhead.",
  "summary": "The ink delivery system is the fluidic subsystem of a liquid-ink inkjet printer that stores ink and conveys it — at a controlled, usually slightly negative pressure and in a clean, air-free state — from the reservoir to the inlet of the printhead. As a subsystem it groups the ink reservoir or cartridge, any supply lines, a back-pressure or damping element, one or more filters, and, in many designs, a pump and a recirculation loop. This reference describes the supply side of the machine — its placement, working principle, main variants, and its consumable and maintenance role — while the ejection of drops belongs to the printhead and the upkeep of the nozzles to the service station. It deliberately gives no device-specific pressures, volumes, flow rates, or part numbers.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the ink delivery system is"
    },
    {
      "kind": "paragraph",
      "text": "The ink delivery system — also called the ink supply system or ink feed system — is the fluidic subsystem of a liquid-ink inkjet printer that stores the ink and conveys it, under controlled pressure and in a clean, air-free condition, from the reservoir to the inlet of the printhead. It is the supply side of the machine: in effect, everything in the ink path between where ink is stored and where it is finally ejected."
    },
    {
      "kind": "paragraph",
      "text": "It is important to distinguish this subsystem from the parts around it. It is not the inkjet printhead, which is the component that actually ejects drops, and it is not the printhead service station, which maintains the nozzles between and during jobs. The delivery system's single job is to present ink at the head's inlet in the right state for ejection; the physics of turning that ink into drops is covered on the inkjet process pages and is not restated here."
    },
    {
      "kind": "paragraph",
      "text": "In general terms, an ink delivery system groups together a reservoir (a cartridge or a tank), supply lines where the store is remote from the head, a pressure-regulating or damping element that sets the pressure the nozzles see, one or more filters, some form of ink-level sensing, and — depending on the design — a pump and a recirculation loop. The rest of this page describes those parts, where they sit, how they work in principle, their main variants, and their consumable and maintenance relationship."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Where it sits and how it connects"
    },
    {
      "kind": "paragraph",
      "text": "The delivery system spans the distance between the ink store and the printhead, so its physical extent depends on where the ink is kept relative to the head. Two broad layouts are common:"
    },
    {
      "kind": "list",
      "items": [
        "On-carriage (integral) supply — the reservoir rides on the carriage with the head, or is built into the same replaceable pen, feeding the head over a very short internal path.",
        "Off-axis (remote) supply — the ink is held in external tanks fixed to the frame and carried to the moving head through flexible tubing. This arrangement is typical of tank and bulk-ink machines and of many industrial and page-wide printers. The related distinction between scanning printheads and fixed-array (page-wide) printheads — which correlates with, but is not the same as, where the ink supply is placed — is discussed in the scanning-versus-fixed-array literature."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Working outward from the head, the delivery system's principal connections are:"
    },
    {
      "kind": "list",
      "items": [
        "To the printhead inlet or manifold — the delivery path terminates at the feed port that distributes ink to the firing chambers of the inkjet printhead.",
        "To the ink store — a sealed cartridge, a bottle-filled tank, or a bulk container.",
        "To a pump and the service station — priming draws ink through the head from the supply, so the delivery system and the printhead service station meet at the priming and purging function.",
        "To the control electronics — ink-level and, in some designs, pressure sensing report to the controller, which manages refill, priming, and low-ink warnings.",
        "To in-line conditioning hardware — a filter, and where fitted a degassing element and a damper positioned in the line just ahead of the head."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Working principle of the part"
    },
    {
      "kind": "paragraph",
      "text": "As a subsystem, the delivery system's task is to present ink at the nozzle inlet at the correct pressure, free of air and particulates, and to replenish it fast enough to keep up with firing. Several cooperating mechanisms achieve this, and the descriptions below stay at the level of general principle; no specific pressures, volumes, or flow rates are stated because those are design- and vendor-specific."
    },
    {
      "kind": "paragraph",
      "text": "Pressure control and the meniscus. The central requirement is pressure. At each open nozzle a small meniscus of ink is held in place by surface tension, and the delivery system must keep the pressure behind it slightly below ambient — a small back-pressure or negative pressure — so that ink neither weeps out under gravity nor is drawn back so hard that the nozzle de-primes, while still leaving the meniscus free to be ejected by the actuator and to refill afterwards. This back-pressure can be generated passively (for example by a capillary foam or sponge inside a cartridge, by a spring-loaded bag, by a regulator valve, or by the height of the ink relative to the nozzles) or actively (by a pump working against a pressure regulator)."
    },
    {
      "kind": "paragraph",
      "text": "Refill. After each drop is fired, the firing chamber must refill before the next firing. The geometry of the feed path and manifold, together with the supply pressure, governs how quickly ink reaches the chambers; MEMS thermal heads, for instance, rely on capillary action through wettable feed channels to refill the nozzle chambers. The delivery system's role is to keep the reservoir side of that path continuously supplied."
    },
    {
      "kind": "paragraph",
      "text": "Cleanliness — filtration and air management. Particulates that reach a nozzle can block it, so filters in the path trap debris before it arrives. Air is equally damaging: a bubble in the feed can absorb the actuator's pressure pulse and starve a nozzle, so some systems include a degassing element and most provide a way to bleed air out during priming."
    },
    {
      "kind": "paragraph",
      "text": "Recirculation. In many industrial and some office designs the delivery system continuously circulates ink past the back of the nozzles (through-flow) rather than holding it static until fired. Keeping the ink in motion sweeps away air and debris and resists the settling of heavily pigmented inks."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Main variants and types"
    },
    {
      "kind": "paragraph",
      "text": "Ink delivery systems are categorised along several independent axes, and a given printer's system is a combination of choices from each."
    },
    {
      "kind": "paragraph",
      "text": "By reservoir integration"
    },
    {
      "kind": "list",
      "items": [
        "Integrated cartridge supply — the reservoir (and often the head itself) is built into a replaceable pen; the delivery path is short and largely internal, and it is renewed each time the cartridge is changed. This is common with thermal heads.",
        "External or refillable tank supply — the ink is held in a separate tank or bottle-filled reservoir feeding a permanent head, so only the ink is replenished. Large-reservoir refillable arrangements are often described as ink tank systems or continuous ink supply systems (CISS)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By supply location"
    },
    {
      "kind": "list",
      "items": [
        "On-carriage supply (the reservoir travels with the head) versus off-axis supply (external tanks feeding the moving head through tubing)."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By back-pressure method"
    },
    {
      "kind": "list",
      "items": [
        "Passive generation — capillary/foam, spring-bag, regulator-valve, or hydrostatic (height-based) back-pressure.",
        "Active generation — a pump combined with a pressure regulator, more typical of higher-end and industrial systems."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By ink circulation"
    },
    {
      "kind": "list",
      "items": [
        "Non-recirculating (ink is static in the feed until fired) versus recirculating / through-flow (ink is continuously moved past the nozzles). Recirculating, actively regulated supplies are closely associated with piezo and industrial heads handling pigmented fluids; see piezoelectric inkjet printing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By conditioning hardware"
    },
    {
      "kind": "list",
      "items": [
        "With or without an in-line filter, a degasser, and a damper — a compliant element that absorbs pressure pulses from carriage acceleration and pump pulsation so the pressure at the nozzles stays steady."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in print quality"
    },
    {
      "kind": "paragraph",
      "text": "The delivery system does not place ink on the page, but the state in which it presents ink to the head strongly influences the result. It always acts together with the ink, the media, the printhead, and the image-processing pipeline, so it is one contributor among several. The relationships below are general, and no comparative or numeric claims are made here."
    },
    {
      "kind": "list",
      "items": [
        "Pressure stability governs drop consistency. A steady back-pressure keeps the meniscus consistent, which in turn supports consistent drop volume and velocity and therefore even density. Pressure surges — for example from the acceleration of a scanning carriage — can vary drop weight across a sweep unless a damper smooths them out.",
        "Air management governs jet reliability. Air drawn into, or nucleating in, the feed produces weak, deviated, or missing jets, which appear as the artefacts described on the nozzle clogging and banding pages.",
        "Filtration helps avoid clogs. By trapping particulates upstream, the delivery system removes one of the causes of nozzle blockage before it can reach the nozzle plate.",
        "Refill capability sustains firing. If the feed cannot refill the chambers quickly enough, jetting falters at high firing rates.",
        "Recirculation resists sedimentation. Keeping pigmented ink in motion prevents the settling that would otherwise shift colour and starve nozzles."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Consumable and maintenance relationship"
    },
    {
      "kind": "paragraph",
      "text": "The delivery system is the part of the printer that meters the primary consumable — the ink itself — so it is closely tied to the consumable behaviour that users encounter. The following describes what that relationship is and why it exists, in general terms and without procedures."
    },
    {
      "kind": "list",
      "items": [
        "The ink is the consumable it delivers. In integrated-cartridge designs the delivery path is renewed together with each cartridge; in tank, CISS, and permanent-head designs only the ink is replenished and the delivery hardware persists.",
        "Air and priming. When a supply runs dry, a line is opened, or a machine has stood idle, air can enter the path. Priming — often performed with the pump associated with the printhead service station — refills the path and clears that air, which is where the supply side and the maintenance side cooperate.",
        "Filters and dampers. Where fitted, in-line filters and dampers are service items that can load up over time; keeping them serviceable is part of periodic maintenance.",
        "Sedimentation and idle behaviour. Pigmented inks can settle if left static for long periods, which is one reason recirculating systems exist and why idle machines may run maintenance routines to keep ink moving."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Scope and safety. This is a descriptive component reference, not a service manual. It describes what maintenance exists and why, but any bleeding, flushing, filter or damper service, or repair of the ink path should be carried out by a qualified technician following the manufacturer's guidance. No pressures, volumes, flow rates, yields, lifespans, part numbers, or model compatibilities are stated as fact here, because those values are design- and vendor-specific."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to adjacent components and pages"
    },
    {
      "kind": "paragraph",
      "text": "The delivery system sits within a cluster of related topics, each of which has its own page so that this reference can stay focused on the supply side."
    },
    {
      "kind": "list",
      "items": [
        "Inkjet printhead (what it feeds). The delivery path ends at the head's inlet, and the head takes over from there to eject drops. The two are often co-designed, and in integrated pens they are literally the same replaceable part.",
        "Printhead service station (where they cooperate). The service station maintains the nozzles; the delivery system supplies the ink. They meet at priming and purging, where the station's pump draws ink from the supply through the nozzles.",
        "Nozzle clogging (a defect it influences). Air in the feed, unfiltered particulates, and settled pigment are supply-side contributors to blocked or misfiring nozzles. This page supplies that context rather than restating the defect.",
        "Inkjet printing (the system overview). This page is the deep dive on the supply subsystem and points up to the system-level overview.",
        "Piezoelectric inkjet printing and thermal inkjet printing (the processes). Both eject liquid ink and therefore need a delivery system; recirculating, actively regulated supplies are most associated with piezo and industrial heads, while integrated, capillary-fed cartridges are common with thermal heads. Those pages cover how drops form; this one covers how ink is stored, conditioned, pressure-regulated, and conveyed."
      ]
    },
    {
      "kind": "paragraph",
      "text": "By design, drop-formation physics stays on the process pages and nozzle upkeep stays on the service-station page, while the storage, conditioning, pressure regulation, and conveyance of ink stay here."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing what this component is and how it works in general. It is not a service manual: it gives no device-specific specifications, part numbers, compatibility lists, or repair procedures, and anything requiring service should be handled by a qualified technician per the manufacturer's guidance. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "inkjet-printhead"
    },
    {
      "section": "guides",
      "slug": "nozzle-clogging"
    },
    {
      "section": "guides",
      "slug": "printhead-service-station"
    },
    {
      "section": "guides",
      "slug": "inkjet-printing"
    },
    {
      "section": "guides",
      "slug": "piezoelectric-inkjet-printing"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between the ink delivery system and the printhead?",
      "a": "The ink delivery system is the supply side: it stores ink and feeds it, at a controlled pressure and free of air and debris, to the inlet of the printhead. The printhead is the component that actually ejects the ink as drops. In some designs the two are separate (a permanent head fed by external tanks), and in others they are combined in a single replaceable cartridge, but their roles are distinct — one supplies, the other ejects. The ejection physics is covered on the inkjet printhead and inkjet process pages."
    },
    {
      "q": "What is a continuous ink supply system (CISS) or ink tank system?",
      "a": "It is a delivery-system variant in which ink is held in large, refillable external reservoirs rather than in sealed disposable cartridges, and fed to a permanent printhead. Because the consumable is bottled ink rather than a cartridge, only the ink is replenished while the head and delivery hardware persist. It is one point on the reservoir-integration axis, contrasted with integrated-cartridge supplies where the reservoir is built into a replaceable pen."
    },
    {
      "q": "Why does the ink delivery system keep a slight negative pressure at the nozzles?",
      "a": "At each open nozzle a meniscus of ink is held by surface tension. The delivery system keeps the pressure behind it slightly below ambient so that ink does not weep or drool out under gravity, yet not so low that the nozzle de-primes — leaving the meniscus free to be ejected by the actuator and to refill afterwards. This back-pressure can be produced passively (foam, spring-bag, regulator valve, or ink height) or actively (a pump with a pressure regulator)."
    },
    {
      "q": "What is ink recirculation and why do some printers use it?",
      "a": "Recirculation, or through-flow, means the delivery system continuously moves ink past the back of the nozzles instead of leaving it static until fired. Keeping the ink in motion sweeps away air and debris and resists the settling of heavily pigmented inks, which improves reliability. It is most associated with piezo and industrial heads; simpler printers instead rely on capping, spitting, and priming performed by the service station."
    },
    {
      "q": "Does the ink delivery system prevent clogging?",
      "a": "It reduces some causes of clogging rather than preventing it outright. In-line filters trap particulates before they reach the nozzles, air management and priming clear bubbles that would starve nozzles, and recirculation resists pigment sedimentation. The defect itself is detailed on the nozzle-clogging page, and the capping and cleaning that directly maintain the nozzles are handled by the printhead service station. Any actual servicing of the ink path should be left to a qualified technician following the manufacturer's guidance."
    }
  ],
  "sources": [
    {
      "title": "Hewlett-Packard's MEMS Technology: Thermal Inkjet Printing and Beyond",
      "url": "https://www.taylorfrancis.com/chapters/edit/10.1201/b12722-3/",
      "publisher": "CRC Press / Taylor & Francis"
    },
    {
      "title": "Piezo printhead modes of operation and architecture",
      "url": "https://www.xaar.com/technologies/piezo-printhead-operation-architecture/",
      "publisher": "Xaar plc"
    },
    {
      "title": "STARFIRE SG600 Printhead",
      "url": "https://www.fujifilm.com/us/en/business/inkjet-solutions/industrial-printheads/starfire-sg600",
      "publisher": "FUJIFILM Dimatix"
    },
    {
      "title": "Scanning head versus fixed array inkjet",
      "url": "https://inkjetinsight.com/type/article/scanning-head-versus-fixed-array-inkjet/",
      "publisher": "Inkjet Insight"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ink delivery system",
    "inkjet ink supply",
    "ink cartridge",
    "continuous ink supply system",
    "ink tank system",
    "back-pressure regulation",
    "ink damper",
    "ink recirculation",
    "ink filter",
    "negative pressure inkjet",
    "off-axis ink supply",
    "ink priming"
  ],
  "cluster": "printer-components"
};

export default entry;
