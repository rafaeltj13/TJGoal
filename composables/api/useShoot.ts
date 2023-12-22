import { useSupabase } from "~/composables/api/useSupabase";

export const useShootApi = () => {
  const shoot = async (userId: string, type: string, teamId?: number) => {
    try {
      await useSupabase().from("goals").insert({
        userId,
        teamId,
        type,
      });
    } catch (error) {
      console.error({ error });
    }
  };

  return {
    shoot,
  };
};
