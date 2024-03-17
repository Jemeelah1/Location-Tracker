/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {},
    colors: {
      transparent: 'transparent',
      current: 'currentColor',
      'primary': '#1F1C26',
      'orange': '#CE5A29',
      'white': '#ffffff',
      'grey': '#C2C2C2',
      'grey2': '#2E2938',
      'purple': '#5E1AE5',
      'yellow': '#F5DEAD',
    },
    screens: {
      xs: "480px",
      ss: "620px",
      sm: "768px",
      md: "1060px",
      lg: "1200px",
      xl: "1700px",
    },
  },
  plugins: [],
}