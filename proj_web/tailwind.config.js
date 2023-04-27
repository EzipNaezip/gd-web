/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}', 'node_modules/flowbite-react/**/*.{js,jsx,ts,tsx}'],
  theme: {
    fontFamily: {
      suiteLight: ['"suiteLight"', 'sans-serif'],
      suiteMedium: ['"suiteMedium"', 'sans-serif'],
      suiteBold: ['"suiteBold"', 'sans-serif'],
    },
    container: {
      center: true,
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        white_hover: '#CCCCCC',
        kakao: '#FEE500',
        kakao_hover: '#CBB700',
        beige: '#FAEBD7',
        nav_green: '#C3943C',
        nav_green_hover: '#A4B95F',
        nav_blue: '#014DA1',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
