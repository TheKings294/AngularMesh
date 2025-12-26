/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        mesh: {
          DEFAULT: '#4fcdbf',
          50:  '#e8faf7',
          100: '#c5f0ea',
          200: '#9ae6db',
          300: '#6fdbc9',
          400: '#57d2c0',
          500: '#4fcdbf',
          600: '#45b7ab',
          700: '#3b9f95',
          800: '#2f7f77',
          900: '#235f59',
        },
        'mesh-dark': {
          DEFAULT: '#3fb1a4',
          50:  '#e3f6f3',
          100: '#bde8e2',
          200: '#94d9d1',
          300: '#6ac9bf',
          400: '#4fbcb0',
          500: '#3fb1a4',
          600: '#379c91',
          700: '#2f857c',
          800: '#256a63',
          900: '#1b4f4a',
        },
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
