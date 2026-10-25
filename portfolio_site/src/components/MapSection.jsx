import { useState } from "react";
import SystemMap from "./SystemMap";
import ProjectPanel from "./ProjectPanel";
import { SectionHeading } from "./Journey";

export default function MapSection() {
  const [selected, setSelected] = useState(null);

  return (
    <section id="map" className="max-w-6xl mx-auto px-6 py-24 border-b border-blueprint-line">
      <SectionHeading
        eyebrow="00 — Architecture"
        title="How the work connects"
        sub="This is the actual data lineage behind my day-to-day at Masco — from raw retail/ERP sources through the tools I built, into the dashboards the business runs on. Click any node for the full write-up. Drag to rearrange, scroll to zoom."
      />
      <div className="mt-10">
        <SystemMap onSelect={setSelected} />
      </div>
      <p className="text-xs text-blueprint-faint mt-4 font-display">
        tip: nodes are draggable · pinch or scroll to zoom · click a node to open its detail
      </p>

      <ProjectPanel project={selected} onClose={() => setSelected(null)} />
    </section>
  );
}
