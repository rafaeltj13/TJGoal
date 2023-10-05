import { Database } from "../../lib/database.types";
import { SupabaseClient, createClient } from "@supabase/supabase-js";

const config = useRuntimeConfig();
const supabaseUrl = config.public.SUPABASE_URL || "";
const supabaseKey = config.public.SUPABASE_KEY || "";

const supabase: SupabaseClient = createClient<Database>(
  supabaseUrl,
  supabaseKey
);

export default () => supabase;
