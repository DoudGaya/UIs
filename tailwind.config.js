module.exports = {
  content: [
    "./index.html",
    "./src/**/*.{vue,js,ts,jsx,tsx}",

  ],
  theme: {
    extend: {
      fontFamily: {
        'logo': ['Akaya Telivigala',' cursive'],
        'spectra': ['Spectral', 'serif'],
        'raleway': ['Raleway', 'sans-serif'],
        'arapey': ['Arapey', 'serif'],
        // new fonts for acmegrid
        'inder': ['Inder', 'sans-serif']
      }
    },
  },
  plugins: [],
}
