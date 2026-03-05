/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{html,js, jsx}",
    "./node_modules/tw-elements/js/**/*.js",
  ],
  theme: {
    extend: {
      fontFamily: {
        heading: ['"Delius Unicase"', 'cursive'], 
        body: ['ui-sans-serif', 'system-ui'],     
        pinyon: ['"Pinyon Script"', 'cursive'],  
        explora: ['"Explora Regular"', 'serif'], 
      },
    },
  },
  plugins: [require("tw-elements/plugin.cjs")],
  darkMode: "class"
};