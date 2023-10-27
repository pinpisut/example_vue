/** @type {import('tailwindcss').Config} */

module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: [],
  important: true,
  theme: {
    extend: {
      colors: {
        primary: {
          main: '#1976D2',
          'contrast-text': '#FFFFFF',
          dark: '#000000',
        },
        secondary: {
          main: '#07223F',
          'contrast-text': '#FFFFFF',
        },
        error: {
          main: '#D32F2F',
          dark: '#C62828',
        },
        danger: {
          main: '#FF2222',
          'contrast-text': '#FFFFFF',
        },
        bg: {
          highlight: '#1976D214',
          white: '#FFFFFF',
          red: '#FF2222',
        },
      },
    }
  },
  plugins: [],
}

