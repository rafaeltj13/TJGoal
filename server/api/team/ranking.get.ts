import { useTeamAPI } from "~/composables/api/useTeam";
import type { Team } from "~/lib/data.types";

export default defineEventHandler(async (event) => {
  const data = await useTeamAPI().getTeamRanking();
  return data as Team[];
});
