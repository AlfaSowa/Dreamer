/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./**/*.{ts,tsx}"],
  theme: {
    // для расширения списка классов добавляем в extend иначе затрет базовую тему
    extend: {
      colors: {
        "main-light": "var(--color-primary)",
        "main-dark": "var(--color-main-dark)",
      },
    },
  },
  plugins: [],
  darkMode: "class",
};
