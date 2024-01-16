/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  theme: {
    extend: {
      fontFamily: {
        onest: ['Onest', 'sans-serif'],
        stolzl: ['Stolzl', 'sans-serif'],
        ttNorms: ['TT Norms', 'sans-serif']
      },
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bgSectionSecondary: '#06091B',
        bgSectionPrimary: '#1C2138',
        primary1: '#B5A9FF',
        primary2: '#6E81FE',
        primary1Hover: '#8B7ED7',
        primary2Hover: '#5465D7',
        blackGray: '#7F84A5',
        blackStroke: '#1C2138'
      }
    }
  },
  plugins: []
}
