import { Database } from "../../lib/database.types";
import { createClient } from "@supabase/supabase-js";

export const useAPI = () => {
  const config = useRuntimeConfig();
  const supabaseUrl = config.public.SUPABASE_URL || "";
  const supabaseKey = config.public.SUPABASE_KEY || "";
  const supabase = createClient<Database>(supabaseUrl, supabaseKey);

  return supabase;
};
