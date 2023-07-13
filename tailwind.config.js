/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './app/**/*.{js,ts,jsx,tsx,mdx}',
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',

    // Or if using `src` directory:
    './src/**/*.{js,ts,jsx,tsx,mdx}'
  ],
  theme: {
    extend: {
      colors: {
        light: '#e1e5e7',
        greenBrand: '#ACD9B2'
      },
      backgroundImage: {
        polka: 'radial-gradient(#79be83 2px, #FFFFFF 2px)'
      }
    }
  },
  plugins: [require('tailwindcss-animated')]
}
