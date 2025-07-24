/** @type {import('tailwindcss').Config} */
export default {
   content: [
    "./src/**/*.{js,jsx,ts,tsx}",
  ],
  theme: {
    extend: {
      
       colors: {
        'chocolate-orange': {
          DEFAULT: '#D2691E',      // base color
          600: '#B05028',          // darker variant
          400: '#E07B3E',          // lighter variant
        },
      },
    },
  },
  plugins: [],
}

