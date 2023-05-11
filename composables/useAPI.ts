import { Database } from "./../lib/database.types";
import { createClient } from "@supabase/supabase-js";
import { User, Level } from "~/lib/data.types";

export const useAPI = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.SUPABASE_URL || "";
  const supabaseKey = config.public.SUPABASE_KEY || "";
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  const getCurrentUser = async (
    userId: string | null
  ): Promise<User | null> => {
    if (!userId) return null;

    const { data, error } = await supabase
      .from("users")
      .select(
        `
        *,
        team (
          id,
          name,
          logo
        )
      `
      )
      .eq("id", userId)
      .single();

    if (error) return null;

    return data as User;
  };

  const getUserRank = async (): Promise<Array<User> | []> => {
    const { data, error } = await supabase
      .from("users")
      .select(
        `
        *,
        team (
          id,
          name,
          logo
        )
      `
      )
      .filter("username", "neq", "")
      .order("goals", { ascending: false })
      .limit(10);

    if (error) return [];

    return data as User[];
  };

  const shoot = async (
    userId: string | null,
    currentGoalsNumber: number = 0
  ): Promise<void> => {
    if (!userId) return;

    const { error } = await supabase
      .from("users")
      .update({ goals: currentGoalsNumber + 1 })
      .eq("id", userId);

    if (error) return;
  };

  const getLevels = async (): Promise<Array<Level>> => {
    const { data, error } = await supabase
      .from("levels")
      .select("*")
      .order("min_goals", { ascending: false });

    if (error) return [];

    return data as Level[];
  };

  return { getCurrentUser, getUserRank, shoot, getLevels };
};
