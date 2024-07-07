/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily:{
      'Quicksand':['Quicksand','sans-serif']
    },
    fontWeight:{
      '700':'900',
      '300':'300',
      '600':'600',
      '400':'400',
      '500':'500'

    },
    extend: {
      textColor:{
        skin:{
          base:'var(--color-red-base)'
        }
      }
      
    },
    backgroundColor:{
      skin:{
        fill:'var(--color-red-base)',
        black:'var(--color-black-base)'
      }
    }
  },
  plugins: [],
}