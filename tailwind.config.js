export default {
  content: ["./src/**/*.{js,jsx}", "./public/index.html"],
  darkMode: "class", // class, 'media' or boolean
  theme: {
    extend: {
      colors: {
        // Light theme
        primary: "#159895",
        secondary: "#FEFCF3",
        tertiary: "#7AA874",
        sidebar: "#EDE4E0",
        //Dark Theme
        "primary-dark": "#6998AB",
        "secondary-dark": "#2B4865",
        "tertiary-dark": "#0E8388",
        "sidebar-dark": "#256D85",
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
  safelist: [
    "from-white",
    "from-black",
    "from-amber-700",
    "from-lime-700",
    "from-slate-700",
    "from-teal-700",
    "from-fuchsia-700",
    "from-violet-700",
    "via-white",
    "via-black",
    "via-amber-700",
    "via-lime-700",
    "via-slate-700",
    "via-teal-700",
    "via-fuchsia-700",
    "via-violet-700",
    "to-white",
    "to-black",
    "to-amber-700",
    "to-lime-700",
    "to-slate-700",
    "to-teal-700",
    "to-fuchsia-700",
    "to-violet-700",
  ],
};
