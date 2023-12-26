import { useSupabase } from "~/composables/api/useSupabase";
import type { User } from "~/lib/data.types";

export const useUserApi = () => {
  const getUser = async (userId: string | undefined) => {
    if (!userId) return null;
    try {
      const { data, error } = await useSupabase()
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
    const { data, error } = await useSupabase()
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
    await useSupabase()
      .from("users")
      .update({
        username,
        full_name: fullName,
        team,
        updated_at: new Date(),
      })
      .eq("id", userId);
  };

  const updatePicture = async (userId: string, picture: string) => {
    await useSupabase()
      .from("users")
      .update({ picture, updated_at: new Date() })
      .eq("id", userId);
  };

  const shoot = async (userId: string, goalsNumber: number) => {
    await useSupabase()
      .from("users")
      .update({ goals: goalsNumber, updated_at: new Date() })
      .eq("id", userId);
  };

  const updateAttributes = async (
    userId: string,
    pace: number,
    shooting: number,
    passing: number,
    dribbling: number,
    defending: number,
    physical: number,
    points: number
  ) => {
    await useSupabase()
      .from("users")
      .update({
        pace,
        shooting,
        passing,
        dribbling,
        defending,
        physical,
        points,
        updated_at: new Date(),
      })
      .eq("id", userId);
  };

  const updateGreens = async (userId: string, greensToBeAdded: number) => {
    const user = await getUser(userId);
    const currentGreens = user?.greens || 0;

    const { data, error } = await useSupabase()
      .from("users")
      .update({
        greens: currentGreens + greensToBeAdded,
        updated_at: new Date(),
      })
      .eq("id", userId);

    if (error) {
      return null;
    }

    return data;
  };

  return {
    getUser,
    getUserRanking,
    finishRegistration,
    updatePicture,
    shoot,
    updateAttributes,
    updateGreens,
  };
};
