/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx}',
    './components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
  ],
  theme: {
    extend: {
      keyframes: {
        'animate_height': {
          'from': {
            "height": "0rem"
          },
          'to': {
            "height": "2rem"
          }
        },
        'animate_opacity': {
          '0%': {
            "opacity": "0"
          },
          '75%': {
            "opacity": "0"
          },
          '100%': {
            "opacity": "1"
          }
        },
        'animate_width': {
          '0%': {
            "width": "0%"
          },
          '75%': {
            "width": "0%"
          },
          '100%': {
            "width": "100%"
          }
        },
        'animate_translate': {
          '0%': {
            "transform": "scale(0)",
            "opacity": "0"
          },
          '100%': {
            "transform": "scale(1)",
            "opacity": "1"
          }
        },
      },
    },
    animation: {
      "height-grow": "animate_height 1s ease-out",
      "opacity": "animate_opacity 1s ease-out",
      "translate": "animate_translate 1s ease-out ",
      "width": "animate_width 3s ease-out ",
    }
  },
  plugins: [],
}
