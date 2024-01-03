import { watch } from "vue";
import { useCookie, useState } from "#imports";
import type { CookieOptions, CookieRef } from "nuxt/app";
import type { WatchCallback } from "nuxt/dist/app/compat/capi";

export function useStatefulCookie<T = boolean | string | null>(
  name: string,
  options?: CookieOptions<T> & { readonly?: false | undefined }
): CookieRef<T> {
  const cookie = useCookie(name, {
    ...options,
    sameSite: "none",
    secure: true,
  });
  const state = useState(name, () => cookie.value);

  const callback: WatchCallback<T, T> = () => {
    cookie.value = state.value;
  };

  watch(state, callback, { deep: true });

  return state;
}

export const useRightSidebar = () => {
  return useStatefulCookie<boolean>("openRightSidebar", {
    default: () => true,
  });
};
export const useLeftSidebar = () => {
  return useStatefulCookie<boolean>("openLeftSidebar", { default: () => true });
};
export const useDarkMode = () => {
  return useStatefulCookie<boolean>("darkMode");
};
export const useEnglish = () => {
  return useStatefulCookie<boolean>("isEnglish", { default: () => true });
};
export const useAuthCookie = () => {
  return useStatefulCookie("auth");
};
