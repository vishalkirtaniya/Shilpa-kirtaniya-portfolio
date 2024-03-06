/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

module.exports = {
  content: ["./**/*.{html,js}"],
  theme: {
    screens: {
      xxs: "350px",
      xs: "450px",
      ...defaultTheme.screens,
    },
    colors: {
      slate: "#FCFCFC",
      black: "#2B292C",
      grey: "#B6B6B6",
    },

    extend: {},
  },
  plugins: [],
};
