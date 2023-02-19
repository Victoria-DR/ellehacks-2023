/** @type {import('tailwindcss').Config} */
// tailwind.config.js
const defaultTheme = require("tailwindcss/defaultTheme");
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      sans: ["Inter"],
      serif: ["Poly"],
    },
    container: {
      padding: {
        DEFAULT: "rem",
        sm: "2rem",
        lg: "4rem",
        xl: "5rem",
        "2xl": "6rem",
      },
    },
    extend: {
      fontFamily: {
        sans: ["Inter var", ...defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [
    require("@tailwindcss/forms")({
      strategy: "class",
    }),
  ],
};

// module.exports = {
//   content: ['./src/**/*.{html,js}', './node_modules/tw-elements/dist/js/**/*.js'],
//   plugins: [
//     require('tw-elements/dist/plugin')
//   ]
// }
