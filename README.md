# Hawthorne Development — Website

A React single-page marketing site for **Hawthorne Development** (hawthornedevco.com): residential & commercial real estate investment, development, and construction management in Telluride / San Miguel County, Colorado.

Built with **Vite + React**. No CSS framework — a small hand-written design system in `src/index.css`.

## Run it

```bash
npm install
npm run dev      # local dev server (http://localhost:5173)
npm run build    # production build to /dist
npm run preview  # preview the production build
```

## Structure

```
index.html              # entry, loads Google Fonts (Fraunces + Inter)
src/
  main.jsx              # React root
  App.jsx               # page composition
  index.css             # design system + all styles
  data/site.js          # ALL editable content (copy, services, projects)
  components/
    Navbar, Hero, Services, Approach, Projects, About, Contact, Footer, Logo
```

Edit copy in **`src/data/site.js`** — services, the 4-step approach, projects, email, and location all live there.

## Design — "Town of Telluride" palette

Colors are inspired by Telluride's alpine / Victorian-mining-town identity, since the
official town site (telluride-co.gov) was unreachable when this was built. Defined as
CSS variables at the top of `src/index.css` — replace with exact brand hexes when finalized.

| Token         | Hex       | Use                          |
|---------------|-----------|------------------------------|
| `--evergreen` | `#1f3a2c` | Primary — deep spruce        |
| `--pine`      | `#3a6b50` | Secondary green              |
| `--slate`     | `#2e4756` | Mountain blue-slate          |
| `--gold`      | `#c79a3b` | Accent — aspen / mining gold |
| `--clay`      | `#9c5b3b` | Victorian brick detail       |
| `--cream`     | `#f6f1e7` | Page background / stone       |

Headings use the **Fraunces** serif; body uses **Inter**.

## This is a stub — before launch

- [ ] Replace placeholder **projects** + add real photography
- [ ] Write the real **About** copy, leadership bio, and contractor license #
- [ ] Add a **phone number** in `site.js`
- [ ] Connect the **contact form** to a service (Formspree, Basin) or backend — it is non-functional
- [ ] Confirm/replace the **color hexes** with official brand colors
- [ ] Add metadata / Open Graph tags and a sitemap for SEO
- [ ] Run the name past a USPTO trademark check (several other "Hawthorne" builders exist)
