import { useEffect, useState } from "react";
import MatrixRain from "./MatrixRain";

const LOG_LINES = [
  "Initializing RAB-OS kernel...",
  "Mounting /home/robert...",
  "Loading window manager...",
  "Starting taskbar service...",
  "Ready.",
];

const BAR_COUNT = 14;

export default function BootScreen({ onDone }) {
  const [lineIndex, setLineIndex] = useState(0);
  const [fading, setFading] = useState(false);
  const [bars, setBars] = useState(() => new Array(BAR_COUNT).fill(20));

  useEffect(() => {
    if (lineIndex >= LOG_LINES.length - 1) {
      const t = setTimeout(() => setFading(true), 350);
      return () => clearTimeout(t);
    }
    const t = setTimeout(() => setLineIndex((i) => i + 1), 320);
    return () => clearTimeout(t);
  }, [lineIndex]);

  useEffect(() => {
    if (!fading) return;
    const t = setTimeout(onDone, 300);
    return () => clearTimeout(t);
  }, [fading, onDone]);

  // animated "bar chart" loader — bars jitter while booting, then settle
  useEffect(() => {
    if (fading) return;
    const id = setInterval(() => {
      setBars((prev) => prev.map((_, i) => 15 + Math.random() * 85 * ((i + 1) / BAR_COUNT)));
    }, 120);
    return () => clearInterval(id);
  }, [fading]);

  const progress = Math.min(100, Math.round(((lineIndex + 1) / LOG_LINES.length) * 100));

  return (
    <div
      className={`fixed inset-0 z-[10000] bg-rab-bg overflow-hidden flex flex-col items-center justify-center gap-6 transition-opacity duration-300 ${
        fading ? "opacity-0" : "opacity-100"
      }`}
      role="status"
      aria-label="RAB-OS is starting up"
    >
      <MatrixRain className="opacity-60" />
      <div className="absolute inset-0 bg-rab-bg/55" />

      {/* fading masked-figure silhouette — purely decorative flourish for the boot sequence */}
      <div className="absolute inset-x-0 top-10 sm:top-14 flex justify-center pointer-events-none">
        <svg
          viewBox="0 0 120 140"
          className="w-24 sm:w-32 opacity-0 animate-maskFade drop-shadow-[0_0_18px_rgba(231,236,233,0.35)]"
          aria-hidden="true"
        >
          <ellipse cx="60" cy="72" rx="46" ry="58" fill="#0A0F0D" stroke="#E7ECE9" strokeWidth="2" />
          <path d="M18 60c8-22 26-34 42-34s34 12 42 34" fill="none" stroke="#E7ECE9" strokeWidth="1.5" opacity="0.6" />
          <ellipse cx="60" cy="72" rx="38" ry="50" fill="#E7ECE9" />
          <ellipse cx="42" cy="70" rx="7" ry="9" fill="#0A0F0D" />
          <ellipse cx="78" cy="70" rx="7" ry="9" fill="#0A0F0D" />
          <path d="M46 98c5 5 23 5 28 0" stroke="#0A0F0D" strokeWidth="2.4" strokeLinecap="round" fill="none" />
          <path d="M60 78v10" stroke="#0A0F0D" strokeWidth="1.6" strokeLinecap="round" opacity="0.5" />
        </svg>
      </div>

      <div className="relative flex items-center gap-3">
        <span className="h-12 w-12 rounded-lg bg-rab-green text-rab-bg font-display font-bold text-xl flex items-center justify-center animate-blink">
          R
        </span>
        <div>
          <div className="font-display text-lg text-rab-paper tracking-wide">RAB-OS</div>
          <div className="font-display text-[11px] text-rab-muted">Portfolio OS · v2.23</div>
        </div>
      </div>

      <div className="relative w-64">
        <div className="h-14 flex items-end justify-between gap-1">
          {bars.map((h, i) => (
            <div
              key={i}
              className="flex-1 rounded-sm bg-rab-green shadow-[0_0_6px_rgba(74,222,128,0.55)] transition-[height] duration-150 ease-out"
              style={{ height: `${h}%` }}
            />
          ))}
        </div>
        <div className="mt-3 flex items-center justify-between font-display text-[10px] text-rab-faint">
          <span>{LOG_LINES[Math.min(lineIndex, LOG_LINES.length - 1)]}</span>
          <span>{progress}%</span>
        </div>
      </div>
    </div>
  );
}

