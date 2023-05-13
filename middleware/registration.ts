export default defineNuxtRouteMiddleware(() => {
  const { currentUser } = useCurrentUser();

  if (currentUser.value && currentUser.value.id && !currentUser.value.team) {
    return navigateTo("/register");
  }
});
