# IndexNow

PrinterArchive uses [IndexNow](https://www.indexnow.org/) to tell participating
search engines (Bing, Yandex, Seznam, and others that share the protocol) when
pages are added or updated, so they recrawl sooner instead of waiting for a
scheduled crawl. IndexNow supplements — it does not replace — the sitemap and
Google Search Console.

## How it works

1. A **verification key file** is committed to the site root so engines can
   confirm we own the key.
2. After a deploy, a **submitter script** reads the *live* sitemap and POSTs the
   URL list to the IndexNow API, referencing the key file.

## The key

The key is a 32-character value. It lives in exactly two places:

| Where | Purpose |
| --- | --- |
| `public/57070f029d1648d78750aeeb18ac1876.txt` | Public verification file (contents = the key). Served at `https://printerarchive.net/57070f029d1648d78750aeeb18ac1876.txt`. |
| `INDEXNOW_KEY` environment variable / repo secret | Read by the submitter script. Must equal the `.txt` filename stem. |

The key is **never hardcoded** anywhere else — not in the script, the workflow,
or `.env.example`. To rotate it: rename the `.txt` file (its contents must match
the new stem) and update the `INDEXNOW_KEY` secret.

## Submitting

```bash
# Submit every live sitemap URL (reads https://printerarchive.net/sitemap.xml)
INDEXNOW_KEY=57070f029d1648d78750aeeb18ac1876 npm run indexnow

# Preview what would be sent, without POSTing
INDEXNOW_KEY=... npm run indexnow -- --dry-run

# Submit one or more specific URLs (e.g. after editing a single page)
INDEXNOW_KEY=... npm run indexnow -- --url https://printerarchive.net/guides/how-laser-printers-work

# Submit from a local sitemap file (e.g. offline testing)
INDEXNOW_KEY=... SITEMAP_FILE=./sitemap.xml npm run indexnow
```

The script only submits URLs whose host matches `SITE_URL` (IndexNow rejects
foreign hosts), batches at the 10,000-URL protocol limit, and treats HTTP 200
and 202 as success.

### Environment variables

| Variable | Default | Meaning |
| --- | --- | --- |
| `INDEXNOW_KEY` | — (required) | The key; must equal the `.txt` filename stem. |
| `SITE_URL` | `https://printerarchive.net` | Canonical origin. |
| `SITEMAP_URL` | `$SITE_URL/sitemap.xml` | Where URLs are read from. |
| `SITEMAP_FILE` | — | Read a local sitemap file instead of fetching. |
| `INDEXNOW_ENDPOINT` | `https://api.indexnow.org/indexnow` | API endpoint (shared across engines). |
| `DRY_RUN` | — | `1`/`true`/`yes`/`on` skips the POST (prefer the `--dry-run` flag). |

## Automatic submission after deployment

Because the script reads the **live** sitemap, it must run *after* the deploy is
live. Choose the trigger that matches how PrinterArchive is hosted:

### GitHub Actions (default, wired)

`.github/workflows/indexnow.yml` runs on the `deployment_status` event and only
acts when a **production** deployment reports `success` — the state that
Netlify's and Vercel's GitHub integrations emit once a deploy is live. It also
supports manual runs from the Actions tab (`workflow_dispatch`).

One-time setup: add a repository secret **`INDEXNOW_KEY`** =
`57070f029d1648d78750aeeb18ac1876`. Without the secret the job logs a skip and
exits 0.

### Netlify (alternative)

Add a build plugin with an `onSuccess` hook, or a post-processing step, that
runs `node scripts/indexnow-submit.mjs` with `INDEXNOW_KEY` set as a Netlify
environment variable. `onSuccess` fires only after a successful deploy.

### Vercel (alternative)

Add a [Deploy Hook](https://vercel.com/docs/deploy-hooks) or a
`vercel.json` post-deploy step / cron that invokes the script with
`INDEXNOW_KEY` set as a Vercel environment variable.

## Verification checklist

- [ ] Key file resolves: `curl -sSf https://printerarchive.net/57070f029d1648d78750aeeb18ac1876.txt` returns the key.
- [ ] Endpoint reachable: `INDEXNOW_KEY=... npm run indexnow -- --dry-run` prints the batch summary.
- [ ] After a production deploy, the **IndexNow submit** workflow run shows HTTP 200/202.
- [ ] Bing Webmaster Tools → IndexNow shows recent submissions.
