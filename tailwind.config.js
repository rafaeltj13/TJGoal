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
    },
  },
  plugins: [],
};
