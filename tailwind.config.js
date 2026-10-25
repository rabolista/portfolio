/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        // RAB-OS — Linux/terminal inspired palette
        rab: {
          bg: "#0A0F0D",       // near-black terminal desktop background
          bg2: "#111813",      // window / panel background
          line: "#24322A",     // grid / hairline
          line2: "#37493D",    // brighter hairline
          green: "#4ADE80",    // primary terminal accent (signature)
          sky: "#38BDF8",      // secondary/info accent
          amber: "#F5A524",    // warm CTA / warning accent
          red: "#F87171",      // close / alert
          paper: "#E7ECE9",    // primary text
          muted: "#8FA398",    // secondary text
          faint: "#4B5C52",    // tertiary / disabled
        },
        // Classic scrolling portfolio site (restored at /portfolio) — original palette
        blueprint: {
          bg: "#0B1D2E",
          bg2: "#0F2942",
          line: "#1E4A6F",
          line2: "#2C5C82",
          cyan: "#5EEAD4",
          sky: "#38BDF8",
          amber: "#F0A868",
          key: "#FB7185",
          paper: "#EDF2F7",
          muted: "#8CA3B8",
          faint: "#4C6B85",
        },
      },
      fontFamily: {
        mono: ["JetBrains Mono", "ui-monospace", "monospace"],
        sans: ["Inter", "ui-sans-serif", "system-ui", "sans-serif"],
        handwriting: ["Caveat", "cursive"],
      },
      backgroundImage: {
        "rab-grid":
          "linear-gradient(rgba(74,222,128,0.06) 1px, transparent 1px), linear-gradient(90deg, rgba(74,222,128,0.06) 1px, transparent 1px)",
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
        windowIn: {
          "0%": { opacity: 0, transform: "scale(0.94) translateY(8px)" },
          "100%": { opacity: 1, transform: "scale(1) translateY(0)" },
        },
        menuIn: {
          "0%": { opacity: 0, transform: "translateY(6px)" },
          "100%": { opacity: 1, transform: "translateY(0)" },
        },
        maskFade: {
          "0%": { opacity: 0, transform: "scale(0.92)" },
          "30%": { opacity: 1, transform: "scale(1)" },
          "70%": { opacity: 1, transform: "scale(1)" },
          "100%": { opacity: 0, transform: "scale(1.04)" },
        },
      },
      animation: {
        dash: "dash 1.2s linear infinite",
        blink: "blink 1.6s ease-in-out infinite",
        windowIn: "windowIn 0.15s ease-out",
        menuIn: "menuIn 0.12s ease-out",
        maskFade: "maskFade 1.8s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
