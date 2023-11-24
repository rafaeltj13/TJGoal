import { useApi } from "~/composables/api/useApi";

export const useShootAPI = () => {
  const shoot = async (userId: string, teamId?: number) => {
    try {
      await useApi().from("goals").insert({
        userId,
        teamId,
      });
    } catch (error) {
      console.error({ error });
    }
  };

  return {
    shoot,
  };
};
