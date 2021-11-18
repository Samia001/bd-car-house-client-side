const colors = require("tailwindcss/colors");

module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}", "./public/index.html"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontFamily: {
        poppins: ["Poppins", "sans-serif"],
        grandHotel: ["Grand Hotel", "cursive"],
      },
      transformOrigin: {
        0: "0%",
      },
      colors: {
        // Build your palette here
        transparent: "transparent",
        current: "currentColor",
        teal: colors.purple,
        emerald: colors.emerald,
      },
    },
  },
  variants: {
    extend: {
      borderColor: ["responsive", "hover", "focus", "focus-within"],
      display: ["hover", "group-hover"],
    },
    transitionProperty: ["hover", "focus", "group-hover"],
    fontWeight: ["hover", "focus"],
  },
  plugins: [require("@tailwindcss/forms")],
};
