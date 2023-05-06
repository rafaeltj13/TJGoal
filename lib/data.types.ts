// import type { Database } from "~/lib/database.types";

// export type User = Database["public"]["Tables"]["users"]["row"];
export type User = {
  id: string;
  updated_at: string;
  username: string;
  full_name: string;
  avatar_url: string;
  goals: number;
  team?: Team;
};

export type Team = {
  id: number;
  created_at?: string;
  name: string;
  primary_color?: string;
  secondary_color?: string;
  logo: string;
};
