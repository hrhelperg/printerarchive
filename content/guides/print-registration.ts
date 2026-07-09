import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "print-registration",
  "title": "Print Registration and Misregistration",
  "description": "Print registration aligns color separations and front-to-back images; misregistration causes color fringes and white gaps. Causes, register marks, and trapping.",
  "summary": "Print registration is the accurate alignment of the color separations and front-to-back images that combine into a finished print; misregistration is the defect in which those layers fail to overlay, showing as colored fringes, white gaps, and blurred detail. Its main causes are dimensional change in the substrate (chiefly from moisture) and mechanical or prepress setup variation. Registration is checked with registration marks and, on many presses, automated inline control, and small unavoidable errors are concealed in prepress by trapping. Durable correction comes from stabilizing the media and press, with persistent mechanical faults requiring servicing.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "What print registration is"
    },
    {
      "kind": "paragraph",
      "text": "Print registration is the accurate alignment of the separate images that combine to form a single printed result. Most color work is not produced in one impression: a full-color image is divided into color separations — in process color these are cyan, magenta, yellow, and black (CMYK), sometimes supplemented by spot inks — and each separation is carried by its own plate, cylinder, imaging station, or print-head pass. Registration is the condition in which every separation falls in its intended position relative to the others, so the layers overlay into the intended image. In these terms, registration is the layering of printed patterns into a multicolor pattern, and a registration error is the positional misalignment of those overlapped patterns."
    },
    {
      "kind": "paragraph",
      "text": "Two kinds of registration are commonly distinguished:"
    },
    {
      "kind": "list",
      "items": [
        "Color-to-color registration: the alignment of the separations or passes to one another on the same side of the sheet.",
        "Front-to-back registration (also called back-up, perfecting, or duplex registration): the alignment of the image on one side of a sheet with the image on the reverse, which matters for duplex documents, books, and subsequent folding and finishing."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Misregistration — also called misregister, or a job being 'out of register' — is the defect in which one or more separations or passes are shifted, rotated, or scaled relative to the others, so that the layers no longer overlay correctly. It is described in trade references as successive passes of a sheet failing to print an image in the position intended, and it is characteristically a multi-color problem."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "When the separations do not align, the composite image looks soft, blurred, or plainly 'out of register.' The typical visible signs are:"
    },
    {
      "kind": "list",
      "items": [
        "Colored fringes or halos along edges, where one separation protrudes past the others — for example a cyan or magenta rim on a boundary that should be clean.",
        "White gaps or slivers where two adjacent colors were meant to meet but have pulled apart, exposing the unprinted substrate.",
        "Blurred or doubled-looking text and fine detail, especially small colored type or thin rules built from more than one ink.",
        "A general loss of sharpness and color purity in process images, and visible shifts in neutral or gray areas that are built from cyan, magenta, and yellow together."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Misregistration may be uniform across the sheet — a constant shift, or a difference in scale or stretch between separations — or it may vary across the sheet as skew, bow, or fan-out. When its cause is unstable, the amount and direction of misregistration can change from copy to copy during a run. A faint secondary or repeated image is a different defect (ghosting); misregistration specifically concerns displacement of the separations relative to one another or front to back."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "How it differs from banding, streaking, and moiré"
    },
    {
      "kind": "paragraph",
      "text": "Misregistration is fundamentally a problem of alignment between separations, or between the front and back of a sheet, which sets it apart from defects that occur within a single colorant:"
    },
    {
      "kind": "list",
      "items": [
        "Banding and streaking are density variations within one ink or pass — periodic light and dark bands, or linear streaks. A single-color (monochrome) job can show banding or streaking, but by definition it cannot show color-to-color misregistration; it can, however, still suffer front-to-back misregistration in duplex work. See the related banding and streaking references.",
        "Moiré and the rosette pattern arise from the interaction of halftone screens placed at different angles, and screen angles are chosen to minimize moiré. Misregistration can change the look of the rosette and, when severe, make screen interactions more noticeable, but moiré itself is a screening phenomenon."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Screening, screen angles, moiré, and dot gain are documented on their own pages and are referenced here rather than re-explained. The point specific to registration is that its root problem is alignment among the layers, not the tonal or screening behavior of any one layer."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Mechanisms and causes"
    },
    {
      "kind": "paragraph",
      "text": "Misregistration has several well-documented cause families, and more than one can act at the same time."
    },
    {
      "kind": "paragraph",
      "text": "Substrate dimensional change"
    },
    {
      "kind": "paragraph",
      "text": "Paper and other porous substrates change size as they gain or lose moisture. Because separations are frequently laid down at different moments, or on different units, a sheet that grows or shrinks between impressions will no longer line up. Trade references attribute misregister to changes in a paper's dimensions from moisture gain or loss and to mechanical stretching of the sheet; in wet offset lithography, water or excess fountain solution taken up by the paper can add to this dimensional change. Grain direction and the sheet's storage and handling history influence how much it moves."
    },
    {
      "kind": "paragraph",
      "text": "Mechanical and press factors"
    },
    {
      "kind": "list",
      "items": [
        "On web presses, poor side-to-side alignment of the web with a printing unit and variation in web tension shift the image between units.",
        "On sheetfed presses, sheet skew, feeding and gripper variation, and the mounting or position of plates and cylinders affect where each separation lands.",
        "Machine components such as the impression cylinder, the plates, and general stress and friction all influence a press's registration, and inconsistencies among them can put a press out of register. Worn or damaged drive, bearing, or transport components produce persistent mechanical misregister that requires servicing by a qualified technician."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Process and prepress setup"
    },
    {
      "kind": "paragraph",
      "text": "Errors introduced before the press can appear as misregistration even when the press is correctly aligned: misplaced separations, incorrect imposition, inaccuracy in plate imaging or the output device, or incorrect front-to-back setup. Determining whether a fault originates in the file, in platemaking, or on the press is part of diagnosis."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Trapping: concealing unavoidable misregistration"
    },
    {
      "kind": "paragraph",
      "text": "Because some register variation is unavoidable in production, prepress workflows use trapping to keep small misregistration from becoming visible. In the prepress sense, trapping adjusts the areas where two distinct, adjacent colors meet so that press misregister does not open white gaps. It does this by making the adjoining colors overlap very slightly:"
    },
    {
      "kind": "list",
      "items": [
        "A spread expands the lighter object outward into its darker neighbor; a choke extends the lighter background inward so it slightly overlaps the darker object, which appears slightly reduced ('choked'). In both cases a thin shared band is filled, so a small shift does not reveal the substrate.",
        "By convention the lighter, higher-luminance color is spread into the darker one, because darker colors define the perceived shape and distorting the lighter color is less noticeable. With opaque spot inks, the printing order rather than luminance can determine the trap direction.",
        "Trap widths are kept small, and are chosen in relation to the screen ruling and the register error expected from the process."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Trapping conceals the symptom; it does not correct the underlying misalignment, and it is applied as part of preparing separations in prepress or RIP software. The prepress meaning should not be confused with 'ink trapping,' a separate term for how well a wet ink film accepts another ink printed over it. A related, register-tolerant practice is setting solid black text to overprint rather than knock out, which avoids register-sensitive gaps around type. Separation-related choices such as black generation and RGB-to-CMYK conversion are covered on their own pages."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis, registration marks, and measurement"
    },
    {
      "kind": "paragraph",
      "text": "Registration is checked with registration marks (also called register marks): small targets — commonly a crosshair within a circle, or star targets — placed outside the trim area and repeated on every separation. They are imaged in a registration color that prints on all separations at once (for process color, full cyan, magenta, yellow, and black together), so that if any separation shifts, its mark no longer coincides with the others and the misalignment can be seen directly. Registration marks are used primarily for aligning color separations."
    },
    {
      "kind": "paragraph",
      "text": "Common diagnostic and measurement practice includes:"
    },
    {
      "kind": "list",
      "items": [
        "Visual inspection of the register marks and of fine edges under a loupe or magnifier.",
        "Automated inline register-control systems on many production presses, which use sensors or cameras to read register marks during the run and adjust the units to hold register.",
        "The acceptable register error is not fixed by a single general graphic-arts standard; in practice it is set by the production agreement between printer and print buyer and confirmed with the register marks and inline control above. The ISO 12647 series governs related process parameters rather than press register itself — for example ISO 12647-2 specifies colorimetry, tone value increase, and separation image-size consistency for offset lithography. Specific numeric tolerances depend on the process and the agreement in force and are not reproduced here."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Assessing registration in this way connects it to the broader subject of print-quality assessment, in which alignment is evaluated alongside tonal and colorimetric attributes."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "The measures below are general, well-documented practices rather than device-specific procedures. Anything that indicates a mechanical fault requires servicing by a qualified technician and is not an operator repair; no disassembly, part-level, or setting-level instructions are given here."
    },
    {
      "kind": "list",
      "items": [
        "Media and environment: condition and store paper so its moisture content is stable, keep the pressroom temperature and humidity controlled, and choose dimensionally stable media matched to the printing process. Stable substrate dimensions are among the most frequently cited defenses against moisture-driven misregister.",
        "Prepress and design: apply appropriate trapping to adjoining colors; verify separations, overprint and knockout settings, and front-to-back imposition; set solid black text to overprint; and avoid register-critical constructions such as very small multicolor type or thin colored keylines where the design allows.",
        "Press setup and control: perform careful make-ready and register setup, confirm correct plate and cylinder mounting, hold consistent web tension on web presses, and use inline register control where it is available.",
        "Servicing: persistent or worsening mechanical misregister — for example from worn drives, bearings, or transport components — is a service matter and requires technician attention rather than adjustment by the operator."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because trapping only hides small errors, durable improvement usually comes from stabilizing the substrate and the press rather than from increasing trap alone."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Registration across printing processes"
    },
    {
      "kind": "paragraph",
      "text": "The alignment problem takes different forms depending on how a device builds the image, although the same general principles apply throughout."
    },
    {
      "kind": "list",
      "items": [
        "Multi-unit presses (such as offset, flexographic, and gravure) register successive separations as the sheet or web passes from unit to unit; here substrate dimensional change and unit-to-unit mechanical variation are dominant concerns.",
        "Single-pass electrophotographic and inkjet devices align their colorants or print-head passes within one pass of the media, and align the two sides in duplex work; alignment there depends on the device's internal media transport and imaging synchronization."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Across all of these, the recurring defenses are the same: keep the substrate dimensionally stable, use registration marks and, where available, automated register control to detect and correct drift, and apply trapping in prepress to conceal the small residual misregistration that no process eliminates entirely. Registration also interacts with screening and separation decisions, so it is generally considered together with screen angles, moiré control, and black generation rather than in isolation."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing print-defect phenomena and general remediation principles. It is not a service manual: it does not provide device-specific repair procedures, error-code meanings, or maintenance intervals, and anything requiring service should be handled per the manufacturer's guidance. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "print-banding"
    },
    {
      "section": "guides",
      "slug": "color-cast"
    },
    {
      "section": "tools",
      "slug": "screen-angles"
    },
    {
      "section": "guides",
      "slug": "print-quality-assessment"
    },
    {
      "section": "tools",
      "slug": "moire-patterns"
    },
    {
      "section": "guides",
      "slug": "color-management"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between registration and misregistration?",
      "a": "Registration is the correct alignment of the separate color layers (and of the front and back of a sheet) that combine to form a print. Misregistration, or being 'out of register,' is the defect in which one or more of those layers is shifted, rotated, or scaled relative to the others, so the image looks blurred or shows colored fringes and white gaps."
    },
    {
      "q": "What causes misregistration?",
      "a": "The most commonly cited cause is dimensional change in the paper as it gains or loses moisture, so separations printed at different times no longer line up. Mechanical and press factors (web tension and side-to-side alignment on web presses; sheet skew, gripper variation, and plate or cylinder mounting on sheetfed presses) and prepress setup errors such as misplaced separations or incorrect imposition also contribute."
    },
    {
      "q": "How is registration checked or measured?",
      "a": "It is checked with registration marks — small crosshair or star targets repeated on every separation in a color that prints on all separations at once — inspected visually, often under a loupe. Many production presses add automated inline register-control systems that read the marks during the run and adjust the units to hold register, and the acceptable register error is typically set by the production agreement between printer and print buyer rather than by a single fixed standard value."
    },
    {
      "q": "Does trapping fix misregistration?",
      "a": "No. Trapping is a prepress technique that slightly overlaps adjoining colors (spreads and chokes) so that a small register shift does not open a visible white gap; it conceals the symptom but does not correct the underlying alignment. It is also distinct from 'ink trapping,' which refers to how well one wet ink accepts another printed over it."
    },
    {
      "q": "Can a black-and-white print be out of register?",
      "a": "A single-color job cannot show color-to-color misregistration, because there is only one separation to align. It can still show front-to-back (duplex) misregistration, where the image on one side does not line up with the image on the reverse, and it can show single-color defects such as banding or streaking, which are separate issues."
    }
  ],
  "sources": [
    {
      "title": "Printing registration",
      "url": "https://en.wikipedia.org/wiki/Printing_registration",
      "publisher": "Wikipedia"
    },
    {
      "title": "Misregister",
      "url": "https://printwiki.org/Misregister",
      "publisher": "PrintWiki"
    },
    {
      "title": "Register Marks",
      "url": "https://printwiki.org/Register_Marks",
      "publisher": "PrintWiki"
    },
    {
      "title": "Trapping",
      "url": "https://printwiki.org/Trapping",
      "publisher": "PrintWiki"
    },
    {
      "title": "Trap (printing)",
      "url": "https://en.wikipedia.org/wiki/Trap_(printing)",
      "publisher": "Wikipedia"
    },
    {
      "title": "Trapping color (Acrobat Pro)",
      "url": "https://helpx.adobe.com/acrobat/using/trapping-color-acrobat-pro.html",
      "publisher": "Adobe"
    },
    {
      "title": "Print color separations in Illustrator",
      "url": "https://helpx.adobe.com/illustrator/using/printing-color-separations.html",
      "publisher": "Adobe"
    },
    {
      "title": "ISO 12647-1:2013 — Graphic technology — Process control for the production of half-tone colour separations, proof and production prints — Part 1: Parameters and measurement methods",
      "url": "https://www.iso.org/standard/57816.html",
      "publisher": "ISO"
    },
    {
      "title": "ISO 12647-2:2013 — Graphic technology — Process control for the production of half-tone colour separations, proof and production prints — Part 2: Offset lithographic processes",
      "url": "https://www.iso.org/obp/ui/#!iso:std:iso:12647:-2:ed-3:v1:en",
      "publisher": "ISO"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "print registration",
    "misregistration",
    "out of register",
    "color-to-color registration",
    "front-to-back registration",
    "registration marks",
    "register marks",
    "trapping",
    "spread and choke",
    "color separations",
    "print defects",
    "prepress"
  ],
  "cluster": "print-quality"
};

export default entry;
