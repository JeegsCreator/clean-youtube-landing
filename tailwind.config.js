/** @type {import('tailwindcss').Config} */
const defaultTheme = require("tailwindcss/defaultTheme");

export default {
  content: ["./src/**/*.{astro,html,js,jsx,md,mdx,svelte,ts,tsx,vue}"],
  theme: {
    extend: {
      colors: {
        bg: "#020202",
        "bg-muted": "#080808",
        "yt-red": "#FF0000",
        decoration: {
          border: "#3A3A3A",
          bg: "rgba(255, 255, 255, 0.03)",
        },
        muted: "#828282",
      },
      fontFamily: {
        sans: ["Inter", "Arial", defaultTheme.fontFamily.sans],
      },
    },
  },
  plugins: [],
};
