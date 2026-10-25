import { Handle, Position } from "@xyflow/react";
import { colorMap } from "../../data/projects";

export default function ProjectNode({ data }) {
  const c = colorMap[data.color] || colorMap.cyan;
  return (
    <div
      onClick={data.onClick}
      className="group cursor-pointer select-none rounded-lg border bg-blueprint-bg2/90 backdrop-blur px-4 py-3 w-[220px] transition-all duration-200 hover:-translate-y-0.5"
      style={{
        borderColor: c.border,
        boxShadow: `0 0 0 1px ${c.glow}`,
      }}
    >
      <Handle type="target" position={Position.Left} style={{ background: c.border, border: "none", width: 6, height: 6 }} />
      <Handle type="source" position={Position.Right} style={{ background: c.border, border: "none", width: 6, height: 6 }} />

      <div className="flex items-center gap-2 mb-1">
        <span className="h-1.5 w-1.5 rounded-full animate-blink" style={{ background: c.border }} />
        <span className="font-display text-[10px] uppercase tracking-wider" style={{ color: c.text }}>
          {data.category}
        </span>
      </div>
      <div className="font-display text-sm font-semibold text-blueprint-paper leading-snug">
        {data.title}
      </div>
      <div className="text-[11px] text-blueprint-muted mt-1 leading-snug line-clamp-2">
        {data.tagline}
      </div>
      <div className="mt-2 text-[10px] font-display group-hover:opacity-100 opacity-60 transition-opacity" style={{ color: c.text }}>
        view detail →
      </div>
    </div>
  );
}
