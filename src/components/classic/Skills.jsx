import { skillGroups } from "../../data/experience";
import { SectionHeading } from "./Journey";

export default function Skills() {
  return (
    <section id="skills" className="max-w-6xl mx-auto px-6 py-24 border-b border-blueprint-line">
      <SectionHeading
        eyebrow="02 — Legend"
        title="Skills & stack"
        sub="Grouped the way I actually use them day to day — not a generic tag cloud."
      />
      <div className="mt-12 grid sm:grid-cols-2 lg:grid-cols-3 gap-5">
        {skillGroups.map((g) => (
          <div
            key={g.group}
            className="rounded-lg border border-blueprint-line bg-blueprint-bg2/40 p-5 hover:border-blueprint-cyan/60 transition-colors"
          >
            <h3 className="font-display text-xs uppercase tracking-wider text-blueprint-cyan mb-3">
              {g.group}
            </h3>
            <ul className="space-y-1.5">
              {g.items.map((item) => (
                <li key={item} className="text-sm text-blueprint-paper/90 flex items-center gap-2">
                  <span className="h-1 w-1 rounded-full bg-blueprint-faint" />
                  {item}
                </li>
              ))}
            </ul>
          </div>
        ))}
      </div>
    </section>
  );
}
