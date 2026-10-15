/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#086287",
        "primary-hover": "#064863",
        accent: "#4d8db9",
        "accent-light": "#97d6ff",
        gold: "#feefc4",
        surface: "#f4f8fb",
        "surface-soft": "#e6f1f7",
      },
      fontFamily: {
        serif: ["'Cormorant Garamond'", "Georgia", "serif"],
        sans: ["'Plus Jakarta Sans'", "system-ui", "sans-serif"],
      },
      gridTemplateColumns: {
        auto: "repeat(auto-fill, minmax(220px, 1fr))",
      },
      boxShadow: {
        luxury: "0 12px 32px -10px rgba(8, 98, 135, 0.10)",
        "luxury-lg": "0 20px 44px -12px rgba(8, 98, 135, 0.18)",
      },
    },
  },
  plugins: [],
};
