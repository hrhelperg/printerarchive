# Strategic Internal Product Linking + Ecosystem Integration — Implementation Plan

> Combined plan (no separate spec). First-party cross-linking of HELPERG ecosystem apps into contextually-relevant archive pages. Editorial, SEO-clean, transparent. 3 subagent dispatches + controller QA/push.

**Branch:** `feat/foundation-architecture` only. Never merged to `main`.

**Operator context:** PrinterArchive is published by HELPERG LLC; the four products are HELPERG's own apps. This is legitimate first-party cross-promotion, disclosed transparently — not third-party affiliate placement.

## Decisions (user-approved)

- External product links: `target="_blank" rel="noopener noreferrer nofollow"`.
- Footer "Modern tools" column: YES.
- Backfill breadth: comprehensive (~19 entries, including the 2 stretch fits).
- Placement mechanism: per-entry `modernTools?: ProductId[]` field → end-of-article `ModernTools` section (rendered LAST, after RelatedLinks, so the archive's own editorial content is always prioritised over the commercial note).
- Canonical store URLs (the `&pcampaignid=web_share` share param is stripped; report notes this so a deliberate campaign tag can be re-added later).

## Constraints

Zero new dependencies. No Client Components. No popups/analytics/autoplay. No fabricated reviews/counts/endorsements. Static SSR. Crawlable `<a href>` links. Canonical untouched.

---

## Task A — Mechanism (registry + component + field + wiring + integrity + test)

This is one coherent unit: the build stays green only when the field, component, and wiring land together. Multiple commits, one dispatch.

### A1 — CREATE `lib/products.ts`

```ts
export type ProductId = "zip-rar" | "smart-printer" | "fax-app" | "pdf-editor";

export interface ProductLink {
  label: string;
  href: string;
}

export interface Product {
  id: ProductId;
  name: string;
  tagline: string;
  links: ProductLink[];
}

export const PRODUCTS: Record<ProductId, Product> = {
  "zip-rar": {
    id: "zip-rar",
    name: "ZIP & RAR",
    tagline:
      "Open, create, and extract ZIP and RAR archives on a phone or tablet.",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.ziparchivator.zip",
      },
      { label: "iOS", href: "https://apps.apple.com/app/id6753772583" },
    ],
  },
  "smart-printer": {
    id: "smart-printer",
    name: "Smart Printer",
    tagline:
      "Print documents and photos from a phone or tablet to a connected printer.",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.helperg.smart.printer",
      },
      { label: "iOS", href: "https://apps.apple.com/app/id6746067890" },
    ],
  },
  "fax-app": {
    id: "fax-app",
    name: "Fax App",
    tagline: "Send a document as a fax from a phone, without a fax machine.",
    links: [
      {
        label: "Android",
        href: "https://play.google.com/store/apps/details?id=com.helperg.fax.app",
      },
      { label: "iOS", href: "https://apps.apple.com/app/id6760895885" },
    ],
  },
  "pdf-editor": {
    id: "pdf-editor",
    name: "PDF Editor & Convert",
    tagline: "Edit, convert, and combine PDF documents in a web browser.",
    links: [
      { label: "Open on the web", href: "https://www.pdfeditconvert.top" },
    ],
  },
};
```

Commit: `feat(products): add HELPERG ecosystem product registry (lib/products.ts)`

### A2 — CREATE `components/content/ModernTools.tsx`

```tsx
import { PRODUCTS, type ProductId } from "@/lib/products";

interface ModernToolsProps {
  products: ProductId[];
}

export function ModernTools({ products }: ModernToolsProps) {
  const resolved = products.map((id) => PRODUCTS[id]);
  if (resolved.length === 0) return null;
  return (
    <section
      aria-labelledby="modern-tools"
      className="mt-12 border-t border-rule pt-8"
    >
      <h2
        id="modern-tools"
        className="font-sans text-xs font-semibold uppercase tracking-wider text-ink-soft"
      >
        Modern tools
      </h2>
      <p className="mt-2 text-sm text-ink-faint text-pretty">
        Contemporary apps for the same task, published by HELPERG LLC — the
        publisher of this archive.
      </p>
      <ul className="mt-4 space-y-5">
        {resolved.map((p) => (
          <li key={p.id}>
            <p className="font-serif text-base text-ink">{p.name}</p>
            <p className="mt-0.5 text-sm text-ink-soft text-pretty">
              {p.tagline}
            </p>
            <p className="mt-1.5 flex flex-wrap gap-x-4 gap-y-1 font-sans text-sm">
              {p.links.map((l) => (
                <a
                  key={l.label}
                  href={l.href}
                  target="_blank"
                  rel="noopener noreferrer nofollow"
                  className="no-underline hover:underline"
                >
                  {l.label} ↗
                </a>
              ))}
            </p>
          </li>
        ))}
      </ul>
    </section>
  );
}
```

Commit: `feat(content): add ModernTools editorial CTA component`

### A3 — MODIFY `lib/content/types.ts`

Append to `BaseEntry`, after the existing `deepReading?` field (added in Phase 5.2):

```ts
modernTools?: import("@/lib/products").ProductId[];
```

(Use the inline `import(...)` type so `types.ts` does not gain a top-level runtime import — keeps the content-check script's type-stripping clean. If the implementer prefers a top-level `import type { ProductId } from "@/lib/products";` that is also acceptable since it is type-only and erased.)

Commit: `feat(types): add modernTools BaseEntry field`

### A4 — MODIFY `components/pages/ArticlePage.tsx`

Add import:
```tsx
import { ModernTools } from "@/components/content/ModernTools";
```

The current bottom block (after Phase 5.2) is:
```tsx
{e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
{e.sources?.length ? <SourceTransparency sources={e.sources} /> : null}
{e.footnotes?.length ? <ArchiveFootnotes footnotes={e.footnotes} /> : null}
{e.deepReading?.length ? <DeepReadingLinks items={e.deepReading} /> : null}
<RelatedLinks items={related} />
```

Add ModernTools as the LAST element, after RelatedLinks:
```tsx
{e.faqs?.length ? <FaqList faqs={e.faqs} /> : null}
{e.sources?.length ? <SourceTransparency sources={e.sources} /> : null}
{e.footnotes?.length ? <ArchiveFootnotes footnotes={e.footnotes} /> : null}
{e.deepReading?.length ? <DeepReadingLinks items={e.deepReading} /> : null}
<RelatedLinks items={related} />
{e.modernTools?.length ? <ModernTools products={e.modernTools} /> : null}
```

Rationale: editorial/internal content (related reading) precedes the external commercial note.

Commit: `feat(pages): render ModernTools last in ArticlePage when entry opts in`

### A5 — MODIFY `lib/content/integrity.ts`

Add a `modernTools` validation rule inside the `for (const e of entries)` loop, after the deepReading check (Phase 5.2). The valid IDs are hardcoded as a local set (do NOT add a runtime `@/` import — the content-check script runs raw under node type-stripping and cannot resolve the alias):

```ts
    // modernTools integrity: each id must be a known product.
    // Keep VALID_PRODUCT_IDS in sync with ProductId in lib/products.ts.
    const VALID_PRODUCT_IDS = new Set([
      "zip-rar",
      "smart-printer",
      "fax-app",
      "pdf-editor",
    ]);
    const mt = (e as { modernTools?: unknown }).modernTools;
    if (mt !== undefined) {
      if (!Array.isArray(mt)) {
        issues.push(`${key}: modernTools must be an array`);
      } else {
        for (const id of mt) {
          if (typeof id !== "string" || !VALID_PRODUCT_IDS.has(id)) {
            issues.push(
              `${key}: modernTools id does not resolve -> ${String(id)}`,
            );
          }
        }
      }
    }
```

Commit: `feat(integrity): validate modernTools product ids`

### A6 — MODIFY `scripts/integrity.test.mjs`

Append two tests:

```js
test("modernTools with unknown id -> issue", () => {
  const e = { ...base, modernTools: ["not-a-real-product"] };
  const issues = findContentIssues([e]);
  assert.ok(
    issues.some((i) => i.includes("modernTools id does not resolve")),
  );
});

test("modernTools with valid ids -> no issues", () => {
  const e = { ...base, modernTools: ["smart-printer", "pdf-editor"] };
  assert.deepEqual(findContentIssues([e]), []);
});
```

Commit: `test(integrity): cover modernTools product-id validation`

### Task A verification

```
npm run typecheck   # clean
npm run lint        # clean
npm run test:content  # 72 entries, no issues (no entry uses modernTools yet)
npm run test:unit   # 34/34 (32 existing + 2 new)
```

---

## Task B — Backfill `modernTools` on 19 entries

Add a `modernTools: [...]` field to each entry below, placed immediately after the entry's `keywords:` array. Also bump each entry's `updated:` to `2026-05-20`. Change NOTHING else.

| File | modernTools value |
|---|---|
| `content/history/transition-from-impact-to-laser-printing.ts` | `["smart-printer"]` |
| `content/mobile-printing/what-is-airprint.ts` | `["smart-printer"]` |
| `content/mobile-printing/printing-from-a-chromebook.ts` | `["smart-printer"]` |
| `content/workflows/mobile-office-printing.ts` | `["smart-printer"]` |
| `content/workflows/print-documents-from-ipad.ts` | `["smart-printer"]` |
| `content/workflows/print-from-iphone.ts` | `["smart-printer"]` |
| `content/workflows/print-from-android.ts` | `["smart-printer"]` |
| `content/workflows/print-shipping-labels.ts` | `["smart-printer"]` |
| `content/workflows/scan-to-searchable-pdf.ts` | `["pdf-editor", "zip-rar"]` |
| `content/guides/how-wireless-printing-works.ts` | `["smart-printer"]` |
| `content/guides/what-is-postscript-printing.ts` | `["pdf-editor"]` |
| `content/tools/what-is-pdf.ts` | `["pdf-editor", "zip-rar"]` |
| `content/glossary/ocr.ts` | `["pdf-editor"]` |
| `content/fax/decline-of-office-fax-machines.ts` | `["fax-app"]` |
| `content/fax/fax-machines-before-email.ts` | `["fax-app"]` |
| `content/fax/history-of-business-faxing.ts` | `["fax-app"]` |
| `content/fax/analog-fax-vs-digital-fax.ts` | `["fax-app"]` |
| `content/fax/why-fax-is-still-used.ts` | `["fax-app"]` |
| `content/fax/how-fax-machines-work.ts` | `["fax-app"]` |

One commit covering all 19 (one concern: "wire the ecosystem CTAs into contextually-relevant entries").

Note: `history-of-business-faxing.ts` already has `updated: "2026-05-20"` from Phase 5.1; leave it.

### Task B verification

```
npm run typecheck     # clean
npm run lint          # clean
npm run test:content  # 72 entries, no issues (ids resolve)
```

Commit: `feat(content): wire ecosystem product CTAs into 19 contextually-relevant entries`

---

## Task C — Footer "Modern tools" column

MODIFY `components/layout/Footer.tsx`.

1. Add import: `import { PRODUCTS } from "@/lib/products";`
2. The footer's top grid is currently `md:grid-cols-[1.4fr_1fr_1fr_1fr]` (brand + 3 nav groups). Change it to `md:grid-cols-[1.4fr_1fr_1fr_1fr_1fr]` to add a 5th column.
3. After the existing `{FOOTER_GROUPS.map(...)}` block (still inside the grid `<div>`), add a new nav column:

```tsx
<nav aria-label="Modern tools">
  <p className="kicker">Modern tools</p>
  <ul className="mt-3 space-y-1.5 font-sans text-sm text-ink-soft">
    {Object.values(PRODUCTS).map((p) => (
      <li key={p.id}>
        <a
          href={p.links[0].href}
          target="_blank"
          rel="noopener noreferrer nofollow"
          className="no-underline transition-colors hover:text-accent"
        >
          {p.name}
        </a>
      </li>
    ))}
  </ul>
</nav>
```

(Footer links each product to its first platform link — for the 3 apps that is the Android Play Store URL; for PDF Editor it is the web URL. Single-destination simplification appropriate for a static footer.)

Make NO other changes to Footer.tsx.

### Task C verification

```
npm run typecheck   # clean
npm run lint        # clean
npm run build       # 96 routes (no new routes)
```

Commit: `feat(footer): add ecosystem 'Modern tools' column`

---

## Controller QA + push

```
npm run typecheck
npm run lint
npm run test:content   # 72 entries, no issues
npm run test:unit      # 34/34
npm run build          # 96 prerendered routes
```

HTML inspection (built artefacts):
- `/tools/what-is-pdf`: contains "Modern tools" section + `pdfeditconvert.top` link + `com.ziparchivator.zip` link, both with `rel="noopener noreferrer nofollow"`.
- `/fax/why-fax-is-still-used`: contains the Fax App section + `com.helperg.fax.app` link.
- `/mobile-printing/what-is-airprint`: contains the Smart Printer section + `com.helperg.smart.printer` link.
- `/workflows/scan-to-searchable-pdf`: contains BOTH pdf-editor and zip-rar.
- A page with NO modernTools (e.g., `/history/early-computer-printing`): contains NO "Modern tools" section (confirms it's not global to articles).
- Footer (any page, e.g., `/about`): contains the "Modern tools" column with all 4 products.
- Single `<h1>` preserved on all inspected pages.
- `nofollow` present on every external product link.

Push: `git push origin feat/foundation-architecture`.

## Skipped (report these)

- All history pages except transition-from-impact-to-laser-printing.
- All troubleshooting pages (diagnostic context; CTA inappropriate mid-diagnosis).
- Most guides (only how-wireless-printing-works + what-is-postscript-printing).
- Most glossary (only ocr).

## Done criteria

- 19 entries render the ModernTools section; non-opted pages do not.
- Footer carries the Modern tools column site-wide.
- Every external product link is `rel="noopener noreferrer nofollow" target="_blank"`.
- 5 QA commands pass; 34/34 unit tests; 96 routes.
- Branch `feat/foundation-architecture` only; no merge to main.
- Final report delivered.
