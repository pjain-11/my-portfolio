# Prince Jain — Portfolio

Personal portfolio site for a backend developer. Static, fast, and content-driven:
every piece of copy lives in a single JSON file, so updating the site never means
touching component code.

**Live:** _set your deployed URL here_

## Stack

| Concern    | Choice                                              |
| ---------- | --------------------------------------------------- |
| Framework  | Next.js 16 (App Router, `output: "export"`)         |
| UI         | React 19, Tailwind CSS v4                           |
| Animation  | Framer Motion (respects `prefers-reduced-motion`)   |
| Theming    | `next-themes` — class-based dark mode, dark default |
| Fonts      | Geist Sans + Geist Mono via `next/font`             |
| Deployment | Any static host — builds to `out/`                  |

## Getting started

```bash
npm install
npm run dev        # http://localhost:3000
```

## Scripts

| Script                 | Does                                            |
| ---------------------- | ----------------------------------------------- |
| `npm run dev`          | Start the dev server                            |
| `npm run build`        | Production build → static export in `out/`      |
| `npm run start`        | Serve the `out/` build locally (via `serve`)    |
| `npm run lint`         | ESLint (`eslint-config-next` + Prettier compat) |
| `npm run format`       | Prettier write                                  |
| `npm run format:check` | Prettier check (use in CI)                      |

## Editing content

All content is in [`content/content.json`](content/content.json) — personal info,
stats, skills, engineering principles, projects, and experience. On import,
[`lib/data.ts`](lib/data.ts) shape-checks the file and re-exports typed values,
so a malformed edit fails the build with a clear message instead of rendering
broken UI. Types live in [`types/index.ts`](types/index.ts).

To swap in your own resume, replace `public/resume.pdf`.

## Architecture

```
app/
  layout.tsx        Root layout, theme provider, metadata
  page.tsx          Single-page composition + Person JSON-LD
  globals.css       Design tokens (light/dark), grid background, a11y focus
  sitemap.ts        Build-time sitemap
  robots.ts         Build-time robots.txt
components/
  layout/           Navbar (scroll-spy), Footer, ThemeToggle
  sections/         Hero, About, Skills, Approach, Projects, Experience, Contact
  ui/               Presentational pieces (ProjectCard, TerminalWindow, …)
lib/
  data.ts           Loads + validates content.json
  hooks.ts          useActiveSection, useScrollProgress, usePrefersReducedMotion, …
  metadata.ts       SEO / Open Graph / Twitter metadata
  utils.ts          cn() class-merge helper
content/
  content.json      ← the only file you normally edit
```

Design decisions worth knowing:

- **Static export.** No API routes or server data, so the whole site is
  pre-rendered HTML/CSS/JS and can be hosted anywhere (S3, GitHub Pages, Nginx,
  Vercel, Netlify).
- **The contact form has no backend.** Submitting builds a pre-filled `mailto:`
  link and hands off to the visitor's email client.
- **Accessibility.** Visible keyboard focus rings, `aria-current` on the active
  nav item, reduced-motion support in both CSS and the Framer Motion helpers,
  and `scroll-padding-top` so anchored sections clear the sticky header.
- **SEO.** `Person` structured data (JSON-LD), Open Graph + Twitter cards,
  canonical URL, generated sitemap and robots.

## Deployment

Set the production URL so canonical/OG links resolve:

```bash
NEXT_PUBLIC_SITE_URL=https://your-domain.com npm run build
```

Then deploy the `out/` directory (or point Vercel/Netlify at the repo — they run
the build for you).
