/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,ts,jsx,tsx}", "./pages/**/*.{js,ts,jsx,tsx}"],
  theme: {
    colors: {
      // COLORS
      white: "#FFFFFF",
      darkGreen: "#002317",
      green: "#59DC6C",
      creamy: "#FFFFE3",
      pink: "#E2A5FF",
      turquoise: "#65EFDF",
      orange: "#FF9054",

      // TRANSPARENT COLORS
      transparentWhite : "#ffffff26",
      transparentTurquoise: "#B2F7E1",
      transparentPink: "#F0D2F1",
      transparentGreen: "#ACEDA7",
      transparentOrange: "#FFC79B",
    },
    screens: {
      mobile: "768px",
      tablet: "1024px",
      desktop: "1220px",
      ultraWide: "1400px"
    },
    extend: {},
  },
  plugins: [],
};
