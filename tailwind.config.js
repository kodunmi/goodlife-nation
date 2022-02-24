module.exports = {
  darkMode: 'class',
  important: true,
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
    "./layouts/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        primary: '#1a4496',
        secondary: '#082257'
      },
    },
  },
  plugins: [
    require('@tailwindcss/forms'),
  ],
}