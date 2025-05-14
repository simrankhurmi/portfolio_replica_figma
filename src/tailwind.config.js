/** @type {import('tailwindcss').Config} */
export default {
content: [
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}",
  "./components/**/*.{js,ts,jsx,tsx}",
],
  theme: {
    extend: {
      colors: {
        primary: "#080808", // Black
        secondary: "#FACC15", // Yellow
        accent: "#E11D48", // Red
      },
    },
    screens: {
        'xs': '650px',      // Custom breakpoint (e.g., iPad Mini or similar)
      'sm': '640px',
      'md': '768px',
      'lg': '1024px',
      'xl': '1280px',
      '2xl': '1536px',
      },
  },
  safelist: [
    "bg-primary", // Forces Tailwind to generate this class
  ],
  plugins: [],
};
