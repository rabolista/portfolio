export default function ResumeApp() {
  return (
    <div className="h-full flex flex-col p-5 sm:p-6 gap-3">
      <div className="flex items-center justify-between gap-3 shrink-0">
        <div className="font-display text-xs text-rab-green">rab@rab-os:~$ open resume.pdf</div>
        <div className="flex gap-2">
          <a
            href="/resume.pdf"
            target="_blank"
            rel="noreferrer"
            className="font-display text-[11px] uppercase tracking-wide px-3 py-1.5 rounded border border-rab-line text-rab-muted hover:text-rab-green hover:border-rab-green transition-colors"
          >
            Open
          </a>
          <a
            href="/resume.pdf"
            download
            className="font-display text-[11px] uppercase tracking-wide px-3 py-1.5 rounded bg-rab-green text-rab-bg font-semibold hover:brightness-110 transition"
          >
            Download
          </a>
        </div>
      </div>
      <div className="flex-1 min-h-0 rounded-md border border-rab-line overflow-hidden bg-rab-bg">
        <iframe title="Resume PDF" src="/resume.pdf" className="w-full h-full" />
      </div>
    </div>
  );
}
