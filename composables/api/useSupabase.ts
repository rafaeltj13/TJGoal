import { SupabaseClient, createClient } from "@supabase/supabase-js";
import type { Database } from "~/lib/database.types";

const SUPABASE_URL = "https://zscdgmrokqqicxcgqdvt.supabase.co";
const SUPABASE_KEY =
  "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpc3MiOiJzdXBhYmFzZSIsInJlZiI6InpzY2RnbXJva3FxaWN4Y2dxZHZ0Iiwicm9sZSI6ImFub24iLCJpYXQiOjE2ODI0NTI1NDcsImV4cCI6MTk5ODAyODU0N30.uJG4X6BI1cYJ24vIM_Q2JJOeemTiEUEoeIc0mQ8_zg0";

export const useSupabase = () => {
  // const config = useRuntimeConfig();
  // const supabaseUrl = config.public.SUPABASE_URL || "";
  // const supabaseKey = config.public.SUPABASE_KEY || "";
  const supabaseUrl = SUPABASE_URL;
  const supabaseKey = SUPABASE_KEY;

  const supabase: SupabaseClient = createClient<Database>(
    supabaseUrl,
    supabaseKey
  );

  return supabase;
};
