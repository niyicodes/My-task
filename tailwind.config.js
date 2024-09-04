/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xs: "240px",
      sm: "640px",
      md: "768px",
      lg: "1024px",
      xl: "1280px",
    },
    extend: {
      colors: {
        'cerulean-blue': {
          '50': '#f0f4fe',
          '100': '#dee6fb',
          '200': '#c4d5f9',
          '300': '#9cb9f4',
          '400': '#6d95ed',
          '500': '#4a71e7',
          '600': '#3754db',
          '700': '#2c40c9',
          '800': '#2a36a3',
          '900': '#273281',
          '950': '#1c214f',
        },

      }
    },
  },
  plugins: [],
}

