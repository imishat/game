/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      maxWidth: {
        'container': '1320px',
      },
      backgroundImage: {
        'hero': "url('./src/assets/images/images/background.png')",
        'car': "url('./src/assets/images/images/car.jpg')",
      }
    },
  },
  plugins: [require("daisyui")],
}