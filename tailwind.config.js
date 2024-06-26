/** @type {import('tailwindcss').Config} */
export default {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      boxShadow: {
        'inner-top': 'inset 0 60px 50px rgba(0, 0, 0, .9)',
      },
    },
    container: {
      center: true,
      padding: {
        DEFAULT: '1rem',
        md: '2rem',
      },
    },
  },
  plugins: [],
}
