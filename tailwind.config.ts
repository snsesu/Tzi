import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        carbon: "#fcfcfc",
        obsidian: "#0a0a13",
        pitch: "#000000",
        void: "#040407",
        graphite: "#08080c",
        smoke: "#757580",
        ash: "#a3a3b3",
        charcoal: "#2a2a32",
        iris: "#6199f6",
        twilight: "#4f4f80",
        lilac: "#dedfee",
        // legacy alias so existing classNames referencing nexa.* keep working
        nexa: {
          bg: "#0a0a13",
          panel: "#08080c",
          surface: "#181826",
          border: "#4f4f80",
          slate: "#757580",
          muted: "#a3a3b3",
          purple: "#6199f6",
          blue: "#6199f6",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "Inter", "system-ui", "sans-serif"],
      },
      borderRadius: {
        pill: "100px",
        card: "10px",
        feature: "24px",
      },
      boxShadow: {
        glow: "none",
        halo: "inset 0 0 0 1px #4f4f80, 0 0 60px rgba(79,79,128,0.15)",
        showcase: "0 24px 48px rgba(0,0,0,0.5)",
      },
      backgroundImage: {
        cosmic:
          "linear-gradient(195deg, #0a0010 0%, #02000a 50%, #0c1d32 100%)",
      },
    },
  },
  plugins: [],
};

export default config;
