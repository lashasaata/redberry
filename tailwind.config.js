/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {},
    boxShadow: {
      region: "5px 5px 12px 0 rgba(2, 21, 38, 0.08)",
    },
    colors: {
      placeholder: "rgba(2, 21, 38, 0.4)",
      m: "rgba(2, 21, 38, 0.7)",
    },
  },
  plugins: [],
};
