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
  pace: number;
  shooting: number;
  passing: number;
  dribbling: number;
  defending: number;
  physical: number;
  points: number;
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
  next_level?: Level;
};

export type HourlyItem = {
  goalcount: number;
  userId: string;
  username: string;
  teamId: number;
  logo: string;
  level: string;
};

export type Goal = {
  id: string;
  created_at: string;
  userId: string;
  teamId: string;
};
