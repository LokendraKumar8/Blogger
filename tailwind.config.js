module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        primary: {
          light: "#6D28D9",
          DEFAULT: "#5B21B6",
          dark: "#4C1D95",
        },
        secondary: {
          light: "#4F46E5",
          DEFAULT: "#4338CA",
          dark: "#3730A3",
        },
        accent: "#F472B6",
        background: {
          light: "#F3F4F6",
          DEFAULT: "#FFFFFF",
          dark: "#1F2937",
        },
      },
      spacing: {
        72: "18rem",
        84: "21rem",
        96: "24rem",
      },
      keyframes: {
        fadeIn: {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
        slideUp: {
          "0%": { opacity: "0", transform: "translateY(20px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        bounceIn: {
          "0%, 100%": { transform: "scale(1)" },
          "50%": { transform: "scale(1.1)" },
        },
      },
      animation: {
        "fade-in": "fadeIn 0.5s ease-out forwards",
        "slide-up": "slideUp 0.5s ease-out forwards",
        "bounce-in": "bounceIn 0.4s ease-in-out",
      },
    },
  },
  plugins: [],
};
