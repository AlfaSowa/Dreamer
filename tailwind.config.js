module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./shared/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
    "./widgets/**/*.{ts,tsx}",
    "./features/**/*.{ts,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "color-card-bg": "var(--color-card-bg)",
        "color-card-bg-hover": "var(--color-card-bg-hover)",
      },
    },
  },
  plugins: [],
};
