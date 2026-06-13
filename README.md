# Hawthorne Development — Website

Marketing site for **Hawthorne Development** (hawthornedevco.com): custom homes
and commercial building across Telluride & San Miguel County, Colorado.

Built with **Vite + React + React Router**, statically pre-rendered with
**vite-react-ssg** so every page ships as real, crawlable HTML (good for SEO and
link previews). No CSS framework — a hand-written design system in `src/index.css`.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # static pre-render to /dist (vite-react-ssg)
npm run preview  # preview the production build
```

## Structure

```
index.html               # base template; per-page <head> comes from <Seo>
src/
  main.jsx               # vite-react-ssg entry
  routes.jsx             # route table (each path is pre-rendered)
  App.jsx                # layout: Navbar + <Outlet> + Footer
  index.css              # design system + all styles
  data/site.js           # ALL editable copy, per page  ← edit here
  pages/                 # Home, Residential, Commercial, About, Portfolio, Contact, NotFound
  components/            # Navbar, Footer, Seo, PageHero, Blank, Logo
public/
  robots.txt, sitemap.xml, og-image.png, favicon.svg
```

Pages: **Home · Residential · Commercial · About · Portfolio · Contact**.
Edit all copy in **`src/data/site.js`** — it's organized one object per page.

## Filling the blanks before launch

Copy still needing real input is marked with `NEEDS(...)` in `src/data/site.js`.
Such placeholders are **hidden on the live/production build** and only show in
`npm run dev` as a reminder. Replace each `NEEDS(...)` with a plain string to
publish it. Status:

- [x] **Founders' names** — Chris Carter and Bevin Carter (About).
- [ ] **Founder background** (About) — *the most important item on the site.* Still
      empty (hidden on the live site until filled). Add 3–5 sentences of real,
      verifiable experience for Chris & Bevin.
- [x] **Portfolio focus** — "new homes for the 2026 season" (honest "now building"
      statement; no fake gallery). Add real projects to `portfolio.projects` when
      ready (real work only — no stock photos).
- [~] **Warranty terms** (Residential → "Documented and warranted") — currently a
      generic line ("handed over fully documented, and we stand behind our work").
      Replace with specific terms if you offer them.
- [x] **Phone** — removed from the site for now (`company.phone = null`).
- [ ] Confirm **email** (`info@hawthornedevco.com`) is correct.

## Contact form → Kit

The contact form submits to the Kit form **"Hawthorne Development — Inquiries"**
(uid `08089ad645`, auto-confirm on). Config in `src/data/site.js` (`contact.kit`),
handler in `src/pages/Contact.jsx`. Name / phone / project type / location are
composed into the Kit **Message** custom field so the full inquiry is captured.
Verified end-to-end (test submission → Confirmed subscriber in Kit).

## Also before launch

- [ ] Confirm/replace the **brand color hexes** (top of `src/index.css`) with
      official colors. Current palette is a Telluride-inspired placeholder.
- [ ] Replace the placeholder **`public/og-image.png`** with final brand artwork
      if desired (1200×630).
- [ ] Run the name past a **USPTO trademark check** (several other "Hawthorne"
      builders exist).

## Design — "Town of Telluride" palette

Deep spruce greens, San Juan slate-blue, aspen gold, Main Street cream. Defined
as CSS variables at the top of `src/index.css`. Headings use **Fraunces**; body
uses **Inter**.

| Token         | Hex       | Use                          |
|---------------|-----------|------------------------------|
| `--evergreen` | `#1f3a2c` | Primary — deep spruce        |
| `--pine`      | `#3a6b50` | Secondary green              |
| `--slate`     | `#2e4756` | Mountain blue-slate          |
| `--gold`      | `#c79a3b` | Accent — aspen / mining gold |
| `--clay`      | `#9c5b3b` | Victorian brick detail       |
| `--cream`     | `#f6f1e7` | Page background / stone       |

## Deploy

Pushing to `main` triggers a GitHub Actions workflow that builds and deploys
`dist/` to the existing Cloudflare Pages project `hawthornedevco`
(see `.github/workflows/deploy.yml`).
