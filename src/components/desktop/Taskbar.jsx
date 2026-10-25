import { WifiIcon, VolumeIcon } from "./IconSet";

export default function Taskbar({ apps, openWindows, activeId, startOpen, onToggleStart, onTaskbarClick, time }) {
  return (
    <div className="fixed bottom-0 inset-x-0 h-12 z-[9000] flex items-center gap-2 px-2.5 bg-rab-bg2/90 backdrop-blur border-t border-rab-line">
      <button
        onClick={onToggleStart}
        aria-label="Toggle start menu"
        aria-expanded={startOpen}
        className={`flex items-center gap-2 h-8 px-3 rounded-md font-display text-xs font-semibold transition-colors ${
          startOpen ? "bg-rab-green text-rab-bg" : "bg-rab-green/15 text-rab-green hover:bg-rab-green/25"
        }`}
      >
        <span className="h-4 w-4 rounded-sm bg-current/90 flex items-center justify-center text-[10px] leading-none">
          <span className={startOpen ? "text-rab-bg" : "text-rab-bg"}>R</span>
        </span>
        RAB-OS
      </button>

      <div className="h-6 w-px bg-rab-line" />

      <div className="flex-1 flex items-center gap-1.5 overflow-x-auto rab-scroll">
        {openWindows.length === 0 && (
          <span className="text-[11px] text-rab-faint font-display px-2">No open apps</span>
        )}
        {openWindows.map((w) => {
          const app = apps.find((a) => a.id === w.id);
          if (!app) return null;
          const isActive = w.id === activeId && !w.minimized;
          return (
            <button
              key={w.id}
              onClick={() => onTaskbarClick(w.id)}
              className={`flex items-center gap-1.5 h-8 px-2.5 rounded-md font-display text-[11px] shrink-0 transition-colors border ${
                isActive
                  ? "bg-rab-green/15 border-rab-green/50 text-rab-green"
                  : "border-transparent text-rab-muted hover:bg-rab-line/40"
              }`}
            >
              <app.icon className="h-3.5 w-3.5" />
              {app.title}
            </button>
          );
        })}
      </div>

      <div className="hidden sm:flex items-center gap-2 text-rab-muted px-1">
        <WifiIcon className="h-4 w-4" />
        <VolumeIcon className="h-4 w-4" />
      </div>

      <div className="font-display text-[11px] text-rab-paper px-2 text-right leading-tight">
        <div>{time.clock}</div>
        <div className="text-rab-faint">{time.date}</div>
      </div>
    </div>
  );
}
