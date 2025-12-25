/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}"
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
