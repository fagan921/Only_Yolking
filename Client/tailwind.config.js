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
        genty: ["Genty Regular", "serif"],
        roboto: ["Roboto", "sans-serif"],
      },
      margin: {
        "96": "24rem",
        "128": "32rem",
      },
    },
  //   screens: {
  //     sm: "640px",
  //     md: "768px",
  //     lg: "1024px",
  //     xl: "1240px",
  // },
  plugins: [],
  variants: {
    opacity: ["responsive", "hover"],
  },
},
};
