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
        'leadin-h2': '3.3rem',
        'leading-h3': '2.2rem',
        'leading-h4': '2.25rem',
        'leading-h5': '1.688rem',
        'leading-body': '1.5rem',
        'leading-caption': '0.875rem',
        'leading-m1': '2.22rem',
        'leading-m2': '1.969rem',
        'leading-m3': '1.725rem',
        'leading-m4': '1.763rem',
        'leading-m5': '1.688rem',
        'leading-m-body': '1.5rem',
        'leading-m-caption': '1.313'
      },

      height: {
        '678': '42.375rem'
      }
    },
  },
  plugins: [],
}
