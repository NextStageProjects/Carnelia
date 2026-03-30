/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        brand: {
          green: '#05402d',
          red: '#69151f',
        }
      },
      fontFamily: {
        sans: ['Montserrat', 'sans-serif'],
      }
    },
  },
  plugins: [],
}