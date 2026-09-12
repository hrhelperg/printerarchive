import type { BlogEntry } from "@/lib/content/types";

// Editorial posts, newest first is derived at query time — this list is the
// single place a new post is registered. Adding a story is two steps: write
// content/blog/<slug>.ts, import it here, and it appears on the hub, in the
// sitemap, in the RSS feed, and in llms.txt with no further wiring.
import fromPrintedCityGuides from "@/content/blog/from-printed-city-guides-to-global-city-intelligence";

export const allPosts: BlogEntry[] = [fromPrintedCityGuides];
