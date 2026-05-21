import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "how-laser-printers-work",
  title: "How Laser Printers Work",
  description:
    "How a laser printer turns a digital page into printed output using static charge, toner, and heat.",
  summary:
    "Laser printing is an electrophotographic process: a charged drum is selectively discharged to form an image, toner is attracted to it, transferred to paper, and fused permanently with heat.",
  difficulty: "introductory",
  estimatedTime: "8 min read",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Laser printing relies on static electricity, not liquid ink.",
        "An image is formed on a drum, developed with toner, transferred to paper, and fused with heat.",
        "Pages are often warm because the toner is melted onto the paper by a fuser.",
      ],
    },
    {
      kind: "paragraph",
      text: "A laser printer does not paint a page with liquid. Instead it uses controlled static electricity to place a fine powder, called toner, exactly where the image should be, then bonds that powder permanently to the paper with heat.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Charging the drum",
    },
    {
      kind: "paragraph",
      text: "At the heart of the printer is a light-sensitive cylinder, often called the drum. The printer first gives the drum a uniform electrical charge so that its entire surface is in a known starting state.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Writing the image with light",
    },
    {
      kind: "paragraph",
      text: "A laser, steered across the drum, selectively changes the charge wherever the page should carry toner. This produces an invisible electrostatic pattern on the drum that corresponds to the text and graphics of the page.",
    },
    {
      kind: "figure",
      image: {
        src: "/images/guides/how-laser-printers-work--laserwriter-mechanism.jpg",
        alt: "Labeled photograph of the laser-generation assembly removed from an Apple LaserWriter, showing the laser unit and mirror path",
        width: 1600,
        height: 1200,
        caption:
          "The laser-generation assembly from a dismantled Apple LaserWriter — the unit that steers the beam across the drum.",
        credit: {
          source: "Megodenas, via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:LaserimprimanteLegendee.jpg",
          license: "Public domain",
        },
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "Developing with toner",
    },
    {
      kind: "paragraph",
      text: "Toner is then brought close to the drum. Because of the charge difference, toner is attracted only to the areas the laser addressed, developing the invisible pattern into a visible powder image on the drum.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Transfer and fusing",
    },
    {
      kind: "paragraph",
      text: "The toner image is transferred from the drum onto a sheet of paper. At this point the powder is only resting on the surface. The paper then passes through a heated fuser, which melts the toner so it bonds permanently to the fibres of the page.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Why laser output is sharp",
      text: "Because the image is defined by a finely steered beam and dry toner rather than spreading liquid, laser printers are well suited to crisp text and line work.",
    },
  ],
  faqs: [
    {
      q: "Why is paper warm when it leaves a laser printer?",
      a: "The fuser uses heat to melt toner onto the page, so sheets are often warm immediately after printing.",
    },
    {
      q: "Does a laser printer use ink?",
      a: "No. It uses toner, a dry powder, which is fused to paper with heat rather than absorbed as a liquid.",
    },
    {
      q: "Why are laser printers good for text?",
      a: "The image is formed by a precisely controlled beam and dry toner, which produces sharp edges well suited to text and line art.",
    },
  ],
  related: [
    { section: "guides", slug: "how-inkjet-printers-work" },
    { section: "guides", slug: "laser-vs-inkjet-printers" },
    { section: "history", slug: "evolution-of-laser-printing" },
    { section: "glossary", slug: "toner" },
    { section: "glossary", slug: "dpi" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "how laser printers work",
    "laser printing",
    "toner",
    "electrophotography",
  ],
  cluster: "printing-technology",
};

export default entry;
