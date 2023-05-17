import { useAPI } from "~/composables/api/useAPI";

export const useShootAPI = () => {
  const shoot = async (userId: string, currentGoalsNumber: number) => {
    await useAPI()
      .from("users")
      .update({ goals: currentGoalsNumber + 1 })
      .eq("id", userId);
  };

  return {
    shoot,
  };
};
