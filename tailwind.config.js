/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js,jsx}"],
  theme: {
    extend: {
      fontFamily: {
        inter: ["Inter"],
        circular: ["Circular Std"],
      },
      colors: {
        primary: {
          100: "#E3E1F7",
          200: "#C5C0EB",
          300: "#A6A0DE",
          400: "#8880D2",
          500: "#5D50C6",
          600: "#5147B3",
          700: "#423B97",
          800: "#34307B",
          900: "#27245F",
        },
        secondary: {
          100: "#FFE5F0",
          200: "#FEC6DB",
          300: "#FEA6C6",
          400: "#FD87B0",
          500: "#F85E9F",
          600: "#DD4E8D",
          700: "#BF3E78",
          800: "#A02F64",
          900: "#822051",
        },
        white: "#FFFFFF",
        black: "#191825",
        orange: "#FF5722",
        gray: "#EEEEEE",
      },
      backgroundImage: {
        "testimonial-background": "url('./public/assets/logo/Vector.svg')",
      },
    },
  },
  plugins: [],
};
