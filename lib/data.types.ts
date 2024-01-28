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
  vip?: Vip;
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

export type PlayerScoreDetails = {
  goalcount: number;
  userid: string;
  username: string;
  teamid: number;
  logo: string;
  level: string;
  viptype?: "normal" | "star" | "mythical";
};

export type Goal = {
  id: string;
  created_at: string;
  userId: string;
  teamId: string;
  type: "default" | "penalty" | "fault" | "counterAttack";
};

export type Vip = {
  id: string;
  created_at?: string;
  updated_at?: string;
  until: Date;
  type: "normal" | "star" | "mythical";
};
