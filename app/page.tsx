import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { HomeHero } from "@/components/home/HomeHero";
import { ThenNow } from "@/components/home/ThenNow";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { EraRail } from "@/components/home/EraRail";
import { OfficeInfraRail } from "@/components/home/OfficeInfraRail";
import { FeaturedBand } from "@/components/home/FeaturedBand";
import { FeaturedStories } from "@/components/home/FeaturedStories";
import { ClosingBand } from "@/components/home/ClosingBand";

const HERO_IMAGE: ArchiveImageData = {
  src: "/images/home/archival-highlights-bound-printout.jpg",
  alt: "Bound stack of green-and-white-banded continuous-form computer printout",
  width: 1232,
  height: 1810,
  caption:
    "Bound continuous-form printout — the green-bar paper that defined two decades of office and data-center output.",
  credit: {
    source: "ArnoldReinhold, Wikimedia Commons",
    url: "https://commons.wikimedia.org/wiki/File:Bound_computer_printout.agr.jpg",
    license: "CC BY-SA 3.0",
  },
};

export default function HomePage() {
  return (
    <>
      <HomeHero image={HERO_IMAGE} />
      <ThenNow />
      <EraRail />
      <FeaturedStories />
      <FeaturedBand section="history" />
      <FeaturedBand section="fax" />
      <FeaturedBand section="brands" />
      <OfficeInfraRail />
      <CategoryGrid
        kicker="Continue browsing"
        title="The whole archive in nine sections"
      />
      <ClosingBand />
    </>
  );
}
