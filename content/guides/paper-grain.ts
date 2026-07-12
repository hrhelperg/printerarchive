import type { GuideEntry } from "@/lib/content/types";

const entry: GuideEntry = {
  "section": "guides",
  "slug": "paper-grain",
  "title": "Paper Grain Direction",
  "description": "Paper grain direction is the fiber alignment set during papermaking. Covers machine vs cross direction, grain long/short, testing methods, and its role in printing.",
  "summary": "Paper grain direction is the predominant orientation of fibers within a sheet or web, established as the pulp furnish drains and consolidates on the forming wire of a paper machine. Because most fibers align with the direction of travel, paper behaves differently along that axis (the machine direction) than across it (the cross direction): it is stiffer, stronger, tears and folds more cleanly with the grain, and changes dimension more across the grain when it gains or loses moisture. Grain direction is a structural, directional property distinct from measured attributes such as grammage, brightness, or opacity, and it governs how reliably paper feeds, registers, folds, and binds.",
  "difficulty": "intermediate",
  "estimatedTime": "8 min read",
  "body": [
    {
      "kind": "heading",
      "level": 2,
      "text": "Definition and origin"
    },
    {
      "kind": "paragraph",
      "text": "Paper grain direction is the predominant direction in which cellulose fibers are aligned within a sheet or web of paper. It is a structural property of the material itself, set during manufacture rather than added afterward, and it is present in nearly all machine-made paper and paperboard."
    },
    {
      "kind": "paragraph",
      "text": "The alignment arises from the forming process. On a paper machine, a dilute slurry of fibers and water (the furnish) is delivered onto a moving forming fabric, or wire, that travels at speed. As the suspension flows onto and drains through the moving wire, hydrodynamic forces tend to orient elongated fibers parallel to the direction of travel. When the water drains away and the fibrous web is pressed and dried, this preferential orientation is locked into the finished sheet."
    },
    {
      "kind": "paragraph",
      "text": "Because the alignment is a statistical tendency rather than a perfect ordering, grain describes the average fiber orientation: many fibers lie close to the grain axis, but others sit at a range of angles. The strength of that bias — how strongly fibers favor one axis over the other — varies with furnish, machine speed, and forming conditions, which is why the degree of grain-related behavior differs from grade to grade."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Machine direction and cross direction"
    },
    {
      "kind": "paragraph",
      "text": "Grain direction is described using two perpendicular axes defined by the paper machine:"
    },
    {
      "kind": "list",
      "items": [
        "Machine direction (MD) — the axis parallel to the flow of the web through the machine. Because fibers align with the web's travel, the grain direction and the machine direction coincide; \"grain direction\" and \"machine direction\" are used interchangeably.",
        "Cross direction (CD), also called the cross-machine direction — the axis perpendicular to the machine direction, running across the width of the web."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Most directional behavior in paper is expressed as a difference between these two axes. Paper is a comparatively anisotropic material: its mechanical and dimensional properties are not the same in every direction, and the MD/CD distinction is the standard way of expressing that anisotropy. Reels and sheets cut from a parent roll inherit the machine's MD and CD, so knowing where a sheet was cut from the parent stock indicates which way its grain runs."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Grain long and grain short"
    },
    {
      "kind": "paragraph",
      "text": "For a cut sheet, grain direction is described relative to the sheet's own dimensions:"
    },
    {
      "kind": "list",
      "items": [
        "Grain long — the grain runs parallel to the longer dimension of the sheet.",
        "Grain short — the grain runs parallel to the shorter dimension of the sheet."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because a parent sheet can be trimmed either way, the same paper stock may be available in both grain-long and grain-short cuts of a given size. Conventions exist for recording which way the grain runs when a size is written out. A common practice is to list the grain-parallel dimension last — some houses instead underline or embolden it — so, for example, 11 x 17 denotes grain parallel to the 17-unit side (grain long), while 17 x 11 denotes grain parallel to the 11-unit side (grain short). Notation is not universal, so a specification should state the convention it uses or label the grain explicitly to avoid ambiguity. This directional labeling sits alongside standardized size systems such as the ISO 216 A/B series, which fix a sheet's dimensions but not its grain."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Directional properties: strength, stiffness, tear, and fold"
    },
    {
      "kind": "paragraph",
      "text": "Fiber alignment gives paper measurably different behavior along the grain than across it:"
    },
    {
      "kind": "list",
      "items": [
        "Stiffness and strength — paper is generally stiffer and has higher tensile strength in the machine direction, along the grain, than in the cross direction. The ratio of a property measured in MD to the same property measured in CD (an MD/CD ratio) is a common way of expressing how pronounced the anisotropy is.",
        "Tearing — paper tends to tear more cleanly and straight with the grain, because the tear can follow the aligned fibers; tearing across the grain jumps from fiber to fiber and produces a more ragged, feathery edge. (Note that some tear-resistance measurements report the opposite relationship for force, since a tear propagating across fibers can require more energy — the clean, straight tear and the lower-force tear are different observations.)",
        "Folding and scoring — a fold or score made parallel to the grain runs alongside the fibers, breaking fewer of them and yielding a stronger, cleaner crease. A fold made across the grain fractures more fibers and tends to produce a rougher, weaker crease that is more prone to cracking, an effect that is more visible in heavier and coated stocks."
      ]
    },
    {
      "kind": "paragraph",
      "text": "These behaviors are consequences of the same underlying alignment, so they are consistent: the axis that folds and tears cleanly is the grain axis."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Moisture response and dimensional stability"
    },
    {
      "kind": "paragraph",
      "text": "Cellulose fibers absorb and release water with changes in ambient humidity, and they swell mainly in width rather than in length. Because most fibers lie along the machine direction, this swelling and shrinking produces a larger dimensional change across the grain (in the cross direction) than along it. The magnitude of the difference depends on the furnish and fiber type; the cross-direction change can be several times the machine-direction change for a given moisture swing."
    },
    {
      "kind": "paragraph",
      "text": "This unequal, moisture-driven dimensional change (hygroexpansion) is the mechanism behind several familiar effects. Uneven moisture uptake causes sheets to distort at the edges or to curl, and the axis of curl is related to the grain. In multicolor printing, where a sheet may pass through a press several times or absorb moisture from inks and fountain solution, cross-direction expansion can shift image placement between passes and disturb color registration. Keeping the larger dimensional change in the shorter dimension of the sheet is one reason grain-long stock is often preferred for offset work. The curl defect itself, and its remedies, are treated on a separate page; here the point is that grain direction sets which way that dimensional change is largest."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Determining and measuring grain direction"
    },
    {
      "kind": "paragraph",
      "text": "Grain direction can be identified with simple shop tests or characterized instrumentally."
    },
    {
      "kind": "paragraph",
      "text": "Common practical tests include:"
    },
    {
      "kind": "list",
      "items": [
        "Bend or stiffness test — flexing a sheet or strip both ways; it offers noticeably less resistance when bent about the grain axis, so the direction that bends more easily indicates the grain. This works well for heavier stocks and boards.",
        "Tear test — tearing in both directions; the cleaner, straighter tear runs with the grain, while the ragged tear runs across it.",
        "Moisture or wet-curl test — wetting one side of a small square; as it responds to moisture it curls, and the resulting curl axis reveals the grain (the sheet curls about the grain direction).",
        "Fingernail or strip test — drawing a fingernail along an edge, or comparing two narrow strips cut at right angles; the strip that stays stiffer and straighter is cut with the grain, and the one that flops is cut across it."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Beyond these qualitative checks, the directional anisotropy that grain produces is quantified using standardized test methods — for example TAPPI test methods for tensile strength, tearing resistance, and bending stiffness, which are run separately in the machine and cross directions and reported as MD and CD values or as an MD/CD ratio. Grain direction is a directional structural property and is distinct from the scalar paper attributes that are measured and reported alongside it, such as grammage under ISO 536, ISO brightness under ISO 2470, and opacity under ISO 2471. Those standards specify how to measure their respective properties; this page does not restate their numeric values."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Role in printing, folding, and binding"
    },
    {
      "kind": "paragraph",
      "text": "Grain direction affects how paper behaves throughout printing and finishing:"
    },
    {
      "kind": "list",
      "items": [
        "Feeding and registration — the way a sheet's stiffness and moisture-driven dimensional change are oriented influences how reliably it feeds and how well successive impressions register. Grain-long stock is frequently specified for offset lithography so that the larger cross-direction dimensional change falls in the sheet's shorter dimension, limiting total registration error.",
        "Folding, scoring, and creasing — folds and scores placed parallel to the grain crease cleanly and resist cracking; folds forced across the grain are rougher and more likely to crack, particularly in heavier or coated stocks where the surface layer can split. Layouts for folded work therefore consider grain when orienting fold lines.",
        "Binding — for bound work such as books and catalogs, the grain should run parallel to the binding edge (the spine). Grain parallel to the spine lets pages turn easily and lie flatter, and it keeps moisture-driven movement aligned with the binding rather than working against it. Grain running across the spine is associated with stiff or noisy page turns, cracked folds, wavy fore-edges, and warping that can worsen with handling and humidity over time."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Because these effects trace back to the same fiber alignment, grain-aware planning — choosing grain-long or grain-short stock and orienting folds and spines accordingly — is a routine part of specifying paper for a job."
    },
    {
      "kind": "heading",
      "level": 2,
      "text": "Relation to adjacent paper properties and defects"
    },
    {
      "kind": "paragraph",
      "text": "Grain direction interacts with, but is separate from, several neighboring concepts covered elsewhere:"
    },
    {
      "kind": "list",
      "items": [
        "Curl — grain sets the axis along which moisture-driven curl develops; the curl defect, its causes, and its correction are described on their own page rather than here.",
        "Weight and caliper — heavier, thicker stocks show grain-related stiffness and fold-cracking effects more strongly, so grain is usually considered together with grammage and caliper.",
        "Coated versus uncoated surfaces — coatings can crack when a sheet is folded across the grain, so grain orientation is particularly consequential for coated stocks.",
        "Sheet size — grain-long and grain-short designations are stated relative to a sheet's dimensions, which connects grain to standardized size systems."
      ]
    },
    {
      "kind": "paragraph",
      "text": "Grain direction is best understood as the directional backbone of a sheet: it does not change how bright, opaque, or heavy the paper is, but it determines the axis along which that paper is stiffest, tears and folds most cleanly, and moves most with moisture."
    },
    {
      "kind": "callout",
      "tone": "note",
      "title": "Reference scope",
      "text": "This is a neutral technical reference describing paper/media types and properties and how they are measured. It is not a buying guide: it gives no brand product lines, prices, or model-specific compatibility, and any specific values are typical figures from the cited sources, not guarantees. The references consulted are listed below."
    }
  ],
  "related": [
    {
      "section": "guides",
      "slug": "paper-curl"
    },
    {
      "section": "guides",
      "slug": "duplexing-unit"
    },
    {
      "section": "guides",
      "slug": "paper-finish"
    },
    {
      "section": "guides",
      "slug": "paper-weight-and-caliper"
    },
    {
      "section": "guides",
      "slug": "coated-vs-uncoated-paper"
    },
    {
      "section": "guides",
      "slug": "paper-sizes"
    }
  ],
  "faqs": [
    {
      "q": "What is paper grain direction?",
      "a": "It is the predominant direction in which the fibers in a sheet or web of paper are aligned. The alignment forms as the fiber slurry drains on the moving wire of a paper machine, so most fibers orient with the direction of travel. That axis is called the machine direction (and the grain direction); the perpendicular axis is the cross direction."
    },
    {
      "q": "What is the difference between grain long and grain short?",
      "a": "The terms describe how a cut sheet's grain relates to its dimensions. Grain long means the fibers run parallel to the sheet's longer side; grain short means they run parallel to the shorter side. The same stock can often be cut either way, so specifications may indicate grain by underlining, emboldening, or listing last the dimension that runs with the grain."
    },
    {
      "q": "How can I tell which way the grain runs in a sheet?",
      "a": "Simple tests work for most papers. Bending or flexing the sheet both ways: it bends more easily about the grain axis. Tearing it both ways: the cleaner, straighter tear follows the grain. Wetting a small square: it curls about the grain direction. Cutting two narrow strips at right angles: the stiffer, less floppy strip is cut with the grain. Standardized MD and CD tests (for tensile, tear, and stiffness) quantify the same anisotropy instrumentally."
    },
    {
      "q": "Why does grain direction matter for folding and binding?",
      "a": "Folds and scores made parallel to the grain break fewer fibers and crease cleanly, while folds across the grain are rougher and more prone to cracking, especially on coated or heavy stock. In bound work the grain should run parallel to the spine so pages turn easily and lie flat; grain running across the spine is linked to stiff openings, cracked folds, wavy fore-edges, and warping."
    },
    {
      "q": "How does grain direction relate to curl and print registration?",
      "a": "Paper fibers swell mainly in width, so a sheet changes dimension more across the grain than along it when humidity changes. This unequal, moisture-driven movement is what sets the axis of curl and can shift image placement between press passes, disturbing color registration. Choosing grain-long stock keeps the larger cross-direction change in the sheet's shorter dimension, limiting total registration error."
    }
  ],
  "sources": [
    {
      "title": "Grain",
      "url": "https://printwiki.org/Grain",
      "publisher": "PrintWiki"
    },
    {
      "title": "Cross-Grain Direction",
      "url": "https://printwiki.org/Cross-Grain_Direction",
      "publisher": "PrintWiki"
    },
    {
      "title": "Grain Direction — The Long and Short of It",
      "url": "https://postpressmag.com/articles/2018/grain-direction-the-long-and-short-of-it/",
      "publisher": "PostPress Magazine"
    },
    {
      "title": "Understanding Paper Grain in Bookbinding",
      "url": "https://pimlico-bookbinding.co.uk/library/understanding-paper-grain/",
      "publisher": "Pimlico Bookbinding"
    },
    {
      "title": "How can I determine the grain direction of paper?",
      "url": "https://www.strathmoreartist.com/faq-full/how-can-i-determine-the-grain-direction-of-paper",
      "publisher": "Strathmore Artist Papers"
    }
  ],
  "published": "2026-07-08",
  "updated": "2026-07-08",
  "author": "PrinterArchive Editorial",
  "editor": "PrinterArchive Editorial",
  "keywords": [
    "paper grain direction",
    "machine direction",
    "cross direction",
    "grain long",
    "grain short",
    "fiber alignment",
    "paper anisotropy",
    "hygroexpansion",
    "grain direction test",
    "md/cd ratio",
    "grain parallel to spine",
    "print registration"
  ],
  "cluster": "paper-technologies"
};

export default entry;
