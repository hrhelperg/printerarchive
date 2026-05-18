import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  section: "guides",
  slug: "how-inkjet-printers-work",
  title: "How Inkjet Printers Work",
  description:
    "How an inkjet printer forms an image by precisely placing tiny droplets of liquid ink onto paper.",
  summary:
    "Inkjet printing builds an image from very small droplets of liquid ink fired from a moving print head. Droplet placement, ink behaviour, and paper all shape the final result.",
  difficulty: "introductory",
  estimatedTime: "7 min read",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "Inkjet printers place tiny droplets of liquid ink to build an image.",
        "A print head moves across the page while paper advances beneath it.",
        "Paper type strongly affects how ink sits and dries, and therefore the final quality.",
      ],
    },
    {
      kind: "paragraph",
      text: "An inkjet printer creates an image by depositing extremely small droplets of liquid ink onto paper in carefully controlled positions. Many such droplets together form text, lines, and continuous-looking images.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The print head",
    },
    {
      kind: "paragraph",
      text: "The print head contains many tiny nozzles. As the head moves across the width of the page, it fires droplets on demand while the paper is advanced step by step beneath it, so the image is built up in bands.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Placing droplets accurately",
    },
    {
      kind: "paragraph",
      text: "Print quality depends heavily on placing the right droplets in the right place at the right time. Coordinating nozzle firing with head movement and paper advance is what allows fine detail and smooth tone.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The role of paper",
    },
    {
      kind: "paragraph",
      text: "Because the ink is a liquid, the paper matters. Absorbent plain paper can let ink spread slightly, while papers designed for inkjet output hold droplets more precisely, which is why photo output looks best on appropriate media.",
    },
    {
      kind: "callout",
      tone: "tip",
      title: "Inkjet strengths",
      text: "Liquid ink and fine droplet control make inkjet well suited to photographs and smooth colour gradients.",
    },
  ],
  faqs: [
    {
      q: "How is inkjet different from laser printing?",
      a: "Inkjet places liquid ink droplets onto paper. Laser printing uses static electricity and dry toner fused with heat. They are different processes with different strengths.",
    },
    {
      q: "Why does paper choice matter for inkjet?",
      a: "Because the ink is liquid, the surface it lands on affects how much it spreads and how it dries, which changes sharpness and colour.",
    },
    {
      q: "Why is inkjet often preferred for photos?",
      a: "Fine droplet control and liquid ink allow smooth tonal transitions, which suits photographic images.",
    },
  ],
  related: [
    { section: "guides", slug: "how-laser-printers-work" },
    { section: "glossary", slug: "dpi" },
  ],
  published: "2026-05-18",
  updated: "2026-05-18",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "how inkjet printers work",
    "inkjet printing",
    "print head",
    "droplets",
  ],
  cluster: "printing-technology",
};

export default entry;
