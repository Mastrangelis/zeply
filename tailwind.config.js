/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./components/**/*.{js,ts,jsx,tsx}",
    "./app/**/*.{js,ts,jsx,tsx}",
    "./sections/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    screens: {
      xss: "1024px",
      xs: "1200px",
      sm: "1440px",
      md: "1600px",
      lg: "1920px",
      xlg: "2220px",
    },
    fontSize: {
      xs: ".75rem", // 12px Caption
      tiny: ".875rem", // 14px Body2 a
      base: "1rem", // 16px Body1 Links
      lg: "1.125rem", // 18px h4
      xl: "1.25rem", // 20px h3
      "2xl": "1.5rem", // 24px  h2
      "4xl": "2.25rem", // 36px h1
    },
    fontWeight: {
      hairline: 100,
      thin: 200,
      light: 300,
      normal: 400,
      medium: 500,
      semibold: 600,
      bold: 700,
      extrabold: 800,
      black: 900,
    },
    letterSpacing: {
      tightest: "-.075em",
      tighter: "-.05em",
      tight: "-.025em",
      normal: "0",
      wide: ".025em",
      wider: ".05em",
      widest: ".1em",
    },
    extend: {
      colors: {
        transparent: "transparent",
        current: "currentColor",
        dark: "#010918",
        white: "#FFFFFF",
        success: "#00c9a7",
        successBG: "#00c9a71a",
        link: "#3498db",
        section: "hsl(259, 20%, 18%)",
        primary: {
          100: "#E8EFFF",
          200: "#BAD1FF",
          300: "#7AA6FF",
          400: "#1A63F5",
        },
        secondary: {
          100: "#E9E4FF",
          200: "#B8AAFF",
          250: "#7458FF",
          300: "#3F1AF5",
          400: "#1A0099",
        },
        negative: {
          // Negative Values
          100: "#FFE4E8",
          200: "#FB576A",
        },
        positive: {
          // Positive Values
          100: "#E9FFE9",
          200: "#09CE05",
        },
        blackWhite: {
          100: "#FFFFFF",
          150: "#FCFDFF",
          200: "#F6F6F9",
          250: "#E9EBEF",
          300: "#DEE0E5",
          350: "#BDBEC2",
          400: "#787C84",
          500: "#010918",
        },
        text: {
          100: "#BDBEC2",
          200: "#787C84",
        },
        disabled: "#DEE0E5",
        borderColor: "#e7eaf3",
      },
      borderRadius: {
        sm: "4px",
        lg: "6px",
        xl: "7px",
        button: "8px",
      },

      keyframes: {
        fadeOut: {
          from: {
            opacity: "1",
          },
          to: {
            opacity: "0",
          },
        },
        fadeIn: {
          "0%": {
            opacity: "0",
          },
          "100%": {
            opacity: "1",
          },
        },
      },
      animation: {
        fadeIn: "fadeIn 0.5s ease-in-out ",
        fadeOut: "fadeOut 0.5s ease-in-out ",
      },
    },
  },
  plugins: [],
};
