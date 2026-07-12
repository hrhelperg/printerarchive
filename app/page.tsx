import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { HomeHero } from "@/components/home/HomeHero";
import { HomeArchivePanels } from "@/components/home/HomeArchivePanels";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { EraRail } from "@/components/home/EraRail";
import { OfficeInfraRail } from "@/components/home/OfficeInfraRail";
import { FeaturedBand } from "@/components/home/FeaturedBand";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { ProductEcosystem } from "@/components/home/ProductEcosystem";
import { ThenNow } from "@/components/home/ThenNow";
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

export default function HomePage() {
  return (
    <>
      <HomeHero image={HERO_IMAGE} />
      <HomeArchivePanels />
      <CategoryGrid
        kicker="Browse by category"
        title="Ten ways into printing, scanning, fax, and document systems"
      />
      <EraRail />
      <FeaturedStories />
      <ThenNow />
      <FeaturedBand section="history" />
      <FeaturedBand section="guides" />
      <FeaturedBand section="fax" />
      <FeaturedBand section="brands" />
      <OfficeInfraRail />
      <ProductEcosystem />
      <ClosingBand />
    </>
  );
}
