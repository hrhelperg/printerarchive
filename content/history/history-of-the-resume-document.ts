import type { HistoryEntry } from "@/lib/content/types";

const entry: HistoryEntry = {
  section: "history",
  slug: "history-of-the-resume-document",
  title: "The Résumé as a Document: How Machines Shaped a Page",
  description:
    "The résumé has no inventor. Its shape was set by the machines that made and read the page — typewriter, photocopier, flatbed scanner, and finally a parser.",
  summary:
    "Almost every popular history of the résumé opens with Leonardo da Vinci and the year 1482, and almost none of it survives contact with the holding library's own catalogue record. This page is not that story. It is an account of a document genre with no inventor and no founding text, whose shape was set and reset by whatever machine happened to be responsible for producing the page — and, from the end of the 1980s, for reading it.",
  era: "From typed sheet to parsed record",
  body: [
    {
      kind: "keyTakeaways",
      items: [
        "No person or institution is documented as having invented the résumé. The fullest scholarly account describes a genre disseminated through business-writing textbooks between 1914 and 1939, not decreed by employers.",
        "The Leonardo da Vinci story fails on the holding institution's own record: the folio is dated circa 1485 rather than 1482, carries no date at all, is stated not to be an autograph, survives as a draft, and is generically a letter of self-recommendation.",
        "The conventions of the typed résumé — one column, flush-left blocks, a sheet size chosen before the first keystroke — read as constraints of ribbon-strike composition rather than as design decisions.",
        "A patent filed by Resumix on 1 May 1989 describes scanning a printed résumé, splitting it into blocks by whitespace analysis, running OCR, and matching the result against a grammar of synonyms. Résumés were already being scanned for keyword search; what this patent describes is the page being read for structure.",
        "The arc ends with the page dissolving into a schema: HR-XML's Resume 2.0 in 2002, and the openly published HR Open Standards schemas that succeeded it.",
      ],
    },
    {
      kind: "heading",
      level: 2,
      text: "A genre nobody signed",
    },
    {
      kind: "paragraph",
      text: "The question \"who invented the résumé\" assumes that document genres are invented the way mechanisms are — at a point, by a person, in a form that can be exhibited. Very few genres work like that, and the résumé does not appear to be one of the exceptions. The most substantial scholarly treatment of how it stabilised is Randall Popken's study of American business-discourse textbooks published between 1914 and 1939, which argues that the form was disseminated pedagogically: textbook authors, rather than employers or any single originator, named the sections, printed model versions, and by copying one another turned a loose set of options into a convention.",
    },
    {
      kind: "paragraph",
      text: "That conclusion matters for everything that follows, because a genre spread through instruction manuals inherits the working assumptions of the people writing the manuals. In the period Popken examines, those assumptions were bounded by what a typist could physically produce on a single pass through a machine.",
    },
    {
      kind: "paragraph",
      text: "The résumé sheet also did not appear from nothing. It detached from an older and better-documented parent genre, the letter of application, whose long-run development in America between 1880 and 1960 is the subject of Erik Thelen's 1998 dissertation. That text is paywalled and has not been read for this page; it is cited here as an existing body of documentary work on the parent genre, not as the source of any particular date. The structural event that makes \"the résumé\" a distinct object at all — the separation of a factual summary sheet from the persuasive letter it travelled with — is a reading this page takes from the textbook record Popken describes, not a finding imported from Thelen.",
    },
    {
      kind: "paragraph",
      text: "The word itself is a separate trap. The earliest evidence recorded for the English noun is from 1782 — but in the sense of a summary or abstract, which is what the French borrowing means. The job-application sense is a twentieth-century development, and the sense-by-sense datings in the Oxford English Dictionary sit behind a paywall, so no year for that sense is printed here. Several careers-site histories collapse the two, producing the odd spectacle of an eighteenth-century résumé written by nobody applying for anything.",
    },
    {
      kind: "paragraph",
      text: "Two further claims circulate widely and are simply left out. One is that the term curriculum vitae was \"first used in the sixteenth century\". The other is that the CV descends from the portfolios of medieval artisans. Neither could be traced to a primary document or to scholarship; both appear to survive on repetition within recruitment writing alone.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The 1482 story, checked against the record",
    },
    {
      kind: "paragraph",
      text: "No claim about the résumé travels further than the assertion that Leonardo da Vinci wrote the first one in 1482, addressed it to Ludovico Sforza, and that it is therefore the earliest known CV. The document at the centre of this is real and can be checked: a sheet in the Codex Atlanticus, folio 1082 recto, held by the Veneranda Biblioteca Ambrosiana in Milan. Almost every other element of the sentence weakens on contact with the holding institution's own record.",
    },
    {
      kind: "archivalTable",
      caption:
        "The popular claim set against what the holding institution's record supports",
      headers: ["As usually told", "What the record supports"],
      rows: [
        [
          "Written in 1482",
          "The Ambrosiana record dates the folio to circa 1485. The letter carries no date of its own, and the dating is debated in the scholarship rather than settled.",
        ],
        [
          "Written by Leonardo",
          "The record states that it is not an autograph, but written by a friend or collaborator — usually explained as a copyist engaged because Leonardo's own penmanship was poor.",
        ],
        [
          "Sent to Ludovico Sforza",
          "What survives is a draft, among Leonardo's own papers. No evidence of a sent or received fair copy is carried in the record.",
        ],
        [
          "It is a résumé",
          "Generically it is a letter of self-recommendation: nine numbered claims about military engineering and a tenth about art, with no employment chronology, no dates, no education section and no reverse-chronological structure.",
        ],
        [
          "Held at the Louvre / the Vatican / the Uffizi",
          "Codex Atlanticus f. 1082r, Veneranda Biblioteca Ambrosiana, Milan.",
        ],
      ],
      sources: [
        "Veneranda Biblioteca Ambrosiana holding record for Codex Atlanticus f. 1082r",
      ],
    },
    {
      kind: "paragraph",
      text: "Taken singly, any one of these might be dismissed as a quibble. Taken together they remove every property that would make the document a résumé rather than a letter. What is left is a draft self-recommendation — a supplication, in the vocabulary of its own century — in which a man lists what he could build for a prospective patron. That is a genuinely interesting object, and it belongs to the history of patronage rather than to the history of a hiring document.",
    },
    {
      kind: "editorialAside",
      title: "Where the story comes from",
      text: "The \"earliest known CV\" framing does not appear in Leonardo scholarship; it appears in careers writing, where it is repeated without a citation to the Ambrosiana or to any Leonardo specialist. A related sourcing problem affects the rest of the online résumé timeline: a large share of it traces back to two 2018 posts by the anthropologist Ilana Gershon on the CaMP Anthropology blog, re-blogged onward until the chain of attribution disappears. Gershon's own book-length treatment of hiring documents (University of Chicago Press, 2017) is the citable version, and it is cited here in preference to the aggregators.",
    },
    {
      kind: "heading",
      level: 3,
      text: "A second overreach: the 1917 Army form",
    },
    {
      kind: "paragraph",
      text: "A quieter myth holds that the United States Army invented the job application form in 1917. The underlying history is real and unusually well documented. The Committee on Classification of Personnel in the Army was constituted during the First World War, and its work is set out at length in the Adjutant-General's 1919 volume The Personnel System of the United States Army — a 738-page primary source that is out of copyright and freely readable. What the Committee standardised, however, were qualification cards, rating scales and classification forms for placing men already in uniform. That is an internal classification instrument, not a document a job-seeker composed and submitted. The volume is worth reading precisely because it shows how much printed apparatus a large organisation needed before it could sort people by recorded attributes; it does not show the invention of the application form.",
    },
    {
      kind: "heading",
      level: 2,
      text: "What the typewriter left in the shape of the page",
    },
    {
      kind: "paragraph",
      text: "For most of the twentieth century a résumé was a typed sheet, and the typewriter is not a neutral instrument. A typebar or single-element typewriter advances the carriage by a fixed escapement and drives one character at a time through an inked ribbon. Every consequence of that mechanism is legible in the conventional résumé: monospaced characters, so that columns align only if they are counted out in character cells; a single text column, because escapement composition has no way to run two independent columns down one page; flush-left blocks with a ragged right edge, because justifying would mean respacing a line already struck; and emphasis carried by capitals, underscoring and blank lines, because a machine with one type element has no second typeface to switch to.",
    },
    {
      kind: "paragraph",
      text: "The sheet size was fixed before the first keystroke, and nothing reflowed. A résumé running four lines long could not be rescued by tightening leading or shaving a margin; it had to be retyped from the top. That, far more than any aesthetic doctrine, is the plausible origin of the compressed register of résumé prose — the dropped pronouns, the telegraphic verb phrases, the dates driven hard against a tab stop. The style is a response to a machine that charged the full price of the page for every revision.",
    },
    {
      kind: "paragraph",
      text: "Reproduction imposed a second discipline. Multiple copies came either from a single strike driven through interleaved carbon — the capability that kept impact printing in service long after quieter methods existed — or, later, from a photocopier, which faithfully reproduces whatever contrast the original has and punishes faint ribbon strike and pencilled correction. Daisy-wheel printing sharpened the strike and made a typed page copy cleanly, and it relaxed part of the older constraint — higher-end machines such as the Diablo 630 could space proportionally — but the composition grammar of the typed page had already set, and it did not move.",
    },
    {
      kind: "callout",
      tone: "note",
      title: "Which page is the one page?",
      text: "The \"one-page résumé\" is not a universal rule; it is a page-size convention, and it is usually stated without a unit. American practice assumes US Letter at 8.5 by 11 inches. European practice, and the later Europass form, assume A4 under ISO 216. The two sheets differ in proportion as well as area, so a layout that fits one need not fit the other, and any rule about length is under-specified until the sheet is named.",
    },
    {
      kind: "heading",
      level: 2,
      text: "A brief window of typographic freedom",
    },
    {
      kind: "paragraph",
      text: "At the end of the 1980s the constraint lifted. Laser printers and page-layout software put proportional type, multiple weights, adjustable leading, rules and genuine multi-column composition onto ordinary desks — the shift traced in this archive's history of desktop publishing. For the first time an individual could set a personal document the way a compositor would, and the résumé, being the one document nearly everybody produces about themselves, was an obvious beneficiary. Instruction literature of the period duly filled with advice about typefaces and white space.",
    },
    {
      kind: "paragraph",
      text: "The timing is the irony of this whole history. Typographic control arrived on the desk at almost exactly the moment a second reader appeared who could not use any of it.",
    },
    {
      kind: "heading",
      level: 2,
      text: "1989: the page is read for structure",
    },
    {
      kind: "paragraph",
      text: "On 1 May 1989 four inventors at Resumix — Sobotka, Leung, Inn and Tokuda — filed a patent application titled \"Method and apparatus for computer understanding and manipulation of minimally formatted text documents\". It was granted as US 5,164,899 on 17 November 1992, and it remains the most precise surviving description of what was happening to the résumé page. The specification sets out optically scanning a printed document, decomposing the page image into blocks of contiguous text by analysing vertical and horizontal whitespace, converting those blocks to characters by OCR, and then matching the resulting text against a grammar of synonyms, classes and templates in order to recover fields.",
    },
    {
      kind: "paragraph",
      text: "Two features of that sequence deserve dwelling on. The first is that splitting a page at wide valleys of whitespace is precisely the technique the document-image literature calls page segmentation; the résumé was, from this point, being read by the same family of algorithms that read newspapers and forms. The second is subtler and is the heart of the matter: whitespace an author had used as visual breathing room was now load-bearing. It had become the signal by which a machine decided where one block of meaning ended and the next began. A design choice had quietly turned into a parsing cue.",
    },
    {
      kind: "paragraph",
      text: "A companion patent, US 5,197,004, covers automatic categorisation of applicants from résumés using an extractor built on word patterns — evidence that structured extraction and classification, not merely scanning, were what the company considered its invention.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "Assignee drift",
      text: "The current assignee field on US 5,164,899 reads Yahoo Inc., a consequence of Resumix passing through Yahoo's résumé and HotJobs businesses. It is a Resumix invention filed in 1989. Citing it as a Yahoo patent misdates the idea by roughly a decade.",
    },
    {
      kind: "paragraph",
      text: "A paper by Lance Tokuda presented at the 1990 Innovative Applications of Artificial Intelligence conference describes the deployed system and, unusually for commercial software of the period, names customers with installation dates. It also describes the workflow the software displaced: résumés analysed by hand, sorted, photocopied, distributed to hiring managers, then filed by job category, month and last name — a paper-handling operation whose costs were measured in copies and cabinets.",
    },
    {
      kind: "archivalTable",
      caption:
        "Installations named in the vendor's own IAAI-90 paper, with the dates it gives",
      headers: ["Organisation", "Installation date as stated"],
      rows: [
        ["Sun Microsystems", "1/89"],
        ["Advanced Micro Devices", "5/89"],
        ["Bank of America", "7/89"],
        ["National Semiconductor", "11/89"],
        ["Digital Equipment Corporation", "1/90"],
        ["General Motors", "5/90"],
        ["AT&T", "6/90"],
      ],
      sources: [
        "Lance Tokuda, \"Computers Assist Humans in Human Resources\", IAAI-90 Proceedings, AAAI, 1990",
      ],
    },
    {
      kind: "paragraph",
      text: "The same paper calls the system \"the world's first intelligent resume-processing system\". That is the vendor's own phrasing appearing in a peer-reviewed applied-AI venue, and it is repeated here as a claim rather than adopted as a finding — particularly because the paper itself states that OCR-based systems offering keyword text search over résumés already existed. The novelty being asserted is structured extraction, not scanning. For the same reason, Resumix is not described on this page as the first applicant tracking system.",
    },
    {
      kind: "paragraph",
      text: "By early 1993 the technology had reached federal practice. The United States General Accounting Office reported that the incoming administration acquired a Resumix system on a sole-source basis in February 1993, on urgency grounds, having judged it superior for entering résumés, searching for candidates and compiling lists. Whatever one makes of the procurement itself, the report is durable archival evidence that within four years a federal office could treat scanning-and-extraction as the obvious way to handle a stack of résumés — and could argue urgency for it.",
    },
    {
      kind: "figure",
      image: {
        src: "/images/history/history-of-the-resume-document--us5164899-fig5-sample-resume.png",
        alt: "Patent drawing FIG. 5: a monospaced typewritten resume showing a JOB OBJECTIVE line, a SUMMARY OF QUALIFICATIONS list, and an EXPERIENCE section in which employment dates sit in a narrow left-hand column beside indented job descriptions",
        width: 1400,
        height: 1386,
        caption: "Part of FIG. 5 of US 5,164,899 (Sobotka, Leung, Inn and Tokuda, assigned to Resumix, filed 1 May 1989, granted 17 November 1992) \u2014 the sample document the patent's parser is demonstrated on. Its abstract names resumes first among the \u201cminimally formatted\u201d documents it handles, and the specification argues that a resume is understood through \u201cspatial and textual analysis\u201d rather than grammar. The contact block above this crop has been omitted.",
        credit: {
          source: "US Patent and Trademark Office, via Google Patents",
          url: "https://patents.google.com/patent/US5164899A/en",
          license: "Public domain (US patent drawing)",
        },
      },
    },
    {
      kind: "heading",
      level: 2,
      text: "Writing for the scanner",
    },
    {
      kind: "paragraph",
      text: "Once a résumé had a machine reader, the instruction literature reorganised itself to serve that reader. Each step in the Resumix pipeline has an obvious failure mode, and the scannable-résumé advice of the period reads as a list of them: rules and boxes defeat block segmentation, reversed type defeats binarisation, two columns defeat reading order, and header content falls outside the segmented body. None of that is advice about how to persuade a reader. It is advice about how to survive binarisation, segmentation and character recognition — the same considerations this archive sets out for OCR on forms, and the same constraints described in its treatment of layout analysis.",
    },
    {
      kind: "paragraph",
      text: "Amare and Manning's 2009 study in Business and Professional Communication Quarterly follows the rhetorical consequences. Their account traces how, as employer search tools became the first audience, the pressure on résumé writers migrated: from misrepresenting facts, to manipulating formatting, to keyword practices aimed at the retrieval system rather than at the person who would eventually read the page. This is the point at which a résumé is unambiguously written for two audiences whose preferences conflict — one that rewards visual hierarchy, and one that is confused by it.",
    },
    {
      kind: "callout",
      tone: "warning",
      title: "A statistic this page does not use",
      text: "The widely circulated claim that a fixed share of résumés — usually given as 75 per cent — is rejected by applicant tracking software before any human sees it has no traceable primary source. It appears to originate in recruitment marketing and is repeated without attribution. It is omitted here rather than hedged.",
    },
    {
      kind: "heading",
      level: 2,
      text: "A CV defined by law",
    },
    {
      kind: "paragraph",
      text: "The clearest evidence that the CV had become a document format rather than a habit is that a legislature specified one. Decision No 2241/2004/EC of the European Parliament and of the Council, of 15 December 2004, established a single Community framework for the transparency of qualifications and competences and set out the Europass-CV, built on a common European format for curricula vitae, with the template itself carried in the annexes. For those purposes a CV was a defined arrangement of sections on an A4 form — not a genre described in a manual, but an instrument with an annex.",
    },
    {
      kind: "paragraph",
      text: "That instrument no longer stands. It was repealed by Decision (EU) 2018/646 of 18 April 2018, which took effect on 21 May 2018 and replaced the fixed-template arrangement with a platform of online services for skills and qualifications. The direction of travel is the same as everywhere else in this history: a printed template gives way to an interface over stored fields. Anyone citing the 2004 Decision as current EU law is citing repealed text.",
    },
    {
      kind: "heading",
      level: 2,
      text: "The page becomes a record",
    },
    {
      kind: "paragraph",
      text: "On 14 May 2002 the HR-XML Consortium, founded in 1999, announced Resume 2.0. The specification moved from DTDs to W3C XML Schema and was folded into the consortium's staffing data-exchange standards. The announcement's own framing of the problem is the entire argument in one phrase: employers, it said, were drowning in a sea of unstructured résumés. The remedy proposed was not better page design. It was to stop treating the page as the document.",
    },
    {
      kind: "paragraph",
      text: "That work continues under the HR Open Standards Consortium — the same organisation, renamed — which publishes JSON and XML schemas openly and has had further résumé and CV standardisation in progress. Under a schema a résumé is a set of typed fields: employment entries with start and end dates, education records, skills, identifiers. The page a candidate sends is one rendering of that set, produced for the benefit of the human still in the loop.",
    },
    {
      kind: "paragraph",
      text: "The difference between the two ends of this history can be stated in a single line. The Resumix pipeline of 1989 read a page and tried to recover the record. A schema starts from the record and generates the page. Everything now called résumé advice sits somewhere between those two positions.",
    },
    {
      kind: "paragraph",
      text: "The scanned-page stage has been demoted rather than abolished. A fixed-layout file — commonly a PDF, and for long-term deposit a PDF/A profile built to stay readable — carries its own text layer, so an extractor can read the characters directly without an optical pass. That removes the OCR step; it does not remove the parsing step, and it does not remove the fact that a layout with two columns or a decorative header can still be recovered in the wrong order.",
    },
    {
      kind: "paragraph",
      text: "This is why a résumé tool today is not usefully described as a page-layout program, even though a page is what comes out of it. Its real job is the one the history arrived at: hold a structured record of dated entries, keep that record cheaply revisable — the very thing the typewriter made impossible — and emit a document that survives both readings, the human's and the extractor's. That is the category the genre turned into once layout stopped being the thing that carried the meaning.",
    },
    {
      kind: "paragraph",
      text: "Read whole, the résumé has no origin document and no inventor, but it does have a mechanism. Each time the machine responsible for the page changed — escapement typewriter, photocopier, laser printer, flatbed scanner, parser, schema — the genre changed with it, and the advice literature reorganised around the new constraint, usually without telling readers that it was describing a machine rather than a reader's taste. That is a considerably more useful thing to know about the document than any story about 1482.",
    },
    {
      kind: "timeline",
      events: [
        {
          period: "c.1485",
          text: "Codex Atlanticus f. 1082r, Leonardo's draft letter of self-recommendation to Ludovico Sforza, as dated by the Veneranda Biblioteca Ambrosiana. The sheet itself bears no date and the record states it is not an autograph.",
        },
        {
          period: "1782",
          text: "Earliest evidence recorded for the English noun \"résumé\" — in the sense of a summary or abstract, not a job-application document.",
        },
        {
          period: "1914–1939",
          text: "The period of American business-discourse textbooks examined by Popken, in which the résumé is described, prescribed and disseminated as a teachable form.",
        },
        {
          period: "1917–1919",
          text: "The Committee on Classification of Personnel in the Army develops qualification cards, rating scales and classification forms; documented in the Adjutant-General's 1919 volume.",
        },
        {
          period: "1 May 1989",
          text: "Resumix files the patent application describing scanning, whitespace block segmentation, OCR and grammar-based field extraction from a printed résumé.",
        },
        {
          period: "1989–1990",
          text: "Installations named in the vendor's IAAI-90 paper, from Sun Microsystems in January 1989 through AT&T in June 1990.",
        },
        {
          period: "17 November 1992",
          text: "US 5,164,899 granted.",
        },
        {
          period: "February–June 1993",
          text: "A Resumix system is acquired on a sole-source basis for the incoming US administration; the GAO reports on the acquisition in June.",
        },
        {
          period: "14 May 2002",
          text: "HR-XML Consortium announces Resume 2.0, moving from DTDs to W3C XML Schema and folding the résumé into staffing data-exchange standards.",
        },
        {
          period: "15 December 2004",
          text: "Decision No 2241/2004/EC establishes the Europass framework, with a common European CV format set out in its annexes.",
        },
        {
          period: "21 May 2018",
          text: "Decision (EU) 2018/646 takes effect, repealing the 2004 Decision and replacing the fixed template arrangement with a platform of online services.",
        },
      ],
    },
    {
      kind: "researchInset",
      title: "Claims this page deliberately does not make",
      items: [
        "That Leonardo da Vinci wrote the earliest CV, or that the letter dates to 1482, or that Leonardo wrote it out himself, or that it was ever sent.",
        "That the letter is held at the Louvre, the Vatican or the Uffizi. It is Codex Atlanticus f. 1082r at the Veneranda Biblioteca Ambrosiana, Milan.",
        "That the noun \"résumé\" meant a job-application document in 1782. The 1782 evidence is for the sense \"summary, abstract\".",
        "That curriculum vitae was first used in the sixteenth century, or that the CV descends from medieval artisans' portfolios. No primary or scholarly citation for either was found.",
        "That the United States Army invented the job application form in 1917. It standardised qualification cards for classifying serving soldiers.",
        "That Resumix was the first applicant tracking system, or that the scanning of résumés began with it. Its own IAAI-90 paper says OCR keyword-search systems already existed.",
        "That US 5,164,899 is a Yahoo patent. It is a Resumix invention of 1989; the assignee field reflects later corporate ownership.",
        "That a separate résumé sheet became routine in the late 1930s, or that job advertisements began consistently requesting résumés in the early 1950s. Both dates circulate attributed secondhand to a 2003 source whose title, journal and volume could not be confirmed.",
        "That any fixed percentage of résumés is rejected by software before a human reads them.",
        "That Decision No 2241/2004/EC or its annexed CV template is current EU law.",
      ],
    },
    {
      kind: "callout",
      tone: "note",
      title: "Sourcing scope",
      text: "This page is built from primary documents where they exist — two patent specifications, a conference paper by the vendor's own engineer, a government audit report, two EU legal instruments, a 1919 Adjutant-General's volume, and a holding library's catalogue record — supported by peer-reviewed genre scholarship. Where the popular account and the record disagree, both are printed and the disagreement is named. Where a widely repeated claim could not be traced past a secondhand attribution, it is listed above as a claim not made rather than repeated with a hedge. The references consulted are listed below.",
    },
  ],
  faqs: [
    {
      q: "Did Leonardo da Vinci write the first résumé in 1482?",
      a: "The document exists — Codex Atlanticus f. 1082r at the Veneranda Biblioteca Ambrosiana in Milan — but the popular framing does not hold up. The Ambrosiana dates the folio to circa 1485 and the sheet carries no date; the record states it is not an autograph but written by a friend or collaborator; what survives is a draft with no evidence of a sent fair copy; and generically it is a letter of self-recommendation with no employment chronology, dates or education section.",
    },
    {
      q: "Who invented the résumé, then?",
      a: "No one is documented as having invented it. The best-evidenced account is Randall Popken's 1999 study of American business-discourse textbooks from 1914 to 1939, which argues that the form was standardised and spread by textbook authors rather than decreed by employers or originated by an individual. The résumé sheet itself detached from an older genre, the letter of application.",
    },
    {
      q: "Why did \"scannable résumé\" advice tell people to strip out formatting?",
      a: "Because systems of the kind Resumix patented in 1989 split a scanned page into blocks by whitespace analysis before OCR-ing it and matching the result against a grammar of terms — the pipeline described in US 5,164,899. Rules, boxes, shading, two-column layouts and header content all interfere with binarisation, segmentation or reading order, so the advice literature was effectively teaching people to write for the failure modes of a document-recognition system.",
    },
    {
      q: "Is the Europass CV still an EU-specified template?",
      a: "Not in its original legal form. Decision No 2241/2004/EC set out a common European CV format in its annexes, but that Decision was repealed by Decision (EU) 2018/646, which took effect on 21 May 2018 and replaced the arrangement with a platform of online services for skills and qualifications. Citing the 2004 annexes as current EU law is a mistake.",
    },
    {
      q: "Why is \"the one-page résumé\" an incomplete rule?",
      a: "Because it does not say which page. American practice assumes US Letter at 8.5 by 11 inches; European practice and the Europass form assume A4 under ISO 216. The two sheets differ in proportion as well as area, so a layout that fits on one may not fit on the other.",
    },
  ],
  related: [
    { section: "history", slug: "history-of-desktop-publishing" },
    { section: "history", slug: "enterprise-document-management" },
    { section: "guides", slug: "daisy-wheel-printing" },
    { section: "guides", slug: "impact-printing" },
    { section: "guides", slug: "ocr-layout-analysis" },
    { section: "guides", slug: "paper-sizes" },
    { section: "workflows", slug: "ocr-for-forms" },
    { section: "tools", slug: "pdf-a" },
    { section: "models", slug: "diablo-630" },
  ],
  published: "2026-08-26",
  updated: "2026-08-26",
  author: "PrinterArchive Editorial",
  editor: "PrinterArchive Editorial",
  keywords: [
    "history of the resume",
    "resume document format",
    "cv history",
    "leonardo da vinci resume myth",
    "resumix patent",
    "scannable resume",
    "resume parsing history",
    "hr-xml resume 2.0",
    "europass cv format",
    "typewriter document conventions",
  ],
  cluster: "office-infrastructure",
  modernTools: ["cv-resume"],
  sources: [
    {
      title:
        "Method and apparatus for computer understanding and manipulation of minimally formatted text documents (US 5,164,899 A), filed 1 May 1989, granted 17 November 1992",
      url: "https://patents.google.com/patent/US5164899A/en",
      publisher: "USPTO, via Google Patents — original assignee Resumix, Inc.",
    },
    {
      title:
        "Method and apparatus for automatic categorization of applicants from resumes (US 5,197,004)",
      url: "https://patents.google.com/patent/US5197004",
      publisher: "USPTO, via Google Patents — assignee Resumix, Inc.",
    },
    {
      title: "Computers Assist Humans in Human Resources (Lance Tokuda)",
      url: "https://cdn.aaai.org/IAAI/1990/IAAI90-014.pdf",
      publisher: "IAAI-90 Proceedings, AAAI, 1990",
    },
    {
      title:
        "White House: Acquisition of Automated Resume Processing System (GGD-93-117)",
      url: "https://www.gao.gov/products/ggd-93-117",
      publisher: "U.S. General Accounting Office, 17 June 1993",
    },
    {
      title:
        "The Pedagogical Dissemination of a Genre: The Resume in American Business Discourse Textbooks, 1914–1939 (Randall L. Popken)",
      url: "https://eric.ed.gov/?id=EJ581310",
      publisher: "JAC: A Journal of Composition Theory 19 (1999), pp. 91–116",
    },
    {
      title:
        "The evolution of the application letter in America: 1880–1960 (Erik Anthony Thelen)",
      url: "https://www.proquest.com/openview/c667f4f78efc09d22634f45d1b17d812/1?pq-origsite=gscholar&cbl=18750&diss=y",
      publisher: "PhD dissertation, University of Wisconsin–Milwaukee, 1998",
    },
    {
      title:
        "Writing for the Robot: How Employer Search Tools Have Influenced Résumé Rhetoric and Ethics (Nicole Amare and Alan Manning)",
      url: "https://journals.sagepub.com/doi/10.1177/1080569908330383",
      publisher:
        "Business and Professional Communication Quarterly 72(1), 2009, pp. 35–60",
    },
    {
      title:
        "Down and Out in the New Economy: How People Find (or Don't Find) Work Today (Ilana Gershon)",
      url: "https://press.uchicago.edu/ucp/books/book/chicago/D/bo25799564.html",
      publisher: "University of Chicago Press, 2017",
    },
    {
      title:
        "HR-XML Consortium Approves New XML Resume Specification (Resume 2.0), 14 May 2002",
      url: "https://xml.coverpages.org/HR-XML-ResumeSpecification200205.html",
      publisher: "HR-XML Consortium announcement, archived at the OASIS Cover Pages",
    },
    {
      title: "HR Open Standards — standards library",
      url: "https://www.hropenstandards.org/standards",
      publisher: "HR Open Standards Consortium, Inc. (founded 1999 as HR-XML)",
    },
    {
      title:
        "Decision No 2241/2004/EC on a single Community framework for the transparency of qualifications and competences (Europass)",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/?uri=celex:32004D2241",
      publisher: "EUR-Lex, CELEX 32004D2241 — no longer in force",
    },
    {
      title:
        "Decision (EU) 2018/646 on a common framework for better services for skills and qualifications (Europass), repealing Decision No 2241/2004/EC",
      url: "https://eur-lex.europa.eu/legal-content/EN/TXT/PDF/?uri=CELEX:32018D0646",
      publisher: "EUR-Lex, CELEX 32018D0646",
    },
    {
      title:
        "The personnel system of the United States army, Vol. 1: History of the personnel system developed by the Committee on Classification of Personnel in the Army",
      url: "https://archive.org/details/personnelsystemo01unitiala",
      publisher:
        "United States Adjutant-General's Office, 1919 — digitised by the Internet Archive",
    },
    {
      title: "résumé, n. — etymology and earliest evidence",
      url: "https://www.oed.com/dictionary/resume_n",
      publisher:
        "Oxford English Dictionary (sense-by-sense datings are paywalled)",
    },
    {
      title: "Letter to Ludovico il Moro — Codex Atlanticus f. 1082r",
      url: "https://artsandculture.google.com/asset/letter-to-ludovico-il-moro-leonardo-da-vinci/DAEncWvZmqoodA?hl=en",
      publisher: "Veneranda Biblioteca Ambrosiana, Milan (holding record)",
    },
  ],
};

export default entry;
