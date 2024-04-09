/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "dark-2": "#403F3F",
        "dark-3": "#706F6F",
        "dark-4": "#9F9F9F",
        "dark-6": "#E7E7E7",
        "dark-7": "#F3F3F3",
        "dark-pink": "#D72050",
      },
      fontFamily: {
        poppins: "'Poppins', sans-serif",
      },
    },
  },
  plugins: [require("daisyui")],
};
