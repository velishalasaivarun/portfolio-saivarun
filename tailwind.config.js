/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        cream: '#FBF6EC',
        navy: '#2C5A8C',
        gold: '#C9A24B',
        ink: '#1B2430',
        slate: '#5B6472',
      },
      fontFamily: {
        sans: ['Inter', 'Roboto', 'Helvetica Neue', 'sans-serif'],
        mono: ['Fira Code', 'Menlo', 'Monaco', 'monospace'],
        display: ['Outfit', 'Montserrat', 'sans-serif'], 
      },
    },
  },
  plugins: [],
}
