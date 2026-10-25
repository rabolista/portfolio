export default function ContactApp() {
  return (
    <div className="p-5 sm:p-6">
      <div className="font-display text-xs text-rab-green mb-4">rab@rab-os:~$ cat contact.conf</div>
      <div className="grid gap-3">
        <ContactCard label="Email" value="robert.bolista@gmail.com" href="mailto:robert.bolista@gmail.com" />
        <ContactCard
          label="LinkedIn"
          value="linkedin.com/in/robert-allan-bolista"
          href="https://www.linkedin.com/in/robert-allan-bolista/"
        />
        <ContactCard label="GitHub" value="github.com/rabolista" href="https://github.com/rabolista" />
      </div>
      <p className="text-rab-faint text-xs mt-6 font-display">London, ON, Canada</p>
    </div>
  );
}

function ContactCard({ label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="block rounded-md border border-rab-line bg-rab-bg/60 p-4 hover:border-rab-green transition-colors group"
    >
      <div className="font-display text-[10px] uppercase tracking-wider text-rab-faint mb-1.5">
        {label}
      </div>
      <div className="text-sm text-rab-paper group-hover:text-rab-green transition-colors break-words">
        {value}
      </div>
    </a>
  );
}
