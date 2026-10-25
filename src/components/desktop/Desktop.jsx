import { useEffect, useRef, useState } from "react";
import { useNavigate } from "react-router-dom";
import Taskbar from "./Taskbar";
import StartMenu from "./StartMenu";
import WindowFrame from "./WindowFrame";
import DesktopIcon from "./DesktopIcon";
import WeatherWidget from "./WeatherWidget";
import { UserIcon, FolderIcon, CpuIcon, MailIcon, FileTextIcon, BirdIcon, GraduationCapIcon, GlobeIcon, PlayStoreIcon, AppStoreIcon, PythonIcon, GitHubIcon, GoIcon, CSharpIcon, FlutterIcon, DatabaseIcon, PowerBiIcon } from "./IconSet";
import AboutApp from "./apps/AboutApp";
import ProjectsApp from "./apps/ProjectsApp";
import SkillsApp from "./apps/SkillsApp";
import EducationApp from "./apps/EducationApp";
import ContactApp from "./apps/ContactApp";
import ResumeApp from "./apps/ResumeApp";
import FlappyBirdApp from "./apps/FlappyBirdApp";

const APPS = [
  { id: "about", title: "About Me", icon: UserIcon, component: AboutApp, size: { w: 560, h: 480 } },
  { id: "projects", title: "Projects", icon: FolderIcon, component: ProjectsApp, size: { w: 620, h: 520 } },
  { id: "skills", title: "Skills", icon: CpuIcon, component: SkillsApp, size: { w: 560, h: 460 } },
  { id: "education", title: "Education", icon: GraduationCapIcon, component: EducationApp, size: { w: 520, h: 480 } },
  { id: "contact", title: "Contact", icon: MailIcon, component: ContactApp, size: { w: 460, h: 380 } },
  { id: "resume", title: "Resume", icon: FileTextIcon, component: ResumeApp, size: { w: 560, h: 620 } },
  { id: "flappybird", title: "Flappy Bird", icon: BirdIcon, component: FlappyBirdApp, size: { w: 360, h: 540 } },
];

// Icons that just open an external link / static page in a new tab, rather
// than a managed app window.
const EXTERNAL_LINKS = [
  { id: "android-apps", icon: PlayStoreIcon, label: "My Android Apps", href: "https://play.google.com/store/apps/dev?id=6043042002724269001&hl=en_CA" },
  { id: "ios-apps", icon: AppStoreIcon, label: "My iOS Apps", href: "https://apps.apple.com/us/developer/robert-allan-bolista/id1019353342" },
  { id: "github", icon: GitHubIcon, label: "GitHub", href: "https://github.com/rabolista" },
  { id: "python-cheatsheet", icon: PythonIcon, label: "Python Cheatsheet", href: "/cheatsheet_python.html" },
  { id: "go-cheatsheet", icon: GoIcon, label: "Golang Cheatsheet", href: "/cheatsheet_golang.html" },
  { id: "csharp-cheatsheet", icon: CSharpIcon, label: "C# Cheatsheet", href: "/cheatsheet_csharp.html" },
  { id: "flutter-cheatsheet", icon: FlutterIcon, label: "Flutter & Dart Cheatsheet", href: "/cheatsheet_flutter_dart.html" },
  { id: "sql-cheatsheet", icon: DatabaseIcon, label: "SQL Cheatsheet", href: "/cheatsheet_sql.html" },
  { id: "dax-cheatsheet", icon: PowerBiIcon, label: "Power BI DAX Cheatsheet", href: "/cheatsheet_dax.html" },
];

// All desktop icons combined into a single, alphabetically-sorted list —
// each entry knows how to open itself (windowed app, external link, or an
// internal route navigation).
const DESKTOP_ICONS = [
  ...APPS.map((app) => ({ id: app.id, icon: app.icon, label: app.title, type: "app" })),
  { id: "portfolio-site", icon: GlobeIcon, label: "Portfolio Site", type: "navigate", to: "/portfolio" },
  ...EXTERNAL_LINKS.map((link) => ({ ...link, type: "external" })),
].sort((a, b) => a.label.localeCompare(b.label));

function useClock() {
  const [time, setTime] = useState({ clock: "", date: "" });
  useEffect(() => {
    const update = () => {
      const now = new Date();
      setTime({
        clock: now.toLocaleTimeString("en-US", {
          timeZone: "America/Toronto",
          hour: "2-digit",
          minute: "2-digit",
          hour12: true,
        }),
        date: now.toLocaleDateString("en-US", {
          timeZone: "America/Toronto",
          month: "short",
          day: "numeric",
        }),
      });
    };
    update();
    const id = setInterval(update, 1000 * 15);
    return () => clearInterval(id);
  }, []);
  return time;
}

export default function Desktop() {
  const navigate = useNavigate();
  const [openWindows, setOpenWindows] = useState([]); // {id, zIndex, minimized, pos}
  const [activeId, setActiveId] = useState(null);
  const [startOpen, setStartOpen] = useState(false);
  const [toast, setToast] = useState(null);
  const zCounter = useRef(10);
  const time = useClock();

  const nextZ = () => {
    zCounter.current += 1;
    return zCounter.current;
  };

  const openApp = (id) => {
    setStartOpen(false);
    setOpenWindows((prev) => {
      const existing = prev.find((w) => w.id === id);
      if (existing) {
        return prev.map((w) => (w.id === id ? { ...w, minimized: false, zIndex: nextZ() } : w));
      }
      const idx = prev.length;
      return [
        ...prev,
        {
          id,
          minimized: false,
          zIndex: nextZ(),
          pos: { x: 60 + idx * 28, y: 48 + idx * 28 },
        },
      ];
    });
    setActiveId(id);
  };

  const closeApp = (id) => {
    setOpenWindows((prev) => prev.filter((w) => w.id !== id));
    setActiveId((prev) => (prev === id ? null : prev));
  };

  const minimizeApp = (id) => {
    setOpenWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: true } : w)));
    setActiveId((prev) => (prev === id ? null : prev));
  };

  const focusApp = (id) => {
    setOpenWindows((prev) => prev.map((w) => (w.id === id ? { ...w, zIndex: nextZ() } : w)));
    setActiveId(id);
  };

  const handleTaskbarClick = (id) => {
    const win = openWindows.find((w) => w.id === id);
    if (!win) return;
    if (win.minimized) {
      setOpenWindows((prev) => prev.map((w) => (w.id === id ? { ...w, minimized: false, zIndex: nextZ() } : w)));
      setActiveId(id);
    } else if (activeId === id) {
      minimizeApp(id);
    } else {
      focusApp(id);
    }
  };

  const handlePower = () => {
    setStartOpen(false);
    setToast("RAB-OS never sleeps ⚡");
    setTimeout(() => setToast(null), 2200);
  };

  // Dispatches any desktop icon / start menu item — opens a managed app
  // window, navigates to an internal route, or opens an external link.
  const openItem = (item) => {
    if (item.type === "app") openApp(item.id);
    else if (item.type === "navigate") navigate(item.to);
    else window.open(item.href, "_blank", "noopener,noreferrer");
  };

  return (
    <div
      className="h-screen w-screen relative overflow-hidden bg-rab-bg grid-backdrop-fine"
      onPointerDown={() => startOpen && setStartOpen(false)}
    >
      <div className="absolute inset-0 bg-[radial-gradient(circle_at_20%_15%,rgba(74,222,128,0.08),transparent_45%)] pointer-events-none" />

      {/* centered RAB-OS emblem watermark */}
      <div className="absolute inset-0 flex items-center justify-center pointer-events-none select-none">
        <svg
          viewBox="0 0 200 200"
          className="w-64 sm:w-80 opacity-[0.07] drop-shadow-[0_0_40px_rgba(74,222,128,0.6)]"
          aria-hidden="true"
        >
          <polygon
            points="100,8 178,52 178,148 100,192 22,148 22,52"
            fill="none"
            stroke="#4ADE80"
            strokeWidth="2.5"
          />
          <polygon
            points="100,28 160,62 160,138 100,172 40,138 40,62"
            fill="none"
            stroke="#4ADE80"
            strokeWidth="1"
            opacity="0.6"
          />
          {/* circuit-node accents at each vertex */}
          {[
            [100, 8], [178, 52], [178, 148], [100, 192], [22, 148], [22, 52],
          ].map(([cx, cy]) => (
            <circle key={`${cx}-${cy}`} cx={cx} cy={cy} r="3.5" fill="#4ADE80" />
          ))}
          {/* stylized "R" monogram, built from geometric strokes */}
          <path
            d="M76 60v80M76 60h28c14 0 22 8 22 20s-8 20-22 20H76M108 100l26 40"
            fill="none"
            stroke="#4ADE80"
            strokeWidth="6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <text
            x="100"
            y="182"
            textAnchor="middle"
            fontFamily="'JetBrains Mono', monospace"
            fontSize="11"
            letterSpacing="3"
            fill="#4ADE80"
          >
            RAB-OS
          </text>
        </svg>
      </div>

      <WeatherWidget />

      {/* wallpaper watermark */}
      <div className="absolute bottom-16 right-6 flex flex-col items-end pointer-events-none select-none">
        <span className="font-handwriting font-bold text-rab-green/25 text-5xl sm:text-6xl leading-none -rotate-3">
          RAB-OS
        </span>
        <span className="font-display text-[10px] text-rab-faint mt-1 tracking-wide">v2.23</span>
      </div>


      {/* desktop icons — single alphabetically-sorted grid */}
      <div className="absolute top-4 left-2 right-2 bottom-16 grid grid-flow-col grid-rows-6 sm:grid-rows-7 justify-start gap-x-1 gap-y-1 auto-cols-[84px]">
        {DESKTOP_ICONS.map((item) => (
          <div key={item.id} onPointerDown={(e) => e.stopPropagation()}>
            <DesktopIcon icon={item.icon} label={item.label} onOpen={() => openItem(item)} />
          </div>
        ))}
      </div>

      {/* windows */}
      {openWindows.map((w) => {
        if (w.minimized) return null;
        const app = APPS.find((a) => a.id === w.id);
        if (!app) return null;
        const Component = app.component;
        return (
          <WindowFrame
            key={w.id}
            title={app.title}
            icon={app.icon}
            zIndex={w.zIndex}
            isActive={activeId === w.id}
            initialPos={w.pos}
            initialSize={app.size}
            onClose={() => closeApp(w.id)}
            onMinimize={() => minimizeApp(w.id)}
            onFocus={() => focusApp(w.id)}
          >
            <Component />
          </WindowFrame>
        );
      })}

      {startOpen && (
        <div onPointerDown={(e) => e.stopPropagation()}>
          <StartMenu items={DESKTOP_ICONS} onOpen={openItem} onPower={handlePower} />
        </div>
      )}

      {toast && (
        <div className="fixed bottom-16 left-1/2 -translate-x-1/2 z-[9999] font-display text-xs px-4 py-2 rounded-md bg-rab-bg2 border border-rab-green/50 text-rab-green shadow-xl animate-menuIn">
          {toast}
        </div>
      )}

      <div onPointerDown={(e) => e.stopPropagation()}>
        <Taskbar
          apps={APPS}
          openWindows={openWindows}
          activeId={activeId}
          startOpen={startOpen}
          onToggleStart={() => setStartOpen((v) => !v)}
          onTaskbarClick={handleTaskbarClick}
          time={time}
        />
      </div>
    </div>
  );
}
