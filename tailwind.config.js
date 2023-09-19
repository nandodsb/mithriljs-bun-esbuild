/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{html,css,js}",
    './app/**/*.{html,css,js}',
    './src/**/*.{html,css,js}'
  ],
  theme: {
    screens: {
      'mobile': '400px',
      'tablet': '640px',
      'laptop': '1024px',
      'desktop': '1280px',
      'ultrawide': '1536px',
    },
    extend: {},
  },
  plugins: [],
}

