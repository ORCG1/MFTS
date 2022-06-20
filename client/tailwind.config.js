module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      blue: '#2196F3',
      'dark-blue': '#1E88E5',
      black: '#14171A',
      gray: '#9E9E9E',
      'dark-gray': '#757575',
      'extra-light-gray': '#E1E8ED',
      light: '#F5F8FA',
    },
    extend: {
      fontFamily: {
        ff: ['Chela One', 'sans-serif'],
      },
      spacing: {
        3.5: '3.5rem',
        0.5: '0.5rem',
      },
      backgroundImage: {
        'soccer-texture': 'url("/images/bg.svg")',
      },
    },
  },
  plugins: [],
}
