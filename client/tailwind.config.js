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
      transparentTurquoise: "#B2F7E1",
      transparentPink: "#F0D2F1",
      transparentGreen: "#ACEDA7",
      transparentOrange: "#FFC79B",
    },
    screens: {
      ultraWild: "1400px",
      desktop: "1024px",
      tablet: "768px",
    },
    extend: {},
  },
  plugins: [],
};
