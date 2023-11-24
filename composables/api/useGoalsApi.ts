import { useApi } from "~/composables/api/useApi";
import type { HourlyItem } from "~/lib/data.types";

export const useGoalAPI = () => {
  const getHourlyItem = async () => {
    let { data, error } = await useApi().rpc("hourly_ranking");

    if (error) return [];

    return data as HourlyItem[];
  };

  return {
    getHourlyItem,
  };
};
