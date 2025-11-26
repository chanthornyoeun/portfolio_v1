module.exports = {
  // Use class-based dark mode so `dark:` variants work when a `dark` class
  // is toggled on the root element by the ThemeProvider.
  darkMode: 'class',
  content: ['./index.html', './src/**/*.{ts,tsx,js,jsx}'],
  theme: {
    extend: {},
  },
  plugins: [],
};
