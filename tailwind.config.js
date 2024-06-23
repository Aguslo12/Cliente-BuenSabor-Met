/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  daisyui: {
    themes: ["light"],
  },
  theme: {
    extend: {
      fontFamily: {
        josefinSerif : ['Josefin Sans', 'sans-serif'],
        promptFont: ['Prompt', 'sans-serif']
      },
      colors: {
        colorPpal: '#d9754a',
        hoverPpal: '#B05F3C',
        colorSec: '#2f302b',
        backColor: '#e4e3d3'
      },
      backgroundImage: theme => ({
        'fondo': "url('/fondo.png')", // Agrega tu imagen de fondo aquí
        'fondoConocenos': "url('/fondoConocenos.png')",
      })
    },
  },
  plugins: [require('daisyui')],
};