/** @type {import('tailwindcss').Config} */
export default {
  content: [ "./src/**/*.{html,css,js}",
    './app/**/*.{html,css,js}',
    './src/**/*.{html,css,js}'
  ],
  theme: {
    screens: {
      // 'tablet': '640px',
      // 'laptop': '1024px',
      // 'desktop': '1280px',
      // 'ultrawide': '1536px',

      'sm': '640px',
      // => @media (min-width: 640px) { ... }

      'md': '768px',
      // => @media (min-width: 768px) { ... }

      'lg': '1024px',
      // => @media (min-width: 1024px) { ... }

      'xl': '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }
    },
    extend: {},
  },
  plugins: [],
}

