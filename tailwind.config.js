/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "pink-primary": "#FB2E86",
        "red-primary": "#FB2448",
        "blue-primary": "#2F1AC4",
        "off-navy-blue": "#3F509E",
        "navy-blue": "#151875",
        "pantone-purple": "#E0D3F5",
        "purple-primary": "#7E33E0",
        "off-purple": "#9F63B5",
        "off-blue": "#151875",
        shade: "#EEEFFB",
      },
      fontFamily: {
        josefin: ["Josefin Sans", "sans-serif"],
        lato: ["Lato", "sans-serif"],
      },
      container: {
        center: true,
        padding: {
          DEFAULT: "1rem",
          lg: "2rem",
          "2xl": "6rem",
        },
      },
      backgroundImage: {
        newslater: "url(/images/newslater.jpg)",
      },
    },
  },
  plugins: [],
};
