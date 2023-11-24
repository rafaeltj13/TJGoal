import type { User } from "~/lib/data.types";

const DEFAULT_USER = {
  id: "",
  updated_at: "",
  username: "",
  full_name: "",
  avatar_url: "",
  goals: 0,
  greens: 0,
};

export const useCurrentUser = () => {
  const currentUser = useState<User>("currentUser", () => DEFAULT_USER);

  const setCurrentUser = (user: User | null) => {
    if (!user) {
      currentUser.value = DEFAULT_USER;
      return;
    }

    currentUser.value = user;
  };

  return { currentUser, setCurrentUser };
};
