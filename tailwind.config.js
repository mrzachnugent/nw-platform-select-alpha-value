const { platformSelect } = require('nativewind/theme');

/** @type {import('tailwindcss').Config} */
module.exports = {
  darkMode: 'class',
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  presets: [require('nativewind/preset')],
  theme: {
    extend: {
      colors: {
        background: platformSelect({
          ios: 'rgb(var(--background) / <alpha-value>)',
          android: 'rgb(var(--android-background) / <alpha-value>)',
        }),
      },
    },
  },
  plugins: [],
};
