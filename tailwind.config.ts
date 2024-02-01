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
    "shadow-[0px_0px_12px_4px]",
  ],
  darkMode: "class",
  theme: {
    extend: {
      colors: {
        // Light theme
        primary: "#1F8A70",
        secondary: "#99BC85",
        tertiary: "#4FA095",
        background: "#F3F3F3",
        sidebar: "#EEEEEE",
        accent: "#555843",

        //Dark Theme
        "primary-dark": "#495E57",
        "secondary-dark": "#1B4242",
        "tertiary-dark": "#0E8388",
        "background-dark": "#0F0E0E",
        "sidebar-dark": "#1B4242",
        "accent-dark": "#776B5D",
      },
      spacing: {
        88: "22rem",
      },
      fontFamily: {
        sans: ["Chakra Petch", "system-ui", "sans-serif"],
      },
    },
  },
  plugins: [],
};
