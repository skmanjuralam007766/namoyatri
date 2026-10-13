/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        primary: {
          DEFAULT: '#0B3D6E',
          50: '#E8F0F7',
          100: '#C5D9E9',
          200: '#9BC0DB',
          300: '#6FA6CC',
          400: '#4589B8',
          500: '#0B3D6E',
          600: '#09355E',
          700: '#082B4C',
          800: '#061A2D',
          900: '#04101C',
        },
        secondary: {
          DEFAULT: '#082B4C',
        },
        accent: {
          DEFAULT: '#F28C28',
          light: '#F5A85A',
          dark: '#D97A1C',
        },
        gold: {
          DEFAULT: '#D9A441',
          light: '#E5BC6E',
          dark: '#C08A2E',
        },
        cream: {
          DEFAULT: '#F8F7F3',
          mist: '#EEF3F5',
        },
        navy: {
          DEFAULT: '#061A2D',
        },
      },
      fontFamily: {
        body: ['Poppins', 'system-ui', 'sans-serif'],
        heading: ['Montserrat', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'serif'],
      },
      maxWidth: {
        '8xl': '88rem',
      },
    },
  },
  plugins: [],
};
