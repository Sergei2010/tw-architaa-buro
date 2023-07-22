/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html"
  ],
  theme: {
    container: {
      center: true,
    },
    extend: {
      fontFamily: {
        "main": ["Open Sans"],
        "additional-1": ["Open Sans Condensed"],
        "additional-2": ["Playfair Display"],
      },
    },
    colors: {
      "dark": "#0E1B1B",
      "white": "#FFFFFF",
      "yellow": "#FFC94B",
      "grey": "#C4C4C4",
      "dark-grey": "#6B6B6B",
    }
  },
  plugins: [],
}

