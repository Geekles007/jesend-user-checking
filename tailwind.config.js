/** @type {import('tailwindcss').Config} */
const { fontFamily } = require('tailwindcss/defaultTheme');
const colors = require('tailwindcss/colors');

module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ...colors,
        black: "#191C1E",
        hover: "#21262A",
        primary: "#8D9EFF",
        navbar: "rgba(0,0,0,.2)",
        "border-color": "rgba(1,1,1,.2)",
      },
      fontFamily: {
        sans: ['Inter', ...fontFamily.sans]
      },
      extend: {
        backgroundImage: {
          'banner-image': "url('src/assets/images/banner.png')"
        }
      },
    },
  },
  plugins: [],
}
