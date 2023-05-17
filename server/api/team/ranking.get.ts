import { Team } from "~/lib/data.types";
import { useTeamAPI } from "~/composables/api/useTeamAPI";

export default defineEventHandler(async (event) => {
  const data = await useTeamAPI().getTeamRanking();
  return data as Team[];
});
