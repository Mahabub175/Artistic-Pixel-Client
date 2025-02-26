/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      container: {
        padding: {
          DEFAULT: "1rem",
          sm: "2rem",
          lg: "4rem",
          xl: "5rem",
          "2xl": "6rem",
        },
      },
      colors: {
        primary: "#5c159d",
        primaryLight: "#cda7f0",
        textColor: "#232323",
        light: "#f8edf6",
      },
      screens: {
        sm: "580px",
        md: "600px",
        lg: "1280px",
        xl: "1300px",
        xxl: "1600px",
      },
      keyframes: {
        fadeOutLeftToRight: {
          "0%": { backgroundPosition: "0% 0%" },
          "100%": { backgroundPosition: "100% 0%" },
        },
        fadeInRightToLeft: {
          "0%": { backgroundPosition: "100% 0%" },
          "100%": { backgroundPosition: "0% 0%" },
        },
      },
      animation: {
        fadeOutLeftToRight: "fadeOutLeftToRight 0.3s ease-in-out forwards",
        fadeInRightToLeft: "fadeInRightToLeft 0.3s ease-in-out forwards",
      },
    },
  },
  plugins: [],
};
