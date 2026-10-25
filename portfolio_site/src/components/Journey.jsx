import { experience, education, certifications } from "../data/experience";

export default function Journey() {
  return (
    <section id="journey" className="max-w-6xl mx-auto px-6 py-24 border-b border-blueprint-line">
      <SectionHeading eyebrow="01 — Timeline" title="Career journey" />

      <div className="mt-12 relative pl-6 sm:pl-10">
        <div className="absolute left-[5px] sm:left-[9px] top-2 bottom-2 w-px bg-blueprint-line" />
        {experience.map((job, i) => (
          <div key={job.role + job.company} className="relative pb-12 last:pb-0">
            <div className="absolute -left-6 sm:-left-10 top-1 h-[11px] w-[11px] rounded-full bg-blueprint-bg border-2 border-blueprint-cyan" />
            <div className="font-display text-[11px] uppercase tracking-wider text-blueprint-cyan mb-1">
              {job.period}
            </div>
            <h3 className="font-display text-lg text-blueprint-paper font-semibold">{job.role}</h3>
            <div className="text-sm text-blueprint-muted mb-3">
              {job.company} · {job.location}
            </div>
            <ul className="space-y-1.5">
              {job.bullets.map((b) => (
                <li key={b} className="text-sm text-blueprint-muted leading-relaxed pl-4 relative before:content-['›'] before:absolute before:left-0 before:text-blueprint-amber">
                  {b}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>

      <div className="mt-16 grid sm:grid-cols-2 gap-10">
        <div>
          <h3 className="font-display text-[11px] uppercase tracking-wider text-blueprint-faint mb-4">
            Education
          </h3>
          <div className="space-y-5">
            {education.map((e) => (
              <div key={e.title}>
                <div className="text-sm font-semibold text-blueprint-paper">{e.title}</div>
                <div className="text-xs text-blueprint-muted">{e.org} {e.period && `· ${e.period}`}</div>
                {e.detail && <p className="text-xs text-blueprint-muted mt-1.5 leading-relaxed">{e.detail}</p>}
              </div>
            ))}
          </div>
        </div>
        <div>
          <h3 className="font-display text-[11px] uppercase tracking-wider text-blueprint-faint mb-4">
            Certifications
          </h3>
          <div className="flex flex-wrap gap-2">
            {certifications.map((c) => (
              <span
                key={c}
                className="text-xs px-2.5 py-1.5 rounded border border-blueprint-line text-blueprint-muted"
              >
                {c}
              </span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export function SectionHeading({ eyebrow, title, sub }) {
  return (
    <div>
      <div className="font-display text-xs uppercase tracking-[0.2em] text-blueprint-amber mb-3">
        {eyebrow}
      </div>
      <h2 className="font-display text-2xl sm:text-3xl font-semibold text-blueprint-paper">{title}</h2>
      {sub && <p className="text-blueprint-muted mt-3 max-w-2xl">{sub}</p>}
    </div>
  );
}
