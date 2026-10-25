const links = [
  { href: "#map", label: "System Map" },
  { href: "#journey", label: "Journey" },
  { href: "#skills", label: "Skills" },
  { href: "#contact", label: "Contact" },
];

export default function Nav() {
  return (
    <header className="sticky top-0 z-40 border-b border-blueprint-line bg-blueprint-bg/85 backdrop-blur">
      <nav className="max-w-6xl mx-auto px-6 h-16 flex items-center justify-between">
        <a href="#top" className="font-display text-sm font-semibold text-blueprint-paper tracking-tight">
          R.A. BOLISTA <span className="text-blueprint-cyan">/</span> <span className="text-blueprint-muted">BI &amp; DB DEV</span>
        </a>
        <div className="hidden sm:flex items-center gap-7">
          {links.map((l) => (
            <a
              key={l.href}
              href={l.href}
              className="font-display text-xs uppercase tracking-wider text-blueprint-muted hover:text-blueprint-cyan transition-colors"
            >
              {l.label}
            </a>
          ))}
        </div>
        <a
          href="mailto:robert.bolista@gmail.com"
          className="font-display text-xs uppercase tracking-wider px-3.5 py-2 rounded border border-blueprint-cyan text-blueprint-cyan hover:bg-blueprint-cyan hover:text-blueprint-bg transition-colors"
        >
          Contact
        </a>
      </nav>
    </header>
  );
}
