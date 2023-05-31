const defaultTheme = require("tailwindcss/defaultTheme");

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      fontFamily: {
        sans: ["Poppins", ...defaultTheme.fontFamily.sans],
      },
      colors: {
        green: {
          50: "#F3FCF5",
          100: "#E4F5E9",
          200: "#DAF0E1",
          300: "#CAE5D4",
          400: "#B6DEC5",
          500: "#59BA8B",
          600: "#30A66D",
          700: "#278F5E",
          800: "#16794C",
          900: "#173B2C",
        },
        gray: {
          50: "#F8F8F8",
          100: "#F3F3F3",
          200: "#EDEDED",
          300: "#E2E2E2",
          400: "#C7C7C7",
          500: "#999999",
          600: "#7C7C7C",
          700: "#525252",
          800: "#383838",
          900: "#171717",
        },
      },
    },
  },
  plugins: [],
};
