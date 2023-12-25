export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      fontFamily: {
        primary: ["Montserrat", "sans-serif"],
        secondary: ["Fraunces", "sans-serif"],
      },
      colors: {
        primary: "hsl(158, 36%, 37%)",
        background: "hsl(30, 38%, 92%)",
        heading: "hsl(212, 21%, 14%)",
        text: "hsl(228, 12%, 48%)",
      },
    },
  },
  plugins: [],
};
