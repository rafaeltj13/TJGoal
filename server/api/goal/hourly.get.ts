import { useGoalAPI } from "../../../composables/api/useGoalsApi";

export default defineEventHandler(async (event) => {
  const data = await useGoalAPI().getHourlyRanking();

  return data;
});
