# Robert Allan Bolista — Portfolio Site

Interactive portfolio built with React + Tailwind CSS + React Flow. The centerpiece
is a clickable "system map" that shows how your BI/database projects actually connect
(sources → ETL → tools → dashboards → business units) — click any node to open a
detail panel with a process flow and full write-up.

No backend, no database — everything is static, so it deploys anywhere for free
(Vercel, Netlify, GitHub Pages) and runs entirely from files you can edit.

## Quick start

```bash
npm install
npm run dev
```

Open the printed local URL (usually `http://localhost:5173`). Changes hot-reload.

To build the production version:

```bash
npm run build
npm run preview   # preview the built site locally
```

The build output lands in `dist/` — that folder is what you deploy.

## Project structure

```
src/
  content/projects/*.md   ← YOUR PROJECT WRITE-UPS (edit these!)
  data/projects.js         ← project metadata: title, stack, flow steps, node position
  data/experience.js       ← career timeline, education, certifications, skills
  components/              ← React components (the actual UI)
  App.jsx                  ← page layout / section order
public/
  resume.pdf                ← swap this for your latest résumé
```

## How to add or edit a project

1. Add a markdown file in `src/content/projects/your-project-id.md` explaining
   what you built (there are 6 example files already there — copy one as a template).
2. Add a matching entry to the `projects` array in `src/data/projects.js`:
   ```js
   {
     id: "your-project-id",       // must match the .md filename
     title: "Your Project Name",
     category: "Data Engineering", // shown as the eyebrow label
     tagline: "One-line description",
     stack: ["SQL Server", "Python"],
     era: "2024 — Present",
     color: "cyan",                 // cyan | amber | sky
     position: { x: 400, y: 300 },  // where it sits on the map canvas
     steps: ["Step one", "Step two", "Step three"], // the process flow shown in the detail panel
   }
   ```
3. If you want it connected to other nodes on the map, add an edge in
   `src/components/SystemMap.jsx` (`edges` array).

## How to update your career timeline / skills

Edit `src/data/experience.js` — it's plain arrays of objects, no markdown needed.

## Updating your résumé PDF

Replace `public/resume.pdf` with your latest file (keep the filename `resume.pdf`,
or update the link in `src/components/Hero.jsx` if you rename it).

## Deploying

**Vercel / Netlify (easiest):** push this folder to a GitHub repo, then import it —
both auto-detect Vite and deploy on every push. No config needed.

**Manual / any static host:** run `npm run build`, then upload the contents of
`dist/` to any static file host (GitHub Pages, S3, Cloudflare Pages, etc.).

## Tech stack

- **React 19 + Vite** — build tooling
- **Tailwind CSS v4** — styling (design tokens live in `tailwind.config.js`)
- **@xyflow/react (React Flow)** — the interactive system map
- **react-markdown + remark-gfm** — renders your `.md` project write-ups
- **JetBrains Mono + Inter** — typography (loaded from Google Fonts in `index.html`)

## Design notes

The visual direction is a "blueprint / schematic" theme (deep navy, cyan grid lines,
monospace technical headers) — chosen deliberately because it mirrors the actual
subject matter: ER diagrams, data pipelines, and system architecture, which is your
real day-to-day work. Colors and fonts are defined once in `tailwind.config.js` and
`src/index.css` — change them there to re-theme the whole site.

---

Built for Robert Allan Bolista. Edit anything — this is your project now.
