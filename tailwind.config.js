/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        background: '#080808',
        surface: {
          DEFAULT: '#111111',
          hover: '#171717',
          elevated: '#1a1a1a',
          card: '#121212',
          border: '#222222',
        },
        crimson: {
          DEFAULT: '#E50914',
          hover: '#ff1f2a',
          dark: '#8B0000',
          muted: '#380B0F',
          glow: 'rgba(229, 9, 20, 0.4)',
        },
        brand: {
          gray: '#A3A3A3',
          light: '#F5F5F5',
          border: '#242424',
        }
      },
      fontFamily: {
        display: ['"Bebas Neue"', 'Impact', 'sans-serif'],
        sans: ['"Plus Jakarta Sans"', 'Inter', 'sans-serif'],
        mono: ['"JetBrains Mono"', 'monospace'],
        script: ['"Caveat"', 'cursive'],
      },
      boxShadow: {
        'crimson-glow': '0 0 30px -5px rgba(229, 9, 20, 0.35)',
        'crimson-glow-lg': '0 0 60px -10px rgba(229, 9, 20, 0.5)',
        'inner-glow': 'inset 0 1px 0 0 rgba(255, 255, 255, 0.07)',
      },
      letterSpacing: {
        'super-wide': '0.25em',
        'poster': '0.04em',
      }
    },
  },
  plugins: [],
}
