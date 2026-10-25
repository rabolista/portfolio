export default function DesktopIcon({ icon: Icon, label, onOpen }) {
  return (
    <button
      onClick={onOpen}
      aria-label={`Open ${label}`}
      className="group w-[84px] flex flex-col items-center gap-1.5 py-2 px-1 rounded-md hover:bg-white/5 focus-visible:bg-white/5 transition-colors"
    >
      <span className="h-12 w-12 flex items-center justify-center drop-shadow-[0_3px_6px_rgba(0,0,0,0.55)] group-hover:scale-105 transition-transform">
        <Icon className="h-11 w-11" />
      </span>
      <span className="font-display text-[11px] text-rab-paper text-center leading-tight [text-shadow:0_1px_3px_rgba(0,0,0,0.9)]">
        {label}
      </span>
    </button>
  );
}
