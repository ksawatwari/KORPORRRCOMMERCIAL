module.exports = {
  darkMode: "class",
  content: ["./app/**/*.{js,jsx}", "./components/**/*.{js,jsx}"],
  theme: {
    extend: {
      colors: {
        navy: { DEFAULT: "#14275A", deep: "#0C1A40", soft: "#E8ECF7" },
        gold: { DEFAULT: "#F5A524", deep: "#C77F00" },
        paper: "#F7F8FB",
        night: "#0A1230",
      },
      fontFamily: {
        th: ["var(--font-prompt)", "sans-serif"],
        en: ["var(--font-serif)", "Georgia", "serif"],
      },
    },
  },
  plugins: [],
};
