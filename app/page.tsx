import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { HomeHero } from "@/components/home/HomeHero";
import { ArchiveScale } from "@/components/home/ArchiveScale";
import { ExploreArchive } from "@/components/home/ExploreArchive";
import { EvolutionRail } from "@/components/home/EvolutionRail";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { BlogFeature } from "@/components/home/BlogFeature";
import { ManufacturerIndex } from "@/components/home/ManufacturerIndex";
import { ModelCatalogue } from "@/components/home/ModelCatalogue";
import { ClosingBand } from "@/components/home/ClosingBand";

const HERO_IMAGE: ArchiveImageData = {
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

/**
 * Homepage composition.
 *
 * Ordered as an argument rather than a feature list: the claim, the evidence
 * for its scale, where to start, the through-line the archive traces, its
 * strongest narratives, the journal, and only then the catalogues. The
 * publisher's other products are not on this page at all — they live in the
 * footer, where they belong.
 */
export default function HomePage() {
  return (
    <>
      <HomeHero image={HERO_IMAGE} />
      <ArchiveScale />
      <ExploreArchive />
      <EvolutionRail />
      <FeaturedStories />
      <BlogFeature />
      <ManufacturerIndex />
      <ModelCatalogue />
      <ClosingBand />
    </>
  );
}
