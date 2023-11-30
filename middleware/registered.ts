export default defineNuxtRouteMiddleware(async (to, from) => {
  const { currentUser } = useCurrentUser();

  if (
    !!currentUser.value.id &&
    !currentUser.value.team &&
    to.path !== "/register"
  ) {
    return await navigateTo("/register");
  }
});
