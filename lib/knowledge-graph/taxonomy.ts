import type {
  KgCluster,
  ProposedSectionId,
  ProposedProductId,
} from "@/lib/knowledge-graph/types";
import type { SectionId } from "@/lib/site";
import type { ProductId } from "@/lib/products";

// GENERATED as part of Phase 9 (knowledge-graph). This is the long-term
// architectural map of every topic + ecosystem cluster PrinterArchive can
// honestly cover, with canonical entities, live/planned page counts, and the
// internal cross-link graph. It creates NO routes and NO pages — it is data
// that keeps cluster/entity vocabulary consistent and makes future page
// generation deterministic. See docs/superpowers/specs/2026-07-05-phase9-
// knowledge-graph.md for the full architecture writeup.
//
// "planned" pages are representative, honestly-buildable net-new pages — a
// demonstrative subset, not the full backlog. Capacity numbers are the honest
// long-term ceiling per cluster. Integrity is enforced by
// scripts/taxonomy.test.mjs (run under npm run test:unit).

/** Live routing sections (mirror of SectionId in lib/site.ts). */
export const LIVE_SECTIONS: SectionId[] = [
  "history",
  "guides",
  "troubleshooting",
  "brands",
  "workflows",
  "tools",
  "glossary",
  "mobile-printing",
  "fax",
];

/** Sections this taxonomy proposes but that are not yet built as routes. */
export const PROPOSED_SECTIONS: ProposedSectionId[] = ["models"];

/** Products already wired into lib/products.ts. */
export const LIVE_PRODUCTS: ProductId[] = [
  "zip-rar",
  "smart-printer",
  "fax-app",
  "pdf-editor",
  "cv-resume",
  "invoice-maker",
  "pocket-manager",
];

/** No app anchors remain proposed — all graduated to live ProductIds in Phase 15B. */
export const PROPOSED_PRODUCTS: ProposedProductId[] = [];

export const TAXONOMY: KgCluster[] = [
  {
    "id": "printing-history",
    "label": "Printing History",
    "primarySection": "history",
    "secondarySections": [
      "guides",
      "glossary"
    ],
    "description": "A broad chronological reference on the history of printing technology, from early hand-press and movable-type methods through industrial presses, typesetting machines, duplicating and copying equipment, and the transition toward digital output. Focuses on how each technology worked and how it shaped documents, offices, and communication, without inventing dates, figures, or specifications.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Movable type",
        "type": "technology"
      },
      {
        "name": "Letterpress printing",
        "type": "technology"
      },
      {
        "name": "Lithography",
        "type": "technology"
      },
      {
        "name": "Offset printing",
        "type": "technology"
      },
      {
        "name": "Xerography",
        "type": "technology"
      },
      {
        "name": "Linotype",
        "type": "technology"
      },
      {
        "name": "Monotype",
        "type": "technology"
      },
      {
        "name": "Phototypesetting",
        "type": "technology"
      },
      {
        "name": "Mimeograph",
        "type": "technology"
      },
      {
        "name": "Halftone process",
        "type": "technology"
      },
      {
        "name": "Gravure printing",
        "type": "technology"
      },
      {
        "name": "Screen printing",
        "type": "technology"
      },
      {
        "name": "Woodblock printing",
        "type": "technology"
      },
      {
        "name": "Rotary printing press",
        "type": "technology"
      },
      {
        "name": "Typewriter",
        "type": "technology"
      },
      {
        "name": "Teleprinter",
        "type": "technology"
      },
      {
        "name": "Photocopier",
        "type": "product"
      },
      {
        "name": "Printing press",
        "type": "concept"
      },
      {
        "name": "Typography",
        "type": "concept"
      },
      {
        "name": "Desktop publishing",
        "type": "concept"
      }
    ],
    "livePages": 4,
    "capacity": {
      "conservative": 30,
      "ambitious": 58
    },
    "planned": [
      {
        "slug": "gutenberg-and-the-printing-press",
        "title": "Gutenberg and the Movable-Type Printing Press",
        "section": "history",
        "angle": "How mechanical movable-type printing emerged in 15th-century Europe and why it mattered for document reproduction."
      },
      {
        "slug": "movable-type-before-gutenberg",
        "title": "Movable Type Before Gutenberg",
        "section": "history",
        "angle": "Earlier East Asian ceramic and metal movable-type methods and their differences from the European hand press."
      },
      {
        "slug": "woodblock-printing-history",
        "title": "A History of Woodblock Printing",
        "section": "history",
        "angle": "How relief woodblock printing worked for text and images long before movable type."
      },
      {
        "slug": "letterpress-printing-history",
        "title": "The History of Letterpress Printing",
        "section": "history",
        "angle": "The relief-printing tradition from hand presses to powered platen and cylinder presses."
      },
      {
        "slug": "lithography-history",
        "title": "How Lithography Changed Printing",
        "section": "history",
        "angle": "The planographic, grease-and-water principle and its role in image reproduction."
      },
      {
        "slug": "offset-printing-history",
        "title": "The Rise of Offset Printing",
        "section": "history",
        "angle": "How offset lithography transferred images via a rubber blanket and became a dominant commercial method."
      },
      {
        "slug": "rotary-printing-press-history",
        "title": "The Rotary Printing Press and Mass Printing",
        "section": "history",
        "angle": "How cylinder-based rotary presses enabled high-volume newspaper and commercial printing."
      },
      {
        "slug": "halftone-printing-history",
        "title": "The Halftone Process: Printing Photographs",
        "section": "history",
        "angle": "How dot screens allowed continuous-tone images to be reproduced on the printed page."
      },
      {
        "slug": "cmyk-and-color-separation-history",
        "title": "The Origins of CMYK Color Separation",
        "section": "history",
        "angle": "How process-color separation and the four-ink model developed for reproducing color images."
      },
      {
        "slug": "gravure-and-intaglio-printing-history",
        "title": "Intaglio and Gravure Printing Explained",
        "section": "history",
        "angle": "Recessed-image printing methods from engraving to industrial rotogravure."
      },
      {
        "slug": "screen-printing-history",
        "title": "A History of Screen Printing",
        "section": "history",
        "angle": "The stencil-through-mesh method and its use across textiles, signage, and industry."
      },
      {
        "slug": "hot-metal-typesetting-history",
        "title": "Hot Metal Typesetting: Linotype and Monotype",
        "section": "history",
        "angle": "How machine-cast metal type mechanized composition in the newspaper and publishing eras."
      },
      {
        "slug": "phototypesetting-era",
        "title": "The Phototypesetting Era",
        "section": "history",
        "angle": "How photographic and later digital typesetting replaced hot metal before desktop publishing."
      },
      {
        "slug": "history-of-typewriters",
        "title": "A History of the Typewriter",
        "section": "history",
        "angle": "How the typewriter mechanized personal and office document creation."
      },
      {
        "slug": "carbon-paper-and-copies-history",
        "title": "Carbon Paper and the Making of Copies",
        "section": "history",
        "angle": "How carbon paper and carbonless forms produced duplicate documents in offices."
      },
      {
        "slug": "mimeograph-and-stencil-duplicating",
        "title": "The Mimeograph and Stencil Duplicating",
        "section": "history",
        "angle": "How stencil duplicators produced short runs of documents before photocopiers."
      },
      {
        "slug": "spirit-duplicators-and-ditto-machines",
        "title": "Spirit Duplicators and Ditto Machines",
        "section": "history",
        "angle": "How aniline-dye spirit duplication worked and where it fit among office copying methods."
      },
      {
        "slug": "xerography-and-the-photocopier",
        "title": "Xerography and the Rise of the Photocopier",
        "section": "history",
        "angle": "How electrostatic dry copying transformed office document duplication."
      },
      {
        "slug": "teleprinter-and-teletype-history",
        "title": "Teleprinters and the Teletype",
        "section": "history",
        "angle": "How electromechanical teleprinters printed messages over telegraph and wire networks."
      },
      {
        "slug": "printing-in-the-industrial-revolution",
        "title": "Printing in the Industrial Revolution",
        "section": "history",
        "angle": "How steam power and mechanization scaled up the printing trade and the printed word."
      },
      {
        "slug": "history-of-printing-ink",
        "title": "A Short History of Printing Ink",
        "section": "history",
        "angle": "How printing inks evolved alongside presses and different printing processes."
      },
      {
        "slug": "continuous-stationery-and-fanfold-paper",
        "title": "Continuous Stationery and Fanfold Paper",
        "section": "history",
        "angle": "How tractor-fed fanfold paper supported early computer and impact printing."
      },
      {
        "slug": "history-of-braille-printing",
        "title": "The History of Braille Printing and Embossing",
        "section": "history",
        "angle": "How embossed tactile printing developed to make documents accessible."
      },
      {
        "slug": "typesetting-from-metal-to-digital",
        "title": "Typesetting from Metal to Digital",
        "section": "history",
        "angle": "An overview timeline of composition methods from hand-set type to digital fonts."
      }
    ],
    "crossLinks": [
      "desktop-publishing",
      "office-infrastructure",
      "enterprise-printing",
      "publishing"
    ],
    "imageNeeds": [
      "Public-domain scans or photographs of early printing presses and Gutenberg-era pages",
      "Public-domain images of movable type, composing sticks, and type cases",
      "Public-domain photographs of Linotype and Monotype machines",
      "Public-domain images of lithographic stones and offset press mechanisms",
      "Public-domain halftone and process-color separation diagrams or plates",
      "Public-domain photographs of mimeograph, spirit duplicator, and early photocopier equipment",
      "Public-domain images of typewriters and teleprinters",
      "Public-domain diagrams illustrating relief, planographic, and intaglio printing principles"
    ]
  },
  {
    "id": "office-infrastructure",
    "label": "Office Printing Infrastructure",
    "primarySection": "history",
    "secondarySections": [
      "workflows",
      "guides"
    ],
    "description": "How organisations structured document reproduction and shared printing: print rooms, pooled devices, spoolers, print servers, fleet management, and the accounting and access-control layers that grew around them. Covers the organisational forms and the durable networking standards that made shared office printing work, treated as history and operational practice rather than product marketing.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Managed print services",
        "type": "concept"
      },
      {
        "name": "Multifunction printer",
        "type": "concept"
      },
      {
        "name": "Pull printing",
        "type": "concept"
      },
      {
        "name": "Cost per page",
        "type": "concept"
      },
      {
        "name": "Print spooler",
        "type": "concept"
      },
      {
        "name": "Print server",
        "type": "concept"
      },
      {
        "name": "Line Printer Daemon protocol",
        "type": "protocol"
      },
      {
        "name": "Internet Printing Protocol",
        "type": "protocol"
      },
      {
        "name": "Server Message Block",
        "type": "protocol"
      },
      {
        "name": "Port 9100 raw printing",
        "type": "protocol"
      },
      {
        "name": "CUPS",
        "type": "technology"
      },
      {
        "name": "Xerography",
        "type": "technology"
      },
      {
        "name": "Mimeograph",
        "type": "technology"
      },
      {
        "name": "Printer Working Group",
        "type": "organization"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "Xerox",
        "type": "brand"
      }
    ],
    "livePages": 5,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "managed-print-services-history",
        "title": "The History of Managed Print Services",
        "section": "history",
        "angle": "how offices moved from owning printers to contracting fleet management and per-page billing as an organisational model"
      },
      {
        "slug": "pull-printing-and-follow-me-printing",
        "title": "Pull Printing and Follow-Me Printing",
        "section": "history",
        "angle": "the print-then-authenticate-at-any-device model and why pooled offices adopted it"
      },
      {
        "slug": "print-accounting-and-quotas",
        "title": "Print Accounting and Quotas in the Office",
        "section": "history",
        "angle": "tracking, charging and capping output as a governance layer over shared devices"
      },
      {
        "slug": "rise-of-the-office-photocopier",
        "title": "The Rise of the Office Photocopier",
        "section": "history",
        "angle": "how xerography turned reproduction into a self-service act and reshaped the print room"
      },
      {
        "slug": "multifunction-printers-in-the-office",
        "title": "How Multifunction Printers Reshaped the Office",
        "section": "history",
        "angle": "the convergence of print, copy, scan and fax into one shared network node"
      },
      {
        "slug": "office-print-cost-centres",
        "title": "Office Printing as a Cost Centre",
        "section": "history",
        "angle": "chargeback, cost-per-page thinking and departmental accounting for output"
      },
      {
        "slug": "print-release-stations",
        "title": "Print Release Stations Explained",
        "section": "history",
        "angle": "badge and PIN release as a secure-pickup layer added on top of the queue"
      },
      {
        "slug": "duplicating-before-the-photocopier",
        "title": "Duplicating Before the Photocopier",
        "section": "history",
        "angle": "mimeograph, stencil and spirit duplicators as the earlier reproduction infrastructure"
      },
      {
        "slug": "the-typing-pool-and-office-reproduction",
        "title": "The Typing Pool and Office Reproduction",
        "section": "history",
        "angle": "centralised document production as an organisational form parallel to the print room"
      },
      {
        "slug": "carbon-copies-in-the-office",
        "title": "Carbon Copies and the Office CC",
        "section": "history",
        "angle": "carbon paper as one-pass duplication and the vocabulary it left behind"
      },
      {
        "slug": "how-offices-print-over-a-lan",
        "title": "How Offices Print Over a LAN",
        "section": "guides",
        "angle": "LPD/LPR, SMB, raw port 9100 and IPP as the plumbing beneath shared printing"
      },
      {
        "slug": "networked-copiers-and-office-digitisation",
        "title": "Networked Copiers and Office Digitisation",
        "section": "history",
        "angle": "the copier becoming a scanner and network endpoint that fed digital workflows"
      },
      {
        "slug": "office-print-consumables-management",
        "title": "Managing Print Consumables in the Office",
        "section": "history",
        "angle": "toner, paper and supply logistics treated as ongoing fleet operations"
      },
      {
        "slug": "fleet-standardisation-in-offices",
        "title": "Standardising the Office Printer Fleet",
        "section": "history",
        "angle": "device consolidation and why organisations reduced printer model sprawl"
      },
      {
        "slug": "departmental-vs-personal-printers",
        "title": "Departmental Printers versus Personal Printers",
        "section": "history",
        "angle": "the placement decision and its recurring cost, control and convenience trade-offs"
      },
      {
        "slug": "the-centralise-decentralise-cycle",
        "title": "The Centralise and Decentralise Cycle in Office Printing",
        "section": "history",
        "angle": "the recurring pendulum between pooled and desk-level output as a durable pattern"
      },
      {
        "slug": "secure-print-release-workflow",
        "title": "Setting Up a Secure Print Release Workflow",
        "section": "workflows",
        "angle": "practical steps for held jobs and at-device release, and the confidentiality rationale"
      },
      {
        "slug": "managing-a-shared-office-printer",
        "title": "Managing a Shared Office Printer",
        "section": "workflows",
        "angle": "access, default settings, queue hygiene and etiquette for a pooled device"
      },
      {
        "slug": "what-is-managed-print-services",
        "title": "What Is Managed Print Services?",
        "section": "guides",
        "angle": "a vendor-neutral definition of the MPS model and what it typically covers"
      },
      {
        "slug": "what-is-pull-printing",
        "title": "What Is Pull Printing?",
        "section": "guides",
        "angle": "a concise definition of held-and-released printing and how authentication triggers output"
      }
    ],
    "crossLinks": [
      "document-workflows",
      "mobile-printing",
      "printing-history",
      "enterprise-printing"
    ],
    "imageNeeds": [
      "Verified public-domain photographs of mid-20th-century office print rooms and duplicating rooms",
      "Public-domain images of mimeograph and spirit-duplicator machines (e.g. Wikimedia Commons PD-tagged)",
      "Public-domain photographs of early office photocopiers and typing pools",
      "Public-domain images of mainframe/minicomputer line printers and continuous-form paper",
      "Facsimile excerpts of public-domain standards documents (IETF RFCs) shown as reference, not reproduced in full",
      "Neutral schematic diagrams (originally authored) of client to spooler to print-server to device data flow"
    ]
  },
  {
    "id": "enterprise-printing",
    "label": "Enterprise & Managed Printing",
    "primarySection": "workflows",
    "secondarySections": [
      "history",
      "guides"
    ],
    "description": "A vendor-neutral, operations-focused cluster covering how organizations run printing at scale: managed print services, fleet management, secure print release, cost control, print policies, accounting, and the standards and history behind centralized print operations. It complements the site's existing print-server and shared-printer material by focusing on organization-wide processes rather than single devices.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Managed Print Services",
        "type": "concept"
      },
      {
        "name": "Pull Printing",
        "type": "concept"
      },
      {
        "name": "Follow-Me Printing",
        "type": "concept"
      },
      {
        "name": "Secure Print Release",
        "type": "concept"
      },
      {
        "name": "Print Management Software",
        "type": "concept"
      },
      {
        "name": "Print Quota",
        "type": "concept"
      },
      {
        "name": "Total Cost of Ownership",
        "type": "concept"
      },
      {
        "name": "Print Fleet Management",
        "type": "concept"
      },
      {
        "name": "Direct IP Printing",
        "type": "concept"
      },
      {
        "name": "Print Server",
        "type": "technology"
      },
      {
        "name": "Internet Printing Protocol",
        "type": "protocol"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "Printer Working Group",
        "type": "organization"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "IEEE 802.1X",
        "type": "standard"
      },
      {
        "name": "Common Criteria",
        "type": "standard"
      },
      {
        "name": "NIST",
        "type": "organization"
      },
      {
        "name": "ISO",
        "type": "organization"
      }
    ],
    "livePages": 5,
    "capacity": {
      "conservative": 30,
      "ambitious": 52
    },
    "planned": [
      {
        "slug": "managed-print-services-explained",
        "title": "Managed Print Services Explained",
        "section": "workflows",
        "angle": "What MPS is as an operating model: outsourced or centralized management of an organization's print devices, supplies, and support, described vendor-neutrally."
      },
      {
        "slug": "print-fleet-management",
        "title": "Print Fleet Management",
        "section": "workflows",
        "angle": "How organizations inventory, monitor, and standardize many printers as a single managed fleet rather than isolated devices."
      },
      {
        "slug": "secure-print-release-workflows",
        "title": "Secure Print Release Workflows",
        "section": "workflows",
        "angle": "The hold-and-release pattern where jobs wait until the owner authenticates at the device; why it protects confidentiality and reduces waste."
      },
      {
        "slug": "controlling-office-printing-costs",
        "title": "Controlling Office Printing Costs",
        "section": "workflows",
        "angle": "Durable levers on print cost: defaults, duplex, monochrome, fleet right-sizing, and consumables discipline — no invented figures."
      },
      {
        "slug": "writing-an-organization-print-policy",
        "title": "Writing an Organization Print Policy",
        "section": "workflows",
        "angle": "What a written print policy covers: acceptable use, defaults, colour rules, confidentiality, ownership, and review cadence."
      },
      {
        "slug": "print-accounting-and-quota-systems",
        "title": "Print Accounting and Quota Systems",
        "section": "workflows",
        "angle": "How usage tracking and per-user or per-department quotas attribute and constrain printing across an organization."
      },
      {
        "slug": "right-sizing-a-printer-fleet",
        "title": "Right-Sizing a Printer Fleet",
        "section": "workflows",
        "angle": "Matching the number, type, and placement of devices to actual demand instead of accumulating under-used printers."
      },
      {
        "slug": "deploying-print-drivers-at-scale",
        "title": "Deploying Print Drivers at Scale",
        "section": "workflows",
        "angle": "Approaches to distributing and standardizing drivers across many workstations, including universal and driverless (IPP) paths."
      },
      {
        "slug": "print-server-vs-direct-ip-printing",
        "title": "Print Server vs Direct IP Printing",
        "section": "workflows",
        "angle": "The trade-offs between routing jobs through a central server versus workstations printing straight to device IP addresses."
      },
      {
        "slug": "centralized-print-management",
        "title": "Centralized Print Management",
        "section": "workflows",
        "angle": "How print management software gives one console for queues, policies, monitoring, and reporting across sites."
      },
      {
        "slug": "print-usage-auditing-and-reporting",
        "title": "Print Usage Auditing and Reporting",
        "section": "workflows",
        "angle": "What auditing captures — volumes, colour ratios, device utilization — and how reports inform fleet decisions."
      },
      {
        "slug": "badge-authentication-for-printers",
        "title": "Badge Authentication for Printers",
        "section": "workflows",
        "angle": "Using card or badge readers at the device for secure release and user attribution, described generically."
      },
      {
        "slug": "managing-toner-and-supplies-across-a-fleet",
        "title": "Managing Toner and Supplies Across a Fleet",
        "section": "workflows",
        "angle": "Consumables logistics for many devices: stock levels, automatic replenishment triggers, and ownership of resupply."
      },
      {
        "slug": "printer-security-fundamentals",
        "title": "Printer Security Fundamentals",
        "section": "workflows",
        "angle": "Treating networked printers as endpoints: firmware, access control, disabled unused services, and network segmentation."
      },
      {
        "slug": "printer-decommissioning-and-data-security",
        "title": "Printer Decommissioning and Data Security",
        "section": "workflows",
        "angle": "Why multifunction devices store data, and how organizations wipe storage and retire devices safely."
      },
      {
        "slug": "network-authentication-for-printers",
        "title": "Network Authentication for Printers",
        "section": "workflows",
        "angle": "How standards such as IEEE 802.1X bring networked printers under the same access control as other endpoints."
      },
      {
        "slug": "sustainable-office-printing",
        "title": "Sustainable Office Printing",
        "section": "workflows",
        "angle": "Process choices that reduce paper and consumable waste: duplex defaults, release-on-demand, and fleet consolidation."
      },
      {
        "slug": "onboarding-a-printer-to-a-managed-fleet",
        "title": "Onboarding a Printer to a Managed Fleet",
        "section": "workflows",
        "angle": "The repeatable checklist for adding a device: naming, defaults, security baseline, monitoring, and ownership."
      },
      {
        "slug": "service-level-agreements-for-printing",
        "title": "Service-Level Agreements for Printing",
        "section": "workflows",
        "angle": "What print SLAs typically cover — uptime, response times, supplies — described as a general operations concept."
      },
      {
        "slug": "history-of-managed-print-services",
        "title": "The History of Managed Print Services",
        "section": "history",
        "angle": "How print operations evolved from ad-hoc device purchasing toward centralized management and outsourced fleet models."
      },
      {
        "slug": "rise-of-print-management-software",
        "title": "The Rise of Print Management Software",
        "section": "history",
        "angle": "How central queue control, accounting, and secure release converged into dedicated print management platforms."
      }
    ],
    "crossLinks": [
      "network-printing",
      "document-workflows",
      "printing-history"
    ],
    "imageNeeds": [
      "Public-domain or clearly-licensed photographs of large office print/copy rooms and centralized print stations",
      "Historical photographs of mainframe-era or 1980s-1990s office printing operations (public-domain archives)",
      "Vendor-neutral schematic diagrams (site-authored SVG) of print-server vs direct-IP topologies and pull-printing release flow",
      "Site-authored SVG diagrams of a managed fleet console / reporting concept, with no real product screenshots or logos",
      "Public-domain imagery of badge/card readers or generic network endpoints for authentication concepts"
    ]
  },
  {
    "id": "publishing",
    "label": "Publishing & Print Production",
    "primarySection": "history",
    "secondarySections": [
      "guides",
      "glossary"
    ],
    "description": "An encyclopedic cluster covering commercial and industrial printing: the history of movable type and the printing press, the major print processes (offset lithography, letterpress, gravure, flexography, screen printing), prepress and color reproduction (CMYK, spot color, halftoning, color separation, imposition), and the history of typography and typesetting from hot metal through phototypesetting to digital desktop publishing. It centers on durable, standards-referenceable knowledge and deliberately avoids the desktop-printer, office-hardware, and fax territory already published elsewhere on the site.",
    "appAnchor": null,
    "status": "planned",
    "entities": [
      {
        "name": "Offset lithography",
        "type": "technology"
      },
      {
        "name": "Letterpress printing",
        "type": "technology"
      },
      {
        "name": "Gravure printing",
        "type": "technology"
      },
      {
        "name": "Flexography",
        "type": "technology"
      },
      {
        "name": "Screen printing",
        "type": "technology"
      },
      {
        "name": "Movable type",
        "type": "technology"
      },
      {
        "name": "Phototypesetting",
        "type": "technology"
      },
      {
        "name": "Linotype machine",
        "type": "technology"
      },
      {
        "name": "Monotype system",
        "type": "technology"
      },
      {
        "name": "CMYK color model",
        "type": "concept"
      },
      {
        "name": "Halftone",
        "type": "concept"
      },
      {
        "name": "Color separation",
        "type": "concept"
      },
      {
        "name": "Imposition",
        "type": "concept"
      },
      {
        "name": "Prepress",
        "type": "concept"
      },
      {
        "name": "Typography",
        "type": "concept"
      },
      {
        "name": "Desktop publishing",
        "type": "concept"
      },
      {
        "name": "Pantone Matching System",
        "type": "standard"
      },
      {
        "name": "ISO 12647",
        "type": "standard"
      },
      {
        "name": "PDF/X (ISO 15930)",
        "type": "standard"
      },
      {
        "name": "PostScript",
        "type": "format"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 40,
      "ambitious": 75
    },
    "planned": [
      {
        "slug": "history-of-the-printing-press",
        "title": "History of the Printing Press",
        "section": "history",
        "angle": "Gutenberg's mechanical movable-type press and its spread across Europe as a durable, well-documented milestone."
      },
      {
        "slug": "history-of-movable-type",
        "title": "The History of Movable Type",
        "section": "history",
        "angle": "From early East Asian ceramic and metal type to European metal casting, focused on technique not disputed firsts."
      },
      {
        "slug": "history-of-offset-lithography",
        "title": "The History of Offset Lithography",
        "section": "history",
        "angle": "From stone lithography to the rubber-blanket offset press that dominated commercial printing."
      },
      {
        "slug": "history-of-letterpress-printing",
        "title": "The History of Letterpress Printing",
        "section": "history",
        "angle": "Relief printing from hand presses to powered platen and cylinder presses, and its modern revival."
      },
      {
        "slug": "history-of-gravure-printing",
        "title": "The History of Gravure Printing",
        "section": "history",
        "angle": "Intaglio and rotogravure processes and why they suited long-run magazine and packaging work."
      },
      {
        "slug": "history-of-flexography",
        "title": "The History of Flexography",
        "section": "history",
        "angle": "Flexible relief plates and web presses used for packaging and labels."
      },
      {
        "slug": "history-of-screen-printing",
        "title": "The History of Screen Printing",
        "section": "history",
        "angle": "Stencil-through-mesh printing from textiles to graphics and industrial applications."
      },
      {
        "slug": "history-of-hot-metal-typesetting",
        "title": "Hot Metal Typesetting: Linotype and Monotype",
        "section": "history",
        "angle": "Line-casting and single-type casting machines that mechanized composition before photocomposition."
      },
      {
        "slug": "history-of-phototypesetting",
        "title": "The History of Phototypesetting",
        "section": "history",
        "angle": "Photo-optical composition bridging hot metal and digital typesetting."
      },
      {
        "slug": "history-of-color-printing-processes",
        "title": "How Commercial Color Printing Developed",
        "section": "history",
        "angle": "Chromolithography through process-color separation, framed around technique rather than the desktop-color page already published."
      },
      {
        "slug": "history-of-newspaper-printing",
        "title": "The History of Newspaper Printing",
        "section": "history",
        "angle": "High-speed web presses, stereotyping, and the shift to offset in newspaper production."
      },
      {
        "slug": "history-of-typography",
        "title": "A History of Typography",
        "section": "history",
        "angle": "The evolution of typefaces and type technology from metal to digital fonts."
      },
      {
        "slug": "what-is-offset-printing",
        "title": "What Is Offset Printing?",
        "section": "guides",
        "angle": "How ink transfers from plate to blanket to paper, and sheetfed vs. web configurations."
      },
      {
        "slug": "what-is-prepress",
        "title": "What Is Prepress?",
        "section": "guides",
        "angle": "The preflight, proofing, plating, and file-preparation steps before a job goes to press."
      },
      {
        "slug": "what-is-cmyk-color",
        "title": "Understanding CMYK Color",
        "section": "guides",
        "angle": "The subtractive four-color process and how it differs from RGB, without invented gamut figures."
      },
      {
        "slug": "what-is-spot-color",
        "title": "What Is Spot Color?",
        "section": "guides",
        "angle": "Pre-mixed inks and named color systems versus process color, referencing Pantone as an entity."
      },
      {
        "slug": "understanding-color-separation",
        "title": "How Color Separation Works",
        "section": "guides",
        "angle": "Splitting artwork into printing plates for each ink channel."
      },
      {
        "slug": "what-is-halftoning",
        "title": "What Is Halftoning?",
        "section": "guides",
        "angle": "Simulating continuous tone with dots of varying size, and screen frequency (LPI)."
      },
      {
        "slug": "what-is-imposition",
        "title": "What Is Imposition?",
        "section": "guides",
        "angle": "Arranging pages on a press sheet so they fold and trim into the correct sequence."
      },
      {
        "slug": "understanding-paper-weight-and-gsm",
        "title": "Understanding Paper Weight and GSM",
        "section": "guides",
        "angle": "Grammage, basis weight, and caliper as durable paper-specification concepts."
      },
      {
        "slug": "what-is-bleed-and-trim",
        "title": "Bleed, Trim, and Safe Margins Explained",
        "section": "guides",
        "angle": "Why artwork extends past the trim line and how finishing crops the sheet."
      },
      {
        "slug": "what-is-pdf-x",
        "title": "What Is PDF/X for Print?",
        "section": "guides",
        "angle": "The ISO PDF/X family as a print-ready file exchange standard, complementing the existing what-is-pdf page."
      },
      {
        "slug": "halftone",
        "title": "Halftone",
        "section": "glossary",
        "angle": "Definition of the dot-pattern tone-simulation technique."
      },
      {
        "slug": "kerning",
        "title": "Kerning",
        "section": "glossary",
        "angle": "Adjusting spacing between specific letter pairs in typography."
      },
      {
        "slug": "leading",
        "title": "Leading",
        "section": "glossary",
        "angle": "The vertical spacing between lines of type."
      }
    ],
    "crossLinks": [
      "document-workflows",
      "printing-history",
      "office-infrastructure",
      "enterprise-printing"
    ],
    "imageNeeds": [
      "Public-domain photographs or engravings of early hand printing presses (Gutenberg-era and wooden common presses)",
      "Public-domain images of Linotype and Monotype casting machines",
      "Public-domain diagrams of the offset lithography ink-transfer path (plate/blanket/impression cylinders)",
      "Public-domain halftone dot / rosette pattern illustrations and process-color separation examples",
      "Public-domain photographs of letterpress metal type cases, composing sticks, and formes",
      "Public-domain images of gravure and rotogravure cylinders and web presses",
      "Public-domain historical typeface specimen sheets"
    ]
  },
  {
    "id": "desktop-publishing",
    "label": "Desktop Publishing",
    "primarySection": "history",
    "secondarySections": [
      "guides",
      "glossary"
    ],
    "description": "A history-first cluster covering the desktop publishing (DTP) era: the convergence of WYSIWYG interfaces, page description languages like PostScript, affordable laser printers, and page-layout and vector software that let individuals produce print-ready documents at their desks. It also defines the durable technical concepts (RIP, EPS, outline fonts, PPD) that emerged from that period.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "PostScript",
        "type": "technology"
      },
      {
        "name": "Adobe Systems",
        "type": "organization"
      },
      {
        "name": "Aldus PageMaker",
        "type": "product"
      },
      {
        "name": "Apple LaserWriter",
        "type": "product"
      },
      {
        "name": "WYSIWYG",
        "type": "concept"
      },
      {
        "name": "QuarkXPress",
        "type": "product"
      },
      {
        "name": "Xerox Star",
        "type": "product"
      },
      {
        "name": "PDF",
        "type": "format"
      },
      {
        "name": "Adobe Type 1 font",
        "type": "format"
      },
      {
        "name": "TrueType",
        "type": "format"
      },
      {
        "name": "Encapsulated PostScript (EPS)",
        "type": "format"
      },
      {
        "name": "Raster Image Processor (RIP)",
        "type": "technology"
      },
      {
        "name": "Bezier curve",
        "type": "concept"
      },
      {
        "name": "Adobe Illustrator",
        "type": "product"
      },
      {
        "name": "Ventura Publisher",
        "type": "product"
      },
      {
        "name": "PostScript Printer Description (PPD)",
        "type": "standard"
      },
      {
        "name": "Printer Command Language (PCL)",
        "type": "technology"
      },
      {
        "name": "Apple Macintosh",
        "type": "product"
      },
      {
        "name": "Interpress",
        "type": "technology"
      },
      {
        "name": "Phototypesetting",
        "type": "technology"
      }
    ],
    "livePages": 1,
    "capacity": {
      "conservative": 22,
      "ambitious": 34
    },
    "planned": [
      {
        "slug": "what-is-postscript-page-description-language",
        "title": "What Is PostScript? The Page Description Language Explained",
        "section": "history",
        "angle": "Origins of PostScript at Adobe, its Interpress/Forth lineage, and how a device-independent page description language enabled DTP"
      },
      {
        "slug": "apple-laserwriter-and-the-birth-of-dtp",
        "title": "The Apple LaserWriter and the Birth of Desktop Publishing",
        "section": "history",
        "angle": "How a PostScript laser printer paired with the Mac created the DTP tipping point"
      },
      {
        "slug": "history-of-aldus-pagemaker",
        "title": "A History of Aldus PageMaker",
        "section": "history",
        "angle": "The pasteboard metaphor, Aldus, the coining of 'desktop publishing,' and PageMaker's later move to Adobe"
      },
      {
        "slug": "history-of-quarkxpress",
        "title": "A History of QuarkXPress",
        "section": "history",
        "angle": "How QuarkXPress became the professional page-layout standard and its rivalry with PageMaker"
      },
      {
        "slug": "history-of-ventura-publisher",
        "title": "A History of Ventura Publisher",
        "section": "history",
        "angle": "The style-sheet-driven, long-document approach to DTP on the PC/GEM platform"
      },
      {
        "slug": "history-of-page-layout-software",
        "title": "The History of Page Layout Software",
        "section": "history",
        "angle": "Overview arc from pasteboard tools to frame-based layout and modern successors like InDesign"
      },
      {
        "slug": "the-macintosh-and-desktop-publishing",
        "title": "The Macintosh and Desktop Publishing",
        "section": "history",
        "angle": "Why the Mac's bitmapped GUI and QuickDraw made WYSIWYG layout practical"
      },
      {
        "slug": "xerox-star-and-graphical-document-editing",
        "title": "The Xerox Star and Graphical Document Editing",
        "section": "history",
        "angle": "PARC's Star/Alto lineage and its influence on WYSIWYG and DTP concepts"
      },
      {
        "slug": "from-phototypesetting-to-desktop-publishing",
        "title": "From Phototypesetting to Desktop Publishing",
        "section": "history",
        "angle": "How DTP displaced dedicated phototypesetting systems and service-bureau typesetting"
      },
      {
        "slug": "history-of-service-bureaus-in-desktop-publishing",
        "title": "Service Bureaus in the Desktop Publishing Era",
        "section": "history",
        "angle": "The role of imagesetter service bureaus in bridging desktop files and high-resolution output"
      },
      {
        "slug": "history-of-adobe-illustrator",
        "title": "A History of Adobe Illustrator",
        "section": "history",
        "angle": "Bezier-based vector drawing built on PostScript and its place in the DTP toolchain"
      },
      {
        "slug": "history-of-outline-fonts-type1-and-truetype",
        "title": "A History of Outline Fonts: Type 1 and TrueType",
        "section": "history",
        "angle": "The shift from bitmap to scalable outline fonts, hinting, and the Type 1 vs TrueType story"
      },
      {
        "slug": "from-postscript-to-pdf",
        "title": "From PostScript to PDF: The Portable Document Format's Origins",
        "section": "history",
        "angle": "How PDF grew out of PostScript to become a fixed-layout, device-independent document format"
      },
      {
        "slug": "what-is-wysiwyg",
        "title": "What Is WYSIWYG?",
        "section": "glossary",
        "angle": "Definition and history of 'what you see is what you get' editing and its limits"
      },
      {
        "slug": "what-is-a-raster-image-processor",
        "title": "What Is a Raster Image Processor (RIP)?",
        "section": "glossary",
        "angle": "How a RIP converts PostScript/PDF page descriptions into printable raster data"
      },
      {
        "slug": "what-is-encapsulated-postscript-eps",
        "title": "What Is Encapsulated PostScript (EPS)?",
        "section": "glossary",
        "angle": "The EPS graphics interchange format, previews, and bounding boxes"
      },
      {
        "slug": "what-is-a-postscript-printer-description-ppd",
        "title": "What Is a PostScript Printer Description (PPD) File?",
        "section": "glossary",
        "angle": "How PPD files describe printer capabilities to the driver and RIP"
      },
      {
        "slug": "what-are-bezier-curves",
        "title": "What Are Bezier Curves?",
        "section": "glossary",
        "angle": "Control points, cubic curves, and why Beziers underpin outline fonts and vector art"
      },
      {
        "slug": "pcl-vs-postscript",
        "title": "PCL vs PostScript: Two Approaches to Page Description",
        "section": "guides",
        "angle": "Vendor-neutral comparison of HP PCL and PostScript as page description approaches"
      },
      {
        "slug": "what-is-a-page-description-language",
        "title": "What Is a Page Description Language?",
        "section": "guides",
        "angle": "The concept of describing a page's content and layout independently of the output device"
      },
      {
        "slug": "what-is-camera-ready-art",
        "title": "What Is Camera-Ready Art?",
        "section": "glossary",
        "angle": "Prepress terminology and how DTP output replaced manual paste-up for camera-ready copy"
      },
      {
        "slug": "digital-typography-in-the-dtp-era",
        "title": "Digital Typography in the Desktop Publishing Era",
        "section": "history",
        "angle": "Kerning, tracking, leading and typographic control brought to the desktop"
      }
    ],
    "crossLinks": [
      "printing-history",
      "office-infrastructure",
      "enterprise-printing",
      "publishing"
    ],
    "imageNeeds": [
      "Public-domain or freely licensed photographs of the Apple LaserWriter and early Macintosh hardware",
      "Historical screenshots of PageMaker/QuarkXPress/Ventura only where license is verified (many are copyrighted UI - prefer descriptive diagrams instead)",
      "Original diagrams illustrating a WYSIWYG editing pipeline and the RIP process (author-created, no fabricated specs)",
      "Diagram of a cubic Bezier curve with control points (author-created)",
      "Xerox Star / Alto photographs where verified public-domain or CC-licensed",
      "Diagram contrasting bitmap vs outline font rendering (author-created)"
    ]
  },
  {
    "id": "historical-manufacturers",
    "label": "Historical Manufacturers",
    "primarySection": "brands",
    "secondarySections": [
      "history"
    ],
    "description": "Factual heritage and product-line overviews of printing, imaging, and impact-era hardware manufacturers not already covered by the eight existing brand pages. Each entry summarizes a company's documented printing history, notable technologies, and corporate lineage (mergers, spin-offs, acquisitions) without rankings, reviews, prices, or performance claims.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "IBM",
        "type": "organization"
      },
      {
        "name": "OKI Electric Industry",
        "type": "organization"
      },
      {
        "name": "NEC Corporation",
        "type": "organization"
      },
      {
        "name": "Panasonic",
        "type": "brand"
      },
      {
        "name": "Konica Minolta",
        "type": "organization"
      },
      {
        "name": "Samsung Electronics",
        "type": "organization"
      },
      {
        "name": "Tektronix",
        "type": "organization"
      },
      {
        "name": "Centronics",
        "type": "organization"
      },
      {
        "name": "Diablo Systems",
        "type": "organization"
      },
      {
        "name": "Digital Equipment Corporation",
        "type": "organization"
      },
      {
        "name": "Fujitsu",
        "type": "organization"
      },
      {
        "name": "Olivetti",
        "type": "organization"
      },
      {
        "name": "Printronix",
        "type": "organization"
      },
      {
        "name": "QMS",
        "type": "organization"
      },
      {
        "name": "Star Micronics",
        "type": "organization"
      },
      {
        "name": "Citizen Systems",
        "type": "organization"
      },
      {
        "name": "Océ",
        "type": "organization"
      },
      {
        "name": "Eastman Kodak",
        "type": "organization"
      },
      {
        "name": "Wang Laboratories",
        "type": "organization"
      },
      {
        "name": "Apple",
        "type": "brand"
      }
    ],
    "livePages": 10,
    "capacity": {
      "conservative": 28,
      "ambitious": 55
    },
    "planned": [
      {
        "slug": "oki",
        "title": "OKI: Printer Manufacturer Overview",
        "section": "brands",
        "angle": "OKI Electric's Microline dot-matrix line and its LED-array page-printing technology."
      },
      {
        "slug": "nec-printers",
        "title": "NEC: Printer History and Product Lines",
        "section": "brands",
        "angle": "NEC's Spinwriter daisy-wheel and Pinwriter dot-matrix families in the office-printing era."
      },
      {
        "slug": "panasonic-printers",
        "title": "Panasonic: Printing Product Heritage",
        "section": "brands",
        "angle": "Panasonic's KX-P dot-matrix and later laser and multifunction office devices."
      },
      {
        "slug": "samsung-printers",
        "title": "Samsung: Printing Division History",
        "section": "brands",
        "angle": "Samsung's laser and multifunction printer business and the 2017 transfer of that division to HP."
      },
      {
        "slug": "tektronix-printers",
        "title": "Tektronix: Color Printing and the Phaser Line",
        "section": "brands",
        "angle": "Tektronix's Phaser color printers and solid-ink technology, and the 2000 sale of the division to Xerox."
      },
      {
        "slug": "printronix",
        "title": "Printronix: Line and Industrial Printing",
        "section": "brands",
        "angle": "Printronix's line-matrix and industrial/thermal barcode printing for high-duty environments."
      },
      {
        "slug": "qms",
        "title": "QMS: PostScript Laser Printing Pioneer",
        "section": "brands",
        "angle": "QMS's early adoption of PostScript in laser printers and its later merger into Minolta-QMS."
      },
      {
        "slug": "star-micronics-printers",
        "title": "Star Micronics: Printer Overview",
        "section": "brands",
        "angle": "Star Micronics' dot-matrix heritage and its enduring point-of-sale receipt printing lines."
      },
      {
        "slug": "citizen-printers",
        "title": "Citizen: Printing Product History",
        "section": "brands",
        "angle": "Citizen Systems' dot-matrix, portable, and receipt/label printing history."
      },
      {
        "slug": "fujitsu-printers",
        "title": "Fujitsu: Printer History and Product Lines",
        "section": "brands",
        "angle": "Fujitsu's DL-series dot-matrix and page-printing products in office and industrial use."
      },
      {
        "slug": "olivetti",
        "title": "Olivetti: Typewriter and Printing Heritage",
        "section": "brands",
        "angle": "Olivetti's transition from typewriters to office printers and computing peripherals."
      },
      {
        "slug": "oce",
        "title": "Océ: Wide-Format and Production Printing",
        "section": "brands",
        "angle": "Océ's wide-format and high-volume production printing heritage and its acquisition by Canon."
      },
      {
        "slug": "kodak-printers",
        "title": "Kodak: Printing and Imaging Overview",
        "section": "brands",
        "angle": "Eastman Kodak's consumer inkjet venture and its commercial/production printing operations."
      },
      {
        "slug": "centronics",
        "title": "Centronics: Dot Matrix and the Parallel Interface",
        "section": "history",
        "angle": "Centronics' early dot-matrix printers and the parallel port interface that carried its name."
      },
      {
        "slug": "diablo-systems",
        "title": "Diablo Systems: Daisy-Wheel Printing",
        "section": "history",
        "angle": "Diablo's daisy-wheel printers, the Diablo 630 command set, and its role under Xerox."
      },
      {
        "slug": "digital-equipment-corporation-printers",
        "title": "Digital Equipment Corporation: Printing Heritage",
        "section": "history",
        "angle": "DEC's LA-series impact and LN-series laser printers within minicomputer environments."
      },
      {
        "slug": "wang-laboratories-printers",
        "title": "Wang Laboratories: Office Printing Heritage",
        "section": "history",
        "angle": "Wang's word-processing systems and their associated office printers in the late impact era."
      },
      {
        "slug": "apple-printer-history",
        "title": "Apple: Printer History and the LaserWriter",
        "section": "history",
        "angle": "Apple's ImageWriter dot-matrix and the LaserWriter's role in launching desktop publishing with PostScript."
      },
      {
        "slug": "qume",
        "title": "Qume: Daisy-Wheel Printing Overview",
        "section": "history",
        "angle": "Qume's Sprint daisy-wheel printers and their place in letter-quality office output."
      },
      {
        "slug": "tally-genicom",
        "title": "Tally and Genicom: Line and Matrix Printing",
        "section": "history",
        "angle": "The Mannesmann Tally and Genicom lineage in line-matrix and dot-matrix industrial printing."
      }
    ],
    "crossLinks": [
      "printing-history",
      "glossary-terms",
      "office-infrastructure",
      "enterprise-printing"
    ],
    "imageNeeds": [
      "Public-domain or clearly-licensed photographs of historic printers (daisy-wheel, dot-matrix, early laser units)",
      "Public-domain corporate logos where licensing genuinely permits, otherwise omit",
      "Archival photos of the Centronics parallel connector and cabling",
      "Museum-sourced or public-domain images of the Apple LaserWriter and ImageWriter",
      "Public-domain images of line printers and industrial matrix printing hardware"
    ]
  },
  {
    "id": "copiers",
    "label": "Copiers & Reprographics",
    "primarySection": "guides",
    "secondarySections": [
      "history",
      "glossary"
    ],
    "description": "An encyclopedic cluster covering how photocopiers work and the evolution of reprographic technology — from pre-xerographic duplicating methods (mimeograph, spirit duplicators, diazo, photostat) through Chester Carlson's invention of xerography, the Xerox 914, and modern analog-to-digital copiers and multifunction devices. Focused on the electrophotographic process, its components, and document-reproduction history, treated vendor-neutrally and standards-first.",
    "appAnchor": null,
    "status": "planned",
    "entities": [
      {
        "name": "Xerography",
        "type": "technology"
      },
      {
        "name": "Electrophotography",
        "type": "technology"
      },
      {
        "name": "Chester Carlson",
        "type": "concept"
      },
      {
        "name": "Xerox 914",
        "type": "product"
      },
      {
        "name": "Haloid Company",
        "type": "organization"
      },
      {
        "name": "Xerox",
        "type": "brand"
      },
      {
        "name": "Photoconductor drum",
        "type": "concept"
      },
      {
        "name": "Corona wire",
        "type": "concept"
      },
      {
        "name": "Toner",
        "type": "concept"
      },
      {
        "name": "Fuser unit",
        "type": "concept"
      },
      {
        "name": "Selenium",
        "type": "concept"
      },
      {
        "name": "Amorphous silicon photoreceptor",
        "type": "technology"
      },
      {
        "name": "Mimeograph",
        "type": "technology"
      },
      {
        "name": "Spirit duplicator",
        "type": "technology"
      },
      {
        "name": "Diazo process",
        "type": "technology"
      },
      {
        "name": "Photostat",
        "type": "technology"
      },
      {
        "name": "Reprographics",
        "type": "concept"
      },
      {
        "name": "Multifunction printer",
        "type": "concept"
      },
      {
        "name": "Automatic document feeder",
        "type": "concept"
      },
      {
        "name": "Electrostatic latent image",
        "type": "concept"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 28,
      "ambitious": 44
    },
    "planned": [
      {
        "slug": "how-photocopiers-work",
        "title": "How Photocopiers Work",
        "section": "guides",
        "angle": "Step-by-step walk through the electrophotographic cycle: charge, expose, develop, transfer, fuse, clean."
      },
      {
        "slug": "what-is-xerography",
        "title": "What Is Xerography?",
        "section": "guides",
        "angle": "Defines dry electrophotographic copying and why the term was coined, distinct from wet chemical methods."
      },
      {
        "slug": "how-the-photoconductor-drum-works",
        "title": "How the Photoconductor Drum Works",
        "section": "guides",
        "angle": "Explains the light-sensitive drum's role in holding charge and forming the latent image."
      },
      {
        "slug": "corona-wires-and-charging-in-copiers",
        "title": "Corona Wires and Charging in Copiers",
        "section": "guides",
        "angle": "How corona wires and charge rollers apply and neutralize electrostatic charge during copying."
      },
      {
        "slug": "how-toner-fusing-works",
        "title": "How Toner Fusing Works in Copiers",
        "section": "guides",
        "angle": "The heat-and-pressure fuser step that bonds toner permanently to paper."
      },
      {
        "slug": "analog-vs-digital-copiers",
        "title": "Analog vs Digital Copiers",
        "section": "guides",
        "angle": "Contrasts lens-and-mirror optical copiers with scan-then-print digital systems."
      },
      {
        "slug": "how-color-copiers-work",
        "title": "How Color Copiers Work",
        "section": "guides",
        "angle": "Four-pass and single-pass color reproduction using CMYK toners and separations."
      },
      {
        "slug": "what-is-a-multifunction-printer",
        "title": "What Is a Multifunction Printer (MFP)?",
        "section": "guides",
        "angle": "How copy, print, scan, and fax converge in one electrophotographic device."
      },
      {
        "slug": "how-automatic-document-feeders-work",
        "title": "How Automatic Document Feeders Work",
        "section": "guides",
        "angle": "ADF and duplexing ADF mechanisms for feeding multi-page originals."
      },
      {
        "slug": "copier-vs-printer-differences",
        "title": "Copier vs Printer: Key Differences",
        "section": "guides",
        "angle": "How copiers reproduce a physical original versus printers rendering digital data, and how the two converged."
      },
      {
        "slug": "how-electrostatic-latent-images-form",
        "title": "How Electrostatic Latent Images Form",
        "section": "guides",
        "angle": "The physics of selective discharge on a photoconductor creating an invisible charge pattern."
      },
      {
        "slug": "selenium-and-photoreceptor-materials",
        "title": "Selenium and Photoreceptor Materials",
        "section": "guides",
        "angle": "Evolution of drum coatings from selenium to organic and amorphous-silicon photoreceptors."
      },
      {
        "slug": "invention-of-xerography-chester-carlson",
        "title": "The Invention of Xerography by Chester Carlson",
        "section": "history",
        "angle": "Carlson's 1938 Astoria experiment and the path to a working dry-copying process."
      },
      {
        "slug": "xerox-914-first-plain-paper-copier",
        "title": "The Xerox 914: First Plain-Paper Office Copier",
        "section": "history",
        "angle": "How the 914 brought xerography to offices and reshaped document reproduction."
      },
      {
        "slug": "haloid-to-xerox-company-history",
        "title": "From Haloid to Xerox: A Company History",
        "section": "history",
        "angle": "The commercialization of xerography and the firm's rename around the technology."
      },
      {
        "slug": "history-of-reprographics",
        "title": "A History of Reprographics",
        "section": "history",
        "angle": "Overview of document-reproduction methods before and after xerography."
      },
      {
        "slug": "spirit-duplicators-explained",
        "title": "Spirit Duplicators (Ditto Machines) Explained",
        "section": "history",
        "angle": "The alcohol-transfer 'ditto' process and its distinctive purple output."
      },
      {
        "slug": "diazo-and-blueprint-copying",
        "title": "Diazo and Blueprint Copying",
        "section": "history",
        "angle": "Light-sensitive ammonia-developed copying used for engineering drawings."
      },
      {
        "slug": "photostat-machines-history",
        "title": "Photostat Machines and Early Document Copying",
        "section": "history",
        "angle": "Camera-based photographic copying that predated dry xerography."
      },
      {
        "slug": "transition-from-analog-to-digital-copiers",
        "title": "The Transition from Analog to Digital Copiers",
        "section": "history",
        "angle": "How scanning, memory, and laser imaging turned copiers into networked MFPs."
      },
      {
        "slug": "reprographics",
        "title": "Reprographics",
        "section": "glossary",
        "angle": "Concise definition of the field of document and drawing reproduction."
      },
      {
        "slug": "photoconductor",
        "title": "Photoconductor",
        "section": "glossary",
        "angle": "Defines the light-sensitive material central to electrophotographic imaging."
      }
    ],
    "crossLinks": [
      "printing-history",
      "office-infrastructure",
      "enterprise-printing",
      "publishing"
    ],
    "imageNeeds": [
      "Public-domain diagrams of the xerographic process cycle (charge/expose/develop/transfer/fuse)",
      "Public-domain or expired-copyright photographs of the Xerox 914 and early Haloid copiers",
      "Chester Carlson patent illustrations from US Patent 2,297,691 (public domain)",
      "Public-domain photographs of mimeograph, spirit duplicator (Ditto), and photostat machines",
      "Diagrams of diazo/blueprint copying chemistry from public-domain technical sources",
      "Public-domain schematic of a photoconductor drum and corona wire assembly"
    ]
  },
  {
    "id": "printer-technologies",
    "label": "Printer Technologies",
    "primarySection": "guides",
    "secondarySections": [
      "history",
      "glossary"
    ],
    "description": "An explanatory cluster covering the physical marking and imaging mechanisms behind printers: how each printing technology forms an image, deposits colorant, and fixes it to media. Scope spans electrophotography (laser and LED), inkjet (thermal and piezoelectric), dye-sublimation, solid ink, impact/dot-matrix, and thermal (direct and transfer) printing, plus the shared subsystems (drums, fusers, print heads) and color foundations (CMYK, halftoning) that make them work.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Electrophotography",
        "type": "technology"
      },
      {
        "name": "Xerography",
        "type": "technology"
      },
      {
        "name": "Laser printing",
        "type": "technology"
      },
      {
        "name": "LED printing",
        "type": "technology"
      },
      {
        "name": "Inkjet printing",
        "type": "technology"
      },
      {
        "name": "Thermal inkjet",
        "type": "technology"
      },
      {
        "name": "Piezoelectric inkjet",
        "type": "technology"
      },
      {
        "name": "Dye-sublimation",
        "type": "technology"
      },
      {
        "name": "Solid ink",
        "type": "technology"
      },
      {
        "name": "Dot-matrix printing",
        "type": "technology"
      },
      {
        "name": "Thermal transfer printing",
        "type": "technology"
      },
      {
        "name": "Direct thermal printing",
        "type": "technology"
      },
      {
        "name": "Drop-on-demand",
        "type": "concept"
      },
      {
        "name": "Halftoning",
        "type": "concept"
      },
      {
        "name": "CMYK",
        "type": "concept"
      },
      {
        "name": "Fuser unit",
        "type": "concept"
      },
      {
        "name": "Photoconductor drum",
        "type": "concept"
      },
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "PCL",
        "type": "format"
      },
      {
        "name": "Adobe",
        "type": "organization"
      }
    ],
    "livePages": 56,
    "capacity": {
      "conservative": 56,
      "ambitious": 72
    },
    "planned": [
      {
        "slug": "how-dye-sublimation-printers-work",
        "title": "How Dye-Sublimation Printers Work",
        "section": "guides",
        "angle": "The gas-phase dye transfer process, ribbon panels, and why dye-sub produces continuous-tone images unlike halftoned prints."
      },
      {
        "slug": "how-led-printers-work",
        "title": "How LED Printers Work",
        "section": "guides",
        "angle": "Electrophotography using a fixed LED array instead of a scanning laser to expose the drum, and what that changes mechanically."
      },
      {
        "slug": "laser-vs-led-printing",
        "title": "Laser vs LED Printing",
        "section": "guides",
        "angle": "A neutral comparison of the two electrophotographic imaging methods: moving-beam laser versus stationary LED bar."
      },
      {
        "slug": "how-solid-ink-printers-work",
        "title": "How Solid Ink Printers Work",
        "section": "guides",
        "angle": "Melting solid wax-based ink sticks and jetting molten colorant onto a transfer drum before applying it to paper."
      },
      {
        "slug": "how-thermal-inkjet-printing-works",
        "title": "How Thermal Inkjet Printing Works",
        "section": "guides",
        "angle": "Resistive heating that vaporizes a bubble to eject ink droplets on demand, the mechanism behind many desktop inkjets."
      },
      {
        "slug": "how-piezoelectric-inkjet-printing-works",
        "title": "How Piezoelectric Inkjet Printing Works",
        "section": "guides",
        "angle": "Using a piezo crystal's mechanical deflection to pump ink droplets without heating the fluid."
      },
      {
        "slug": "thermal-inkjet-vs-piezoelectric-inkjet",
        "title": "Thermal Inkjet vs Piezoelectric Inkjet",
        "section": "guides",
        "angle": "How the two drop-on-demand inkjet mechanisms differ in droplet formation and ink compatibility."
      },
      {
        "slug": "how-thermal-transfer-printing-works",
        "title": "How Thermal Transfer Printing Works",
        "section": "guides",
        "angle": "Melting pigment from a coated ribbon onto media, the mechanism common in label and barcode printing."
      },
      {
        "slug": "direct-thermal-vs-thermal-transfer-printing",
        "title": "Direct Thermal vs Thermal Transfer Printing",
        "section": "guides",
        "angle": "Comparing heat-sensitive-paper printing against ribbon-based transfer, including durability trade-offs."
      },
      {
        "slug": "the-electrophotographic-process-explained",
        "title": "The Electrophotographic Process Explained",
        "section": "guides",
        "angle": "The six canonical steps (charge, expose, develop, transfer, fuse, clean) shared by laser and LED printers."
      },
      {
        "slug": "how-a-fuser-unit-works",
        "title": "How a Fuser Unit Works",
        "section": "guides",
        "angle": "The heat-and-pressure stage that bonds toner to paper, and why laser pages come out warm."
      },
      {
        "slug": "what-is-a-photoconductor-drum",
        "title": "What Is a Photoconductor Drum",
        "section": "glossary",
        "angle": "The light-sensitive imaging cylinder at the core of electrophotographic printing and how its charge is manipulated."
      },
      {
        "slug": "how-inkjet-print-heads-work",
        "title": "How Inkjet Print Heads Work",
        "section": "guides",
        "angle": "Nozzle arrays, droplet ejection, and the difference between integrated and permanent print head designs."
      },
      {
        "slug": "how-cmyk-color-printing-works",
        "title": "How CMYK Color Printing Works",
        "section": "guides",
        "angle": "Subtractive color mixing with cyan, magenta, yellow, and key (black) to reproduce color on the page."
      },
      {
        "slug": "what-is-halftoning-in-printing",
        "title": "What Is Halftoning in Printing",
        "section": "guides",
        "angle": "Simulating continuous tone with patterns of dots, and how it differs from true continuous-tone output."
      },
      {
        "slug": "how-color-laser-printers-work",
        "title": "How Color Laser Printers Work",
        "section": "guides",
        "angle": "Layering four toner colors via multiple imaging stations or repeated drum passes."
      },
      {
        "slug": "pigment-ink-vs-dye-ink",
        "title": "Pigment Ink vs Dye Ink",
        "section": "guides",
        "angle": "How the two inkjet colorant types differ in composition, and general durability and appearance characteristics."
      },
      {
        "slug": "how-impact-dot-matrix-printing-forms-characters",
        "title": "How Dot-Matrix Printing Forms Characters",
        "section": "guides",
        "angle": "Firing pins against an inked ribbon to build glyphs from dots, and why impact printing suits multi-part forms."
      },
      {
        "slug": "how-toner-cartridges-work",
        "title": "How Toner Cartridges Work",
        "section": "guides",
        "angle": "The powdered toner supply, developer, and the components often integrated into a cartridge assembly."
      },
      {
        "slug": "how-ink-cartridges-work",
        "title": "How Ink Cartridges Work",
        "section": "guides",
        "angle": "Liquid ink reservoirs, and integrated-head versus tank-fed cartridge architectures."
      },
      {
        "slug": "what-is-drop-on-demand-printing",
        "title": "What Is Drop-on-Demand Printing",
        "section": "glossary",
        "angle": "The inkjet paradigm where droplets are produced only when needed, contrasted with continuous inkjet."
      },
      {
        "slug": "continuous-inkjet-vs-drop-on-demand",
        "title": "Continuous Inkjet vs Drop-on-Demand",
        "section": "guides",
        "angle": "Comparing the always-flowing industrial inkjet method with the on-demand desktop approach."
      }
    ],
    "crossLinks": [
      "printing-history",
      "multifunction-printers",
      "thermal-printing",
      "receipt-printing"
    ],
    "imageNeeds": [
      "Public-domain diagrams of the electrophotographic process (US patent figures, e.g. Chester Carlson xerography patents, are public domain)",
      "Wikimedia Commons public-domain or CC0 photographs of printer internals: drums, fuser assemblies, print heads",
      "Public-domain macro photos of dot-matrix printout and continuous-form paper",
      "Original schematic line drawings (self-authored SVG) of thermal vs piezoelectric droplet ejection",
      "Public-domain historical photos of early Xerox and HP LaserJet units for mechanism context",
      "Self-authored SVG halftone dot-pattern and CMYK subtractive color diagrams"
    ]
  },
  {
    "id": "multifunction-printers",
    "label": "Multifunction Printers",
    "primarySection": "guides",
    "secondarySections": [
      "history",
      "workflows"
    ],
    "description": "An encyclopedic cluster explaining all-in-one (multifunction) devices that combine printing, scanning, copying, and faxing in a single unit: how the shared imaging engine, scanner assembly, document feeder, and fax subsystem work together, the standards and driverless protocols that connect them to computers and networks, and the common scan-to-destination workflows. Coverage is vendor-neutral and standards-first, describing durable mechanisms and specifications rather than specific product models or performance figures.",
    "appAnchor": null,
    "status": "planned",
    "entities": [
      {
        "name": "Multifunction printer",
        "type": "concept"
      },
      {
        "name": "Photocopier",
        "type": "concept"
      },
      {
        "name": "Xerography",
        "type": "technology"
      },
      {
        "name": "Flatbed scanner",
        "type": "technology"
      },
      {
        "name": "Automatic document feeder",
        "type": "technology"
      },
      {
        "name": "Charge-coupled device",
        "type": "technology"
      },
      {
        "name": "Contact image sensor",
        "type": "technology"
      },
      {
        "name": "TWAIN",
        "type": "standard"
      },
      {
        "name": "SANE",
        "type": "standard"
      },
      {
        "name": "eSCL",
        "type": "protocol"
      },
      {
        "name": "Mopria Alliance",
        "type": "organization"
      },
      {
        "name": "AirPrint",
        "type": "technology"
      },
      {
        "name": "WS-Scan (WSD)",
        "type": "protocol"
      },
      {
        "name": "Internet Printing Protocol",
        "type": "protocol"
      },
      {
        "name": "PWG",
        "type": "organization"
      },
      {
        "name": "PDF/A",
        "type": "format"
      },
      {
        "name": "ISO 32000",
        "type": "standard"
      },
      {
        "name": "Server Message Block",
        "type": "protocol"
      },
      {
        "name": "Optical character recognition",
        "type": "technology"
      },
      {
        "name": "Fuser",
        "type": "concept"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 26,
      "ambitious": 42
    },
    "planned": [
      {
        "slug": "how-multifunction-printers-share-one-engine",
        "title": "How Multifunction Printers Combine Print, Scan, Copy, and Fax",
        "section": "guides",
        "angle": "Explains how a single imaging engine plus a scanner unit are reused across all four functions inside one chassis."
      },
      {
        "slug": "how-flatbed-scanners-work",
        "title": "How Flatbed Scanners Work",
        "section": "guides",
        "angle": "The moving sensor bar, light source, glass platen, and how a page is digitized line by line."
      },
      {
        "slug": "how-photocopying-works",
        "title": "How Photocopying Works",
        "section": "guides",
        "angle": "How a copier scans an original and reprints it, and how xerographic copying differs from digital copy-scan-print."
      },
      {
        "slug": "ccd-vs-cis-scanner-sensors",
        "title": "CCD vs CIS Scanner Sensors",
        "section": "guides",
        "angle": "Compares charge-coupled-device and contact-image-sensor scanning mechanisms and their optical trade-offs."
      },
      {
        "slug": "optical-vs-interpolated-scan-resolution",
        "title": "Optical vs Interpolated Scan Resolution",
        "section": "guides",
        "angle": "Why a scanner's true optical DPI matters more than software-interpolated resolution figures."
      },
      {
        "slug": "how-color-and-grayscale-scanning-work",
        "title": "How Color and Grayscale Scanning Work",
        "section": "guides",
        "angle": "Explains scan color modes and bit depth, and how RGB channels build a color scan."
      },
      {
        "slug": "how-duplex-scanning-works",
        "title": "How Duplex Scanning Works",
        "section": "guides",
        "angle": "Single-pass dual-sensor versus reversing-ADF approaches to scanning both sides of a page."
      },
      {
        "slug": "how-fax-integrates-into-multifunction-printers",
        "title": "How Fax Integrates Into Multifunction Printers",
        "section": "guides",
        "angle": "How the Group 3 fax subsystem reuses the scanner and print engine within an all-in-one device."
      },
      {
        "slug": "what-is-twain",
        "title": "What Is TWAIN?",
        "section": "guides",
        "angle": "The TWAIN scanning API standard and how applications acquire images from scanners."
      },
      {
        "slug": "what-is-escl-driverless-scanning",
        "title": "What Is eSCL Driverless Scanning?",
        "section": "guides",
        "angle": "The eSCL/AirScan protocol and Mopria-driven driverless network scanning over IPP-style HTTP."
      },
      {
        "slug": "what-is-wsd-scanning",
        "title": "What Is WSD Scanning?",
        "section": "guides",
        "angle": "Web Services for Devices scanning and how Windows discovers and drives network MFP scanners."
      },
      {
        "slug": "how-mfp-control-panels-work",
        "title": "How Multifunction Printer Control Panels Work",
        "section": "guides",
        "angle": "Embedded touchscreens, address books, and on-device workflow shortcuts on modern MFPs."
      },
      {
        "slug": "how-copier-collation-and-finishing-work",
        "title": "How Copier Collation and Finishing Work",
        "section": "guides",
        "angle": "Collation, sorting, stapling, and finishing units that assemble multi-copy output."
      },
      {
        "slug": "scan-to-email-explained",
        "title": "Scan to Email Explained",
        "section": "workflows",
        "angle": "How an MFP composes and sends a scanned document as an email attachment via SMTP."
      },
      {
        "slug": "scan-to-network-folder",
        "title": "Scan to Network Folder (SMB) Explained",
        "section": "workflows",
        "angle": "How scan-to-folder delivers files to a shared network location using SMB."
      },
      {
        "slug": "scan-to-cloud-storage",
        "title": "Scan to Cloud Storage Explained",
        "section": "workflows",
        "angle": "How MFPs upload scans to cloud document services and the auth involved."
      },
      {
        "slug": "scan-to-usb-drive",
        "title": "Scan to USB Drive Explained",
        "section": "workflows",
        "angle": "Saving scans directly to a USB flash drive at the device without a computer."
      },
      {
        "slug": "choosing-scan-file-formats",
        "title": "Choosing Scan File Formats: PDF, PDF/A, TIFF, JPEG",
        "section": "workflows",
        "angle": "When to use each scan output format, including PDF/A for archival documents."
      },
      {
        "slug": "history-of-multifunction-printers",
        "title": "The History of Multifunction Printers",
        "section": "history",
        "angle": "How standalone printers, copiers, scanners, and fax machines converged into single all-in-one devices."
      },
      {
        "slug": "from-standalone-copiers-to-all-in-ones",
        "title": "From Standalone Copiers to All-in-One Devices",
        "section": "history",
        "angle": "The office transition from dedicated copiers to networked digital multifunction devices."
      }
    ],
    "crossLinks": [
      "document-workflows",
      "printer-technologies",
      "thermal-printing",
      "receipt-printing"
    ],
    "imageNeeds": [
      "Public-domain photographs of an opened flatbed scanner showing the sensor bar, lamp, and belt",
      "Public-domain or Wikimedia-licensed images of an automatic document feeder mechanism",
      "Public-domain xerography process diagrams (charging, exposure, development, transfer, fusing)",
      "Historical public-domain photos of early office copiers (e.g. Xerox 914) illustrating the copier-to-MFP transition",
      "Public-domain CCD and CIS sensor illustrations or macro photographs",
      "Public-domain photos of an MFP control panel / embedded touchscreen",
      "Public-domain images of copier finishing units (stapler/sorter bins)"
    ]
  },
  {
    "id": "thermal-printing",
    "label": "Thermal Printing",
    "primarySection": "guides",
    "secondarySections": [
      "history",
      "glossary"
    ],
    "description": "A guides-first knowledge cluster explaining thermal printing technology in both of its major forms — direct thermal (heat-sensitive coated media) and thermal transfer (heated printhead melting ink from a ribbon onto media) — plus the consumables, printhead mechanics, media chemistry, control languages, and durability trade-offs behind receipts, shipping labels, barcodes, and wristbands. Coverage is vendor-neutral and standards-first, distinct from the two existing thermal stubs (glossary/thermal-printing and history/thermal-printing-history).",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Direct thermal printing",
        "type": "technology"
      },
      {
        "name": "Thermal transfer printing",
        "type": "technology"
      },
      {
        "name": "Thermal printhead",
        "type": "technology"
      },
      {
        "name": "Thermal paper",
        "type": "format"
      },
      {
        "name": "Leuco dye",
        "type": "concept"
      },
      {
        "name": "Thermal transfer ribbon",
        "type": "format"
      },
      {
        "name": "Dye-sublimation printing",
        "type": "technology"
      },
      {
        "name": "ZPL (Zebra Programming Language)",
        "type": "protocol"
      },
      {
        "name": "ESC/POS",
        "type": "protocol"
      },
      {
        "name": "Barcode",
        "type": "standard"
      },
      {
        "name": "GS1",
        "type": "organization"
      },
      {
        "name": "Receipt printer",
        "type": "product"
      },
      {
        "name": "Label printer",
        "type": "product"
      },
      {
        "name": "Bisphenol A (BPA)",
        "type": "concept"
      },
      {
        "name": "Zebra Technologies",
        "type": "brand"
      },
      {
        "name": "Point of sale (POS)",
        "type": "concept"
      },
      {
        "name": "Print darkness (thermal density)",
        "type": "concept"
      },
      {
        "name": "Wax and resin ribbons",
        "type": "concept"
      }
    ],
    "livePages": 3,
    "capacity": {
      "conservative": 26,
      "ambitious": 42
    },
    "planned": [
      {
        "slug": "direct-thermal-vs-thermal-transfer",
        "title": "Direct Thermal vs Thermal Transfer Printing",
        "section": "guides",
        "angle": "Side-by-side explanation of the two thermal methods, media, and where each is appropriate"
      },
      {
        "slug": "how-direct-thermal-printing-works",
        "title": "How Direct Thermal Printing Works",
        "section": "guides",
        "angle": "Heat-sensitive coating chemistry, printhead heating elements, and image formation"
      },
      {
        "slug": "what-is-thermal-paper",
        "title": "What Is Thermal Paper?",
        "section": "guides",
        "angle": "Coated leuco-dye/developer media, why it darkens with heat, and storage sensitivity"
      },
      {
        "slug": "thermal-transfer-ribbons-explained",
        "title": "Thermal Transfer Ribbons: Wax, Wax-Resin, and Resin",
        "section": "guides",
        "angle": "Ribbon families, matching ribbon to substrate, and durability trade-offs"
      },
      {
        "slug": "how-thermal-printheads-work",
        "title": "How Thermal Printheads Work",
        "section": "guides",
        "angle": "Resistive heating elements, dot density, dwell time, and printhead wear"
      },
      {
        "slug": "cleaning-and-maintaining-thermal-printheads",
        "title": "Cleaning and Maintaining a Thermal Printhead",
        "section": "guides",
        "angle": "Vendor-neutral maintenance practices and causes of voids/streaks"
      },
      {
        "slug": "thermal-receipt-printing-explained",
        "title": "How Thermal Receipt Printing Works",
        "section": "guides",
        "angle": "Why POS receipts use direct thermal, paper rolls, and print speed"
      },
      {
        "slug": "barcode-label-printing-basics",
        "title": "Barcode Label Printing Basics",
        "section": "guides",
        "angle": "How thermal printers render 1D/2D barcodes and why edge definition matters"
      },
      {
        "slug": "what-is-zpl",
        "title": "What Is ZPL (Zebra Programming Language)?",
        "section": "guides",
        "angle": "Overview of the label-description language and its role in industrial labeling"
      },
      {
        "slug": "what-is-esc-pos",
        "title": "What Is ESC/POS?",
        "section": "guides",
        "angle": "The receipt-printer command set and how POS systems drive thermal printers"
      },
      {
        "slug": "thermal-label-sizes-and-formats",
        "title": "Understanding Thermal Label Sizes and Roll Formats",
        "section": "guides",
        "angle": "Roll vs fanfold, gap/black-mark/continuous media, and label calibration"
      },
      {
        "slug": "direct-thermal-label-longevity",
        "title": "Why Direct Thermal Prints Fade",
        "section": "guides",
        "angle": "Heat, light, friction, and solvents that darken or erase thermal images over time"
      },
      {
        "slug": "dye-sublimation-vs-thermal-transfer",
        "title": "Dye-Sublimation vs Thermal Transfer Printing",
        "section": "guides",
        "angle": "How dye-sub differs from thermal transfer and where each is used"
      },
      {
        "slug": "choosing-thermal-label-material",
        "title": "Choosing Thermal Label Materials",
        "section": "guides",
        "angle": "Paper vs synthetic facestocks and adhesive considerations, vendor-neutral"
      },
      {
        "slug": "bpa-and-thermal-paper",
        "title": "BPA, BPS, and Thermal Paper Coatings",
        "section": "guides",
        "angle": "The color-developer chemistry debate and phenol-free alternatives, factually framed"
      },
      {
        "slug": "print-darkness-and-thermal-density",
        "title": "Print Darkness and Thermal Density Settings",
        "section": "guides",
        "angle": "How darkness/heat and speed settings affect scannability and printhead life"
      },
      {
        "slug": "thermal-wristband-printing",
        "title": "How Thermal Wristband Printing Works",
        "section": "guides",
        "angle": "Direct thermal wristbands used in events and healthcare, technology only"
      },
      {
        "slug": "history-of-thermal-receipt-printers",
        "title": "A History of Thermal Receipt Printers",
        "section": "history",
        "angle": "How POS receipt printing shifted from impact to direct thermal"
      },
      {
        "slug": "evolution-of-barcode-label-printing",
        "title": "The Evolution of Barcode Label Printing",
        "section": "history",
        "angle": "From early labelers to industrial thermal transfer barcode printers"
      },
      {
        "slug": "direct-thermal",
        "title": "Direct Thermal",
        "section": "glossary",
        "angle": "Concise glossary definition of direct thermal printing"
      },
      {
        "slug": "thermal-transfer",
        "title": "Thermal Transfer",
        "section": "glossary",
        "angle": "Concise glossary definition of thermal transfer printing"
      },
      {
        "slug": "thermal-ribbon",
        "title": "Thermal Ribbon",
        "section": "glossary",
        "angle": "Concise glossary definition of thermal transfer ribbon"
      },
      {
        "slug": "zpl",
        "title": "ZPL",
        "section": "glossary",
        "angle": "Concise glossary definition of Zebra Programming Language"
      }
    ],
    "crossLinks": [
      "printing-history",
      "printer-technologies",
      "multifunction-printers",
      "receipt-printing"
    ],
    "imageNeeds": [
      "Public-domain or CC0 Wikimedia Commons photos of thermal receipt printers and label printers",
      "USPTO/patent-office line diagrams of thermal printhead heating elements (public domain)",
      "Verified public-domain cross-section illustrations of coated thermal paper layers",
      "CC0/PD photos of thermal transfer ribbon rolls and printed barcode labels",
      "Public-domain example barcode symbologies (barcode marks are generally free to reproduce)",
      "Historical public-domain imagery of early point-of-sale and receipt hardware"
    ]
  },
  {
    "id": "receipt-printing",
    "label": "Receipt Printing",
    "primarySection": "guides",
    "secondarySections": [
      "workflows",
      "glossary"
    ],
    "description": "An educational, vendor-neutral reference on receipt and point-of-sale printing: how thermal receipt printers work, the paper and roll formats they use, the command sets and standards that drive them (ESC/POS, UnifiedPOS/OPOS), connectivity to POS systems and cash drawers, and the durability trade-offs of thermal media. Scope stays on receipt/POS printing concepts, not product marketing, rankings, or purchase advice.",
    "appAnchor": "smart-printer",
    "status": "planned",
    "entities": [
      {
        "name": "ESC/POS",
        "type": "standard"
      },
      {
        "name": "UnifiedPOS",
        "type": "standard"
      },
      {
        "name": "OPOS",
        "type": "standard"
      },
      {
        "name": "Star Line Mode",
        "type": "standard"
      },
      {
        "name": "Direct thermal printing",
        "type": "technology"
      },
      {
        "name": "Thermal transfer printing",
        "type": "technology"
      },
      {
        "name": "Impact printing",
        "type": "technology"
      },
      {
        "name": "Thermal paper",
        "type": "format"
      },
      {
        "name": "80mm receipt roll",
        "type": "format"
      },
      {
        "name": "58mm receipt roll",
        "type": "format"
      },
      {
        "name": "Point of sale",
        "type": "concept"
      },
      {
        "name": "Bisphenol A (BPA)",
        "type": "concept"
      },
      {
        "name": "Auto-cutter",
        "type": "concept"
      },
      {
        "name": "Cash drawer",
        "type": "concept"
      },
      {
        "name": "Epson",
        "type": "brand"
      },
      {
        "name": "Star Micronics",
        "type": "brand"
      },
      {
        "name": "Bixolon",
        "type": "brand"
      },
      {
        "name": "USB",
        "type": "protocol"
      },
      {
        "name": "Bluetooth",
        "type": "protocol"
      },
      {
        "name": "Ethernet",
        "type": "protocol"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 26,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "what-is-a-receipt-printer",
        "title": "What Is a Receipt Printer?",
        "section": "guides",
        "angle": "Defines POS/receipt printers and how they differ from general-purpose office printers in form, media, and command interface."
      },
      {
        "slug": "how-thermal-receipt-printers-work",
        "title": "How Thermal Receipt Printers Work",
        "section": "guides",
        "angle": "Explains the thermal printhead, heat-sensitive coating, and line-by-line printing mechanism of a direct thermal receipt printer."
      },
      {
        "slug": "direct-thermal-vs-thermal-transfer-receipt-printing",
        "title": "Direct Thermal vs Thermal Transfer in Receipt Printing",
        "section": "guides",
        "angle": "Compares the two thermal methods, why receipts typically use direct thermal, and where thermal transfer applies instead."
      },
      {
        "slug": "receipt-paper-sizes-explained",
        "title": "Receipt Paper Sizes Explained (58mm and 80mm)",
        "section": "guides",
        "angle": "Describes common roll widths, diameters, and core sizes and how they map to printer models and column counts."
      },
      {
        "slug": "how-receipt-auto-cutters-work",
        "title": "How Receipt Auto-Cutters Work",
        "section": "guides",
        "angle": "Explains full vs partial cut mechanisms and how the cut is triggered by print commands."
      },
      {
        "slug": "receipt-printer-connectivity-options",
        "title": "Receipt Printer Connectivity: USB, Ethernet, and Bluetooth",
        "section": "guides",
        "angle": "Vendor-neutral overview of the physical and wireless interfaces used to attach a receipt printer to a POS."
      },
      {
        "slug": "how-cash-drawers-connect-to-receipt-printers",
        "title": "How Cash Drawers Connect to Receipt Printers",
        "section": "guides",
        "angle": "Explains the drawer kick-out signal sent through the printer and the RJ-style connector used for it."
      },
      {
        "slug": "impact-vs-thermal-receipt-printers",
        "title": "Impact vs Thermal Receipt Printers",
        "section": "guides",
        "angle": "Compares dot-matrix impact receipt printers with thermal units, including kitchen/heat-tolerant use cases."
      },
      {
        "slug": "why-thermal-receipts-fade",
        "title": "Why Thermal Receipts Fade Over Time",
        "section": "guides",
        "angle": "Explains the chemistry of heat-sensitive coatings and the heat, light, and friction factors that cause fading."
      },
      {
        "slug": "bpa-and-bpa-free-thermal-paper",
        "title": "BPA and BPA-Free Thermal Paper",
        "section": "guides",
        "angle": "Educational overview of developer chemicals in thermal paper and what BPA-free and phenol-free labeling means."
      },
      {
        "slug": "what-is-unifiedpos-and-opos",
        "title": "What Are UnifiedPOS and OPOS?",
        "section": "guides",
        "angle": "Explains the vendor-neutral device standards that let POS software drive receipt printers and peripherals."
      },
      {
        "slug": "kitchen-printers-in-restaurants",
        "title": "Kitchen Printers in Restaurants",
        "section": "guides",
        "angle": "Explains why kitchens often use impact printers and how order tickets route from a POS to remote printers."
      },
      {
        "slug": "receipt-printer-drivers-explained",
        "title": "How Receipt Printer Drivers Work",
        "section": "guides",
        "angle": "Explains raw/ESC-POS driving vs OS printer drivers and why POS apps often bypass generic drivers."
      },
      {
        "slug": "receipt-print-density-and-speed",
        "title": "Understanding Receipt Print Density and Speed",
        "section": "guides",
        "angle": "Explains dots-per-line, print speed in mm/s, and how density settings affect legibility and paper longevity."
      },
      {
        "slug": "storing-and-handling-thermal-receipt-rolls",
        "title": "Storing and Handling Thermal Receipt Rolls",
        "section": "guides",
        "angle": "Best practices for storing thermal media to avoid premature activation, based on the material's heat and solvent sensitivity."
      },
      {
        "slug": "connect-a-receipt-printer-to-a-pos-system",
        "title": "Connecting a Receipt Printer to a POS System",
        "section": "workflows",
        "angle": "Step-through of pairing a receipt printer with POS software over USB, network, or Bluetooth."
      },
      {
        "slug": "set-up-a-network-receipt-printer",
        "title": "Setting Up a Network Receipt Printer",
        "section": "workflows",
        "angle": "How Ethernet/Wi-Fi receipt printers get an IP address and are addressed by POS terminals."
      },
      {
        "slug": "print-receipts-from-a-tablet-pos",
        "title": "Printing Receipts from a Tablet POS",
        "section": "workflows",
        "angle": "How tablet-based POS apps drive Bluetooth or network receipt printers, and the role of ESC/POS."
      },
      {
        "slug": "receipt-roll",
        "title": "Receipt Roll",
        "section": "glossary",
        "angle": "Defines the paper roll consumable, its width/core/diameter dimensions, and thermal vs plain-paper types."
      },
      {
        "slug": "auto-cutter",
        "title": "Auto-Cutter",
        "section": "glossary",
        "angle": "Defines the automatic paper-cutting mechanism and full vs partial cut."
      },
      {
        "slug": "cash-drawer-kick-out",
        "title": "Cash Drawer Kick-Out",
        "section": "glossary",
        "angle": "Defines the electrical pulse a printer sends to open an attached cash drawer."
      },
      {
        "slug": "point-of-sale-terminal",
        "title": "Point-of-Sale Terminal",
        "section": "glossary",
        "angle": "Defines a POS terminal and its relationship to the attached receipt printer and peripherals."
      }
    ],
    "crossLinks": [
      "thermal-printing",
      "mobile-printing",
      "document-workflows"
    ],
    "imageNeeds": [
      "Public-domain or own-generated diagram of a thermal printhead and heat-sensitive coating cross-section",
      "Neutral line diagram comparing 58mm and 80mm roll cross-sections (width, core, diameter)",
      "Diagram of ESC/POS command flow from POS software to printer",
      "Diagram of the cash-drawer kick-out signal path through a receipt printer connector",
      "Public-domain photograph of a generic thermal receipt roll or POS printer (verified license)",
      "Schematic of full vs partial auto-cutter cut lines"
    ]
  },
  {
    "id": "label-printing",
    "label": "Label Printing",
    "primarySection": "guides",
    "secondarySections": [
      "workflows",
      "glossary"
    ],
    "description": "An encyclopedic, vendor-neutral reference on label printing: the printing technologies used for labels (direct thermal and thermal transfer), label media and adhesives, barcode symbologies and standards, and the practical workflows for producing shipping, product, and asset labels. It explains durable, standards-based concepts (GS1, ISO/IEC barcode specs, ZPL) without recommending specific products or inventing performance or market figures.",
    "appAnchor": "smart-printer",
    "status": "expand",
    "entities": [
      {
        "name": "Direct thermal printing",
        "type": "technology"
      },
      {
        "name": "Thermal transfer printing",
        "type": "technology"
      },
      {
        "name": "Zebra Programming Language (ZPL)",
        "type": "format"
      },
      {
        "name": "EPL (Eltron Programming Language)",
        "type": "format"
      },
      {
        "name": "GS1",
        "type": "organization"
      },
      {
        "name": "Code 128",
        "type": "standard"
      },
      {
        "name": "GS1-128",
        "type": "standard"
      },
      {
        "name": "UPC",
        "type": "standard"
      },
      {
        "name": "EAN",
        "type": "standard"
      },
      {
        "name": "QR Code",
        "type": "standard"
      },
      {
        "name": "Data Matrix",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 15416",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 15415",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 18004",
        "type": "standard"
      },
      {
        "name": "GHS label",
        "type": "standard"
      },
      {
        "name": "Thermal transfer ribbon",
        "type": "concept"
      },
      {
        "name": "Pressure-sensitive adhesive",
        "type": "concept"
      },
      {
        "name": "Die-cut label",
        "type": "concept"
      },
      {
        "name": "Label liner (release liner)",
        "type": "concept"
      },
      {
        "name": "Barcode",
        "type": "concept"
      }
    ],
    "livePages": 1,
    "capacity": {
      "conservative": 28,
      "ambitious": 46
    },
    "planned": [
      {
        "slug": "how-thermal-label-printers-work",
        "title": "How Thermal Label Printers Work",
        "section": "guides",
        "angle": "The mechanics of thermal printheads, media feed, and heat-based marking used in label printers."
      },
      {
        "slug": "thermal-transfer-ribbon-types",
        "title": "Thermal Transfer Ribbon Types: Wax, Wax-Resin, and Resin",
        "section": "guides",
        "angle": "Explains ribbon chemistries and how they pair with label materials for durability."
      },
      {
        "slug": "how-to-choose-a-label-printer",
        "title": "How to Choose a Label Printer",
        "section": "guides",
        "angle": "A neutral decision framework across print method, resolution, media width, and connectivity."
      },
      {
        "slug": "desktop-vs-industrial-label-printers",
        "title": "Desktop vs Industrial Label Printers",
        "section": "guides",
        "angle": "Contrasts form factors, duty expectations, and media handling of the two printer classes."
      },
      {
        "slug": "understanding-label-printer-resolution",
        "title": "Understanding Label Printer Resolution",
        "section": "guides",
        "angle": "How DPI affects barcode and small-text legibility on labels specifically."
      },
      {
        "slug": "label-material-types-explained",
        "title": "Label Material Types Explained",
        "section": "guides",
        "angle": "Paper, synthetic (polypropylene, polyester), and specialty facestocks and where each fits."
      },
      {
        "slug": "label-adhesives-explained",
        "title": "Label Adhesives Explained",
        "section": "guides",
        "angle": "Permanent, removable, and freezer adhesives and the surface/temperature factors that govern choice."
      },
      {
        "slug": "die-cut-vs-continuous-labels",
        "title": "Die-Cut vs Continuous Label Media",
        "section": "guides",
        "angle": "How label stock is formatted and how the printer detects gaps, notches, and black marks."
      },
      {
        "slug": "understanding-label-sizes-and-formats",
        "title": "Understanding Label Sizes and Formats",
        "section": "guides",
        "angle": "Common label dimensions, roll vs fanfold media, and core sizes as durable concepts."
      },
      {
        "slug": "what-is-a-barcode",
        "title": "What Is a Barcode?",
        "section": "guides",
        "angle": "The concept of machine-readable codes and how 1D and 2D codes encode data."
      },
      {
        "slug": "barcode-symbologies-explained",
        "title": "Barcode Symbologies Explained",
        "section": "guides",
        "angle": "Overview of Code 128, UPC/EAN, QR Code, and Data Matrix and their standards bodies."
      },
      {
        "slug": "linear-vs-2d-barcodes",
        "title": "Linear vs 2D Barcodes",
        "section": "guides",
        "angle": "Structural differences and data-capacity trade-offs between 1D and 2D symbols."
      },
      {
        "slug": "how-barcode-scanning-works",
        "title": "How Barcode Scanning Works",
        "section": "guides",
        "angle": "Laser, CCD, and imager scanning principles and why print quality matters."
      },
      {
        "slug": "understanding-barcode-print-quality",
        "title": "Understanding Barcode Print Quality and Verification",
        "section": "guides",
        "angle": "Grading concepts from ISO/IEC 15416 and 15415 and common print defects."
      },
      {
        "slug": "how-to-calibrate-a-label-printer",
        "title": "How to Calibrate a Label Printer",
        "section": "guides",
        "angle": "Why media/gap calibration exists and the general calibration concept, vendor-neutral."
      },
      {
        "slug": "shipping-label-standards-explained",
        "title": "Shipping Label Standards Explained",
        "section": "guides",
        "angle": "The role of GS1-128 and structured shipping label layouts in logistics."
      },
      {
        "slug": "ghs-and-compliance-labeling",
        "title": "GHS and Compliance Labeling Basics",
        "section": "guides",
        "angle": "How regulated labels (hazard, safety) impose durability and content requirements."
      },
      {
        "slug": "print-barcode-labels-from-a-spreadsheet",
        "title": "Printing Barcode Labels from a Spreadsheet",
        "section": "workflows",
        "angle": "General mail-merge / variable-data workflow concept for batch label runs."
      },
      {
        "slug": "print-asset-tags-and-labels",
        "title": "Printing Asset Tags and Inventory Labels",
        "section": "workflows",
        "angle": "Workflow for durable asset identification labels and why material matters."
      },
      {
        "slug": "print-product-labels-workflow",
        "title": "A Workflow for Printing Product Labels",
        "section": "workflows",
        "angle": "Steps from label design to media selection for consumer product labeling."
      },
      {
        "slug": "barcode",
        "title": "Barcode",
        "section": "glossary",
        "angle": "Concise glossary definition of a barcode as a machine-readable symbol."
      },
      {
        "slug": "label-liner",
        "title": "Label Liner",
        "section": "glossary",
        "angle": "Defines the release liner backing that carries pressure-sensitive labels."
      },
      {
        "slug": "die-cut-label",
        "title": "Die-Cut Label",
        "section": "glossary",
        "angle": "Defines labels pre-cut to shape on a continuous liner."
      }
    ],
    "crossLinks": [
      "thermal-printing",
      "printing-history",
      "mobile-printing"
    ],
    "imageNeeds": [
      "Public-domain or clearly-licensed diagrams of a thermal printhead and media path (schematic, not a specific product photo)",
      "Example barcode symbols generated from open specifications (Code 128, UPC, QR Code, Data Matrix) rendered from data, not copyrighted samples",
      "Schematic illustrations of die-cut vs continuous label media and gap/black-mark sensing",
      "Neutral illustration of a release liner / label cross-section (facestock, adhesive, liner layers)",
      "Public-domain GHS pictograms (official UN GHS pictograms are freely usable) for the compliance-labeling page"
    ]
  },
  {
    "id": "barcode-systems",
    "label": "Barcode & Symbology Systems",
    "primarySection": "guides",
    "secondarySections": [
      "glossary",
      "workflows"
    ],
    "description": "1-2 sentence factual description of the cluster's scope",
    "appAnchor": null,
    "status": "planned",
    "entities": [
      {
        "name": "GS1",
        "type": "organization"
      },
      {
        "name": "AIM (Association for Automatic Identification and Mobility)",
        "type": "organization"
      },
      {
        "name": "QR Code",
        "type": "format"
      },
      {
        "name": "Data Matrix",
        "type": "format"
      },
      {
        "name": "PDF417",
        "type": "format"
      },
      {
        "name": "Aztec Code",
        "type": "format"
      },
      {
        "name": "MaxiCode",
        "type": "format"
      },
      {
        "name": "Code 128",
        "type": "format"
      },
      {
        "name": "Code 39",
        "type": "format"
      },
      {
        "name": "UPC",
        "type": "format"
      },
      {
        "name": "EAN-13",
        "type": "format"
      },
      {
        "name": "ITF-14 (Interleaved 2 of 5)",
        "type": "format"
      },
      {
        "name": "GS1 DataBar",
        "type": "format"
      },
      {
        "name": "GTIN",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 18004",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 16022",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 15417",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 15438",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 15416",
        "type": "standard"
      },
      {
        "name": "Reed-Solomon error correction",
        "type": "technology"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 26,
      "ambitious": 42
    },
    "planned": [
      {
        "slug": "how-barcodes-work",
        "title": "How Barcodes Work: An Introduction to Machine-Readable Symbols",
        "section": "guides",
        "angle": "Foundational overview of how optical scanning turns bars/modules into decoded data."
      },
      {
        "slug": "how-1d-linear-barcodes-work",
        "title": "How 1D (Linear) Barcodes Work",
        "section": "guides",
        "angle": "How bar/space widths encode characters in linear symbologies."
      },
      {
        "slug": "how-2d-matrix-barcodes-work",
        "title": "How 2D (Matrix) Barcodes Work",
        "section": "guides",
        "angle": "How grid modules, finder patterns, and error correction store data in two dimensions."
      },
      {
        "slug": "how-qr-codes-work",
        "title": "How QR Codes Work (ISO/IEC 18004)",
        "section": "guides",
        "angle": "Structure of finder/alignment/timing patterns, encoding modes, and versions per the QR spec."
      },
      {
        "slug": "how-data-matrix-codes-work",
        "title": "How Data Matrix Codes Work (ISO/IEC 16022)",
        "section": "guides",
        "angle": "ECC 200, finder/L pattern, and module layout of Data Matrix."
      },
      {
        "slug": "how-pdf417-barcodes-work",
        "title": "How PDF417 Stacked Barcodes Work (ISO/IEC 15438)",
        "section": "guides",
        "angle": "Row/column codeword structure of the stacked linear symbology used on ID documents."
      },
      {
        "slug": "aztec-code-explained",
        "title": "Aztec Code Explained (ISO/IEC 24778)",
        "section": "guides",
        "angle": "Central bullseye finder and no-quiet-zone design of Aztec, common on transit tickets."
      },
      {
        "slug": "maxicode-explained",
        "title": "MaxiCode Explained",
        "section": "guides",
        "angle": "Fixed-size hexagonal 2D symbology with a central bullseye used in package sortation."
      },
      {
        "slug": "code-128-explained",
        "title": "Code 128 Explained (ISO/IEC 15417)",
        "section": "guides",
        "angle": "Character sets A/B/C, start/stop, and checksum of the high-density linear symbology."
      },
      {
        "slug": "code-39-explained",
        "title": "Code 39 Explained",
        "section": "guides",
        "angle": "The self-checking alphanumeric symbology and its wide/narrow element structure."
      },
      {
        "slug": "upc-vs-ean-barcodes",
        "title": "UPC vs EAN Retail Barcodes",
        "section": "guides",
        "angle": "How UPC-A and EAN-13 relate, their digit structure, and shared GS1 lineage."
      },
      {
        "slug": "itf-14-and-interleaved-2-of-5",
        "title": "ITF-14 and Interleaved 2 of 5",
        "section": "guides",
        "angle": "How pairs of digits interleave in bars/spaces for carton and case marking."
      },
      {
        "slug": "gs1-databar-explained",
        "title": "GS1 DataBar Explained",
        "section": "guides",
        "angle": "The compact GS1 family that can carry additional data such as application identifiers."
      },
      {
        "slug": "gs1-barcode-standards-explained",
        "title": "GS1 Barcode Standards and the GTIN",
        "section": "guides",
        "angle": "How GS1 governs retail identifiers and which symbologies carry a GTIN."
      },
      {
        "slug": "barcode-check-digits-explained",
        "title": "How Barcode Check Digits Work",
        "section": "guides",
        "angle": "Modulo check-digit calculation used by UPC/EAN/GTIN to detect scan errors."
      },
      {
        "slug": "qr-code-error-correction-levels",
        "title": "QR Code Error Correction and Reed-Solomon",
        "section": "guides",
        "angle": "How error-correction levels L/M/Q/H and Reed-Solomon recovery work in QR."
      },
      {
        "slug": "barcode-quiet-zones-explained",
        "title": "Quiet Zones and Why Barcodes Need Margins",
        "section": "guides",
        "angle": "The role of the clear margin in reliable scanning across symbologies."
      },
      {
        "slug": "how-barcode-scanners-read-codes",
        "title": "How Barcode Scanners Read Codes",
        "section": "guides",
        "angle": "Laser vs image-sensor decoding and how scanners locate and interpret symbols."
      },
      {
        "slug": "barcode-print-quality-grading",
        "title": "Barcode Print Quality and Grading (ISO/IEC 15415/15416)",
        "section": "guides",
        "angle": "What symbol grades measure and why print quality affects scannability."
      },
      {
        "slug": "1d-vs-2d-barcodes",
        "title": "1D vs 2D Barcodes: How They Differ",
        "section": "guides",
        "angle": "Data capacity, orientation, and use-case differences between linear and matrix codes."
      },
      {
        "slug": "symbology",
        "title": "Symbology",
        "section": "glossary",
        "angle": "Glossary definition of a barcode symbology and its defining specification."
      },
      {
        "slug": "quiet-zone",
        "title": "Quiet Zone",
        "section": "glossary",
        "angle": "Glossary definition of the mandatory clear margin around a barcode."
      },
      {
        "slug": "check-digit",
        "title": "Check Digit",
        "section": "glossary",
        "angle": "Glossary definition of a check digit and its error-detection purpose."
      },
      {
        "slug": "gtin",
        "title": "GTIN (Global Trade Item Number)",
        "section": "glossary",
        "angle": "Glossary definition of the GS1 GTIN identifier."
      },
      {
        "slug": "generate-qr-codes-for-documents",
        "title": "Generating QR Codes for Documents and Links",
        "section": "workflows",
        "angle": "Standards-based workflow for encoding a URL or text into a scannable QR code."
      }
    ],
    "crossLinks": [
      "thermal-printing",
      "document-workflows",
      "printer-technologies",
      "multifunction-printers"
    ],
    "imageNeeds": [
      "Public-domain diagrams of linear (1D) barcode anatomy (bars, spaces, quiet zone, start/stop)",
      "Public-domain QR Code structure diagrams showing finder, alignment, and timing patterns (available on Wikimedia Commons)",
      "Public-domain Data Matrix layout diagram showing the L-shaped finder pattern and ECC 200 region",
      "Public-domain PDF417 and Aztec Code structure illustrations",
      "Simple original/generated example barcodes (barcode symbols themselves are not copyrightable) labeled for illustration only",
      "Comparison diagram contrasting 1D linear vs 2D matrix module layouts"
    ]
  },
  {
    "id": "paper-technologies",
    "label": "Paper & Media",
    "primarySection": "guides",
    "secondarySections": [
      "glossary"
    ],
    "description": "An encyclopedic reference on the paper and print media consumed by printers, copiers, and fax machines: how paper weight is measured (GSM vs. basis weight), the ISO 216 and North American sizing systems, surface finishes and coatings, and specialty media such as cardstock, photo paper, labels, and transparency film. Scope is the substrate itself and its measurable, standards-defined properties, not printing mechanisms.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "ISO 216",
        "type": "standard"
      },
      {
        "name": "ISO 269",
        "type": "standard"
      },
      {
        "name": "ANSI/ASME Y14.1",
        "type": "standard"
      },
      {
        "name": "ISO 2470 (brightness)",
        "type": "standard"
      },
      {
        "name": "GSM (grams per square metre)",
        "type": "concept"
      },
      {
        "name": "Basis weight",
        "type": "concept"
      },
      {
        "name": "A4",
        "type": "format"
      },
      {
        "name": "US Letter",
        "type": "format"
      },
      {
        "name": "A-series paper sizes",
        "type": "format"
      },
      {
        "name": "B-series paper sizes",
        "type": "format"
      },
      {
        "name": "C-series envelope sizes",
        "type": "format"
      },
      {
        "name": "Coated paper",
        "type": "concept"
      },
      {
        "name": "Cardstock",
        "type": "concept"
      },
      {
        "name": "Photo paper",
        "type": "concept"
      },
      {
        "name": "Thermal paper",
        "type": "concept"
      },
      {
        "name": "Grain direction",
        "type": "concept"
      },
      {
        "name": "Paper caliper",
        "type": "concept"
      },
      {
        "name": "Opacity",
        "type": "concept"
      },
      {
        "name": "CIE whiteness",
        "type": "concept"
      },
      {
        "name": "Acid-free paper",
        "type": "concept"
      }
    ],
    "livePages": 12,
    "capacity": {
      "conservative": 32,
      "ambitious": 58
    },
    "planned": [
      {
        "slug": "paper-weight-gsm-vs-basis-weight",
        "title": "Paper Weight Explained: GSM vs. Basis Weight",
        "section": "guides",
        "angle": "Explains the two competing weight systems and how metric GSM relates to North American basis weight by paper grade."
      },
      {
        "slug": "iso-216-paper-sizes-explained",
        "title": "ISO 216 Paper Sizes Explained",
        "section": "guides",
        "angle": "How the A/B/C series aspect ratio (root-2) and halving rule define the international size system."
      },
      {
        "slug": "a4-vs-us-letter",
        "title": "A4 vs. US Letter: Two Paper Size Standards",
        "section": "guides",
        "angle": "Compares the ISO 216 A4 and the North American Letter/ANSI systems and why documents shift when moving between them."
      },
      {
        "slug": "b-series-and-c-series-paper-sizes",
        "title": "B-Series and C-Series Paper Sizes",
        "section": "guides",
        "angle": "Explains ISO 216 B sizes and the ISO 269 C envelope series designed to hold folded A-series sheets."
      },
      {
        "slug": "north-american-paper-sizes-explained",
        "title": "North American Paper Sizes (Letter, Legal, Tabloid)",
        "section": "guides",
        "angle": "Documents the ANSI/ASME Y14.1 and traditional US loose sizes and their nominal dimensions."
      },
      {
        "slug": "paper-finishes-matte-satin-glossy",
        "title": "Paper Finishes: Matte, Satin, and Glossy",
        "section": "guides",
        "angle": "Describes common surface finishes and where each is typically used."
      },
      {
        "slug": "paper-opacity-and-show-through",
        "title": "Paper Opacity and Show-Through",
        "section": "guides",
        "angle": "Explains opacity as a measurable property and why thin sheets show print from the reverse side."
      },
      {
        "slug": "paper-grain-direction",
        "title": "Paper Grain Direction (Long Grain vs. Short Grain)",
        "section": "guides",
        "angle": "How fibre alignment forms during manufacture and why it matters for folding and feeding."
      },
      {
        "slug": "paper-caliper-and-thickness",
        "title": "Paper Caliper and Thickness",
        "section": "guides",
        "angle": "Defines caliper (points/mils/microns) and how it differs from weight."
      },
      {
        "slug": "what-is-cardstock",
        "title": "What Is Cardstock?",
        "section": "guides",
        "angle": "Defines cardstock/cover stock by weight and use, vendor-neutral."
      },
      {
        "slug": "bond-text-and-cover-paper",
        "title": "Bond, Text, and Cover Paper Grades",
        "section": "guides",
        "angle": "Explains the main North American paper grade families and how their basis weights are measured against different parent sheets."
      },
      {
        "slug": "photo-paper-types-explained",
        "title": "Photo Paper Types Explained",
        "section": "guides",
        "angle": "Describes resin-coated vs. fibre-based and common finishes for photographic printing."
      },
      {
        "slug": "thermal-paper-explained",
        "title": "Thermal Paper Explained",
        "section": "guides",
        "angle": "How heat-sensitive coated paper works as a substrate (distinct from the thermal printing process)."
      },
      {
        "slug": "label-and-adhesive-media",
        "title": "Label and Adhesive Print Media",
        "section": "guides",
        "angle": "Explains facestock, liner, and adhesive layers of self-adhesive label media."
      },
      {
        "slug": "transparency-film-for-printing",
        "title": "Transparency and Film Media for Printing",
        "section": "guides",
        "angle": "Overview of overhead transparency and film substrates and their material considerations."
      },
      {
        "slug": "envelope-sizes-and-formats",
        "title": "Envelope Sizes and Formats",
        "section": "guides",
        "angle": "Covers ISO C-series and common commercial envelope formats and how they pair with sheet sizes."
      },
      {
        "slug": "acid-free-and-archival-paper",
        "title": "Acid-Free and Archival Paper",
        "section": "guides",
        "angle": "Explains acidity, lignin, and permanence standards relevant to document longevity."
      },
      {
        "slug": "recycled-paper-for-printing",
        "title": "Recycled Paper for Printing",
        "section": "guides",
        "angle": "Explains post-consumer content and general properties of recycled printing stock."
      },
      {
        "slug": "kraft-and-packaging-paper",
        "title": "Kraft and Packaging Paper",
        "section": "guides",
        "angle": "Describes kraft pulp paper and its typical packaging and utility uses."
      },
      {
        "slug": "choosing-paper-for-inkjet-vs-laser",
        "title": "Choosing Paper for Inkjet vs. Laser Printing",
        "section": "guides",
        "angle": "General guidance on how substrate properties interact with each printing process, no product recommendations."
      },
      {
        "slug": "gsm",
        "title": "GSM (Grams per Square Metre)",
        "section": "glossary",
        "angle": "Glossary definition of the metric paper weight unit."
      },
      {
        "slug": "basis-weight",
        "title": "Basis Weight",
        "section": "glossary",
        "angle": "Glossary definition of the North American paper weight measure."
      },
      {
        "slug": "iso-216",
        "title": "ISO 216",
        "section": "glossary",
        "angle": "Glossary entry for the international paper size standard."
      },
      {
        "slug": "cardstock",
        "title": "Cardstock",
        "section": "glossary",
        "angle": "Concise glossary definition of cardstock/cover stock."
      }
    ],
    "crossLinks": [
      "document-workflows",
      "printing-history",
      "printer-technologies",
      "multifunction-printers"
    ],
    "imageNeeds": [
      "Public-domain or self-generated diagram of the ISO 216 root-2 halving system (A0 down to A6)",
      "Self-generated comparison diagram of A4 vs. US Letter footprints",
      "Self-generated diagram of C-series envelope sizes holding folded A-series sheets",
      "Public-domain macro photography of paper fibre / grain (Wikimedia Commons, verified license)",
      "Self-generated cross-section illustration of coated paper and self-adhesive label layers (facestock/adhesive/liner)",
      "Public-domain historical imagery of paper manufacture / paper mills for archival context (verified provenance)"
    ]
  },
  {
    "id": "ink-technologies",
    "label": "Ink Technologies",
    "primarySection": "guides",
    "secondarySections": [
      "glossary"
    ],
    "description": "An encyclopedic, vendor-neutral cluster explaining the ink and colorant technologies used in consumer and office printing: dye-based versus pigment-based inks, cartridge versus refillable-tank delivery systems, and the underlying chemistry of how ink is formulated, deposited, dries, and lasts on paper. It centers on durable, standards-referenced knowledge (colorants, vehicles, droplet formation, permanence) rather than product comparisons, prices, or brand claims.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Dye-based ink",
        "type": "technology"
      },
      {
        "name": "Pigment-based ink",
        "type": "technology"
      },
      {
        "name": "Ink cartridge",
        "type": "concept"
      },
      {
        "name": "Refillable ink tank",
        "type": "concept"
      },
      {
        "name": "CMYK color model",
        "type": "standard"
      },
      {
        "name": "Thermal inkjet",
        "type": "technology"
      },
      {
        "name": "Piezoelectric inkjet",
        "type": "technology"
      },
      {
        "name": "Dye-sublimation ink",
        "type": "technology"
      },
      {
        "name": "UV-curable ink",
        "type": "technology"
      },
      {
        "name": "Solvent ink",
        "type": "technology"
      },
      {
        "name": "Colorant",
        "type": "concept"
      },
      {
        "name": "Ink vehicle",
        "type": "concept"
      },
      {
        "name": "Viscosity",
        "type": "concept"
      },
      {
        "name": "Lightfastness",
        "type": "concept"
      },
      {
        "name": "ISO/IEC 24711",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 24712",
        "type": "standard"
      },
      {
        "name": "ISO 18916",
        "type": "standard"
      },
      {
        "name": "Printhead nozzle",
        "type": "concept"
      },
      {
        "name": "Continuous ink supply system",
        "type": "technology"
      },
      {
        "name": "Archival printing",
        "type": "concept"
      }
    ],
    "livePages": 10,
    "capacity": {
      "conservative": 24,
      "ambitious": 38
    },
    "planned": [
      {
        "slug": "dye-based-vs-pigment-based-ink",
        "title": "Dye-Based vs Pigment-Based Ink",
        "section": "guides",
        "angle": "Explains the fundamental difference between dissolved dye colorants and suspended pigment particles, and how each behaves on paper."
      },
      {
        "slug": "ink-tank-vs-cartridge-printers",
        "title": "Ink Tank vs Cartridge Printers",
        "section": "guides",
        "angle": "How refillable-reservoir tank systems differ structurally from replaceable cartridge systems, without price or brand claims."
      },
      {
        "slug": "what-is-pigment-ink",
        "title": "What Is Pigment Ink",
        "section": "glossary",
        "angle": "Defines pigment ink as insoluble colorant particles suspended in a vehicle and where the term applies."
      },
      {
        "slug": "what-is-dye-ink",
        "title": "What Is Dye Ink",
        "section": "glossary",
        "angle": "Defines dye ink as a colorant fully dissolved in a liquid vehicle and its typical characteristics."
      },
      {
        "slug": "how-ink-dries-on-paper",
        "title": "How Ink Dries on Paper",
        "section": "guides",
        "angle": "Absorption, evaporation, and (for some inks) curing as the mechanisms by which liquid ink becomes a fixed image."
      },
      {
        "slug": "thermal-vs-piezoelectric-inkjet",
        "title": "Thermal vs Piezoelectric Inkjet",
        "section": "guides",
        "angle": "The two dominant droplet-ejection methods: heat-formed bubbles versus mechanically deflected piezo crystals."
      },
      {
        "slug": "how-continuous-ink-systems-work",
        "title": "How Continuous Ink Supply Systems Work",
        "section": "guides",
        "angle": "How an external reservoir feeds ink to the printhead through tubing in refillable-tank designs."
      },
      {
        "slug": "what-is-cmyk-ink",
        "title": "What Is CMYK in Printing Inks",
        "section": "glossary",
        "angle": "Explains the cyan-magenta-yellow-key subtractive color set used by most color printers."
      },
      {
        "slug": "dye-sublimation-ink-explained",
        "title": "Dye-Sublimation Ink Explained",
        "section": "guides",
        "angle": "How sublimation dyes turn from solid to gas under heat to embed color into a substrate."
      },
      {
        "slug": "uv-curable-ink-explained",
        "title": "UV-Curable Ink Explained",
        "section": "guides",
        "angle": "How ultraviolet light instantly polymerizes UV inks instead of drying by absorption or evaporation."
      },
      {
        "slug": "solvent-and-eco-solvent-ink",
        "title": "Solvent and Eco-Solvent Ink",
        "section": "guides",
        "angle": "How solvent-carried inks bond to non-porous media and how eco-solvent formulations differ."
      },
      {
        "slug": "what-causes-ink-fading",
        "title": "What Causes Ink to Fade",
        "section": "guides",
        "angle": "Light, ozone, humidity, and colorant chemistry as drivers of print fading over time."
      },
      {
        "slug": "what-is-lightfastness",
        "title": "What Is Lightfastness",
        "section": "glossary",
        "angle": "Defines a colorant's resistance to fading under light exposure and how permanence is assessed."
      },
      {
        "slug": "pigment-vs-dye-for-photo-printing",
        "title": "Pigment vs Dye Ink for Photo Printing",
        "section": "guides",
        "angle": "Trade-offs in color vividness, longevity, and paper compatibility for photographic output, stated neutrally."
      },
      {
        "slug": "water-resistant-vs-water-soluble-ink",
        "title": "Water-Resistant vs Water-Soluble Ink",
        "section": "guides",
        "angle": "Why pigment tends to resist water while many dyes remain soluble, and what that means for documents."
      },
      {
        "slug": "ink-viscosity-and-surface-tension",
        "title": "Ink Viscosity and Surface Tension",
        "section": "glossary",
        "angle": "The physical fluid properties that let a printhead form and place consistent droplets."
      },
      {
        "slug": "anatomy-of-an-ink-formulation",
        "title": "The Anatomy of an Ink Formulation",
        "section": "guides",
        "angle": "Colorant, vehicle, humectants, surfactants, and additives as the general components of an ink."
      },
      {
        "slug": "understanding-cartridge-page-yield",
        "title": "Understanding Cartridge Page Yield",
        "section": "guides",
        "angle": "What page yield means and how standardized test methods define comparable yield figures."
      },
      {
        "slug": "what-is-a-printhead",
        "title": "What Is a Printhead",
        "section": "glossary",
        "angle": "Defines the nozzle array that ejects ink droplets and distinguishes integrated from fixed printheads."
      },
      {
        "slug": "why-inkjet-prints-smudge",
        "title": "Why Inkjet Prints Smudge",
        "section": "guides",
        "angle": "Drying time, paper coating, and dye solubility as the causes of smearing, with neutral prevention notes."
      },
      {
        "slug": "archival-ink-and-print-permanence",
        "title": "Archival Ink and Print Permanence",
        "section": "guides",
        "angle": "What makes inks and prints archival and how permanence is evaluated against standards."
      }
    ],
    "crossLinks": [
      "printing-history",
      "printer-technologies",
      "multifunction-printers",
      "thermal-printing"
    ],
    "imageNeeds": [
      "Public-domain or self-produced macro photo of an inkjet cartridge with visible nozzle plate and contacts",
      "Neutral-background photo of a refillable ink tank / bottle set",
      "Diagram (originally authored) of thermal vs piezoelectric droplet ejection",
      "Diagram of a CMYK subtractive color halftone",
      "Cross-section illustration of dye absorbing into paper vs pigment sitting on the surface",
      "Photo of dye-sublimation transfer output or press (public-domain or self-made)"
    ]
  },
  {
    "id": "toner-technologies",
    "label": "Toner Technologies",
    "primarySection": "guides",
    "secondarySections": [
      "glossary"
    ],
    "description": "An encyclopedic guides-and-glossary cluster explaining how dry electrophotographic toner works: its physical composition, how it is charged and developed, transferred, and fused to paper, plus the cartridge, drum, and cleaning subsystems that store and meter it. It also covers durable yield concepts grounded in published ISO/IEC standards and vendor-neutral terminology, without prices, brand rankings, or fabricated specifications.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Toner",
        "type": "concept"
      },
      {
        "name": "Electrophotography",
        "type": "technology"
      },
      {
        "name": "Xerography",
        "type": "technology"
      },
      {
        "name": "Fuser unit",
        "type": "concept"
      },
      {
        "name": "Organic photoconductor drum",
        "type": "concept"
      },
      {
        "name": "Triboelectric charging",
        "type": "concept"
      },
      {
        "name": "Carbon black",
        "type": "concept"
      },
      {
        "name": "Polymerized toner",
        "type": "technology"
      },
      {
        "name": "MICR toner",
        "type": "concept"
      },
      {
        "name": "Toner cartridge",
        "type": "product"
      },
      {
        "name": "Developer unit",
        "type": "concept"
      },
      {
        "name": "Corona wire",
        "type": "concept"
      },
      {
        "name": "Transfer belt",
        "type": "concept"
      },
      {
        "name": "Waste toner",
        "type": "concept"
      },
      {
        "name": "ISO/IEC 19752",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 19798",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 24711",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 24712",
        "type": "standard"
      },
      {
        "name": "Page yield",
        "type": "concept"
      },
      {
        "name": "Page coverage",
        "type": "concept"
      }
    ],
    "livePages": 7,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "what-is-toner-made-of",
        "title": "What Is Toner Made Of?",
        "section": "guides",
        "angle": "The physical composition of dry toner: pigment (carbon black or color pigments), polymer binder resin, charge-control agents, wax, and flow additives, and the role of each."
      },
      {
        "slug": "toner-cartridge-anatomy",
        "title": "The Anatomy of a Toner Cartridge",
        "section": "guides",
        "angle": "The functional parts inside a typical cartridge: toner hopper, developer roller, doctor blade, and how integrated vs. separate drum designs differ."
      },
      {
        "slug": "understanding-toner-page-yield",
        "title": "Understanding Toner Page Yield",
        "section": "guides",
        "angle": "What page yield means, why it is a rated estimate under defined test conditions, and how it relates to declared cartridge capacity rather than a guaranteed count."
      },
      {
        "slug": "iso-toner-yield-standards-explained",
        "title": "ISO/IEC Toner Yield Standards Explained",
        "section": "guides",
        "angle": "How ISO/IEC 19752 (monochrome) and ISO/IEC 19798 (color) define standardized test methods so yields can be compared, and what the standard test page represents."
      },
      {
        "slug": "what-is-page-coverage",
        "title": "What Is Page Coverage?",
        "section": "guides",
        "angle": "How the fraction of a page covered by toner drives consumption, why the ~5% reference coverage exists in yield testing, and how real documents deviate from it."
      },
      {
        "slug": "how-toner-is-charged",
        "title": "How Toner Gets Its Electric Charge",
        "section": "guides",
        "angle": "Triboelectric charging and charge-control agents that give toner particles the polarity needed to move under electrostatic fields in the print engine."
      },
      {
        "slug": "how-toner-transfers-to-paper",
        "title": "How Toner Transfers to Paper",
        "section": "guides",
        "angle": "The electrostatic transfer step that pulls toner from the drum onto paper before fusing, and the role of transfer rollers and belts."
      },
      {
        "slug": "what-is-an-opc-drum",
        "title": "What Is an OPC Drum?",
        "section": "guides",
        "angle": "The organic photoconductor drum: how a light-sensitive coating holds and releases charge to form a latent image that attracts toner."
      },
      {
        "slug": "polymerized-vs-conventional-toner",
        "title": "Polymerized vs. Conventional Toner",
        "section": "guides",
        "angle": "Chemically produced (polymerized) toner vs. mechanically pulverized toner, and how particle shape and uniformity relate to image formation, described neutrally."
      },
      {
        "slug": "toner-cartridge-vs-drum-unit",
        "title": "Toner Cartridge vs. Drum Unit",
        "section": "guides",
        "angle": "Why some systems separate the consumable toner supply from the imaging drum, and how integrated all-in-one cartridges differ conceptually."
      },
      {
        "slug": "what-is-a-fuser-unit",
        "title": "What Is a Fuser Unit?",
        "section": "guides",
        "angle": "The fuser as a distinct assembly, its rollers and heating element, and why it is treated as a periodic-maintenance component."
      },
      {
        "slug": "what-is-micr-toner",
        "title": "What Is MICR Toner?",
        "section": "guides",
        "angle": "Magnetic toner used to print MICR characters on checks, the E-13B/CMC-7 character context, and why magnetic pigment is required for machine reading."
      },
      {
        "slug": "waste-toner-and-cleaning-systems",
        "title": "Waste Toner and Cleaning Systems",
        "section": "guides",
        "angle": "How residual toner is scraped from the drum after transfer, why waste toner bottles exist, and cleaning-blade concepts."
      },
      {
        "slug": "how-color-toner-works",
        "title": "How Color Toner Works",
        "section": "guides",
        "angle": "CMYK toner separation, sequential or single-pass color development, and how four toners combine to form full-color output."
      },
      {
        "slug": "toner-vs-ink",
        "title": "Toner vs. Ink: How They Differ",
        "section": "guides",
        "angle": "A vendor-neutral conceptual comparison of dry electrophotographic toner and liquid inkjet ink as fundamentally different imaging methods."
      },
      {
        "slug": "what-is-a-corona-wire",
        "title": "What Is a Corona Wire?",
        "section": "guides",
        "angle": "How corona wires and charge rollers apply uniform charge to the drum or transfer paper, and why some engines moved from wires to rollers."
      },
      {
        "slug": "how-the-developer-unit-works",
        "title": "How the Developer Unit Works",
        "section": "guides",
        "angle": "The developer stage that presents charged toner to the latent image, and the distinction between single-component and two-component developer systems."
      },
      {
        "slug": "fuser",
        "title": "Fuser",
        "section": "glossary",
        "angle": "Concise glossary definition of the fuser assembly and its role in bonding toner to paper."
      },
      {
        "slug": "opc-drum",
        "title": "OPC Drum",
        "section": "glossary",
        "angle": "Concise glossary definition of the organic photoconductor drum used in laser and LED print engines."
      },
      {
        "slug": "page-yield",
        "title": "Page Yield",
        "section": "glossary",
        "angle": "Concise glossary definition of rated page yield and its relationship to standardized test conditions."
      },
      {
        "slug": "waste-toner",
        "title": "Waste Toner",
        "section": "glossary",
        "angle": "Concise glossary definition of residual toner collected after transfer and cleaning."
      }
    ],
    "crossLinks": [
      "printing-history",
      "printer-technologies",
      "multifunction-printers",
      "thermal-printing"
    ],
    "imageNeeds": [
      "Public-domain or clearly-licensed diagrams of the electrophotographic process cycle (charge, expose, develop, transfer, fuse, clean)",
      "Historical public-domain imagery relating to Chester Carlson and early Xerox xerography for the composition/background context",
      "Neutral schematic-style illustrations of a toner cartridge cross-section (hopper, developer roller, doctor blade)",
      "Diagram of a fuser assembly (heat roller and pressure roller) suitable for redrawing as an original SVG",
      "Reference photos of MICR E-13B/CMC-7 character sets from public sources for the MICR toner page",
      "Illustrative diagram of CMYK color-plane combination for the color toner page"
    ]
  },
  {
    "id": "printer-maintenance",
    "label": "Printer Maintenance",
    "primarySection": "troubleshooting",
    "secondarySections": [
      "guides"
    ],
    "description": "An encyclopedic reference on keeping printers and scanners in good working order: cleaning print heads and scanner glass, calibrating and aligning, caring for and replacing consumables (ink, toner, drum, fuser), and preventive maintenance routines. Scope is care and upkeep, distinct from connectivity or device-not-found troubleshooting.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "ISO",
        "type": "organization"
      },
      {
        "name": "International Color Consortium",
        "type": "organization"
      },
      {
        "name": "ISO/IEC 19752",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 24711",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 24712",
        "type": "standard"
      },
      {
        "name": "ICC color profile",
        "type": "standard"
      },
      {
        "name": "Inkjet printing",
        "type": "technology"
      },
      {
        "name": "Laser printing",
        "type": "technology"
      },
      {
        "name": "Thermal printing",
        "type": "technology"
      },
      {
        "name": "Thermal inkjet",
        "type": "technology"
      },
      {
        "name": "Piezoelectric inkjet",
        "type": "technology"
      },
      {
        "name": "Print head",
        "type": "concept"
      },
      {
        "name": "Nozzle check",
        "type": "concept"
      },
      {
        "name": "Fuser unit",
        "type": "concept"
      },
      {
        "name": "Drum unit",
        "type": "concept"
      },
      {
        "name": "Toner",
        "type": "concept"
      },
      {
        "name": "Ink cartridge",
        "type": "concept"
      },
      {
        "name": "Printer calibration",
        "type": "concept"
      },
      {
        "name": "Color calibration",
        "type": "concept"
      },
      {
        "name": "Preventive maintenance",
        "type": "concept"
      }
    ],
    "livePages": 15,
    "capacity": {
      "conservative": 26,
      "ambitious": 44
    },
    "planned": [
      {
        "slug": "how-to-clean-an-inkjet-printhead",
        "title": "How to Clean an Inkjet Print Head",
        "section": "troubleshooting",
        "angle": "Software cleaning cycles vs. manual cleaning of removable vs. fixed heads, described generically and safely without model-specific claims."
      },
      {
        "slug": "clearing-clogged-inkjet-nozzles",
        "title": "Clearing Clogged Inkjet Nozzles",
        "section": "troubleshooting",
        "angle": "Why nozzles clog (dried ink, air, disuse) and the escalation from nozzle check to deep-clean cycles to soaking a removable head."
      },
      {
        "slug": "printhead-cleaning-cycles-explained",
        "title": "Print Head Cleaning Cycles Explained",
        "section": "guides",
        "angle": "What a cleaning cycle actually does, why it consumes ink, and when repeated cycles stop helping."
      },
      {
        "slug": "how-to-run-a-nozzle-check",
        "title": "How to Run a Nozzle Check",
        "section": "guides",
        "angle": "Reading a nozzle-check test pattern to identify missing colors or banded segments before deciding on a clean."
      },
      {
        "slug": "printhead-alignment-explained",
        "title": "Print Head Alignment Explained",
        "section": "guides",
        "angle": "What alignment corrects (bidirectional misregistration, color-to-color offset) and how the alignment test sheet is interpreted."
      },
      {
        "slug": "preventing-inkjet-printhead-clogs",
        "title": "Preventing Inkjet Print Head Clogs",
        "section": "guides",
        "angle": "Why inkjets clog when idle and general habits that reduce clogging, framed as principles not guaranteed fixes."
      },
      {
        "slug": "cleaning-the-scanner-glass",
        "title": "Cleaning the Scanner Glass and Platen",
        "section": "troubleshooting",
        "angle": "Safe cleaning of flatbed glass and the ADF strip to remove lines and spots on scans, without abrasive or solvent risk."
      },
      {
        "slug": "removing-lines-and-streaks-on-scans",
        "title": "Removing Lines and Streaks on Scans",
        "section": "troubleshooting",
        "angle": "Isolating a dirty ADF scan strip vs. flatbed dust vs. a sensor issue by comparing flatbed and feeder output."
      },
      {
        "slug": "laser-printer-interior-cleaning",
        "title": "Cleaning the Interior of a Laser Printer",
        "section": "troubleshooting",
        "angle": "Safe removal of loose toner and paper dust, why not to use a household vacuum, and areas to avoid touching."
      },
      {
        "slug": "cleaning-paper-feed-rollers",
        "title": "Cleaning Printer Paper Feed Rollers",
        "section": "troubleshooting",
        "angle": "How dirty or glazed pickup rollers cause misfeeds and multi-feeds, and generic cleaning approaches."
      },
      {
        "slug": "replacing-a-toner-cartridge",
        "title": "Replacing a Toner Cartridge",
        "section": "guides",
        "angle": "General procedure, handling precautions, and what 'low toner' warnings mean relative to ISO/IEC 19752 rated yield."
      },
      {
        "slug": "replacing-an-ink-cartridge",
        "title": "Replacing an Ink Cartridge",
        "section": "guides",
        "angle": "Cartridge vs. integrated-head designs, priming after a swap, and yield context from ISO/IEC 24711/24712."
      },
      {
        "slug": "storing-ink-and-toner",
        "title": "Storing Ink Cartridges and Toner Safely",
        "section": "guides",
        "angle": "General storage principles (sealed, cool, upright), shelf-life concepts, and why unopened toner keeps longer than ink."
      },
      {
        "slug": "drum-unit-care-and-replacement",
        "title": "Drum Unit Care and Replacement",
        "section": "guides",
        "angle": "What the photoconductor drum does, why it is often separate from toner, and handling to avoid scratches and light exposure."
      },
      {
        "slug": "fuser-unit-care-and-replacement",
        "title": "Fuser Unit Care and Replacement",
        "section": "guides",
        "angle": "The fuser's role in bonding toner, why it is a wear part, and safe handling given residual heat."
      },
      {
        "slug": "laser-printer-maintenance-kits",
        "title": "Laser Printer Maintenance Kits Explained",
        "section": "guides",
        "angle": "What maintenance kits bundle (rollers, transfer parts, fuser) and the concept of usage-based service intervals, vendor-neutral."
      },
      {
        "slug": "diagnosing-faded-laser-prints",
        "title": "Diagnosing Faded Laser Prints",
        "section": "troubleshooting",
        "angle": "Low toner vs. density setting vs. drum wear vs. economy mode, isolated methodically."
      },
      {
        "slug": "diagnosing-streaks-and-lines-on-prints",
        "title": "Diagnosing Streaks and Lines on Prints",
        "section": "troubleshooting",
        "angle": "Repeating vs. continuous marks and how spacing hints at drum, fuser, or print-head causes."
      },
      {
        "slug": "ghosting-on-laser-prints",
        "title": "Ghosting on Laser Prints",
        "section": "troubleshooting",
        "angle": "Repeat images down the page and how they relate to drum/fuser cycles and paper choice, explained conceptually."
      },
      {
        "slug": "printer-color-calibration-basics",
        "title": "Printer Color Calibration Basics",
        "section": "guides",
        "angle": "Why printed color drifts and the role of ICC profiles and calibration in consistent output, standards-first and non-promotional."
      },
      {
        "slug": "preventive-maintenance-checklist",
        "title": "A Preventive Maintenance Checklist for Printers",
        "section": "guides",
        "angle": "A durable, model-agnostic routine (nozzle checks, dust removal, roller care, firmware/consumable checks) framed as habits."
      },
      {
        "slug": "cleaning-a-thermal-printhead",
        "title": "Cleaning a Thermal Print Head",
        "section": "troubleshooting",
        "angle": "Why thermal (receipt/label) heads gather residue and general isopropyl-swab cleaning principles."
      },
      {
        "slug": "handling-toner-spills-safely",
        "title": "Handling Toner Spills Safely",
        "section": "troubleshooting",
        "angle": "Why toner should not be spread with warm water or a standard vacuum, and general cleanup principles."
      }
    ],
    "crossLinks": [
      "scanning",
      "printer-technologies",
      "multifunction-printers",
      "thermal-printing"
    ],
    "imageNeeds": [
      "Original SVG diagrams authored in-house: labeled nozzle-check test pattern, print head alignment sheet, laser cartridge/drum/fuser cross-section",
      "Public-domain patent drawings (e.g., USPTO/Google Patents) of inkjet print heads, photoconductor drums, and fuser assemblies, with patent number and grant date verified",
      "Public-domain or CC0 diagrams of laser printing electrophotographic process stages",
      "Original close-up SVGs illustrating print defects (banding, ghosting, repeating marks) rather than photographed samples",
      "Public-domain historical service/maintenance manual scans only where age or license is confirmed"
    ]
  },
  {
    "id": "mobile-printing",
    "label": "Mobile Printing",
    "primarySection": "mobile-printing",
    "secondarySections": [
      "guides",
      "workflows"
    ],
    "description": "An encyclopedic cluster on printing from phones and tablets: the driverless discovery-and-print protocols (Apple AirPrint, the Mopria Alliance's Mopria Print Service, and the PWG IPP Everywhere standard they build on), the platform-specific print paths on iOS/iPadOS, Android, ChromeOS, and Windows/macOS mobile flows, plus the underlying network discovery mechanisms (Bonjour/mDNS, DNS-SD) and document formats (PDF, PWG Raster, PCLm) that make driverless mobile printing work. Content is vendor-neutral and standards-first, explaining how mobile printing works rather than ranking products.",
    "appAnchor": "smart-printer",
    "status": "expand",
    "entities": [
      {
        "name": "AirPrint",
        "type": "technology"
      },
      {
        "name": "Mopria Print Service",
        "type": "technology"
      },
      {
        "name": "Mopria Alliance",
        "type": "organization"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "Internet Printing Protocol",
        "type": "protocol"
      },
      {
        "name": "Printer Working Group",
        "type": "organization"
      },
      {
        "name": "Bonjour",
        "type": "technology"
      },
      {
        "name": "mDNS",
        "type": "protocol"
      },
      {
        "name": "DNS-SD",
        "type": "protocol"
      },
      {
        "name": "PWG Raster",
        "type": "format"
      },
      {
        "name": "PCLm",
        "type": "format"
      },
      {
        "name": "PDF",
        "type": "format"
      },
      {
        "name": "iOS",
        "type": "os"
      },
      {
        "name": "iPadOS",
        "type": "os"
      },
      {
        "name": "Android",
        "type": "os"
      },
      {
        "name": "ChromeOS",
        "type": "os"
      },
      {
        "name": "Wi-Fi Direct",
        "type": "standard"
      },
      {
        "name": "Google Cloud Print",
        "type": "technology"
      },
      {
        "name": "Default Print Service",
        "type": "technology"
      },
      {
        "name": "AirPrint scanning",
        "type": "technology"
      }
    ],
    "livePages": 7,
    "capacity": {
      "conservative": 22,
      "ambitious": 34
    },
    "planned": [
      {
        "slug": "what-is-mopria",
        "title": "What Is Mopria Print Service?",
        "section": "mobile-printing",
        "angle": "Explains the Mopria Alliance standard for driverless printing from Android and Windows, and how it relates to IPP Everywhere."
      },
      {
        "slug": "airprint-vs-mopria",
        "title": "AirPrint vs Mopria: How Driverless Mobile Printing Differs by Platform",
        "section": "mobile-printing",
        "angle": "Neutral comparison of the two dominant driverless mobile print frameworks, their shared standards and where they diverge."
      },
      {
        "slug": "how-airprint-works",
        "title": "How AirPrint Works: Discovery, IPP, and Rendering",
        "section": "mobile-printing",
        "angle": "Technical walkthrough of Bonjour discovery, IPP job submission, and the raster/PDF formats AirPrint uses."
      },
      {
        "slug": "how-mobile-printing-works",
        "title": "How Mobile Printing Works: A Technical Overview",
        "section": "mobile-printing",
        "angle": "End-to-end explanation of how a phone discovers a printer, negotiates capabilities, and submits a print job."
      },
      {
        "slug": "what-is-ipp-everywhere",
        "title": "What Is IPP Everywhere?",
        "section": "mobile-printing",
        "angle": "The PWG driverless printing standard underlying AirPrint and Mopria, its self-describing printer model and required formats."
      },
      {
        "slug": "bonjour-and-printer-discovery",
        "title": "Bonjour and mDNS: How Devices Find Printers on a Network",
        "section": "mobile-printing",
        "angle": "How zero-configuration networking (mDNS/DNS-SD) lets phones discover printers without manual setup."
      },
      {
        "slug": "wifi-direct-printing",
        "title": "Wi-Fi Direct Printing Explained",
        "section": "mobile-printing",
        "angle": "How Wi-Fi Direct enables peer-to-peer mobile printing without a shared network or router."
      },
      {
        "slug": "printing-from-a-phone-without-wifi",
        "title": "Printing From a Phone Without Wi-Fi",
        "section": "mobile-printing",
        "angle": "Options for mobile printing when no shared network exists: Wi-Fi Direct, direct connections, and USB On-The-Go."
      },
      {
        "slug": "what-is-pwg-raster",
        "title": "What Is PWG Raster?",
        "section": "mobile-printing",
        "angle": "The Printer Working Group raster image format used as a common rendering target in driverless mobile printing."
      },
      {
        "slug": "what-happened-to-google-cloud-print",
        "title": "What Happened to Google Cloud Print?",
        "section": "mobile-printing",
        "angle": "History of Google's discontinued cloud printing service and the shift to native ChromeOS/Android printing."
      },
      {
        "slug": "how-android-printing-works",
        "title": "How Printing Works on Android: Print Services Framework",
        "section": "mobile-printing",
        "angle": "The Android print framework, print service plugins, and the Default Print Service that ships with the OS."
      },
      {
        "slug": "how-ios-printing-works",
        "title": "How Printing Works on iOS and iPadOS",
        "section": "mobile-printing",
        "angle": "How the iOS print pipeline uses AirPrint and the system print sheet, with no third-party drivers."
      },
      {
        "slug": "nfc-and-tap-to-print",
        "title": "NFC Tap-to-Print: How Near Field Communication Simplifies Mobile Printing",
        "section": "mobile-printing",
        "angle": "How NFC is used to initiate or configure a mobile print connection by tapping a phone to a printer."
      },
      {
        "slug": "mobile-scanning-and-airprint-scanning",
        "title": "Mobile Scanning: AirPrint Scanning and eSCL",
        "section": "mobile-printing",
        "angle": "How driverless scanning to a phone works via AirPrint scanning and the eSCL/IPP scan protocols."
      },
      {
        "slug": "why-a-printer-doesnt-appear-on-a-phone",
        "title": "Why a Printer Doesn't Appear on Your Phone",
        "section": "troubleshooting",
        "angle": "Discovery-focused troubleshooting: network isolation, mDNS blocking, and band mismatch that hide printers from mobile devices."
      },
      {
        "slug": "printing-from-a-tablet",
        "title": "Printing From a Tablet: iPad and Android Tablets",
        "section": "workflows",
        "angle": "Practical workflow for printing documents and photos from tablets across the major platforms."
      },
      {
        "slug": "print-from-a-phone-to-a-usb-printer",
        "title": "Printing From a Phone to a USB Printer",
        "section": "workflows",
        "angle": "Using USB On-The-Go and host-mode connections to print from a phone to a non-networked USB printer."
      },
      {
        "slug": "mobile-printing-on-guest-and-public-networks",
        "title": "Mobile Printing on Guest and Public Networks",
        "section": "workflows",
        "angle": "Why client isolation blocks discovery on public Wi-Fi and the connection methods that work around it."
      },
      {
        "slug": "mobile-printing-security-basics",
        "title": "Mobile Printing Security Basics",
        "section": "guides",
        "angle": "Neutral overview of encryption in transit (IPPS/TLS), pull printing, and privacy considerations for mobile jobs."
      },
      {
        "slug": "understanding-the-print-sheet",
        "title": "Understanding the Mobile Print Dialog",
        "section": "mobile-printing",
        "angle": "What the system print sheet exposes: copies, range, duplex, media size, and how options map to printer capabilities."
      }
    ],
    "crossLinks": [
      "troubleshooting",
      "cloud-printing",
      "network-printing",
      "print-servers"
    ],
    "imageNeeds": [
      "Public-domain or own-work diagrams of the mDNS/DNS-SD discovery handshake between a phone and printer",
      "Own-work schematic of the IPP job-submission flow (client to printer, capability negotiation, job)",
      "Screenshots of the OS-native mobile print sheet where redistributable / own captures are permissible",
      "Wi-Fi Direct peer-to-peer topology diagram (own work)",
      "Timeline graphic of driverless mobile printing standards (AirPrint, Mopria, IPP Everywhere, Google Cloud Print retirement) built only from verifiable public dates",
      "Vendor logos of standards bodies (PWG, Mopria Alliance) only if usage terms permit; otherwise text-only"
    ]
  },
  {
    "id": "cloud-printing",
    "label": "Cloud Printing",
    "primarySection": "guides",
    "secondarySections": [
      "mobile-printing",
      "workflows"
    ],
    "description": "A knowledge-graph cluster covering cloud and internet-based printing: how print jobs travel over networks and the internet to reach devices, the open standards that make driverless and mobile cloud printing possible (IPP, IPP Everywhere, Mopria, Wi-Fi Direct), pull/secure print-release models, cloud print management approaches such as Microsoft Universal Print, and the history of deprecated services like Google Cloud Print. Content is vendor-neutral, standards-first, and explanatory rather than promotional.",
    "appAnchor": "smart-printer",
    "status": "expand",
    "entities": [
      {
        "name": "Cloud printing",
        "type": "concept"
      },
      {
        "name": "Pull printing",
        "type": "concept"
      },
      {
        "name": "Secure print release",
        "type": "concept"
      },
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "Mopria Alliance",
        "type": "organization"
      },
      {
        "name": "Mopria Print Service",
        "type": "technology"
      },
      {
        "name": "Wi-Fi Direct",
        "type": "standard"
      },
      {
        "name": "Google Cloud Print",
        "type": "product"
      },
      {
        "name": "Microsoft Universal Print",
        "type": "product"
      },
      {
        "name": "AirPrint",
        "type": "technology"
      },
      {
        "name": "Driverless printing",
        "type": "concept"
      },
      {
        "name": "DNS-SD / mDNS (Bonjour)",
        "type": "protocol"
      },
      {
        "name": "Email-to-print",
        "type": "concept"
      },
      {
        "name": "Print release station",
        "type": "concept"
      },
      {
        "name": "Cloud print connector",
        "type": "concept"
      },
      {
        "name": "Follow-me printing",
        "type": "concept"
      },
      {
        "name": "PDF",
        "type": "format"
      }
    ],
    "livePages": 1,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "what-is-cloud-printing",
        "title": "What Is Cloud Printing?",
        "section": "guides",
        "angle": "Defines cloud printing as routing print jobs through internet-hosted services rather than direct local connections, and where the model fits."
      },
      {
        "slug": "how-cloud-printing-works",
        "title": "How Cloud Printing Works",
        "section": "guides",
        "angle": "Walks the job path from client to cloud service to printer, covering rendering, queuing, and connectors at a conceptual level."
      },
      {
        "slug": "cloud-printing-vs-local-printing",
        "title": "Cloud Printing vs. Local Printing",
        "section": "guides",
        "angle": "Compares connectivity model, driver requirements, and trade-offs without ranking products."
      },
      {
        "slug": "how-pull-printing-works",
        "title": "How Pull Printing Works",
        "section": "guides",
        "angle": "Describes queue holding, user authentication, and job roaming across a printer fleet."
      },
      {
        "slug": "what-is-secure-print-release",
        "title": "What Is Secure Print Release?",
        "section": "guides",
        "angle": "Covers PIN, badge, and app-based release as a way to protect confidential documents at the device."
      },
      {
        "slug": "print-release-stations-explained",
        "title": "Print Release Stations Explained",
        "section": "guides",
        "angle": "Describes the dedicated terminals and embedded panels used to authenticate and release held jobs."
      },
      {
        "slug": "what-is-follow-me-printing",
        "title": "What Is Follow-Me Printing?",
        "section": "guides",
        "angle": "Explains the follow-me terminology as user-mobile pull printing across a device pool, clarifying its relationship to pull printing."
      },
      {
        "slug": "what-is-the-internet-printing-protocol",
        "title": "What Is the Internet Printing Protocol (IPP)?",
        "section": "guides",
        "angle": "Introduces IPP as the IETF/PWG protocol underlying network and cloud printing, without version-specific fabrication."
      },
      {
        "slug": "what-is-driverless-printing",
        "title": "What Is Driverless Printing?",
        "section": "guides",
        "angle": "Explains how standardized protocols and raster formats remove the need for vendor drivers."
      },
      {
        "slug": "what-is-email-to-print",
        "title": "What Is Email-to-Print?",
        "section": "guides",
        "angle": "Describes sending documents to a printer via a dedicated email address as an early cloud-print pattern."
      },
      {
        "slug": "cloud-printing-security-basics",
        "title": "Cloud Printing Security Basics",
        "section": "guides",
        "angle": "Covers transport encryption, authentication, and held-job confidentiality concepts, vendor-neutral."
      },
      {
        "slug": "what-is-a-cloud-print-connector",
        "title": "What Is a Cloud Print Connector?",
        "section": "guides",
        "angle": "Explains connector software that bridges legacy or local printers to a cloud print service."
      },
      {
        "slug": "what-is-microsoft-universal-print",
        "title": "What Is Microsoft Universal Print?",
        "section": "guides",
        "angle": "Neutral overview of Universal Print as a cloud-based print-management approach; capabilities only, no pricing."
      },
      {
        "slug": "how-universal-print-works",
        "title": "How Cloud Print Management Works",
        "section": "guides",
        "angle": "Conceptual model of cloud-registered printers, connectors, and centralized queues using Universal Print as an example."
      },
      {
        "slug": "what-is-mopria-print-service",
        "title": "What Is Mopria Print Service?",
        "section": "mobile-printing",
        "angle": "Explains the Mopria Alliance mobile-printing standard for Android and its relation to IPP."
      },
      {
        "slug": "what-is-wi-fi-direct-printing",
        "title": "What Is Wi-Fi Direct Printing?",
        "section": "mobile-printing",
        "angle": "Describes peer-to-peer printing without a shared network and how it differs from cloud printing."
      },
      {
        "slug": "printing-over-the-internet",
        "title": "Printing Over the Internet",
        "section": "mobile-printing",
        "angle": "Explains remote submission of jobs from outside the local network and the standards involved."
      },
      {
        "slug": "what-was-google-cloud-print",
        "title": "What Was Google Cloud Print?",
        "section": "history",
        "angle": "Factual history of Google Cloud Print, its purpose, and its role in popularizing cloud printing."
      },
      {
        "slug": "the-end-of-google-cloud-print",
        "title": "The End of Google Cloud Print",
        "section": "history",
        "angle": "Covers the December 2020 shutdown and the shift toward native OS and standards-based printing."
      },
      {
        "slug": "cloud-printing-for-remote-teams",
        "title": "Cloud Printing for Remote and Hybrid Teams",
        "section": "workflows",
        "angle": "Describes workflow patterns for distributed workers submitting jobs to shared or home devices."
      },
      {
        "slug": "cloud-printing-in-schools",
        "title": "Cloud Printing in Schools",
        "section": "workflows",
        "angle": "Explains managed print-release and Chromebook-friendly cloud workflows in education settings."
      }
    ],
    "crossLinks": [
      "mobile-printing",
      "print-servers",
      "printing-standards",
      "document-workflows",
      "printing-history"
    ],
    "imageNeeds": [
      "Original schematic diagrams (self-produced) of the client to cloud-service to printer job path — the primary visual need, since cloud printing has little public-domain photographic record",
      "Original diagrams of pull/secure-release flow (hold queue, authenticate, release)",
      "Public-domain or openly licensed photos of generic networked multifunction printers and print-release panels, only if provenance is verified",
      "Protocol/standard logos (IPP, Mopria, Wi-Fi Direct) only where licensing permits editorial use; otherwise omit and rely on diagrams",
      "Archived screenshots of deprecated Google Cloud Print interfaces only if a clearly public-domain or permissively licensed source is confirmed; otherwise describe in prose"
    ]
  },
  {
    "id": "network-printing",
    "label": "Network Printing",
    "primarySection": "guides",
    "secondarySections": [
      "history",
      "troubleshooting"
    ],
    "description": "A vendor-neutral, standards-first reference on how printers are shared and reached over networks: the protocols (IPP, LPD/LPR, SMB, raw port 9100), TCP/IP printing and IP addressing, printer discovery (Bonjour, mDNS/DNS-SD, WSD), Unix/Linux printing via CUPS, secure and monitored printing (IPPS, SNMP), and the historical evolution from line-printer daemons to modern driverless printing. Explains concepts durably without model-specific claims, prices, or benchmarks.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "Line Printer Daemon protocol (LPD/LPR)",
        "type": "protocol"
      },
      {
        "name": "Server Message Block (SMB)",
        "type": "protocol"
      },
      {
        "name": "TCP/IP",
        "type": "protocol"
      },
      {
        "name": "Raw port 9100 printing",
        "type": "protocol"
      },
      {
        "name": "CUPS (Common UNIX Printing System)",
        "type": "technology"
      },
      {
        "name": "Bonjour",
        "type": "technology"
      },
      {
        "name": "mDNS / DNS-SD",
        "type": "protocol"
      },
      {
        "name": "Web Services for Devices (WSD)",
        "type": "protocol"
      },
      {
        "name": "SNMP",
        "type": "protocol"
      },
      {
        "name": "IPPS (IPP over TLS)",
        "type": "protocol"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "DHCP",
        "type": "protocol"
      },
      {
        "name": "Mopria Alliance",
        "type": "organization"
      },
      {
        "name": "Driverless printing",
        "type": "concept"
      },
      {
        "name": "Print server",
        "type": "concept"
      },
      {
        "name": "HP JetDirect",
        "type": "technology"
      },
      {
        "name": "AppSocket / JetDirect port",
        "type": "concept"
      }
    ],
    "livePages": 3,
    "capacity": {
      "conservative": 26,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "what-is-ipp-internet-printing-protocol",
        "title": "What Is IPP (Internet Printing Protocol)?",
        "section": "guides",
        "angle": "The IETF/PWG protocol that carries print jobs and status over HTTP, and why it became the modern default."
      },
      {
        "slug": "how-tcp-ip-printing-works",
        "title": "How TCP/IP Printing Works",
        "section": "guides",
        "angle": "How a print job travels over an IP network from computer to printer, and the role of ports and addresses."
      },
      {
        "slug": "what-is-raw-port-9100-printing",
        "title": "What Is Raw Port 9100 (JetDirect) Printing?",
        "section": "guides",
        "angle": "The socket/AppSocket method that sends data directly to a printer's TCP port 9100 with no protocol negotiation."
      },
      {
        "slug": "what-is-lpd-lpr-printing",
        "title": "What Is LPD/LPR Printing?",
        "section": "guides",
        "angle": "The classic Line Printer Daemon protocol, how the LPR client and LPD service interact, and where it still appears."
      },
      {
        "slug": "printing-over-smb-shared-printers",
        "title": "Printing Over SMB (Windows Shared Printers)",
        "section": "guides",
        "angle": "How SMB/CIFS exposes a printer shared from one computer to others on the same network."
      },
      {
        "slug": "how-cups-works",
        "title": "How CUPS Works on Linux and macOS",
        "section": "guides",
        "angle": "The Common UNIX Printing System's architecture, its IPP foundation, and how it manages queues and back ends."
      },
      {
        "slug": "what-is-bonjour-printer-discovery",
        "title": "What Is Bonjour Printer Discovery?",
        "section": "guides",
        "angle": "How zero-configuration networking advertises printers on a local network so devices find them automatically."
      },
      {
        "slug": "what-is-mdns-dns-sd",
        "title": "What Are mDNS and DNS-SD?",
        "section": "guides",
        "angle": "The multicast DNS and service-discovery standards underneath Bonjour and automatic printer detection."
      },
      {
        "slug": "what-is-wsd-printing",
        "title": "What Is WSD (Web Services for Devices) Printing?",
        "section": "guides",
        "angle": "Microsoft's device web-services discovery and printing mechanism and how it differs from raw IP or IPP."
      },
      {
        "slug": "what-is-ipps-secure-ipp",
        "title": "What Is IPPS (Secure IPP over TLS)?",
        "section": "guides",
        "angle": "How IPP is encrypted with TLS to protect print jobs and credentials in transit."
      },
      {
        "slug": "what-is-snmp-printer-monitoring",
        "title": "What Is SNMP Printer Monitoring?",
        "section": "guides",
        "angle": "How the Simple Network Management Protocol reports printer status, supplies, and errors to management tools."
      },
      {
        "slug": "static-ip-vs-dhcp-for-network-printers",
        "title": "Static IP vs DHCP for Network Printers",
        "section": "guides",
        "angle": "Why a printer's address can change under DHCP and when a reserved or static IP is preferable."
      },
      {
        "slug": "what-is-a-printer-port",
        "title": "What Is a Printer Port?",
        "section": "guides",
        "angle": "The concept of a print port (USB, TCP/IP, WSD, LPR) and how the operating system maps a queue to a connection."
      },
      {
        "slug": "shared-printer-vs-network-printer",
        "title": "Shared Printer vs Network Printer",
        "section": "guides",
        "angle": "The distinction between a printer shared from a host computer and one that connects to the network on its own."
      },
      {
        "slug": "how-to-find-a-printers-ip-address",
        "title": "How to Find a Printer's IP Address",
        "section": "guides",
        "angle": "General, vendor-neutral methods to locate a network printer's IP via its panel, config page, or router."
      },
      {
        "slug": "history-of-network-printing-protocols",
        "title": "History of Network Printing Protocols",
        "section": "history",
        "angle": "The path from serial and parallel connections to LPD, raw sockets, and IPP over TCP/IP networks."
      },
      {
        "slug": "from-lpd-to-ipp",
        "title": "From LPD to IPP: How Network Printing Evolved",
        "section": "history",
        "angle": "Why the industry moved from the older Line Printer Daemon model toward the richer, HTTP-based IPP."
      },
      {
        "slug": "history-of-jetdirect-print-servers",
        "title": "The History of JetDirect and External Print Servers",
        "section": "history",
        "angle": "How dedicated print-server hardware put printers directly on Ethernet networks and popularized port 9100."
      },
      {
        "slug": "network-printer-not-found-by-ip",
        "title": "Network Printer Not Found by IP Address",
        "section": "troubleshooting",
        "angle": "Vendor-neutral causes when a printer at a known IP is unreachable: address changes, subnet, firewall, discovery."
      },
      {
        "slug": "printer-ip-address-keeps-changing",
        "title": "Why a Printer's IP Address Keeps Changing",
        "section": "troubleshooting",
        "angle": "How DHCP lease renewal changes a printer's address and general ways to make it stable."
      }
    ],
    "crossLinks": [
      "mobile-printing",
      "printing-history",
      "cloud-printing",
      "print-servers"
    ],
    "imageNeeds": [
      "Public-domain or self-made schematic diagrams of the TCP/IP print path (client to spooler to printer over IP)",
      "Original diagrams of the IPP-over-HTTP request/response flow",
      "Simple original topology diagrams contrasting print-server vs direct-IP printing",
      "Original diagram of mDNS/DNS-SD service discovery on a local subnet",
      "Historical public-domain photographs of early Ethernet print-server hardware where provenance is verifiable",
      "Original comparison table graphics of protocols (IPP, LPD, SMB, port 9100) with ports and characteristics"
    ]
  },
  {
    "id": "print-servers",
    "label": "Print Servers",
    "primarySection": "guides",
    "secondarySections": [
      "history",
      "glossary"
    ],
    "description": "An encyclopedic cluster on dedicated and embedded print servers and server-side queue management: how print servers accept, spool, order, and dispatch jobs; the standard protocols they speak (IPP, LPD/LPR, raw port 9100, SMB); server platforms and services (CUPS, the Windows Print Spooler, Samba); and the historical evolution of network print serving. It complements the existing single \"what-is-a-print-server\" guide with protocol-level, operational, and historical depth while staying vendor-neutral and standards-first.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Print server",
        "type": "concept"
      },
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "Line Printer Daemon protocol (LPD/LPR)",
        "type": "protocol"
      },
      {
        "name": "Raw TCP/IP printing (port 9100)",
        "type": "protocol"
      },
      {
        "name": "CUPS (Common UNIX Printing System)",
        "type": "technology"
      },
      {
        "name": "Windows Print Spooler",
        "type": "technology"
      },
      {
        "name": "Server Message Block (SMB)",
        "type": "protocol"
      },
      {
        "name": "Samba",
        "type": "technology"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "RFC 1179",
        "type": "standard"
      },
      {
        "name": "HP JetDirect",
        "type": "technology"
      },
      {
        "name": "SNMP Printer MIB",
        "type": "standard"
      },
      {
        "name": "Bonjour / mDNS",
        "type": "protocol"
      },
      {
        "name": "Novell NetWare / NDPS",
        "type": "technology"
      },
      {
        "name": "Point and Print",
        "type": "concept"
      },
      {
        "name": "Print queue",
        "type": "concept"
      },
      {
        "name": "Print spooler",
        "type": "concept"
      },
      {
        "name": "Active Directory printer publishing",
        "type": "technology"
      }
    ],
    "livePages": 3,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "how-print-servers-manage-print-queues",
        "title": "How Print Servers Manage Print Queues",
        "section": "guides",
        "angle": "Server-side job intake, spooling, ordering, and dispatch to devices — the queue lifecycle on a server rather than a client."
      },
      {
        "slug": "dedicated-vs-embedded-print-servers",
        "title": "Dedicated vs Embedded Print Servers",
        "section": "guides",
        "angle": "External/appliance print servers versus the NIC-embedded print server built into modern network printers."
      },
      {
        "slug": "what-is-cups",
        "title": "What Is CUPS (Common UNIX Printing System)?",
        "section": "guides",
        "angle": "The IPP-based printing system used on macOS and Linux, how it acts as a local and network print server."
      },
      {
        "slug": "internet-printing-protocol-explained",
        "title": "How the Internet Printing Protocol (IPP) Works",
        "section": "guides",
        "angle": "IPP as the modern HTTP-based print protocol standardized by the PWG/IETF, operations and job attributes."
      },
      {
        "slug": "lpd-lpr-printing-protocol-explained",
        "title": "The LPD/LPR Printing Protocol Explained",
        "section": "guides",
        "angle": "The classic Line Printer Daemon protocol (RFC 1179), its queue model, and where it persists."
      },
      {
        "slug": "raw-port-9100-printing-explained",
        "title": "Raw Port 9100 Printing Explained",
        "section": "guides",
        "angle": "Direct socket / JetDirect-style raw printing, how it differs from queued protocols, and its limitations."
      },
      {
        "slug": "windows-print-spooler-service",
        "title": "The Windows Print Spooler Service",
        "section": "guides",
        "angle": "How the spooler service accepts, renders, and dispatches jobs and how it underpins Windows print servers."
      },
      {
        "slug": "how-samba-print-sharing-works",
        "title": "How Samba Print Sharing Works",
        "section": "guides",
        "angle": "Sharing printers over SMB from Unix-like hosts to Windows clients via Samba's print server role."
      },
      {
        "slug": "print-server-security-basics",
        "title": "Print Server Security Basics",
        "section": "guides",
        "angle": "Vendor-neutral principles: authentication, encrypted transport (IPPS), access control, and reducing exposed print ports."
      },
      {
        "slug": "snmp-printer-monitoring-explained",
        "title": "SNMP and Printer Status Monitoring",
        "section": "guides",
        "angle": "How the SNMP Printer MIB lets servers query device status, supplies, and queue conditions."
      },
      {
        "slug": "how-driverless-printing-works",
        "title": "How Driverless Printing Works",
        "section": "guides",
        "angle": "Self-describing printers and IPP attributes eliminating per-model drivers on the server and client."
      },
      {
        "slug": "point-and-print-explained",
        "title": "What Is Point and Print?",
        "section": "guides",
        "angle": "The Windows mechanism for clients to auto-obtain drivers from a shared print server."
      },
      {
        "slug": "active-directory-printer-publishing",
        "title": "Publishing Printers in Active Directory",
        "section": "guides",
        "angle": "How print servers list shared queues in a directory so clients can discover and connect to them."
      },
      {
        "slug": "how-print-management-software-works",
        "title": "How Print Management Software Works",
        "section": "guides",
        "angle": "Vendor-neutral overview of server-side queue administration, driver management, and job accounting concepts."
      },
      {
        "slug": "history-of-print-servers",
        "title": "A History of Print Servers",
        "section": "history",
        "angle": "From shared minicomputer spoolers to appliance boxes to embedded network cards — the arc of print serving."
      },
      {
        "slug": "netware-print-services-history",
        "title": "NetWare Print Services in Office Networks",
        "section": "history",
        "angle": "Novell's queue-based printing and later NDPS as a milestone in centralized network print serving."
      },
      {
        "slug": "evolution-of-network-printing-protocols",
        "title": "The Evolution of Network Printing Protocols",
        "section": "history",
        "angle": "From LPD and raw sockets toward IPP and driverless standards over the decades."
      },
      {
        "slug": "lpd",
        "title": "LPD (Line Printer Daemon)",
        "section": "glossary",
        "angle": "Concise glossary entry for the LPD/LPR term and RFC 1179."
      }
    ],
    "crossLinks": [
      "printing-standards",
      "mobile-printing",
      "cloud-printing",
      "network-printing"
    ],
    "imageNeeds": [
      "Public-domain or self-made schematic diagrams of a print-server queue lifecycle (client to spool to device)",
      "Verified historical photographs of dedicated print-server appliances / print-server network cards",
      "Public-domain diagrams of protocol stacks (IPP over HTTP, LPD over TCP, raw port 9100)",
      "Original SVG topology diagrams contrasting dedicated vs embedded print servers and direct-IP printing",
      "Screenshots or reproductions only where license is verified; prefer original vector diagrams over vendor imagery"
    ]
  },
  {
    "id": "print-queues",
    "label": "Print Queues & Spooling",
    "primarySection": "guides",
    "secondarySections": [
      "history",
      "glossary"
    ],
    "description": "An explanatory cluster on how print spooling and print queues work across operating systems and networks — covering the Windows Print Spooler service, CUPS on macOS and Linux, the IPP/LPD network printing protocols, spool file formats, and job lifecycle concepts (queueing, holding, priority, release). It complements the site's existing glossary stubs (print-queue, print-spooler) and history pages with deeper standards-first mechanism explanations.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Print spooler",
        "type": "concept"
      },
      {
        "name": "Print queue",
        "type": "concept"
      },
      {
        "name": "Print job",
        "type": "concept"
      },
      {
        "name": "Windows Print Spooler (spoolsv.exe)",
        "type": "technology"
      },
      {
        "name": "CUPS (Common UNIX Printing System)",
        "type": "technology"
      },
      {
        "name": "IPP (Internet Printing Protocol)",
        "type": "protocol"
      },
      {
        "name": "LPD/LPR (Line Printer Daemon, RFC 1179)",
        "type": "protocol"
      },
      {
        "name": "Berkeley printing system",
        "type": "technology"
      },
      {
        "name": "System V printing (lp/lpsched)",
        "type": "technology"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "PWG (Printer Working Group)",
        "type": "organization"
      },
      {
        "name": "EMF spool format",
        "type": "format"
      },
      {
        "name": "RAW spool format",
        "type": "format"
      },
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "PDF",
        "type": "format"
      },
      {
        "name": "PDL (Page Description Language)",
        "type": "concept"
      },
      {
        "name": "Windows",
        "type": "os"
      },
      {
        "name": "macOS",
        "type": "os"
      },
      {
        "name": "Linux",
        "type": "os"
      },
      {
        "name": "Port 9100 raw printing (JetDirect)",
        "type": "protocol"
      }
    ],
    "livePages": 5,
    "capacity": {
      "conservative": 25,
      "ambitious": 38
    },
    "planned": [
      {
        "slug": "how-print-spooling-works",
        "title": "How Print Spooling Works",
        "section": "guides",
        "angle": "The general mechanism: why jobs are buffered to storage instead of sent straight to the printer, and how a spooler decouples the app from the device."
      },
      {
        "slug": "how-the-windows-print-spooler-service-works",
        "title": "How the Windows Print Spooler Service Works",
        "section": "guides",
        "angle": "The role of the spooler service (spoolsv.exe), the print processor, and the local spool folder in accepting and dispatching jobs on Windows."
      },
      {
        "slug": "how-cups-manages-print-queues",
        "title": "How CUPS Manages Print Queues",
        "section": "guides",
        "angle": "The Common UNIX Printing System scheduler, queue definitions, and filters used on macOS and Linux to accept and process jobs."
      },
      {
        "slug": "print-job-lifecycle-and-states",
        "title": "The Print Job Lifecycle and Job States",
        "section": "guides",
        "angle": "Vendor-neutral walkthrough of job states — spooling, queued/pending, held, printing, completed, canceled, aborted — that appear across spooling systems."
      },
      {
        "slug": "spooling-vs-direct-printing",
        "title": "Spooling vs Direct Printing",
        "section": "guides",
        "angle": "What differs when a job is buffered through a queue versus streamed directly to a device, and the tradeoffs of each."
      },
      {
        "slug": "how-network-print-queues-work",
        "title": "How Network Print Queues Work",
        "section": "guides",
        "angle": "How a shared queue on a server or print device accepts jobs from many clients and orders them for a single printer."
      },
      {
        "slug": "lpd-lpr-printing-explained",
        "title": "LPD/LPR Printing Explained",
        "section": "guides",
        "angle": "The Line Printer Daemon protocol (RFC 1179), how LPR clients submit to an LPD queue, and where it still appears."
      },
      {
        "slug": "raw-vs-emf-spool-formats-on-windows",
        "title": "RAW vs EMF Spool Formats on Windows",
        "section": "guides",
        "angle": "The two classic Windows spool data types, when rendering happens client-side vs server-side, and why it matters for shared queues."
      },
      {
        "slug": "print-job-priority-and-scheduling",
        "title": "Print Job Priority and Scheduling",
        "section": "guides",
        "angle": "How queues order jobs, what priority and scheduling settings do, and how held/released jobs fit in."
      },
      {
        "slug": "holding-and-releasing-print-jobs",
        "title": "Holding and Releasing Print Jobs",
        "section": "guides",
        "angle": "What hold/release (and secure/pull print) queues do conceptually and why organisations use them."
      },
      {
        "slug": "print-queue-permissions-and-access",
        "title": "Print Queue Permissions and Access Control",
        "section": "guides",
        "angle": "How access to a shared queue is scoped and why administrators separate print, manage-documents, and manage-queue rights."
      },
      {
        "slug": "how-macos-manages-print-queues",
        "title": "How macOS Manages Print Queues",
        "section": "guides",
        "angle": "How macOS builds on CUPS to present per-printer queues, job monitoring, and pause/resume to the user."
      },
      {
        "slug": "managing-print-queues-on-linux",
        "title": "Managing Print Queues on Linux",
        "section": "guides",
        "angle": "How Linux exposes queues through CUPS and the classic lp/lpr command families, conceptually and neutrally."
      },
      {
        "slug": "why-print-jobs-get-stuck-in-the-queue",
        "title": "Why Print Jobs Get Stuck in the Queue",
        "section": "guides",
        "angle": "The general reasons a job stalls (offline device, spooler state, corrupt data) — mechanism-focused, linking to troubleshooting pages."
      },
      {
        "slug": "port-9100-raw-network-printing",
        "title": "Port 9100 Raw Network Printing",
        "section": "guides",
        "angle": "How raw TCP/IP (JetDirect-style) printing on port 9100 bypasses higher-level queue protocols and where it fits."
      },
      {
        "slug": "spool-file-formats-explained",
        "title": "Spool File Formats Explained",
        "section": "guides",
        "angle": "What a spool file contains, PDL vs device-ready data, and how different systems store queued jobs on disk."
      },
      {
        "slug": "history-of-spooling-in-computing",
        "title": "The History of Spooling in Computing",
        "section": "history",
        "angle": "Origins of SPOOL (Simultaneous Peripheral Operations On-Line) in mainframe and batch systems and how the concept carried into desktop printing."
      },
      {
        "slug": "the-berkeley-and-system-v-printing-systems",
        "title": "The Berkeley and System V Printing Systems",
        "section": "history",
        "angle": "The two historical UNIX printing lineages (lpr/lpd vs lp/lpsched) and how CUPS later unified them."
      },
      {
        "slug": "evolution-of-print-queue-management",
        "title": "The Evolution of Print Queue Management",
        "section": "history",
        "angle": "How queue management moved from mainframe operators to per-OS spoolers to network protocols and driverless printing."
      },
      {
        "slug": "spool-file",
        "title": "Spool File",
        "section": "glossary",
        "angle": "Definition of a spool file as the on-disk representation of a queued print job."
      },
      {
        "slug": "print-job",
        "title": "Print Job",
        "section": "glossary",
        "angle": "Definition of a print job as the unit of work a queue accepts, orders, and dispatches."
      }
    ],
    "crossLinks": [
      "printer-drivers",
      "network-printing",
      "printing-history",
      "mobile-printing"
    ],
    "imageNeeds": [
      "Public-domain or self-made schematic diagrams of the spooling data flow (application → spooler → queue → device)",
      "Self-authored SVG diagrams of print job state transitions (queued → held → printing → completed)",
      "Public-domain historical photos of mainframe/batch computing systems that popularized SPOOL (verify licensing before use)",
      "Neutral self-made diagrams of client/server network queue topology and IPP-over-HTTP request flow",
      "No vendor UI screenshots unless confirmed license-clear; prefer original diagrams"
    ]
  },
  {
    "id": "printer-drivers",
    "label": "Printer Drivers",
    "primarySection": "guides",
    "secondarySections": [
      "troubleshooting",
      "glossary"
    ],
    "description": "1-2 sentence factual description",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Printer driver",
        "type": "concept"
      },
      {
        "name": "PostScript Printer Description (PPD)",
        "type": "format"
      },
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "CUPS",
        "type": "technology"
      },
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "Printer Command Language (PCL)",
        "type": "format"
      },
      {
        "name": "Page description language",
        "type": "concept"
      },
      {
        "name": "Mopria Alliance",
        "type": "organization"
      },
      {
        "name": "AirPrint",
        "type": "standard"
      },
      {
        "name": "Web Services for Devices (WSD)",
        "type": "protocol"
      },
      {
        "name": "GDI printing",
        "type": "concept"
      },
      {
        "name": "Gutenprint",
        "type": "technology"
      },
      {
        "name": "Adobe",
        "type": "brand"
      },
      {
        "name": "Microsoft Windows",
        "type": "os"
      },
      {
        "name": "macOS",
        "type": "os"
      },
      {
        "name": "Raster image processor (RIP)",
        "type": "concept"
      },
      {
        "name": "IEEE-ISTO",
        "type": "organization"
      },
      {
        "name": "Universal print driver",
        "type": "concept"
      }
    ],
    "livePages": 5,
    "capacity": {
      "conservative": 30,
      "ambitious": 58
    },
    "planned": [
      {
        "slug": "what-is-a-ppd-file",
        "title": "What Is a PPD File?",
        "section": "guides",
        "angle": "Explains PostScript Printer Description files: what they declare about a printer's capabilities and how CUPS and PostScript workflows use them."
      },
      {
        "slug": "postscript-vs-pcl",
        "title": "PostScript vs PCL",
        "section": "guides",
        "angle": "Vendor-neutral comparison of the two long-standing page description languages and where each is typically encountered."
      },
      {
        "slug": "what-is-pcl",
        "title": "What Is PCL (Printer Command Language)?",
        "section": "guides",
        "angle": "Origins and role of PCL as a page description language emitted by many drivers."
      },
      {
        "slug": "class-drivers-vs-manufacturer-drivers",
        "title": "Class Drivers vs Manufacturer Drivers",
        "section": "guides",
        "angle": "How OS-provided class/inbox drivers differ from full manufacturer driver packages, and the trade-offs."
      },
      {
        "slug": "what-is-a-universal-print-driver",
        "title": "What Is a Universal Print Driver?",
        "section": "guides",
        "angle": "The concept of one generic driver covering many models via a shared page description language."
      },
      {
        "slug": "driverless-printing-explained",
        "title": "Driverless Printing Explained",
        "section": "guides",
        "angle": "How IPP Everywhere, AirPrint, and Mopria together enable printing without installing model-specific drivers."
      },
      {
        "slug": "host-based-vs-page-description-drivers",
        "title": "Host-Based vs Page-Description Drivers",
        "section": "guides",
        "angle": "Difference between GDI/host-based rendering on the computer and drivers that emit a device page description language."
      },
      {
        "slug": "windows-print-driver-models-v3-vs-v4",
        "title": "Windows Print Driver Models: v3 vs v4",
        "section": "guides",
        "angle": "Conceptual differences between the older v3 and newer v4 Windows print driver architectures."
      },
      {
        "slug": "how-printer-drivers-are-installed",
        "title": "How Printer Drivers Are Installed",
        "section": "guides",
        "angle": "Install concepts: driver packages, the driver store, Plug and Play discovery, and inbox vs downloaded drivers."
      },
      {
        "slug": "what-is-gutenprint",
        "title": "What Is Gutenprint?",
        "section": "guides",
        "angle": "The open-source driver project supplying CUPS/Ghostscript drivers for many printers, explained neutrally."
      },
      {
        "slug": "what-is-a-print-filter",
        "title": "What Is a Print Filter?",
        "section": "guides",
        "angle": "How CUPS filters transform a print job through stages from application format to device-ready data."
      },
      {
        "slug": "ppd",
        "title": "PPD",
        "section": "glossary",
        "angle": "Glossary definition of PostScript Printer Description file."
      },
      {
        "slug": "page-description-language",
        "title": "Page Description Language",
        "section": "glossary",
        "angle": "Glossary definition of a page description language."
      },
      {
        "slug": "reinstall-printer-driver",
        "title": "How to Reinstall a Printer Driver",
        "section": "troubleshooting",
        "angle": "Conceptual, vendor-neutral steps for removing and reinstalling a driver when output or connection fails."
      },
      {
        "slug": "wrong-printer-driver-installed",
        "title": "Wrong Printer Driver Installed",
        "section": "troubleshooting",
        "angle": "Why a mismatched driver produces garbled or failed output and how to identify and correct it."
      },
      {
        "slug": "printer-driver-unavailable-windows",
        "title": "Printer Driver Is Unavailable on Windows",
        "section": "troubleshooting",
        "angle": "What the 'driver is unavailable' state means conceptually and general remedies without vendor-specific claims."
      }
    ],
    "crossLinks": [
      "network-printing",
      "mobile-printing",
      "cloud-printing",
      "print-servers"
    ],
    "imageNeeds": [
      "Public-domain or self-made diagram of the print data flow: application to driver to page description language to RIP to print engine",
      "Simple original schematic contrasting host-based/GDI rendering with device-side page description rendering",
      "Neutral diagram of driverless printing discovery (IPP Everywhere / mDNS) without vendor logos",
      "Original diagram of the CUPS filter chain stages",
      "Public-domain historical imagery of early PostScript-era laser printing for the PostScript/PCL context pages"
    ]
  },
  {
    "id": "print-languages",
    "label": "Page Description Languages",
    "primarySection": "guides",
    "secondarySections": [
      "glossary",
      "history"
    ],
    "description": "A knowledge cluster explaining page description languages (PDLs) — the standardized ways computers describe a page's appearance to a printer independently of any single device. Covers PostScript, PCL, PDF as a print format, XPS, and ESC/P, plus the supporting concepts (raster image processors, job-control languages, vector-vs-raster print data, and host-based printing) needed to understand how a print job is described, transmitted, and rendered.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "Printer Command Language (PCL)",
        "type": "format"
      },
      {
        "name": "Portable Document Format (PDF)",
        "type": "format"
      },
      {
        "name": "XML Paper Specification (XPS)",
        "type": "format"
      },
      {
        "name": "ESC/P",
        "type": "format"
      },
      {
        "name": "PDF/X",
        "type": "standard"
      },
      {
        "name": "PWG Raster",
        "type": "standard"
      },
      {
        "name": "ISO 32000",
        "type": "standard"
      },
      {
        "name": "ISO 15930",
        "type": "standard"
      },
      {
        "name": "Printer Job Language (PJL)",
        "type": "protocol"
      },
      {
        "name": "Raster Image Processor (RIP)",
        "type": "concept"
      },
      {
        "name": "PostScript Printer Description (PPD)",
        "type": "format"
      },
      {
        "name": "Adobe Systems",
        "type": "organization"
      },
      {
        "name": "Hewlett-Packard",
        "type": "brand"
      },
      {
        "name": "Epson",
        "type": "brand"
      },
      {
        "name": "Microsoft",
        "type": "organization"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "GDI printing",
        "type": "concept"
      },
      {
        "name": "Page description language",
        "type": "concept"
      },
      {
        "name": "Open XML Paper Specification",
        "type": "standard"
      }
    ],
    "livePages": 9,
    "capacity": {
      "conservative": 24,
      "ambitious": 38
    },
    "planned": [
      {
        "slug": "what-is-pcl-printer-command-language",
        "title": "What Is PCL (Printer Command Language)?",
        "section": "guides",
        "angle": "Explains HP's PCL, its escape-sequence heritage, and its role as a widely supported printer language."
      },
      {
        "slug": "what-is-xps-print-format",
        "title": "What Is XPS (XML Paper Specification)?",
        "section": "guides",
        "angle": "Microsoft's XML-based fixed-document and print format, its relationship to the Windows print path, and Open XPS."
      },
      {
        "slug": "what-is-esc-p-epson-printer-language",
        "title": "What Is ESC/P, Epson's Printer Control Language?",
        "section": "guides",
        "angle": "Escape/P control codes for dot-matrix and later Epson printers and why it became a de facto standard."
      },
      {
        "slug": "pdf-as-a-print-format",
        "title": "How PDF Is Used as a Print Format",
        "section": "guides",
        "angle": "PDF's role in modern print pipelines as a device-independent page format, distinct from general document use."
      },
      {
        "slug": "postscript-levels-explained",
        "title": "PostScript Levels 1, 2, and 3 Explained",
        "section": "guides",
        "angle": "How successive PostScript revisions extended color, fonts, and performance — capability differences, not marketing."
      },
      {
        "slug": "pcl5-vs-pcl6-explained",
        "title": "PCL 5 vs PCL 6: What Changed",
        "section": "guides",
        "angle": "Contrasts the escape-sequence PCL 5 family with the object-oriented PCL 6 (PCL XL) approach."
      },
      {
        "slug": "what-is-pdf-x-print-standard",
        "title": "What Is PDF/X? The Print-Ready PDF Standard",
        "section": "guides",
        "angle": "ISO 15930 subset of PDF for reliable prepress exchange — what it constrains and why."
      },
      {
        "slug": "host-based-vs-page-description-language-printing",
        "title": "Host-Based Printing vs Page Description Languages",
        "section": "guides",
        "angle": "GDI/host-based printing where the computer rasterizes, contrasted with printer-interpreted PDLs."
      },
      {
        "slug": "what-is-printer-job-language-pjl",
        "title": "What Is PJL (Printer Job Language)?",
        "section": "guides",
        "angle": "HP's job-control layer that wraps PDL data to switch languages and set job options."
      },
      {
        "slug": "vector-vs-raster-print-data",
        "title": "Vector vs Raster Data in Printing",
        "section": "guides",
        "angle": "The core distinction underpinning PDLs: scalable descriptions vs fixed dot grids sent to a printer."
      },
      {
        "slug": "how-a-printer-interprets-a-print-job",
        "title": "How a Printer Interprets a Print Job",
        "section": "guides",
        "angle": "End-to-end path from application to marked page: spooling, PDL, interpretation, and rasterization."
      },
      {
        "slug": "what-is-postscript-emulation",
        "title": "What Is PostScript Emulation?",
        "section": "guides",
        "angle": "How compatible interpreters implement PostScript-like behavior without Adobe's original interpreter."
      },
      {
        "slug": "origins-of-postscript-and-adobe",
        "title": "The Origins of PostScript and Adobe",
        "section": "history",
        "angle": "How PostScript emerged from earlier page-description research and shaped Adobe's founding era."
      },
      {
        "slug": "evolution-of-printer-languages",
        "title": "The Evolution of Printer Languages",
        "section": "history",
        "angle": "Historical arc from control codes and ESC/P through PCL and PostScript to PDF/XPS-based pipelines."
      }
    ],
    "crossLinks": [
      "mobile-printing",
      "cloud-printing",
      "network-printing",
      "print-servers"
    ],
    "imageNeeds": [
      "Public-domain or CC-licensed photos of early PostScript laser printers (e.g., Apple LaserWriter) from Wikimedia Commons with verified license/attribution",
      "Photos of classic HP LaserJet units associated with PCL, license-verified",
      "Epson dot-matrix printer photos illustrating ESC/P-era hardware, license-verified",
      "Original neutral SVG diagrams (site-authored) of the print pipeline: application to spooler to PDL to RIP to print engine",
      "Original SVG comparison diagram of vector vs raster page data",
      "Screenshots or diagrams must avoid reproducing copyrighted spec text; use site-authored schematic illustrations instead"
    ]
  },
  {
    "id": "operating-systems-printing",
    "label": "Printing across Operating Systems",
    "primarySection": "guides",
    "secondarySections": [
      "troubleshooting",
      "mobile-printing"
    ],
    "description": "An operating-system-oriented reference explaining how printing works on Windows, macOS, Linux/CUPS, Android, iOS, and ChromeOS: the print subsystems each platform ships, how printers are discovered and added, the shared standards (IPP, IPP Everywhere, Mopria, WSD, Bonjour/mDNS, LPD) that let documents flow to a printer, and how driverless printing differs across each OS. Complements the site's existing device-centric and how-it-works guides by centering the platform rather than the printer.",
    "appAnchor": "smart-printer",
    "status": "expand",
    "entities": [
      {
        "name": "Microsoft Windows",
        "type": "os"
      },
      {
        "name": "macOS",
        "type": "os"
      },
      {
        "name": "Linux",
        "type": "os"
      },
      {
        "name": "Android",
        "type": "os"
      },
      {
        "name": "iOS",
        "type": "os"
      },
      {
        "name": "ChromeOS",
        "type": "os"
      },
      {
        "name": "CUPS",
        "type": "technology"
      },
      {
        "name": "OpenPrinting",
        "type": "organization"
      },
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "Mopria Alliance",
        "type": "organization"
      },
      {
        "name": "AirPrint",
        "type": "technology"
      },
      {
        "name": "Bonjour / mDNS",
        "type": "protocol"
      },
      {
        "name": "Web Services for Devices (WSD)",
        "type": "protocol"
      },
      {
        "name": "Line Printer Daemon (LPD/LPR)",
        "type": "protocol"
      },
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "Printer Command Language (PCL)",
        "type": "format"
      },
      {
        "name": "Portable Document Format (PDF)",
        "type": "format"
      },
      {
        "name": "Ghostscript",
        "type": "technology"
      }
    ],
    "livePages": 10,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "printing-on-windows-explained",
        "title": "How Printing Works on Windows",
        "section": "guides",
        "angle": "The Windows print subsystem end to end: spooler service, print processor, port monitors, and where drivers fit."
      },
      {
        "slug": "printing-on-macos-explained",
        "title": "How Printing Works on macOS",
        "section": "guides",
        "angle": "macOS printing built on CUPS: how the OS routes jobs, uses AirPrint discovery, and handles PDF as its native imaging model."
      },
      {
        "slug": "printing-on-linux-with-cups",
        "title": "How Printing Works on Linux with CUPS",
        "section": "guides",
        "angle": "The CUPS-based Linux printing stack: scheduler, filters, PPD/driverless queues, and the web administration interface."
      },
      {
        "slug": "printing-from-android-explained",
        "title": "How Printing Works on Android",
        "section": "guides",
        "angle": "The Android print framework and pluggable print services model, including the default Mopria-based service."
      },
      {
        "slug": "printing-from-ios-and-ipados-explained",
        "title": "How Printing Works on iOS and iPadOS",
        "section": "guides",
        "angle": "How Apple's mobile OSes print through AirPrint with no installed drivers, and what the system handles automatically."
      },
      {
        "slug": "printing-on-chromeos-explained",
        "title": "How Printing Works on ChromeOS",
        "section": "guides",
        "angle": "The ChromeOS printing model built on CUPS and IPP, including local and native printer setup after Cloud Print's shutdown."
      },
      {
        "slug": "what-is-wsd-web-services-for-devices",
        "title": "What Is WSD (Web Services for Devices) Printing?",
        "section": "guides",
        "angle": "The Windows discovery-and-print protocol, how it differs from IPP, and when Windows chooses it."
      },
      {
        "slug": "adding-a-printer-on-windows",
        "title": "How Printers Are Added on Windows",
        "section": "guides",
        "angle": "The mechanics of installing a printer on Windows: auto-discovery, the IPP class driver, and manual port setup, described conceptually."
      },
      {
        "slug": "adding-a-printer-on-macos",
        "title": "How Printers Are Added on macOS",
        "section": "guides",
        "angle": "How macOS discovers and configures printers through AirPrint/Bonjour and IPP, and what happens behind Add Printer."
      },
      {
        "slug": "adding-a-printer-on-linux",
        "title": "How Printers Are Added on Linux",
        "section": "guides",
        "angle": "Configuring queues on Linux via CUPS: driverless auto-setup, the web interface, and PPD-based queues."
      },
      {
        "slug": "network-printer-discovery-across-operating-systems",
        "title": "How Printer Discovery Works Across Operating Systems",
        "section": "guides",
        "angle": "The discovery mechanisms each OS uses: Bonjour/mDNS-SD, WSD, and DNS-SD, and why the same printer appears differently per platform."
      },
      {
        "slug": "print-to-pdf-across-operating-systems",
        "title": "Print to PDF Across Operating Systems",
        "section": "guides",
        "angle": "How Microsoft Print to PDF, macOS's built-in PDF output, and CUPS-PDF implement the print-to-file concept."
      },
      {
        "slug": "google-cloud-print-shutdown-explained",
        "title": "Google Cloud Print and Why It Was Retired",
        "section": "guides",
        "angle": "What Google Cloud Print did, its 2020 shutdown, and how native OS printing replaced it, stated factually."
      },
      {
        "slug": "printer-not-detected-on-linux",
        "title": "When a Printer Is Not Detected on Linux",
        "section": "troubleshooting",
        "angle": "How CUPS discovery can fail and the conceptual checks (service, discovery protocol, driverless support) to reason through."
      },
      {
        "slug": "printer-not-detected-on-chromebook",
        "title": "When a Printer Is Not Detected on a Chromebook",
        "section": "troubleshooting",
        "angle": "Why ChromeOS may not find a network printer and the IPP/discovery factors involved, framed neutrally."
      },
      {
        "slug": "printing-from-android-without-an-app",
        "title": "Printing From Android Without a Vendor App",
        "section": "mobile-printing",
        "angle": "Using Android's built-in print service and Mopria to print without installing a manufacturer app."
      }
    ],
    "crossLinks": [
      "mobile-printing",
      "cloud-printing",
      "network-printing",
      "print-servers"
    ],
    "imageNeeds": [
      "Original schematic diagrams of each OS print pipeline (job submission to output), drawn in-house to avoid copyrighted OS UI screenshots",
      "Original block diagram of the IPP request/response flow between client OS and printer",
      "Cross-platform discovery diagram contrasting mDNS/Bonjour, WSD, and DNS-SD",
      "CUPS filter-pipeline diagram (submission to filters to backend)",
      "Freely licensed project marks where license permits (e.g., Tux for Linux, CUPS/OpenPrinting where usage terms allow), verified before use",
      "A neutral comparison table graphic of standards (IPP Everywhere, AirPrint, Mopria, WSD, LPD) with no vendor endorsement"
    ]
  },
  {
    "id": "fax-technologies",
    "label": "Fax Technology",
    "primarySection": "fax",
    "secondarySections": [
      "history",
      "glossary"
    ],
    "description": "An encyclopedic, standards-first reference on how facsimile transmission works: the ITU-T protocol stack (T.30 call negotiation, T.4/T.6 image coding), analog modem modulation over the PSTN, error correction, and the migration to Fax over IP (T.37/T.38). Vendor-neutral and grounded in durable public standards knowledge, with no fabricated specs or dates.",
    "appAnchor": "fax-app",
    "status": "expand",
    "entities": [
      {
        "name": "ITU-T",
        "type": "organization"
      },
      {
        "name": "CCITT",
        "type": "organization"
      },
      {
        "name": "T.30",
        "type": "standard"
      },
      {
        "name": "T.4",
        "type": "standard"
      },
      {
        "name": "T.6",
        "type": "standard"
      },
      {
        "name": "T.37",
        "type": "standard"
      },
      {
        "name": "T.38",
        "type": "standard"
      },
      {
        "name": "Group 3 fax",
        "type": "standard"
      },
      {
        "name": "Group 4 fax",
        "type": "standard"
      },
      {
        "name": "Error Correction Mode",
        "type": "technology"
      },
      {
        "name": "Modified Huffman coding",
        "type": "technology"
      },
      {
        "name": "Modified READ coding",
        "type": "technology"
      },
      {
        "name": "V.27ter",
        "type": "standard"
      },
      {
        "name": "V.29",
        "type": "standard"
      },
      {
        "name": "V.17",
        "type": "standard"
      },
      {
        "name": "V.34",
        "type": "standard"
      },
      {
        "name": "Super G3",
        "type": "technology"
      },
      {
        "name": "PSTN",
        "type": "technology"
      },
      {
        "name": "Fax over IP",
        "type": "technology"
      },
      {
        "name": "CNG tone",
        "type": "concept"
      }
    ],
    "livePages": 6,
    "capacity": {
      "conservative": 30,
      "ambitious": 48
    },
    "planned": [
      {
        "slug": "t30-fax-protocol-explained",
        "title": "The T.30 Fax Protocol: How a Fax Call Is Negotiated",
        "section": "fax",
        "angle": "Walks through the five phases of a T.30 session (call setup, pre-message negotiation, message transmission, post-message, disconnect) using standard HDLC frame names."
      },
      {
        "slug": "t4-image-coding-standard",
        "title": "T.4: How Group 3 Fax Encodes a Page",
        "section": "fax",
        "angle": "Explains the ITU-T T.4 recommendation for scanning, resolution options, and one-dimensional/two-dimensional line coding."
      },
      {
        "slug": "t6-mmr-compression",
        "title": "T.6 and MMR: Two-Dimensional Fax Compression",
        "section": "fax",
        "angle": "Describes Modified Modified READ coding used by Group 4 and optionally Group 3, and how it compresses relative to earlier schemes."
      },
      {
        "slug": "modified-huffman-fax-compression",
        "title": "Modified Huffman Coding in Fax Transmission",
        "section": "fax",
        "angle": "How run-length Modified Huffman (MH) compresses black-and-white scan lines, the baseline T.4 one-dimensional mode."
      },
      {
        "slug": "fax-group-standards-1-through-4",
        "title": "Fax Groups 1 to 4: The ITU-T Classification Explained",
        "section": "fax",
        "angle": "Neutral comparison of the Group 1/2/3/4 designations, what distinguishes analog from digital groups, without invented adoption figures."
      },
      {
        "slug": "error-correction-mode-ecm",
        "title": "Error Correction Mode (ECM) in Group 3 Fax",
        "section": "fax",
        "angle": "How ECM frames and retransmission improve reliability over noisy phone lines, as defined in T.30 annexes."
      },
      {
        "slug": "fax-modem-modulation-v27-v29-v17",
        "title": "Fax Modem Modulation: V.27ter, V.29 and V.17",
        "section": "fax",
        "angle": "Explains the ITU-T modulation standards that carry fax image data and their nominal signaling roles during a call."
      },
      {
        "slug": "super-g3-and-v34-fax",
        "title": "Super G3 Fax and the V.34 Modulation Standard",
        "section": "fax",
        "angle": "What Super G3 refers to, how V.34 modulation applies to fax, and the T.30 fast-negotiation procedure it uses."
      },
      {
        "slug": "cng-and-ced-fax-tones",
        "title": "CNG and CED: The Handshake Tones of a Fax Call",
        "section": "fax",
        "angle": "Defines the calling (CNG) and called-station (CED) tones and their role in distinguishing fax from voice calls."
      },
      {
        "slug": "t38-fax-over-ip",
        "title": "T.38: Real-Time Fax over IP Networks",
        "section": "fax",
        "angle": "Explains the T.38 recommendation for relaying fax across packet networks and why real-time faxing differs from voice over IP."
      },
      {
        "slug": "t37-store-and-forward-internet-fax",
        "title": "T.37: Store-and-Forward Internet Fax",
        "section": "fax",
        "angle": "Describes the T.37 email-based fax model using MIME and TIFF-F profiles, contrasted with real-time T.38."
      },
      {
        "slug": "g711-fax-passthrough",
        "title": "Fax Pass-Through Over G.711 Voice Codecs",
        "section": "fax",
        "angle": "How fax can traverse VoIP as a G.711 audio stream, and why packet loss and echo cancellation complicate it."
      },
      {
        "slug": "how-fax-resolution-works",
        "title": "Fax Resolution: Standard, Fine and Superfine",
        "section": "fax",
        "angle": "Explains the horizontal and vertical resolution options defined for Group 3 fax and how they affect image detail."
      },
      {
        "slug": "fax-over-pstn-basics",
        "title": "How Fax Travels Over the PSTN",
        "section": "fax",
        "angle": "Grounds fax in the analog public switched telephone network: audio-band signaling, dialing, and call setup."
      },
      {
        "slug": "fax-transmission-confirmation-reports",
        "title": "Fax Transmission Reports and Confirmation Pages",
        "section": "fax",
        "angle": "Explains what a transmission confirmation report records and how T.30 post-message signals underpin it."
      },
      {
        "slug": "fax-header-line-requirements",
        "title": "Fax Header Lines: What TSI and the Printed Header Convey",
        "section": "fax",
        "angle": "Describes the transmitting subscriber identification frame and the human-readable header commonly printed atop pages."
      },
      {
        "slug": "radiofax-weather-facsimile",
        "title": "Radiofax and Marine Weather Facsimile",
        "section": "fax",
        "angle": "Covers HF radio facsimile used for weather charts, a distinct analog facsimile lineage from telephone fax."
      },
      {
        "slug": "ccitt-to-itu-t-fax-standards",
        "title": "From CCITT to ITU-T: Who Standardizes Fax",
        "section": "history",
        "angle": "Traces the standards body that authored the T-series recommendations and its renaming, without invented milestone dates."
      },
      {
        "slug": "internet-fax-and-email-to-fax",
        "title": "Internet Fax and Email-to-Fax Gateways",
        "section": "fax",
        "angle": "Explains how gateway services bridge email/web submissions to the fax network, in neutral educational terms."
      },
      {
        "slug": "glossary-baud-vs-bit-rate-fax",
        "title": "Baud and Bit Rate in Fax Transmission",
        "section": "glossary",
        "angle": "Defines baud versus bit rate as they apply to fax modem signaling to clear up a common conflation."
      },
      {
        "slug": "glossary-hdlc-fax-framing",
        "title": "HDLC Framing in Fax Signaling",
        "section": "glossary",
        "angle": "Short glossary entry on the HDLC frame structure T.30 uses for its control messages."
      },
      {
        "slug": "fax-vs-voip-why-fax-fails",
        "title": "Why Fax Can Fail Over VoIP Lines",
        "section": "fax",
        "angle": "Explains packet loss, jitter, and codec transcoding as the technical reasons analog fax struggles on VoIP, motivating T.38."
      }
    ],
    "crossLinks": [
      "printing-history",
      "document-workflows",
      "mobile-printing"
    ],
    "imageNeeds": [
      "Public-domain diagrams of fax call signaling phases (T.30 handshake) redrawn as original SVG",
      "Original SVG schematic of run-length / Modified Huffman line coding",
      "Public-domain historical photographs of early facsimile and radiofax equipment (verify PD status and source)",
      "Original SVG comparing real-time T.38 vs store-and-forward T.37 paths",
      "Original SVG of the PSTN audio-band call path for a fax transmission"
    ]
  },
  {
    "id": "eco-fax",
    "label": "Digital Fax Workflows",
    "primarySection": "fax",
    "secondarySections": [
      "workflows"
    ],
    "description": "An editorial reference on modern, software-mediated faxing: how documents move between fax endpoints and email, how fax rides over IP networks, and how organizations run fax without a physical machine. Coverage stays conceptual and standards-first, explaining the transports, image formats, artifacts (cover sheets, confirmation reports), and sector contexts of digital fax rather than giving legal or compliance advice.",
    "appAnchor": "fax-app",
    "status": "expand",
    "entities": [
      {
        "name": "ITU-T",
        "type": "organization"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "ITU-T T.30",
        "type": "standard"
      },
      {
        "name": "ITU-T T.37",
        "type": "standard"
      },
      {
        "name": "ITU-T T.38",
        "type": "standard"
      },
      {
        "name": "ITU-T T.4",
        "type": "standard"
      },
      {
        "name": "Group 3 fax",
        "type": "standard"
      },
      {
        "name": "Fax over IP",
        "type": "technology"
      },
      {
        "name": "PSTN",
        "type": "technology"
      },
      {
        "name": "VoIP",
        "type": "technology"
      },
      {
        "name": "SMTP",
        "type": "protocol"
      },
      {
        "name": "SIP",
        "type": "protocol"
      },
      {
        "name": "TIFF",
        "type": "format"
      },
      {
        "name": "PDF",
        "type": "format"
      },
      {
        "name": "E.164",
        "type": "standard"
      },
      {
        "name": "MH/MR/MMR compression",
        "type": "concept"
      },
      {
        "name": "Fax server",
        "type": "concept"
      },
      {
        "name": "Internet fax",
        "type": "concept"
      }
    ],
    "livePages": 1,
    "capacity": {
      "conservative": 24,
      "ambitious": 36
    },
    "planned": [
      {
        "slug": "what-is-internet-fax",
        "title": "What Is Internet Fax?",
        "section": "fax",
        "angle": "Defines internet/online fax as sending and receiving faxes through software and IP networks instead of a dedicated machine and phone line."
      },
      {
        "slug": "how-fax-to-email-works",
        "title": "How Fax-to-Email Works",
        "section": "fax",
        "angle": "Explains the store-and-forward path where an inbound fax is received by a gateway, converted to an image file, and delivered as an email attachment."
      },
      {
        "slug": "how-email-to-fax-works",
        "title": "How Email-to-Fax Works",
        "section": "fax",
        "angle": "Explains the reverse path: an email with an attachment is converted and transmitted to a destination fax number over a gateway."
      },
      {
        "slug": "what-is-fax-over-ip",
        "title": "What Is Fax over IP (FoIP)?",
        "section": "fax",
        "angle": "Introduces FoIP as carrying fax sessions across IP networks and the two ITU-T approaches, real-time and store-and-forward."
      },
      {
        "slug": "t38-real-time-fax-over-ip",
        "title": "T.38: Real-Time Fax over IP",
        "section": "fax",
        "angle": "Describes the ITU-T T.38 recommendation for relaying a live fax session across an IP network without treating it as ordinary audio."
      },
      {
        "slug": "t37-store-and-forward-fax",
        "title": "T.37: Store-and-Forward Internet Fax",
        "section": "fax",
        "angle": "Describes the ITU-T T.37 model that carries fax images as email using SMTP for non-real-time delivery."
      },
      {
        "slug": "group-3-fax-protocol-explained",
        "title": "The Group 3 Fax Protocol Explained",
        "section": "fax",
        "angle": "Explains the T.30 session negotiation and T.4 image coding that define classic Group 3 fax, the base that digital fax preserves."
      },
      {
        "slug": "anatomy-of-a-fax-cover-sheet",
        "title": "Anatomy of a Fax Cover Sheet",
        "section": "fax",
        "angle": "Breaks down the conventional fields of a cover sheet and what purpose each field serves in a transmission."
      },
      {
        "slug": "understanding-fax-confirmation-reports",
        "title": "Understanding Fax Confirmation Reports",
        "section": "fax",
        "angle": "Explains what a transmission confirmation report records and why it functions as evidence that a document was sent and received."
      },
      {
        "slug": "virtual-fax-numbers-explained",
        "title": "Virtual Fax Numbers Explained",
        "section": "fax",
        "angle": "Describes what a virtual or cloud fax number is and how it decouples a fax identity from any physical line or device."
      },
      {
        "slug": "porting-a-fax-number",
        "title": "Porting a Fax Number to a Digital Service",
        "section": "fax",
        "angle": "Explains the general concept of number portability applied to fax numbers, framed conceptually without carrier-specific claims."
      },
      {
        "slug": "receiving-faxes-online",
        "title": "Receiving Faxes Online",
        "section": "fax",
        "angle": "Describes the workflow of receiving inbound faxes as files in an inbox or email rather than on paper."
      },
      {
        "slug": "sending-a-fax-from-a-computer",
        "title": "Sending a Fax from a Computer",
        "section": "workflows",
        "angle": "A conceptual workflow for composing and sending a fax from a desktop or mobile device without a fax machine."
      },
      {
        "slug": "faxing-over-voip-lines",
        "title": "Faxing over VoIP Lines",
        "section": "fax",
        "angle": "Explains why fax behaves differently over packet-switched voice than over the PSTN and the role of FoIP methods."
      },
      {
        "slug": "why-faxes-fail-over-voip",
        "title": "Why Faxes Fail over VoIP",
        "section": "fax",
        "angle": "Explains, conceptually, how audio codecs, packet loss, and jitter disrupt the T.30 handshake and cause failed transmissions."
      },
      {
        "slug": "fax-image-formats-tiff-and-pdf",
        "title": "Fax Image Formats: TIFF and PDF",
        "section": "fax",
        "angle": "Explains why fax has historically used TIFF for the transmitted image and how PDF is used for delivery and archiving."
      },
      {
        "slug": "secure-fax-transmission-basics",
        "title": "Secure Fax Transmission Basics",
        "section": "fax",
        "angle": "Explains general concepts of protecting fax in transit and at rest, such as encrypted transport and access control, without vendor or compliance claims."
      },
      {
        "slug": "archiving-and-storing-digital-faxes",
        "title": "Archiving and Storing Digital Faxes",
        "section": "workflows",
        "angle": "A workflow view of retaining sent and received faxes as searchable files within a document store."
      },
      {
        "slug": "fax-in-healthcare-workflows",
        "title": "Fax in Healthcare Workflows",
        "section": "fax",
        "angle": "Neutral context on why fax persists in clinical document exchange and how digital fax fits, with no medical or compliance advice."
      },
      {
        "slug": "fax-in-legal-and-government-workflows",
        "title": "Fax in Legal and Government Workflows",
        "section": "fax",
        "angle": "Neutral context on fax as a sanctioned submission method in some legal and administrative processes, with no legal advice."
      },
      {
        "slug": "fax-broadcasting-explained",
        "title": "Fax Broadcasting Explained",
        "section": "fax",
        "angle": "Explains sending one document to many fax destinations as a batch, framed as a workflow concept."
      },
      {
        "slug": "setting-up-a-paperless-fax-workflow",
        "title": "Setting Up a Paperless Fax Workflow",
        "section": "workflows",
        "angle": "A conceptual end-to-end setup for sending, receiving, and filing faxes entirely as files."
      }
    ],
    "crossLinks": [
      "fax-technologies"
    ],
    "imageNeeds": [
      "Original SVG diagrams of the T.30 fax handshake and session phases (self-drawn, no third-party assets)",
      "Original SVG flow diagrams for fax-to-email and email-to-fax gateway paths",
      "Original SVG comparison of T.37 store-and-forward vs T.38 real-time FoIP",
      "Public-domain or self-created diagram of a generic fax cover-sheet layout",
      "Public-domain historical photographs of Group 3 fax machines from archival collections, used only for historical context"
    ]
  },
  {
    "id": "scanning",
    "label": "Scanning",
    "primarySection": "guides",
    "secondarySections": [
      "workflows",
      "glossary"
    ],
    "description": "1-2 sentence factual description of the cluster's scope",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "TWAIN",
        "type": "standard"
      },
      {
        "name": "WIA (Windows Image Acquisition)",
        "type": "technology"
      },
      {
        "name": "SANE",
        "type": "technology"
      },
      {
        "name": "CCD (charge-coupled device) sensor",
        "type": "technology"
      },
      {
        "name": "CIS (contact image sensor)",
        "type": "technology"
      },
      {
        "name": "Optical resolution",
        "type": "concept"
      },
      {
        "name": "Color depth (bit depth)",
        "type": "concept"
      },
      {
        "name": "DPI (dots per inch)",
        "type": "concept"
      },
      {
        "name": "PPI (pixels per inch)",
        "type": "concept"
      },
      {
        "name": "Optical character recognition (OCR)",
        "type": "concept"
      },
      {
        "name": "Automatic document feeder (ADF)",
        "type": "concept"
      },
      {
        "name": "Dynamic range",
        "type": "concept"
      },
      {
        "name": "TIFF",
        "type": "format"
      },
      {
        "name": "JPEG",
        "type": "format"
      },
      {
        "name": "PNG",
        "type": "format"
      },
      {
        "name": "PDF/A",
        "type": "format"
      },
      {
        "name": "International Color Consortium (ICC)",
        "type": "organization"
      },
      {
        "name": "ICC profile",
        "type": "format"
      },
      {
        "name": "ISO",
        "type": "organization"
      },
      {
        "name": "ISO 12233 resolution test",
        "type": "standard"
      }
    ],
    "livePages": 21,
    "capacity": {
      "conservative": 28,
      "ambitious": 46
    },
    "planned": [
      {
        "slug": "how-sheetfed-scanners-work",
        "title": "How Sheetfed Scanners Work",
        "section": "guides",
        "angle": "Moving-paper (fixed-sensor) design and how it differs from flatbed capture for stacks of documents."
      },
      {
        "slug": "understanding-optical-vs-interpolated-resolution",
        "title": "Optical vs Interpolated Scan Resolution",
        "section": "guides",
        "angle": "Why optical resolution is the real capability and interpolation only adds software-estimated pixels."
      },
      {
        "slug": "understanding-color-depth-in-scanning",
        "title": "Understanding Color Depth in Scanning",
        "section": "guides",
        "angle": "What 8-bit, 24-bit, and higher bit depths mean for tonal gradation and why extra bits help editing."
      },
      {
        "slug": "twain-vs-wia-scanning-standards",
        "title": "TWAIN vs WIA Scanning Standards",
        "section": "guides",
        "angle": "Two acquisition interfaces on Windows: what each is, who maintains them, and how applications use them."
      },
      {
        "slug": "what-is-the-twain-standard",
        "title": "What Is the TWAIN Standard",
        "section": "guides",
        "angle": "The cross-platform image-acquisition API, its data source model, and its role between apps and scanners."
      },
      {
        "slug": "what-is-sane-scanner-access",
        "title": "What Is SANE (Scanner Access Now Easy)",
        "section": "guides",
        "angle": "The Unix/Linux scanner API, its backend/frontend architecture, and how it enables device support."
      },
      {
        "slug": "scan-resolution-vs-print-resolution",
        "title": "Scan Resolution vs Print Resolution",
        "section": "guides",
        "angle": "Why the same DPI number means different things when capturing versus placing dots on paper."
      },
      {
        "slug": "choosing-the-right-scan-resolution",
        "title": "Choosing the Right Scan Resolution",
        "section": "guides",
        "angle": "How intended use (text, archival, photo enlargement) determines a sensible optical resolution."
      },
      {
        "slug": "grayscale-vs-color-scanning",
        "title": "Grayscale vs Color Scanning",
        "section": "guides",
        "angle": "When single-channel grayscale is sufficient and how color mode affects file size and OCR."
      },
      {
        "slug": "what-is-duplex-scanning",
        "title": "What Is Duplex Scanning",
        "section": "guides",
        "angle": "Single-pass vs two-pass double-sided scanning and how blank-page removal fits in."
      },
      {
        "slug": "understanding-scanner-color-management",
        "title": "Understanding Scanner Color Management",
        "section": "guides",
        "angle": "How ICC profiles and calibration keep captured color consistent across devices."
      },
      {
        "slug": "understanding-dynamic-range-in-scanning",
        "title": "Understanding Dynamic Range in Scanning",
        "section": "guides",
        "angle": "What dynamic range means for capturing shadow and highlight detail, especially in film and photos."
      },
      {
        "slug": "how-film-and-slide-scanners-work",
        "title": "How Film and Slide Scanners Work",
        "section": "guides",
        "angle": "Transmissive scanning of negatives and transparencies and why it differs from reflective document scanning."
      },
      {
        "slug": "how-ocr-turns-scans-into-text",
        "title": "How OCR Turns Scans Into Text",
        "section": "guides",
        "angle": "The recognition pipeline from bitmap to characters and why scan quality drives accuracy."
      },
      {
        "slug": "choosing-a-scan-file-format",
        "title": "Choosing a Scan File Format",
        "section": "guides",
        "angle": "When TIFF, JPEG, PNG, or PDF/A suit archival, sharing, or editable-document needs."
      }
    ],
    "crossLinks": [
      "troubleshooting",
      "ocr",
      "document-workflows",
      "business-workflows"
    ],
    "imageNeeds": [
      "Public-domain or CC-licensed cutaway/diagram of a flatbed scanner scan head and light path",
      "Diagram or photo comparing CCD and CIS sensor arrangements",
      "Photo of an automatic document feeder mechanism / roller assembly",
      "Illustration of bit-depth tonal gradation (grayscale/color ramps)",
      "Public-domain film/slide (transmissive) scanner illustration",
      "ISO 12233 style resolution test chart image (verify license)",
      "Diagram of the TWAIN/WIA application-to-device acquisition flow"
    ]
  },
  {
    "id": "ocr",
    "label": "OCR",
    "primarySection": "guides",
    "secondarySections": [
      "workflows",
      "glossary"
    ],
    "description": "An encyclopedic cluster explaining optical character recognition: how the recognition pipeline turns scanned page images into machine-readable text, what governs accuracy, how searchable output and text layers are produced, and how languages, scripts, and layout are handled. Standards-first and vendor-neutral, covering OCR output formats (searchable PDF text layers, hOCR, ALTO XML) and adjacent recognition types (ICR, OMR) without benchmarks, rankings, or invented accuracy figures.",
    "appAnchor": "pdf-editor",
    "status": "expand",
    "entities": [
      {
        "name": "Optical Character Recognition",
        "type": "technology"
      },
      {
        "name": "Intelligent Character Recognition",
        "type": "concept"
      },
      {
        "name": "Optical Mark Recognition",
        "type": "concept"
      },
      {
        "name": "Tesseract",
        "type": "technology"
      },
      {
        "name": "Searchable PDF",
        "type": "format"
      },
      {
        "name": "Text layer",
        "type": "concept"
      },
      {
        "name": "hOCR",
        "type": "format"
      },
      {
        "name": "ALTO XML",
        "type": "format"
      },
      {
        "name": "PDF/A",
        "type": "standard"
      },
      {
        "name": "Mixed Raster Content",
        "type": "format"
      },
      {
        "name": "Unicode",
        "type": "standard"
      },
      {
        "name": "Binarization",
        "type": "concept"
      },
      {
        "name": "Deskew",
        "type": "concept"
      },
      {
        "name": "Layout analysis",
        "type": "concept"
      },
      {
        "name": "Ground truth",
        "type": "concept"
      },
      {
        "name": "Confidence score",
        "type": "concept"
      },
      {
        "name": "OCR-A",
        "type": "standard"
      },
      {
        "name": "Adobe",
        "type": "organization"
      },
      {
        "name": "ISO",
        "type": "organization"
      },
      {
        "name": "Handwriting recognition",
        "type": "concept"
      }
    ],
    "livePages": 34,
    "capacity": {
      "conservative": 26,
      "ambitious": 42
    },
    "planned": [
      {
        "slug": "how-ocr-works",
        "title": "How OCR Works: From Page Image to Text",
        "section": "guides",
        "angle": "Walks the recognition pipeline: image capture, preprocessing, layout analysis, character/word recognition, and text output."
      },
      {
        "slug": "ocr-accuracy-factors",
        "title": "What Affects OCR Accuracy",
        "section": "guides",
        "angle": "Explains the durable factors — resolution, contrast, skew, noise, font, language, layout complexity — that influence recognition quality, without citing accuracy percentages."
      },
      {
        "slug": "how-searchable-pdfs-are-created",
        "title": "How Searchable PDFs Are Created",
        "section": "guides",
        "angle": "Describes how OCR adds an invisible text layer over a scanned page image so the document becomes selectable and searchable."
      },
      {
        "slug": "ocr-vs-icr",
        "title": "OCR vs ICR: Printed Text vs Handwriting Recognition",
        "section": "guides",
        "angle": "Contrasts optical character recognition of machine print with intelligent character recognition aimed at hand-printed characters."
      },
      {
        "slug": "ocr-language-and-script-support",
        "title": "How OCR Handles Languages and Scripts",
        "section": "guides",
        "angle": "Explains language models, character sets, and script direction (Latin, CJK, right-to-left) and why script selection matters."
      },
      {
        "slug": "preparing-documents-for-ocr",
        "title": "Preparing Documents for OCR",
        "section": "guides",
        "angle": "Practical, vendor-neutral scan-quality guidance: resolution, lighting, contrast, and flat pages that improve recognition."
      },
      {
        "slug": "image-preprocessing-for-ocr",
        "title": "Image Preprocessing for OCR: Deskew, Binarize, Denoise",
        "section": "guides",
        "angle": "Explains the preprocessing steps that clean a page image before recognition and why each helps."
      },
      {
        "slug": "ocr-confidence-scores-explained",
        "title": "OCR Confidence Scores Explained",
        "section": "guides",
        "angle": "Describes what per-character and per-word confidence values represent and how they flag uncertain recognition."
      },
      {
        "slug": "how-ocr-reads-tables-and-columns",
        "title": "How OCR Reads Tables and Multi-Column Pages",
        "section": "guides",
        "angle": "Covers layout/zoning analysis and reading order for complex page structures."
      },
      {
        "slug": "why-ocr-makes-mistakes",
        "title": "Why OCR Makes Mistakes",
        "section": "guides",
        "angle": "Explains common error sources — look-alike characters, broken glyphs, bleed-through, unusual fonts — as durable phenomena."
      },
      {
        "slug": "ocr-output-formats",
        "title": "OCR Output Formats: Text, Searchable PDF, hOCR, ALTO",
        "section": "guides",
        "angle": "Compares plain text, searchable PDF, hOCR, and ALTO XML and what positional/layout data each preserves."
      },
      {
        "slug": "ocr-and-handwriting-recognition",
        "title": "OCR and Handwriting Recognition",
        "section": "guides",
        "angle": "Explains why cursive and free handwriting are harder than machine print and how handwriting recognition differs."
      },
      {
        "slug": "searchable-pdf",
        "title": "Searchable PDF",
        "section": "glossary",
        "angle": "Defines a searchable PDF as an image page plus a hidden text layer."
      },
      {
        "slug": "text-layer",
        "title": "Text Layer",
        "section": "glossary",
        "angle": "Defines the invisible OCR text layer positioned over a page image."
      },
      {
        "slug": "hocr",
        "title": "hOCR",
        "section": "glossary",
        "angle": "Defines the hOCR format for embedding OCR results, including layout, in HTML/XML."
      },
      {
        "slug": "alto-xml",
        "title": "ALTO XML",
        "section": "glossary",
        "angle": "Defines ALTO XML as a standard for representing OCR text and layout of digitized pages."
      },
      {
        "slug": "binarization",
        "title": "Binarization",
        "section": "glossary",
        "angle": "Defines converting a grayscale/color scan into a two-tone image for recognition."
      },
      {
        "slug": "deskew",
        "title": "Deskew",
        "section": "glossary",
        "angle": "Defines correcting the rotation of a tilted scanned page."
      },
      {
        "slug": "intelligent-character-recognition",
        "title": "Intelligent Character Recognition (ICR)",
        "section": "glossary",
        "angle": "Defines ICR as recognition aimed at hand-printed characters."
      },
      {
        "slug": "optical-mark-recognition",
        "title": "Optical Mark Recognition (OMR)",
        "section": "glossary",
        "angle": "Defines OMR as detecting marks in fixed positions, e.g. checkboxes and bubble forms."
      },
      {
        "slug": "ground-truth",
        "title": "Ground Truth",
        "section": "glossary",
        "angle": "Defines verified reference text used to evaluate or train OCR."
      },
      {
        "slug": "batch-ocr-scanned-archives",
        "title": "Batch OCR of Scanned Archives",
        "section": "workflows",
        "angle": "Vendor-neutral workflow for running OCR across many scanned files to make an archive searchable."
      },
      {
        "slug": "make-old-scans-searchable",
        "title": "Make Old Scans Searchable with OCR",
        "section": "workflows",
        "angle": "Workflow for adding a text layer to existing image-only scans."
      },
      {
        "slug": "extract-text-from-a-document-photo",
        "title": "Extract Text from a Photo of a Document",
        "section": "workflows",
        "angle": "Workflow for OCR on phone-camera captures, including cropping, deskew, and contrast steps."
      }
    ],
    "crossLinks": [
      "scanning",
      "document-workflows",
      "file-formats"
    ],
    "imageNeeds": [
      "Public-domain historical photos of early OCR/reading machines (e.g. Kurzweil Reading Machine, early bank/postal character readers) with verified PD or government-work provenance",
      "Public-domain OCR-A / OCR-B font specimen sheets or standards figures",
      "Original diagrams we author ourselves: OCR pipeline flow (capture to text layer), deskew/binarization before-after, page zoning/layout-analysis illustration",
      "Original schematic of a searchable-PDF stack showing image layer plus hidden text layer",
      "Public-domain sample scanned pages (out-of-copyright books/newspapers from library digitization programs) to illustrate layout analysis"
    ]
  },
  {
    "id": "document-workflows",
    "label": "Document Workflows",
    "primarySection": "workflows",
    "secondarySections": [
      "guides"
    ],
    "description": "Repeatable, vendor-neutral processes for scanning, converting, combining, organising, and preparing documents for print or long-term storage.",
    "appAnchor": "pdf-editor",
    "status": "expand",
    "entities": [
      {
        "name": "Portable Document Format (PDF)",
        "type": "format"
      },
      {
        "name": "ISO 32000",
        "type": "standard"
      },
      {
        "name": "PDF/A",
        "type": "format"
      },
      {
        "name": "ISO 19005",
        "type": "standard"
      },
      {
        "name": "Optical Character Recognition (OCR)",
        "type": "technology"
      },
      {
        "name": "Searchable PDF",
        "type": "concept"
      },
      {
        "name": "TIFF",
        "type": "format"
      },
      {
        "name": "JPEG",
        "type": "format"
      },
      {
        "name": "TWAIN",
        "type": "standard"
      },
      {
        "name": "Windows Image Acquisition (WIA)",
        "type": "technology"
      },
      {
        "name": "ISO 216",
        "type": "standard"
      },
      {
        "name": "Unicode",
        "type": "standard"
      },
      {
        "name": "International Organization for Standardization",
        "type": "organization"
      },
      {
        "name": "Adobe",
        "type": "organization"
      },
      {
        "name": "Deskew",
        "type": "concept"
      },
      {
        "name": "PDF Editor",
        "type": "product"
      }
    ],
    "livePages": 7,
    "capacity": {
      "conservative": 42,
      "ambitious": 75
    },
    "planned": [
      {
        "slug": "combine-multiple-scans-into-one-pdf",
        "title": "How to Combine Multiple Scans Into One PDF",
        "section": "workflows",
        "angle": "Merging separate scanned images or page files into a single ordered PDF document."
      },
      {
        "slug": "scan-a-multipage-document-to-pdf",
        "title": "Scanning a Multipage Document to a Single PDF",
        "section": "workflows",
        "angle": "Using an ADF or flatbed to capture many pages into one file, including page order and orientation."
      },
      {
        "slug": "convert-photos-to-a-pdf-document",
        "title": "Converting Photos to a PDF Document",
        "section": "workflows",
        "angle": "Turning JPEG/PNG captures into a paginated, printable PDF while managing size and orientation."
      },
      {
        "slug": "reduce-pdf-file-size-for-email",
        "title": "Reducing PDF File Size for Email",
        "section": "workflows",
        "angle": "How image downsampling and compression lower PDF size, and the quality trade-offs involved."
      },
      {
        "slug": "split-a-pdf-into-separate-files",
        "title": "How to Split a PDF Into Separate Files",
        "section": "workflows",
        "angle": "Dividing a large PDF by page ranges into smaller standalone documents."
      },
      {
        "slug": "merge-pdfs-into-one-document",
        "title": "Merging Several PDFs Into One Document",
        "section": "workflows",
        "angle": "Concatenating multiple PDFs in a chosen order into a single file."
      },
      {
        "slug": "scan-receipts-for-record-keeping",
        "title": "Scanning Receipts for Record Keeping",
        "section": "workflows",
        "angle": "A repeatable capture-and-file process for receipts, including OCR for searchability."
      },
      {
        "slug": "digitize-paper-documents",
        "title": "How to Digitize Paper Documents",
        "section": "workflows",
        "angle": "End-to-end capture-to-archive process for turning physical paperwork into organised digital files."
      },
      {
        "slug": "batch-scanning-workflows",
        "title": "Batch Scanning Workflows Explained",
        "section": "workflows",
        "angle": "Using automatic document feeders and separator conventions to scan large volumes efficiently."
      },
      {
        "slug": "scan-to-email-workflow",
        "title": "Setting Up a Scan-to-Email Workflow",
        "section": "workflows",
        "angle": "How scan-to-email works on multifunction devices and its common configuration steps."
      },
      {
        "slug": "scan-to-cloud-storage-workflow",
        "title": "Scan-to-Cloud-Storage Workflows",
        "section": "workflows",
        "angle": "Routing scanned files to a shared cloud folder for retrieval across devices."
      },
      {
        "slug": "convert-word-documents-to-pdf",
        "title": "Converting Word Documents to PDF for Printing",
        "section": "guides",
        "angle": "Why PDF preserves layout and fonts for reliable printing, and how conversion works."
      },
      {
        "slug": "create-a-searchable-document-archive",
        "title": "Creating a Searchable Document Archive",
        "section": "workflows",
        "angle": "Combining OCR, consistent naming, and folder structure to make a findable archive."
      },
      {
        "slug": "naming-scanned-files-consistently",
        "title": "Naming Scanned Files Consistently",
        "section": "guides",
        "angle": "Durable file-naming conventions (dates, ISO 8601, descriptors) that keep archives searchable."
      },
      {
        "slug": "extract-pages-from-a-pdf",
        "title": "How to Extract Pages From a PDF",
        "section": "workflows",
        "angle": "Pulling selected pages out of a PDF into a new document without altering the original."
      },
      {
        "slug": "rotate-and-deskew-scanned-pages",
        "title": "Rotating and Deskewing Scanned Pages",
        "section": "workflows",
        "angle": "Correcting orientation and skew introduced during scanning for cleaner output."
      },
      {
        "slug": "redact-sensitive-information-in-documents",
        "title": "Redacting Sensitive Information in Documents",
        "section": "guides",
        "angle": "Why true redaction removes underlying data rather than just covering it visually."
      },
      {
        "slug": "prepare-documents-for-long-term-archiving",
        "title": "Preparing Documents for Long-Term Archiving",
        "section": "guides",
        "angle": "How PDF/A (ISO 19005) supports durable, self-contained archival documents."
      },
      {
        "slug": "set-up-a-paperless-office-workflow",
        "title": "Setting Up a Paperless Office Workflow",
        "section": "workflows",
        "angle": "A repeatable capture, OCR, name, and store loop for reducing paper handling."
      },
      {
        "slug": "fill-and-sign-pdf-forms",
        "title": "How to Fill and Sign PDF Forms",
        "section": "workflows",
        "angle": "Working with interactive form fields versus flat scanned forms, and adding signatures."
      },
      {
        "slug": "print-a-pdf-at-the-correct-scale",
        "title": "Printing a PDF at the Correct Scale",
        "section": "workflows",
        "angle": "Fit-to-page, actual size, and paper-size settings (ISO 216 vs Letter) that affect output."
      },
      {
        "slug": "convert-a-scanned-pdf-to-editable-text",
        "title": "Converting a Scanned PDF to Editable Text",
        "section": "workflows",
        "angle": "How OCR turns image-only PDFs into selectable, editable text and its accuracy limits."
      },
      {
        "slug": "flatten-a-pdf-before-printing",
        "title": "Flattening a PDF Before Printing",
        "section": "guides",
        "angle": "Why merging layers, annotations, and form fields prevents print discrepancies."
      },
      {
        "slug": "scan-two-sided-documents",
        "title": "Scanning Two-Sided Documents",
        "section": "workflows",
        "angle": "Duplex scanning and manual front-then-back techniques for double-sided originals."
      }
    ],
    "crossLinks": [
      "mobile-printing",
      "troubleshooting",
      "scanning",
      "ocr"
    ],
    "imageNeeds": [
      "Public-domain or self-made diagrams of the scan-to-PDF pipeline (capture, OCR, assemble, store)",
      "Neutral schematic of an automatic document feeder (ADF) vs flatbed path",
      "Illustration of page-ordering and merge/split operations on document pages",
      "Diagram of the OCR text-layer overlay on a scanned image",
      "ISO 216 (A-series) vs North American paper-size comparison chart",
      "Deskew/rotation before-and-after schematic (generated, not photographed)"
    ]
  },
  {
    "id": "business-workflows",
    "label": "Business Document Workflows",
    "primarySection": "workflows",
    "secondarySections": [
      "guides"
    ],
    "description": "Vendor-neutral, standards-first coverage of how organizations move paper and digital documents through repeatable office processes: capture and scanning, approval routing, indexing and metadata, records retention, archival formats, redaction, and electronic signing. Focused on durable concepts and published standards rather than any specific product or software.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "ISO 15489",
        "type": "standard"
      },
      {
        "name": "PDF/A (ISO 19005)",
        "type": "format"
      },
      {
        "name": "ISO 32000 (PDF)",
        "type": "standard"
      },
      {
        "name": "PDF",
        "type": "format"
      },
      {
        "name": "TIFF",
        "type": "format"
      },
      {
        "name": "TWAIN",
        "type": "protocol"
      },
      {
        "name": "WIA",
        "type": "technology"
      },
      {
        "name": "SANE",
        "type": "technology"
      },
      {
        "name": "OCR",
        "type": "technology"
      },
      {
        "name": "XMP",
        "type": "standard"
      },
      {
        "name": "PAdES",
        "type": "standard"
      },
      {
        "name": "eIDAS",
        "type": "standard"
      },
      {
        "name": "Records retention schedule",
        "type": "concept"
      },
      {
        "name": "Document management system",
        "type": "concept"
      },
      {
        "name": "Metadata",
        "type": "concept"
      },
      {
        "name": "Audit trail",
        "type": "concept"
      },
      {
        "name": "Barcode",
        "type": "technology"
      },
      {
        "name": "ISO 216",
        "type": "standard"
      },
      {
        "name": "Adobe",
        "type": "organization"
      },
      {
        "name": "NARA",
        "type": "organization"
      }
    ],
    "livePages": 2,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "document-approval-workflows",
        "title": "How Document Approval Workflows Work",
        "section": "workflows",
        "angle": "Routing, review, and sign-off stages that move a document from draft to approved in an office setting."
      },
      {
        "slug": "records-retention-basics",
        "title": "Records Retention Basics for Offices",
        "section": "workflows",
        "angle": "What a retention schedule is and how organizations decide how long to keep records, framed against ISO 15489 and NARA guidance without inventing durations."
      },
      {
        "slug": "digitizing-paper-archives",
        "title": "Digitizing Paper Archives: A Workflow Overview",
        "section": "workflows",
        "angle": "The end-to-end process of converting a backlog of paper files into searchable digital records."
      },
      {
        "slug": "scan-to-email-workflows",
        "title": "Scan-to-Email Workflows",
        "section": "workflows",
        "angle": "How multifunction devices send scanned documents as email attachments and the practical limits involved."
      },
      {
        "slug": "paperless-office-workflows",
        "title": "Paperless Office Workflows",
        "section": "workflows",
        "angle": "How offices reduce paper by combining capture, digital routing, and electronic storage, described as a set of practices."
      },
      {
        "slug": "document-indexing-and-metadata",
        "title": "Document Indexing and Metadata",
        "section": "workflows",
        "angle": "How index fields and metadata (including XMP) make scanned documents findable in a repository."
      },
      {
        "slug": "what-is-pdf-a",
        "title": "What Is PDF/A and Why It Is Used for Archiving",
        "section": "guides",
        "angle": "The archival PDF subset defined by ISO 19005 and why it constrains fonts, color, and embedded content for long-term storage."
      },
      {
        "slug": "electronic-signature-workflows",
        "title": "Electronic Signature Workflows",
        "section": "workflows",
        "angle": "How documents are signed electronically, with reference to PAdES and eIDAS concepts, kept vendor-neutral."
      },
      {
        "slug": "document-redaction-workflows",
        "title": "Document Redaction Workflows",
        "section": "workflows",
        "angle": "How sensitive information is permanently removed from documents before sharing, and why visual masking alone is insufficient."
      },
      {
        "slug": "invoice-processing-workflow",
        "title": "How Invoice Processing Workflows Work",
        "section": "workflows",
        "angle": "A generic accounts-payable document flow from receipt through capture, matching, approval, and archival."
      },
      {
        "slug": "document-naming-conventions",
        "title": "Document Naming Conventions",
        "section": "workflows",
        "angle": "Principles for consistent, sortable, machine-friendly file naming in shared document stores."
      },
      {
        "slug": "document-version-control",
        "title": "Document Version Control Basics",
        "section": "workflows",
        "angle": "How versioning, check-in/check-out, and revision history keep collaborative documents consistent."
      },
      {
        "slug": "audit-trails-for-documents",
        "title": "Audit Trails for Business Documents",
        "section": "workflows",
        "angle": "What a document audit trail records and why it matters for accountability and records management."
      },
      {
        "slug": "document-management-systems-explained",
        "title": "Document Management Systems Explained",
        "section": "guides",
        "angle": "What a DMS is as a category of system, its core capabilities, and how it relates to capture and retention, without naming or ranking products."
      },
      {
        "slug": "separator-sheets-and-barcode-scanning",
        "title": "Separator Sheets and Barcode-Driven Scanning",
        "section": "workflows",
        "angle": "How barcode and blank-page separators automatically split large scan batches into individual documents."
      },
      {
        "slug": "document-capture-workflow",
        "title": "The Document Capture Workflow",
        "section": "workflows",
        "angle": "The capture stage of a document lifecycle: acquisition, image cleanup, OCR, indexing, and export."
      }
    ],
    "crossLinks": [
      "scanning",
      "ocr",
      "document-workflows",
      "document-preservation"
    ],
    "imageNeeds": [
      "Public-domain photos of office filing cabinets and paper archives",
      "Historical images of microfilm/microfiche readers and document storage",
      "Public-domain photos of document scanners and multifunction devices with document feeders",
      "Historical office imagery: in/out trays, rubber approval stamps, carbon-copy forms",
      "Public-domain mailroom and records-room photographs",
      "Neutral diagrams (self-produced SVG) of a document lifecycle and approval routing flow"
    ]
  },
  {
    "id": "document-preservation",
    "label": "Document Preservation",
    "primarySection": "workflows",
    "secondarySections": [
      "history",
      "glossary"
    ],
    "description": "An encyclopedic cluster on long-term digital document preservation: archival file formats (PDF/A, TIFF, JPEG 2000), file integrity and fixity checking, format obsolescence and migration, preservation metadata, and the standards and reference models (ISO 19005, ISO 14721/OAIS) that underpin trustworthy digital archives. It centers on durable, vendor-neutral practices for keeping scanned and born-digital documents readable over decades.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "PDF/A",
        "type": "format"
      },
      {
        "name": "ISO 19005",
        "type": "standard"
      },
      {
        "name": "TIFF",
        "type": "format"
      },
      {
        "name": "JPEG 2000",
        "type": "format"
      },
      {
        "name": "OAIS Reference Model",
        "type": "standard"
      },
      {
        "name": "ISO 14721",
        "type": "standard"
      },
      {
        "name": "veraPDF",
        "type": "technology"
      },
      {
        "name": "Checksum",
        "type": "concept"
      },
      {
        "name": "SHA-256",
        "type": "standard"
      },
      {
        "name": "Fixity",
        "type": "concept"
      },
      {
        "name": "Dublin Core",
        "type": "standard"
      },
      {
        "name": "PREMIS",
        "type": "standard"
      },
      {
        "name": "XMP",
        "type": "standard"
      },
      {
        "name": "PRONOM",
        "type": "technology"
      },
      {
        "name": "Library of Congress",
        "type": "organization"
      },
      {
        "name": "National Archives",
        "type": "organization"
      },
      {
        "name": "Digital Preservation Coalition",
        "type": "organization"
      },
      {
        "name": "LZW Compression",
        "type": "concept"
      },
      {
        "name": "ICC Color Profile",
        "type": "standard"
      },
      {
        "name": "Microfilm",
        "type": "technology"
      }
    ],
    "livePages": 2,
    "capacity": {
      "conservative": 26,
      "ambitious": 42
    },
    "planned": [
      {
        "slug": "pdf-a-conformance-levels",
        "title": "PDF/A Conformance Levels: A, B, and U Explained",
        "section": "workflows",
        "angle": "Explains the PDF/A-1/2/3 parts and the a/b/u conformance levels without version-specific dates that are uncertain"
      },
      {
        "slug": "pdf-vs-pdf-a-for-archiving",
        "title": "PDF vs PDF/A: Which to Use for Long-Term Storage",
        "section": "workflows",
        "angle": "Compares ordinary PDF and PDF/A on font embedding, encryption, and external references for archival suitability"
      },
      {
        "slug": "convert-documents-to-pdf-a",
        "title": "How to Convert Documents to PDF/A for Archiving",
        "section": "workflows",
        "angle": "General, vendor-neutral workflow for producing conformant PDF/A from office documents and scans"
      },
      {
        "slug": "validating-pdf-a-compliance",
        "title": "How PDF/A Validation Works",
        "section": "workflows",
        "angle": "Explains conformance checking and the role of open validators like veraPDF, without claiming specific pass rates"
      },
      {
        "slug": "tiff-for-document-archiving",
        "title": "Why TIFF Is Used for Document Archiving",
        "section": "workflows",
        "angle": "Covers TIFF as a lossless master format, multi-page TIFF, and its role in preservation masters"
      },
      {
        "slug": "tiff-vs-pdf-for-scanned-archives",
        "title": "TIFF vs PDF for Scanned Document Archives",
        "section": "workflows",
        "angle": "Compares image-master (TIFF) and access-copy (PDF) roles in a preservation workflow"
      },
      {
        "slug": "lossless-vs-lossy-compression-for-archiving",
        "title": "Lossless vs Lossy Compression for Archived Documents",
        "section": "workflows",
        "angle": "Why preservation masters favor lossless (LZW, ZIP, JPEG 2000 lossless) over lossy JPEG"
      },
      {
        "slug": "jpeg-2000-for-preservation",
        "title": "JPEG 2000 in Digital Preservation",
        "section": "workflows",
        "angle": "Describes JPEG 2000's lossless mode and adoption considerations for archival imaging, neutrally"
      },
      {
        "slug": "verifying-file-integrity-with-checksums",
        "title": "Verifying Document Integrity With Checksums",
        "section": "workflows",
        "angle": "How MD5/SHA-256 hashes detect bit-level corruption in stored files"
      },
      {
        "slug": "what-is-fixity-checking",
        "title": "What Is Fixity Checking in Digital Preservation?",
        "section": "workflows",
        "angle": "Defines fixity, why archives re-verify checksums over time, and how it detects silent data loss"
      },
      {
        "slug": "file-format-migration-strategies",
        "title": "File Format Migration Strategies for Long-Term Archives",
        "section": "workflows",
        "angle": "Migration vs emulation, and planning format migrations to avoid obsolescence"
      },
      {
        "slug": "preventing-format-obsolescence",
        "title": "Preventing Digital Format Obsolescence",
        "section": "workflows",
        "angle": "Why proprietary/undocumented formats become unreadable and how open, documented formats mitigate risk"
      },
      {
        "slug": "preservation-metadata-explained",
        "title": "Preservation Metadata: Dublin Core, PREMIS, and XMP",
        "section": "workflows",
        "angle": "Roles of descriptive, structural, and preservation metadata standards in archived documents"
      },
      {
        "slug": "oais-reference-model-explained",
        "title": "The OAIS Reference Model Explained",
        "section": "workflows",
        "angle": "Plain-language overview of ISO 14721 OAIS concepts: SIP, AIP, DIP, ingest and access"
      },
      {
        "slug": "scanning-documents-for-long-term-preservation",
        "title": "Scanning Documents for Long-Term Preservation",
        "section": "workflows",
        "angle": "Choosing resolution, bit depth, and color capture for archival scans as durable practice, not fixed numbers"
      },
      {
        "slug": "storage-media-longevity",
        "title": "Storage Media Longevity for Digital Archives",
        "section": "workflows",
        "angle": "Why archives rely on active management and multiple copies rather than any single durable medium"
      },
      {
        "slug": "color-profiles-in-archived-documents",
        "title": "Why Color Profiles Matter in Archived Documents",
        "section": "workflows",
        "angle": "How embedded ICC profiles preserve accurate color reproduction over time"
      },
      {
        "slug": "history-of-document-archiving",
        "title": "A History of Document Archiving: Paper to Digital",
        "section": "history",
        "angle": "Narrative from paper records and microfilm to born-digital preservation"
      },
      {
        "slug": "microfilm-and-microfiche",
        "title": "Microfilm and Microfiche in Document Preservation",
        "section": "history",
        "angle": "How microforms preserved records before digitization and their continued archival role"
      },
      {
        "slug": "checksum",
        "title": "Checksum",
        "section": "glossary",
        "angle": "Concise definition of a checksum/hash and its use in integrity verification"
      },
      {
        "slug": "oais",
        "title": "OAIS",
        "section": "glossary",
        "angle": "Concise definition of the Open Archival Information System reference model (ISO 14721)"
      }
    ],
    "crossLinks": [
      "printing-history",
      "scanning",
      "ocr",
      "document-workflows"
    ],
    "imageNeeds": [
      "Public-domain photographs of microfilm/microfiche readers and archival storage",
      "Public-domain or self-authored SVG diagrams of the OAIS ingest/AIP/access flow",
      "Self-authored diagrams of a checksum/fixity verification loop over time",
      "Self-authored comparison diagram of preservation-master vs access-copy file roles",
      "Public-domain imagery of archival storage vaults or records repositories"
    ]
  },
  {
    "id": "digital-archives",
    "label": "Digital Archives",
    "primarySection": "workflows",
    "secondarySections": [
      "history"
    ],
    "description": "Practical and historical coverage of building and organising digital document archives from scanned and born-digital files: folder and naming conventions, descriptive metadata, preservation-grade formats, integrity verification, retention, backup, and retrieval. It treats a document as a record with a lifecycle and focuses on the durable problem of finding and trusting a file years after it was stored, grounded in real preservation and records-management standards.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "PDF/A (ISO 19005)",
        "type": "standard"
      },
      {
        "name": "OAIS Reference Model (ISO 14721)",
        "type": "standard"
      },
      {
        "name": "ISO 15489 Records Management",
        "type": "standard"
      },
      {
        "name": "Dublin Core",
        "type": "standard"
      },
      {
        "name": "PREMIS Preservation Metadata",
        "type": "standard"
      },
      {
        "name": "METS",
        "type": "standard"
      },
      {
        "name": "TIFF",
        "type": "format"
      },
      {
        "name": "JPEG 2000",
        "type": "format"
      },
      {
        "name": "PDF",
        "type": "format"
      },
      {
        "name": "Exif",
        "type": "standard"
      },
      {
        "name": "XMP",
        "type": "standard"
      },
      {
        "name": "SHA-256 checksum",
        "type": "technology"
      },
      {
        "name": "Optical Character Recognition",
        "type": "technology"
      },
      {
        "name": "Full-text search",
        "type": "concept"
      },
      {
        "name": "ISO (International Organization for Standardization)",
        "type": "organization"
      },
      {
        "name": "Library of Congress",
        "type": "organization"
      },
      {
        "name": "Digital Preservation Coalition",
        "type": "organization"
      },
      {
        "name": "Metadata",
        "type": "concept"
      },
      {
        "name": "Retention schedule",
        "type": "concept"
      },
      {
        "name": "Microfilm",
        "type": "technology"
      }
    ],
    "livePages": 3,
    "capacity": {
      "conservative": 26,
      "ambitious": 42
    },
    "planned": [
      {
        "slug": "organizing-scanned-documents",
        "title": "Organising Scanned Documents Into an Archive",
        "section": "workflows",
        "angle": "How to turn a pile of loose scans into a structured, findable archive by deciding on capture, naming, and grouping before volume grows."
      },
      {
        "slug": "file-naming-conventions-for-documents",
        "title": "File Naming Conventions for Document Archives",
        "section": "workflows",
        "angle": "Durable, sortable naming schemes (dates in ISO order, consistent separators, avoiding fragile characters) and why the name is the cheapest form of metadata."
      },
      {
        "slug": "document-metadata-explained",
        "title": "Document Metadata Explained",
        "section": "workflows",
        "angle": "What descriptive, structural, and administrative metadata are, why retrieval depends on them, and how standards like Dublin Core frame the fields to record."
      },
      {
        "slug": "building-a-personal-document-archive",
        "title": "Building a Personal Document Archive",
        "section": "workflows",
        "angle": "An end-to-end lifecycle workflow — capture, name, index, store, back up, retrieve — scaled down from enterprise records management to one person's files."
      },
      {
        "slug": "file-formats-for-long-term-archiving",
        "title": "Choosing File Formats for Long-Term Archiving",
        "section": "workflows",
        "angle": "Why format longevity matters and how open, well-specified formats (PDF/A, TIFF, JPEG 2000) are favoured over proprietary or lossy ones for preservation."
      },
      {
        "slug": "document-retention-basics",
        "title": "Document Retention Basics",
        "section": "workflows",
        "angle": "What a retention schedule is, why keeping everything forever is itself a risk, and how deliberate disposal is part of managing an archive."
      },
      {
        "slug": "backing-up-a-document-archive",
        "title": "Backing Up a Document Archive",
        "section": "workflows",
        "angle": "Applying the 3-2-1 backup principle to an archive and why an unbacked-up single copy is not really an archive."
      },
      {
        "slug": "searching-a-document-archive",
        "title": "Searching a Document Archive",
        "section": "workflows",
        "angle": "How retrieval actually works — folder browsing, metadata filtering, and full-text search over OCR'd text — and how each depends on earlier indexing choices."
      },
      {
        "slug": "deduplicating-scanned-documents",
        "title": "Finding and Removing Duplicate Documents",
        "section": "workflows",
        "angle": "Why archives accumulate duplicates, how exact-copy detection via checksums differs from near-duplicate detection, and when to keep versus merge."
      },
      {
        "slug": "folder-structures-for-document-archives",
        "title": "Designing Folder Structures for Archives",
        "section": "workflows",
        "angle": "Trade-offs between deep hierarchies and flat structures, and designing a taxonomy that survives growth and staff turnover."
      },
      {
        "slug": "tags-versus-folders-for-documents",
        "title": "Tags Versus Folders for Organising Documents",
        "section": "workflows",
        "angle": "The single-location constraint of folders versus the many-facets model of tags, and how the two coexist in real archives."
      },
      {
        "slug": "verifying-archive-integrity-with-checksums",
        "title": "Verifying Archive Integrity With Checksums",
        "section": "workflows",
        "angle": "How cryptographic hashes like SHA-256 detect silent file corruption and let you prove a stored document is unchanged."
      },
      {
        "slug": "migrating-a-paper-archive-to-digital",
        "title": "Migrating a Paper Archive to Digital",
        "section": "workflows",
        "angle": "Planning a bulk digitisation project — capture standards, OCR, quality control, and metadata capture — before scanning at scale."
      },
      {
        "slug": "version-control-for-documents",
        "title": "Version Control for Documents",
        "section": "workflows",
        "angle": "Keeping track of document revisions without a code-style VCS: naming, superseding, and recording which version is authoritative."
      },
      {
        "slug": "preparing-documents-for-long-term-storage",
        "title": "Preparing Documents for Long-Term Storage",
        "section": "workflows",
        "angle": "Normalising formats, embedding metadata, bundling with checksums (BagIt-style), and documenting an archive so it remains usable decades later."
      },
      {
        "slug": "history-of-digital-document-archiving",
        "title": "A History of Digital Document Archiving",
        "section": "history",
        "angle": "How document storage moved from filing cabinets through microfilm to networked digital repositories and the retrieval problems each shift created."
      },
      {
        "slug": "microfilm-to-digital-preservation",
        "title": "From Microfilm to Digital Preservation",
        "section": "history",
        "angle": "Why microfilm defined 20th-century preservation, what digitisation gained and risked, and how the field learned formats can obsolesce faster than film."
      },
      {
        "slug": "history-of-metadata-standards",
        "title": "A History of Metadata Standards",
        "section": "history",
        "angle": "The development of descriptive cataloguing into modern standards like Dublin Core, and why shared metadata vocabularies make archives interoperable."
      },
      {
        "slug": "origins-of-the-oais-model",
        "title": "The Origins of the OAIS Reference Model",
        "section": "history",
        "angle": "How the Open Archival Information System model (ISO 14721) formalised what it means to preserve digital objects over the long term."
      }
    ],
    "crossLinks": [
      "document-workflows",
      "scanning",
      "ocr",
      "business-workflows"
    ],
    "imageNeeds": [
      "Public-domain photographs of microfilm and microfiche readers and cabinets",
      "Public-domain images of card catalogues and library indexing systems",
      "Historical public-domain photographs of paper filing rooms and records archives",
      "Public-domain diagrams of the OAIS reference model (from openly licensed standards summaries)",
      "Public-domain or self-made schematic diagrams of a document lifecycle (capture to disposal)",
      "Self-made SVG diagrams of folder-hierarchy versus tag/facet organisation",
      "Self-made SVG illustration of checksum verification detecting a changed file"
    ]
  },
  {
    "id": "government-document-systems",
    "label": "Government Document Systems",
    "primarySection": "workflows",
    "secondarySections": [
      "history",
      "glossary"
    ],
    "description": "An editorial cluster covering how official and public-sector documents are created, digitized, described, preserved, signed, and released — records management, forms, scanning and imaging standards, metadata, retention, redaction, and long-term digital preservation. Coverage is factual and vendor-neutral, grounded in recognized standards bodies and archival practice, with no jurisdiction-specific legal claims or advice.",
    "appAnchor": null,
    "status": "planned",
    "entities": [
      {
        "name": "Records management",
        "type": "concept"
      },
      {
        "name": "ISO 15489",
        "type": "standard"
      },
      {
        "name": "OAIS reference model (ISO 14721)",
        "type": "standard"
      },
      {
        "name": "PDF/A (ISO 19005)",
        "type": "format"
      },
      {
        "name": "PDF/UA (ISO 14289)",
        "type": "standard"
      },
      {
        "name": "PDF (ISO 32000)",
        "type": "format"
      },
      {
        "name": "FADGI",
        "type": "organization"
      },
      {
        "name": "National Archives (NARA)",
        "type": "organization"
      },
      {
        "name": "Dublin Core",
        "type": "standard"
      },
      {
        "name": "MoReq",
        "type": "standard"
      },
      {
        "name": "Records retention schedule",
        "type": "concept"
      },
      {
        "name": "Digitization",
        "type": "concept"
      },
      {
        "name": "Microfilm",
        "type": "technology"
      },
      {
        "name": "Optical character recognition",
        "type": "technology"
      },
      {
        "name": "Redaction",
        "type": "concept"
      },
      {
        "name": "Metadata",
        "type": "concept"
      },
      {
        "name": "PAdES",
        "type": "standard"
      },
      {
        "name": "eIDAS",
        "type": "standard"
      },
      {
        "name": "Section 508",
        "type": "standard"
      },
      {
        "name": "TIFF",
        "type": "format"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "government-records-digitization-workflow",
        "title": "How Government Records Are Digitized: A Workflow Overview",
        "section": "workflows",
        "angle": "End-to-end path from paper files to indexed digital records, framed around preparation, capture, QC, and ingest."
      },
      {
        "slug": "records-retention-schedule-basics",
        "title": "What a Records Retention Schedule Is and How It Works",
        "section": "workflows",
        "angle": "Explains retention scheduling as a records-management concept without citing any jurisdiction's legal periods."
      },
      {
        "slug": "redaction-workflows-for-public-records",
        "title": "Redaction Workflows for Public Records",
        "section": "workflows",
        "angle": "How sensitive information is permanently removed before release, and why flattening matters vs. visual masking."
      },
      {
        "slug": "archival-scanning-standards-explained",
        "title": "Archival Scanning Standards Explained (FADGI and Imaging Guidelines)",
        "section": "workflows",
        "angle": "Neutral overview of imaging guidelines for resolution, color targets, and file formats in cultural/records digitization."
      },
      {
        "slug": "metadata-for-document-management",
        "title": "Metadata for Document and Records Management",
        "section": "workflows",
        "angle": "Descriptive, administrative, and preservation metadata; role of schemas like Dublin Core."
      },
      {
        "slug": "converting-paper-forms-to-fillable-pdf",
        "title": "Converting Paper Forms to Fillable PDF Forms",
        "section": "workflows",
        "angle": "Form field design, tab order, and validation when moving official forms to digital fillable format."
      },
      {
        "slug": "batch-ocr-for-scanned-archives",
        "title": "Batch OCR for Scanned Archives",
        "section": "workflows",
        "angle": "Making large scanned collections searchable; accuracy factors and text-layer handling."
      },
      {
        "slug": "long-term-digital-preservation-basics",
        "title": "Long-Term Digital Preservation Basics (PDF/A and OAIS)",
        "section": "workflows",
        "angle": "Why preservation formats and the OAIS model exist; format migration and fixity concepts."
      },
      {
        "slug": "accessible-government-documents",
        "title": "Making Government Documents Accessible (PDF/UA and Section 508)",
        "section": "workflows",
        "angle": "Tagged PDF, reading order, and accessibility conformance concepts for official documents."
      },
      {
        "slug": "digital-signatures-on-official-documents",
        "title": "Digital Signatures on Official Documents",
        "section": "workflows",
        "angle": "Standards-first look at digital vs. electronic signatures, PAdES, and eIDAS trust concepts, no legal advice."
      },
      {
        "slug": "document-indexing-and-barcode-tagging",
        "title": "Document Indexing and Barcode Tagging in Records Systems",
        "section": "workflows",
        "angle": "How index fields and barcodes route and retrieve documents in high-volume capture."
      },
      {
        "slug": "quality-control-in-document-digitization",
        "title": "Quality Control in Document Digitization",
        "section": "workflows",
        "angle": "Inspection points, rescans, image quality metrics, and completeness checks."
      },
      {
        "slug": "high-volume-document-scanning-workflows",
        "title": "High-Volume Document Scanning Workflows",
        "section": "workflows",
        "angle": "Production scanning with document feeders, batching, separator sheets, and throughput considerations."
      },
      {
        "slug": "version-control-in-records-management",
        "title": "Version Control and Recordkeeping for Official Documents",
        "section": "workflows",
        "angle": "How authoritative versions and audit trails are maintained in electronic records systems."
      },
      {
        "slug": "history-of-government-records-management",
        "title": "A History of Government Records Management",
        "section": "history",
        "angle": "From registries and ledgers to electronic recordkeeping; durable milestones only."
      },
      {
        "slug": "microfilm-in-government-archives",
        "title": "Microfilm and Microfiche in Government Archives",
        "section": "history",
        "angle": "Why microforms were adopted for preservation and space savings, and how they are read."
      },
      {
        "slug": "history-of-official-forms",
        "title": "The History of Official and Administrative Forms",
        "section": "history",
        "angle": "Evolution of standardized forms and carbon/multipart forms in bureaucratic workflows."
      },
      {
        "slug": "what-is-records-management",
        "title": "What Is Records Management?",
        "section": "glossary",
        "angle": "Concise definition of the discipline, lifecycle, and key terms."
      },
      {
        "slug": "what-is-redaction",
        "title": "What Is Redaction?",
        "section": "glossary",
        "angle": "Definition of redaction and the difference between true removal and visual obscuring."
      }
    ],
    "crossLinks": [
      "scanning",
      "ocr",
      "document-workflows",
      "business-workflows"
    ],
    "imageNeeds": [
      "Public-domain historical photographs of government registry/record rooms and filing systems",
      "Public-domain images of microfilm/microfiche readers and reels",
      "Public-domain scans of vintage standardized/multipart administrative forms",
      "Public-domain photos of production document scanners with feeders",
      "Public-domain archival storage (record boxes, shelving) imagery",
      "Original neutral SVG diagrams (digitization pipeline, OAIS ingest/access flow, retention lifecycle) authored in-house"
    ]
  },
  {
    "id": "pdf-ecosystem",
    "label": "PDF Ecosystem",
    "primarySection": "tools",
    "secondarySections": [
      "guides",
      "workflows"
    ],
    "description": "An encyclopedic reference on the Portable Document Format: its origins and relationship to PostScript, the ISO standards family (ISO 32000, PDF/A, PDF/X, PDF/UA), and the core technical concepts users encounter — text vs. image PDFs, OCR, compression, fonts and embedding, digital signatures, annotations, forms, metadata, encryption, and common conversion and editing workflows. Content is vendor-neutral and standards-first, explaining durable format mechanics rather than product features.",
    "appAnchor": "pdf-editor",
    "status": "expand",
    "entities": [
      {
        "name": "Portable Document Format",
        "type": "format"
      },
      {
        "name": "ISO 32000",
        "type": "standard"
      },
      {
        "name": "PDF/A",
        "type": "standard"
      },
      {
        "name": "PDF/X",
        "type": "standard"
      },
      {
        "name": "PDF/UA",
        "type": "standard"
      },
      {
        "name": "PostScript",
        "type": "technology"
      },
      {
        "name": "Adobe Systems",
        "type": "organization"
      },
      {
        "name": "International Organization for Standardization",
        "type": "organization"
      },
      {
        "name": "Optical Character Recognition",
        "type": "technology"
      },
      {
        "name": "XMP",
        "type": "standard"
      },
      {
        "name": "AcroForm",
        "type": "technology"
      },
      {
        "name": "XFA",
        "type": "format"
      },
      {
        "name": "Tagged PDF",
        "type": "concept"
      },
      {
        "name": "Digital signature",
        "type": "concept"
      },
      {
        "name": "Public key cryptography",
        "type": "technology"
      },
      {
        "name": "Linearized PDF",
        "type": "concept"
      },
      {
        "name": "Encapsulated PostScript",
        "type": "format"
      },
      {
        "name": "TrueType",
        "type": "format"
      },
      {
        "name": "OpenType",
        "type": "format"
      },
      {
        "name": "JPEG",
        "type": "format"
      }
    ],
    "livePages": 6,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "iso-32000-pdf-standard",
        "title": "ISO 32000: How PDF Became an Open Standard",
        "section": "tools",
        "angle": "Explains the transition of PDF from an Adobe specification to the ISO 32000 international standard and what that means for the format."
      },
      {
        "slug": "pdf-a-for-archiving",
        "title": "PDF/A Explained: Format for Long-Term Archiving",
        "section": "tools",
        "angle": "Describes the PDF/A conformance levels and the self-contained constraints (font embedding, no encryption) that make documents suitable for preservation."
      },
      {
        "slug": "pdf-x-for-print-production",
        "title": "PDF/X Explained: PDF for Print Production",
        "section": "tools",
        "angle": "Covers the PDF/X subset used in prepress and how it constrains color, fonts, and transparency for reliable printing."
      },
      {
        "slug": "pdf-ua-and-accessibility",
        "title": "PDF/UA and Accessible Documents",
        "section": "tools",
        "angle": "Explains the PDF/UA standard and how tagged structure relates to accessibility and WCAG principles."
      },
      {
        "slug": "searchable-pdf-vs-image-pdf",
        "title": "Searchable PDF vs. Image-Only PDF",
        "section": "tools",
        "angle": "Distinguishes scanned image PDFs from those with a text layer and how OCR bridges the two."
      },
      {
        "slug": "how-pdf-compression-works",
        "title": "How PDF Compression Works",
        "section": "tools",
        "angle": "Explains lossless and lossy compression in PDFs, including Deflate for text and JPEG/JBIG2 for images."
      },
      {
        "slug": "pdf-fonts-and-embedding",
        "title": "How Fonts Work in PDF Files",
        "section": "tools",
        "angle": "Explains font embedding, subsetting, and substitution and why embedding matters for consistent rendering."
      },
      {
        "slug": "pdf-digital-signatures-explained",
        "title": "How Digital Signatures Work in PDF",
        "section": "tools",
        "angle": "Describes cryptographic digital signatures in PDF and how they support integrity and authenticity, distinct from an image of a signature."
      },
      {
        "slug": "pdf-annotations-explained",
        "title": "Understanding PDF Annotations",
        "section": "tools",
        "angle": "Explains the annotation layer — comments, highlights, stamps — as objects stored separately from page content."
      },
      {
        "slug": "pdf-forms-acroform-vs-xfa",
        "title": "PDF Forms: AcroForm vs. XFA",
        "section": "tools",
        "angle": "Compares the two form technologies in PDF and their differing support and structure."
      },
      {
        "slug": "pdf-metadata-and-xmp",
        "title": "PDF Metadata and the XMP Standard",
        "section": "tools",
        "angle": "Explains document information dictionaries and XMP metadata and how they describe a PDF's properties."
      },
      {
        "slug": "pdf-encryption-and-permissions",
        "title": "PDF Encryption and Permission Settings",
        "section": "tools",
        "angle": "Explains password protection, encryption, and permission flags and their practical limits."
      },
      {
        "slug": "tagged-pdf-explained",
        "title": "What Is a Tagged PDF?",
        "section": "tools",
        "angle": "Explains the logical structure tree that makes PDF content reflowable and accessible."
      },
      {
        "slug": "linearized-pdf-fast-web-view",
        "title": "Linearized PDF and Fast Web View",
        "section": "tools",
        "angle": "Explains how linearization reorders a PDF so the first page displays before the whole file downloads."
      },
      {
        "slug": "pdf-vs-postscript",
        "title": "PDF vs. PostScript: How They Relate",
        "section": "tools",
        "angle": "Traces PDF's origins in PostScript and contrasts a programming language for printers with a fixed page-description format."
      },
      {
        "slug": "raster-vs-vector-content-in-pdf",
        "title": "Raster vs. Vector Content Inside a PDF",
        "section": "guides",
        "angle": "Explains how a single PDF can hold vector paths, text, and raster images and why that affects quality and size."
      },
      {
        "slug": "reduce-pdf-file-size",
        "title": "How to Reduce PDF File Size",
        "section": "workflows",
        "angle": "Walks through the levers that affect PDF size — image downsampling, compression choice, font subsetting — without product-specific claims."
      },
      {
        "slug": "combine-and-split-pdf-files",
        "title": "Combining and Splitting PDF Documents",
        "section": "workflows",
        "angle": "Explains page-level operations to merge or split PDFs and how the page tree is affected."
      },
      {
        "slug": "convert-documents-to-pdf",
        "title": "Converting Documents to PDF",
        "section": "workflows",
        "angle": "Explains the general conversion path from word processors and images into PDF and what is preserved."
      },
      {
        "slug": "redact-information-in-pdf",
        "title": "How PDF Redaction Works",
        "section": "workflows",
        "angle": "Explains true redaction that removes underlying content versus merely drawing black boxes over it."
      }
    ],
    "crossLinks": [
      "document-workflows",
      "printing-history",
      "archives-compression",
      "printing-standards"
    ],
    "imageNeeds": [
      "Public-domain or self-made diagrams of the PDF document object model (page tree, objects, xref table)",
      "Original schematic illustrating the OCR pipeline stages",
      "Self-authored diagram contrasting raster vs. vector rendering of the same glyph",
      "Conceptual diagram of a PDF digital signature / public-key flow",
      "Timeline graphic of PDF and PostScript milestones using only well-established, verifiable dates",
      "Diagram of PDF/A self-containment constraints (embedded fonts, no external dependencies)"
    ]
  },
  {
    "id": "archives-compression",
    "label": "Archives & Compression (ZIP/RAR)",
    "primarySection": "tools",
    "secondarySections": [
      "guides",
      "workflows"
    ],
    "description": "An encyclopedic reference on archive file formats (ZIP, RAR, 7z, TAR, gzip) and the lossless data-compression concepts behind them, covering how the formats and algorithms work, their history, and practical use for backup and file transfer. Vendor-neutral and standards-first, grounded in public specifications rather than product marketing.",
    "appAnchor": "zip-rar",
    "status": "planned",
    "entities": [
      {
        "name": "ZIP",
        "type": "format"
      },
      {
        "name": "RAR",
        "type": "format"
      },
      {
        "name": "7z",
        "type": "format"
      },
      {
        "name": "TAR",
        "type": "format"
      },
      {
        "name": "gzip",
        "type": "format"
      },
      {
        "name": "bzip2",
        "type": "format"
      },
      {
        "name": "DEFLATE",
        "type": "standard"
      },
      {
        "name": "LZ77",
        "type": "concept"
      },
      {
        "name": "Huffman coding",
        "type": "concept"
      },
      {
        "name": "LZMA",
        "type": "concept"
      },
      {
        "name": "Zstandard",
        "type": "format"
      },
      {
        "name": "Brotli",
        "type": "format"
      },
      {
        "name": "CRC-32",
        "type": "concept"
      },
      {
        "name": "PKWARE APPNOTE",
        "type": "standard"
      },
      {
        "name": "RFC 1951 (DEFLATE)",
        "type": "standard"
      },
      {
        "name": "RFC 1952 (gzip)",
        "type": "standard"
      },
      {
        "name": "ISO/IEC 21320-1",
        "type": "standard"
      },
      {
        "name": "PKZIP",
        "type": "product"
      },
      {
        "name": "Info-ZIP",
        "type": "organization"
      },
      {
        "name": "7-Zip",
        "type": "product"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 26,
      "ambitious": 44
    },
    "planned": [
      {
        "slug": "what-is-a-zip-file",
        "title": "What Is a ZIP File?",
        "section": "tools",
        "angle": "Defines the ZIP container format, what it stores, and how it bundles plus compresses multiple files into one archive."
      },
      {
        "slug": "what-is-a-rar-file",
        "title": "What Is a RAR File?",
        "section": "tools",
        "angle": "Explains the proprietary RAR archive format, its typical uses, and why it needs specific software to create and open."
      },
      {
        "slug": "what-is-the-7z-format",
        "title": "What Is the 7z Format?",
        "section": "tools",
        "angle": "Describes the open 7z format and its association with the 7-Zip tool, including its use of LZMA-family compression."
      },
      {
        "slug": "what-is-a-tar-archive",
        "title": "What Is a TAR Archive?",
        "section": "tools",
        "angle": "Explains TAR as a Unix bundling format that stores files without compressing, and why it is paired with gzip or bzip2."
      },
      {
        "slug": "what-is-gzip",
        "title": "What Is gzip?",
        "section": "tools",
        "angle": "Covers the gzip format and its DEFLATE-based single-stream compression as defined in RFC 1952."
      },
      {
        "slug": "what-is-file-compression",
        "title": "What Is File Compression?",
        "section": "tools",
        "angle": "Foundational explainer distinguishing archiving from compression and introducing lossless data reduction."
      },
      {
        "slug": "lossless-vs-lossy-compression",
        "title": "Lossless vs. Lossy Compression",
        "section": "tools",
        "angle": "Contrasts the two families of compression and explains why archive formats are strictly lossless."
      },
      {
        "slug": "how-deflate-compression-works",
        "title": "How DEFLATE Compression Works",
        "section": "tools",
        "angle": "Explains the DEFLATE algorithm (RFC 1951) as the combination of LZ77 dictionary matching and Huffman coding."
      },
      {
        "slug": "lz77-and-dictionary-compression",
        "title": "LZ77 and Dictionary-Based Compression",
        "section": "tools",
        "angle": "Describes how sliding-window dictionary methods replace repeated byte sequences with back-references."
      },
      {
        "slug": "huffman-coding-explained",
        "title": "Huffman Coding Explained",
        "section": "tools",
        "angle": "Introduces entropy coding and how variable-length codes shorten frequently occurring symbols."
      },
      {
        "slug": "history-of-the-zip-format",
        "title": "The History of the ZIP Format",
        "section": "guides",
        "angle": "Traces ZIP from PKWARE's PKZIP and the public APPNOTE specification to its role as a universal container."
      },
      {
        "slug": "zip-vs-rar",
        "title": "ZIP vs. RAR: How the Formats Differ",
        "section": "tools",
        "angle": "Vendor-neutral comparison of open ZIP versus proprietary RAR across openness, tooling, and features like solid archives."
      },
      {
        "slug": "understanding-compression-ratios",
        "title": "Understanding Compression Ratios",
        "section": "tools",
        "angle": "Explains what a compression ratio measures and why results depend heavily on the input data's redundancy."
      },
      {
        "slug": "what-is-a-checksum",
        "title": "What Is a Checksum?",
        "section": "tools",
        "angle": "Explains CRC-32 and integrity checks stored in archives to detect corruption during storage or transfer."
      },
      {
        "slug": "how-zip-encryption-works",
        "title": "How ZIP Encryption Works",
        "section": "tools",
        "angle": "Describes legacy ZipCrypto versus AES-based encryption for password-protected ZIP archives, at a conceptual level."
      },
      {
        "slug": "what-is-a-solid-archive",
        "title": "What Is a Solid Archive?",
        "section": "tools",
        "angle": "Explains solid compression in RAR and 7z, where files are treated as one stream to improve ratio, with its trade-offs."
      },
      {
        "slug": "self-extracting-archives-explained",
        "title": "Self-Extracting Archives Explained",
        "section": "tools",
        "angle": "Describes SFX archives that bundle an extractor executable, and the portability and safety considerations involved."
      },
      {
        "slug": "multi-volume-and-split-archives",
        "title": "Multi-Volume and Split Archives",
        "section": "tools",
        "angle": "Explains splitting large archives into numbered volumes for size-limited media or transfer, and how they rejoin."
      },
      {
        "slug": "tar-gz-and-tarballs-explained",
        "title": "tar.gz and Tarballs Explained",
        "section": "tools",
        "angle": "Explains the common tar.gz/tgz combination of TAR bundling plus gzip compression widely used on Unix systems."
      },
      {
        "slug": "what-is-zstandard",
        "title": "What Is Zstandard (zstd)?",
        "section": "tools",
        "angle": "Introduces the modern zstd lossless algorithm, its dictionary approach, and where it fits among older formats."
      },
      {
        "slug": "compressing-files-for-email-and-transfer",
        "title": "Compressing Files for Email and Transfer",
        "section": "workflows",
        "angle": "Practical, tool-neutral workflow for archiving multiple files to share, with notes on size limits and integrity."
      },
      {
        "slug": "using-archives-for-backups",
        "title": "Using Archives for Backups",
        "section": "workflows",
        "angle": "Explains how archive formats support backup by consolidating files, preserving structure, and verifying integrity."
      },
      {
        "slug": "what-is-bzip2",
        "title": "What Is bzip2?",
        "section": "tools",
        "angle": "Covers bzip2's Burrows-Wheeler-transform approach and how it differs from DEFLATE-based gzip."
      },
      {
        "slug": "archive-formats-compared",
        "title": "Common Archive Formats Compared",
        "section": "tools",
        "angle": "Overview page mapping ZIP, RAR, 7z, TAR, and gzip by openness, compression method, and typical platform."
      }
    ],
    "crossLinks": [
      "document-workflows",
      "mobile-printing",
      "pdf-ecosystem",
      "printing-standards"
    ],
    "imageNeeds": [
      "Original diagrams (site-authored) illustrating LZ77 sliding-window matching and back-references",
      "Original diagrams of a Huffman tree and variable-length code assignment",
      "Original schematic of a ZIP file's internal layout (local headers, central directory, end record)",
      "Public-domain photographs of legacy storage/transfer media for historical context: floppy disks, magnetic tape reels, CD-ROMs",
      "Original comparison table graphics for archive formats and compression methods",
      "Original flow diagram showing TAR bundling followed by gzip compression (tar.gz pipeline)"
    ]
  },
  {
    "id": "printing-standards",
    "label": "Printing & Document Standards",
    "primarySection": "tools",
    "secondarySections": [
      "glossary"
    ],
    "description": "A standards-first reference cluster explaining the durable specifications that govern printing, imaging, color, and document exchange — the printing protocols (IPP, PWG Raster), page-description languages (PostScript, PCL), paper-size and color standards (ISO 216, ICC, sRGB, CMYK), and archival/exchange document formats (PDF/A, PDF/X, PDF/UA, TIFF, XPS). Each page describes what a published standard defines and how it fits into printing workflows, citing the responsible standards body, without inventing figures, dates, or performance claims.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "ISO 216",
        "type": "standard"
      },
      {
        "name": "International Color Consortium (ICC)",
        "type": "organization"
      },
      {
        "name": "PDF/A",
        "type": "format"
      },
      {
        "name": "PostScript",
        "type": "technology"
      },
      {
        "name": "Printer Command Language (PCL)",
        "type": "technology"
      },
      {
        "name": "ISO 32000",
        "type": "standard"
      },
      {
        "name": "Adobe",
        "type": "brand"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "sRGB",
        "type": "standard"
      },
      {
        "name": "CMYK",
        "type": "concept"
      },
      {
        "name": "PDF/X",
        "type": "format"
      },
      {
        "name": "PDF/UA",
        "type": "format"
      },
      {
        "name": "XML Paper Specification (XPS)",
        "type": "format"
      },
      {
        "name": "TIFF",
        "type": "format"
      },
      {
        "name": "ITU-T",
        "type": "organization"
      },
      {
        "name": "PWG Raster",
        "type": "format"
      },
      {
        "name": "Mopria Alliance",
        "type": "organization"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      }
    ],
    "livePages": 26,
    "capacity": {
      "conservative": 24,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "what-is-the-printer-working-group",
        "title": "What Is the Printer Working Group (PWG)?",
        "section": "tools",
        "angle": "Describes the IEEE-ISTO PWG as the body that standardizes IPP, PWG Raster, and driverless printing."
      },
      {
        "slug": "iso-216-international-paper-sizes",
        "title": "ISO 216 and the International Paper Size System",
        "section": "tools",
        "angle": "Explains the A/B series, the aspect-ratio principle behind A4/A3, and how the standard defines dimensions."
      },
      {
        "slug": "ansi-and-north-american-paper-sizes",
        "title": "ANSI and North American Paper Sizes",
        "section": "tools",
        "angle": "Explains Letter, Legal, Tabloid and the ANSI size series alongside ISO 216 for context."
      },
      {
        "slug": "icc-color-profiles-explained",
        "title": "ICC Color Profiles Explained",
        "section": "tools",
        "angle": "Describes what the International Color Consortium profile format defines for consistent color reproduction."
      },
      {
        "slug": "what-is-pdf-a-for-archiving",
        "title": "What Is PDF/A (the Archival PDF Standard)?",
        "section": "tools",
        "angle": "Explains the ISO 19005 archival subset of PDF and why it embeds fonts and forbids external dependencies."
      },
      {
        "slug": "what-is-pdf-x-for-print-production",
        "title": "What Is PDF/X for Print Production?",
        "section": "tools",
        "angle": "Explains the ISO 15930 print-production PDF subset and its color and font requirements."
      },
      {
        "slug": "what-is-pdf-ua-accessible-documents",
        "title": "What Is PDF/UA (Accessible PDF)?",
        "section": "tools",
        "angle": "Explains the ISO 14289 accessibility standard for tagged, screen-reader-navigable PDFs."
      },
      {
        "slug": "iso-32000-the-pdf-standard",
        "title": "ISO 32000: The PDF File Format Standard",
        "section": "tools",
        "angle": "Explains how PDF became an open ISO standard and what ISO 32000 governs."
      },
      {
        "slug": "postscript-language-specification",
        "title": "The PostScript Language Specification",
        "section": "tools",
        "angle": "Describes PostScript as a page-description language and its device-independent imaging model."
      },
      {
        "slug": "ipp-everywhere-driverless-printing",
        "title": "IPP Everywhere and Driverless Printing",
        "section": "tools",
        "angle": "Explains the PWG certification that lets devices print without vendor-specific drivers."
      },
      {
        "slug": "what-is-pwg-raster-format",
        "title": "What Is PWG Raster Format?",
        "section": "tools",
        "angle": "Explains the standardized raster stream used by IPP Everywhere and AirPrint-class printing."
      },
      {
        "slug": "cmyk-vs-rgb-color-models",
        "title": "CMYK vs RGB Color Models",
        "section": "tools",
        "angle": "Explains additive vs subtractive color and why print uses CMYK while screens use RGB."
      },
      {
        "slug": "what-is-the-srgb-color-space",
        "title": "What Is the sRGB Color Space?",
        "section": "tools",
        "angle": "Explains the IEC 61966-2-1 standard color space and its role as a default for documents."
      },
      {
        "slug": "tiff-file-format-explained",
        "title": "The TIFF File Format Explained",
        "section": "tools",
        "angle": "Explains the Tagged Image File Format, its use in scanning and archiving, and its container design."
      },
      {
        "slug": "what-is-xps-xml-paper-specification",
        "title": "What Is XPS (XML Paper Specification)?",
        "section": "tools",
        "angle": "Explains the fixed-layout document format and its role as an alternative print path on Windows."
      },
      {
        "slug": "what-is-the-mopria-print-standard",
        "title": "What Is the Mopria Print Standard?",
        "section": "tools",
        "angle": "Explains the Mopria Alliance specification for mobile printing interoperability."
      },
      {
        "slug": "snmp-and-printer-management",
        "title": "SNMP and Standardized Printer Management",
        "section": "tools",
        "angle": "Explains how the SNMP Printer MIB provides standardized status and supply monitoring."
      },
      {
        "slug": "what-is-jdf-job-definition-format",
        "title": "What Is JDF (Job Definition Format)?",
        "section": "tools",
        "angle": "Explains the XML-based job-ticket standard used to describe print production workflows."
      },
      {
        "slug": "iso-12647-print-process-control",
        "title": "ISO 12647 and Print Process Control",
        "section": "tools",
        "angle": "Explains the standard governing color separation, proofing, and print production consistency."
      },
      {
        "slug": "page-description-languages-explained",
        "title": "Page Description Languages Explained",
        "section": "glossary",
        "angle": "Defines the category (PDL) and contrasts PostScript, PCL, and PDF as members of it."
      },
      {
        "slug": "color-management-terms-glossary",
        "title": "Color Management Terms: A Standards Glossary",
        "section": "glossary",
        "angle": "Defines gamut, rendering intent, profile, and color space with reference to ICC terminology."
      }
    ],
    "crossLinks": [
      "printing-history",
      "pdf-ecosystem",
      "archives-compression",
      "file-formats"
    ],
    "imageNeeds": [
      "Public-domain diagram of the ISO 216 A-series halving/aspect-ratio geometry",
      "Public-domain CMYK vs RGB additive/subtractive color-model diagram",
      "Historical public-domain screenshots or scans of early PostScript output or the Apple LaserWriter era (verify licensing before use)",
      "Public-domain color-gamut / chromaticity diagram illustrating sRGB coverage",
      "Neutral schematic of the IPP/HTTP client-server print flow (original, no vendor logos)",
      "Public-domain sample of a color test chart or ICC target for illustrating profiling"
    ]
  },
  {
    "id": "file-formats",
    "label": "Document & Image File Formats",
    "primarySection": "tools",
    "secondarySections": [
      "glossary"
    ],
    "description": "An encyclopedic reference on the raster, vector, and document container file formats used in printing, scanning, and archiving — TIFF, PNG, JPEG, PostScript/EPS, XPS, and the PDF sub-standards — explaining how each format encodes pages and images and how format choice affects print fidelity and long-term preservation. Vendor-neutral and anchored to the published specifications and the standards bodies that maintain them.",
    "appAnchor": "pdf-editor",
    "status": "planned",
    "entities": [
      {
        "name": "TIFF",
        "type": "format"
      },
      {
        "name": "PNG",
        "type": "format"
      },
      {
        "name": "JPEG",
        "type": "format"
      },
      {
        "name": "JPEG 2000",
        "type": "format"
      },
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "Encapsulated PostScript (EPS)",
        "type": "format"
      },
      {
        "name": "XPS",
        "type": "format"
      },
      {
        "name": "PDF/A",
        "type": "standard"
      },
      {
        "name": "PDF/X",
        "type": "standard"
      },
      {
        "name": "WebP",
        "type": "format"
      },
      {
        "name": "BMP",
        "type": "format"
      },
      {
        "name": "ICC profile",
        "type": "standard"
      },
      {
        "name": "CMYK",
        "type": "concept"
      },
      {
        "name": "RGB",
        "type": "concept"
      },
      {
        "name": "CCITT Group 4 fax compression",
        "type": "standard"
      },
      {
        "name": "ISO 32000 (PDF)",
        "type": "standard"
      },
      {
        "name": "ISO 19005 (PDF/A)",
        "type": "standard"
      },
      {
        "name": "Adobe",
        "type": "organization"
      },
      {
        "name": "ISO",
        "type": "organization"
      },
      {
        "name": "Joint Photographic Experts Group",
        "type": "organization"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 22,
      "ambitious": 34
    },
    "planned": [
      {
        "slug": "what-is-tiff",
        "title": "What Is TIFF? The Tagged Image File Format for Scanning and Archiving",
        "section": "tools",
        "angle": "Explains TIFF's tag-based structure, its role as a lossless scanning/archival format, and multi-page support"
      },
      {
        "slug": "what-is-png",
        "title": "What Is PNG? Lossless Raster Images and Transparency",
        "section": "tools",
        "angle": "PNG's lossless DEFLATE compression, alpha transparency, and why it suits line art and screenshots over photos"
      },
      {
        "slug": "what-is-jpeg",
        "title": "What Is JPEG? Lossy Photo Compression Explained",
        "section": "tools",
        "angle": "How JPEG's DCT-based lossy compression works and where quality artifacts come from in printed photos"
      },
      {
        "slug": "what-is-jpeg-2000",
        "title": "What Is JPEG 2000? Wavelet Compression for Documents",
        "section": "tools",
        "angle": "The wavelet-based successor to JPEG and its use in document imaging and archival contexts"
      },
      {
        "slug": "postscript-and-eps-files",
        "title": "PostScript and EPS Files Explained",
        "section": "tools",
        "angle": "The PostScript page-description language as a file format and how EPS packages a single graphic for placement"
      },
      {
        "slug": "what-is-xps",
        "title": "What Is XPS? The XML Paper Specification",
        "section": "tools",
        "angle": "Microsoft's fixed-layout document format, its ZIP/XML container, and how it compares to PDF for print"
      },
      {
        "slug": "what-is-pdf-x-for-prepress",
        "title": "What Is PDF/X? The Prepress Print Exchange Standard",
        "section": "tools",
        "angle": "How PDF/X standardizes files for reliable commercial printing, including color and font embedding rules"
      },
      {
        "slug": "jpeg-vs-png",
        "title": "JPEG vs PNG: Choosing Between Lossy and Lossless",
        "section": "tools",
        "angle": "When photographic lossy compression beats lossless line-art compression, with print implications"
      },
      {
        "slug": "tiff-vs-pdf-for-scanning",
        "title": "TIFF vs PDF for Scanned Documents",
        "section": "tools",
        "angle": "Trade-offs between raw image TIFF and searchable PDF output when digitizing paper"
      },
      {
        "slug": "raster-vs-vector-graphics",
        "title": "Raster vs Vector Graphics for Printing",
        "section": "glossary",
        "angle": "The fundamental difference between pixel-based and geometry-based formats and how each scales at print resolution"
      },
      {
        "slug": "cmyk-vs-rgb-color",
        "title": "CMYK vs RGB: Color Models in Files and Printing",
        "section": "glossary",
        "angle": "Why screens use additive RGB and presses use subtractive CMYK, and what conversion means for a file"
      },
      {
        "slug": "what-are-icc-color-profiles",
        "title": "What Are ICC Color Profiles?",
        "section": "glossary",
        "angle": "How ICC profiles describe device color spaces so files reproduce consistently across screen and print"
      },
      {
        "slug": "lossy-vs-lossless-compression",
        "title": "Lossy vs Lossless Image Compression",
        "section": "glossary",
        "angle": "The core distinction between discarding data and preserving it, and how it maps to common formats"
      },
      {
        "slug": "multipage-tiff-explained",
        "title": "Multi-Page TIFF Explained",
        "section": "tools",
        "angle": "How a single TIFF file stores many scanned pages and why archives favor it"
      },
      {
        "slug": "group-3-and-group-4-fax-compression",
        "title": "Group 3 and Group 4 Fax Compression",
        "section": "glossary",
        "angle": "The CCITT/ITU bilevel compression schemes behind fax and black-and-white document scanning"
      },
      {
        "slug": "what-is-webp",
        "title": "What Is WebP? Modern Web Image Format",
        "section": "tools",
        "angle": "WebP's lossy and lossless modes and its relevance (and limits) for document-oriented workflows"
      },
      {
        "slug": "what-is-bmp",
        "title": "What Is BMP? The Uncompressed Bitmap Format",
        "section": "tools",
        "angle": "The simple Windows bitmap format, why it is uncompressed, and where it still appears in printing"
      },
      {
        "slug": "image-resolution-and-file-format",
        "title": "How Resolution and File Format Affect Print Quality",
        "section": "glossary",
        "angle": "How pixel dimensions, DPI, and format compression jointly determine printed sharpness and file size"
      },
      {
        "slug": "choosing-a-file-format-for-scanned-documents",
        "title": "Choosing a File Format for Scanned Documents",
        "section": "tools",
        "angle": "A vendor-neutral decision guide across TIFF, PDF, PDF/A, and JPEG for different archiving goals"
      },
      {
        "slug": "file-format-containers-vs-codecs",
        "title": "File Containers vs Codecs in Document Formats",
        "section": "glossary",
        "angle": "Clarifies how a container format wraps encoded image data and why the distinction matters"
      },
      {
        "slug": "embedding-fonts-in-print-files",
        "title": "Embedding Fonts in Print and PDF Files",
        "section": "tools",
        "angle": "Why fonts must be embedded for faithful printing and how PostScript, PDF, and PDF/X handle it"
      }
    ],
    "crossLinks": [
      "pdf-ecosystem",
      "archives-compression",
      "printing-standards"
    ],
    "imageNeeds": [
      "Public-domain or self-made diagrams contrasting raster pixel grids vs vector paths",
      "CMYK vs RGB color-model diagrams (self-produced, no copyrighted swatches)",
      "Diagram of a multi-page TIFF / container-and-codec structure",
      "Historical public-domain material on the PostScript language and early Adobe specifications",
      "Self-produced illustration of JPEG compression artifacts (own sample image, no third-party photos)",
      "Public-domain reproductions of standards-body logos only where licensing permits (otherwise omit)"
    ]
  },
  {
    "id": "glossary-terms",
    "label": "Glossary",
    "primarySection": "glossary",
    "secondarySections": [],
    "description": "A vendor-neutral A-to-Z glossary of printing, scanning, and document-workflow terminology. Each entry is a concise, standards-anchored definition of one term (a color model, protocol, component, file concept, or measurement) with a short definition, a plain-language explanation, and seeAlso links into deeper guides, history, and other glossary entries.",
    "appAnchor": null,
    "status": "expand",
    "entities": [
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "ISO",
        "type": "organization"
      },
      {
        "name": "IEC",
        "type": "organization"
      },
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "Printer Command Language (PCL)",
        "type": "standard"
      },
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "Portable Document Format (PDF)",
        "type": "format"
      },
      {
        "name": "CUPS",
        "type": "technology"
      },
      {
        "name": "TWAIN",
        "type": "standard"
      },
      {
        "name": "Windows Image Acquisition (WIA)",
        "type": "standard"
      },
      {
        "name": "Mopria Alliance",
        "type": "organization"
      },
      {
        "name": "Wi-Fi Alliance",
        "type": "organization"
      },
      {
        "name": "Bonjour (mDNS)",
        "type": "protocol"
      },
      {
        "name": "SNMP",
        "type": "protocol"
      },
      {
        "name": "Raster Image Processor (RIP)",
        "type": "concept"
      },
      {
        "name": "Halftoning",
        "type": "concept"
      },
      {
        "name": "CMYK color model",
        "type": "concept"
      },
      {
        "name": "Automatic Document Feeder (ADF)",
        "type": "concept"
      },
      {
        "name": "Adobe Inc.",
        "type": "organization"
      }
    ],
    "livePages": 11,
    "capacity": {
      "conservative": 55,
      "ambitious": 110
    },
    "planned": [
      {
        "slug": "cmyk-color-model",
        "title": "CMYK Color Model",
        "section": "glossary",
        "angle": "Defines the subtractive cyan-magenta-yellow-key color model used in printing and why it differs from RGB screen color."
      },
      {
        "slug": "dithering",
        "title": "Dithering",
        "section": "glossary",
        "angle": "Defines error-diffusion and ordered dithering as techniques for approximating colors and shades with a limited palette of dots."
      },
      {
        "slug": "pcl-printer-command-language",
        "title": "PCL (Printer Command Language)",
        "section": "glossary",
        "angle": "Concise definition of HP's PCL page description language and its role as a widely supported print data format."
      },
      {
        "slug": "internet-printing-protocol",
        "title": "IPP (Internet Printing Protocol)",
        "section": "glossary",
        "angle": "Defines IPP as the IETF/PWG standard protocol for submitting and managing print jobs over IP networks."
      },
      {
        "slug": "ipp-everywhere",
        "title": "IPP Everywhere",
        "section": "glossary",
        "angle": "Defines the PWG's driverless-printing standard built on IPP and how it enables printing without vendor drivers."
      },
      {
        "slug": "mopria-print-service",
        "title": "Mopria Print Service",
        "section": "glossary",
        "angle": "Defines the Mopria Alliance standard for standardized mobile printing across compliant printers."
      },
      {
        "slug": "wi-fi-direct-printing",
        "title": "Wi-Fi Direct",
        "section": "glossary",
        "angle": "Defines the Wi-Fi Alliance peer-to-peer connection standard as applied to direct device-to-printer printing."
      },
      {
        "slug": "cups-common-unix-printing-system",
        "title": "CUPS (Common UNIX Printing System)",
        "section": "glossary",
        "angle": "Defines CUPS as the IPP-based printing system used on macOS and many Linux distributions."
      },
      {
        "slug": "automatic-document-feeder",
        "title": "Automatic Document Feeder (ADF)",
        "section": "glossary",
        "angle": "Defines the ADF as the mechanism that feeds multi-page originals into a scanner or copier automatically."
      },
      {
        "slug": "wia-windows-image-acquisition",
        "title": "WIA (Windows Image Acquisition)",
        "section": "glossary",
        "angle": "Defines Microsoft's WIA framework for communicating with scanners and cameras on Windows."
      },
      {
        "slug": "imaging-drum",
        "title": "Imaging Drum",
        "section": "glossary",
        "angle": "Defines the photosensitive drum and its role in the electrophotographic (laser) printing cycle."
      },
      {
        "slug": "print-head",
        "title": "Print Head",
        "section": "glossary",
        "angle": "Defines the print head as the component that deposits ink, and distinguishes fixed versus cartridge-integrated designs."
      },
      {
        "slug": "color-depth",
        "title": "Color Depth (Bit Depth)",
        "section": "glossary",
        "angle": "Defines bits-per-pixel color depth and how it governs the number of representable tones in scanned or printed images."
      },
      {
        "slug": "optical-resolution",
        "title": "Optical Resolution",
        "section": "glossary",
        "angle": "Defines a scanner's true optical (hardware) resolution and contrasts it with interpolated resolution."
      },
      {
        "slug": "gsm-paper-weight",
        "title": "GSM (Paper Weight / Grammage)",
        "section": "glossary",
        "angle": "Defines grams-per-square-metre grammage as the standardized measure of paper weight, referencing the ISO grammage standard."
      },
      {
        "slug": "multifunction-printer",
        "title": "Multifunction Printer (MFP)",
        "section": "glossary",
        "angle": "Defines the all-in-one device combining printing, scanning, copying, and often faxing in one unit."
      },
      {
        "slug": "collation",
        "title": "Collation",
        "section": "glossary",
        "angle": "Defines collated versus uncollated output when printing multiple copies of a multi-page document."
      },
      {
        "slug": "borderless-printing",
        "title": "Borderless Printing",
        "section": "glossary",
        "angle": "Defines edge-to-edge borderless printing and the overspray/margin trade-offs involved."
      },
      {
        "slug": "raw-port-9100-printing",
        "title": "Raw Printing (Port 9100)",
        "section": "glossary",
        "angle": "Defines raw TCP port 9100 socket printing and its relationship to the historic JetDirect approach."
      }
    ],
    "crossLinks": [
      "mobile-printing",
      "troubleshooting",
      "educational-guides"
    ],
    "imageNeeds": [
      "Self-made public-domain diagram of a halftone dot pattern approximating a gradient",
      "Self-made public-domain CMYK vs RGB color separation diagram",
      "Self-made public-domain cross-section diagram of the laser electrophotographic cycle (drum, fuser)",
      "Self-made public-domain schematic of an ADF paper path over a scanner glass",
      "Self-made public-domain diagram illustrating bit depth and representable tones"
    ]
  },
  {
    "id": "troubleshooting",
    "label": "Troubleshooting",
    "primarySection": "troubleshooting",
    "secondarySections": [
      "guides"
    ],
    "description": "Structured, methodical fixes for the most common printing, scanning, and print-subsystem problems, organized by symptom (print-quality defects, connectivity, queue/spooler failures) and by operating system (Windows, macOS, Linux). Each page explains likely causes and a stepwise diagnostic path grounded in durable, vendor-neutral behavior of the print pipeline rather than model-specific claims.",
    "appAnchor": "smart-printer",
    "status": "expand",
    "entities": [
      {
        "name": "Print Spooler",
        "type": "concept"
      },
      {
        "name": "CUPS",
        "type": "technology"
      },
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "Printer Command Language (PCL)",
        "type": "format"
      },
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "Raw TCP/IP Printing (Port 9100)",
        "type": "protocol"
      },
      {
        "name": "Line Printer Daemon (LPD/LPR)",
        "type": "protocol"
      },
      {
        "name": "AirPrint",
        "type": "technology"
      },
      {
        "name": "Mopria",
        "type": "standard"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "Fuser Unit",
        "type": "concept"
      },
      {
        "name": "Drum Unit",
        "type": "concept"
      },
      {
        "name": "Inkjet Printhead",
        "type": "concept"
      },
      {
        "name": "Toner",
        "type": "concept"
      },
      {
        "name": "Print Driver",
        "type": "concept"
      },
      {
        "name": "Windows",
        "type": "os"
      },
      {
        "name": "macOS",
        "type": "os"
      },
      {
        "name": "Linux",
        "type": "os"
      },
      {
        "name": "USB",
        "type": "standard"
      },
      {
        "name": "Print Queue",
        "type": "concept"
      }
    ],
    "livePages": 9,
    "capacity": {
      "conservative": 28,
      "ambitious": 46
    },
    "planned": [
      {
        "slug": "clear-print-queue-windows",
        "title": "How to Clear a Stuck Print Queue on Windows",
        "section": "troubleshooting",
        "angle": "Cancel stuck jobs and reset the queue by stopping the Print Spooler and clearing the PRINTERS folder."
      },
      {
        "slug": "clear-print-queue-mac",
        "title": "How to Clear a Stuck Print Queue on macOS",
        "section": "troubleshooting",
        "angle": "Remove stuck jobs, resume a paused printer, and reset the printing system on macOS."
      },
      {
        "slug": "restart-print-spooler-service",
        "title": "How to Restart the Print Spooler Service",
        "section": "troubleshooting",
        "angle": "Why the spooler stops responding and how to restart it via Services and the command line."
      },
      {
        "slug": "printer-printing-faded-pages",
        "title": "Why a Printer Prints Faded or Light Pages",
        "section": "troubleshooting",
        "angle": "Toner/ink level, density settings, economy mode, and printhead causes of faint output."
      },
      {
        "slug": "printer-printing-lines-or-streaks",
        "title": "Fixing Horizontal or Vertical Lines and Streaks in Prints",
        "section": "troubleshooting",
        "angle": "Distinguishing clogged nozzles, a dirty drum, and roller marks from the streak pattern."
      },
      {
        "slug": "printer-smudging-or-smearing",
        "title": "Why Prints Smudge or Smear",
        "section": "troubleshooting",
        "angle": "Fuser, wet ink, paper type, and handling causes of smeared laser and inkjet output."
      },
      {
        "slug": "clean-clogged-inkjet-printhead",
        "title": "How to Clean a Clogged Inkjet Printhead",
        "section": "troubleshooting",
        "angle": "Nozzle-check patterns and cleaning cycles for dried ink and missing colors."
      },
      {
        "slug": "printer-printing-wrong-colors",
        "title": "Why a Printer Prints the Wrong Colors",
        "section": "troubleshooting",
        "angle": "Empty cartridges, color-management settings, and clogged channels causing color casts."
      },
      {
        "slug": "printer-ghosting-repeated-images",
        "title": "Fixing Ghosting and Repeated Images on Laser Prints",
        "section": "troubleshooting",
        "angle": "Drum-circumference repeats and fuser issues that leave faint repeated images."
      },
      {
        "slug": "printer-grabbing-multiple-sheets",
        "title": "Why a Printer Pulls Multiple Sheets at Once",
        "section": "troubleshooting",
        "angle": "Separation-pad and pickup-roller wear, paper fanning, and humidity causes of multi-feed."
      },
      {
        "slug": "printer-wont-turn-on",
        "title": "What to Check When a Printer Will Not Turn On",
        "section": "troubleshooting",
        "angle": "Power supply, outlet, cable, and power-button diagnostics before assuming hardware failure."
      },
      {
        "slug": "usb-printer-not-recognized",
        "title": "Fixing a USB Printer That Is Not Recognized",
        "section": "troubleshooting",
        "angle": "Cable, port, hub, and device-enumeration checks for USB printers on Windows and macOS."
      },
      {
        "slug": "add-printer-by-ip-address",
        "title": "How to Add a Network Printer by IP Address",
        "section": "guides",
        "angle": "Manually creating a Raw (port 9100) or IPP/LPD port when auto-discovery fails."
      },
      {
        "slug": "scanner-produces-blank-scans",
        "title": "Why a Scanner Produces Blank Pages",
        "section": "troubleshooting",
        "angle": "Lamp, orientation, source selection, and driver causes of blank scan output."
      },
      {
        "slug": "scan-to-email-not-working",
        "title": "Fixing Scan-to-Email on a Multifunction Printer",
        "section": "troubleshooting",
        "angle": "SMTP server, port, authentication, and address-book configuration on MFP devices."
      },
      {
        "slug": "printer-prints-garbled-text",
        "title": "Why a Printer Prints Garbled or Random Characters",
        "section": "troubleshooting",
        "angle": "Wrong page-description language (PCL vs PostScript) and driver mismatches producing garbage output."
      },
      {
        "slug": "two-sided-printing-not-working",
        "title": "Fixing Two-Sided (Duplex) Printing That Will Not Work",
        "section": "troubleshooting",
        "angle": "Driver duplex settings, installable-options detection, and manual-duplex alternatives."
      },
      {
        "slug": "printer-not-printing-black-ink",
        "title": "Why a Printer Will Not Print Black",
        "section": "troubleshooting",
        "angle": "Depleted or clogged black channel, grayscale settings, and cartridge-recognition causes."
      }
    ],
    "crossLinks": [
      "mobile-printing",
      "glossary-terms",
      "educational-guides"
    ],
    "imageNeeds": [
      "Public-domain cross-section diagram of a laser printer showing drum, fuser, and toner path (illustrates ghosting, smearing, faded-print causes)",
      "Public-domain diagram of an inkjet printhead and nozzle layout (illustrates clogging and nozzle-check patterns)",
      "Public-domain or GPL-licensed CUPS web-interface screenshot (illustrates Linux printer setup)",
      "Public-domain schematic of a network print path showing client, spooler/queue, IPP/port 9100, and printer",
      "Public-domain illustration of a paper-feed mechanism with pickup roller and separation pad (illustrates multi-feed and misfeed)"
    ]
  },
  {
    "id": "educational-guides",
    "label": "Educational Guides",
    "primarySection": "guides",
    "secondarySections": [],
    "description": "Concept and how-it-works explainers covering the core mechanisms, standards, and vocabulary of printing and scanning technology — color reproduction, page description languages, printing protocols, imaging pipelines, consumables, and paper — that are not already served by a narrower brand, history, troubleshooting, workflow, fax, mobile-printing, or single-term glossary page. Pages are neutral, standards-first reference explainers buildable from durable public knowledge.",
    "appAnchor": null,
    "status": "planned",
    "entities": [
      {
        "name": "PostScript",
        "type": "format"
      },
      {
        "name": "PCL (Printer Command Language)",
        "type": "format"
      },
      {
        "name": "PDF",
        "type": "format"
      },
      {
        "name": "IPP (Internet Printing Protocol)",
        "type": "protocol"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "PWG (Printer Working Group)",
        "type": "organization"
      },
      {
        "name": "IETF",
        "type": "organization"
      },
      {
        "name": "ISO",
        "type": "organization"
      },
      {
        "name": "ISO 216",
        "type": "standard"
      },
      {
        "name": "ICC (International Color Consortium)",
        "type": "organization"
      },
      {
        "name": "ICC profile",
        "type": "format"
      },
      {
        "name": "CMYK",
        "type": "concept"
      },
      {
        "name": "Color gamut",
        "type": "concept"
      },
      {
        "name": "Halftoning",
        "type": "concept"
      },
      {
        "name": "Raster image processor",
        "type": "concept"
      },
      {
        "name": "TWAIN",
        "type": "standard"
      },
      {
        "name": "CUPS",
        "type": "technology"
      },
      {
        "name": "PPD (PostScript Printer Description)",
        "type": "format"
      },
      {
        "name": "Automatic document feeder",
        "type": "concept"
      },
      {
        "name": "Multifunction printer",
        "type": "concept"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 42,
      "ambitious": 80
    },
    "planned": [
      {
        "slug": "how-color-management-works",
        "title": "How Color Management Works",
        "section": "guides",
        "angle": "Explains ICC profiles, color spaces, and the rendering pipeline that keeps color consistent from screen to print."
      },
      {
        "slug": "what-is-cmyk-color-printing",
        "title": "What Is CMYK Color Printing?",
        "section": "guides",
        "angle": "Subtractive color model and why printers combine cyan, magenta, yellow, and black to reproduce color."
      },
      {
        "slug": "what-is-color-gamut",
        "title": "What Is Color Gamut?",
        "section": "guides",
        "angle": "Defines the range of reproducible colors and why printed and displayed gamuts differ."
      },
      {
        "slug": "how-halftoning-works",
        "title": "How Halftoning Works",
        "section": "guides",
        "angle": "How continuous-tone images become patterns of dots that simulate shades using limited inks."
      },
      {
        "slug": "how-dithering-works",
        "title": "How Dithering Works in Printing",
        "section": "guides",
        "angle": "Error-diffusion and ordered dithering techniques for approximating colors and gray levels."
      },
      {
        "slug": "what-is-pcl-printer-language",
        "title": "What Is PCL (Printer Command Language)?",
        "section": "guides",
        "angle": "Origins and role of PCL as a page description language and how it differs from PostScript."
      },
      {
        "slug": "how-page-description-languages-work",
        "title": "How Page Description Languages Work",
        "section": "guides",
        "angle": "The concept of describing a page to a printer, comparing PostScript, PCL, and PDF-based workflows."
      },
      {
        "slug": "how-inkjet-printheads-work",
        "title": "How Inkjet Printheads Work",
        "section": "guides",
        "angle": "Thermal versus piezoelectric drop-on-demand mechanisms that eject ink droplets."
      },
      {
        "slug": "what-is-a-drum-unit",
        "title": "What Is a Drum Unit?",
        "section": "guides",
        "angle": "The role of the photosensitive drum in electrophotographic printing and how it relates to toner."
      },
      {
        "slug": "how-borderless-printing-works",
        "title": "How Borderless Printing Works",
        "section": "guides",
        "angle": "Why margins normally exist and how edge-to-edge printing overspray achieves a full-bleed page."
      },
      {
        "slug": "how-secure-print-release-works",
        "title": "How Secure Print Release Works",
        "section": "guides",
        "angle": "The pull-printing concept where jobs are held until a user authenticates at the device."
      },
      {
        "slug": "how-usb-printing-works",
        "title": "How USB Printing Works",
        "section": "guides",
        "angle": "The USB printing class and how a computer discovers and communicates with a directly connected printer."
      },
      {
        "slug": "understanding-paper-sizes",
        "title": "Understanding Paper Sizes",
        "section": "guides",
        "angle": "The ISO 216 A-series and North American Letter/Legal systems and the math behind A4."
      },
      {
        "slug": "understanding-paper-weight",
        "title": "Understanding Paper Weight",
        "section": "guides",
        "angle": "GSM versus pound basis weight, caliper, and how paper weight affects printing and feeding."
      }
    ],
    "crossLinks": [
      "troubleshooting",
      "mobile-printing",
      "glossary-terms"
    ],
    "imageNeeds": [
      "Public-domain diagram of the CMYK subtractive color model",
      "Public-domain ISO 216 A-series paper size diagram (Wikimedia SVG)",
      "Public-domain halftone/dithering pattern illustrations showing dot screens",
      "Public-domain schematic of electrophotographic (laser) drum and toner process",
      "Public-domain cross-section diagram of an inkjet drop-on-demand printhead",
      "Public-domain flatbed scanner optical path diagram (CCD/CIS)",
      "Vintage public-domain photographs of office scanners and multifunction devices for historical context"
    ]
  },
  {
    "id": "printer-models",
    "label": "Printer Models (reference)",
    "primarySection": "models",
    "secondarySections": [
      "brands",
      "history"
    ],
    "description": "Neutral, encyclopedic reference overviews of historically notable printers and print engines — each covering only durable, well-documented facts (printing method, interface, role in printing history) with no reviews, ratings, prices, or performance benchmarks. These pages populate a proposed new \"models\" section and interlink with the existing brands and history sections.",
    "appAnchor": null,
    "status": "planned",
    "entities": [
      {
        "name": "HP LaserJet",
        "type": "product"
      },
      {
        "name": "Apple LaserWriter",
        "type": "product"
      },
      {
        "name": "Adobe PostScript",
        "type": "standard"
      },
      {
        "name": "PCL (Printer Command Language)",
        "type": "standard"
      },
      {
        "name": "Centronics parallel interface",
        "type": "protocol"
      },
      {
        "name": "ESC/P",
        "type": "standard"
      },
      {
        "name": "HP-GL",
        "type": "format"
      },
      {
        "name": "Canon",
        "type": "brand"
      },
      {
        "name": "Hewlett-Packard",
        "type": "brand"
      },
      {
        "name": "Xerox",
        "type": "brand"
      },
      {
        "name": "IBM",
        "type": "organization"
      },
      {
        "name": "Epson",
        "type": "brand"
      },
      {
        "name": "Tektronix",
        "type": "brand"
      },
      {
        "name": "Diablo 630",
        "type": "product"
      },
      {
        "name": "Teletype Model 33",
        "type": "product"
      },
      {
        "name": "Dot matrix printing",
        "type": "technology"
      },
      {
        "name": "Daisy wheel printing",
        "type": "technology"
      },
      {
        "name": "Laser printing",
        "type": "technology"
      },
      {
        "name": "Inkjet printing",
        "type": "technology"
      },
      {
        "name": "Solid ink",
        "type": "technology"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 26,
      "ambitious": 44
    },
    "planned": [
      {
        "slug": "hp-laserjet-original",
        "title": "HP LaserJet (Original)",
        "section": "models",
        "angle": "The first widely adopted desktop laser printer and its role in bringing laser output to offices, described conceptually with method and interface only."
      },
      {
        "slug": "apple-laserwriter",
        "title": "Apple LaserWriter",
        "section": "models",
        "angle": "An early PostScript desktop laser printer and its connection to the rise of desktop publishing."
      },
      {
        "slug": "canon-lbp-cx-print-engine",
        "title": "Canon LBP-CX Print Engine",
        "section": "models",
        "angle": "The shared laser print engine underlying several early desktop laser printers, explaining what a print engine is and why one engine appeared in multiple branded products."
      },
      {
        "slug": "ibm-3800",
        "title": "IBM 3800 Laser Printing System",
        "section": "models",
        "angle": "An early high-speed continuous-forms laser printing system used in mainframe data centers."
      },
      {
        "slug": "xerox-9700",
        "title": "Xerox 9700 Electronic Printing System",
        "section": "models",
        "angle": "A landmark cut-sheet laser printing system and its place in centralized high-volume printing."
      },
      {
        "slug": "xerox-docutech",
        "title": "Xerox DocuTech",
        "section": "models",
        "angle": "A production publishing system combining scanning and laser printing for print-on-demand document workflows."
      },
      {
        "slug": "ibm-1403",
        "title": "IBM 1403 Line Printer",
        "section": "models",
        "angle": "A classic impact line printer of the mainframe era, explaining chain/train line printing conceptually."
      },
      {
        "slug": "diablo-630",
        "title": "Diablo 630 Daisy Wheel Printer",
        "section": "models",
        "angle": "An influential daisy wheel printer whose control conventions became a widely emulated standard."
      },
      {
        "slug": "teletype-model-33",
        "title": "Teletype Model 33",
        "section": "models",
        "angle": "An electromechanical teleprinter historically important to early computing and character-set conventions."
      },
      {
        "slug": "centronics-101",
        "title": "Centronics 101 Dot Matrix Printer",
        "section": "models",
        "angle": "An early dot matrix printer associated with the parallel interface that became a de facto printer connection standard."
      },
      {
        "slug": "epson-mx-80",
        "title": "Epson MX-80",
        "section": "models",
        "angle": "A widely used dot matrix printer of the early microcomputer era and the origin of a long-lived control language lineage."
      },
      {
        "slug": "epson-fx-80",
        "title": "Epson FX-80",
        "section": "models",
        "angle": "A successor dot matrix printer that helped establish the ESC/P command language as a common reference point."
      },
      {
        "slug": "okidata-microline",
        "title": "Oki Microline Series",
        "section": "models",
        "angle": "A durable dot matrix printer family associated with continuous-forms and multi-part impact printing."
      },
      {
        "slug": "star-micronics-nl-10",
        "title": "Star Micronics NL-10",
        "section": "models",
        "angle": "A consumer dot matrix printer of the home-computer era, described in terms of impact printing method and interfaces."
      },
      {
        "slug": "apple-imagewriter",
        "title": "Apple ImageWriter",
        "section": "models",
        "angle": "A dot matrix printer paired with early Apple computers, useful for explaining graphics-capable impact printing."
      },
      {
        "slug": "hp-thinkjet",
        "title": "HP ThinkJet",
        "section": "models",
        "angle": "An early thermal inkjet printer illustrating the transition from impact to non-impact desktop output."
      },
      {
        "slug": "hp-deskjet-original",
        "title": "HP DeskJet (Original)",
        "section": "models",
        "angle": "An early mainstream desktop inkjet printer and the popularization of thermal inkjet at home."
      },
      {
        "slug": "canon-bubble-jet-bj",
        "title": "Canon Bubble Jet (BJ) Series",
        "section": "models",
        "angle": "An inkjet family based on thermal bubble-jet technology, explaining the drop-formation method neutrally."
      },
      {
        "slug": "hp-laserjet-4",
        "title": "HP LaserJet 4",
        "section": "models",
        "angle": "A widely deployed office laser printer generation, described in terms of laser method and page-description support."
      },
      {
        "slug": "tektronix-phaser-solid-ink",
        "title": "Tektronix Phaser (Solid Ink)",
        "section": "models",
        "angle": "A color printer line associated with solid ink technology, explaining how solid ink differs from toner and liquid ink."
      },
      {
        "slug": "hp-7475a-plotter",
        "title": "HP 7475A Pen Plotter",
        "section": "models",
        "angle": "A pen plotter associated with the HP-GL vector command language, explaining vector plotting versus raster printing."
      },
      {
        "slug": "hp-officejet-original",
        "title": "HP OfficeJet (Original)",
        "section": "models",
        "angle": "An early inkjet all-in-one combining printing, scanning, copying, and faxing for the small office."
      }
    ],
    "crossLinks": [
      "fax-models"
    ],
    "imageNeeds": [
      "Verified public-domain or CC-licensed museum/collection photographs of specific historical printer units (e.g. Wikimedia Commons entries with confirmed license) — HP LaserJet, Apple LaserWriter, IBM 1403, Teletype Model 33",
      "Public-domain sample output artifacts: dot matrix printout, daisy wheel typeface, early laser page — only where license is explicitly verified",
      "Public-domain diagrams of printing methods (thermal inkjet drop formation, laser xerographic process, impact/line printing) usable as generic non-model-specific illustrations",
      "Manufacturer control-panel or interface close-ups only if sourced from confirmed free-license archives; otherwise omit imagery and rely on the site's zero-image premium layout"
    ]
  },
  {
    "id": "fax-models",
    "label": "Fax Machine Models (reference)",
    "primarySection": "models",
    "secondarySections": [
      "fax",
      "history"
    ],
    "description": "Neutral, encyclopedic reference overviews of notable fax machine model classes, product lines, and form factors — organized by the ITU-T fax standard class (Group 3, Group 4, Super G3) and by printing technology (thermal, laser, inkjet, plain-paper, multifunction). Each page explains what a class or line is, the standards it implements, and its typical design, without inventing per-model specifications, prices, or dates.",
    "appAnchor": null,
    "status": "planned",
    "entities": [
      {
        "name": "ITU-T",
        "type": "organization"
      },
      {
        "name": "ITU-T T.4",
        "type": "standard"
      },
      {
        "name": "ITU-T T.6",
        "type": "standard"
      },
      {
        "name": "ITU-T T.30",
        "type": "standard"
      },
      {
        "name": "ITU-T T.37",
        "type": "standard"
      },
      {
        "name": "ITU-T T.38",
        "type": "standard"
      },
      {
        "name": "Group 3 fax",
        "type": "standard"
      },
      {
        "name": "Group 4 fax",
        "type": "standard"
      },
      {
        "name": "Super G3",
        "type": "technology"
      },
      {
        "name": "ITU-T V.34",
        "type": "standard"
      },
      {
        "name": "ITU-T V.17",
        "type": "standard"
      },
      {
        "name": "PSTN",
        "type": "technology"
      },
      {
        "name": "ISDN",
        "type": "technology"
      },
      {
        "name": "Thermal printing",
        "type": "technology"
      },
      {
        "name": "Laser printing",
        "type": "technology"
      },
      {
        "name": "Inkjet printing",
        "type": "technology"
      },
      {
        "name": "Multifunction printer",
        "type": "concept"
      },
      {
        "name": "Fax modem",
        "type": "technology"
      },
      {
        "name": "Brother FAX series",
        "type": "product"
      },
      {
        "name": "Canon FAXPHONE",
        "type": "product"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 20,
      "ambitious": 32
    },
    "planned": [
      {
        "slug": "group-3-fax-machines",
        "title": "Group 3 Fax Machines Explained",
        "section": "models",
        "angle": "The class of fax machines implementing the ITU-T Group 3 standards (T.4 image coding, T.30 call handling) over ordinary telephone lines — the dominant fax class for desktop machines."
      },
      {
        "slug": "group-4-fax-machines",
        "title": "Group 4 Fax Machines Explained",
        "section": "models",
        "angle": "Digital fax machines built for ISDN using the T.6 coding scheme — what set them apart from Group 3 and why they stayed a niche class."
      },
      {
        "slug": "super-g3-fax-machines",
        "title": "Super G3 Fax Machines",
        "section": "models",
        "angle": "The later Group 3 machines that adopted the V.34 modem standard for faster page transfer, described as a class rather than by vendor spec claims."
      },
      {
        "slug": "thermal-paper-fax-machines",
        "title": "Thermal-Paper Fax Machines",
        "section": "models",
        "angle": "The roll-fed thermal-paper class of fax machine: how the print method shaped their form factor, output handling, and limitations."
      },
      {
        "slug": "plain-paper-fax-machines",
        "title": "Plain-Paper Fax Machines",
        "section": "models",
        "angle": "The category of fax machines that print onto standard cut-sheet paper instead of thermal rolls, and the printing technologies used to achieve it."
      },
      {
        "slug": "laser-fax-machines",
        "title": "Laser Fax Machines",
        "section": "models",
        "angle": "Fax machines that use a laser print engine — a plain-paper subclass, its typical office positioning and shared components with laser printers."
      },
      {
        "slug": "inkjet-fax-machines",
        "title": "Inkjet Fax Machines",
        "section": "models",
        "angle": "The inkjet-based plain-paper fax class often marketed for home and small-office use, and how the print method influenced their design."
      },
      {
        "slug": "multifunction-fax-machines",
        "title": "Multifunction Fax Machines (Fax MFPs)",
        "section": "models",
        "angle": "Devices combining fax with print, copy, and scan in one unit — how faxing became a feature of the MFP rather than a standalone product class."
      },
      {
        "slug": "fax-copier-combination-machines",
        "title": "Fax and Copier Combination Machines",
        "section": "models",
        "angle": "Combination units that paired a fax with a walk-up copier, a common office form before the general-purpose MFP."
      },
      {
        "slug": "desktop-vs-console-fax-machines",
        "title": "Desktop vs. Console Fax Machines",
        "section": "models",
        "angle": "A form-factor reference contrasting compact desktop fax units with floor-standing console machines built for higher office volume."
      },
      {
        "slug": "fax-machines-with-built-in-telephones",
        "title": "Fax Machines With Built-In Telephones",
        "section": "models",
        "angle": "The integrated fax-phone class that combined a handset, answering feature, and fax in one unit for shared home phone lines."
      },
      {
        "slug": "pc-fax-modems-and-boards",
        "title": "PC Fax Modems and Fax Boards",
        "section": "models",
        "angle": "Computer-hosted fax hardware that sent and received faxes without a standalone machine, positioned as a model class alongside physical units."
      },
      {
        "slug": "brother-fax-machine-series",
        "title": "Brother FAX and MFC Fax Series (Overview)",
        "section": "models",
        "angle": "A neutral overview of Brother's long-running fax and fax-capable MFC product lines and where they sit among fax classes."
      },
      {
        "slug": "canon-faxphone-series",
        "title": "Canon FAXPHONE Series (Overview)",
        "section": "models",
        "angle": "A neutral reference overview of Canon's FAXPHONE line of combined fax-and-telephone machines."
      },
      {
        "slug": "panasonic-kx-fax-series",
        "title": "Panasonic KX Fax Series (Overview)",
        "section": "models",
        "angle": "A neutral overview of Panasonic's KX-series fax machines and how they fit the thermal and plain-paper classes."
      },
      {
        "slug": "sharp-ux-fax-series",
        "title": "Sharp UX Fax Series (Overview)",
        "section": "models",
        "angle": "A neutral reference overview of Sharp's UX line of desktop fax machines."
      },
      {
        "slug": "muratec-fax-machines",
        "title": "Muratec Fax Machines (Overview)",
        "section": "models",
        "angle": "A neutral overview of Muratec as a fax-focused office equipment line and the classes of machine it produced."
      },
      {
        "slug": "xerox-telecopier-early-fax-models",
        "title": "The Xerox Telecopier and Early Desktop Fax Models",
        "section": "history",
        "angle": "The Telecopier family as an early commercial desktop fax model line, framed historically without inventing dates or specs."
      },
      {
        "slug": "how-to-identify-a-fax-machine-class",
        "title": "How to Identify a Fax Machine's Class",
        "section": "models",
        "angle": "A reference for telling apart fax classes (Group 3/4, thermal vs. plain-paper, standalone vs. MFP) from observable, durable characteristics."
      },
      {
        "slug": "roll-feed-vs-cut-sheet-fax-machines",
        "title": "Roll-Feed vs. Cut-Sheet Fax Machines",
        "section": "models",
        "angle": "A paper-handling reference contrasting roll-fed thermal designs with cut-sheet plain-paper designs across fax model classes."
      }
    ],
    "crossLinks": [
      "printing-history",
      "printer-models"
    ],
    "imageNeeds": [
      "Public-domain or CC-licensed photographs of specific documented fax machines (Wikimedia Commons), captioned with the exact model shown",
      "Photos illustrating thermal roll-feed vs. cut-sheet plain-paper output handling",
      "Photos of multifunction fax MFPs and console-style office fax units for form-factor contrast",
      "Historical imagery of early desktop fax/telecopier units where verifiable public-domain sources exist",
      "Neutral diagrams (own-authored SVG) of the Group 3 vs. Group 4 transmission path over PSTN vs. ISDN"
    ]
  },
  {
    "id": "eco-smart-printer",
    "label": "Home & Office Printing Help",
    "primarySection": "mobile-printing",
    "secondarySections": [
      "guides",
      "troubleshooting",
      "workflows"
    ],
    "description": "A practical, vendor-neutral reference on everyday home and small-office printing: connecting printers to Wi-Fi, printing from phones and tablets across Apple and Android, managing print queues, and improving print quality. Explains the open standards behind driverless mobile printing (AirPrint, Mopria, IPP Everywhere, Wi-Fi Direct) and gives standards-first, non-marketing troubleshooting for the most common failure modes.",
    "appAnchor": "smart-printer",
    "status": "planned",
    "entities": [
      {
        "name": "AirPrint",
        "type": "technology"
      },
      {
        "name": "Mopria Print Service",
        "type": "technology"
      },
      {
        "name": "Internet Printing Protocol (IPP)",
        "type": "protocol"
      },
      {
        "name": "IPP Everywhere",
        "type": "standard"
      },
      {
        "name": "Printer Working Group (PWG)",
        "type": "organization"
      },
      {
        "name": "Wi-Fi Direct",
        "type": "standard"
      },
      {
        "name": "Wi-Fi Alliance",
        "type": "organization"
      },
      {
        "name": "Bonjour (mDNS/DNS-SD)",
        "type": "protocol"
      },
      {
        "name": "Android",
        "type": "os"
      },
      {
        "name": "iOS",
        "type": "os"
      },
      {
        "name": "macOS",
        "type": "os"
      },
      {
        "name": "Microsoft Windows",
        "type": "os"
      },
      {
        "name": "CUPS",
        "type": "technology"
      },
      {
        "name": "Print spooler",
        "type": "concept"
      },
      {
        "name": "Print queue",
        "type": "concept"
      },
      {
        "name": "DPI",
        "type": "concept"
      },
      {
        "name": "Duplex printing",
        "type": "concept"
      },
      {
        "name": "NFC",
        "type": "standard"
      },
      {
        "name": "Google Cloud Print",
        "type": "product"
      },
      {
        "name": "Smart Printer",
        "type": "product"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 26,
      "ambitious": 44
    },
    "planned": [
      {
        "slug": "android-default-print-service",
        "title": "Understanding Android's Built-In Print Service",
        "section": "mobile-printing",
        "angle": "How Android's default print framework discovers printers and where Mopria and manufacturer plug-ins fit in."
      },
      {
        "slug": "printing-over-nfc-tap-to-print",
        "title": "How Tap-to-Print With NFC Works",
        "section": "mobile-printing",
        "angle": "Explains NFC tap-to-connect as a convenience layer that hands off to Wi-Fi for the actual print job."
      },
      {
        "slug": "cloud-printing-after-google-cloud-print",
        "title": "Cloud Printing After Google Cloud Print",
        "section": "mobile-printing",
        "angle": "Factual overview of what cloud printing is and how the landscape shifted after Google Cloud Print was retired in 2020."
      },
      {
        "slug": "print-a-web-page-from-your-phone",
        "title": "How to Print a Web Page From Your Phone",
        "section": "mobile-printing",
        "angle": "Using the browser print flow on iOS and Android to print or save a web page as PDF."
      },
      {
        "slug": "how-to-set-up-a-wireless-printer",
        "title": "How to Set Up a Wireless Printer",
        "section": "guides",
        "angle": "General, vendor-neutral steps for adding a printer to a home or office Wi-Fi network and confirming it is discoverable."
      },
      {
        "slug": "understanding-print-quality-settings",
        "title": "Understanding Print Quality Settings",
        "section": "guides",
        "angle": "What draft, normal, and best modes change, and how resolution and paper type affect output."
      },
      {
        "slug": "choosing-paper-for-your-printer",
        "title": "Choosing the Right Paper for Your Printer",
        "section": "guides",
        "angle": "Explains paper weight, finish, and inkjet vs laser compatibility without brand recommendations."
      },
      {
        "slug": "color-vs-grayscale-printing",
        "title": "Color vs. Grayscale Printing Explained",
        "section": "guides",
        "angle": "When to print in color versus grayscale and how each affects consumable use and output."
      },
      {
        "slug": "understanding-the-print-dialog",
        "title": "Understanding the Print Dialog",
        "section": "guides",
        "angle": "A tour of common print dialog options (copies, range, scaling, duplex, quality) across operating systems."
      },
      {
        "slug": "print-job-stuck-in-queue",
        "title": "What to Do When a Print Job Is Stuck in the Queue",
        "section": "troubleshooting",
        "angle": "How the spooler and queue work and safe steps to clear a stuck job on Windows and macOS."
      },
      {
        "slug": "printer-connected-but-not-printing",
        "title": "Printer Shows Connected but Won't Print",
        "section": "troubleshooting",
        "angle": "Diagnosing the gap between a discovered/connected printer and a job that never prints (queue, driver, default printer)."
      },
      {
        "slug": "cant-print-from-phone-troubleshooting",
        "title": "When You Can't Print From Your Phone",
        "section": "troubleshooting",
        "angle": "Common reasons mobile printing fails (different networks, AirPrint/Mopria support, discovery) and how to check each."
      },
      {
        "slug": "slow-printing-troubleshooting",
        "title": "Why Printing Is Slow and How to Improve It",
        "section": "troubleshooting",
        "angle": "Factors behind slow print jobs (quality mode, spooling, connection type, large graphics) explained neutrally."
      },
      {
        "slug": "set-up-home-office-printing",
        "title": "Setting Up Printing for a Home Office",
        "section": "workflows",
        "angle": "End-to-end workflow for making one printer reliably reachable from a laptop, phone, and tablet."
      },
      {
        "slug": "print-double-sided-from-a-phone",
        "title": "How to Print Double-Sided From a Phone",
        "section": "workflows",
        "angle": "Enabling duplex from mobile print flows when the printer supports automatic two-sided printing."
      },
      {
        "slug": "print-from-multiple-devices-to-one-printer",
        "title": "Printing From Multiple Devices to One Printer",
        "section": "workflows",
        "angle": "Workflow for sharing a single printer across mixed Apple, Android, and Windows devices at home."
      }
    ],
    "crossLinks": [
      "printing-history",
      "eco-cv-resume",
      "eco-invoicing",
      "eco-document-finance"
    ],
    "imageNeeds": [
      "Public-domain or self-produced screenshots of OS print dialogs (macOS, Windows, iOS/Android share-print sheets) with no proprietary branding",
      "Original neutral diagrams of the driverless printing discovery flow (device -> mDNS/Bonjour -> printer -> IPP job)",
      "Original diagram contrasting shared-router printing vs Wi-Fi Direct topology",
      "Original illustrative diagrams of a print spooler/queue pipeline",
      "Public-domain/CC0 generic photos of home-office printers and paper types (no identifiable model badges)"
    ]
  },
  {
    "id": "eco-cv-resume",
    "label": "Resumes & CV Documents",
    "primarySection": "workflows",
    "secondarySections": [
      "tools",
      "guides"
    ],
    "description": "A document-centric cluster covering resume and CV file formats, ATS-parseable document structure, PDF export and preservation, and job-application document preparation. It treats resumes strictly as documents (formatting, file formats, portability, archiving, printing) and makes no career-coaching, hiring-outcome, or \"how to get a job\" claims.",
    "appAnchor": "cv-resume",
    "status": "planned",
    "entities": [
      {
        "name": "PDF (Portable Document Format)",
        "type": "format"
      },
      {
        "name": "ISO 32000",
        "type": "standard"
      },
      {
        "name": "PDF/A",
        "type": "standard"
      },
      {
        "name": "Tagged PDF",
        "type": "concept"
      },
      {
        "name": "Office Open XML (DOCX)",
        "type": "format"
      },
      {
        "name": "Rich Text Format (RTF)",
        "type": "format"
      },
      {
        "name": "Plain text (TXT)",
        "type": "format"
      },
      {
        "name": "Applicant Tracking System (ATS)",
        "type": "concept"
      },
      {
        "name": "Optical Character Recognition (OCR)",
        "type": "technology"
      },
      {
        "name": "Unicode",
        "type": "standard"
      },
      {
        "name": "OpenType",
        "type": "format"
      },
      {
        "name": "TrueType",
        "type": "format"
      },
      {
        "name": "Font embedding",
        "type": "concept"
      },
      {
        "name": "ISO 216 (A4 paper size)",
        "type": "standard"
      },
      {
        "name": "ANSI Letter paper size",
        "type": "standard"
      },
      {
        "name": "Document metadata",
        "type": "concept"
      },
      {
        "name": "PDF accessibility (PDF/UA)",
        "type": "standard"
      },
      {
        "name": "Adobe",
        "type": "organization"
      },
      {
        "name": "International Organization for Standardization",
        "type": "organization"
      },
      {
        "name": "Résumé",
        "type": "concept"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 22,
      "ambitious": 34
    },
    "planned": [
      {
        "slug": "export-a-resume-as-a-pdf",
        "title": "How to Export a Resume as a PDF",
        "section": "workflows",
        "angle": "Generic, vendor-neutral workflow for saving a word-processor resume as a PDF and why the format preserves layout."
      },
      {
        "slug": "prepare-an-ats-friendly-resume-document",
        "title": "Preparing an ATS-Friendly Resume Document",
        "section": "workflows",
        "angle": "Document-structure practices (real text not images, simple layout, standard fonts) that keep a resume machine-readable, without hiring claims."
      },
      {
        "slug": "what-is-an-ats-friendly-document",
        "title": "What Makes a Document ATS-Friendly",
        "section": "guides",
        "angle": "Explains what an applicant tracking system parses in a document and why selectable text matters, described generically across vendors."
      },
      {
        "slug": "resume-file-formats-explained",
        "title": "Resume File Formats Explained: PDF, DOCX, RTF, and TXT",
        "section": "tools",
        "angle": "Neutral comparison of common resume document formats and what each preserves or discards."
      },
      {
        "slug": "pdf-vs-docx-for-resumes",
        "title": "PDF vs DOCX for Resume Documents",
        "section": "guides",
        "angle": "Portability and layout-fidelity trade-offs between a fixed-layout PDF and an editable DOCX, purely as document formats."
      },
      {
        "slug": "convert-a-resume-to-pdf-a-for-archiving",
        "title": "Converting a Resume to PDF/A for Long-Term Archiving",
        "section": "workflows",
        "angle": "Using the PDF/A archival profile to keep a resume readable over time; explains self-contained fonts and no external dependencies."
      },
      {
        "slug": "font-embedding-in-resume-pdfs",
        "title": "Why Font Embedding Matters in Resume PDFs",
        "section": "guides",
        "angle": "How embedded OpenType/TrueType fonts keep a resume looking identical on other machines versus font substitution."
      },
      {
        "slug": "keep-resume-formatting-consistent-across-devices",
        "title": "Keeping Resume Formatting Consistent Across Devices",
        "section": "workflows",
        "angle": "Why layout shifts between apps and how a fixed-layout PDF prevents reflow across devices and viewers."
      },
      {
        "slug": "plain-text-resume-explained",
        "title": "The Plain-Text Resume, Explained",
        "section": "tools",
        "angle": "What a plain-text (TXT) resume is, its role in paste-into-form and maximally parseable submissions, and its formatting limits."
      },
      {
        "slug": "reduce-resume-pdf-file-size",
        "title": "How to Reduce a Resume PDF's File Size",
        "section": "workflows",
        "angle": "Neutral techniques (image downsampling, font subsetting) to shrink a resume PDF for upload limits without losing text."
      },
      {
        "slug": "resume-page-size-a4-vs-letter",
        "title": "Resume Page Size: A4 vs Letter",
        "section": "guides",
        "angle": "ISO 216 A4 versus ANSI Letter and why regional page size affects how a resume prints and paginates."
      },
      {
        "slug": "combine-cover-letter-and-resume-into-one-pdf",
        "title": "Combining a Cover Letter and Resume into One PDF",
        "section": "workflows",
        "angle": "Merging multiple documents into a single ordered PDF for a single-file application upload."
      },
      {
        "slug": "how-ats-parses-resume-documents",
        "title": "How Applicant Tracking Systems Parse Resume Documents",
        "section": "guides",
        "angle": "Generic description of text extraction and field mapping from a document, and why images-of-text and complex tables reduce parse accuracy."
      },
      {
        "slug": "scan-a-printed-resume-to-editable-text",
        "title": "Scanning a Printed Resume into Editable Text",
        "section": "workflows",
        "angle": "Using a scanner plus OCR to recover editable text from a paper resume; ties to searchable-PDF workflow."
      },
      {
        "slug": "resume-metadata-and-document-properties",
        "title": "Resume Metadata and Document Properties",
        "section": "tools",
        "angle": "What document metadata (author, title, keywords) is stored in resume files and how to review or clear it."
      },
      {
        "slug": "redact-personal-information-from-a-resume-pdf",
        "title": "Redacting Personal Information from a Resume PDF",
        "section": "workflows",
        "angle": "Properly removing (not just hiding) sensitive details from a resume PDF before sharing, and why deletion differs from covering."
      },
      {
        "slug": "resume-vs-cv-document-differences",
        "title": "Resume vs CV: Document Differences",
        "section": "guides",
        "angle": "Documentary and regional distinctions between a résumé and a curriculum vitae as document types, no advice framing."
      },
      {
        "slug": "accessible-resume-documents",
        "title": "Making Resume Documents Accessible",
        "section": "guides",
        "angle": "Tagged PDF, logical reading order, and text alternatives so a resume is usable by assistive technology, referencing PDF/UA."
      },
      {
        "slug": "name-and-organize-job-application-files",
        "title": "Naming and Organizing Job-Application Files",
        "section": "workflows",
        "angle": "A consistent file-naming and folder convention for versions of resumes, cover letters, and portfolios."
      },
      {
        "slug": "print-a-resume-for-an-interview",
        "title": "Printing a Resume for an In-Person Interview",
        "section": "workflows",
        "angle": "Print-side considerations: page size, margins, duplex, and paper so a printed resume matches the on-screen document."
      },
      {
        "slug": "hyperlinks-in-resume-pdfs",
        "title": "Hyperlinks in Resume PDFs",
        "section": "guides",
        "angle": "How clickable links survive PDF export, why some export paths flatten them, and keeping link text meaningful."
      },
      {
        "slug": "version-and-archive-resume-documents",
        "title": "Versioning and Archiving Resume Documents",
        "section": "workflows",
        "angle": "Keeping dated, retrievable versions of a resume and archiving finalized copies as PDF/A."
      }
    ],
    "crossLinks": [
      "document-workflows",
      "mobile-printing",
      "troubleshooting"
    ],
    "imageNeeds": [
      "Public-domain scans of historical typewritten résumés or curriculum vitae from library/university archives (clearly PD-licensed)",
      "Public-domain diagram of ISO 216 A-series paper sizes vs ANSI Letter for page-size comparisons",
      "Self-made schematic diagrams of PDF document structure (text layer vs image layer, tagged reading order) rendered as original SVG",
      "Public-domain imagery of vintage job-application forms or employment paperwork from government/archive sources",
      "Original SVG icons/diagrams illustrating font embedding vs substitution and document-to-PDF export flow"
    ]
  },
  {
    "id": "eco-invoicing",
    "label": "Invoices & Billing Documents",
    "primarySection": "workflows",
    "secondarySections": [
      "tools",
      "guides"
    ],
    "description": "An encyclopedic cluster on the invoice as a document type: its structure and fields, related billing documents (receipts, purchase orders, credit notes, proforma and remittance advices), and the document-centric workflows of creating, printing, emailing, and archiving them. It also covers the durable open standards that define structured/electronic invoices, treating tax and VAT strictly as document elements rather than offering any tax or legal advice.",
    "appAnchor": "invoice-maker",
    "status": "planned",
    "entities": [
      {
        "name": "Invoice",
        "type": "concept"
      },
      {
        "name": "Receipt",
        "type": "concept"
      },
      {
        "name": "Purchase order",
        "type": "concept"
      },
      {
        "name": "Credit note",
        "type": "concept"
      },
      {
        "name": "Proforma invoice",
        "type": "concept"
      },
      {
        "name": "Remittance advice",
        "type": "concept"
      },
      {
        "name": "Value-added tax (VAT)",
        "type": "concept"
      },
      {
        "name": "Universal Business Language (UBL)",
        "type": "standard"
      },
      {
        "name": "OASIS",
        "type": "organization"
      },
      {
        "name": "PEPPOL",
        "type": "standard"
      },
      {
        "name": "EN 16931",
        "type": "standard"
      },
      {
        "name": "Factur-X / ZUGFeRD",
        "type": "format"
      },
      {
        "name": "PDF/A-3",
        "type": "format"
      },
      {
        "name": "ISO 20022",
        "type": "standard"
      },
      {
        "name": "UN/EDIFACT",
        "type": "standard"
      },
      {
        "name": "XML",
        "type": "format"
      },
      {
        "name": "PDF",
        "type": "format"
      },
      {
        "name": "ISO",
        "type": "organization"
      },
      {
        "name": "UN/CEFACT",
        "type": "organization"
      },
      {
        "name": "Line item",
        "type": "concept"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 22,
      "ambitious": 40
    },
    "planned": [
      {
        "slug": "anatomy-of-an-invoice",
        "title": "The Anatomy of an Invoice: Standard Fields Explained",
        "section": "guides",
        "angle": "Walks through the structural components (header, seller/buyer blocks, line items, totals) that recur across invoice documents."
      },
      {
        "slug": "invoice-vs-receipt",
        "title": "Invoice vs. Receipt: How the Two Documents Differ",
        "section": "guides",
        "angle": "Explains the document-role distinction between a request for payment and proof of payment."
      },
      {
        "slug": "anatomy-of-a-receipt",
        "title": "The Anatomy of a Receipt",
        "section": "guides",
        "angle": "Describes the common fields and layout of paper and digital receipts as a document type."
      },
      {
        "slug": "what-is-a-proforma-invoice",
        "title": "What Is a Proforma Invoice?",
        "section": "guides",
        "angle": "Defines the proforma document and how it differs structurally from a commercial invoice."
      },
      {
        "slug": "what-is-a-credit-note",
        "title": "What Is a Credit Note?",
        "section": "guides",
        "angle": "Explains the credit-note document and its relationship to a corresponding invoice."
      },
      {
        "slug": "what-is-a-purchase-order",
        "title": "What Is a Purchase Order?",
        "section": "guides",
        "angle": "Describes the purchase-order document and how it maps to invoice line items."
      },
      {
        "slug": "what-is-a-remittance-advice",
        "title": "What Is a Remittance Advice?",
        "section": "guides",
        "angle": "Defines the remittance-advice document that accompanies a payment against invoices."
      },
      {
        "slug": "vat-fields-on-an-invoice",
        "title": "VAT and Tax Fields on an Invoice",
        "section": "guides",
        "angle": "Describes tax-related fields (tax ID, rate, taxable amount, tax total) as document elements, without giving tax advice."
      },
      {
        "slug": "invoice-numbering-schemes",
        "title": "Invoice Numbering Schemes",
        "section": "guides",
        "angle": "Explains common sequential and structured numbering conventions used to identify invoice documents."
      },
      {
        "slug": "what-is-an-electronic-invoice",
        "title": "What Is an Electronic Invoice?",
        "section": "guides",
        "angle": "Distinguishes a true structured e-invoice from a PDF or scanned image of an invoice."
      },
      {
        "slug": "structured-vs-unstructured-invoices",
        "title": "Structured vs. Unstructured Invoices",
        "section": "guides",
        "angle": "Contrasts machine-readable data formats with human-readable document layouts."
      },
      {
        "slug": "what-is-ubl",
        "title": "What Is UBL (Universal Business Language)?",
        "section": "guides",
        "angle": "Introduces the OASIS UBL XML vocabulary for invoices and related business documents."
      },
      {
        "slug": "what-is-en-16931",
        "title": "EN 16931: The European E-Invoicing Standard",
        "section": "guides",
        "angle": "Explains the semantic data model EN 16931 defines for electronic invoices."
      },
      {
        "slug": "what-is-peppol",
        "title": "What Is PEPPOL?",
        "section": "guides",
        "angle": "Describes the PEPPOL network and document specifications for exchanging e-invoices."
      },
      {
        "slug": "what-is-factur-x-zugferd",
        "title": "What Is Factur-X / ZUGFeRD?",
        "section": "guides",
        "angle": "Explains the hybrid invoice format combining a PDF/A-3 document with embedded XML."
      },
      {
        "slug": "what-is-pdf-a3",
        "title": "What Is PDF/A-3 and Why Invoices Use It",
        "section": "tools",
        "angle": "Explains the PDF/A-3 archival format and its ability to embed structured invoice data."
      },
      {
        "slug": "what-is-edifact-invoicing",
        "title": "UN/EDIFACT and the INVOIC Message",
        "section": "guides",
        "angle": "Introduces the EDIFACT INVOIC message as an early structured invoice format."
      },
      {
        "slug": "create-an-invoice-pdf",
        "title": "How to Assemble an Invoice as a PDF",
        "section": "workflows",
        "angle": "Document-workflow walkthrough of laying out invoice fields and exporting a clean PDF."
      },
      {
        "slug": "print-an-invoice",
        "title": "Printing an Invoice: A Document Workflow",
        "section": "workflows",
        "angle": "Covers page setup, margins, and duplex considerations when printing invoice documents."
      },
      {
        "slug": "archive-invoices-as-pdf-a",
        "title": "Archiving Invoices as PDF/A",
        "section": "workflows",
        "angle": "How to convert and store invoice documents in a long-term archival format."
      },
      {
        "slug": "organize-digital-receipts",
        "title": "Organizing Digital Receipts",
        "section": "workflows",
        "angle": "A document-management workflow for capturing, naming, and filing receipt files."
      },
      {
        "slug": "batch-print-billing-documents",
        "title": "Batch Printing Billing Documents",
        "section": "workflows",
        "angle": "Covers print-queue and collation considerations when printing many invoices at once."
      }
    ],
    "crossLinks": [
      "eco-smart-printer",
      "eco-cv-resume",
      "eco-document-finance"
    ],
    "imageNeeds": [
      "Public-domain scans of historical paper invoices and billing statements",
      "Public-domain images of carbon-copy invoice/receipt books and duplicate forms",
      "Public-domain photographs of cash-register and till receipts",
      "Public-domain images of ledger books and bookkeeping records",
      "Public-domain diagrams or facsimiles of standardized business forms",
      "Self-made schematic diagrams labeling invoice document fields (no third-party assets)"
    ]
  },
  {
    "id": "eco-document-finance",
    "label": "Receipts & Financial Documents",
    "primarySection": "workflows",
    "secondarySections": [
      "guides"
    ],
    "description": "An editorial cluster on the printing, scanning, digitising, and organisation of financial paperwork — point-of-sale and thermal receipts, expense records, statements, and budgeting documents — plus the durable archival formats and file-management practices used to keep them legible over time. It is document-handling reference material only, covering formats, standards, and workflows; it gives no tax, accounting, or financial advice.",
    "appAnchor": "pocket-manager",
    "status": "planned",
    "entities": [
      {
        "name": "PDF/A (ISO 19005)",
        "type": "standard"
      },
      {
        "name": "Portable Document Format (PDF)",
        "type": "format"
      },
      {
        "name": "Optical Character Recognition",
        "type": "technology"
      },
      {
        "name": "Thermal printing",
        "type": "technology"
      },
      {
        "name": "Thermal paper",
        "type": "concept"
      },
      {
        "name": "ESC/POS",
        "type": "protocol"
      },
      {
        "name": "Point-of-sale receipt",
        "type": "concept"
      },
      {
        "name": "Expense report",
        "type": "concept"
      },
      {
        "name": "TWAIN",
        "type": "standard"
      },
      {
        "name": "Bisphenol A",
        "type": "concept"
      },
      {
        "name": "Records retention",
        "type": "concept"
      },
      {
        "name": "Document management system",
        "type": "concept"
      },
      {
        "name": "Searchable PDF",
        "type": "format"
      },
      {
        "name": "ISO 8601",
        "type": "standard"
      },
      {
        "name": "Metadata",
        "type": "concept"
      },
      {
        "name": "Adobe Systems",
        "type": "organization"
      },
      {
        "name": "Epson",
        "type": "brand"
      },
      {
        "name": "pocket-manager",
        "type": "product"
      }
    ],
    "livePages": 0,
    "capacity": {
      "conservative": 24,
      "ambitious": 42
    },
    "planned": [
      {
        "slug": "scan-paper-receipts-to-pdf",
        "title": "How to Scan Paper Receipts to PDF",
        "section": "workflows",
        "angle": "End-to-end flat-bed and sheet-fed workflow for turning paper receipts into legible, filed PDF documents."
      },
      {
        "slug": "digitise-expense-records",
        "title": "Digitising Expense Records: A Document Workflow",
        "section": "workflows",
        "angle": "Capturing, deduplicating, and filing a running set of expense documents into a consistent digital archive."
      },
      {
        "slug": "scan-receipts-with-a-phone-camera",
        "title": "Scanning Receipts With a Phone Camera",
        "section": "workflows",
        "angle": "How mobile document-capture handles small, curled, low-contrast receipts (edge detection, deskew, thresholding)."
      },
      {
        "slug": "combine-receipts-into-one-pdf",
        "title": "Combining Multiple Receipts Into One PDF",
        "section": "workflows",
        "angle": "Merging many small captures into a single ordered multi-page PDF for an expense claim."
      },
      {
        "slug": "reduce-file-size-of-scanned-receipts",
        "title": "Reducing the File Size of Scanned Receipts",
        "section": "workflows",
        "angle": "Resolution, colour mode, and compression trade-offs that keep receipt scans readable but small."
      },
      {
        "slug": "name-and-file-scanned-financial-documents",
        "title": "Naming and Filing Scanned Financial Documents",
        "section": "workflows",
        "angle": "Consistent file-naming and folder conventions using ISO 8601 dates for retrievable financial archives."
      },
      {
        "slug": "scan-bank-statements-to-pdf",
        "title": "Scanning Bank Statements to Searchable PDF",
        "section": "workflows",
        "angle": "Turning multi-page statements into text-searchable PDFs while preserving legibility of tables."
      },
      {
        "slug": "build-a-digital-receipt-archive",
        "title": "Building a Digital Receipt Archive",
        "section": "workflows",
        "angle": "Structuring folders, formats, and backups so a long-term receipt archive stays usable."
      },
      {
        "slug": "back-up-scanned-financial-documents",
        "title": "Backing Up Scanned Financial Documents",
        "section": "workflows",
        "angle": "3-2-1 backup principles applied to an archive of scanned receipts and statements."
      },
      {
        "slug": "create-an-expense-report-pdf",
        "title": "Assembling an Expense Report as a PDF",
        "section": "workflows",
        "angle": "Compiling receipts plus a summary sheet into one shareable, printable expense-report document."
      },
      {
        "slug": "convert-receipt-photos-to-pdf",
        "title": "Converting Receipt Photos to PDF",
        "section": "workflows",
        "angle": "Cleaning up phone photos of receipts and packaging them as documents rather than images."
      },
      {
        "slug": "receipt-paper-types-explained",
        "title": "Receipt Paper Types Explained",
        "section": "guides",
        "angle": "Direct-thermal vs bond/carbonless receipt stock and how each affects durability and printing."
      },
      {
        "slug": "how-ocr-reads-receipts",
        "title": "How OCR Reads Receipts",
        "section": "guides",
        "angle": "Why receipt OCR is hard (fonts, faded ink, layout) and how text and fields are extracted from a scan."
      },
      {
        "slug": "what-is-pdf-a-for-record-keeping",
        "title": "What Is PDF/A for Long-Term Record Keeping",
        "section": "guides",
        "angle": "How the ISO 19005 archival profile embeds fonts and forbids external dependencies for durable documents."
      },
      {
        "slug": "paper-vs-digital-financial-records",
        "title": "Paper vs Digital Financial Records",
        "section": "guides",
        "angle": "Durability, searchability, and storage trade-offs between paper receipts and scanned archives."
      },
      {
        "slug": "understanding-document-retention-for-records",
        "title": "Understanding Document Retention for Records",
        "section": "guides",
        "angle": "General, jurisdiction-neutral concepts of records retention and why keep-vs-discard rules exist (no legal advice)."
      },
      {
        "slug": "bpa-in-thermal-receipt-paper",
        "title": "BPA in Thermal Receipt Paper",
        "section": "guides",
        "angle": "The role of bisphenol developers as a colour former in thermal paper and the shift to alternative coatings."
      },
      {
        "slug": "how-receipt-scanning-apps-work",
        "title": "How Receipt-Scanning Apps Work",
        "section": "guides",
        "angle": "The capture-to-data pipeline: image cleanup, OCR, field detection, and export to PDF or structured records."
      }
    ],
    "crossLinks": [
      "eco-smart-printer",
      "eco-cv-resume",
      "eco-invoicing"
    ],
    "imageNeeds": [
      "Public-domain photographs of paper point-of-sale/cash-register receipts",
      "Public-domain images of thermal receipt printers and POS terminals",
      "Public-domain photos of a faded/aged thermal receipt showing degradation",
      "Public-domain imagery of filing cabinets or archival document storage",
      "Public-domain photos of a flat-bed or sheet-fed document scanner",
      "Public-domain historical images of adding-machine or till receipt rolls",
      "Own-authored SVG diagrams: capture-to-PDF workflow, direct-thermal printhead cross-section, OCR pipeline"
    ]
  }
];

export const getCluster = (id: string): KgCluster | undefined =>
  TAXONOMY.find((c) => c.id === id);

export const clustersInSection = (section: string): KgCluster[] =>
  TAXONOMY.filter(
    (c) =>
      c.primarySection === section || c.secondarySections.includes(section as never),
  );

export function taxonomyTotals() {
  return TAXONOMY.reduce(
    (acc, c) => ({
      clusters: acc.clusters + 1,
      livePages: acc.livePages + c.livePages,
      plannedSample: acc.plannedSample + c.planned.length,
      capacityConservative: acc.capacityConservative + c.capacity.conservative,
      capacityAmbitious: acc.capacityAmbitious + c.capacity.ambitious,
    }),
    { clusters: 0, livePages: 0, plannedSample: 0, capacityConservative: 0, capacityAmbitious: 0 },
  );
}
