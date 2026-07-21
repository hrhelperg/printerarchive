"use client";

import { useEffect } from "react";

/** Distance kept between a revealed item and the edge of the track. */
const EDGE_PADDING = 12;

/**
 * Keeps the horizontally scrollable timeline usable. Renders nothing.
 *
 * Two duties, both of which only ever adjust the timeline's own `scrollLeft`:
 *
 *  1. On mount, bring the current product into view.
 *  2. On focus, reveal the focused product. Chrome does not reliably scroll a
 *     focused child of this track fully into view on its own — measured
 *     clipping of up to 121px while tabbing — and `scroll-padding-inline`
 *     alone does not fix it, so keyboard users would otherwise land on a
 *     partly hidden item.
 *
 * `scrollIntoView` is deliberately avoided: it would also scroll the page and
 * can move focus. Scrolling is instant rather than smooth, so it respects
 * reduced-motion preferences by construction.
 */
export function ActiveTimelineItem() {
  useEffect(() => {
    const list = document.querySelector<HTMLElement>(
      "[data-ecosystem-timeline]",
    );
    if (!list) return;

    /** Minimally scroll the track so `el` is fully visible inside it. */
    const reveal = (el: HTMLElement, padding: number) => {
      const listRect = list.getBoundingClientRect();
      const elRect = el.getBoundingClientRect();
      if (elRect.left < listRect.left + padding) {
        list.scrollLeft -= listRect.left + padding - elRect.left;
      } else if (elRect.right > listRect.right - padding) {
        list.scrollLeft += elRect.right - (listRect.right - padding);
      }
    };

    const current = list.querySelector<HTMLElement>(
      '[data-ecosystem-current="true"]',
    );
    if (current) {
      const listRect = list.getBoundingClientRect();
      const itemRect = current.getBoundingClientRect();
      const alreadyVisible =
        itemRect.left >= listRect.left && itemRect.right <= listRect.right;
      if (!alreadyVisible) {
        // Centre the current item, unless it is wider than the track (very
        // narrow screens or large text zoom) — then align its leading edge so
        // the monogram and name stay readable instead of being cropped.
        const lead =
          itemRect.width >= list.clientWidth
            ? 0
            : (list.clientWidth - itemRect.width) / 2;
        list.scrollLeft += itemRect.left - listRect.left - lead;
      }
    }

    const onFocusIn = (event: FocusEvent) => {
      const target = (event.target as HTMLElement | null)?.closest<HTMLElement>(
        ".eco-tl-link",
      );
      if (target) reveal(target, EDGE_PADDING);
    };

    list.addEventListener("focusin", onFocusIn);
    return () => list.removeEventListener("focusin", onFocusIn);
  }, []);

  return null;
}
