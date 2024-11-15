
/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        customBlue: "#00396e",
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
      minHeight: {
        "screen-navbar": "calc(100vh - 160px)", // Cambia "4rem" por la altura de tu navbar
      },
    },
  },
  plugins: [],
};
