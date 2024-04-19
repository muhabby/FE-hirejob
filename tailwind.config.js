/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    colors: {
      primary: '#5E50A1',
      yellow: '#FBB017',
      dark: '#1F2A36',
      'dark-grey': '#46505C',
      grey: '#9EA0A5',
      'light-grey': '#E2E5ED',
      'grey-white': '#F6F7F8',
      white: '#ffff'
    },
    fontFamily: {
      sans: ['Open Sans', 'sans-serif']
    },
    screens: {
      sm: '375px',
      md: '768px',
      lg: '1024px',
      // 'xl': '1280px',
      '2xl': '1536px'
      //min-width
    },
    extend: {}
  },
  plugins: []
};
