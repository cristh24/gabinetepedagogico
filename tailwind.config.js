/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
    "./src/pages/**/*.{html,js}",
    "./src/components/**/*.{html,js}",
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          dark: "#0d2c54",
          main: "#1e5a96",
          light: "#e0e7ff",
        },
      },
    },
  },
  plugins: [],
}
