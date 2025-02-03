module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        cyan: "#9cdbff",
        onlyyolkingblue: "#38B6FF", // Same as primary
        primary: "#38B6FF", // Blue
        secondary: "#FFF4E5", // Soft Apricot
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
        genty: ["Genty", "cursive"],
        roboto: ["Roboto", "sans-serif"],
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  },
  plugins: [],
  variants: {
    opacity: ["responsive", "hover"],
  },
};
