import { useSupabase } from "~/composables/api/useSupabase";
import type { Team } from "~/lib/data.types";

export const useTeamAPI = () => {
  const getTeamRanking = async () => {
    const { data, error } = await useSupabase().rpc("get_team_goals");

    if (error) return [];

    return data as Team[];
  };

  const getTeams = async () => {
    const { data, error } = await useSupabase().from("teams").select("*");

    if (error) return [];

    return data as Team[];
  };

  const getTeam = async (teamId: string) => {
    const { data, error } = await useSupabase()
      .from("teams")
      .select("*")
      .eq("id", teamId)
      .single();

    if (error) return null;

    return data as Team;
  };

  return {
    getTeamRanking,
    getTeams,
    getTeam,
  };
};
