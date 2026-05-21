"use client";

import { useCallback, useEffect, useState } from "react";

// The ONLY Client Component in the app. It owns cookie-consent state and is
// the sole place WebmasterID analytics can be loaded — and only after the
// user grants analytics consent. Nothing is injected on the server or in
// <head> at build time; the script is created client-side, once, after a
// positive choice. Withdrawing consent reloads so an already-initialised
// tracker is gone.

const STORAGE_KEY = "pa-consent-v1";
const WMID_SCRIPT_ID = "webmasterid-tracker";
const WMID_SRC = "https://webmasterid.com/tracker.iife.min.js";
const WMID_SITE = "wm_0khb2jqale0g4k6c";
const WMID_ENDPOINT = "https://webmasterid-ingest-api.vercel.app/api/events";

interface Consent {
  analytics: boolean;
}

function readConsent(): Consent | null {
  try {
    const raw = window.localStorage.getItem(STORAGE_KEY);
    if (!raw) return null;
    const parsed = JSON.parse(raw) as { analytics?: unknown };
    return typeof parsed.analytics === "boolean"
      ? { analytics: parsed.analytics }
      : null;
  } catch {
    return null;
  }
}

function writeConsent(c: Consent): void {
  try {
    window.localStorage.setItem(
      STORAGE_KEY,
      JSON.stringify({ analytics: c.analytics, ts: new Date().toISOString() }),
    );
  } catch {
    /* storage unavailable — consent simply won't persist */
  }
}

function analyticsLoaded(): boolean {
  return !!document.getElementById(WMID_SCRIPT_ID);
}

function loadWebmasterId(): void {
  if (analyticsLoaded()) return; // never inject twice
  const s = document.createElement("script");
  s.id = WMID_SCRIPT_ID;
  s.defer = true;
  s.src = WMID_SRC;
  s.setAttribute("data-wmid", WMID_SITE);
  s.setAttribute("data-endpoint", WMID_ENDPOINT);
  document.head.appendChild(s);
}

export function CookieConsent() {
  const [mounted, setMounted] = useState(false);
  const [open, setOpen] = useState(false);
  const [managing, setManaging] = useState(false);
  const [analyticsChoice, setAnalyticsChoice] = useState(false);

  // Initial read: load analytics if previously granted; show the banner only
  // when no choice has been recorded yet. Runs after mount, so the server and
  // first client render both produce null — no hydration mismatch.
  useEffect(() => {
    // SSR-safe client-only initialisation: localStorage is unavailable during
    // render, so the banner's initial state must be derived after mount to
    // avoid a hydration mismatch. The set-state-in-effect rule is a heuristic
    // that does not fit this legitimate external-state-read case.
    /* eslint-disable react-hooks/set-state-in-effect */
    setMounted(true);
    const c = readConsent();
    if (c === null) {
      setOpen(true);
    } else {
      setAnalyticsChoice(c.analytics);
      if (c.analytics) loadWebmasterId();
    }
    /* eslint-enable react-hooks/set-state-in-effect */
  }, []);

  // Re-open from the footer "Cookie preferences" link (delegated click) so the
  // footer stays a Server Component.
  useEffect(() => {
    const onClick = (e: MouseEvent) => {
      const el = (e.target as HTMLElement | null)?.closest?.(
        'a[href="#cookie-preferences"]',
      );
      if (!el) return;
      e.preventDefault();
      setAnalyticsChoice(readConsent()?.analytics ?? false);
      setManaging(true);
      setOpen(true);
    };
    document.addEventListener("click", onClick);
    return () => document.removeEventListener("click", onClick);
  }, []);

  const apply = useCallback((analytics: boolean) => {
    const wasLoaded = analyticsLoaded();
    writeConsent({ analytics });
    if (analytics && !wasLoaded) {
      loadWebmasterId();
    } else if (!analytics && wasLoaded) {
      // Consent withdrawn: reload so the running tracker is removed.
      window.location.reload();
      return;
    }
    setOpen(false);
    setManaging(false);
  }, []);

  if (!mounted || !open) return null;

  return (
    <section
      role="region"
      aria-label="Cookie consent"
      id="cookie-preferences"
      className="fixed inset-x-0 bottom-0 z-50 border-t border-rule-strong bg-paper-raised"
    >
      <div className="mx-auto w-full max-w-6xl px-5 py-5 sm:px-6 lg:px-8">
        {managing ? (
          <div>
            <p className="kicker">Cookie preferences</p>
            <ul className="mt-4 space-y-4">
              <li className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-necessary"
                  checked
                  disabled
                  readOnly
                  className="mt-1"
                />
                <label htmlFor="consent-necessary" className="text-sm text-ink-soft">
                  <span className="font-serif text-ink">Necessary</span> — required
                  to run the site and to remember this choice. Always on.
                </label>
              </li>
              <li className="flex items-start gap-3">
                <input
                  type="checkbox"
                  id="consent-analytics"
                  checked={analyticsChoice}
                  onChange={(e) => setAnalyticsChoice(e.target.checked)}
                  className="mt-1"
                />
                <label htmlFor="consent-analytics" className="text-sm text-ink-soft">
                  <span className="font-serif text-ink">Analytics</span> —
                  first-party usage measurement operated by the publisher. Loaded
                  only while enabled.
                </label>
              </li>
            </ul>
            <div className="mt-5 flex flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => apply(analyticsChoice)}
                className="border border-rule-strong bg-paper px-4 py-2 font-sans text-sm text-ink transition-colors hover:border-ink hover:bg-paper-raised"
              >
                Save preferences
              </button>
              <a
                href="/cookie-policy"
                className="font-sans text-sm text-ink-soft underline-offset-2 hover:underline"
              >
                Cookie policy
              </a>
            </div>
          </div>
        ) : (
          <div className="flex flex-col gap-4 md:flex-row md:items-center md:justify-between">
            <p className="max-w-2xl text-sm text-ink-soft text-pretty">
              PrinterArchive uses necessary cookies to run and to remember this
              choice, plus optional analytics to understand how the archive is
              used. Analytics load only with your consent. See the{" "}
              <a
                href="/cookie-policy"
                className="text-ink underline-offset-2 hover:underline"
              >
                cookie policy
              </a>
              .
            </p>
            <div className="flex shrink-0 flex-wrap items-center gap-3">
              <button
                type="button"
                onClick={() => apply(true)}
                className="border border-rule-strong bg-paper px-4 py-2 font-sans text-sm text-ink transition-colors hover:border-ink hover:bg-paper-raised"
              >
                Accept analytics
              </button>
              <button
                type="button"
                onClick={() => apply(false)}
                className="border border-rule-strong bg-paper px-4 py-2 font-sans text-sm text-ink transition-colors hover:border-ink hover:bg-paper-raised"
              >
                Reject
              </button>
              <button
                type="button"
                onClick={() => {
                  setAnalyticsChoice(readConsent()?.analytics ?? false);
                  setManaging(true);
                }}
                className="font-sans text-sm text-ink-soft underline-offset-2 hover:underline"
              >
                Manage preferences
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
}
