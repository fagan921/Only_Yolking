// @ts-nocheck
module.exports = {
  content: ["./src/**/*.{html,js,jsx,ts,tsx}"],
  theme: {
    extend: {
      
        animation: {
          spin: 'spin 1s linear infinite', 
          growText: 'growText 0.5s ease-in-out', 
        },
        keyframes: {
          spin3: {
            '0%': { transform: 'rotate(0deg)' },
            '100%': { transform: 'rotate(1080deg)' }, // 1080deg = 3 spins
          },
          growText: {
            '0%': { transform: 'scale(1)' },
            '100%': { transform: 'scale(1.5)' }, // Increase text size
          },
        },
      },
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
 
};
  
