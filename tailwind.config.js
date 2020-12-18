module.exports = {
  purge: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  darkMode: 'media', // or 'media' or 'class'
  theme: {
    extend: {
      colors: {
        'primary': '#3eaf7c',
        'background': '#1a1a1a'
      },
      listStyleType: {
        disc: 'disc',
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
