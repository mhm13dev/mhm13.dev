import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        inter: ["var(--font-inter)"],
      },
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
      colors: {
        "ie-blue": { DEFAULT: "#286FFF", light: "rgba(40, 111, 255, 0.1)" },
      },
    },
  },
  plugins: [],
};
export default config;
