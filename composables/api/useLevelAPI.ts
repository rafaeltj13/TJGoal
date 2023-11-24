import { useApi } from "~/composables/api/useApi";
import type { Level } from "~/lib/data.types";

export const useLevelAPI = () => {
  const updateUserLevel = async (
    userId: string | undefined,
    nextLevel: number | undefined
  ) => {
    if (!userId || !nextLevel) return;

    await useApi().from("users").update({ level: nextLevel }).eq("id", userId);

    return { userId, nextLevel };
  };

  const getLevels = async () => {
    const { data, error } = await useApi()
      .from("levels")
      .select("*")
      .order("min_goals", { ascending: false });

    if (error) return [];

    return data as Level[];
  };

  return {
    updateUserLevel,
    getLevels,
  };
};
