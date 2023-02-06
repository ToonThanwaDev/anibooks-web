/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
    "./node_modules/tw-elements/dist/js/**/*.js",
    "node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}"
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
  plugins: [require("tw-elements/dist/plugin"), require("flowbite/plugin")]
};
