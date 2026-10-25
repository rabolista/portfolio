import { colorMap } from "../../data/projects";

export default function StepFlow({ steps, color = "cyan" }) {
  const c = colorMap[color] || colorMap.cyan;
  return (
    <div className="flex flex-col sm:flex-row gap-0 sm:gap-2 items-stretch">
      {steps.map((step, i) => (
        <div key={step} className="flex sm:flex-1 items-stretch gap-2">
          <div
            className="flex-1 rounded-md border px-3 py-2.5 text-xs font-display text-blueprint-paper bg-blueprint-bg2/60"
            style={{ borderColor: c.border }}
          >
            <span className="block text-[9px] uppercase tracking-wider mb-1" style={{ color: c.text }}>
              step {i + 1}
            </span>
            {step}
          </div>
          {i < steps.length - 1 && (
            <div className="hidden sm:flex items-center px-1">
              <svg width="20" height="10" viewBox="0 0 20 10">
                <line x1="0" y1="5" x2="16" y2="5" stroke={c.border} strokeWidth="1.5" strokeDasharray="4 3" className="animate-dash" />
                <polygon points="16,1 20,5 16,9" fill={c.border} />
              </svg>
            </div>
          )}
          {i < steps.length - 1 && (
            <div className="flex sm:hidden justify-center py-0.5">
              <svg width="10" height="16" viewBox="0 0 10 16">
                <line x1="5" y1="0" x2="5" y2="12" stroke={c.border} strokeWidth="1.5" strokeDasharray="4 3" />
                <polygon points="1,12 5,16 9,12" fill={c.border} />
              </svg>
            </div>
          )}
        </div>
      ))}
    </div>
  );
}
