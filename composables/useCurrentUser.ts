import { User } from "~/lib/data.types";

export const useCurrentUser = () => {
  const currentUser = useState<User>("currentUser", () => ({
    id: "",
    updated_at: "",
    username: "",
    full_name: "",
    avatar_url: "",
    goals: 0,
  }));

  const setCurrentUser = (user: User) => (currentUser.value = user);

  return { currentUser, setCurrentUser };
};
