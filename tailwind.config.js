/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  darkMode: 'class',
  theme: {
    extend: {
      animation: {
        'float-1': 'float-1 6s ease-in-out infinite',
        'float-2': 'float-2 8s ease-in-out infinite',
        'float-3': 'float-3 7s ease-in-out infinite',
        'spin-slow': 'spin-slow 20s linear infinite',
        'bounce-slow': 'bounce-slow 3s ease-in-out infinite',
        'fade-in-up': 'fade-in-up 1s ease-out',
      },
      keyframes: {
        'float-1': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-20px) rotate(180deg)' },
        },
        'float-2': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-30px) rotate(-180deg)' },
        },
        'float-3': {
          '0%, 100%': { transform: 'translateY(0px) rotate(0deg)' },
          '50%': { transform: 'translateY(-25px) rotate(90deg)' },
        },
        'spin-slow': {
          from: { transform: 'rotate(0deg)' },
          to: { transform: 'rotate(360deg)' },
        },
        'bounce-slow': {
          '0%, 100%': { transform: 'translateY(0px)' },
          '50%': { transform: 'translateY(-10px)' },
        },
        'fade-in-up': {
          from: {
            opacity: '0',
            transform: 'translateY(30px)',
          },
          to: {
            opacity: '1',
            transform: 'translateY(0)',
          },
        },
      },
      screens: {
        'xs': '475px',
      },
    },
  },
  plugins: [],
};