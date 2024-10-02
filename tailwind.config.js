/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        grayBackground: "#1e1e1f",
        serviceItem: "",
        elementBackground: "#2b2b2c",
        elementBorder: "#383838",
        text: "#FAFAFA",
        pText: "#D6D6D6",
      },
      fontFamily: {
        webFont: ["Poppins"],
      },
      backgroundImage: {
        gradientServiceItem:
          "inear-gradient(to bottom right, hsla(240, 1%, 18%, 0.251) 0%, hsla(240, 2%, 11%, 0) 100%), hsl(240, 2%, 13%)",
        borderGradientServiceItem:
          "linear-gradient(to bottom right, hsl(0, 0%, 25%) 0%, hsla(0, 0%, 25%, 0) 50%)",
      },
    },
  },
  plugins: [],
};
