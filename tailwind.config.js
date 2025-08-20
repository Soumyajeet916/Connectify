/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {},
  },
  // 1. Add DaisyUI as a plugin
  plugins: [
    require('daisyui'),
  ],

  // 2. Configure DaisyUI themes
  daisyui: {
    themes: ["light", "dark"], // You can add more themes here
    darkTheme: "light", // The theme to use when `prefers-color-scheme: dark` is true
    base: true,
    styled: true,
    utils: true,
  },
}