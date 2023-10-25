import useAPI from "~/composables/api/useAPI";
import { User } from "~/lib/data.types";

export const useUserAPI = () => {
  const api = useAPI();
  const getUser = async (userId: string | undefined) => {
    if (!userId) return null;

    const { data, error } = await api
      .from("users")
      .select(
        `
          *,
          team (
            id,
            name,
            logo
          ),
          level (
            id,
            name,
            max_goals,
            min_goals,
            next_level(
              id,
              icon
            )
          )
        `
      )
      .eq("id", userId)
      .single();

    if (error) return null;

    return data as User;
  };

  const getUserRanking = async () => {
    const { data, error } = await api
      .from("users")
      .select(
        `
        *,
        team (
          id,
          name,
          logo
        ),
        level (
          id
        )
      `
      )
      .filter("username", "neq", "")
      .order("goals", { ascending: false })
      .limit(10);

    if (error) return [];

    return data as User[];
  };

  const finishRegistration = async (
    userId: string,
    username: string,
    fullName: string,
    team: string
  ) => {
    await useAPI()
      .from("users")
      .update({ username, full_name: fullName, team, updated_at: new Date() })
      .eq("id", userId);
  };

  const updatePicture = async (userId: string, picture: string) => {
    await useAPI()
      .from("users")
      .update({ picture, updated_at: new Date() })
      .eq("id", userId);
  };

  return {
    getUser,
    getUserRanking,
    finishRegistration,
    updatePicture,
  };
};
