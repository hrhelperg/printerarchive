import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "history-of-printers",
  title: "The History of Printers",
  description:
    "How printing technology progressed from early hand methods through mechanical presses to modern non-impact digital printers.",
  summary:
    "Printing evolved over centuries from manual reproduction to mechanised presses, then to electromechanical and finally non-impact digital printers. This overview traces that progression by era and by the principles that defined each step.",
  era: "From early printing to the digital era",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Printing moved from manual reproduction, to mechanised presses, to electromechanical and then non-impact methods.",
        "Impact printing physically strikes the page; non-impact printing forms images without striking it.",
        "Inkjet and laser printing are the dominant non-impact methods in modern personal and office use.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Early printing methods",
    },
    {
      kind: "paragraph",
      text: "Long before electronic devices, printing meant transferring ink from a prepared surface onto paper by hand or with simple mechanical aids. Techniques such as woodblock printing and, later, movable type allowed text and images to be reproduced far more consistently than copying by hand.",
    },
    {
      kind: "paragraph",
      text: "These methods established the core idea that endures today: a reusable representation of a page is created once and then transferred to many sheets.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The mechanical press era",
    },
    {
      kind: "paragraph",
      text: "Mechanised presses increased the speed and scale of printing dramatically. Industrial printing made books, newspapers, and forms widely available and turned printing into a large-scale production process rather than a craft performed sheet by sheet.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Impact printing and the office",
    },
    {
      kind: "paragraph",
      text: "As printing moved into offices and then into computing, impact printing became common. Impact devices form characters by physically striking an inked ribbon against paper. Typewriters and, later, computer-driven impact printers such as dot matrix printers worked on this principle.",
    },
    {
      kind: "paragraph",
      text: "Impact printers were durable and able to print through multi-part forms, but they were comparatively noisy and limited in graphical quality.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The non-impact revolution",
    },
    {
      kind: "paragraph",
      text: "Non-impact printing forms an image without striking the page. Two non-impact approaches came to dominate personal and office printing: inkjet, which places tiny droplets of liquid ink, and laser printing, which uses static electricity and fused toner powder.",
    },
    {
      kind: "paragraph",
      text: "Non-impact printers are quieter, faster for many tasks, and far more capable with graphics and photographs than earlier impact machines.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The digital and networked era",
    },
    {
      kind: "paragraph",
      text: "Modern printers are computing devices in their own right. They accept jobs over networks, are shared among many users, and are often combined with scanning and copying in a single multifunction device. Mobile printing standards now let phones and tablets print without device-specific drivers.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "A note on dates",
      text: "This overview is organised by era and principle rather than by specific dates, because precise attribution of many printing milestones is contested or varies by source.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "Early printing",
          text: "Hand and block methods, then movable type, establish reusable page reproduction.",
        },
        {
          period: "Mechanical press era",
          text: "Industrial presses scale printing to mass production.",
        },
        {
          period: "Impact era",
          text: "Typewriters and dot matrix printers bring printing to offices and computers.",
        },
        {
          period: "Non-impact era",
          text: "Inkjet and laser printing become dominant for personal and office use.",
        },
        {
          period: "Digital and networked era",
          text: "Networked, multifunction, and mobile-capable printers become standard.",
        },
      ],
    },
  ],
  faqs: [
    {
      q: "What is the difference between impact and non-impact printing?",
      a: "Impact printing physically strikes an inked ribbon against the page to form characters. Non-impact printing, such as inkjet and laser, forms images without striking the page.",
    },
    {
      q: "Why does this article avoid specific invention dates?",
      a: "Attribution and dating of many printing milestones differ between sources. The archive prefers to describe principles and eras rather than assert contested dates.",
    },
    {
      q: "Which printing methods are most common today?",
      a: "For personal and office use, inkjet and laser printing are the dominant non-impact methods.",
    },
  ],
  related: [
    { section: "history", slug: "history-of-fax-machines" },
    { section: "history", slug: "evolution-of-laser-printing" },
    { section: "history", slug: "evolution-of-inkjet-printers" },
    { section: "history", slug: "dot-matrix-printers-explained" },
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "guides", slug: "how-inkjet-printers-work" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "history of printers",
    "printing history",
    "impact printing",
    "non-impact printing",
  ],
  cluster: "printing-history",
};

export default entry;
