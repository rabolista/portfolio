import { useEffect, useRef, useState } from "react";
import { CloseIcon, MinimizeIcon } from "./IconSet";

/**
 * Draggable, closable, minimizable "app window" used by the RAB-OS desktop.
 * Position/size are uncontrolled (managed locally) — the parent only needs
 * to know about open/closed/minimized/zIndex/focus state.
 */
export default function WindowFrame({
  title,
  icon: Icon,
  onClose,
  onMinimize,
  onFocus,
  zIndex,
  isActive,
  initialPos = { x: 80, y: 60 },
  initialSize = { w: 520, h: 420 },
  children,
}) {
  const clamp = (pos, size) => {
    if (typeof window === "undefined") return pos;
    const maxX = Math.max(8, window.innerWidth - size.w - 8);
    const maxY = Math.max(8, window.innerHeight - size.h - 56);
    return { x: Math.min(Math.max(8, pos.x), maxX), y: Math.min(Math.max(8, pos.y), maxY) };
  };

  const [size] = useState(() => {
    if (typeof window === "undefined") return initialSize;
    const w = Math.min(initialSize.w, window.innerWidth - 16);
    const h = Math.min(initialSize.h, window.innerHeight - 64);
    return { w, h };
  });
  const [pos, setPos] = useState(() => clamp(initialPos, size));

  const dragRef = useRef(null);
  const winRef = useRef(null);

  const startDrag = (e) => {
    onFocus?.();
    const startX = e.clientX;
    const startY = e.clientY;
    dragRef.current = { startX, startY, origin: pos };
    window.addEventListener("pointermove", onDrag);
    window.addEventListener("pointerup", endDrag, { once: true });
  };

  const onDrag = (e) => {
    if (!dragRef.current) return;
    const { startX, startY, origin } = dragRef.current;
    const next = { x: origin.x + (e.clientX - startX), y: origin.y + (e.clientY - startY) };
    setPos(clamp(next, size));
  };

  const endDrag = () => {
    dragRef.current = null;
    window.removeEventListener("pointermove", onDrag);
  };

  useEffect(() => {
    return () => window.removeEventListener("pointermove", onDrag);
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div
      ref={winRef}
      onPointerDown={() => onFocus?.()}
      className={`fixed rounded-lg border bg-rab-bg2/95 backdrop-blur shadow-2xl flex flex-col overflow-hidden animate-windowIn ${
        isActive ? "border-rab-green/60" : "border-rab-line"
      }`}
      style={{ left: pos.x, top: pos.y, width: size.w, height: size.h, zIndex }}
      role="dialog"
      aria-label={title}
    >
      {/* title bar */}
      <div
        onPointerDown={startDrag}
        className={`shrink-0 flex items-center gap-2 px-3 py-2 border-b cursor-grab active:cursor-grabbing select-none ${
          isActive ? "border-rab-green/40 bg-rab-bg2" : "border-rab-line bg-rab-bg2/70"
        }`}
      >
        {Icon && <Icon className="h-3.5 w-3.5 text-rab-green shrink-0" />}
        <span className="font-display text-xs text-rab-paper truncate flex-1">{title}</span>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={onMinimize}
          aria-label={`Minimize ${title}`}
          className="h-6 w-6 rounded flex items-center justify-center text-rab-muted hover:text-rab-amber hover:bg-rab-line/40 transition-colors"
        >
          <MinimizeIcon className="h-3.5 w-3.5" />
        </button>
        <button
          onPointerDown={(e) => e.stopPropagation()}
          onClick={onClose}
          aria-label={`Close ${title}`}
          className="h-6 w-6 rounded flex items-center justify-center text-rab-muted hover:text-rab-red hover:bg-rab-line/40 transition-colors"
        >
          <CloseIcon className="h-3.5 w-3.5" />
        </button>
      </div>

      {/* content */}
      <div className="flex-1 min-h-0 overflow-y-auto rab-scroll">{children}</div>
    </div>
  );
}
