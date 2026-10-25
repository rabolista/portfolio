// Edit this file to add/change projects.
// `id` must match a markdown file in src/content/projects/{id}.md
// `position` is the (x,y) coordinate on the system-map canvas.
// `steps` renders as the horizontal process flow inside the detail panel.

export const projects = [
  {
    id: "ssis-retail-etl",
    title: "Retail ETL Pipelines",
    category: "Data Engineering",
    tagline: "Daily/weekly data flow for Home Depot, Walmart & RONA",
    stack: ["SSIS", "SQL Server", "T-SQL"],
    era: "2021 — Present",
    color: "cyan",
    position: { x: 40, y: 260 },
    steps: [
      "Retail POS / EDI feeds",
      "SSIS extract & staging",
      "Validation & integrity checks",
      "SQL Server warehouse tables",
    ],
  },
  {
    id: "sales-balancing-tool",
    title: "Sales Balancing Tool",
    category: "Reconciliation",
    tagline: "Reconciles JD Edwards against Cognos to kill reporting discrepancies",
    stack: ["T-SQL", "Stored Procedures", "JD Edwards", "Cognos"],
    era: "2021 — Present",
    color: "amber",
    position: { x: 380, y: 60 },
    steps: [
      "JD Edwards extract",
      "Cognos extract",
      "SQL reconciliation logic",
      "Discrepancy report",
    ],
  },
  {
    id: "bathing-capacity-tool",
    title: "Bathing Capacity Tool",
    category: "Forecasting",
    tagline: "Production-critical forecasting app for manufacturing material delivery",
    stack: ["T-SQL", "C# (WebForms)", "SQL Server"],
    era: "2021 — Present",
    color: "amber",
    position: { x: 380, y: 260 },
    steps: [
      "Demand / capacity inputs",
      "Forecasting calculation layer",
      "Planning output tables",
      "Delivery accuracy reporting",
    ],
  },
  {
    id: "user-management-system",
    title: "User Management System",
    category: "Application",
    tagline: "Auth, authorization & data provisioning for promotional web platforms",
    stack: ["C# (WebForms)", "ASP.NET", "SQL Server"],
    era: "2021 — Present",
    color: "sky",
    position: { x: 380, y: 460 },
    steps: [
      "User request / signup",
      "Authentication layer",
      "Role & authorization rules",
      "Automated data provisioning",
    ],
  },
  {
    id: "power-bi-dashboards",
    title: "Power BI Dashboard Suite",
    category: "Reporting / BI",
    tagline: "Semantic models & dashboards used by Sales, Ops, Supply Chain & Finance",
    stack: ["Power BI", "DAX", "SQL Server"],
    era: "2021 — Present",
    color: "cyan",
    position: { x: 720, y: 260 },
    steps: [
      "Warehouse & reconciled data",
      "Semantic data model (DAX)",
      "Dashboard build",
      "Stakeholder rollout",
    ],
  },
  {
    id: "mobile-apps",
    title: "Mobile Apps",
    category: "Mobile Development",
    tagline: "Cross-platform apps shipped to the App Store & Google Play",
    stack: ["Flutter", "Swift", "Firebase"],
    era: "2015 — 2018 (freelance) · ongoing",
    color: "sky",
    position: { x: 40, y: 460 },
    steps: [
      "Product concept",
      "Flutter / Swift build",
      "Store submission (App Store / Google Play)",
      "Release & iteration",
    ],
  },
];

export const colorMap = {
  cyan: { border: "#5EEAD4", glow: "rgba(94,234,212,0.35)", text: "#5EEAD4" },
  amber: { border: "#F0A868", glow: "rgba(240,168,104,0.35)", text: "#F0A868" },
  sky: { border: "#38BDF8", glow: "rgba(56,189,248,0.35)", text: "#38BDF8" },
};
