# Gadaa Securities Dealer — React + Vite (Redesign v2)

This is a full visual redesign of your Gadaa Securities Dealer site, built
on the same React + Vite architecture as before, but with a new design
system aimed at a more professional, institutional, capital‑markets feel.

## What changed in this redesign

**Palette** — moved off the generic red/white scheme to a four‑colour system:
deep navy (`#0A1628`) as the dominant authoritative tone, a tightened
crimson (`#C8102E`) used only for primary actions and key accents, a cool
off‑white (`#F0F4F8`) page background, and an antique‑gold accent
(`#B8965A`) used sparingly for borders, icons, and highlights — a nod to
Ethiopian regalia and the Gadaa system's ceremonial colour, used as the
signature accent that ties the whole site together.

**Typography** — replaced the single geometric sans (Outfit) with a serif +
sans pairing: **DM Serif Display** for headlines (gives the site an
established, institutional voice) and **Inter** for body copy and UI
(clean and highly legible at small sizes).

**Signature element** — the homepage hero now opens with a scrolling
ESX‑style ticker tape (animated, monospace, market‑data styling) that
immediately signals "live capital markets" rather than generic corporate
stock‑photo energy. Nothing else in the original design had this kind of
distinctive, ownable visual signature.

**Hero layout** — replaced the old left‑text/floating‑cards hero with a
disciplined two‑column layout: editorial headline + CTA on the left, and a
dark "credential card" on the right styled like an actual ESX membership
certificate (registration number, license date, capital, shareholder
structure) — turning dry compliance facts into a trust‑building visual
element instead of a buried paragraph.

**Section rhythm** — pages now alternate between light and full‑bleed dark
navy panels (e.g. the Solutions section, Core Services on the Services
page) instead of being a uniform scroll of white cards, which creates
visual pacing and makes each section easier to scan.

**Cards & interactions** — every card type (solution cards, news cards,
board/management cards, value pills, FAQ accordion) was redrawn with
consistent radius, shadow, and hover language (subtle lift + gold accent
line) instead of the previous mix of ad‑hoc styles.

**Functional contact form** — the Contact page now has a real working
form UI (name / email / subject / message) styled to match the new system.
It currently just shows a confirmation state on submit — wire it to
Formspree, EmailJS, or your own backend endpoint to actually deliver
messages (see the `handleSubmit` function in `src/pages/ContactUs.jsx`).

Functionally, the site behaves identically to before: same routes, same
mobile menu/dropdown behaviour, same scroll‑reveal animations, same FAQ
accordion logic, same Tidio chat widget — only the visual design changed.

## ⚠️ Images you still need to add

Same as before — your original files referenced a logo and several photos
that weren't included in what you uploaded. Add them to `public/images/`
using the filenames listed in `public/images/README.md`. The hero's
credential card and ticker tape don't need any images (they're built with
CSS/SVG), but the About section image and news card images do.

---

## 1. Run it locally

```bash
npm install
npm run dev
```

Open the printed URL (usually `http://localhost:5173`).

## 2. Build for production

```bash
npm run build
```

Creates an optimized static `dist/` folder — this is what you upload to
cPanel.

```bash
npm run preview   # optional: preview the production build locally
```

---

## 3. Deploying to cPanel

### Deploying at your domain root (most common)

1. Run `npm run build` → creates `dist/`.
2. Log in to **cPanel → File Manager** (or use FTP/SFTP).
3. Navigate to `public_html/`. Back up or clear any old site files first.
4. Upload the **contents** of `dist/` (not the folder itself) into
   `public_html/`. You should end up with `public_html/index.html`,
   `public_html/assets/...`, `public_html/images/...`,
   `public_html/.htaccess`.
   - Easiest: zip the contents of `dist/`, upload via File Manager, then
     use "Extract" inside `public_html/`.
5. Confirm `.htaccess` made it into `public_html/` (enable "Show Hidden
   Files" in File Manager settings if you don't see it) — this is what
   makes refreshing `/about`, `/contact`, etc. work instead of 404ing.
6. Visit your domain.

### Deploying into a subfolder instead

If your site should live at `https://yourdomain.com/gadaa/` rather than
the root:

1. In `vite.config.js`, change `base: '/'` to `base: '/gadaa/'`.
2. In `public/.htaccess`, change `RewriteBase /` to `RewriteBase /gadaa/`.
3. Run `npm run build` again, then upload `dist/`'s contents into
   `public_html/gadaa/`.

### Updating later

```bash
npm run build
```

then re‑upload the new `dist/` contents to the same cPanel folder,
overwriting existing files.

---

## 4. Project structure

```
├── index.html              # Vite entry HTML — loads DM Serif Display + Inter, Font Awesome
├── vite.config.js
├── package.json
├── public/
│   ├── .htaccess           # SPA routing + caching for Apache/cPanel
│   └── images/             # ⚠️ add your real images here
└── src/
    ├── main.jsx
    ├── App.jsx              # Routes: /, /about, /services, /leadership, /contact
    ├── components/
    │   ├── Layout.jsx
    │   ├── TopBar.jsx
    │   ├── Header.jsx        # Nav + slide-in mobile drawer + dropdown
    │   ├── Footer.jsx
    │   ├── LoadingScreen.jsx
    │   ├── FAQItem.jsx
    │   └── ScrollToTop.jsx
    ├── pages/
    │   ├── Home.jsx           # Ticker hero, credential card, solutions, MVV, news, CTA
    │   ├── AboutUs.jsx
    │   ├── Services.jsx
    │   ├── Leadership.jsx
    │   ├── ContactUs.jsx      # Includes working contact form UI
    │   └── NotFound.jsx
    ├── data/
    │   └── newsData.js
    ├── hooks/
    │   ├── useScrollAnimation.js
    │   └── useDocumentTitle.js
    └── styles/
        ├── global.css          # Design tokens, nav, footer, buttons, page-header
        ├── home.css             # Hero, ticker, credential card, solutions, MVV, news, CTA
        └── pages.css            # Shared styles for About / Services / Leadership / Contact
```

## 5. Design tokens reference

All colours, shadows, and radii are defined as CSS custom properties at
the top of `src/styles/global.css`:

```css
--navy:       #0A1628   /* primary dark / header / footer */
--crimson:    #C8102E   /* primary action colour */
--gold:       #B8965A   /* accent — borders, icons, highlights */
--off-white:  #F0F4F8   /* page background */
```

Change these four values to retheme the entire site without touching any
component.
