/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        blueprint: {
          bg: "#0B1D2E",       // deep blueprint navy
          bg2: "#0F2942",      // panel navy
          line: "#1E4A6F",     // grid / hairline
          line2: "#2C5C82",    // brighter hairline
          cyan: "#5EEAD4",     // active flow / signature accent
          sky: "#38BDF8",      // secondary accent
          amber: "#F0A868",    // warm CTA accent
          paper: "#EDF2F7",    // primary text
          muted: "#8CA3B8",    // secondary text
          faint: "#4C6B85",    // tertiary / disabled
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "blueprint-grid":
          "linear-gradient(rgba(94,234,212,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(94,234,212,0.06) 1px, transparent 1px)",
      },
      backgroundSize: {
        grid: "32px 32px",
      },
      keyframes: {
        dash: {
          to: { strokeDashoffset: "-24" },
        },
        blink: {
          "0%, 100%": { opacity: 1 },
          "50%": { opacity: 0.2 },
        },
      },
      animation: {
        dash: "dash 1.2s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
      },
    },
  },
  plugins: [],
};
