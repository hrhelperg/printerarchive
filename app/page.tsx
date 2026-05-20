import { HomeHero } from "@/components/home/HomeHero";
import { ThenNow } from "@/components/home/ThenNow";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { EraRail } from "@/components/home/EraRail";
import { FeaturedBand } from "@/components/home/FeaturedBand";
import { ClosingBand } from "@/components/home/ClosingBand";
import { StorytellingBand } from "@/components/home/StorytellingBand";

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
      />
      <ClosingBand />
    </>
  );
}
