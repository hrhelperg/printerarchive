import { StorytellingBand } from "./StorytellingBand";

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
      />
      <StorytellingBand
        kicker="Now"
        title="Wireless & mobile printing"
        lede="Driverless standards let a phone print across the room without thinking about it."
        href="/guides/how-wireless-printing-works"
        hrefLabel="Read the wireless era →"
        direction="image-right"
        tone="raised"
      />
    </>
  );
}
