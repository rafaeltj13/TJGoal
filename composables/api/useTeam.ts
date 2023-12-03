import { useApi } from "~/composables/api/useApi";
import type { Team } from "~/lib/data.types";

export const useTeamAPI = () => {
  const getTeamRanking = async () => {
    const { data, error } = await useApi().rpc("get_team_goals");

    if (error) return [];

    return data as Team[];
  };

  const getTeams = async () => {
    const { data, error } = await useApi().from("teams").select("*");

    if (error) return [];

    return data as Team[];
  };

  return {
    getTeamRanking,
    getTeams,
  };
};
