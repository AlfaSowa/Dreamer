module.exports = {
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./DreamerPages/**/*.{ts,tsx}",
    "./layouts/**/*.{ts,tsx}",
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
