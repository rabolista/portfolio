import { education, certifications } from "../../../data/experience";

export default function EducationApp() {
  return (
    <div className="p-5 sm:p-6">
      <div className="font-display text-xs text-rab-green mb-4">rab@rab-os:~$ cat education.log</div>

      <div className="space-y-4 mb-8">
        {education.map((e) => (
          <div key={e.title} className="rounded-md border border-rab-line bg-rab-bg/60 p-4">
            <div className="text-sm font-semibold text-rab-paper">{e.title}</div>
            <div className="text-xs text-rab-muted mt-0.5">
              {e.org} {e.period && `· ${e.period}`}
            </div>
            {e.detail && <div className="text-xs text-rab-paper/80 mt-2 leading-relaxed">{e.detail}</div>}
            {e.courses && (
              <ul className="mt-3 space-y-1">
                {e.courses.map((c) => (
                  <li key={c} className="text-xs text-rab-paper/80 flex items-start gap-2">
                    <span className="text-rab-green">›</span>
                    {c}
                  </li>
                ))}
              </ul>
            )}
          </div>
        ))}
      </div>

      <div className="font-display text-xs text-rab-sky mb-3">$ cat certifications.log</div>
      <ul className="space-y-1.5">
        {certifications.map((c) => (
          <li key={c} className="text-sm text-rab-paper/90 flex items-start gap-2">
            <span className="text-rab-amber">›</span>
            {c}
          </li>
        ))}
      </ul>
    </div>
  );
}
