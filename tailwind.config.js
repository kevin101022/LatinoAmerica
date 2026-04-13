/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        terracota: '#C4501E',
        selva: '#2D6A4F',
        maiz: '#F5A623',
        pasion: '#8B1A1A',
        andino: '#1B6CA8',
        crema: '#F5E6D3',
        noche: '#1A1A2E',
      },
      fontFamily: {
        playfair: ['"Playfair Display"', 'serif'],
        lora: ['Lora', 'serif'],
        cinzel: ['Cinzel', 'serif'],
      }
    },
  },
  plugins: [],
}
