/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#086288",
        "primary-hover": "#064b69",
        accent: "#4D8DBA",
        "accent-light": "#97D7FF",
        gold: "#FFEFC4",
        "gold-deep": "#E6CA85",
        surface: "#F4F8FB",
        "surface-soft": "#E6F1F7",
        "border-soft": "#D1E4F0",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(220px, 1fr))",
      },
      boxShadow: {
        luxury: "0 12px 32px -10px rgba(8, 98, 136, 0.10)",
        "luxury-lg": "0 20px 44px -12px rgba(8, 98, 136, 0.18)",
        "gold-glow": "0 0 25px rgba(255, 239, 196, 0.45)",
      },
    },
  },
  plugins: [],
};
