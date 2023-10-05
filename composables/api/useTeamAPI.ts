import useAPI from "~/composables/api/useAPI";
import { Team } from "~/lib/data.types";

export const useTeamAPI = () => {
  const getTeamRanking = async () => {
    const { data, error } = await useAPI().rpc("get_team_goals");

    if (error) return [];

    return data as Team[];
  };

  const getTeams = async () => {
    const { data, error } = await useAPI().from("teams").select("*");

    if (error) return [];

    return data as Team[];
  };

  return {
    getTeamRanking,
    getTeams,
  };
};
