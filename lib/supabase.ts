export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export interface Database {
  public: {
    Tables: {
      goals: {
        Row: {
          created_at: string
          id: string
          teamId: number
          type: string
          userId: string
        }
        Insert: {
          created_at?: string
          id?: string
          teamId: number
          type?: string
          userId: string
        }
        Update: {
          created_at?: string
          id?: string
          teamId?: number
          type?: string
          userId?: string
        }
        Relationships: [
          {
            foreignKeyName: "goals_teamId_fkey"
            columns: ["teamId"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "goals_userId_fkey"
            columns: ["userId"]
            isOneToOne: false
            referencedRelation: "users"
            referencedColumns: ["id"]
          }
        ]
      }
      levels: {
        Row: {
          created_at: string | null
          id: number
          max_goals: number
          min_goals: number
          name: string
          next_level: number | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          max_goals: number
          min_goals: number
          name: string
          next_level?: number | null
        }
        Update: {
          created_at?: string | null
          id?: number
          max_goals?: number
          min_goals?: number
          name?: string
          next_level?: number | null
        }
        Relationships: [
          {
            foreignKeyName: "levels_next_level_fkey"
            columns: ["next_level"]
            isOneToOne: false
            referencedRelation: "levels"
            referencedColumns: ["id"]
          }
        ]
      }
      teams: {
        Row: {
          created_at: string | null
          id: number
          logo: string | null
          name: string | null
          primary_color: string | null
          secondary_color: string | null
        }
        Insert: {
          created_at?: string | null
          id?: number
          logo?: string | null
          name?: string | null
          primary_color?: string | null
          secondary_color?: string | null
        }
        Update: {
          created_at?: string | null
          id?: number
          logo?: string | null
          name?: string | null
          primary_color?: string | null
          secondary_color?: string | null
        }
        Relationships: []
      }
      users: {
        Row: {
          defending: number
          dribbling: number
          full_name: string | null
          goals: number
          greens: number
          id: string
          level: number
          pace: number
          passing: number
          physical: number
          picture: string | null
          points: number
          shooting: number
          team: number | null
          updated_at: string | null
          username: string | null
          vip: string | null
        }
        Insert: {
          defending?: number
          dribbling?: number
          full_name?: string | null
          goals?: number
          greens?: number
          id: string
          level?: number
          pace?: number
          passing?: number
          physical?: number
          picture?: string | null
          points?: number
          shooting?: number
          team?: number | null
          updated_at?: string | null
          username?: string | null
          vip?: string | null
        }
        Update: {
          defending?: number
          dribbling?: number
          full_name?: string | null
          goals?: number
          greens?: number
          id?: string
          level?: number
          pace?: number
          passing?: number
          physical?: number
          picture?: string | null
          points?: number
          shooting?: number
          team?: number | null
          updated_at?: string | null
          username?: string | null
          vip?: string | null
        }
        Relationships: [
          {
            foreignKeyName: "users_id_fkey"
            columns: ["id"]
            isOneToOne: true
            referencedRelation: "users"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_level_fkey"
            columns: ["level"]
            isOneToOne: false
            referencedRelation: "levels"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_team_fkey"
            columns: ["team"]
            isOneToOne: false
            referencedRelation: "teams"
            referencedColumns: ["id"]
          },
          {
            foreignKeyName: "users_vip_fkey"
            columns: ["vip"]
            isOneToOne: false
            referencedRelation: "vips"
            referencedColumns: ["id"]
          }
        ]
      }
      vips: {
        Row: {
          created_at: string
          id: string
          type: string
          until: string
        }
        Insert: {
          created_at?: string
          id?: string
          type: string
          until: string
        }
        Update: {
          created_at?: string
          id?: string
          type?: string
          until?: string
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      daily_ranking: {
        Args: Record<PropertyKey, never>
        Returns: {
          goalcount: number
          userid: string
          username: string
          teamid: number
          logo: string
          level: number
        }[]
      }
      get_team_goals: {
        Args: Record<PropertyKey, never>
        Returns: {
          id: number
          name: string
          team_goals: number
          logo: string
        }[]
      }
      hourly_ranking: {
        Args: Record<PropertyKey, never>
        Returns: {
          goalcount: number
          userid: string
          username: string
          teamid: number
          logo: string
          level: number
        }[]
      }
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

export type Tables<
  PublicTableNameOrOptions extends
    | keyof (Database["public"]["Tables"] & Database["public"]["Views"])
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
        Database[PublicTableNameOrOptions["schema"]]["Views"])
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? (Database[PublicTableNameOrOptions["schema"]]["Tables"] &
      Database[PublicTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : PublicTableNameOrOptions extends keyof (Database["public"]["Tables"] &
      Database["public"]["Views"])
  ? (Database["public"]["Tables"] &
      Database["public"]["Views"])[PublicTableNameOrOptions] extends {
      Row: infer R
    }
    ? R
    : never
  : never

export type TablesInsert<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Insert: infer I
    }
    ? I
    : never
  : never

export type TablesUpdate<
  PublicTableNameOrOptions extends
    | keyof Database["public"]["Tables"]
    | { schema: keyof Database },
  TableName extends PublicTableNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicTableNameOrOptions["schema"]]["Tables"]
    : never = never
> = PublicTableNameOrOptions extends { schema: keyof Database }
  ? Database[PublicTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : PublicTableNameOrOptions extends keyof Database["public"]["Tables"]
  ? Database["public"]["Tables"][PublicTableNameOrOptions] extends {
      Update: infer U
    }
    ? U
    : never
  : never

export type Enums<
  PublicEnumNameOrOptions extends
    | keyof Database["public"]["Enums"]
    | { schema: keyof Database },
  EnumName extends PublicEnumNameOrOptions extends { schema: keyof Database }
    ? keyof Database[PublicEnumNameOrOptions["schema"]]["Enums"]
    : never = never
> = PublicEnumNameOrOptions extends { schema: keyof Database }
  ? Database[PublicEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : PublicEnumNameOrOptions extends keyof Database["public"]["Enums"]
  ? Database["public"]["Enums"][PublicEnumNameOrOptions]
  : never
