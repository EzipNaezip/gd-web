module.exports = {
  mode: 'jit', // Just-In-Time 컴파일 모드 설정
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // 불필요한 CSS 코드 제거를 위한 설정
  darkMode: false, // 라이트 모드 설정
  theme: {
    fontFamily: {
      suiteLight: ['"suiteLight"', 'sans-serif'],
      suiteMedium: ['"suiteMedium"', 'sans-serif'],
      suiteBold: ['"suiteBold"', 'sans-serif'],
    },
    colors: {
      white: '#FFFFFF',
      white_hover: '#CCCCCC',
      kakao: '#FEE500',
      kakao_hover: '#CBB700',
    },
    container: {
      center: true,
    },
    extend: {},
  },
  variants: {
    extend: {},
  },
  plugins: [],
};
