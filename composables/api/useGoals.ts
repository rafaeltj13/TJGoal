import { useSupabase } from "~/composables/api/useSupabase";
import type { HourlyItem } from "~/lib/data.types";

export const useGoalApi = () => {
  const getHourlyItem = async () => {
    let { data, error } = await useSupabase().rpc("hourly_ranking");

    if (error) return [];

    return data as HourlyItem[];
  };

  return {
    getHourlyItem,
  };
};
