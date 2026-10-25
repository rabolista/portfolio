import { PowerIcon } from "./IconSet";

export default function StartMenu({ items, onOpen, onPower }) {
  return (
    <div
      className="absolute bottom-14 left-2 w-64 rounded-lg border border-rab-line bg-rab-bg2/95 backdrop-blur shadow-2xl animate-menuIn overflow-hidden"
      role="menu"
      aria-label="Start menu"
    >
      <div className="px-4 py-3 border-b border-rab-line">
        <div className="font-display text-xs text-rab-green tracking-wide">RAB-OS</div>
        <div className="text-[11px] text-rab-muted">Robert Allan Bolista</div>
      </div>

      <div className="py-1.5 max-h-72 overflow-y-auto rab-scroll">
        {items.map((item) => (
          <button
            key={item.id}
            role="menuitem"
            onClick={() => onOpen(item)}
            className="w-full flex items-center gap-3 px-4 py-2 text-left text-sm text-rab-paper hover:bg-rab-green/10 hover:text-rab-green transition-colors"
          >
            <item.icon className="h-4 w-4 shrink-0" />
            {item.label}
          </button>
        ))}
      </div>

      <div className="border-t border-rab-line px-2 py-1.5">
        <button
          onClick={onPower}
          className="w-full flex items-center gap-3 px-2.5 py-2 rounded text-left text-sm text-rab-muted hover:bg-rab-red/10 hover:text-rab-red transition-colors"
        >
          <PowerIcon className="h-4 w-4" />
          Power
        </button>
      </div>
    </div>
  );
}
