# Portfolio

Personal portfolio of Thomas Laroudie — fullstack JavaScript/TypeScript developer and Electron.js specialist.

Live at **https://tomlrd.github.io/portfolio/**

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- i18next (English / French)

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173/portfolio/.

## Scripts

| Script              | Description                          |
| ------------------- | ------------------------------------ |
| `npm run dev`       | Start the development server         |
| `npm run build`     | Type-check and build for production  |
| `npm run preview`   | Serve the production build locally   |
| `npm run lint`      | Run ESLint                           |
| `npm run typecheck` | Run the TypeScript compiler          |

## Structure

```
src/
  assets/      images and logos
  components/  layout, UI primitives and feature components
  content/     projects, stack and profile data
  hooks/       reusable React hooks
  i18n/        i18next setup and locale files
  lib/         framework-agnostic helpers
  pages/       routed pages
  styles/      design tokens and global styles
```

## Deployment

Pushing to `master` runs `.github/workflows/deploy.yml`, which lints, builds and
publishes `dist/` to GitHub Pages. The repository must have Pages configured with
**Source: GitHub Actions**.

The site is served from `https://tomlrd.github.io/portfolio/`, so `vite.config.ts`
sets `base: "/portfolio/"`. Change that value if the repository is renamed or moved
to a custom domain. A `404.html` copy of `index.html` is emitted at build time so
client-side routes survive a direct hit or a page refresh.

## Content

Copy lives in `src/i18n/locales/{en,fr}.json`. Project metadata (images, links, tags, dates)
lives in `src/content/projects.ts`, so adding a project means adding one entry there and one
description block per locale.
