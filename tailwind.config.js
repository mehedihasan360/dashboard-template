/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  darkMode: "class",
  theme: {
    extend: {
      fontFamily: {},
      colors: {
        primary_color: "#464F65",
        secondary_color: "#",
      },
      backgroundColor: {
        primary_color: "#464F65",
        secondary_color: "#",
      },
    },
  },
  plugins: [],
};
