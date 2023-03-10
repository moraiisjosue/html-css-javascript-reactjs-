/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html",
    "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "jardim-hotel": "url('./src/assets/img/hero-image-1.png')",
        
      },
    },
  },
  plugins: [],
}
