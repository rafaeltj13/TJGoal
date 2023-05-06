export const useCurrentUser = () => {
  const currentUser = useState("currentUser", () => {});

  const setCurrentUser = (user: any) => (currentUser.value = user);

  return { currentUser, setCurrentUser };
};
