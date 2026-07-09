import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "ink-bleeding",
  "title": "Ink Bleeding and Feathering",
  "description": "Ink bleeding and feathering are print defects where liquid ink spreads along paper fibers, blurring edges and fine detail. Causes, diagnosis, and remedies.",
  "summary": "Ink bleeding and feathering are print-quality defects in which liquid ink migrates beyond the edge of the intended mark, blurring edges and degrading fine text, lines, and color boundaries. They arise when ink is carried through the porous fiber network of paper by capillary action faster than it is absorbed and dried, a tendency governed chiefly by paper sizing and by the match between ink, substrate, and conditions. The defects are diagnosed by inspection and standardized image-quality measurement, and are managed through matching media to the process, reducing ink coverage, accurate profiling, environmental control, and routine printhead maintenance, with persistent hardware faults requiring servicing rather than device-specific user repair.",
  "difficulty": "intermediate",
  "estimatedTime": "13 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and terminology"
    },
    {
      "kind": "paragraph",
      "text": "Ink bleeding and feathering are related print-quality defects in which liquid ink migrates beyond the boundary of the mark it was intended to form, so that edges which should be sharp become blurred, ragged, or fuzzy. The two terms describe closely related behavior and are sometimes used interchangeably, but they emphasize different aspects of the same underlying process: the uncontrolled lateral movement of ink through and across a substrate before it dries or is fixed."
    },
    {
      "kind": "paragraph",
      "text": "Feathering refers specifically to ink spreading outward along the fibers of the paper at the edge of a printed area, producing fine, hair-like or branched extensions that resemble the barbs of a feather. In printing references it is defined as a defect in which ink spreads at the edges of a printed area, and it is also known as wicking. Feathering is chiefly an edge phenomenon: the body of a solid may look acceptable while thin lines and small text lose definition."
    },
    {
      "kind": "paragraph",
      "text": "Bleeding is a broader term. In one common usage it denotes the same edge spreading described above; in another it refers to intercolor bleed, in which two adjacent colors mix into one another at their shared boundary before the inks dry and are absorbed. In everyday use \"bleeding\" is also applied loosely to the reverse-side image becoming visible from the front. That vertical penetration of ink through the sheet is more precisely called strike-through or bleed-through, whereas show-through — the reverse image being visible mainly because the sheet is not fully opaque — is an optical effect that can occur without any ink penetrating; both are treated separately below."
    },
    {
      "kind": "paragraph",
      "text": "Terminology varies by field:"
    },
    {
      "kind": "list",
      "items": [
        "In inkjet and digital printing, feathering and intercolor bleed describe aqueous or solvent ink spreading laterally on the media surface and between color boundaries.",
        "In offset and traditional printing, the lateral spread of ink on and into the stock is one of the physical contributors to dot gain, the tonal consequence of the same effect (covered in the dot gain reference rather than repeated here).",
        "In writing-ink and paper contexts, feathering describes fountain-pen or water-based ink spreading on poorly sized paper.",
        "Unrelated to any of these, \"bleed\" in page layout means the intentional extension of artwork past the trim edge, and \"feathering\" in typography means adding small amounts of leading; neither is a defect and neither is discussed here."
      ]
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Appearance and symptoms"
    },
    {
      "kind": "paragraph",
      "text": "Bleeding and feathering are recognized by a characteristic loss of edge definition. Instead of a clean transition from inked area to bare substrate, the boundary appears soft, hairy, or ragged, and fine detail that depends on sharp edges is the first to suffer."
    },
    {
      "kind": "paragraph",
      "text": "Typical visible symptoms include:"
    },
    {
      "kind": "list",
      "items": [
        "Fuzzy or hairy edges on text and line art, with tiny tendrils of ink extending into the surrounding paper.",
        "Loss of legibility in small type and thin rules, which can fill in or appear thickened as ink spreads.",
        "Ragged or irregular line edges, reduced edge sharpness (acuity), and a general softening of fine detail.",
        "Halos or a lightened fringe around dense areas, where the liquid vehicle has wicked outward ahead of the colorant.",
        "Contamination or muddying at color boundaries, where one color has migrated into an adjacent one (intercolor bleed), sometimes with a visible shift in the boundary position.",
        "In severe cases, merging of closely spaced elements: the counters of small letters closing up, or fine reversed (knockout) text filling in."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because the effect concentrates at edges, it is usually noticed first in the most demanding content: small point sizes, thin strokes, barcodes, fine screen tints, and high-contrast borders between saturated colors. Large solids and coarse artwork may look acceptable even when fine detail has degraded. The severity generally depends on the combination of ink, substrate, and conditions rather than on the image alone, so the same file can print cleanly on one medium and feather on another."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Physical mechanism: capillary transport, absorption, and sizing"
    },
    {
      "kind": "paragraph",
      "text": "The root cause of bleeding and feathering is the movement of liquid ink through the porous, fibrous structure of paper by capillary action. Paper is a network of cellulose fibers with pores and channels between them; when liquid ink contacts this network, surface tension draws it into and along those channels, wicking it away from the point of application. Two processes compete: desirable downward absorption and drying, which fixes the colorant near where it was placed, and undesirable lateral spreading, which carries ink outward along the fibers and blurs the edge. When lateral transport outpaces absorption and drying, the ink feathers."
    },
    {
      "kind": "paragraph",
      "text": "Paper sizing is the primary control on this behavior. Sizing is a treatment applied during papermaking to reduce the sheet's tendency to absorb liquid, so that inks remain on or near the surface and dry there rather than being drawn into the fibers by capillary action. It takes two general forms: internal (engine) sizing, mixed into the pulp and present in nearly all machine-made papers, and surface (tub) sizing, applied to the formed sheet and characteristic of higher-grade writing and printing stocks. Common sizing agents are amphiphilic molecules that bond to the fibers and present a water-repellent (hydrophobic) surface outward, forming a microscopic barrier that resists wetting and curbs capillary uptake. Papers that are lightly sized, unsized, rough, or loosely formed offer little resistance to wicking and therefore feather readily, while well-sized and coated stocks hold ink closer to the surface and spread less."
    },
    {
      "kind": "paragraph",
      "text": "The interaction is fundamentally one of wetting and surface energy between a specific ink and a specific substrate. An ink with low viscosity or low surface tension wets and penetrates more aggressively; a substrate with high surface energy and open porosity accepts and conducts liquid more readily. The chemistry of the colorant matters as well: dye-based inks are dissolved and travel with the liquid vehicle, so they tend to migrate more than pigment-based inks, whose larger particles are more readily trapped at the surface. Anything that slows fixation, such as a slow-drying vehicle, a nonabsorbing or already-saturated surface, high humidity, or simply too much ink in one place, gives the liquid more time to spread before it sets."
    },
    {
      "kind": "paragraph",
      "text": "This is the same physical spreading of ink on and into the substrate that, in halftone printing, contributes to the mechanical component of dot gain; the tonal darkening that results is described in that reference and not repeated here. Bleeding and feathering emphasize the geometric, edge-level outcome of the spread, whereas dot gain emphasizes its tonal outcome."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Contributing factors: ink, substrate, process, and environment"
    },
    {
      "kind": "paragraph",
      "text": "Because bleeding and feathering arise from the interaction between ink and substrate under particular conditions, they are best understood as a property of the whole printing condition rather than of any single component. The main contributing factors group into four categories."
    },
    {
      "kind": "list",
      "items": [
        "Ink and colorant. Low viscosity or low surface tension, a slow-drying or highly mobile vehicle, and dye-based (versus pigment-based) chemistry all tend to increase spread. Heavy ink loads, laying down more liquid than the surface can absorb and fix promptly, also promote both feathering and intercolor bleed.",
        "Substrate. The degree of internal and surface sizing, the presence and type of coating, porosity, roughness, and fiber structure govern how readily a sheet wicks ink. Using a medium that is not matched to the ink or process, for example uncoated plain paper with an ink intended for coated or specially treated inkjet media, is a frequent cause.",
        "Process and settings. An incorrect media-type setting can cause the device to apply the wrong ink volume or drying behavior for the loaded stock. Excessive total ink coverage, an inaccurate or missing output profile, and screening or resolution choices that place very small, isolated dots can all make spread more visible.",
        "Environment and handling. Elevated humidity raises the moisture content of paper and slows drying, and temperature affects both drying and ink viscosity; inadequate drying, curing, or handling time before contact can smear or transfer still-mobile ink."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Equipment condition can contribute as well. Printhead problems, such as partially blocked or misdirecting nozzles that throw satellite droplets, or misalignment, can deposit ink imprecisely and mimic or worsen edge spread. General, well-documented maintenance practice is to run the printer's or manufacturer's built-in printhead-cleaning and alignment routine to clear such faults; a persistent hardware problem that does not resolve through the built-in maintenance routines requires servicing by a qualified technician rather than user disassembly."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Distinguishing bleeding and feathering from related defects"
    },
    {
      "kind": "paragraph",
      "text": "Several defects produce superficially similar blurring or color problems but have distinct causes and remedies, and the terms are often conflated. Distinguishing them is the first step in diagnosis."
    },
    {
      "kind": "list",
      "items": [
        "Feathering versus intercolor bleed. Feathering (wicking) is ink from a single printed area spreading into surrounding bare paper along the fibers. Intercolor bleed is two adjacent colors migrating into each other at their shared boundary before drying. The first degrades edge sharpness against the substrate; the second contaminates a color boundary.",
        "Lateral spread versus strike-through. Feathering and bleeding as discussed here are lateral (in-plane) movements. Strike-through and bleed-through refer instead to ink or its vehicle penetrating vertically through the sheet so that the marking medium reaches the reverse side; show-through is the related but distinct case in which the front-side image is visible from the reverse mainly because the sheet is not fully opaque — an optical effect that can occur without any penetration. These depend on sheet opacity and absorbency and are a separate concern.",
        "Edge spread versus dot gain. Dot gain is the tonal enlargement and darkening of halftone tints, caused partly by the same ink spreading and partly by optical light scatter in the paper; it is measured and compensated as a tone-reproduction issue and is covered in its own reference. Bleeding and feathering describe the visible degradation of edges and fine detail rather than a shift in measured tone.",
        "Spread versus mottle and other surface defects. Uneven ink lay-down (mottle), banding, and misregistration can also reduce apparent sharpness but stem from different mechanisms and are not corrected by the same measures."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Two unrelated senses of the words should also be set aside: the page-layout \"bleed\" (artwork intentionally extended past the trim line) and the typographic \"feathering\" (adding leading for vertical justification). Neither is a defect."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Diagnosis and measurement"
    },
    {
      "kind": "paragraph",
      "text": "Diagnosis begins with visual inspection, typically under magnification with a loupe or microscope, to confirm that the blurring is edge spread rather than a focus, registration, or screening issue, and to determine whether it is feathering into bare paper, intercolor bleed at a color boundary, or vertical strike-through. Printing a controlled test target, such as fine positive and reversed text at several sizes, thin rules, and adjacent saturated color patches, makes the defect and its type easier to identify than inspecting arbitrary content."
    },
    {
      "kind": "paragraph",
      "text": "Isolating the cause follows a substitution logic: printing the same file on a medium known to be well matched to the ink and process indicates whether the substrate is responsible; correcting the driver's media-type setting and output profile tests the settings; and comparing single-color against multi-color regions distinguishes feathering from intercolor bleed. Because the effect depends on the full condition, changing one variable at a time is the reliable way to attribute it."
    },
    {
      "kind": "paragraph",
      "text": "Quantitative assessment uses standardized print-quality attributes rather than subjective judgment. International standards for measuring the image quality of hardcopy output define edge- and line-based attributes, among them line edge raggedness, blurriness, line width, and fill, that are evaluated from high-resolution scans or micrographs by image analysis. These attributes are specified in ISO/IEC 24790, which superseded the earlier ISO/IEC 13660, and they give repeatable numbers for how ragged or blurred an edge is, allowing media, inks, and settings to be compared objectively."
    },
    {
      "kind": "paragraph",
      "text": "For substrate behavior specifically, paper absorbency and sizing can be characterized directly. A simple, long-standing sizing (feathering) test draws lines on a paper sample with a pen and water-based ink and rates how much the ink spreads into the fibers: greater spread indicates weaker sizing and a higher tendency to feather. More formal water-absorptiveness measurements are used in the paper industry to grade stocks for their liquid uptake. Together, image-quality measurement of the print and absorbency testing of the paper let the problem be attributed to the print condition or to the substrate."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "General remediation principles"
    },
    {
      "kind": "paragraph",
      "text": "Bleeding and feathering are managed by keeping ink localized at its intended edge, reducing lateral transport or speeding fixation or both, through the combination of media, ink, settings, and environment rather than by any single fix. The measures below reflect general, well-documented industry and manufacturer practice; the appropriate ones depend on which factors the diagnosis has implicated."
    },
    {
      "kind": "list",
      "items": [
        "Match the media to the print process. Use a substrate designed or rated for the printer, ink, and application, for example adequately sized or coated stock, or purpose-made inkjet media for aqueous inkjet, so the surface resists wicking and fixes ink promptly.",
        "Set the correct media type in the driver. Selecting the media that is actually loaded lets the device meter ink volume and drying behavior appropriately for that stock.",
        "Reduce total ink coverage. Lowering the amount of ink laid down, through appropriate ink limits and black generation strategies such as undercolor removal (UCR) and gray component replacement (GCR) that replace overlapping colored inks with black, leaves less liquid to spread. These are governed during CMYK conversion and profiling.",
        "Use an accurate, media-specific output profile. Characterizing and calibrating the device for the specific medium, and printing through the resulting profile, keeps ink amounts within what the medium can hold; this is the province of color calibration, printer profiling, and color management generally.",
        "Control the environment and allow drying time. Keeping ambient humidity and temperature within recommended ranges and allowing adequate drying, curing, or handling time before contact reduces spread and transfer.",
        "Address the ink or its chemistry at the design stage. Where the workflow allows, selecting pigment-based over dye-based ink, or an ink formulated for the substrate, reduces migration.",
        "Clear equipment faults through documented maintenance. If misfiring or misaligned nozzles are implicated, running the printer's or manufacturer's built-in printhead-cleaning and alignment routine is the standard first step."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Anything beyond routine, built-in maintenance, such as a persistent hardware fault, a failed printhead, or a mechanical problem that the maintenance routines do not resolve, requires servicing by a qualified technician. This reference does not provide device-specific repair procedures, disassembly steps, or internal settings; those belong to the manufacturer's service documentation. The aim of all of the above is agreement between the intended edge and the printed edge, which is achievable only once the responsible factors in the specific print condition have been identified."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relationship to screening, tonal reproduction, and color"
    },
    {
      "kind": "paragraph",
      "text": "Bleeding and feathering interact with the other stages of image reproduction, and understanding those links helps place the defect in context without duplicating the dedicated references."
    },
    {
      "kind": "list",
      "items": [
        "Screening and fine detail. Halftone and dithered images render tone as many small marks, and spread degrades the smallest of them first. Frequency-modulated (stochastic) screening and error-diffusion methods, which rely on very small, isolated dots, are especially sensitive to ink spread, as are fine amplitude-modulated screens; the mechanics of these screening methods are covered in the halftoning, FM screening, error-diffusion, and ordered-dithering references.",
        "Tonal reproduction. The same physical spreading contributes to the mechanical part of dot gain, so conditions that feather badly also tend to gain heavily in the midtones. Measuring and compensating that tonal shift is a distinct task, addressed in the dot-gain reference.",
        "Color. Intercolor bleed shifts hue and softens boundaries between separations, which is why controlling ink coverage and using accurate profiles matters for faithful color; the broader framework is color management, and the coverage-reducing role of black generation and undercolor removal ties directly to keeping neutrals and shadows from over-inking."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Treated together, these connections show that bleeding and feathering are not isolated faults but the edge-level expression of how a given ink behaves on a given substrate, the same behavior that, elsewhere in the pipeline, appears as dot gain, screening sensitivity, and color shift."
    },
    {
      "kind": "paragraph",
      "text": "This is a neutral technical reference describing a print-quality phenomenon; it is not a service manual and does not include pricing, product recommendations, or device-specific repair instructions. The sources consulted are listed below."
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
      "slug": "show-through"
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
      "section": "guides",
      "slug": "paper-curl"
    },
    {
      "section": "tools",
      "slug": "dot-gain"
    },
    {
      "section": "tools",
      "slug": "halftoning"
    }
  ],
  "faqs": [
    {
      "q": "What is the difference between ink bleeding and feathering?",
      "a": "They describe closely related behavior and are sometimes used interchangeably. Feathering, also called wicking, is ink spreading outward along the paper's fibers at the edge of a printed area, producing fine, hair-like extensions and blurred edges. Bleeding is a broader term: it can mean the same edge spreading, or specifically intercolor bleed, where two adjacent colors mix at their shared boundary before drying. Ink penetrating to the reverse of the sheet is more precisely called strike-through or show-through."
    },
    {
      "q": "What causes ink to feather or bleed on paper?",
      "a": "The underlying cause is liquid ink moving through the porous fiber network of paper by capillary action faster than it is absorbed and dried, so it spreads sideways from where it was placed. It is worse on lightly sized, unsized, rough, or uncoated stock, with low-viscosity or dye-based inks, with heavy ink coverage, and in humid conditions that slow drying. Paper sizing, a treatment that makes the surface water-repellent, is the main control that keeps ink from wicking."
    },
    {
      "q": "How can ink bleeding and feathering be reduced?",
      "a": "As general practice: match the medium to the printer and ink (use adequately sized, coated, or purpose-made media), set the correct media type in the driver, reduce total ink coverage through appropriate ink limits and black generation, print through an accurate media-specific profile, and control humidity and drying time. If misfiring nozzles are involved, running the printer's built-in printhead-cleaning routine is the standard first step; a persistent hardware fault requires servicing by a qualified technician rather than user disassembly."
    },
    {
      "q": "Is ink bleeding the same as bleed-through or dot gain?",
      "a": "No. Strike-through and bleed-through are ink penetrating vertically through the sheet to its reverse side, while show-through is the front-side image being visible from the reverse mainly because the sheet is not fully opaque (an optical effect that can occur without penetration); feathering and intercolor bleed, by contrast, are lateral spreading on the printed side. Dot gain is the tonal darkening of halftone tints, caused partly by the same ink spreading and partly by light scatter in the paper; it is measured and compensated as a tone-reproduction issue rather than an edge defect. The layout term \"bleed,\" meaning artwork extended past the trim line, is unrelated to any of these."
    },
    {
      "q": "How is feathering measured or tested?",
      "a": "Print quality can be quantified with standardized edge and line attributes, such as line edge raggedness, blurriness, and line width, defined in ISO/IEC 24790 (which superseded ISO/IEC 13660) and evaluated from high-resolution scans by image analysis. The paper itself can be checked with a simple sizing/feathering test, drawing lines with a pen and water-based ink and rating how far the ink spreads, and with formal water-absorptiveness tests used in the paper industry."
    }
  ],
  "sources": [
    {
      "title": "Feathering",
      "url": "http://printwiki.org/Feathering",
      "publisher": "PrintWiki"
    },
    {
      "title": "Feathering Test",
      "url": "https://printwiki.org/Feathering_Test",
      "publisher": "PrintWiki"
    },
    {
      "title": "ISO/IEC 24790:2017 - Information technology - Office equipment - Measurement of image quality attributes for hardcopy output - Monochrome text and graphic images",
      "url": "https://www.iso.org/standard/69796.html",
      "publisher": "ISO"
    },
    {
      "title": "Sizing",
      "url": "https://en.wikipedia.org/wiki/Sizing",
      "publisher": "Wikipedia"
    },
    {
      "title": "Surface chemistry of paper",
      "url": "https://en.wikipedia.org/wiki/Surface_chemistry_of_paper",
      "publisher": "Wikipedia"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "ink bleeding",
    "feathering",
    "wicking",
    "ink spread",
    "capillary action",
    "paper sizing",
    "intercolor bleed",
    "print defect",
    "line edge raggedness",
    "inkjet print quality",
    "ink absorption",
    "strike-through"
  ],
  "cluster": "print-quality"
};

export default entry;
