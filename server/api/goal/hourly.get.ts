import type { HourlyItem } from "~/lib/data.types";
import { useGoalAPI } from "../../../composables/api/useGoalsApi";

export default defineEventHandler(async (event) => {
  const data = await useGoalAPI().getHourlyItem();

  return data as HourlyItem[];
});
