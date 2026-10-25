import ReactMarkdown from "react-markdown";
import remarkGfm from "remark-gfm";
import { colorMap } from "../../data/projects";
import { getProjectMarkdown } from "../../data/loadContent";
import StepFlow from "./StepFlow";

export default function ProjectPanel({ project, onClose }) {
  if (!project) return null;
  const c = colorMap[project.color] || colorMap.cyan;
  const markdown = getProjectMarkdown(project.id);

  return (
    <div className="fixed inset-0 z-50 flex justify-end" role="dialog" aria-modal="true" aria-label={`${project.title} detail`}>
      {/* backdrop */}
      <button
        onClick={onClose}
        aria-label="Close panel"
        className="absolute inset-0 bg-[#050c15]/80 backdrop-blur-sm cursor-default"
      />

      <div className="relative h-full w-full max-w-2xl bg-blueprint-bg border-l border-blueprint-line grid-backdrop-fine-classic overflow-y-auto animate-[slideIn_0.25s_ease-out]">
        <div className="sticky top-0 z-10 flex items-center justify-between px-6 sm:px-10 py-5 bg-blueprint-bg/95 backdrop-blur border-b border-blueprint-line">
          <div>
            <span className="font-display text-[10px] uppercase tracking-wider" style={{ color: c.text }}>
              {project.category} · {project.era}
            </span>
            <h2 className="font-display text-xl sm:text-2xl font-semibold text-blueprint-paper mt-1">
              {project.title}
            </h2>
          </div>
          <button
            onClick={onClose}
            className="shrink-0 h-9 w-9 rounded-md border border-blueprint-line flex items-center justify-center text-blueprint-muted hover:text-blueprint-cyan hover:border-blueprint-cyan transition-colors"
            aria-label="Close"
          >
            ✕
          </button>
        </div>

        <div className="px-6 sm:px-10 py-8">
          <div className="flex flex-wrap gap-2 mb-8">
            {project.stack.map((s) => (
              <span
                key={s}
                className="font-display text-[10px] uppercase tracking-wide px-2.5 py-1 rounded border text-blueprint-muted border-blueprint-line"
              >
                {s}
              </span>
            ))}
          </div>

          <div className="mb-10">
            <h3 className="font-display text-[11px] uppercase tracking-wider text-blueprint-faint mb-3">
              Process flow
            </h3>
            <StepFlow steps={project.steps} color={project.color} />
          </div>

          <div className="md-content">
            <ReactMarkdown remarkPlugins={[remarkGfm]}>{markdown}</ReactMarkdown>
          </div>
        </div>
      </div>
    </div>
  );
}
