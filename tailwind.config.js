/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        ted: {
          red: '#E62B1E',
          'red-hover': '#FF3B30',
          dark: '#080808',
          card: '#121212',
          surface: '#181818',
          border: 'rgba(255, 255, 255, 0.08)',
          muted: '#8E8E93',
        },
      },
      fontFamily: {
        display: ['Archivo', 'system-ui', 'sans-serif'],
        body: ['"Space Grotesk"', 'system-ui', 'sans-serif'],
        mono: ['"Space Mono"', 'monospace'],
        cursive: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'glow-red': '0 0 40px -10px rgba(230, 43, 30, 0.3)',
        'glow-subtle': '0 10px 30px -10px rgba(0, 0, 0, 0.5)',
        'card': '0 10px 30px -5px rgba(0, 0, 0, 0.3)',
      },
    },
  },
  plugins: [],
}
