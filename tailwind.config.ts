export default {
  mode: "jit",
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  safelist: [
    "translate-y-[-86px]",
    "translate-y-[-172px]",
    "translate-y-[-258px]",
    "translate-y-[-344px]",
    "translate-y-[-430px]",
    "text-emerald-800",
    "text-orange-800",
    "text-indigo-800",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme
        primary: "#159895",
        secondary: "#618264",
        text: "#7DB9B6",
        background: "#f1f3f5",
        sidebar: "#f0f1f3",
        accent: "#7e6752",

        //Dark Theme
        "primary-dark": "#044343",
        "secondary-dark": "#2E4F4F",
        "text-dark": "#0E8388",
        "background-dark": "#03001C",
        "sidebar-dark": "#1B2430",
        "accent-dark": "#3C2A21",
      },
      spacing: {
        88: "22rem",
      },
      fontFamily: {
        sans: ["Comfortaa", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
