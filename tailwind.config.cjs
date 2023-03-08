/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{vue,js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        suikiri: {
          50: "#f0f3ff",
          100: "#e4e9ff",
          200: "#cdd6ff",
          300: "#a6b4ff",
          400: "#7382ff",
          500: "#3b44ff",
          600: "#1614ff",
          700: "#0000ff",
          800: "#0101d6",
          900: "#0303af",
        },
        "orange-peel": {
          50: "#fffbea",
          100: "#fff2c5",
          200: "#ffe685",
          300: "#ffd246",
          400: "#ffbd1b",
          500: "#ff9900",
          600: "#e27200",
          700: "#bb4d02",
          800: "#983b08",
          900: "#7c310b",
        },
      },
    },
  },
  plugins: [
    require("@tailwindcss/typography"),
    require("@tailwindcss/forms"),
    require("@tailwindcss/aspect-ratio"),
    require("daisyui"),
    require("prettier-plugin-tailwindcss"),
  ],
};
