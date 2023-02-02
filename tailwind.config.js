/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js}",
    "./node_modules/tw-elements/dist/js/**/*.js"
  ],
  theme: {
    extend: {
      fontFamily: {
        BlackOpsOne: ["Black Ops One", "cursive"],
        Brawler: ["Brawler", "serif"],
        GentiumPlus: ["Gentium Plus", "serif"],
        Inter: ["Inter", "sans-serif"]
      }
    }
  },
  plugins: [require("tw-elements/dist/plugin")]
};
