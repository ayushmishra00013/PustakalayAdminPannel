/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          50: '#fdf4f1',
          100: '#fae8e1',
          200: '#f4d3c7',
          300: '#ecb5a1',
          400: '#e08d73',
          500: '#d97748',
          600: '#c85f37',
          700: '#a64d2d',
          800: '#864129',
          900: '#6d3825',
        },
        secondary: {
          50: '#f0f9f3',
          100: '#dcf2e3',
          200: '#bce5cb',
          300: '#8dd1a8',
          400: '#57b57d',
          500: '#35955b',
          600: '#287746',
          700: '#215f3a',
          800: '#1d4d30',
          900: '#194028',
        },
        accent: {
          50: '#fef7ee',
          100: '#fdedd6',
          200: '#fad7ac',
          300: '#f7ba77',
          400: '#f29340',
          500: '#ef751a',
          600: '#e05910',
          700: '#b9420f',
          800: '#943514',
          900: '#782e14',
        }
      }
    },
  },
  plugins: [],
}
