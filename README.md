# Pedro Carmona · Portfolio

A one-page portfolio built with React, Vite, TypeScript and Tailwind CSS. The layout is inspired by [Brittany Chiang](https://brittanychiang.com)'s portfolio: a sticky intro column with section navigation on the left, and About, Experience, Projects and Education on the right.

## Run

```bash
npm install
npm run dev      # http://localhost:5173
npm run build    # production build in dist/
npm run preview  # serve the build locally
```

## Editing content

All the text lives in `src/data.ts` (profile, About paragraphs, jobs, projects, education); the layout in `src/App.tsx` reads from it. In About, wrap words in `**double asterisks**` to highlight them.

- Project screenshots: `public/projects/` (16:9-ish, about 960px wide).
- Résumé linked from "View Full Résumé": `public/resume.pdf`.
- Tab icon: `public/favicon.svg`.

## Deploying

`npm run build` outputs a static site in `dist/`, which any static host serves: Vercel, Netlify, GitHub Pages or Firebase Hosting.
