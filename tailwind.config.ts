import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nexa: {
          bg: "#000000",
          panel: "#0d0d0d",
          surface: "#1a1a1a",
          border: "#27272a",
          slate: "#767d88",
          muted: "#a7a7a7",
          purple: "#7c5cff",
          blue: "#4f8bff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      boxShadow: {
        glow: "none",
      },
    },
  },
  plugins: [],
};

export default config;
