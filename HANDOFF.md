# Balaraman Sriram — Session Handoff

> Personal profile / portfolio site. Repo: `srirambm-ysa/balaramansriram`. Live: https://balaramansriram.com
> Hosting: Cloudflare Worker (`worker.js`) + static assets (repo root) + KV `VISITOR_COUNT`.

## Architecture

| File | Role |
|---|---|
| `index.html` | Shell with inline CSS; empty `<section>` containers |
| `app.js` | Rendering engine — reads `DATA` and injects markup at runtime |
| `data.js` | **ALL content** (nav, hero, lab, study, blueprint, contact, footer). Edit this to change the site |
| `worker.js` | Serves assets; `/api/visitor-count` increments the KV counter |
| `wrangler.jsonc` | Worker config (`main: worker.js`, `assets.directory: "."`, KV binding) |

## Session 2026-10-30 — SEO / discoverability metadata pass (zero-risk) ✅

**Problem:** the page is fully client-rendered — crawlers saw only ~37 characters (no headings or content
in the HTML shell). No meta description, OG/Twitter, canonical, JSON-LD, or sitemap; `/favicon.ico` 404.

**Done this session (head-only + static files; no `app.js`/`data.js`/`worker.js` changes):**
- `index.html` head: searchable `<title>` ("Balaraman Sriram — AI Systems, Strategy & Stories"), meta
  description, canonical, theme-color, author, OG (`og:type=profile`) + Twitter cards, and JSON-LD
  (`Person` + `ProfilePage` + `WebSite` with `sameAs` GitHub / Substack / LinkedIn).
- New files at repo root: `favicon.ico`, `apple-touch-icon.png`, `icon-192.png`, `icon-512.png`,
  `og.png` (1200×630), `manifest.webmanifest`, `robots.txt` (with `Sitemap:`), `sitemap.xml`.
- Verified: JSON-LD/manifest/sitemap parse; HTML has no stray tags; local smoke test all 200.

**Caveat:** PNG icons/OG use a `BS` monogram / profile photo; SVG `logo.svg` keeps the gradient mark.
Bundle Noto Sans Tamil later only if Tamil text is wanted in raster OG cards (not needed for this site).

**Next (highest impact first):**
1. **Pre-render to static HTML** — crawlers still see an empty shell. Add a small `build.js` that runs the
   render functions over `data.js` and writes the full markup into `index.html` (progressive enhancement;
   keep `app.js` + `worker.js`).
2. Add real content: a `/writing` (or `/notes`) section with individual articles, and a `/projects/<slug>`
   page per Lab/Study item — a single profile page has little to rank for.
3. Verify Google Search Console + Bing Webmaster, submit `sitemap.xml`.
4. Deploy: push to `main` (Cloudflare Workers git integration) or `npx wrangler deploy`.

## Watch Outs

- **Content lives in `data.js`** — do not hand-edit rendered markup in `index.html`; change `data.js`.
- **`assets.directory: "."`** — everything in the repo root is served as a static asset; keep secrets out.
- **Visitor counter** uses KV `VISITOR_COUNT`; `/api/visitor-count` is handled before asset serving.
- **No build step today** — `index.html` is served as-is; a pre-render step (next step #1) would add one.
