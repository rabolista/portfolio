import { skillGroups } from "../../../data/experience";

export default function SkillsApp() {
  return (
    <div className="p-5 sm:p-6">
      <div className="font-display text-xs text-rab-green mb-4">rab@rab-os:~$ cat skills.json</div>
      <div className="grid sm:grid-cols-2 gap-4">
        {skillGroups.map((g) => (
          <div
            key={g.group}
            className="rounded-md border border-rab-line bg-rab-bg/60 p-4 hover:border-rab-green/50 transition-colors"
          >
            <h3 className="font-display text-[11px] uppercase tracking-wider text-rab-green mb-2.5">
              {g.group}
            </h3>
            <ul className="space-y-1.5">
              {g.items.map((item) => (
                <li key={item} className="text-sm text-rab-paper/90 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-rab-faint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </div>
  );
}
