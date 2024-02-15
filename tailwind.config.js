/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      fontSize: {
        m1: "2rem",
        m2: "1.75rem",
        m3: "1.5rem",
        m4: "1.25rem",
        m5: "1.125rem",
        "m-body": "1rem",
        "m-caption": "0.875rem",
        h1: "4rem",
        h2: "3rem",
        h3: "2rem",
        h4: "1.5rem",
        h5: "1.125rem",
        body: "1rem",
        caption: "0.875rem",
        "m-hero": "1.225rem",
        "m-hero-sm": "0.938rem",
        "d-hero": "2.63rem",
        3.125: "3.125rem",
      },

      screens: {
        desktop: "1440px",
      },

      lineHeight: {
        21.6: "21.6px",
        31.5: "31.5px",
        27: "27px",
        21: "21px",
        32.9: "32.9px",
        24: "24px",
        27.6: "27.6px",
        35.52: "35.52px",
        28.2: "28.2px",
        1.6: "1.6em",
      },

      letterSpacing: {
        0.5: "0.5em",
      },

      height: {
        50: "3.125rem",
        678: "42.375rem",
        34: "2.125rem",
        56: "3.375rem",
        0.5: "0.031rem",
        25: "1.563rem",
        24: "1.5rem",
        579: "36.188rem",
        617: "38.563rem",
        612: "38.25rem",
        5.25: "5.25rem",
        6.75: "6.75rem",
        12.625: "12.625rem",
      },

      width: {
        34: "2.125rem",
        hero: "15.938rem",
        56: "3.375rem",
        21: "1.313rem",
        1440: "90rem",
        52.9: "52.9%",
        81.4: "81.4%",
        77.2: "77.2%",
        65.5: "62.188rem",
        90: "90%",
        6.483: "6.483rem",
        12.125: "12.125rem",
      },

      colors: {
        blue: "#c6e4f8",
        orange: "#f2994a",
        cream: "#fdfcf3",
        "grad-orange": "#E38F46",
        "grad-blue": "#C6E4F8",
        grey: "#A9A9A9",
        "grey-2": "#232222",
        "grey-3": "#413F3F",
        "grey-4": "#1F1E1E",
        "grey-5": "#6B6B6B",
        "grey-6": "#828282",
        "grey-7": "#F2F2F2",
      },

      backgroundColor: {
        "grey-line": "#454545",
      },

      margin: {
        13: "13px",
        30: "30px",
        35: "35px",
        53: "53px",
        59: "59px",
        62: "62px",
        60: "60px",
        56: "56px",
        34: "34px",
        16: "16px",
        17: "17px",
        71: "71px",
        77: "77px",
        26: "26px",
        15: "15px",
        27: "27px",
        14: "14px",
        32: "32px",
        33: "33px",
        28: "28px",
        64: "64px",
        93: "93px",
        157: "157px",
        44: "44px",
        111: "111px",
        114: "114px",
        70: "70px",
        11.38: "11.38%",
        252: "252px",
        230: "230px",
        182: "182px",
        12: "12%",
      },

      fontWeight: {
        250: "250",
        400: "400",
        "m-caption": "300",
      },

      minWidth: {
        hero: "15.938rem",
        13.313: "13.313rem",
      },

      maxWidth: {
        33.25: "33.25%",
        50.6: "50.6%",
        70.9: "70.9%",
        58.75: "58.75rem",
        27.125: "27.125rem",
        31: "31rem",
        65.5: "65.5rem",
        75.188: "75.188rem",
      },

      padding: {
        hero: "20px",
        18: "18px",
        65: "65px",
        23: "23px",
        13: "13px",
        12: "12px",
        74: "74px",
        94: "94px",
        98: "98px",
        81: "81px",
        97: "97px",
        12: "12px",
        133.7: "133.7%",
        57.7: "57.7%",
        124: "124px",
        26: "26px",
        54: "54px",
        311: "311px",
        389: "389px",
      },

      fontFamily: {
        main: ["LabGrotesque-Thin"],
        "labgrotesque-light": ["LabGrotesque-Light"],
        "fahkwang-extralight": ["Fahkwang-ExtraLight"],
        "fahkwang-light": ["Fahkwang-Light"],
      },

      gap: {
        35: "35px",
        17: "17px",
        36: "36px",
      },
    },
  },
  plugins: [],
};
