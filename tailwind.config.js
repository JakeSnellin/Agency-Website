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
        'm-caption': '0.875rem',
        h1: '4rem',
        h2: '3rem',
        h3: '2rem',
        h4: '1.5rem',
        h5: '1.125rem',
        body: '1rem',
        caption: '0.875rem'
      },

      lineHeight: {
        'm1': '2.22rem',
        'm2': '1.969rem',
        'm3': '1.725rem',
        'm4': '1.763rem',
        'm5': '1.688rem',
        'm-body': '1.5rem',
        'm-caption': '1.313rem',
        'h1': '4.4rem',
        'h2': '3.3rem',
        'h3': '2.2rem',
        'h4': '2.25rem',
        'h5': '1.688rem',
        'body': '1.5rem',
        'caption': '0.875rem',
        'hero': '1.969rem'
      },

      height: {
        '50': '3.125rem',
        '678': '42.375rem',
        'logo-height': '2.125rem',
      },

      width: {
        'logo-width': '2.125rem',
        'hero': '15.938rem',
      },

      colors: {
        'blue': '#c6e4f8',
        'orange': '#f2994a',
        'cream': '#fdfcf3',
        'grey': '#a9a9a9',
      },

      margin: {
        '13': '0.813rem',
        '30': '1.875rem',
        '35': '2.188rem',
        '53': '3.313rem',
        '59': '3.688rem',
        '62': '3.875rem'
      },

      fontWeight: {
        'm2': '250',
        'm5': '400',
        'm-caption': '300'
      },

      minWidth: {
        'hero': '15.938rem'
      },

      padding: {
        'hero': '1.25rem',
        '18': '1.125rem',
        '65': '4.063rem'
      },

      fontFamily: {
        'main': ['Lab Grotesque']
      }
    },
  },
  plugins: [],
}
