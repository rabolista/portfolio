import { experience } from "../../../data/experience";

export default function AboutApp() {
  return (
    <div className="p-5 sm:p-6 font-display text-[13px] leading-relaxed">
      <div className="text-rab-green">
        <span className="text-rab-muted">rab@rab-os</span>
        <span className="text-rab-faint">:</span>
        <span className="text-rab-sky">~</span>
        <span className="text-rab-faint">$</span> cat about.txt
      </div>

      <div className="mt-4 mb-6 text-rab-paper">
        <div className="text-lg font-semibold text-rab-green">Robert Allan Bolista</div>
        <div className="text-rab-muted mt-0.5">Full-Stack Software Developer / BI Developer</div>
        <p className="mt-3 text-rab-paper/90 font-sans text-sm leading-relaxed max-w-xl">
          Two tracks, run in parallel for a decade. 15+ years in business intelligence and data
          engineering — SQL Server and Oracle, T-SQL and PL/SQL, SSIS ETL, Power BI, and
          enterprise integration across JD Edwards and Cognos — for retail, manufacturing,
          telecom, insurance, and financial-services clients, currently as de facto technical
          lead on an internal platforms team. Alongside it, almost 10 years as a freelance mobile and web
          developer: ten apps published on the Apple App Store and six on Google Play,
          independently designed and built since 2016, plus full-stack web platforms in React,
          React Native, TypeScript, ASP.NET, and Laravel on PostgreSQL and SQL Server backends.
          The combination means one person who can model the data, build the service, and ship
          the client.
        </p>
      </div>

      <div className="text-rab-sky mb-2">$ cat experience.log</div>
      <div className="space-y-2">
        {experience.map((job) => (
          <div key={job.role} className="border-l-2 border-rab-line pl-3 py-1">
            <div className="text-rab-paper font-sans text-sm font-semibold">{job.role}</div>
            <div className="text-rab-muted font-sans text-xs">{job.period}</div>
          </div>
        ))}
      </div>
    </div>
  );
}
