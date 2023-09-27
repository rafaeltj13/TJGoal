export type User = {
  id: string;
  updated_at: string;
  username: string;
  full_name: string;
  avatar_url: string;
  goals: number;
  team?: Team;
  level?: Level;
  greens: number;
};

export type Team = {
  id: number;
  created_at?: string;
  name: string;
  primary_color?: string;
  background_color?: string;
  logo: string;
  team_goals?: number;
};

export type Level = {
  id: number;
  created_at?: string;
  name: string;
  min_goals: number;
  max_goals: number;
  icon: string;
  next_level?: Level;
};
