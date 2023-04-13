/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/**/*.jsx',
    './src/**/*.js',
  ],
  theme: {
    extend: {
      backgroundImage: {
        'background': "url('/src/assets/background.png')",
      },
      colors: { 
        'primary': '#f5f4f7',
        'secondary': '#dadada',
        'tertiary': '#7e7e7e',
        'quaternary': '#0b0078',
        'profile': '#222202',
        "page": "#1b1b1b",
        "count": "#535264"
      },
  },
  plugins: [],
}
}

