import type { HourlyItem } from "~/lib/data.types";
import { useGoalApi } from "../../../composables/api/useGoals";

export default defineEventHandler(async (event) => {
  const data = await useGoalApi().getHourlyItem();

  return data as HourlyItem[];
});
