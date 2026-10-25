import { useMemo, useCallback } from "react";
import {
  ReactFlow,
  Background,
  Controls,
  MarkerType,
  BackgroundVariant,
} from "@xyflow/react";
import "@xyflow/react/dist/style.css";
import { projects } from "../data/projects";
import ProjectNode from "./ProjectNode";

const nodeTypes = { project: ProjectNode };

// static system nodes (non-project) that give the map real context
const systemNodeStyle = {
  background: "#0B1D2E",
  border: "1px dashed #4C6B85",
  color: "#8CA3B8",
  fontFamily: "JetBrains Mono, monospace",
  fontSize: 11,
  textAlign: "center",
  whiteSpace: "pre-line",
  borderRadius: 8,
  padding: 10,
  width: 200,
};

const systemNodes = [
  {
    id: "sources",
    position: { x: -260, y: 260 },
    data: { label: "Retail & ERP Sources\n(Home Depot · Walmart · RONA · JD Edwards · Cognos)" },
    type: "input",
    style: systemNodeStyle,
  },
  {
    id: "business",
    position: { x: 1040, y: 260 },
    data: { label: "Business Units\n(Sales · Ops · Supply Chain · Finance)" },
    type: "output",
    style: systemNodeStyle,
  },
];

const edges = [
  { id: "e-src-etl", source: "sources", target: "ssis-retail-etl", animated: true, style: { stroke: "#2C5C82" } },
  { id: "e-etl-sbt", source: "ssis-retail-etl", target: "sales-balancing-tool", animated: true, style: { stroke: "#2C5C82" } },
  { id: "e-etl-bct", source: "ssis-retail-etl", target: "bathing-capacity-tool", animated: true, style: { stroke: "#2C5C82" } },
  { id: "e-etl-ums", source: "ssis-retail-etl", target: "user-management-system", animated: true, style: { stroke: "#2C5C82" } },
  { id: "e-sbt-bi", source: "sales-balancing-tool", target: "power-bi-dashboards", animated: true, style: { stroke: "#2C5C82" } },
  { id: "e-bct-bi", source: "bathing-capacity-tool", target: "power-bi-dashboards", animated: true, style: { stroke: "#2C5C82" } },
  { id: "e-ums-bi", source: "user-management-system", target: "power-bi-dashboards", animated: true, style: { stroke: "#2C5C82" } },
  { id: "e-bi-biz", source: "power-bi-dashboards", target: "business", animated: true, style: { stroke: "#2C5C82" } },
  { id: "e-mobile", source: "mobile-apps", target: "business", animated: true, style: { stroke: "#2C5C82", strokeDasharray: "4 4" } },
].map((e) => ({
  ...e,
  markerEnd: { type: MarkerType.ArrowClosed, color: "#2C5C82", width: 16, height: 16 },
}));

export default function SystemMap({ onSelect }) {
  const projectNodes = useMemo(
    () =>
      projects.map((p) => ({
        id: p.id,
        type: "project",
        position: p.position,
        data: { ...p, onClick: () => onSelect(p) },
      })),
    [onSelect]
  );

  const nodes = useMemo(() => [...systemNodes, ...projectNodes], [projectNodes]);

  const onNodeClick = useCallback(
    (_, node) => {
      const p = projects.find((pr) => pr.id === node.id);
      if (p) onSelect(p);
    },
    [onSelect]
  );

  return (
    <div className="h-[600px] w-full rounded-xl border border-blueprint-line bg-blueprint-bg2/40 overflow-hidden">
      <ReactFlow
        nodes={nodes}
        edges={edges}
        nodeTypes={nodeTypes}
        onNodeClick={onNodeClick}
        fitView
        fitViewOptions={{ padding: 0.25 }}
        proOptions={{ hideAttribution: true }}
        minZoom={0.4}
        maxZoom={1.5}
        nodesDraggable={true}
        nodesConnectable={false}
        panOnScroll
      >
        <Background variant={BackgroundVariant.Dots} gap={22} size={1} color="#1E4A6F" />
        <Controls
          showInteractive={false}
          className="!bg-blueprint-bg2 !border-blueprint-line [&>button]:!bg-blueprint-bg2 [&>button]:!border-blueprint-line [&>button]:!text-blueprint-muted"
        />
      </ReactFlow>
    </div>
  );
}
