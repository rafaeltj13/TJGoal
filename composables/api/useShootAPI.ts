import { useAPI } from "~/composables/api/useAPI";

export const useShootAPI = () => {
  const shoot = async (userId: string, teamId?: number) => {
    try {
      await useAPI().from("goals").insert({
        userId,
        teamId,
      });
    } catch (error) {
      console.log({ error });
    }
  };

  return {
    shoot,
  };
};
