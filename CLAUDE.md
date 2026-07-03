# Portfolio Site

Personal portfolio for Cahya Ramadhan (Backend Engineer), built to be
scanned quickly by recruiters and easy to keep updated as experience grows.

## Tech stack

- React 18 + Vite 5 (plain JS, no TypeScript)
- Tailwind CSS 3 (utility classes, dark theme only, `darkMode: 'class'`)
- No router — single scrolling page with anchor-linked sections
- No component library, no icon package — `src/components/Icon.jsx` has a
  small hand-rolled inline SVG set
- Deployed via GitHub Actions to GitHub Pages (`.github/workflows/deploy.yml`)

Node 18.16.1 is the dev machine's version — that's why `vite@5` and
`tailwindcss@3` are pinned instead of the latest majors (Vite 6/7 and
Tailwind 4 require Node 18.18+/20+). Bump these once Node is upgraded.

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
  tabs in the Experience section.
- `projects` — named projects surfaced separately from the experience
  bullets, since recruiters scan projects before reading job prose. Each
  entry supports `image` (see below) and `link`.
- `education`
- `socials` — email/LinkedIn/GitHub icons shown in the hero and contact section

### Adding a project image

1. Drop the file in `src/assets/projects/`.
2. `import` it at the top of `src/data/portfolio.js`, e.g.
   `import ficoImg from '../assets/projects/fico.png'`.
3. Set it as the `image` field on that project's object.

Leave `image: null` and the project card falls back to an auto-generated
placeholder (gradient + code icon) — never a broken image.

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
  components/             <- presentational only, read from data/portfolio.js
  hooks/useReveal.js      <- scroll-triggered fade-in animation (IntersectionObserver)
  App.jsx                 <- section order lives here
public/
  resume/                 <- resume PDF served as a static download (linked from Navbar + hero)
  favicon.svg
.github/workflows/deploy.yml   <- builds and deploys dist/ to GitHub Pages on push to main
```

## Deployment

Target: **`cahyaramadhan.github.io`** (a GitHub *user* site, not a project
page), so `vite.config.js` has `base: '/'`. If this ever moves to a
project repo (`username.github.io/repo-name`), change `base` to
`/repo-name/` and update any absolute asset paths.

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

## Known placeholders to verify

- `profile.github` in `src/data/portfolio.js` is currently a guessed URL
  (`github.com/cahyaramadhan`) — confirm/correct this against the real
  GitHub profile.
- All `projects[].image` are `null` (placeholders) — the user said they'll
  add real screenshots later.

## Content source of truth

Resume lives at `resume/Cahya_Ramadhan_Resume.pdf` and
`resume/Cahya_Ramadhan_Resume.md` (outside `src/`, not part of the built
site — the PDF is copied into `public/resume/` separately for the
downloadable link). When the resume changes, update both the resume files
and `src/data/portfolio.js` by hand; they are not auto-synced.
