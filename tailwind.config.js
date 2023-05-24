/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      fontSize: {
        m1: '2rem',
        m2: '1.75rem',
        m3: '1.5rem',
        m4: '1.25rem',
        m5: '1.125rem',
        'm-body': '1rem',
        'm-caption': '0.875',
        h1: '4rem',
        h2: '3rem',
        h3: '2rem',
        h4: '1.5rem',
        h5: '1.125rem',
        body: '1rem',
        caption: '0.875rem'
      },

      lineHeight: {
        'leading-h1': '4.4rem',
        'leading-h3': '2.2rem',
      }
    },
  },
  plugins: [],
}
