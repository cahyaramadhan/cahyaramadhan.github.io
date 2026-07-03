# Cahya Ramadhan — Portfolio

Personal portfolio site for Cahya Ramadhan, Backend Engineer. A single
scrolling homepage built to be scanned quickly by recruiters (hero intro →
skills → work experience → projects → education → contact), plus a real
detail page per project for anyone who wants to read more.

Live site (once deployed): **https://cahyaramadhan.github.io**

## Features

- Single-page homepage with smooth-scroll, scroll-spy navigation (nav
  highlights the section currently in view)
- Scroll-triggered fade-in animations on each section
- Interactive tabbed Experience section (click a company to switch panels)
- **Per-project detail pages** (`/projects/:slug`) with a longer write-up,
  larger image, and full tech stack — reached by clicking a project card
- **Project → Experience linking**: every project shows which job it came
  from, and clicking that company name jumps straight to the matching
  Experience tab (works from anywhere, including a project's own detail page)
- Project cards with image support and an automatic placeholder
  (gradient + icon) for projects without one yet
- Skills shown as chips — featured/most-used skills are visually
  emphasized, no arbitrary proficiency percentages/bars
- Fully responsive (mobile hamburger nav, single-column layouts on small
  screens)
- Downloadable resume PDF linked from the navbar and hero
- Zero component-library / icon-package dependencies — a small hand-rolled
  SVG icon set lives in `src/components/Icon.jsx`
- Warm neutral + amber color palette and a kicker-style section heading —
  a deliberately different look from the cyan-on-navy, numbered-section
  "dev portfolio template" look that's extremely common (see CLAUDE.md's
  "Design direction" section if restyling further)

## Tech stack

- [React 18](https://react.dev/) + [Vite 5](https://vitejs.dev/) (plain
  JavaScript, no TypeScript)
- [Tailwind CSS 3](https://tailwindcss.com/) (dark theme only)
- [react-router-dom](https://reactrouter.com/) v6 (`BrowserRouter`) — one
  scrolling homepage at `/`, plus a real route per project at
  `/projects/:slug`
- Deployed to **GitHub Pages** via **GitHub Actions**

> Vite is pinned to v5 and Tailwind to v3 because the reference dev
> machine runs Node 18.16.1; their next majors (Vite 6/7, Tailwind 4)
> require Node 18.18+/20+. Bump both once Node is upgraded.

## Project structure

```
src/
  data/portfolio.js       All site content — edit this file for updates
  pages/Home.jsx          The single-page scroller (route: "/")
  pages/ProjectDetail.jsx Per-project detail page (route: "/projects/:slug")
  components/             Presentational components, read from data/portfolio.js
  assets/projects/        Project banner images
  hooks/useReveal.js      Scroll-triggered fade-in animation
  hooks/useSectionNav.js  Cross-route section navigation + experience-tab focusing
  App.jsx                 <Routes> definitions + persistent Navbar/Footer
public/
  resume/                 Resume PDF served as a static download
  404.html                GitHub Pages deep-link fallback for client-side routing
  favicon.svg
resume/                   Source-of-truth resume files (.md + .pdf), not built into the site
.github/workflows/deploy.yml   Builds and deploys dist/ to GitHub Pages on every push to main
```

## Running locally

**Prerequisite:** Node.js 18.16+ (Node 20 also works).

```bash
npm install       # install dependencies
npm run dev        # start the dev server (default: http://localhost:5173)
```

Other useful commands:

```bash
npm run build      # production build → dist/
npm run preview    # serve the dist/ build locally, to sanity-check before deploying
npm run lint        # run ESLint
```

## Editing content

**All content lives in [src/data/portfolio.js](src/data/portfolio.js)** —
profile info, skills, work experience, projects, education, and social
links. That's the only file you should need to touch for day-to-day
updates (new job, new project, updated summary, etc.). See
[CLAUDE.md](CLAUDE.md) for the full field-by-field guide and the
reasoning behind the section order.

### Adding a project

Copy an existing entry in the `projects` array in `src/data/portfolio.js`
and fill in:
- `slug` — unique, URL-safe, becomes the detail page URL (`/projects/<slug>`)
- `experienceId` — must match the `id` of the job it belongs to in the
  `experience` array (this is what makes the project's company badge link
  to the right Experience tab)
- `description` — short blurb shown on the homepage card
- `details` — array of paragraphs shown on the full detail page
- `tech`, `image`, `link` — as in the existing entries

### Adding a project image

1. Drop the image file in `src/assets/projects/`.
2. Import it at the top of `src/data/portfolio.js`:
   ```js
   import myProjectImg from '../assets/projects/my-project.png'
   ```
3. Set it as the `image` field on that project's entry.

Leave `image: null` and the card falls back to an auto-generated
placeholder — never a broken image. The five sample projects currently
ship with generated SVG banners (`src/assets/projects/*.svg`) as
placeholders; swap them for real product screenshots the same way
whenever you have them.

## Deploying to GitHub Pages

This site is set up to deploy as a **user site**
(`https://<username>.github.io`, no subpath), which is why
`vite.config.js` has `base: '/'`.

1. **Create the repo.** On GitHub, create a repository named **exactly**
   `<your-username>.github.io` (for this project: `cahyaramadhan.github.io`)
   — user sites must match that exact name.
2. **Push this code to `main`:**
   ```bash
   git init                                              # if not already a repo
   git remote add origin https://github.com/<your-username>/<your-username>.github.io.git
   git add .
   git commit -m "Initial portfolio site"
   git branch -M main
   git push -u origin main
   ```
3. **Enable GitHub Pages via Actions.** In the repo's **Settings → Pages**,
   set **Source** to **"GitHub Actions"**. Nothing else to configure —
   `.github/workflows/deploy.yml` builds the site and publishes `dist/`
   automatically.
4. **That's it.** Every push to `main` triggers the workflow, which
   rebuilds and redeploys. The first run can take a minute or two; check
   the **Actions** tab for progress. The live URL will be
   `https://<your-username>.github.io/`.

### Deploying to a project repo instead (optional)

If you'd rather deploy under `https://<username>.github.io/<repo-name>/`
(a normal project repo, any name), change three things:
- `vite.config.js`: set `base: '/<repo-name>/'`
- `public/404.html`: set `pathSegmentsToKeep = 1` (it's `0` for a user
  site's root domain — this is what makes deep links like
  `/projects/some-project` resolve correctly under a subpath instead)
- Push to that repo instead — the same Actions workflow and Pages
  settings apply.

### Why project detail pages need `public/404.html`

GitHub Pages is static hosting with no server-side URL rewriting. Since
this site uses real routes (`/projects/fico-finance-core`) instead of
hash-based ones, a direct link or a page refresh on that URL would 404 on
GitHub Pages without help. `public/404.html` + a small decode script in
`index.html` handle this with the standard
[spa-github-pages](https://github.com/rafgraph/spa-github-pages)
redirect trick — you don't need to do anything for it to work, just don't
delete `public/404.html`. See CLAUDE.md's "Routing" section for the
mechanics if you're debugging it.

### Manual fallback deploy

If you ever need to deploy without the Actions workflow (e.g. it's
misconfigured and you need the site up immediately):

```bash
npm run deploy      # builds dist/ and pushes it to the gh-pages branch
```

This uses the `gh-pages` npm package and requires **Settings → Pages →
Source: "Deploy from a branch"** pointed at the `gh-pages` branch instead
of GitHub Actions. Prefer the Actions workflow for normal use — this is a
backup path only.

## Known placeholders to verify

- `profile.github` in `src/data/portfolio.js` is currently a **guessed**
  URL (`github.com/cahyaramadhan`) — confirm/correct it against the real
  GitHub profile before relying on it.
- Project banner images are generated sample placeholders, not real
  product screenshots — see "Adding a project image" above.
