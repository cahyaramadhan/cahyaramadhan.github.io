# Portfolio Site

Personal portfolio for Cahya Ramadhan (Backend Engineer), built to be
scanned quickly by recruiters and easy to keep updated as experience grows.

## Tech stack

- React 18 + Vite 5 (plain JS, no TypeScript)
- Tailwind CSS 3 (utility classes, dark theme only, `darkMode: 'class'`)
- `react-router-dom` v6 (`BrowserRouter`) — the homepage is one scrolling,
  anchor-linked page (`/`), plus a real route per project for detail pages
  (`/projects/:slug`). See "Routing" below for why `BrowserRouter` over
  `HashRouter` and how GitHub Pages deep-linking is handled.
- No component library, no icon package — `src/components/Icon.jsx` has a
  small hand-rolled inline SVG set
- Deployed via GitHub Actions to GitHub Pages (`.github/workflows/deploy.yml`)

Node 18.16.1 is the dev machine's version — that's why `vite@5` and
`tailwindcss@3` are pinned instead of the latest majors (Vite 6/7 and
Tailwind 4 require Node 18.18+/20+). Bump these once Node is upgraded.

## Design direction (intentional — don't drift back)

Warm neutral palette (`stone-*` grays + amber `accent` color defined in
`tailwind.config.js`), **not** the cyan-on-slate-navy + numbered
"01./02." section headings + "Hi, my name is" hero copy that's extremely
common among cloned dev-portfolio templates (the Brittany Chiang v4
template and its many derivatives). The user explicitly asked to avoid
looking like a copy of a reference site they found, so:

- Accent color is amber (`accent`/`accent-light`/`accent-dark` in
  `tailwind.config.js`), not cyan. Change it there, not per-component —
  every component references the `accent` Tailwind color token.
- `SectionHeading.jsx` uses an uppercase kicker label over the title, no
  numbering, no horizontal rule.
- `Hero.jsx` uses a pill badge (role · location) + name + accent-colored
  tagline, not the "Hi, my name is / Name / I build things" cadence.
- If restyling further, keep it away from that specific combination
  (cyan + numbered sections + that hero copy pattern) since that's the
  signature being deliberately avoided.

## Routing

- `/` — the single-page scroller (`src/pages/Home.jsx`): Hero → Skills →
  Experience → Projects → Education → Contact, all anchor-linked
  (`#skills`, `#experience`, etc.) with smooth scroll.
- `/projects/:slug` — `src/pages/ProjectDetail.jsx`, a full detail page
  per project (bigger image, extended write-up, tech stack, link back to
  the job it came from).
- `Navbar` is mounted outside `<Routes>` in `App.jsx` so it persists
  across both; its section links use `src/hooks/useSectionNav.js`, which
  scrolls directly if already on `/` or navigates to `/` with router
  `state` (`{ scrollTo, experienceId }`) otherwise — `Home.jsx` reads that
  state on mount and finishes the scroll/tab-focus.

### Project → Experience linking

Each project's company badge (on the card and the detail page) links back
to the specific job it came from — not just by matching company name
(two jobs share the literal company string `"PT Harmoni Mitra Jayandra"`,
one an onsite eDOT placement, one not), but via a stable `id` on each
`experience[]` entry and a matching `experienceId` on the `projects[]`
entry. Clicking it scrolls to `#experience` and auto-selects the right
tab via a `portfolio:focus-experience` window `CustomEvent` that
`Experience.jsx` listens for. **When adding a project, always set
`experienceId` to the correct `experience[].id`, not just a `company`
string match.**

### GitHub Pages deep-linking (`BrowserRouter`, not `HashRouter`)

`BrowserRouter` was chosen over `HashRouter` for clean URLs
(`/projects/fico-finance-core`, not `/#/projects/fico-finance-core`), but
GitHub Pages is static hosting with no server-side rewrites — a direct
hit or refresh on `/projects/fico-finance-core` would 404 without help.
This is solved with the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages) trick:
- `public/404.html` — GitHub Pages serves this for any unknown path; it
  redirects to `/?/projects/fico-finance-core` (query-string encoded).
- A small inline script in `index.html`'s `<head>` decodes that query
  string back into a real path via `history.replaceState` before React
  Router mounts.
- `pathSegmentsToKeep` in `404.html` is `0` because this deploys as a
  *user* site (`cahyaramadhan.github.io`, no subpath). If this ever moves
  to a project repo, bump it to `1` and update `vite.config.js`'s `base`
  to match (see "Deployment" below).

Locally, `vite dev` and `vite preview` already serve `index.html` for
unknown paths (SPA fallback built in), so you can test deep links
(`http://localhost:5173/projects/oripay-qris`) without the 404.html trick
kicking in — that only matters on actual GitHub Pages.

## Editing content — read this first

**All content lives in [src/data/portfolio.js](src/data/portfolio.js).**
That is the only file that should need edits for day-to-day updates: new
job, new project, new skill, updated summary, etc. Do not hardcode content
into components — components should only read from this file.

- `profile` — name, title, location, summary blurb, hero stat highlights, resume PDF path
- `skills` — flat list with `featured: true/false`. Featured skills render
  as larger accent-colored chips in the Skills section; the rest render as
  small muted chips below. **No proficiency percentages/bars by design** —
  the user explicitly does not want them.
- `experience` — reverse-chronological (most recent first). Renders as
  tabs in the Experience section. Each entry needs a stable `id` (see
  "Project → Experience linking" above) and can optionally set `tabLabel`
  if the plain `company` name would be ambiguous with another entry.
- `projects` — named projects surfaced separately from the experience
  bullets, since recruiters scan projects before reading job prose. Each
  entry needs a unique `slug` (used in its `/projects/:slug` URL),
  `experienceId` (must match an `experience[].id`), `description` (short,
  shown on the card), `details` (array of paragraphs, shown on the detail
  page only), plus `image` and `link` (see below).
- `education`
- `socials` — email/LinkedIn/GitHub icons shown in the hero and contact section

### Adding a project

1. Copy an existing entry in the `projects` array.
2. Give it a unique `slug` (URL-safe, e.g. `my-new-project`).
3. Set `experienceId` to the `id` of the matching `experience[]` entry —
   this is what makes the company badge link to the right job.
4. Fill in `description` (card blurb) and `details` (detail-page paragraphs).

### Adding a project image

1. Drop the file in `src/assets/projects/`.
2. `import` it at the top of `src/data/portfolio.js`, e.g.
   `import ficoImg from '../assets/projects/fico.png'`.
3. Set it as the `image` field on that project's object.

Leave `image: null` and the project card/detail page falls back to an
auto-generated placeholder (gradient + code icon) — never a broken image.
The five projects currently ship with generated SVG banners
(`src/assets/projects/*.svg`, amber/stone palette) as sample placeholders
— swap them for real product screenshots the same way whenever available.

### Section order (intentional, do not reshuffle without reason)

Hero → Skills → Experience → Projects → Education → Contact. Experience is
placed before Projects because this resume is experience-heavy (four real
backend roles); Projects are the named deliverables pulled out of that
experience for a fast recruiter scan, not a separate hobby-projects
section. If the user later adds independent side projects, keep the most
resume-relevant/impressive ones first within the array — order in the
array is render order.

## Structure

```
src/
  data/portfolio.js       <- edit this for content changes
  pages/Home.jsx          <- the single-page scroller (route: "/")
  pages/ProjectDetail.jsx <- per-project detail page (route: "/projects/:slug")
  components/             <- presentational only, read from data/portfolio.js
  hooks/useReveal.js      <- scroll-triggered fade-in animation (IntersectionObserver)
  hooks/useSectionNav.js  <- cross-route section navigation + experience-tab focusing
  App.jsx                 <- <Routes> definitions + persistent Navbar/Footer
public/
  resume/                 <- resume PDF served as a static download (linked from Navbar + hero)
  404.html                <- GitHub Pages SPA deep-link fallback (see "Routing" above)
  favicon.svg
.github/workflows/deploy.yml   <- builds and deploys dist/ to GitHub Pages on push to main
```

## Deployment

Target: **`cahyaramadhan.github.io`** (a GitHub *user* site, not a project
page), so `vite.config.js` has `base: '/'` and `public/404.html` has
`pathSegmentsToKeep = 0`. If this ever moves to a project repo
(`username.github.io/repo-name`), change `base` to `/repo-name/`,
`pathSegmentsToKeep` to `1`, and update any absolute asset paths.

To ship:
1. Push a repo named exactly `cahyaramadhan` → rename/create as
   `cahyaramadhan.github.io` on GitHub (user sites must match that exact
   name), push this code to `main`.
2. In the repo's Settings → Pages, set Source to "GitHub Actions" (the
   workflow handles the rest — no manual `gh-pages` branch needed).
3. Every push to `main` rebuilds and redeploys automatically.

Local commands:
- `npm run dev` — dev server
- `npm run build` — production build to `dist/`
- `npm run preview` — preview the production build locally
- `npm run deploy` — manual fallback deploy via `gh-pages` package (not
  needed if the Actions workflow is set up, kept as a backup path)

Full run-locally/deploy walkthrough is in [README.md](README.md) — this
file covers the *why*, README covers the *how*.

## Known placeholders to verify

- `profile.github` in `src/data/portfolio.js` is currently a guessed URL
  (`github.com/cahyaramadhan`) — confirm/correct this against the real
  GitHub profile.
- All `projects[].image` are generated sample SVG banners, not real
  product screenshots — swap per "Adding a project image" above whenever
  the user has real ones.

## Content source of truth

Resume lives at `resume/Cahya_Ramadhan_Resume.pdf` and
`resume/Cahya_Ramadhan_Resume.md` (outside `src/`, not part of the built
site — the PDF is copied into `public/resume/` separately for the
downloadable link). When the resume changes, update both the resume files
and `src/data/portfolio.js` by hand; they are not auto-synced.
