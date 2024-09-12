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
          1: "#0A58CA",
          2: "#0D6EFD",
          3: "#3D8BFD",
          4: "#6EA8FE",
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

