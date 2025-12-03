/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{html,js,jsx,ts,tsx}",
    "./index.html",
  ],
  theme: {
    screens: {
      'xs': '475px',
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
    },
    extend: {
      colors: {
        redMain: "#CD1010",
        orangeMain: "#FF7043",
        whiteMain: "#FAFAFA",
        greenMain: "#288E3E",
        blackMain: "#212121",
      },
      cursor: {
        'fancy': 'url(hand.cur), pointer',
        'grab': 'grab',
        'grabbing': 'grabbing',
      },
      spacing: {
        '128': '32rem',
        '144': '36rem',
      },
      borderRadius: {
        '4xl': '2rem',
      },
      animation: {
        'spin-slow': 'spin 3s linear infinite',
        'bounce-slow': 'bounce 3s infinite',
        'pulse-fast': 'pulse 1s cubic-bezier(0.4, 0, 0.6, 1) infinite',
      },
      boxShadow: {
        'inner-lg': 'inset 0 2px 4px 0 rgb(0 0 0 / 0.1)',
        '3xl': '0 35px 60px -15px rgba(0, 0, 0, 0.3)',
      },
      fontFamily: {
        'sans': ['Inter', 'sans-serif'],
        'display': ['Inter', 'Helvetica', 'Arial', 'sans-serif'],
        'body': ['Inter', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
