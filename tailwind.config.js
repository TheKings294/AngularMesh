/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,ts}",
    "./node_modules/flowbite/**/*.js"
  ],
  theme: {
    extend: {
      colors: {
        danger: '#dc2626',   // red-600
        success: '#16a34a',  // green-600
        warning: '#f59e0b',  // amber-500
        info: '#0284c7',     // sky-600
      }
    },
  },
  plugins: [
    require('flowbite/plugin')
  ],
}

