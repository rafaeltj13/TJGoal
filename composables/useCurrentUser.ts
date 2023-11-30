import type { User } from "~/lib/data.types";

const DEFAULT_USER: User = {
  id: "",
  updated_at: "",
  username: "",
  full_name: "",
  avatar_url: "",
  goals: 0,
  greens: 0,
  pace: 1,
  shooting: 1,
  passing: 1,
  dribbling: 1,
  defending: 1,
  physical: 1,
  points: 0,
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
