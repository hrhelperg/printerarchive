import { HomeHero } from "@/components/home/HomeHero";
import { ThenNow } from "@/components/home/ThenNow";
import { CategoryGrid } from "@/components/home/CategoryGrid";
import { EraRail } from "@/components/home/EraRail";
import { FeaturedBand } from "@/components/home/FeaturedBand";
import { ClosingBand } from "@/components/home/ClosingBand";

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
      <ClosingBand />
    </>
  );
}
