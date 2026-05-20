import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { StorytellingBand } from "./StorytellingBand";

const THEN_IMAGE: ArchiveImageData = {
  src: "/images/home/then-tractor-feed.jpg",
  alt: "Folded sheet of continuous-form computer paper with perforated sprocket strips along both edges",
  width: 1600,
  height: 899,
  caption:
    "Continuous-form 'tractor-feed' paper with sprocket-strip edges — the material standard of impact-era office printing.",
  credit: {
    source: "ProjectManhattan, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Paper_for_dot_matrix_printers.jpg",
    license: "CC BY-SA 3.0",
  },
};

const NOW_IMAGE: ArchiveImageData = {
  src: "/images/home/now-hp-laserjet-i.jpg",
  alt: "Original HP LaserJet laser printer photographed against a neutral background",
  width: 1600,
  height: 1066,
  caption:
    "HP LaserJet (1984) — the inflection point at which laser printing became a desk-side technology.",
  credit: {
    source: "Atomic Taco, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:HP_LaserJet_I_(12935740974).jpg",
    license: "CC BY-SA 2.0",
  },
};

export function ThenNow() {
  return (
    <>
      <StorytellingBand
        kicker="Then"
        title="Mechanical & impact printing"
        lede="Hammers, ribbons, and continuous-feed paper — the loud origins of the office printer."
        href="/history/history-of-printers"
        hrefLabel="Read the impact era →"
        direction="image-left"
        image={THEN_IMAGE}
      />
      <StorytellingBand
        kicker="Now"
        title="Laser & the desk-printed page"
        lede="Quiet electrophotographic devices brought typeset-quality output from institutional rooms to ordinary office desks."
        href="/history/transition-from-impact-to-laser-printing"
        hrefLabel="Read the laser inflection →"
        direction="image-right"
        tone="raised"
        image={NOW_IMAGE}
      />
    </>
  );
}
