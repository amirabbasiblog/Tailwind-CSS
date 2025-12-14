/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./*.html",
    "./src/**/*.{html,js}"
  ],

  theme: {
    extend: {},
  },

  safelist: [
    {
      pattern: /(bg|text|border|hover:bg|active:bg)-teal-(50|100|200|300|400|500|600|700|800|900)/
    },
    {
      pattern: /(bg|text|border|hover:bg)-gray-(50|100|200|300|400|500|600|700|800|900)/
    },
    'text-white',
    'font-extrabold',
    'font-bold',
    'rounded-lg',
    'rounded-xl',
    'rounded-full',
    'px-6',
    'px-8',
    'py-3',
    'py-2',
    'shadow-lg',
    'shadow-xl',
    'transition',
    'duration-200',
    'duration-300'
  ],

  plugins: [],
}
