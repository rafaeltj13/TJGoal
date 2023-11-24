import { useTeamAPI } from "~/composables/api/useTeamAPI";
import type { Team } from "~/lib/data.types";

export default defineEventHandler(async (event) => {
  const data = await useTeamAPI().getTeams();
  return data as Team[];
});
