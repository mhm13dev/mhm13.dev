/** @type {import('tailwindcss').Config} */

module.exports = {
  content: [
    "./app/**/*.{js,ts,jsx,tsx}",
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      keyframes: {
        "bg-position": {
          "0%": {
            "background-position": "0 0",
          },
          "100%": {
            "background-position": "100% 0",
          },
        },
      },
      animation: {
        "bg-position": "bg-position 2s infinite linear alternate",
      },
      fontFamily: {
        inter: [
          "Inter",
          "-apple-system",
          "BlinkMacSystemFont",
          "Segoe UI",
          "Roboto",
          "Oxygen",
          "Ubuntu",
          "Cantarell",
          "Fira Sans",
          "Droid Sans",
          "Helvetica Neue",
          "sans-serif",
        ],
      },
      colors: {
        "ie-blue": { DEFAULT: "#286FFF", light: "rgba(40, 111, 255, 0.1)" },
      },
    },
  },
  plugins: [],
};
