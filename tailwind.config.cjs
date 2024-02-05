/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    fontFamily: {
      Poppins: "Poppins",
    },
    extend: {
      colors: {
        Teal: "#2F6C6D",
        HummingBird: "#d1f1ee",
        yellow: "#e4d63b",
        Solitude: "#e9e9ea",
        gray: "#4B4B4C",
        ModerateBlue: "hsl(238, 40%, 52%)",
        ModerateBlue2: "hsl(238, 40%, 52%, .5)",
        SoftRed: "hsl(358, 79%, 66%)",
        LightGrayishBlue: "hsl(239, 57%, 85%)",
        LightGrayishBlue2: "hsl(239, 57%, 85%, 0.1)",
        PaleRed: "hsl(357, 100%, 86%)",
        DarkBlue: "hsl(212, 24%, 26%)",
        GrayishBlue: "hsl(211, 10%, 45%)",
        LightGray: "hsl(223, 19%, 93%)",
        VeryLightGray: "hsl(228, 33%, 97%)",
      },
      animation: {
        slide: "slide 25s linear infinite",
      },
      keyframes: {
        slide: {
          "0%,100%": { transform: "translateX(5%)" },
          "50%": { transform: "translateX(-120%)" },
        },
      },
      filter: {
        blur: "blur(4px)",
      },
    },
    screens: {
      xs: "480px",
      sm: "768px",
      md: "1060px",
    },
  },
  plugins: [require("tailwindcss-filters")],
};
