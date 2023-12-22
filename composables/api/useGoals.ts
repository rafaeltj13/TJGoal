import { useSupabase } from "~/composables/api/useSupabase";
import type { Goal, PlayerScoreDetails } from "~/lib/data.types";

export const useGoalApi = () => {
  const getHourlyRanking = async () => {
    let { data, error } = await useSupabase().rpc("hourly_ranking");

    if (error) return [];

    return data as PlayerScoreDetails[];
  };

  const getDailyRanking = async () => {
    let { data, error } = await useSupabase().rpc("daily_ranking");

    if (error) return [];

    return data as PlayerScoreDetails[];
  };

  async function getGoalsByUser(userId: string) {
    let { data, error } = await useSupabase()
      .from("goals")
      .select("*")
      .eq("userId", userId);

    const defaultObject = {
      default: 0,
      penalty: 0,
      fault: 0,
      counterAttack: 0,
    };

    const goalsByCategory = (data as Goal[]).reduce(
      (goalsByCategory, goal: Goal) => {
        return {
          ...goalsByCategory,
          [goal.type]: goalsByCategory[goal.type] + 1,
        };
      },
      defaultObject
    );

    if (error) {
      console.error("Error fetching goals: ", error);
      return defaultObject;
    }

    return goalsByCategory;
  }

  return {
    getHourlyRanking,
    getDailyRanking,
    getGoalsByUser,
  };
};
