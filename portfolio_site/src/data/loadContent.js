// Loads every markdown file in src/content/projects/ as raw text, keyed by id.
// Vite's import.meta.glob with { query: '?raw', import: 'default' } inlines the
// file content at build time — no server/backend required.
const modules = import.meta.glob("../content/projects/*.md", {
  query: "?raw",
  import: "default",
  eager: true,
});

const contentById = {};
for (const path in modules) {
  const id = path.split("/").pop().replace(".md", "");
  contentById[id] = modules[path];
}

export function getProjectMarkdown(id) {
  return contentById[id] || `# ${id}\n\nAdd content in \`src/content/projects/${id}.md\`.`;
}
