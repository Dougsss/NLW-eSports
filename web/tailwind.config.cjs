/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.tsx',
    './index.html',
  ],
  theme: {
    fontFamily: {
      sans: ['Inter', 'sans-serif']
    },
    extend: {
      backgroundImage: {
        fundo: "url('/Fundo.png')",
        gamegradient: 'linear-gradient(180deg, rgba(0, 0, 0, 0) 0%, rgba(0, 0, 0, 0.9) 67.08%)',
        nlwgradient: 'linear-gradient(55.86deg, #9572FC 22.08%, #43E7AD 68.94%, #E1D55D 22.57%)'
      },
    },
  },
  plugins: [],
}
