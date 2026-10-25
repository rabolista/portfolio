export default function Hero() {
  return (
    <section id="top" className="relative overflow-hidden border-b border-blueprint-line">
      <div className="absolute inset-0 grid-backdrop-classic" />
      <div className="absolute inset-0 bg-gradient-to-b from-transparent via-blueprint-bg/40 to-blueprint-bg" />

      {/* decorative schema nodes */}
      <svg className="absolute inset-0 w-full h-full opacity-70" preserveAspectRatio="none">
        <line x1="8%" y1="30%" x2="30%" y2="30%" stroke="#1E4A6F" strokeWidth="1" strokeDasharray="3 5" className="animate-dash" />
        <line x1="70%" y1="70%" x2="94%" y2="70%" stroke="#1E4A6F" strokeWidth="1" strokeDasharray="3 5" className="animate-dash" />
        <circle cx="8%" cy="30%" r="3" fill="#5EEAD4" className="animate-blink" />
        <circle cx="94%" cy="70%" r="3" fill="#38BDF8" className="animate-blink" />
      </svg>

      <div className="relative max-w-6xl mx-auto px-6 pt-24 pb-28 sm:pt-32 sm:pb-36">
        <div className="font-display text-xs uppercase tracking-[0.2em] text-blueprint-cyan mb-5 flex items-center gap-2">
          <span className="h-1.5 w-1.5 rounded-full bg-blueprint-cyan animate-blink" />
          System online — London, ON
        </div>
        <h1 className="font-display text-4xl sm:text-6xl font-bold text-blueprint-paper leading-[1.05] max-w-3xl">
          Robert Allan Bolista
        </h1>
        <p className="mt-5 text-lg sm:text-xl text-blueprint-muted max-w-2xl leading-relaxed">
          Two tracks, run in parallel for a decade. 15+ years in business intelligence and data
          engineering — SQL Server and Oracle, T-SQL and PL/SQL, SSIS ETL, Power BI, and
          enterprise integration across JD Edwards and Cognos — currently as de facto technical
          lead at Masco Canada. Alongside it, almost 10 years as a freelance mobile and web
          developer with ten apps on the Apple App Store and six on Google Play, plus full-stack
          web platforms in React, React Native, TypeScript, ASP.NET, and Laravel.
        </p>

        <div className="mt-9 flex flex-wrap gap-3">
          <a
            href="#map"
            className="font-display text-xs uppercase tracking-wider px-5 py-3 rounded-md bg-blueprint-cyan text-blueprint-bg font-semibold hover:brightness-110 transition"
          >
            Explore the system map
          </a>
          <a
            href="#journey"
            className="font-display text-xs uppercase tracking-wider px-5 py-3 rounded-md border border-blueprint-line text-blueprint-paper hover:border-blueprint-cyan transition"
          >
            View career timeline
          </a>
          <a
            href="/resume.pdf"
            download
            className="font-display text-xs uppercase tracking-wider px-5 py-3 rounded-md border border-blueprint-amber text-blueprint-amber hover:bg-blueprint-amber hover:text-blueprint-bg transition"
          >
            Download résumé
          </a>
        </div>

        <div className="mt-14 grid grid-cols-2 sm:grid-cols-4 gap-6 max-w-2xl">
          {[
            ["15+", "years in BI/DB dev"],
            ["6", "production tools shipped"],
            ["3", "retail partners integrated"],
            ["Sep 2026", "Data Science cert (in progress)"],
          ].map(([n, l]) => (
            <div key={l}>
              <div className="font-display text-2xl text-blueprint-cyan font-semibold">{n}</div>
              <div className="text-xs text-blueprint-muted mt-1 leading-snug">{l}</div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
