import { HourlyItem } from "./../../lib/data.types";
import { useAPI } from "~/composables/api/useAPI";

export const useGoalAPI = () => {
  const getHourlyItem = async () => {
    let { data, error } = await useAPI().rpc("hourly_ranking");

    if (error) return [];

    return data as HourlyItem[];
  };

  return {
    getHourlyItem,
  };
};
