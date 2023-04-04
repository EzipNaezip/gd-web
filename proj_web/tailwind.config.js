module.exports = {
  mode: 'jit', // Just-In-Time 컴파일 모드 설정
  purge: ['./src/**/*.{js,jsx,ts,tsx}', './public/index.html'], // 불필요한 CSS 코드 제거를 위한 설정
  darkMode: false, // 라이트 모드 설정
  theme: {
    fontFamily: {
      suiteMedium: ['"suiteMedium"', 'sans-serif'],
      suiteBold: ['"suiteBold"', 'sans-serif'],
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
