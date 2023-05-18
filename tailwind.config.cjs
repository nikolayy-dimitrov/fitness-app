/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        "gray-20": "#F7F3F7",
        "gray-50": "#F3E8F3",
        "gray-100": "#7D6E7D",
        "gray-500": "#3B0042",
        "primary-100": "#E4FDE1",
        "primary-300": "#D4F8CB",
        "primary-500": "#AEEFA3",
        "secondary-400": "#EFCBF8",
        "secondary-500": "#C885C8",
      },
      backgroundImage: (theme) => ({
        "gradient-yellowred": "linear-gradient(90deg, #D4F8CB 0%, #C885C8 100%)",
        "mobile-home": "url('./assets/HomePageGraphic.png')"
      }),
      fontFamily: {
        dmsans: ["DM Sans", "sans-serif"],
        montserrat: ["Montserrat", "sans-serif"]
      },
      content: {
        fusiontext: "url('./assets/FusionText.png')",
        abstractwaves: "url('./assets/AbstractWaves.png')",
        sparkles: "url('./assets/Sparkles.png')",
        circles: "url('./assets/Circles.png')",
      }
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px"
    }
  },
  plugins: [],
}