/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./index.html",          // index.html explicitly
    "./*.html",           // agar local HTML files hain
    "./src/**/*.{html,js}" // agar src folder me bhi files hain
  ],
  safelist: [],
  theme: {
    extend: {},
  },
  plugins: [],
}
