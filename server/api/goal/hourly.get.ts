import type { PlayerScoreDetails } from "~/lib/data.types";
import { useGoalApi } from "../../../composables/api/useGoals";

export default defineEventHandler(async (event) => {
  const data = await useGoalApi().getHourlyRanking();

  return data as PlayerScoreDetails[];
});
