/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    fontFamily: {
      primary: ["Helvetica", "sans-serif"],
    },
    extend: {
      colors: {
        primary: {
          DEFAULT: "#240D57",
          purpleLight: "#501FC1",
          envitedPurple: "#8456EC",
          envitedPink: "#E87BF8",
        },
        secondary: {
          purple: "#CCB6FF",
          purpleSecond: "#EDE5FF",
          purpleThird: "#F6F2FF",
        },
        alert: {
          red: "#FFD7E0",
          foregroundRed: "#E61445",
          green: "#D3FFE2",
          foregroundGreen: "#00805E",
        },
        neutrals: {
          dark: "#4F4F4F",
          boldDark: "#828282",
          semiDark: "#BDBDBD",
          lightDark: "#E0E0E0",
          lighter: "#F2F2F2",
          light: "#BDBDBD",
        },
      },
      fontSize: {
        "6xl": "4rem",
        "2xl": "1.75rem",
        xs: "0.8334rem",
      },
      padding: {
        11: "2.875rem",
      },
      margin: {
        2.5: "0.6875rem",
      },
      lineHeight: {
        12: "4.625rem",
      },
    },
  },
  plugins: [],
};
