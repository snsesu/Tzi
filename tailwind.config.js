/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        nexa: {
          bg: "#050508",
          panel: "#0b0b12",
          border: "#1c1c2a",
          purple: "#7c5cff",
          blue: "#4f8bff",
        },
      },
      fontFamily: {
        sans: ["var(--font-sans)", "system-ui", "sans-serif"],
      },
      backgroundImage: {
        "nexa-gradient": "linear-gradient(90deg, #9b6bff 0%, #5b8bff 100%)",
      },
      boxShadow: {
        glow: "0 0 40px rgba(124, 92, 255, 0.35)",
      },
    },
  },
  plugins: [],
};
