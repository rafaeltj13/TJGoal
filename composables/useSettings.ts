import { watch } from "vue";
import { useCookie, useState } from "#imports";
import type { CookieOptions, CookieRef } from "nuxt/app";
import type { WatchCallback } from "nuxt/dist/app/compat/capi";

export function useStatefulCookie<T = boolean | string | null>(
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
export const useAuthCookie = () => {
  return useStatefulCookie("auth", { sameSite: "strict" });
};
