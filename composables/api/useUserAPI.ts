import { useApi } from "~/composables/api/useApi";
import type { User } from "~/lib/data.types";

export const useUserApi = () => {
  const getUser = async (userId: string | undefined) => {
    if (!userId) return null;
    try {
      const { data, error } = await useApi()
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
              id
            )
          )
        `
        )
        .eq("id", userId)
        .single();
      if (error) throw error;
      return data as User;
    } catch {
      return null;
    }
  };
  const getUserRanking = async () => {
    const { data, error } = await useApi()
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
    await useApi()
      .from("users")
      .update({ username, full_name: fullName, team, updated_at: new Date() })
      .eq("id", userId);
  };
  const updatePicture = async (userId: string, picture: string) => {
    await useApi()
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
