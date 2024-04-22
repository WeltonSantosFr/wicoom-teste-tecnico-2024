/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "black": "#000000",
        "black-2": "#B0B0B0",
        "black-3": "#D3D3D3",
        "black-4": "#ECECEC",
        "black-5": "#FAFAFA",
        "dark-grey": "#4F4F4F",
        "white": "#FFFFFF",
        "grey-1": "",
        "dark-pink": "#2C0713",
        "pink": "#CF215B",
        "light-pink": "#FFCCFB",
        "wisp-pink": "#FDEDF4",
        "vanilla": "#D0BCA3",
        "fantasy": "#FBF6EF",
        "dark-green": "#005231",
        "light-green": "#E7EAE1",
        "blue": "#2251D3",
        "light-blue": "#D4D9ED",
        "orange": "#FF8000",
        "yellow": "#FFD500",

      },
      fontFamily: {
        DMSans: ['DM Sans']
      }
    },
  },
  plugins: [],
}

