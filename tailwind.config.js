/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    fontFamily: {
      sans: ['Poppins', 'sans-serif'],
    },
    extend: {
      colors: {
        primary: {
          4: "#0A58CA",
          3: "#0D6EFD",
          2: "#3D8BFD",
          1: "#6EA8FE",
        },
        warning: "#FF8E26",
        danger: "#FF0000",
        success: "#14CC26",
        stroke: "#E8E8E8",
      },
    },
  },
  plugins: [],
}

