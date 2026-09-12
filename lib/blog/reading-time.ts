import type { BlogEntry } from "@/lib/content/types";

const WORDS_PER_MINUTE = 220;

/**
 * Deterministic reading estimate: counts the words actually rendered as prose
 * in the body plus the summary, at a steady 220 wpm, rounded up to a whole
 * minute with a floor of one. Pure — identical input always yields the same
 * number, so the figure is stable across builds and safe to prerender.
 *
 * Kept in its own module with only type-only imports so it loads directly
 * under `node --test --experimental-strip-types`, like the other pure
 * helpers in lib/.
 */
export function readingMinutes(post: Pick<BlogEntry, "summary" | "body">): number {
  const parts: string[] = [post.summary];
  for (const b of post.body) {
    switch (b.kind) {
      case "heading":
      case "paragraph":
      case "pullquote":
      case "callout":
      case "editorialAside":
      case "sourceCallout":
      case "quotePlate":
        parts.push(b.text);
        break;
      case "list":
      case "keyTakeaways":
        parts.push(b.items.join(" "));
        break;
      case "researchInset":
        parts.push(b.title, b.items.join(" "));
        break;
      case "steps":
        parts.push(b.steps.map((s) => `${s.title} ${s.text}`).join(" "));
        break;
      case "timeline":
        parts.push(b.events.map((ev) => `${ev.period} ${ev.text}`).join(" "));
        break;
      default:
        break;
    }
  }
  const words = parts.join(" ").split(/\s+/).filter(Boolean).length;
  return Math.max(1, Math.ceil(words / WORDS_PER_MINUTE));
}
