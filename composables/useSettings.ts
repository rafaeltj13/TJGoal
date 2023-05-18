import { WatchCallback, watch } from "vue";
import { CookieOptions, CookieRef } from "#app";
import { useCookie, useState } from "#imports";

export function useStatefulCookie<T = boolean | null>(
  name: string,
  options?: CookieOptions<T>
): CookieRef<T> {
  const cookie = useCookie(name, options);
  const state = useState(name, () => cookie.value);

  const callback: WatchCallback<T, T> = () => {
    cookie.value = state.value;
  };

  watch(state, callback, { deep: true });

  return state;
}

export const useRightSidebar = () => {
  return useStatefulCookie("openRightSidebar");
};
export const useLeftSidebar = () => {
  return useStatefulCookie("openLeftSidebar");
};
export const useDarkMode = () => {
  return useStatefulCookie("darkMode");
};
