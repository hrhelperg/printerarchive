"use client";

import { useCallback, useEffect, useId, useRef, useState } from "react";
import { usePathname } from "next/navigation";
import { CloseMark, GridMark } from "./EcosystemMarks";

const FOCUSABLE =
  'a[href], button:not([disabled]), [tabindex]:not([tabindex="-1"])';

/**
 * The only client component in the ecosystem banner.
 *
 * It owns open/close state, focus management, and scroll locking — nothing
 * else. The directory itself is a Server Component passed in as `children`, so
 * all of its markup and links are server-rendered into the page and remain
 * crawlable; this island only reveals or hides them.
 *
 * When closed the panel carries the `hidden` attribute, so its contents are
 * removed from the accessibility tree and the tab order rather than lingering
 * as invisible focusable elements.
 */
export function EcosystemPanel({ children }: { children: React.ReactNode }) {
  const [open, setOpen] = useState(false);
  const triggerRef = useRef<HTMLButtonElement>(null);
  const panelRef = useRef<HTMLDivElement>(null);
  const panelId = useId();
  const pathname = usePathname();

  const close = useCallback(() => setOpen(false), []);

  // Close on client-side navigation (the banner lives in the root layout and
  // never unmounts, so an open panel would otherwise survive a page change).
  const firstPath = useRef(pathname);
  useEffect(() => {
    if (pathname !== firstPath.current) {
      firstPath.current = pathname;
      setOpen(false);
    }
  }, [pathname]);

  // Move focus into the panel on open; restore it to the trigger on close.
  const wasOpen = useRef(false);
  useEffect(() => {
    if (open) {
      wasOpen.current = true;
      panelRef.current?.focus();
    } else if (wasOpen.current) {
      wasOpen.current = false;
      triggerRef.current?.focus();
    }
  }, [open]);

  // Escape to close, and outside-pointer to close.
  useEffect(() => {
    if (!open) return;

    const onKeyDown = (event: KeyboardEvent) => {
      if (event.key === "Escape") {
        event.preventDefault();
        close();
      }
    };
    const onPointerDown = (event: PointerEvent) => {
      const target = event.target as Node | null;
      if (!target) return;
      if (panelRef.current?.contains(target)) return;
      if (triggerRef.current?.contains(target)) return;
      close();
    };

    document.addEventListener("keydown", onKeyDown);
    document.addEventListener("pointerdown", onPointerDown);
    return () => {
      document.removeEventListener("keydown", onKeyDown);
      document.removeEventListener("pointerdown", onPointerDown);
    };
  }, [open, close]);

  // Lock body scroll while open. The scrollbar width is compensated with
  // padding so that locking does not shift the layout horizontally.
  useEffect(() => {
    if (!open) return;
    const { style } = document.body;
    const previousOverflow = style.overflow;
    const previousPadding = style.paddingRight;
    const scrollbar = window.innerWidth - document.documentElement.clientWidth;
    style.overflow = "hidden";
    if (scrollbar > 0) style.paddingRight = `${scrollbar}px`;
    return () => {
      style.overflow = previousOverflow;
      style.paddingRight = previousPadding;
    };
  }, [open]);

  // Keep Tab and Shift+Tab inside the open panel.
  const onPanelKeyDown = (event: React.KeyboardEvent<HTMLDivElement>) => {
    if (event.key !== "Tab") return;
    const panel = panelRef.current;
    if (!panel) return;
    const items = Array.from(
      panel.querySelectorAll<HTMLElement>(FOCUSABLE),
    ).filter((el) => el.offsetParent !== null);
    if (items.length === 0) {
      event.preventDefault();
      return;
    }
    const first = items[0];
    const last = items[items.length - 1];
    const active = document.activeElement;

    if (event.shiftKey) {
      if (active === first || active === panel || !panel.contains(active)) {
        event.preventDefault();
        last.focus();
      }
    } else if (active === last) {
      event.preventDefault();
      first.focus();
    }
  };

  return (
    <>
      <button
        ref={triggerRef}
        type="button"
        className="eco-trigger"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => setOpen((v) => !v)}
        data-ecosystem-surface="banner-trigger"
      >
        <GridMark className="eco-trigger-icon" />
        <span className="eco-trigger-label">Explore Products</span>
        <span className="sr-only"> — HELPERG ecosystem directory</span>
      </button>

      <div
        ref={panelRef}
        id={panelId}
        className="eco-panel"
        role="dialog"
        aria-modal="true"
        aria-label="HELPERG ecosystem directory"
        tabIndex={-1}
        hidden={!open}
        onKeyDown={onPanelKeyDown}
      >
        <div className="eco-panel-head">
          <div>
            <p className="eco-panel-title">HELPERG Ecosystem</p>
            <p className="eco-panel-sub">
              Independent products and knowledge platforms
            </p>
          </div>
          <button
            type="button"
            className="eco-panel-close"
            onClick={close}
            aria-label="Close ecosystem directory"
          >
            <CloseMark className="eco-close-icon" />
          </button>
        </div>
        <div className="eco-panel-body">{children}</div>
      </div>
    </>
  );
}
