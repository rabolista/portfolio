# How This Site Was Built

This is a personal reference doc explaining the technology and structure behind
robertbolista's portfolio, so you can explain it if someone asks "how did you
build this?"

---

## 1. Tech Stack

| Layer | Technology | Why |
|---|---|---|
| UI framework | **React 19** | Component-based UI, hooks for state |
| Build tool / dev server | **Vite** | Fast dev server + optimized production build |
| Routing | **React Router v7** (`react-router-dom`) | Client-side routes for `/` and `/portfolio` |
| Styling | **Tailwind CSS v4** | Utility-first CSS, custom color palettes defined in `tailwind.config.js` |
| Markdown rendering | **react-markdown** + **remark-gfm** | Renders each project's `.md` write-up (tables, lists, etc.) |
| Diagram / node graph | **@xyflow/react** (React Flow) | Powers the interactive "System Map" on the classic site |
| Animation | **framer-motion** (installed, available for future use) | — |
| Fonts | **Google Fonts**: JetBrains Mono (terminal/monospace), Inter (body text), Caveat (handwritten signature) | Loaded via `<link>` tags in `index.html` |
| Linting | **oxlint** | Fast JS/JSX linter |

No backend/server — it's a fully static single-page app (SPA). Content (projects,
experience, resume) is just JS/Markdown files bundled at build time.

---

## 2. The Two "Pages" (Routes)

Set up in [`src/App.jsx`](../src/App.jsx) using React Router:

- **`/` → RAB-OS** — a fake "desktop operating system" portfolio experience.
- **`/portfolio` → Classic Site** — the original single-page scrolling portfolio
  (restored from an old backup), with a "← Go back to RAB-OS" link in its nav bar.

Both routes share the same data layer (`src/data/`) so project/experience info
only needs to be edited once.

---

## 3. RAB-OS (the desktop experience) — `src/components/desktop/`

The main "gimmick" of the site: a simulated desktop OS, inspired by real
desktop-style portfolio sites, themed like a Linux terminal.

### Boot sequence
- **`BootScreen.jsx`** — shown once on load. Displays a fake boot log
  ("Initializing RAB-OS kernel...", etc.), an animated bar-chart-style loader,
  and a **Matrix-style falling code background**.
- **`MatrixRain.jsx`** — a `<canvas>` animation (classic "Matrix" digital rain
  effect) drawn with `requestAnimationFrame`.

### Window manager
- **`Desktop.jsx`** — the core. Holds all app/window state: which windows are
  open, minimized, focused (z-index), and their positions. Renders the icon
  grid, all open windows, the taskbar, start menu, and the weather widget.
- **`WindowFrame.jsx`** — a generic draggable, closable, minimizable "window"
  component (drag via pointer events, clamped to the viewport).
- **`DesktopIcon.jsx`** — a single clickable desktop icon (icon graphic + label).
- **`Taskbar.jsx`** — bottom bar: Start button, list of open app buttons, a
  fake Wi-Fi/volume icon, and a live clock (Toronto time zone).
- **`StartMenu.jsx`** — popup app launcher + a "Power" button (easter-egg toast:
  "RAB-OS never sleeps ⚡").

### The "apps" (each opens in its own window) — `src/components/desktop/apps/`
| App | File | Content source |
|---|---|---|
| About Me | `AboutApp.jsx` | `src/data/experience.js` (bio + work history) |
| Projects | `ProjectsApp.jsx` | `src/data/projects.js` + markdown files in `src/content/projects/` |
| Skills | `SkillsApp.jsx` | `src/data/experience.js` (`skillGroups`) |
| Education | `EducationApp.jsx` | `src/data/experience.js` (`education`, `certifications`) |
| Contact | `ContactApp.jsx` | hard-coded email/LinkedIn (no phone, by request) |
| Resume | `ResumeApp.jsx` | embeds `public/resume.pdf` in an `<iframe>`, plus Open/Download buttons |
| Flappy Bird | `FlappyBirdApp.jsx` | a self-contained `<canvas>` game (gravity, pipes, scoring, high score in `localStorage`) |

There's also a **"Portfolio Site" desktop icon** — not a window, it navigates
(via `useNavigate`) straight to the `/portfolio` route.

### Icons
All desktop/taskbar icons are **hand-coded inline SVGs** in
**`IconSet.jsx`** — no icon library or image assets. Each one is a small React
component (e.g. `FolderIcon`, `MailIcon`, `BirdIcon`, `GraduationCapIcon`,
`GlobeIcon`) built from basic SVG shapes (`<path>`, `<rect>`, `<circle>`) with a
flat, colorful "real OS icon" style rather than plain line icons.

### Weather widget
- **`WeatherWidget.jsx`** — on load, calls two free, key-less public APIs:
  1. `https://get.geojs.io/v1/ip/geo.json` — IP-based geolocation (city, lat/lon)
  2. `https://api.open-meteo.com/v1/forecast` — current temperature + weather
     code for that location
  
  Displays temperature, a weather emoji, and the visitor's approximate city —
  entirely client-side, no API keys required.

### Wallpaper signature
A small handwritten-style "RAB-OS" watermark (Google Font **Caveat**) with a
`v2.23` version tag, tucked in the bottom-right corner of the desktop.

---

## 4. Classic Site — `src/components/classic/`

The original scrolling one-page portfolio, restored from a backup
(`portfolio_site/`) and mounted at `/portfolio`:

| Component | Purpose |
|---|---|
| `Nav.jsx` | Sticky top nav with section links + "← Go back to RAB-OS" |
| `Hero.jsx` | Name, title, summary blurb, stat counters |
| `MapSection.jsx` + `SystemMap.jsx` + `ProjectNode.jsx` | Interactive node-graph (React Flow) showing how data flows from ERP sources → tools built → dashboards |
| `ProjectPanel.jsx` + `StepFlow.jsx` | Slide-out detail panel for a clicked project, rendering its markdown write-up + a step-by-step process flow |
| `Journey.jsx` | Career timeline + education + certifications |
| `Skills.jsx` | Skill groups grid |
| `Contact.jsx` | Email + LinkedIn cards |

This site uses its own **"blueprint" color palette** (navy/cyan) defined
alongside RAB-OS's palette in `tailwind.config.js`, so the two experiences
don't visually clash even though they share one Tailwind config.

---

## 5. Shared Data Layer — `src/data/` and `src/content/`

- **`projects.js`** — array of project metadata (title, stack, era, color, steps).
- **`experience.js`** — work history, education, certifications, skill groups.
- **`loadContent.js`** — uses Vite's `import.meta.glob` to load every `.md` file
  in `src/content/projects/` as raw text at build time (no backend/CMS needed).
- **`src/content/projects/*.md`** — one markdown file per project with the full
  write-up, rendered via `react-markdown`.

Editing a project or job just means editing these JS/MD files — every page
that displays that data (both RAB-OS apps and the classic site) updates
automatically.

---

## 6. Styling System

- **`tailwind.config.js`** defines two custom color namespaces:
  - `rab-*` — RAB-OS's Linux/terminal palette (dark background, terminal green, amber, sky blue accents).
  - `blueprint-*` — the classic site's original navy/cyan palette.
- **`src/index.css`** — global resets, custom grid-backdrop patterns (terminal
  grid effect), scrollbar styling, and shared markdown (`.md-content`) styles
  used by both the RAB-OS Projects app and the classic site's project panel.

---

## 7. Summary (elevator-pitch version)

> "It's a React + Vite + Tailwind single-page app with two experiences: a fake
> desktop OS ('RAB-OS') with draggable windows, a taskbar, a boot animation,
> a live weather widget, and even a mini Flappy Bird game — plus a classic
> scrolling portfolio page with an interactive React Flow diagram of how my
> projects connect. All content (projects, experience, resume) lives in plain
> JS/Markdown files, so updating my portfolio is just editing data, not code."
