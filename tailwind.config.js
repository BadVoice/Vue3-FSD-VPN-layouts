/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{vue, js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        transparent: 'transparent',
        current: 'currentColor',
        bgSectionSecondary: '#06091B',
        primary1: '#B5A9FF',
        primary2: '#6E81FE',
        primary1Hover: '#8B7ED7',
        primary2Hover: '#5465D7'
      }
    }
  },
  plugins: []
}
