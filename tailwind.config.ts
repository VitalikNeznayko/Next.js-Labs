/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./app/**/*.{ts,tsx}", "./(main)/**/*.{ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: "#4f46e5",
        secondary: "#fbbf24",
        accent: "#10b981",
      },
      screens: {
        xs: "480px",
        sm: "640px",
        md: "768px",
        lg: "1024px",
        xl: "1280px",
      },
    },
  },
  plugins: [],
};
