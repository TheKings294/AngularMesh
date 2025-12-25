/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        mesh: '#4fcdbf',
        'mesh-dark': '#3fb1a4',
      },
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}
