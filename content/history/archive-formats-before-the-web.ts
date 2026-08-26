import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "archive-formats-before-the-web",
  title: "Floppies, Modems, and Why Archive Formats Became Mandatory",
  description:
    "Floppy capacity and modem throughput were hard ceilings. How they made bundling plus compression a format requirement, not a convenience, before the web existed.",
  summary:
    "It is tempting to describe archive formats as a convenience — a tidy way to keep related files together and shave a few bytes off the total. That reads the history backwards. Bundling and compression became a single, universal habit because two physical ceilings sat across every route a document could take: the fixed capacity of a diskette, and the throughput a telephone line would carry. The formats did not merely respond to those ceilings; in at least one case the ceiling is written into the specification itself.",
  era: "From diskette to dial-up",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "The high-density 3.5-inch diskette holds 1,474,560 bytes — 1440 KiB. \"1.44 MB\" is a hybrid marketing unit (1000 × 1024) peculiar to this medium, and the argument turns on the byte count, not the label.",
        "Multi-volume splitting was not an optional nicety. PKWARE's own ZIP specification records that spanning support \"has been provided for DOS formatted floppy diskettes\" — the physical medium is named in the format document.",
        "Dial-up throughput climbed in standards-body increments, and the final rung was asymmetric: ITU-T V.90 permits up to 56 000 bit/s downstream but caps upstream at 33 600 bit/s, so sending an archive stayed expensive long after receiving one got cheap.",
        "Binaries moving by mail or news had to survive a 7-bit path, and the encodings that made that possible inflate a payload by roughly a third — a second, independent reason compression was not optional.",
        "This is the pre-web era, not the pre-internet era. ZIP dates from 1989 and travelled across bulletin boards, FidoNet, commercial services and internet FTP archives at the same time.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "Before the web, not before the internet",
    },
    {
      kind: "paragraph",
      text: "The framing matters because getting it wrong makes the causation unintelligible. ZIP was published in 1989, roughly two decades after the network that became the Internet was already carrying traffic. What ZIP and its contemporaries predate is the web and, more to the point, the web's mainstream arrival in the mid-1990s. During that gap, files moved through a patchwork of channels that overlapped rather than succeeded one another: dial-up bulletin boards, the FidoNet store-and-forward mail network, commercial services such as CompuServe, and internet FTP archives. One small documentary accident illustrates the overlap: the earliest dated public alarm about the lawsuit that produced ZIP is a June 1988 Usenet post written by the maintainer of the SIMTEL20 archives, a person who sat at the junction of the two worlds.",
    },
    {
      kind: "paragraph",
      text: "What all of those channels had in common was not a protocol. It was a set of limits. Every one of them ended, at some point, in a diskette, a modem, or both. Kevin Driscoll's history of the modem world makes the general case for treating that infrastructure as a coherent culture with its own economics; this page is concerned with the narrower and more mechanical question of what the infrastructure did to file formats.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The ceiling, stated in bytes",
    },
    {
      kind: "paragraph",
      text: "Any argument that begins \"the floppy disk forced compression\" has to get the floppy disk's own arithmetic right, and the popular figure is wrong. The high-density 3.5-inch diskette does not hold 1.44 megabytes in either sense of the word. Its formatted capacity is 1,474,560 bytes: 80 tracks per side, two sides, 18 sectors per track, 512 bytes per sector. That is 1440 KiB, or about 1.41 MiB in binary units, or about 1.47 MB in decimal ones. The familiar \"1.44 MB\" is a hybrid — 1440 multiplied by a decimal-sounding label — and it is essentially unique to this medium. When the whole causal claim rests on a size ceiling, the ceiling should be quoted in bytes.",
    },
    {
      kind: "paragraph",
      text: "The medium's own history is likewise more segmented than the usual retelling. Sony introduced a 3.5-inch microfloppy in 1981, a Microfloppy Industry Committee specification standardised the mechanics the following year, and the high-density variant that yields 1,474,560 bytes belongs to a later generation again — the period documented in Ecma International's 1987 standard for 90 mm flexible disk cartridges, with an ISO counterpart following in 1989. Compressing three developments into one sentence about Sony inventing the 1.44 MB disk is the standard error here, and the Computer History Museum's storage timeline is the corrective.",
    },
    {
      kind: "figure",
      image: {
        src: "/images/history/archive-formats-before-the-web--sony-3-5-inch-floppy-pack.jpg",
        alt: "Sealed retail pack of ten Sony 3.5-inch 2HD floppy disks",
        width: 800,
        height: 700,
        caption: "A sealed pack of ten Sony 3.5-inch 2HD diskettes \u2014 the capacity ceiling as it was actually bought, one box at a time.",
        credit: {
          source: "User:Iswoar, via Wikimedia Commons",
          url: "https://commons.wikimedia.org/wiki/File:Package_of_ten_3.5-inch_floppy_disks_(2HD)_from_Sony.jpg",
          license: "CC BY 3.0",
        },
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "The diskette written into the specification",
    },
    {
      kind: "paragraph",
      text: "The strongest version of this page's claim is not rhetorical, and does not depend on plausibility. PKWARE's .ZIP File Format Specification — APPNOTE.TXT, the document that made ZIP implementable by anyone — devotes a section to splitting and spanning. In the 6.3.3 revision, section 8.1.1 introduces spanning as the process of segmenting a ZIP file across multiple removable volumes, and states that the support \"has been provided for DOS formatted floppy diskettes.\" Section 8.3.2 goes further and specifies how DOS spanned archives are sequenced, so that a reader can reassemble the segments in order.",
    },
    {
      kind: "paragraph",
      text: "That is a format specification naming a specific physical medium and describing a feature that exists because of it. The dependency runs from the diskette to the format, in the format's own words. Very few claims in computing history are available in that form, and it is worth being precise about what it does and does not prove: it proves that removable-media capacity shaped the container's design. It does not prove that ZIP originated the idea.",
    },
    {
      kind: "editorialAside",
      title: "Spanning was general practice, not an invention",
      text: "Multi-volume archives were widespread across the DOS archiver field — the ARC-era tools, ARJ, LHA and RAR all did it, and the Library of Congress still lists file spanning among the headline capabilities of the RAR archive format family. ZIP's distinctive contribution was not spanning but spanning documented in a freely published specification that any implementer could read. Crediting the feature to one program mistakes documentation for invention.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The second ceiling: the throughput ladder",
    },
    {
      kind: "paragraph",
      text: "The other limit was the telephone line, and it moved slowly and in named steps. The first widely imitated dial-up bulletin board, Ward Christensen and Randy Suess's CBBS, ran at 300 bit/s; the two described their system themselves in BYTE in November 1978, which is the source worth citing, and they later said they had claimed a four-week build rather than the actual two, so the conventional 16 February 1978 date is settled by tradition rather than by record. From there the ITU-T recommendations mark the rungs: V.32bis at 14 400 bit/s in 1991, V.34 at up to 33 600 bit/s in the mid-1990s, and V.90 in 1998.",
    },
    {
      kind: "paragraph",
      text: "V.90 is the rung that is most often described wrongly. It is not a symmetric 56 kbit/s link. The recommendation pairs a digital modem with an analogue one and permits up to 56 000 bit/s downstream while capping the upstream direction at 33 600 bit/s. For a reader trying to understand why archive discipline persisted into the late 1990s, that asymmetry is the whole point: downloading a file library got cheaper by more than two orders of magnitude over twenty years, while the upstream direction stopped at V.34's rate and went no further.",
    },
    {
      kind: "archivalTable",
      caption:
        "Time to move one full 1,474,560-byte diskette's worth of data at each rung of the standards ladder. Ideal-line arithmetic only — the figures exclude protocol overhead, retransmission and line noise, all of which were substantial in practice.",
      headers: ["Rung", "Rate", "Approximate transfer time"],
      rows: [
        ["CBBS as described by its authors, 1978", "300 bit/s", "About 11 hours"],
        ["ITU-T V.32bis, 1991", "14 400 bit/s", "About 14 minutes"],
        [
          "ITU-T V.34, mid-1990s",
          "Up to 33 600 bit/s",
          "About 6 minutes",
        ],
        [
          "ITU-T V.90 downstream, 1998",
          "Up to 56 000 bit/s",
          "About 3.5 minutes",
        ],
        [
          "ITU-T V.90 upstream, 1998",
          "Capped at 33 600 bit/s",
          "About 6 minutes",
        ],
      ],
      sources: [
        "Ward Christensen and Randy Suess, \"Hobbyist Computerized Bulletin Board\", BYTE, November 1978",
        "ITU-T Recommendations V.32bis, V.34 and V.90",
        "Capacity figure derived from the 90 mm high-density cartridge geometry",
      ],
    },
    {
      kind: "paragraph",
      text: "Read the table as an argument about editing rather than about speed. When a transfer is charged by the minute and can fail near the end, the difference between a 900 KB archive and a 1.4 MB directory of loose files is not aesthetic. It determines whether the transfer is attempted at all, and whether a failure costs a minute or an evening.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The encoding tax that made compression mandatory twice",
    },
    {
      kind: "paragraph",
      text: "There was a third constraint, independent of both storage and speed, and it applied specifically to the routes documents took through mail and news. Those paths were designed for 7-bit text and could not be relied upon to carry arbitrary binary data intact. The workaround — uuencode in the earlier Unix and Usenet tradition, and later MIME's base-64 encoding — re-expresses binary content in a restricted printable character set.",
    },
    {
      kind: "paragraph",
      text: "The arithmetic of that re-expression is unforgiving and easy to state backwards. Base-64 represents every three bytes of input as four printable characters, so the encoded form is about a third larger than the original before line breaks and headers are counted. Encoding does not compress; it inflates. A document set that had to travel by mail therefore paid a penalty precisely at the point where the pipe was narrowest, which is why compressing before encoding was not a refinement but a precondition. This is the second, wholly separate reason the era's habits fused bundling and compression into one reflex.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Two shapes of answer to the same problem",
    },
    {
      kind: "paragraph",
      text: "Two traditions solved this differently, and the difference is architectural rather than merely stylistic. The Unix world kept the two jobs apart: tar bundles a directory tree into a single stream, and a separate compressor squeezes that stream, with the gzip format eventually specified as an open IETF document. The result composes cleanly — any compressor can be swapped in behind any bundler — but it means the compressed object has no internal index, so reaching one file inside it means running the whole stream.",
    },
    {
      kind: "paragraph",
      text: "The DOS and bulletin-board world fused the two into one container. ZIP compresses each member file individually and records where each one starts in a central directory at the end of the archive, which the Library of Congress describes as a design for cross-platform data exchange and efficient storage of a set of related files. That structure buys random access to any member and, crucially for this story, makes it possible to cut the container across volume boundaries in a defined way — the spanning behaviour that section 8 documents. One design optimises for composability; the other optimises for a world where the archive would be split across diskettes and pulled apart selectively at the far end.",
    },
    {
      kind: "heading",
      level: 2,
      text: "Why the DOS world changed containers",
    },
    {
      kind: "paragraph",
      text: "The 1988 dispute between System Enhancement Associates and PKWARE was about ARC, not about ZIP; ZIP was created after the settlement and partly because of it, since the terms are reported to have barred PKWARE from continuing with ARC-compatible products. What matters for an argument about physical ceilings is only the consequence: the replacement container's spanning behaviour arrived in a specification published for anyone to implement rather than as vendor behaviour that had to be reverse-engineered, which is why this page can quote the format document at all. The litigation itself, the thinness of its surviving record, and the corrections that record demands — release dating, the \"public domain\" claim, the limits of ISO/IEC 21320-1, the patent position — are traced in this archive's page on ZIP and the ARC lawsuit.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What the ceilings left behind",
    },
    {
      kind: "paragraph",
      text: "Both ceilings are gone. Removable media capacities long ago outran anything a document set is likely to need, and consumer links are measured in megabits per second in both directions. What survived is the habit and the container. A ZIP file is still the default answer when a group of documents has to move as one object, still the substrate under office document formats and installer packages, and still the thing an operating system opens without being asked. The random-access central directory that made the format practical to split across diskettes is the same structure that makes it practical to read one file out of a large archive today.",
    },
    {
      kind: "paragraph",
      text: "The lesson is narrower than it looks, and worth keeping narrow. It is not that constraints breed elegance. It is that a widely adopted format is an artefact of the routes its files had to take, and that the evidence for this is sometimes sitting in the specification, naming the medium out loud. Read section 8 of APPNOTE and you are reading a diskette drive, described in the present tense, decades after the last one shipped.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "1978",
          text: "Christensen and Suess describe CBBS, a dial-up bulletin board running at 300 bit/s, in BYTE. The conventional founding date is settled by tradition rather than by record, and the authors themselves said the build timeline was presented generously.",
        },
        {
          period: "1981–1982",
          text: "Sony introduces a 3.5-inch microfloppy; a Microfloppy Industry Committee specification standardises the mechanics the following year. Neither is the high-density variant.",
        },
        {
          period: "c. 1985",
          text: "ARC establishes bundling-plus-compression as the de facto standard on DOS bulletin boards. It is not the first archiver — CP/M .LBR libraries with separate squeeze utilities precede it.",
        },
        {
          period: "1987–1989",
          text: "Ecma International publishes its standard for 90 mm flexible disk cartridges, with an ISO counterpart in 1989. The high-density format holds 1,474,560 bytes.",
        },
        {
          period: "1988",
          text: "SEA sues PKWARE over ARC, its trademark and its interface. The earliest dated public artefact is a June Usenet post; the case settles out of court later that year with no published opinion.",
        },
        {
          period: "1989",
          text: "ZIP appears, with a specification published for anyone to implement. Its initial compression methods are Shrinking, Reducing and Imploding — not Deflate.",
        },
        {
          period: "1990–1991",
          text: "Katz's string-search and compression patent is filed and granted, assigned to PKWARE. ITU-T V.32bis sets the 14 400 bit/s rung.",
        },
        {
          period: "Early 1990s",
          text: "Deflate becomes ZIP's effective default with the PKZIP 2.x generation, displacing the LZW-based Shrinking method.",
        },
        {
          period: "1996",
          text: "Deflate and gzip are each specified as open IETF documents, making the compression core implementable independently of any vendor.",
        },
        {
          period: "1998",
          text: "ITU-T V.90 permits up to 56 000 bit/s downstream but caps upstream at 33 600 bit/s — the asymmetry that kept uploading expensive.",
        },
        {
          period: "2015",
          text: "ISO/IEC 21320-1 standardises a restricted ZIP profile by normative reference to APPNOTE 6.3.3, decades after universal support was already a fact.",
        },
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "Scope and dating",
      text: "This page is about document and file distribution. It deliberately stays out of warez and courier-scene practice, which is a later phenomenon with a separate and much thinner evidence base. Where dates in this period are contested — the first BBS, ZIP's release, the SEA settlement's terms — the text says so rather than choosing a version, and prefers a decade or a season to a false precision.",
    },
  ],
  faqs: [
    {
      q: "How much does a \"1.44 MB\" floppy disk actually hold?",
      a: "1,474,560 bytes, which is 1440 KiB — about 1.41 MiB in binary units or about 1.47 MB in decimal ones. The \"1.44 MB\" label is a hybrid of the two conventions (1440 × 1000-style labelling) and is essentially unique to this medium.",
    },
    {
      q: "Did the ZIP format invent multi-volume or spanned archives?",
      a: "No. Splitting archives across removable volumes was general practice among DOS-era archivers, and the Library of Congress documents file spanning as a feature of the RAR archive format family. What ZIP contributed was spanning described in an openly published specification — section 8 of APPNOTE, which names DOS formatted floppy diskettes explicitly.",
    },
    {
      q: "Why did compression matter for files sent by email or Usenet?",
      a: "Those paths were built for 7-bit text, so binary data had to be re-encoded to survive them — uuencode first, later MIME base-64. Base-64 turns every three bytes into four printable characters, inflating the payload by roughly a third. Compressing before encoding was the only way to offset a penalty applied at the narrowest part of the route.",
    },
    {
      q: "Is ZIP an open standard?",
      a: "Not in the usual sense. The specification is freely published and PKWARE permits its use for building software that reads and writes ZIP, but the document itself is described as PKWARE's exclusive property rather than as public domain. ISO/IEC 21320-1:2015 standardises only a restricted profile — stored or deflate methods, no encryption — by normative reference to PKWARE's specification.",
    },
    {
      q: "Was 56k dial-up fast in both directions?",
      a: "No. ITU-T V.90 permits up to 56 000 bit/s downstream but caps the upstream direction at 33 600 bit/s. That asymmetry is why contributing files to an archive site remained slow and costly even after downloading from one had become comparatively cheap.",
    },
  ],
  related: [
    { section: "history", slug: "zip-format-and-the-arc-lawsuit" },
    { section: "guides", slug: "spooling-architecture" },
    { section: "workflows", slug: "scan-to-email" },
    { section: "history", slug: "early-network-printing-systems" },
    { section: "history", slug: "enterprise-document-management" },
    { section: "history", slug: "history-of-desktop-publishing" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "archive formats history",
    "zip format history",
    "floppy disk capacity",
    "disk spanning",
    "multi-volume archive",
    "dial-up modem speeds",
    "bbs file distribution",
    "base64 encoding overhead",
    "appnote zip specification",
    "tar and gzip",
  ],
  cluster: "office-infrastructure",
  sources: [
    {
      title:
        "ZIP File Format (PKWARE), FDD ID fdd000354, Sustainability of Digital Formats",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000354.shtml",
      publisher: "Library of Congress",
    },
    {
      title:
        "APPNOTE.TXT — .ZIP File Format Specification, Version 6.3.3 (1 September 2012), including §5.1 compression methods and §8 splitting and spanning",
      url: "https://www.loc.gov/preservation/digital/formats/digformatspecs/APPNOTE%2820120901%29_Version_6.3.3.txt",
      publisher: "PKWARE, Inc. (archived copy hosted by the Library of Congress)",
    },
    {
      title:
        "ISO/IEC 21320-1:2015 — Information technology — Document Container File — Part 1: Core",
      url: "https://www.iso.org/standard/60101.html",
      publisher: "ISO",
    },
    {
      title:
        "RFC 1951 — DEFLATE Compressed Data Format Specification version 1.3",
      url: "https://www.rfc-editor.org/rfc/rfc1951",
      publisher: "IETF / RFC Editor",
    },
    {
      title: "RFC 1952 — GZIP file format specification version 4.3",
      url: "https://www.rfc-editor.org/rfc/rfc1952",
      publisher: "IETF / RFC Editor",
    },
    {
      title:
        "US Patent 5,051,745 — String searcher, and compressor using same (inventor Phillip W. Katz, assignee PKWare Inc.)",
      url: "https://patents.google.com/patent/US5051745A/en",
      publisher: "USPTO / Google Patents",
    },
    {
      title:
        "US Patent 4,558,302 — High speed data compression and decompression apparatus and method (LZW)",
      url: "https://patents.google.com/patent/US4558302A/en",
      publisher: "USPTO / Google Patents",
    },
    {
      title:
        "ECMA-125: Data Interchange on 90 mm Flexible Disk Cartridges — ISO Type 302 (1987)",
      url: "https://ecma-international.org/publications-and-standards/standards/ecma-125/",
      publisher: "Ecma International",
    },
    {
      title: "ITU-T Recommendation V.32bis",
      url: "https://www.itu.int/rec/T-REC-V.32bis/en",
      publisher: "International Telecommunication Union",
    },
    {
      title:
        "ITU-T Recommendation V.34 — A modem operating at data signalling rates of up to 33 600 bit/s",
      url: "https://www.itu.int/rec/T-REC-V.34/en",
      publisher: "International Telecommunication Union",
    },
    {
      title:
        "ITU-T Recommendation V.90 — up to 56 000 bit/s downstream and 33 600 bit/s upstream",
      url: "https://www.itu.int/rec/T-REC-V.90/en",
      publisher: "International Telecommunication Union",
    },
    {
      title:
        "Ward Christensen and Randy Suess, \"Hobbyist Computerized Bulletin Board\", BYTE vol. 3 no. 11 (November 1978), p. 150",
      url: "https://archive.org/details/byte-magazine-1978-11",
      publisher: "BYTE Magazine — full issue scan, Internet Archive",
    },
    {
      title:
        "1976: Minicomputers stimulate floppy disk sales — The Storage Engine timeline",
      url: "https://www.computerhistory.org/storageengine/minicomputers-stimulate-floppy-disk-sales/",
      publisher: "Computer History Museum",
    },
    {
      title:
        "RAR Archive File Format Family, FDD ID fdd000450, Sustainability of Digital Formats",
      url: "https://www.loc.gov/preservation/digital/formats/fdd/fdd000450.shtml",
      publisher: "Library of Congress",
    },
    {
      title: "PRONOM technical registry, PUID fmt/411 — RAR Archive 2.9",
      url: "https://www.nationalarchives.gov.uk/PRONOM/fmt/411",
      publisher: "The National Archives (UK)",
    },
    {
      title:
        "\"Phil Katz (PKARC author) sued by SEA (ARC author)\" — Usenet post to comp.sys.ibm.pc by Keith B. Petersen, maintainer of the SIMTEL20 archives, 14 June 1988",
      url: "http://www.bbsdocumentary.com/library/CONTROVERSY/LAWSUITS/SEA/pksuit.txt",
      publisher: "BBS Documentary Library (Jason Scott)",
    },
    {
      title: "Kevin Driscoll, The Modem World: A Prehistory of Social Media",
      url: "https://yalebooks.yale.edu/book/9780300248142/the-modem-world/",
      publisher: "Yale University Press, 2022",
    },
  ],
};

export default entry;
