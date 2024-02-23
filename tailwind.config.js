/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      backgroundImage: {
        "orange-gradient": "linear-gradient(180deg, #EA9769 0%, #EA6969 100%)",
      },
      colors: {
        "dark-200": "#1F1D2B",
        "dark-100": "#252836",
        "primary-200": "#ED7D32",
        "primary-100": "#EB966A",
        "gray-200": "#393C49",
        "gray-100": "#2D303E",
        "gray-50": "#ABBBC2",
        "main-pink": "#FF7CA3",
      },
      boxShadow: {
        main: "0px 0px 21px 0px #EA7C694D",
        dark: "0px 0px 21px 7px #181621",
      },
    },
  },
  plugins: [],
};
