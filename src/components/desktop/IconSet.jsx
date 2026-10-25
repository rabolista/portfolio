// Icon set for RAB-OS desktop icons & taskbar.
// Two flavors are exported per icon:
//  - Colorful "glyph" icons (fixed palette) used on the desktop/taskbar for a
//    real-OS look.
//  - The functions below are drop-in <svg> components; pass a className for sizing.

export function UserIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <circle cx="24" cy="24" r="22" fill="#1E3A2F" stroke="#274A3B" strokeWidth="1.5" />
      <circle cx="24" cy="19" r="8" fill="#5EEAD4" />
      <path d="M8 40c2.5-8.5 8.6-13 16-13s13.5 4.5 16 13c-4.4 3.4-10 5-16 5s-11.6-1.6-16-5Z" fill="#4ADE80" />
    </svg>
  );
}

export function FolderIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path d="M5 15a2 2 0 0 1 2-2h11l3.4 4H41a2 2 0 0 1 2 2v19a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" fill="#F5C451" />
      <path d="M5 19h38v16a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2Z" fill="#F0A868" />
      <path d="M5 15a2 2 0 0 1 2-2h11l3.4 4H7a2 2 0 0 0-2 2Z" fill="#FBD98A" />
    </svg>
  );
}

export function GraduationCapIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path d="M24 8 4 17l20 9 20-9Z" fill="#38BDF8" />
      <path d="M13 22.5v9c0 2.8 4.9 6.5 11 6.5s11-3.7 11-6.5v-9L24 26Z" fill="#1E3A2F" stroke="#274A3B" strokeWidth="1.2" />
      <path d="M40 19v11.5" stroke="#F5A524" strokeWidth="2.2" strokeLinecap="round" />
      <circle cx="40" cy="32.5" r="2.2" fill="#F5A524" />
    </svg>
  );
}

export function GlobeIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <circle cx="24" cy="24" r="20" fill="#0F2942" stroke="#38BDF8" strokeWidth="1.6" />
      <ellipse cx="24" cy="24" rx="8" ry="20" fill="none" stroke="#5EEAD4" strokeWidth="1.4" />
      <path d="M4.5 24h39M7 15.5h34M7 32.5h34" stroke="#5EEAD4" strokeWidth="1.4" />
      <circle cx="24" cy="24" r="20" fill="none" stroke="#38BDF8" strokeWidth="1.6" />
    </svg>
  );
}

export function PlayStoreIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path d="M10 6.5c-1 .6-1.6 1.7-1.6 3v29c0 1.3.6 2.4 1.6 3l19-17.5Z" fill="#38BDF8" />
      <path d="M10 6.5 29 24l7.4-4.3c1.8-1 1.8-3.4 0-4.4L15.5 4C13.3 2.8 11.3 4.2 10 6.5Z" fill="#4ADE80" />
      <path d="M10 41.5c1.3 2.3 3.3 3.7 5.5 2.5l20.9-11.3c1.8-1 1.8-3.4 0-4.4L29 24Z" fill="#F5A524" />
    </svg>
  );
}

export function AppStoreIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="4" y="4" width="40" height="40" rx="9" fill="#0F2942" stroke="#38BDF8" strokeWidth="1.5" />
      <path
        d="M24 12c1 0 1.9.7 2.2 1.7l9.3 20.6a2.3 2.3 0 0 1-2.1 3.2h-3.1a2.3 2.3 0 0 1-2.1-1.4L26.5 32h-5l-1.7 4.1a2.3 2.3 0 0 1-2.1 1.4h-3.1a2.3 2.3 0 0 1-2.1-3.2l9.3-20.6A2.4 2.4 0 0 1 24 12Z"
        fill="#E7ECE9"
      />
      <path d="M24 18.5 27 28h-6Z" fill="#0F2942" />
    </svg>
  );
}

export function PythonIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path d="M23.5 4.5c-9 0-8.4 3.9-8.4 3.9v4.1h8.6v1.2H11.8S5 13 5 22.4c0 9.4 5.9 9.1 5.9 9.1h3.5v-4.9s-.2-5.9 5.8-5.9h8.5s5.6.1 5.6-5.4V10s.8-5.5-11.8-5.5Z" fill="#38BDF8" />
      <path d="M24.5 43.5c9 0 8.4-3.9 8.4-3.9v-4.1h-8.6v-1.2h12.1S43 34.7 43 25.3c0-9.4-5.9-9.1-5.9-9.1h-3.5v4.9s.2 5.9-5.8 5.9h-8.5s-5.6-.1-5.6 5.4V38s-.8 5.5 11.8 5.5Z" fill="#F5A524" />
      <circle cx="19" cy="9.3" r="1.4" fill="#0A0F0D" />
      <circle cx="29" cy="38.7" r="1.4" fill="#0A0F0D" />
    </svg>
  );
}

export function GitHubIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <circle cx="24" cy="24" r="20" fill="#12251C" stroke="#4ADE80" strokeWidth="1.5" />
      <path
        d="M24 10c-7.7 0-14 6.3-14 14 0 6.2 4 11.4 9.6 13.3.7.1 1-.3 1-.7v-2.6c-3.9.9-4.7-1.7-4.7-1.7-.6-1.6-1.6-2.1-1.6-2.1-1.3-.9.1-.8.1-.8 1.4.1 2.2 1.5 2.2 1.5 1.3 2.2 3.4 1.6 4.2 1.2.1-.9.5-1.6.9-2-3.2-.4-6.5-1.6-6.5-7.2 0-1.6.5-2.9 1.5-3.9-.2-.4-.6-1.9.1-4 0 0 1.2-.4 4 1.5a13.7 13.7 0 0 1 7.3 0c2.8-1.9 4-1.5 4-1.5.8 2.1.3 3.6.1 4 1 1 1.5 2.3 1.5 3.9 0 5.6-3.3 6.8-6.5 7.2.5.4 1 1.3 1 2.6v3.9c0 .4.3.8 1 .7C34 35.4 38 30.2 38 24c0-7.7-6.3-14-14-14Z"
        fill="#E7ECE9"
      />
    </svg>
  );
}

export function PowerBiIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#2B2B2B" stroke="#F2C811" strokeWidth="1.5" />
      <rect x="12" y="26" width="6" height="12" rx="1" fill="#F2C811" />
      <rect x="21" y="18" width="6" height="20" rx="1" fill="#F2C811" opacity="0.85" />
      <rect x="30" y="10" width="6" height="28" rx="1" fill="#F2C811" opacity="0.65" />
    </svg>
  );
}

export function GoIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#0F2A33" stroke="#00ADD8" strokeWidth="1.5" />
      <ellipse cx="17" cy="24" rx="6" ry="7.5" fill="#00ADD8" />
      <ellipse cx="31" cy="24" rx="6" ry="7.5" fill="#00ADD8" />
      <circle cx="15" cy="22" r="1.4" fill="#0A0F0D" />
      <circle cx="29" cy="22" r="1.4" fill="#0A0F0D" />
      <path d="M11 15c1-2 3-3 6-3M37 15c-1-2-3-3-6-3" stroke="#00ADD8" strokeWidth="1.6" strokeLinecap="round" fill="none" />
    </svg>
  );
}

export function CSharpIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="4" y="4" width="40" height="40" rx="8" fill="#221C35" stroke="#9179F2" strokeWidth="1.5" />
      <text x="24" y="31" textAnchor="middle" fontFamily="'JetBrains Mono', monospace" fontSize="18" fontWeight="700" fill="#9179F2">C#</text>
    </svg>
  );
}

export function FlutterIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path d="M14 24 28 10h10L20 28Z" fill="#42A5F5" />
      <path d="M14 24 28 38h10L24 24Z" fill="#42A5F5" opacity="0.55" />
      <path d="M20 28 24 24l4 4-8 8-6-6Z" fill="#1976D2" />
    </svg>
  );
}

export function DatabaseIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <ellipse cx="24" cy="11" rx="16" ry="6" fill="#F5A524" />
      <path d="M8 11v26c0 3.3 7.2 6 16 6s16-2.7 16-6V11" fill="#0F2942" stroke="#F5A524" strokeWidth="1.4" />
      <path d="M8 20c0 3.3 7.2 6 16 6s16-2.7 16-6" fill="none" stroke="#F5A524" strokeWidth="1.4" />
      <path d="M8 29c0 3.3 7.2 6 16 6s16-2.7 16-6" fill="none" stroke="#F5A524" strokeWidth="1.4" />
      <ellipse cx="24" cy="11" rx="16" ry="6" fill="none" stroke="#0A0F0D" strokeWidth="1" opacity="0.3" />
    </svg>
  );
}

export function CpuIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="10" y="10" width="28" height="28" rx="3" fill="#12251C" stroke="#4ADE80" strokeWidth="1.5" />
      <rect x="16" y="16" width="16" height="16" rx="1.5" fill="#0A0F0D" stroke="#38BDF8" strokeWidth="1.2" />
      <g stroke="#4ADE80" strokeWidth="1.5" strokeLinecap="round">
        <path d="M18 4v6M24 4v6M30 4v6M18 38v6M24 38v6M30 38v6" />
        <path d="M4 18h6M4 24h6M4 30h6M38 18h6M38 24h6M38 30h6" />
      </g>
      <text x="24" y="27.5" textAnchor="middle" fontSize="9" fontFamily="'JetBrains Mono', monospace" fill="#5EEAD4">{"</>"}</text>
    </svg>
  );
}

export function MailIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <rect x="5" y="11" width="38" height="27" rx="3" fill="#E7ECE9" />
      <path d="M5 13.5 24 27l19-13.5" fill="none" stroke="#0A0F0D" strokeWidth="1.6" strokeLinejoin="round" />
      <path d="M5 13.5a3 3 0 0 1 3-2.5h32a3 3 0 0 1 3 2.5L24 27Z" fill="#38BDF8" />
    </svg>
  );
}

export function FileTextIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <path d="M12 4h16l9 9v29a2 2 0 0 1-2 2H12a2 2 0 0 1-2-2V6a2 2 0 0 1 2-2Z" fill="#E7ECE9" />
      <path d="M28 4v7a2 2 0 0 0 2 2h7Z" fill="#B9C4BE" />
      <rect x="15" y="21" width="18" height="2.4" rx="1.2" fill="#8FA398" />
      <rect x="15" y="27" width="18" height="2.4" rx="1.2" fill="#8FA398" />
      <rect x="15" y="33" width="11" height="2.4" rx="1.2" fill="#8FA398" />
    </svg>
  );
}

export function BirdIcon({ className }) {
  return (
    <svg viewBox="0 0 48 48" className={className}>
      <ellipse cx="23" cy="26" rx="14" ry="12" fill="#F5C451" />
      <path d="M13 24c-2 6 1.5 11 8 12 5.5.8 10-1.6 12-6-3 1.7-6.4 1.9-9.6.7-1 1.4-2.8 2.1-4.7 1.7 1.4-.9 2.2-2.1 2.4-3.6-3.4.7-6.5-.3-8.1-4.8Z" fill="#F0A868" />
      <circle cx="30" cy="21" r="2.1" fill="#0A0F0D" />
      <path d="M35 25.5 42 24l-7 4.2Z" fill="#F0A868" />
    </svg>
  );
}

export function PowerIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M12 3.5v7" />
      <path d="M7.5 6.2a7 7 0 1 0 9 0" />
    </svg>
  );
}

export function WifiIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M3 8.5c5-4.4 13-4.4 18 0" />
      <path d="M6 12c3.4-2.9 8.6-2.9 12 0" />
      <path d="M9 15.5c1.8-1.4 4.2-1.4 6 0" />
      <circle cx="12" cy="19" r="1" fill="currentColor" stroke="none" />
    </svg>
  );
}

export function VolumeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M4.5 9.5h3L12 6v12l-4.5-3.5h-3Z" />
      <path d="M16 9.2a4 4 0 0 1 0 5.6" />
    </svg>
  );
}

export function CloseIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 6l12 12M18 6 6 18" />
    </svg>
  );
}

export function MinimizeIcon({ className }) {
  return (
    <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.6" strokeLinecap="round" strokeLinejoin="round" className={className}>
      <path d="M6 18h12" />
    </svg>
  );
}

