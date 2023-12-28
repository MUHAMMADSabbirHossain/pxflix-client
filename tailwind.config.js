/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  /* theme: {
    extend: {},
  }, */

  daisyui: {
    themes: ["dark", "light",],
  },

  plugins: [require("daisyui")],
}

