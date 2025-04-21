// tailwind.config.js
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  safelist: ["ml-[50%]", "h-[16px]"],
  theme: {
    extend: {
      colors: {
        blue: {
          500: "#0096FF",
          700: "#2b7cb4",
          900: "#1e3a5f",
        },
        gray: {
          700: "#374151",
          800: "#1f2937",
          900: "#111827",
          950: "#0a0f1a",
        },
      },
    },
  },
  plugins: [],
};
