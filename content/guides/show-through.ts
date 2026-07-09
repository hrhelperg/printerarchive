import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "show-through",
  "title": "Show-Through and Strike-Through",
  "description": "Show-through and strike-through make a printed sheet's reverse image visible from the front — from low paper opacity or ink penetrating through the sheet.",
  "summary": "Show-through and strike-through are defects in which the image on one side of a printed sheet is visible from the other side. Optical show-through arises when the substrate's opacity is too low, so the reverse image is seen through the sheet while the ink stays on its surface; strike-through arises when ink physically penetrates through the sheet to the far side. Both are worst on lightweight or absorbent stock and where the reverse carries heavy ink coverage, and both are managed chiefly through substrate choice, ink-load reduction, and two-sided design rather than device repair.",
  "difficulty": "intermediate",
  "estimatedTime": "9 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Show-through and strike-through both describe the same visible outcome: the image printed on one side of a sheet can be seen from the other side. They are distinguished by their physical cause, and it is worth separating them clearly because the industry uses the terms loosely."
    },
    {
      "kind": "list",
      "items": [
        "Optical show-through is caused by insufficient opacity of the substrate. The paper transmits enough light that the image on the reverse side (or on a sheet behind it) is perceptible from the front, even though the ink itself remains entirely on the surface it was printed on. A paper's opacity determines the extent to which printing on one side will be visible from the reverse.",
        "Strike-through is caused by ink physically penetrating through the sheet, so that the marking medium — its colorant or vehicle — actually reaches, or becomes visible from, the far side. It is the visibility of printing on the reverse of a sheet due to excessive ink penetration, in contrast to show-through, in which printing is visible on the reverse due to low opacity."
      ]
    },
    {
      "kind": "paragraph",
      "text": "The distinction is not always clean in practice. \"Show-through\" is sometimes used as an umbrella term, and the same visible ghost can have both an optical and a structural component: the effect may result partly from an increase in ink absorption and penetration through the paper — not an optical problem but a structural one. This page keeps the optical-versus-penetration mechanism as its organizing principle while acknowledging that the two frequently occur together."
    },
    {
      "kind": "paragraph",
      "text": "Show-through and strike-through are primarily a substrate-and-ink interaction, and are most consequential in two-sided (duplex) printing. They differ from the optical image-quality and screening defects documented elsewhere on this site (halftoning artifacts, dot gain, moiré, banding): those concern how the intended front image is rendered, whereas show-through and strike-through concern the unwanted visibility of the reverse side."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "The characteristic sign is a faint, laterally reversed (mirror) echo of the reverse-side content appearing on the front of the sheet — pale text or a ghost of an image belonging to the back."
    },
    {
      "kind": "paragraph",
      "text": "The two mechanisms leave recognizably different signatures:"
    },
    {
      "kind": "list",
      "items": [
        "Optical show-through presents as a diffuse, low-contrast rendition of the reverse image. It becomes more obvious when the sheet is held up to the light (transillumination), because transmitted light then carries the reverse-side image to the eye; in reflective viewing a light backing — which reflects transmitted light back up through the sheet — accentuates the ghost, whereas a dark backing absorbs that light and tends to mask it. The printed front surface itself is clean — the ink has not migrated. It worsens on thin, low-opacity stock and wherever the reverse carries heavy, dark coverage.",
        "Strike-through shows ink that is actually detectable from the back surface: a sharper, sometimes mottled or wicked appearance, occasionally accompanied by a change in surface feel. It is characteristic of absorbent, uncoated, lightly sized stock combined with heavy or fluid ink films."
      ]
    },
    {
      "kind": "paragraph",
      "text": "In both cases the effect is most noticeable in duplex documents and on lightweight papers, and the usual triggers are heavy solids or dark type on the reverse. The severity is judged by comparing the front of a finished sheet against its known reverse content."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Substrate opacity: the optical basis"
    },
    {
      "kind": "paragraph",
      "text": "Opacity describes how far the sheet prevents light from passing through it (its hiding power) — the more opaque the sheet, the less light it transmits. The higher a substrate's opacity, the less optical show-through it will exhibit for a given amount of reverse-side ink."
    },
    {
      "kind": "paragraph",
      "text": "Opacity is governed by a combination of substrate factors:"
    },
    {
      "kind": "list",
      "items": [
        "Basis weight / grammage — the mass per unit area of the sheet (grams per square metre). Heavier stock generally transmits less light. Grammage is the companion substrate specification to opacity.",
        "Bulk and thickness — a thicker or bulkier sheet presents more material for light to traverse and scatter within.",
        "Fillers and loading — mineral fillers such as clay, titanium dioxide, and calcium carbonate are added to increase the diffusion (scattering) of light within the sheet, thereby increasing opacity. Titanium dioxide in particular is a strong light scatterer.",
        "Coating — a coating layer adds scattering material and raises opacity relative to an uncoated base of similar weight."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because these are all properties of the paper rather than of the printing device, substrate opacity is the primary substrate-side lever for controlling optical show-through, and it is the property that a two-sided job specifies when reverse-side visibility must be minimized."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Mechanism and cause families"
    },
    {
      "kind": "paragraph",
      "text": "Optical show-through (substrate transmission). When the substrate's opacity is insufficient, light passing through the sheet carries an image of the reverse-side ink to the viewer's side; the ink remains on the far surface throughout. The visible result is determined jointly by (i) the substrate's opacity and (ii) how much, and how dark, the ink coverage is on the reverse — and it is accentuated by any transmitted-light viewing condition."
    },
    {
      "kind": "paragraph",
      "text": "Strike-through (physical penetration). Here the liquid ink, or its vehicle, is absorbed into and through the sheet so that ink reaches the far side. Penetration depth is governed by paper structure and ink behaviour together:"
    },
    {
      "kind": "list",
      "items": [
        "Absorbency, porosity, and internal sizing. Well-sized papers resist ink flow, giving slow and shallow penetration; more porous, hydrophilic, or filler-rich surfaces allow faster and deeper penetration. Calendering (compressing the sheet) makes the structure more compact, reducing porosity and penetration depth. Optimal combinations of sizing, filler content, and calendering control how far ink travels into the sheet.",
        "Ink load, fluidity, and drying/dwell. Heavier, more fluid ink films and slow setting give the vehicle more opportunity to migrate through the sheet before it fixes."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Strike-through is therefore most severe on uncoated, absorbent, lightly sized stocks (of the newsprint family), and least severe on coated, well-sized, or calendered stocks."
    },
    {
      "kind": "paragraph",
      "text": "Shared amplifier — ink density on the reverse. Both defects intensify where the reverse of a page carries excessive ink density relative to the front; excessive ink density on the back of a page, relative to the front, is where strike-through and show-through become visible. Heavy solids or dark type backing light content is the classic trigger."
    },
    {
      "kind": "paragraph",
      "text": "The duplex factor. By definition the problem requires content (or printing) on both sides. Single-sided output over a light surface rarely exhibits it. Two-sided imposition in which heavy solids fall behind fine text or light areas maximizes visibility."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "The predictive substrate metric is opacity, which is standardized by reflectance measurement:"
    },
    {
      "kind": "list",
      "items": [
        "ISO 2471 (diffuse-reflectance, \"paper backing\" method). Opacity is determined as the ratio of the luminance factor of a single sheet measured over a black cavity to the intrinsic luminance factor of the paper (a thick stack of the same sheets), expressed as a percentage.",
        "TAPPI T 425. Opacity is reported as a contrast ratio, C0.89 = 100 × (R0 / R0.89): the diffuse reflectance of a specimen backed by a black body (0.5 % reflectance or less) divided by the reflectance of the same specimen backed by a white body of 89 % reflectance. The contrast ratio is 100 % for a perfectly opaque sheet and only a few percent for a nearly transparent one.",
        "ISO 536 (grammage). Basis weight, as mass per unit area, is measured as the companion substrate specification, since opacity generally rises with grammage and bulk."
      ]
    },
    {
      "kind": "paragraph",
      "text": "It is important to separate two different things that can be measured. The opacity standards quantify an optical property of the substrate, which predicts optical show-through independently of any printing. Assessing the printed result — the actual defect on a finished, two-sided sheet — is a separate exercise: the front is compared against its known reverse content, either visually or densitometrically (measuring the density that the reverse image adds to the front). The opacity standards do not, by themselves, measure ink penetration or the printed defect."
    },
    {
      "kind": "paragraph",
      "text": "Field triage (general practice) first establishes which mechanism is at work: does ink actually appear on the back surface (strike-through), or is there only a diffuse ghost seen through the sheet with a clean front (optical show-through)? Checking substrate opacity and basis weight, the reverse-side coverage, and whether the stock is absorbent or uncoated points to the appropriate remedy."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "The following are general, well-documented practices rather than fixed rules; effective values are media- and ink-dependent. None require internal device work."
    },
    {
      "kind": "list",
      "items": [
        "Choose a higher-opacity substrate for two-sided work. Greater basis weight/grammage, more bulk, higher filler loading (titanium dioxide, clay, calcium carbonate), or a coating all raise opacity and reduce optical show-through. Where reverse-side visibility is critical, opacity can be specified and verified by ISO 2471 or TAPPI T 425.",
        "Reduce total ink coverage and ink load, especially heavy solids on the reverse. Because both defects worsen with excessive ink density on the back of a page, lowering ink density in the offending areas reduces both perceived show-through and the driving force for penetration. Reducing ink density by adjusting dot size, dot spacing, or tint values in high-density areas — an object-based ink-density correction applied during document preparation — is one documented approach. This connects to black generation / GCR, which cuts total ink laydown by replacing overlapping CMY with black, and to total-area-coverage limits set during CMYK conversion (see cross-links).",
        "Manage the ink–media interaction for strike-through. Use a better-sized, less-absorbent, or calendered stock, and/or an ink and drying condition that lets the film set on the surface rather than wicking through. Controlled penetration — adequate sizing, appropriate filler, and calendering — limits strike-through while preserving color development. In short, match the ink and media to the process.",
        "Design and impose two-sided content deliberately. Register the layout so heavy solids and dark type do not fall directly behind fine text or light areas; where a stock's opacity is inadequate for the content, move to a heavier or higher-opacity sheet, or to single-sided output.",
        "Servicing boundary. Show-through and strike-through are chiefly substrate, ink-load, and design factors, so there is usually no internal repair to perform. If a device is laying down more ink than intended, that is addressed through media-type and print/driver settings. If a hardware fault is genuinely suspected — for example an inkjet metering issue or a press inking problem — it requires servicing by a qualified technician and is not a user disassembly task."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to other print-quality attributes"
    },
    {
      "kind": "paragraph",
      "text": "Show-through and strike-through sit apart from the optical and screening image-quality defects documented elsewhere on this site. Halftoning and the screening family, dot gain, and moiré all describe how the intended front image is rendered; show-through and strike-through instead concern the unwanted visibility of the reverse side, governed by substrate opacity and ink penetration."
    },
    {
      "kind": "paragraph",
      "text": "There is, however, a genuine physical overlap. Strike-through shares its root cause — ink spreading into and through the sheet — with the physical component of dot gain, so absorbent stocks that gain heavily also tend to strike through. Consequently the same measures that reduce total ink laydown, such as black generation/GCR and total-area-coverage limits set during RGB-to-CMYK conversion, mitigate both problems at once."
    },
    {
      "kind": "paragraph",
      "text": "There is also a measurement overlap worth noting lightly: because a low-opacity sheet lets the measurement backing and any reverse-side ink influence the light returned from the printed side, substrate opacity can shift a color measurement rather than leaving it unchanged, and therefore affects profiling and calibration. For that reason a page's opacity is a relevant variable in color-managed workflows, not only an aesthetic concern."
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
      "slug": "ink-bleeding"
    },
    {
      "section": "guides",
      "slug": "paper-curl"
    },
    {
      "section": "guides",
      "slug": "print-mottle"
    },
    {
      "section": "guides",
      "slug": "smearing-and-set-off"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    },
    {
      "section": "tools",
      "slug": "black-generation"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between show-through and strike-through?",
      "a": "Optical show-through is seeing the reverse-side image through a sheet whose opacity is too low, while the ink stays on the far surface. Strike-through is ink physically penetrating through the sheet so it is visible from the far side. The terms are sometimes used loosely, and both can occur together on the same sheet."
    },
    {
      "q": "What paper property most affects show-through?",
      "a": "Opacity — the amount of light the sheet transmits. Opacity rises with basis weight/grammage, bulk, filler content (for example titanium dioxide, clay, or calcium carbonate), and coating. For two-sided work where reverse visibility matters, opacity can be specified using ISO 2471 or TAPPI T 425."
    },
    {
      "q": "How is paper opacity measured?",
      "a": "As a reflectance ratio. ISO 2471 compares the luminance factor of a single sheet over a black cavity with the paper's intrinsic (stacked) luminance factor. TAPPI T 425 expresses it as the contrast ratio C0.89 = 100 × R0/R0.89, comparing reflectance over a black backing with reflectance over an 89% white backing; it is 100% for a fully opaque sheet and only a few percent for a transparent one."
    },
    {
      "q": "Why is strike-through worse on uncoated paper?",
      "a": "Uncoated, porous, lightly sized stock absorbs ink readily, letting the vehicle and colorant penetrate deeper into and through the sheet. Internal sizing, appropriate filler, and calendering reduce porosity and penetration depth, which is why coated and well-sized stocks resist strike-through better."
    },
    {
      "q": "Is show-through or strike-through a printer hardware fault?",
      "a": "Usually not. It is mainly a substrate, ink-load, and two-sided-design interaction, addressed by choosing a higher-opacity stock, reducing ink coverage, and imposing content carefully. If a device is laying down excess ink, that is handled through media and driver settings; a genuinely suspected hardware fault requires servicing by a qualified technician."
    }
  ],
  "sources": [
    {
      "title": "ISO 2471:2008 — Paper and board — Determination of opacity (paper backing) — Diffuse reflectance method",
      "url": "https://www.iso.org/standard/39771.html",
      "publisher": "ISO"
    },
    {
      "title": "TAPPI T 425 om-21 — Opacity of paper (15/d geometry, illuminant A/2°, 89% reflectance backing and paper backing)",
      "url": "https://imisrise.tappi.org/TAPPI/Products/01/T/0104T425.aspx",
      "publisher": "TAPPI"
    },
    {
      "title": "ISO 536:2019 — Paper and board — Determination of grammage",
      "url": "https://www.iso.org/standard/77583.html",
      "publisher": "ISO"
    },
    {
      "title": "Opacity",
      "url": "https://printwiki.org/Opacity",
      "publisher": "PrintWiki"
    },
    {
      "title": "Strike-Through",
      "url": "https://printwiki.org/Strike-Through",
      "publisher": "PrintWiki"
    },
    {
      "title": "US 7,646,509 B1 — Prevent strike-through and show-through in printing by object based ink density correction",
      "url": "https://patents.google.com/patent/US7646509",
      "publisher": "Google Patents (Adobe)"
    },
    {
      "title": "Ink penetration of uncoated inkjet paper and impact on printing quality (BioResources 10(4), 2015)",
      "url": "https://bioresources.cnr.ncsu.edu/resources/ink-penetration-of-uncoated-inkjet-paper-and-impact-on-printing-quality/",
      "publisher": "BioResources"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "show-through",
    "strike-through",
    "paper opacity",
    "iso 2471",
    "tappi t425",
    "basis weight",
    "grammage",
    "ink penetration",
    "duplex printing",
    "total ink coverage",
    "uncoated paper",
    "print defect"
  ],
  "cluster": "print-quality"
};

export default entry;
