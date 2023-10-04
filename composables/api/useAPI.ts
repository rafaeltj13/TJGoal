import { Database } from "../../lib/database.types";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

export const useAPI = (): SupabaseClient => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.SUPABASE_URL || "";
  const supabaseKey = config.public.SUPABASE_KEY || "";
  const supabase = createClient<Database>(supabaseUrl, supabaseKey, {
    // auth: { persistSession: true },
  });

  return supabase;
};
