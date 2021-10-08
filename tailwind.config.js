module.exports = {
  purge: ["./src/**/*.{js,jsx,ts,tsx}"],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {},
    fontFamily: {
      // roboto: ["Roboto", "Helvetica", "Arial", "sans-serif"],
      inter: ["Inter", "Helvetica", "Arial", "sans-serif"],
    },
  },
  variants: {
    extend: {},
  },
  plugins: ["gatsby-plugin-postcss"],
};
