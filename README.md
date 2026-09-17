# Portfolio

Personal portfolio of Thomas Laroudie — fullstack JavaScript/TypeScript developer and Electron.js specialist.

## Stack

- React 19 + TypeScript
- Vite
- Tailwind CSS v4
- React Router
- i18next (English / French)
- three.js for the voxel workstation scene

## Getting started

```bash
npm install
npm run dev
```

The dev server runs on http://localhost:5173.

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

## Content

Copy lives in `src/i18n/locales/{en,fr}.json`. Project metadata (images, links, tags, dates)
lives in `src/content/projects.ts`, so adding a project means adding one entry there and one
description block per locale.
