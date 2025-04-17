/** @type {import('tailwindcss').Config} */
module.exports = {
    content: [
      "./src/**/*.{js,jsx,ts,tsx}",
      "./public/index.html"
    ],
    theme: {
      extend: {
        colors: {
          'sustainable-green': {
            50: '#f0fdf4',
            100: '#dcfce7',
            500: '#22c55e',
            600: '#16a34a',
            700: '#15803d'
          },
          'community-blue': {
            500: '#3b82f6',
            600: '#2563eb'
          }
        },
        fontFamily: {
          'sans': ['Inter', 'system-ui', 'sans-serif']
        },
        boxShadow: {
          'sustainable': '0 4px 6px -1px rgba(0, 0, 0, 0.1), 0 2px 4px -1px rgba(34, 197, 94, 0.06)'
        }
      },
    },
    plugins: [],
  }