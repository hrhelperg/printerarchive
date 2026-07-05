// Manufacturer registry + model-family taxonomy (Phase 11).
//
// This is DATA, not pages. It is the structural backbone of the manufacturer
// encyclopedia: identity, HQ country, current status, technology categories,
// documented product-line ("model family") names, corporate relationships, and
// links into the topic knowledge graph (lib/knowledge-graph/taxonomy.ts).
//
// HONESTY: this file carries only documented, structural facts — company names,
// HQ country, active/historical status, product-LINE names (not claims about
// them), and well-documented corporate events (spin-offs, mergers, acquisitions).
// It deliberately contains NO market share, sales, revenue, founding legends, or
// unsourced superlatives. Model families are a DESIGN-ONLY taxonomy — no model
// pages are generated. Narrative facts (dates, innovations) live on the
// per-manufacturer pages, where every claim is source-backed.
//
// `sourcing`:
//   "flagship-verified"  — a rich, web-researched, fact-checked page exists.
//   "documented-structure" — identity/relationships are documented; a full page
//                            is planned and its facts will be verified at authoring.
//
// No "@/" imports, so this module also loads under `node --experimental-strip-types`
// (used by scripts/manufacturers.test.mjs).

export type ManufacturerStatus = "active" | "historical" | "absorbed";

export type ManufacturerSourcing = "flagship-verified" | "documented-structure";

export type RelationshipType =
  | "spun-off-from"
  | "acquired-printing-business-of"
  | "merged-to-form"
  | "subsidiary-of"
  | "succeeded-by"
  | "supplies-engines-to";

export interface ModelFamily {
  name: string;
  /** technology/segment tag, e.g. "laser" | "inkjet" | "dot-matrix" | "led" | "thermal-label" | "line-printer" | "mfp" | "production" | "receipt" | "typewriter" */
  category: string;
  /** "current" | "historical" — helps future model pages; still design-only. */
  era?: "current" | "historical";
}

export interface ManufacturerRelationship {
  /** id of another manufacturer in this registry */
  to: string;
  type: RelationshipType;
  note?: string;
}

export interface Manufacturer {
  id: string;
  name: string;
  aliases?: string[];
  hqCountry: string;
  status: ManufacturerStatus;
  /** technology/segment associations, drawn from a shared vocabulary */
  categories: string[];
  /** documented product-line names (design-only model taxonomy) */
  modelFamilies: ModelFamily[];
  relationships: ManufacturerRelationship[];
  /** topic-cluster ids in lib/knowledge-graph/taxonomy.ts */
  relatedClusters: string[];
  /** true when a rich, source-backed page exists (or is being authored this phase) */
  flagship: boolean;
  sourcing: ManufacturerSourcing;
}

const F = (name: string, category: string, era?: "current" | "historical"): ModelFamily =>
  era ? { name, category, era } : { name, category };

export const MANUFACTURERS: Manufacturer[] = [
  // ---------------- Flagship 10 (rich source-backed pages) ----------------
  {
    id: "xerox",
    name: "Xerox",
    hqCountry: "United States",
    status: "active",
    categories: ["copier", "laser", "mfp", "production", "office"],
    modelFamilies: [
      F("VersaLink", "mfp", "current"),
      F("AltaLink", "mfp", "current"),
      F("WorkCentre", "mfp", "historical"),
      F("Phaser", "laser", "historical"),
      F("DocuColor", "production", "historical"),
      F("iGen", "production", "current"),
      F("Nuvera", "production", "historical"),
      F("DocuTech", "production", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "copiers", "printer-technologies", "desktop-publishing", "office-infrastructure"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "ibm",
    name: "IBM",
    aliases: ["International Business Machines"],
    hqCountry: "United States",
    status: "historical",
    categories: ["line-printer", "laser", "dot-matrix", "typewriter", "enterprise"],
    modelFamilies: [
      F("1403 line printer", "line-printer", "historical"),
      F("3800 laser printing system", "laser", "historical"),
      F("Proprinter", "dot-matrix", "historical"),
      F("Quietwriter", "dot-matrix", "historical"),
      F("Wheelwriter", "typewriter", "historical"),
      F("InfoPrint", "production", "historical"),
    ],
    relationships: [
      { to: "lexmark", type: "succeeded-by", note: "IBM's information-products/printer business was spun off as Lexmark in 1991." },
      { to: "ricoh", type: "succeeded-by", note: "IBM's remaining printing business passed to Ricoh via the InfoPrint Solutions joint venture." },
    ],
    relatedClusters: ["historical-manufacturers", "printing-history", "printer-technologies", "print-servers", "enterprise-printing"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "hewlett-packard",
    name: "Hewlett-Packard (HP)",
    aliases: ["HP", "HP Inc."],
    hqCountry: "United States",
    status: "active",
    categories: ["laser", "inkjet", "mfp", "production", "wide-format", "office", "consumer"],
    modelFamilies: [
      F("LaserJet", "laser", "current"),
      F("DeskJet", "inkjet", "current"),
      F("OfficeJet", "inkjet", "current"),
      F("DesignJet", "wide-format", "current"),
      F("PageWide", "inkjet", "current"),
      F("Neverstop", "laser", "current"),
      F("Smart Tank", "inkjet", "current"),
      F("ENVY", "inkjet", "current"),
      F("Indigo", "production", "current"),
      F("ThinkJet", "inkjet", "historical"),
    ],
    relationships: [
      { to: "canon", type: "supplies-engines-to", note: "Canon has supplied laser print engines used in HP LaserJet printers." },
      { to: "samsung", type: "acquired-printing-business-of", note: "HP acquired Samsung's printer business in 2017." },
    ],
    relatedClusters: ["historical-manufacturers", "printer-technologies", "print-languages", "desktop-publishing", "mobile-printing"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "canon",
    name: "Canon",
    hqCountry: "Japan",
    status: "active",
    categories: ["laser", "inkjet", "mfp", "production", "wide-format", "office", "consumer"],
    modelFamilies: [
      F("PIXMA", "inkjet", "current"),
      F("MAXIFY", "inkjet", "current"),
      F("imageCLASS", "laser", "current"),
      F("i-SENSYS", "laser", "current"),
      F("imageRUNNER", "mfp", "current"),
      F("imagePRESS", "production", "current"),
      F("imagePROGRAF", "wide-format", "current"),
      F("SELPHY", "inkjet", "current"),
      F("BJ (Bubble Jet)", "inkjet", "historical"),
    ],
    relationships: [
      { to: "hewlett-packard", type: "supplies-engines-to", note: "Canon supplied laser engines used in HP LaserJet printers." },
    ],
    relatedClusters: ["historical-manufacturers", "printer-technologies", "multifunction-printers", "mobile-printing"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "epson",
    name: "Epson",
    aliases: ["Seiko Epson"],
    hqCountry: "Japan",
    status: "active",
    categories: ["dot-matrix", "inkjet", "receipt", "wide-format", "office", "consumer"],
    modelFamilies: [
      F("EcoTank", "inkjet", "current"),
      F("WorkForce", "inkjet", "current"),
      F("Expression", "inkjet", "current"),
      F("SureColor", "wide-format", "current"),
      F("Stylus", "inkjet", "historical"),
      F("LX / FX / LQ", "dot-matrix", "historical"),
      F("TM", "receipt", "current"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printer-technologies", "print-languages", "receipt-printing", "thermal-printing"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "brother",
    name: "Brother",
    aliases: ["Brother Industries"],
    hqCountry: "Japan",
    status: "active",
    categories: ["laser", "inkjet", "mfp", "label", "typewriter", "office", "consumer"],
    modelFamilies: [
      F("HL", "laser", "current"),
      F("MFC", "mfp", "current"),
      F("DCP", "mfp", "current"),
      F("ADS", "scanner", "current"),
      F("P-touch", "label", "current"),
      F("QL", "label", "current"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printer-technologies", "label-printing", "multifunction-printers"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "lexmark",
    name: "Lexmark",
    hqCountry: "United States",
    status: "active",
    categories: ["laser", "inkjet", "mfp", "enterprise", "office"],
    modelFamilies: [
      F("CS", "laser", "current"),
      F("CX", "mfp", "current"),
      F("MS", "laser", "current"),
      F("MX", "mfp", "current"),
    ],
    relationships: [
      { to: "ibm", type: "spun-off-from", note: "Lexmark was formed in 1991 from IBM's information-products / printer business." },
    ],
    relatedClusters: ["historical-manufacturers", "printer-technologies", "enterprise-printing"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "ricoh",
    name: "Ricoh",
    hqCountry: "Japan",
    status: "active",
    categories: ["copier", "laser", "mfp", "production", "office"],
    modelFamilies: [
      F("IM", "mfp", "current"),
      F("SP", "laser", "current"),
      F("Pro", "production", "current"),
      F("Aficio", "mfp", "historical"),
      F("InfoPrint", "production", "historical"),
    ],
    relationships: [
      { to: "ibm", type: "acquired-printing-business-of", note: "Ricoh took over IBM's printing business through the InfoPrint Solutions joint venture." },
    ],
    relatedClusters: ["historical-manufacturers", "copiers", "multifunction-printers", "office-infrastructure", "enterprise-printing"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "kyocera",
    name: "Kyocera",
    aliases: ["Kyocera Document Solutions", "Kyocera Mita"],
    hqCountry: "Japan",
    status: "active",
    categories: ["laser", "mfp", "office", "enterprise"],
    modelFamilies: [
      F("ECOSYS", "laser", "current"),
      F("TASKalfa", "mfp", "current"),
      F("FS", "laser", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printer-technologies", "toner-technologies", "multifunction-printers"],
    flagship: true,
    sourcing: "flagship-verified",
  },
  {
    id: "konica-minolta",
    name: "Konica Minolta",
    hqCountry: "Japan",
    status: "active",
    categories: ["copier", "laser", "mfp", "production", "office"],
    modelFamilies: [
      F("bizhub", "mfp", "current"),
      F("AccurioPress", "production", "current"),
      F("magicolor", "laser", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "copiers", "multifunction-printers", "office-infrastructure"],
    flagship: true,
    sourcing: "flagship-verified",
  },

  // ---------------- Roster (documented structure; pages planned) ----------------
  {
    id: "sharp",
    name: "Sharp",
    hqCountry: "Japan",
    status: "active",
    categories: ["copier", "laser", "mfp", "office"],
    modelFamilies: [F("MX", "mfp", "current"), F("AR", "mfp", "historical")],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "copiers", "multifunction-printers"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "oki",
    name: "OKI",
    aliases: ["Oki Electric", "OKI Data"],
    hqCountry: "Japan",
    status: "active",
    categories: ["led", "laser", "dot-matrix", "office"],
    modelFamilies: [
      F("Microline", "dot-matrix", "historical"),
      F("C", "led", "current"),
      F("MC", "led", "current"),
      F("B", "led", "current"),
      F("Pro", "led", "current"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printer-technologies"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "dell",
    name: "Dell",
    hqCountry: "United States",
    status: "historical",
    categories: ["laser", "inkjet", "mfp", "office"],
    modelFamilies: [],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printer-technologies"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "samsung",
    name: "Samsung",
    aliases: ["Samsung Electronics printing", "Samsung Electro-Mechanics"],
    hqCountry: "South Korea",
    status: "absorbed",
    categories: ["laser", "mfp", "office", "consumer"],
    modelFamilies: [
      F("ML", "laser", "historical"),
      F("CLP / CLX", "laser", "historical"),
      F("SCX", "mfp", "historical"),
      F("Xpress", "laser", "historical"),
    ],
    relationships: [
      { to: "hewlett-packard", type: "subsidiary-of", note: "Samsung's printer business was acquired by HP in 2017." },
    ],
    relatedClusters: ["historical-manufacturers", "printer-technologies"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "kodak",
    name: "Kodak",
    aliases: ["Eastman Kodak"],
    hqCountry: "United States",
    status: "active",
    categories: ["inkjet", "production", "consumer"],
    modelFamilies: [
      F("ESP", "inkjet", "historical"),
      F("Prosper", "production", "current"),
      F("NexPress", "production", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printer-technologies", "publishing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "apple",
    name: "Apple",
    hqCountry: "United States",
    status: "historical",
    categories: ["dot-matrix", "laser", "inkjet"],
    modelFamilies: [
      F("ImageWriter", "dot-matrix", "historical"),
      F("LaserWriter", "laser", "historical"),
      F("StyleWriter", "inkjet", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "desktop-publishing", "print-languages"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "panasonic",
    name: "Panasonic",
    hqCountry: "Japan",
    status: "historical",
    categories: ["dot-matrix", "laser", "mfp", "fax"],
    modelFamilies: [
      F("KX-P", "dot-matrix", "historical"),
      F("KX-MB", "mfp", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "fax-technologies", "printer-technologies"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "nec",
    name: "NEC",
    hqCountry: "Japan",
    status: "historical",
    categories: ["dot-matrix", "laser"],
    modelFamilies: [
      F("Pinwriter", "dot-matrix", "historical"),
      F("Silentwriter", "laser", "historical"),
      F("SuperScript", "laser", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printer-technologies"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "citizen",
    name: "Citizen",
    aliases: ["Citizen Systems"],
    hqCountry: "Japan",
    status: "active",
    categories: ["receipt", "thermal-label", "dot-matrix"],
    modelFamilies: [F("CT-S", "receipt", "current"), F("CL-S", "thermal-label", "current")],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "receipt-printing", "label-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "zebra",
    name: "Zebra Technologies",
    hqCountry: "United States",
    status: "active",
    categories: ["thermal-label", "barcode", "industrial", "mobile"],
    modelFamilies: [
      F("ZT", "thermal-label", "current"),
      F("ZD", "thermal-label", "current"),
      F("ZQ", "mobile", "current"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "label-printing", "barcode-systems", "thermal-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "toshiba-tec",
    name: "Toshiba TEC",
    hqCountry: "Japan",
    status: "active",
    categories: ["thermal-label", "barcode", "mfp"],
    modelFamilies: [
      F("B-EX", "thermal-label", "current"),
      F("e-STUDIO", "mfp", "current"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "label-printing", "barcode-systems", "multifunction-printers"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "fujitsu",
    name: "Fujitsu",
    hqCountry: "Japan",
    status: "active",
    categories: ["dot-matrix", "scanner", "thermal"],
    modelFamilies: [
      F("DL", "dot-matrix", "historical"),
      F("fi", "scanner", "current"),
      F("ScanSnap", "scanner", "current"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "scanning", "printer-technologies"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "star-micronics",
    name: "Star Micronics",
    hqCountry: "Japan",
    status: "active",
    categories: ["receipt", "dot-matrix", "thermal"],
    modelFamilies: [
      F("TSP", "receipt", "current"),
      F("mPOP", "receipt", "current"),
      F("SP", "dot-matrix", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "receipt-printing", "thermal-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "seiko",
    name: "Seiko Instruments",
    hqCountry: "Japan",
    status: "active",
    categories: ["thermal", "thermal-label"],
    modelFamilies: [],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "thermal-printing", "label-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "casio",
    name: "Casio",
    hqCountry: "Japan",
    status: "historical",
    categories: ["laser", "label"],
    modelFamilies: [],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printer-technologies", "label-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "sato",
    name: "SATO",
    hqCountry: "Japan",
    status: "active",
    categories: ["thermal-label", "barcode", "industrial"],
    modelFamilies: [F("CL", "thermal-label", "current"), F("CT", "thermal-label", "current")],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "label-printing", "barcode-systems"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "printronix",
    name: "Printronix",
    hqCountry: "United States",
    status: "active",
    categories: ["line-printer", "thermal-label", "industrial"],
    modelFamilies: [F("P (line matrix)", "line-printer", "current"), F("T (thermal)", "thermal-label", "current")],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "label-printing", "enterprise-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "tally",
    name: "Tally",
    aliases: ["Mannesmann Tally", "TallyGenicom"],
    hqCountry: "Germany",
    status: "absorbed",
    categories: ["dot-matrix", "line-printer"],
    modelFamilies: [],
    relationships: [
      { to: "genicom", type: "merged-to-form", note: "Tally and Genicom combined as TallyGenicom." },
      { to: "printronix", type: "subsidiary-of", note: "TallyGenicom's line-printer business became part of Printronix." },
    ],
    relatedClusters: ["historical-manufacturers", "enterprise-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "genicom",
    name: "Genicom",
    aliases: ["TallyGenicom"],
    hqCountry: "United States",
    status: "absorbed",
    categories: ["dot-matrix", "line-printer"],
    modelFamilies: [],
    relationships: [
      { to: "tally", type: "merged-to-form", note: "Genicom and Tally combined as TallyGenicom." },
    ],
    relatedClusters: ["historical-manufacturers", "enterprise-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "datamax",
    name: "Datamax",
    aliases: ["Datamax-O'Neil"],
    hqCountry: "United States",
    status: "absorbed",
    categories: ["thermal-label", "barcode"],
    modelFamilies: [F("I-Class", "thermal-label", "historical"), F("M-Class", "thermal-label", "historical")],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "label-printing", "barcode-systems"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "olivetti",
    name: "Olivetti",
    hqCountry: "Italy",
    status: "historical",
    categories: ["typewriter", "dot-matrix", "mfp"],
    modelFamilies: [F("Lettera", "typewriter", "historical")],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printing-history", "office-infrastructure"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "facit",
    name: "Facit",
    hqCountry: "Sweden",
    status: "historical",
    categories: ["typewriter", "dot-matrix"],
    modelFamilies: [],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printing-history"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "dec",
    name: "Digital Equipment Corporation (DEC)",
    aliases: ["DEC", "Digital"],
    hqCountry: "United States",
    status: "absorbed",
    categories: ["dot-matrix", "line-printer", "laser"],
    modelFamilies: [
      F("LA (DECwriter)", "dot-matrix", "historical"),
      F("LN", "laser", "historical"),
    ],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printing-history", "printer-technologies"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "commodore",
    name: "Commodore",
    hqCountry: "United States",
    status: "historical",
    categories: ["dot-matrix"],
    modelFamilies: [F("MPS", "dot-matrix", "historical")],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printing-history"],
    flagship: false,
    sourcing: "documented-structure",
  },
  {
    id: "sinclair",
    name: "Sinclair",
    hqCountry: "United Kingdom",
    status: "historical",
    categories: ["thermal"],
    modelFamilies: [F("ZX Printer", "thermal", "historical")],
    relationships: [],
    relatedClusters: ["historical-manufacturers", "printing-history", "thermal-printing"],
    flagship: false,
    sourcing: "documented-structure",
  },
];

export const getManufacturer = (id: string): Manufacturer | undefined =>
  MANUFACTURERS.find((m) => m.id === id);

export const flagshipManufacturers = (): Manufacturer[] =>
  MANUFACTURERS.filter((m) => m.flagship);

export function manufacturerTotals() {
  return MANUFACTURERS.reduce(
    (acc, m) => ({
      total: acc.total + 1,
      flagship: acc.flagship + (m.flagship ? 1 : 0),
      modelFamilies: acc.modelFamilies + m.modelFamilies.length,
    }),
    { total: 0, flagship: 0, modelFamilies: 0 },
  );
}
