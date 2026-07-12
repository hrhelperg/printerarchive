import type { ModelEntry } from "@/lib/content/types";

const entry: ModelEntry = {
  "section": "models",
  "slug": "teletype-model-33",
  "title": "Teletype Model 33",
  "description": "The Teletype Model 33 was an electromechanical ASCII teleprinter from Teletype Corporation (1963), widely used as an early low-cost computer terminal.",
  "summary": "The Teletype Model 33 is an electromechanical teleprinter introduced by Teletype Corporation in 1963 for light-duty office and data-communications use. It printed at up to ten characters per second (110 baud) using a cylindrical typewheel struck by a hammer, and Wikipedia describes it as one of the first products to adopt the newly standardized seven-bit ASCII code, in an uppercase-only 64-character subset. Sold in ASR, KSR and RO versions — the ASR adding an eight-hole paper-tape reader and punch — it became one of the most widely used computer terminals of the 1960s and 1970s, with over half a million built by 1975 according to Wikipedia. Its maker, Teletype Corporation, was a subsidiary of Western Electric within the AT&T (Bell System) organization.",
  "manufacturer": "Teletype Corporation (subsidiary of Western Electric / AT&T)",
  "category": "Electromechanical teleprinter (computer terminal)",
  "era": "1960s–1970s data-communications terminal era",
  "introduced": "1963",
  "discontinued": "1981",
  "alsoKnownAs": [
    "ASR-33",
    "Model 33 ASR",
    "Model 33 KSR",
    "Model 33 RO",
    "Teletype 33"
  ],
  "specs": [
    {
      "label": "Manufacturer",
      "value": "Teletype Corporation, a subsidiary of Western Electric within the AT&T system",
      "source": "Wikipedia; Computer History Museum"
    },
    {
      "label": "Device class",
      "value": "Electromechanical teleprinter designed for light-duty office use",
      "source": "Wikipedia"
    },
    {
      "label": "Introduced",
      "value": "1963",
      "source": "Wikipedia; Computer History Museum (catalog X1557.98, ca. 1963)"
    },
    {
      "label": "Production ended",
      "value": "1981",
      "source": "Wikipedia"
    },
    {
      "label": "Variants",
      "value": "Model 33 ASR (Automatic Send and Receive), Model 33 KSR (Keyboard Send and Receive), and Model 33 RO (Receive Only)",
      "source": "Wikipedia"
    },
    {
      "label": "Character speed",
      "value": "Up to 10 characters per second (about 100 words per minute)",
      "source": "Wikipedia"
    },
    {
      "label": "Signaling rate",
      "value": "110 baud",
      "source": "Wikipedia"
    },
    {
      "label": "Character encoding",
      "value": "Seven-bit ASCII, with one even parity bit and two stop bits",
      "source": "Wikipedia"
    },
    {
      "label": "Character set",
      "value": "64-character, uppercase-only subset of ASCII (no lowercase letters)",
      "source": "Wikipedia"
    },
    {
      "label": "Print mechanism",
      "value": "Cylindrical typewheel with characters in four tiers, struck by a padded hammer (impact printing)",
      "source": "Wikipedia"
    },
    {
      "label": "Paper handling",
      "value": "Continuous 5-inch-diameter paper rolls, friction-fed",
      "source": "Wikipedia"
    },
    {
      "label": "Paper tape (ASR)",
      "value": "Eight-hole punched paper tape with a built-in reader and punch",
      "source": "Wikipedia"
    },
    {
      "label": "Weight",
      "value": "About 50 lb for the bare Teletype unit; about 75 lb (34 kg) on the stand, including paper",
      "source": "Computer History Museum (X1557.98); Wikipedia"
    },
    {
      "label": "Cost to computer makers",
      "value": "Roughly US$700",
      "source": "Computer History Museum"
    },
    {
      "label": "Units produced",
      "value": "Over 500,000 made by 1975",
      "source": "Wikipedia"
    }
  ],
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What the Teletype Model 33 was"
    },
    {
      "kind": "paragraph",
      "text": "The Teletype Model 33 was an electromechanical teleprinter (teletypewriter) introduced by Teletype Corporation in 1963 and designed, according to Wikipedia, for light-duty office use. It combined a keyboard, a printing mechanism and — on some versions — a paper-tape reader and punch in a single desktop unit that could send and receive characters over a communications line. Teletype Corporation, its maker, was a subsidiary of the Western Electric Company within the AT&T (Bell System) organization. Wikipedia records that production of the Model 33 ended in 1981."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "The three versions: ASR, KSR and RO"
    },
    {
      "kind": "paragraph",
      "text": "The Model 33 shipped in three configurations. The Model 33 ASR (Automatic Send and Receive) included a built-in eight-hole punched-tape reader and tape punch, allowing messages and programs to be prepared, stored and replayed from paper tape. The Model 33 KSR (Keyboard Send and Receive) had the keyboard and printer but no tape reader or punch, while the Model 33 RO (Receive Only) had neither a keyboard nor a reader/punch and simply printed incoming data. The ASR variant, commonly written ASR-33, became the best-known form of the machine in computing."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "ASCII and its influence on early standards"
    },
    {
      "kind": "paragraph",
      "text": "Wikipedia describes the Model 33 as one of the first products to employ the newly standardized ASCII character encoding, which was first published in 1963. Its keyboard generated the seven-bit ASCII code with an even parity bit and two stop bits, at a symbol rate of 110 baud. The machine supported only a 64-character, uppercase-only subset of ASCII and did not handle lowercase letters. Because of its low price and ASCII compatibility, Wikipedia notes, the large number of Model 33s sold strongly influenced several de facto standards that developed during the 1960s."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it printed: the type cylinder and impact mechanism"
    },
    {
      "kind": "paragraph",
      "text": "The Model 33 printed with a cylindrical typewheel whose characters were arranged in four tiers. To print a character, the mechanism rotated and shifted the cylinder to the correct position and then struck it with a padded hammer, pressing the raised type through an inked ribbon against the paper — an impact printing method that produced fully formed characters rather than a dot pattern. This places it in the broader family of impact printers alongside later dot-matrix designs, though the Model 33 formed each glyph from a solid type element. Paper was supplied on continuous rolls about five inches in diameter and advanced by friction feed."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Paper tape: the ASR's reader and punch"
    },
    {
      "kind": "paragraph",
      "text": "On the ASR version, the eight-hole paper-tape reader and punch turned the terminal into a simple offline storage and program-loading device. Operators could punch a message or a program onto tape at their own pace, then feed the tape through the reader to transmit it at the machine's full speed, and incoming data could likewise be captured to tape. Wikipedia notes the machine used one-inch-wide tape supplied in rolls of about 1,000 feet. This capability made the ASR-33 especially useful with early computers, where paper tape served as an inexpensive medium for loading and saving programs and data."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Use as a computer terminal"
    },
    {
      "kind": "paragraph",
      "text": "The Computer History Museum records the ASR-33 as a popular input and output device for minicomputers, noting a cost to computer makers of roughly US$700 that made it an economical console choice. Its combination of keyboard, printer and paper tape let a user type commands, read printed responses and load or save programs, and the machine became a common interactive terminal for minicomputers and early time-sharing systems. Wikipedia describes the Model 33 as one of the most popular terminals in the data-communications industry until the late 1970s."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Place in printing and computing history"
    },
    {
      "kind": "paragraph",
      "text": "The Model 33's low cost and adoption of ASCII gave it outsized influence for a light-duty machine. Wikipedia reports that over half a million Model 33s were made by 1975, and that the 500,000th unit was gold-plated and placed on special exhibit. As faster and quieter video display terminals and dot-matrix printers spread in the later 1970s, the electromechanical Model 33 was gradually superseded, and Wikipedia dates the end of its production to 1981. It remains a widely collected and documented artifact of early interactive computing, preserved in institutions such as the Computer History Museum."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Reference scope"
    },
    {
      "kind": "paragraph",
      "text": "This model page records only facts that can be traced to an authoritative source — here Wikipedia and the Computer History Museum. Any specification that cannot be sourced is omitted rather than estimated, and it is not a buying guide and quotes no current pricing or availability. Where sources differ on minor points (for example, some museum notes date the terminal's market introduction to 1964 rather than 1963), the page follows the value supported by the majority of authoritative records. The sources consulted are listed below."
    },
    {
      "kind": "archivalTable",
      "caption": "Documented specifications (each value cited to an authoritative source)",
      "headers": [
        "Specification",
        "Value"
      ],
      "rows": [
        [
          "Manufacturer",
          "Teletype Corporation, a subsidiary of Western Electric within the AT&T system"
        ],
        [
          "Device class",
          "Electromechanical teleprinter designed for light-duty office use"
        ],
        [
          "Introduced",
          "1963"
        ],
        [
          "Production ended",
          "1981"
        ],
        [
          "Variants",
          "Model 33 ASR (Automatic Send and Receive), Model 33 KSR (Keyboard Send and Receive), and Model 33 RO (Receive Only)"
        ],
        [
          "Character speed",
          "Up to 10 characters per second (about 100 words per minute)"
        ],
        [
          "Signaling rate",
          "110 baud"
        ],
        [
          "Character encoding",
          "Seven-bit ASCII, with one even parity bit and two stop bits"
        ],
        [
          "Character set",
          "64-character, uppercase-only subset of ASCII (no lowercase letters)"
        ],
        [
          "Print mechanism",
          "Cylindrical typewheel with characters in four tiers, struck by a padded hammer (impact printing)"
        ],
        [
          "Paper handling",
          "Continuous 5-inch-diameter paper rolls, friction-fed"
        ],
        [
          "Paper tape (ASR)",
          "Eight-hole punched paper tape with a built-in reader and punch"
        ],
        [
          "Weight",
          "About 50 lb for the bare Teletype unit; about 75 lb (34 kg) on the stand, including paper"
        ],
        [
          "Cost to computer makers",
          "Roughly US$700"
        ],
        [
          "Units produced",
          "Over 500,000 made by 1975"
        ]
      ],
      "sources": [
        "Wikipedia",
        "Computer History Museum"
      ]
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This model page records only facts that can be traced to an authoritative source (manufacturer, museum, or archive records); any specification that cannot be sourced is omitted rather than estimated. It is not a buying guide and quotes no current pricing or availability. The sources consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "dot-matrix-printing"
    },
    {
      "section": "models",
      "slug": "hp-laserjet-original"
    }
  ],
  "faqs": [
    {
      "q": "Who made the Teletype Model 33 and when was it introduced?",
      "a": "It was made by Teletype Corporation — a subsidiary of Western Electric within the AT&T system — and was introduced in 1963, according to Wikipedia and the Computer History Museum."
    },
    {
      "q": "What is the difference between the ASR, KSR and RO versions?",
      "a": "The Model 33 ASR (Automatic Send and Receive) adds an eight-hole paper-tape reader and punch; the Model 33 KSR (Keyboard Send and Receive) has the keyboard and printer but no tape reader or punch; and the Model 33 RO (Receive Only) has neither a keyboard nor a reader/punch."
    },
    {
      "q": "How fast did the Model 33 print?",
      "a": "Wikipedia lists a maximum of ten characters per second, roughly 100 words per minute, at a signaling rate of 110 baud."
    },
    {
      "q": "Could the Model 33 print lowercase letters?",
      "a": "No. Wikipedia states that it supported only a 64-character, uppercase-only subset of ASCII and did not handle lowercase letters."
    },
    {
      "q": "Was the Model 33 the first device to use ASCII?",
      "a": "It is not documented as the very first ever; Wikipedia describes it as one of the first products to employ the newly standardized ASCII code, which was first published in 1963."
    }
  ],
  "sources": [
    {
      "title": "Teletype Model 33",
      "url": "https://en.wikipedia.org/wiki/Teletype_Model_33",
      "publisher": "Wikipedia"
    },
    {
      "title": "Teletype Model 33ASR (X1557.98)",
      "url": "https://www.computerhistory.org/collections/catalog/X1557.98",
      "publisher": "Computer History Museum"
    },
    {
      "title": "ASR-33 Teletype — CHM Revolution",
      "url": "https://www.computerhistory.org/revolution/minicomputers/11/337/1934",
      "publisher": "Computer History Museum"
    },
    {
      "title": "Teletype Corporation",
      "url": "https://en.wikipedia.org/wiki/Teletype_Corporation",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "teletype model 33",
    "asr-33",
    "teletype asr 33",
    "ksr-33",
    "model 33 teleprinter",
    "teletype corporation",
    "ascii teleprinter",
    "110 baud terminal",
    "electromechanical teleprinter",
    "paper tape terminal",
    "early computer terminal",
    "10 characters per second"
  ],
  "cluster": "printer-models"
};

export default entry;
