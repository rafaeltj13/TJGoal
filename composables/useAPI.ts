import { createClient } from "@supabase/supabase-js";
import { Database } from "lib/database.types";

export const useAPI = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.SUPABASE_URL || "";
  const supabaseKey = config.public.SUPABASE_KEY || "";
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  const getCurrentUser = async (userId: string | null) => {
    if (!userId) return;

    const { data, error } = await supabase
      .from("users")
      .select(
        `
        *,
        team (
          name,
          logo
        )
      `
      )
      .eq("id", userId);

    if (error) return;

    return data[0];
  };

  const getUserRank = async (userId: string | null) => {
    if (!userId) return;

    const { data, error } = await supabase
      .from("users")
      .select(
        `
        *,
        team (
          name,
          logo
        )
      `
      )
      .order("goals", { ascending: false });

    if (error) return;

    return data;
  };

  const shoot = async (
    userId: string | null,
    currentGoalsNumber: number = 0
  ) => {
    if (!userId) return;

    const { data, error } = await supabase
      .from("users")
      .update({ goals: currentGoalsNumber + 1 })
      .eq("id", userId);

    if (error) return;

    return data;
  };

  return { getCurrentUser, getUserRank, shoot };
};
