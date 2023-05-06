export const useRightSidebar = () => {
  return useState("openRightSidebar", () => false);
};
export const useLeftSidebar = () => {
  return useState("openLeftSidebar", () => false);
};
export const useDarkMode = () => {
  return useState("darkMode", () => false);
};
