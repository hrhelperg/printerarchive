import type { ArchiveImage as ArchiveImageData } from "@/lib/content/types";
import { HomeHero } from "@/components/home/HomeHero";
import { ThenNow } from "@/components/home/ThenNow";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { EraRail } from "@/components/home/EraRail";
import { FeaturedBand } from "@/components/home/FeaturedBand";
import { ClosingBand } from "@/components/home/ClosingBand";
import { StorytellingBand } from "@/components/home/StorytellingBand";

const ARCHIVAL_HIGHLIGHTS_IMAGE: ArchiveImageData = {
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
      <HomeHero />
      <ThenNow />
      <CategoryGrid />
      <EraRail />
      <FeaturedBand section="guides" />
      <FeaturedBand section="troubleshooting" />
      <FeaturedBand section="history" />
      <FeaturedBand section="mobile-printing" />
      <FeaturedBand section="brands" />
      <StorytellingBand
        kicker="Archival highlights"
        title="A documentary record of how printing reshaped office work"
        lede="From shared department printers to driverless mobile output — printing reorganised the workday around itself, and the archive follows that trail."
        href="/history"
        hrefLabel="Enter the archive →"
        direction="image-left"
        tone="raised"
        image={ARCHIVAL_HIGHLIGHTS_IMAGE}
      />
      <ClosingBand />
    </>
  );
}
