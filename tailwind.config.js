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
    minHeight: {
      '1/2': '50%',
    },
    extend: {
      colors: {
        white: '#FFFFFF',
        white_hover: '#CCCCCC',
        kakao: '#FEE500',
        kakao_hover: '#CBB700',
        'gd-blue': '#0095f6',
        'gd-blue_hover': '#0080d3',
        'ezip-green': '#64BC52',
        'ezip-green_hover': '#45A13B',
        'ezip-bg': '#F5FBF4',
      },
      blur: {
        xs: '2px',
      },
      keyframes: {
        'fade-in-down': {
          '0%': {
            opacity: '0',
            transform: 'translateY(-10px)',
          },
          '100%': {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      animation: {
        'fade-in-down': 'fade-in-down 0.5s ease-out',
      },
    },
  },
  plugins: [require('flowbite/plugin')],
};
