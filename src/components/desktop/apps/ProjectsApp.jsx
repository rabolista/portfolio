import { useState } from "react";
import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { projects, colorMap } from "../../../data/projects";
import { getProjectMarkdown } from "../../../data/loadContent";

export default function ProjectsApp() {
  const [selected, setSelected] = useState(null);

  if (selected) {
    return <ProjectDetail project={selected} onBack={() => setSelected(null)} />;
  }

  return (
    <div className="p-5 sm:p-6">
      <div className="font-display text-xs text-rab-green mb-4">
        rab@rab-os:~$ ls projects/
      </div>
      <div className="grid sm:grid-cols-2 gap-3">
        {projects.map((p) => {
          const c = colorMap[p.color] || colorMap.cyan;
          return (
            <button
              key={p.id}
              onClick={() => setSelected(p)}
              className="text-left rounded-md border border-rab-line bg-rab-bg/60 p-4 hover:border-rab-green/60 transition-colors"
            >
              <div className="font-display text-[10px] uppercase tracking-wide" style={{ color: c.text }}>
                {p.category}
              </div>
              <div className="text-sm font-semibold text-rab-paper mt-1">{p.title}</div>
              <div className="text-xs text-rab-muted mt-1 leading-relaxed">{p.tagline}</div>
              <div className="flex flex-wrap gap-1.5 mt-3">
                {p.stack.map((s) => (
                  <span
                    key={s}
                    className="font-display text-[9px] uppercase px-1.5 py-0.5 rounded border border-rab-line text-rab-muted"
                  >
                    {s}
                  </span>
                ))}
              </div>
            </button>
          );
        })}
      </div>
    </div>
  );
}

function ProjectDetail({ project, onBack }) {
  const c = colorMap[project.color] || colorMap.cyan;
  const markdown = getProjectMarkdown(project.id);

  return (
    <div className="p-5 sm:p-6">
      <button
        onClick={onBack}
        className="font-display text-[11px] text-rab-muted hover:text-rab-green transition-colors mb-4"
      >
        ← back to projects/
      </button>

      <span className="font-display text-[10px] uppercase tracking-wider" style={{ color: c.text }}>
        {project.category} · {project.era}
      </span>
      <h2 className="font-display text-lg font-semibold text-rab-paper mt-1 mb-3">{project.title}</h2>

      <div className="flex flex-wrap gap-2 mb-5">
        {project.stack.map((s) => (
          <span
            key={s}
            className="font-display text-[10px] uppercase tracking-wide px-2.5 py-1 rounded border text-rab-muted border-rab-line"
          >
            {s}
          </span>
        ))}
      </div>

      <div className="mb-6">
        <h3 className="font-display text-[11px] uppercase tracking-wider text-rab-faint mb-2">
          Process flow
        </h3>
        <ol className="space-y-1.5">
          {project.steps.map((s, i) => (
            <li key={s} className="flex items-center gap-2 text-sm text-rab-paper/90">
              <span
                className="font-display text-[10px] h-5 w-5 rounded-full border flex items-center justify-center shrink-0"
                style={{ borderColor: c.text, color: c.text }}
              >
                {i + 1}
              </span>
              {s}
            </li>
          ))}
        </ol>
      </div>

      <div className="md-content">
        <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
      </div>
    </div>
  );
}
