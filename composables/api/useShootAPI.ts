import { useAPI } from "~/composables/api/useAPI";

export const useShootAPI = () => {
  const shoot = async (
    userId: string,
    currentGoalsNumber: number,
    teamId?: number
  ) => {
    try {
      await useAPI()
        .from("users")
        .update({ goals: currentGoalsNumber + 1 })
        .eq("id", userId);

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
