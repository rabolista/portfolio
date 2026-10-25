import { SectionHeading } from "./Journey";

export default function Contact() {
  return (
    <section id="contact" className="max-w-6xl mx-auto px-6 py-24">
      <SectionHeading eyebrow="03 — Connect" title="Let's talk" />
      <div className="mt-10 grid sm:grid-cols-3 gap-4">
        <ContactCard label="Email" value="robert.bolista@gmail.com" href="mailto:robert.bolista@gmail.com" />
        <ContactCard label="Phone" value="(647) 470-0157" href="tel:+16474700157" />
        <ContactCard
          label="LinkedIn"
          value="linkedin.com/in/robert-allan-bolista"
          href="https://www.linkedin.com/in/robert-allan-bolista/"
        />
      </div>
      <p className="text-blueprint-faint text-xs mt-10 font-display">
        London, ON, Canada
      </p>
    </section>
  );
}

function ContactCard({ label, value, href }) {
  return (
    <a
      href={href}
      target={href.startsWith("http") ? "_blank" : undefined}
      rel={href.startsWith("http") ? "noreferrer" : undefined}
      className="block rounded-lg border border-blueprint-line bg-blueprint-bg2/40 p-5 hover:border-blueprint-cyan transition-colors group"
    >
      <div className="font-display text-[10px] uppercase tracking-wider text-blueprint-faint mb-1.5">
        {label}
      </div>
      <div className="text-sm text-blueprint-paper group-hover:text-blueprint-cyan transition-colors break-words">
        {value}
      </div>
    </a>
  );
}
