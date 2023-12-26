import { SupabaseClient, createClient } from "@supabase/supabase-js";
import type { Database } from "~/lib/database.types";

export const useSupabase = () => {
  const config = useRuntimeConfig();

  const supabaseUrl = config.public.SUPABASE_URL as string;
  const supabaseKey = config.public.SUPABASE_KEY as string;

  const supabase: SupabaseClient = createClient<Database>(
    supabaseUrl,
    supabaseKey
  );

  return supabase;
};
