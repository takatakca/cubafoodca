export type Json =
  | string
  | number
  | boolean
  | null
  | { [key: string]: Json | undefined }
  | Json[]

export type Database = {
  // Allows to automatically instantiate createClient with right options
  // instead of createClient<Database, { PostgrestVersion: 'XX' }>(URL, KEY)
  __InternalSupabase: {
    PostgrestVersion: "14.15"
  }
  public: {
    Tables: {
      donation_interest: {
        Row: {
          amount_interest: string | null
          contribution_category: string
          country: string | null
          created_at: string
          currency: string
          email: string | null
          id: string
          message: string | null
          name: string
          organization: string | null
          phone: string | null
          recurring_interest: boolean
          source_page: string
          status: string
          whatsapp: string | null
        }
        Insert: {
          amount_interest?: string | null
          contribution_category?: string
          country?: string | null
          created_at?: string
          currency?: string
          email?: string | null
          id?: string
          message?: string | null
          name?: string
          organization?: string | null
          phone?: string | null
          recurring_interest?: boolean
          source_page?: string
          status?: string
          whatsapp?: string | null
        }
        Update: {
          amount_interest?: string | null
          contribution_category?: string
          country?: string | null
          created_at?: string
          currency?: string
          email?: string | null
          id?: string
          message?: string | null
          name?: string
          organization?: string | null
          phone?: string | null
          recurring_interest?: boolean
          source_page?: string
          status?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      farmer_registrations: {
        Row: {
          collaboration_interest: string | null
          cooperative_name: string | null
          created_at: string
          crops: string | null
          current_needs: string | null
          email: string | null
          equipment: string | null
          farm_type: string | null
          id: string
          irrigation: string | null
          message: string | null
          municipality: string | null
          name: string
          phone: string | null
          province: string | null
          status: string
          storage: string | null
          transport: string | null
          whatsapp: string | null
        }
        Insert: {
          collaboration_interest?: string | null
          cooperative_name?: string | null
          created_at?: string
          crops?: string | null
          current_needs?: string | null
          email?: string | null
          equipment?: string | null
          farm_type?: string | null
          id?: string
          irrigation?: string | null
          message?: string | null
          municipality?: string | null
          name?: string
          phone?: string | null
          province?: string | null
          status?: string
          storage?: string | null
          transport?: string | null
          whatsapp?: string | null
        }
        Update: {
          collaboration_interest?: string | null
          cooperative_name?: string | null
          created_at?: string
          crops?: string | null
          current_needs?: string | null
          email?: string | null
          equipment?: string | null
          farm_type?: string | null
          id?: string
          irrigation?: string | null
          message?: string | null
          municipality?: string | null
          name?: string
          phone?: string | null
          province?: string | null
          status?: string
          storage?: string | null
          transport?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      newsletter_subscribers: {
        Row: {
          active: boolean
          country: string | null
          created_at: string
          email: string
          id: string
          name: string | null
          preferred_language: string
          source_page: string
        }
        Insert: {
          active?: boolean
          country?: string | null
          created_at?: string
          email: string
          id?: string
          name?: string | null
          preferred_language?: string
          source_page?: string
        }
        Update: {
          active?: boolean
          country?: string | null
          created_at?: string
          email?: string
          id?: string
          name?: string | null
          preferred_language?: string
          source_page?: string
        }
        Relationships: []
      }
      participants: {
        Row: {
          agricultural_experience: string | null
          availability: string | null
          city: string | null
          contribution_types: string[]
          country: string
          created_at: string
          driver_license: string | null
          email: string | null
          equipment_offered: string | null
          first_name: string
          id: string
          last_name: string
          machinery_experience: string | null
          message: string | null
          municipality: string | null
          organization: string | null
          participant_type: string
          phone: string | null
          preferred_language: string
          profession: string | null
          province: string | null
          skills: string | null
          source_page: string
          status: string
          support_requested: string | null
          updated_at: string
          whatsapp: string | null
        }
        Insert: {
          agricultural_experience?: string | null
          availability?: string | null
          city?: string | null
          contribution_types?: string[]
          country?: string
          created_at?: string
          driver_license?: string | null
          email?: string | null
          equipment_offered?: string | null
          first_name: string
          id?: string
          last_name?: string
          machinery_experience?: string | null
          message?: string | null
          municipality?: string | null
          organization?: string | null
          participant_type?: string
          phone?: string | null
          preferred_language?: string
          profession?: string | null
          province?: string | null
          skills?: string | null
          source_page?: string
          status?: string
          support_requested?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Update: {
          agricultural_experience?: string | null
          availability?: string | null
          city?: string | null
          contribution_types?: string[]
          country?: string
          created_at?: string
          driver_license?: string | null
          email?: string | null
          equipment_offered?: string | null
          first_name?: string
          id?: string
          last_name?: string
          machinery_experience?: string | null
          message?: string | null
          municipality?: string | null
          organization?: string | null
          participant_type?: string
          phone?: string | null
          preferred_language?: string
          profession?: string | null
          province?: string | null
          skills?: string | null
          source_page?: string
          status?: string
          support_requested?: string | null
          updated_at?: string
          whatsapp?: string | null
        }
        Relationships: []
      }
      partner_inquiries: {
        Row: {
          city: string | null
          company: string
          contact_name: string
          contribution_types: string[]
          country: string | null
          created_at: string
          email: string | null
          equipment_description: string | null
          expertise_description: string | null
          id: string
          industry: string | null
          message: string | null
          phone: string | null
          province: string | null
          source_page: string
          status: string
          website: string | null
          whatsapp: string | null
        }
        Insert: {
          city?: string | null
          company?: string
          contact_name?: string
          contribution_types?: string[]
          country?: string | null
          created_at?: string
          email?: string | null
          equipment_description?: string | null
          expertise_description?: string | null
          id?: string
          industry?: string | null
          message?: string | null
          phone?: string | null
          province?: string | null
          source_page?: string
          status?: string
          website?: string | null
          whatsapp?: string | null
        }
        Update: {
          city?: string | null
          company?: string
          contact_name?: string
          contribution_types?: string[]
          country?: string | null
          created_at?: string
          email?: string | null
          equipment_description?: string | null
          expertise_description?: string | null
          id?: string
          industry?: string | null
          message?: string | null
          phone?: string | null
          province?: string | null
          source_page?: string
          status?: string
          website?: string | null
          whatsapp?: string | null
        }
        Relationships: []
      }
      project_geo_points: {
        Row: {
          created_at: string
          description: string | null
          id: string
          latitude: number | null
          longitude: number | null
          name: string
          project_id: string
          public_visibility: boolean
          type: string
          updated_at: string
          verification_status: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name: string
          project_id?: string
          public_visibility?: boolean
          type?: string
          updated_at?: string
          verification_status?: string
        }
        Update: {
          created_at?: string
          description?: string | null
          id?: string
          latitude?: number | null
          longitude?: number | null
          name?: string
          project_id?: string
          public_visibility?: boolean
          type?: string
          updated_at?: string
          verification_status?: string
        }
        Relationships: []
      }
      project_land_zones: {
        Row: {
          created_at: string
          crop_type: string | null
          description: string | null
          development_stage: string | null
          geojson: Json | null
          id: string
          name: string
          project_id: string
          public_visibility: boolean
          status: string
          updated_at: string
        }
        Insert: {
          created_at?: string
          crop_type?: string | null
          description?: string | null
          development_stage?: string | null
          geojson?: Json | null
          id?: string
          name: string
          project_id?: string
          public_visibility?: boolean
          status?: string
          updated_at?: string
        }
        Update: {
          created_at?: string
          crop_type?: string | null
          description?: string | null
          development_stage?: string | null
          geojson?: Json | null
          id?: string
          name?: string
          project_id?: string
          public_visibility?: boolean
          status?: string
          updated_at?: string
        }
        Relationships: []
      }
      project_streams: {
        Row: {
          created_at: string
          description: string | null
          ended_at: string | null
          id: string
          is_public: boolean
          location_name: string | null
          playback_url: string | null
          poster_image: string | null
          project_id: string
          provider: string | null
          requires_membership: boolean
          started_at: string | null
          status: string
          stream_type: string
          title: string
        }
        Insert: {
          created_at?: string
          description?: string | null
          ended_at?: string | null
          id?: string
          is_public?: boolean
          location_name?: string | null
          playback_url?: string | null
          poster_image?: string | null
          project_id?: string
          provider?: string | null
          requires_membership?: boolean
          started_at?: string | null
          status?: string
          stream_type?: string
          title: string
        }
        Update: {
          created_at?: string
          description?: string | null
          ended_at?: string | null
          id?: string
          is_public?: boolean
          location_name?: string | null
          playback_url?: string | null
          poster_image?: string | null
          project_id?: string
          provider?: string | null
          requires_membership?: boolean
          started_at?: string | null
          status?: string
          stream_type?: string
          title?: string
        }
        Relationships: []
      }
      volunteer_interest: {
        Row: {
          availability: string | null
          country: string | null
          created_at: string
          email: string | null
          first_name: string
          id: string
          languages: string | null
          last_name: string | null
          location: string | null
          message: string | null
          phone: string | null
          professional_background: string | null
          skills: string | null
          status: string
          volunteer_categories: string[]
          whatsapp: string | null
        }
        Insert: {
          availability?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          first_name?: string
          id?: string
          languages?: string | null
          last_name?: string | null
          location?: string | null
          message?: string | null
          phone?: string | null
          professional_background?: string | null
          skills?: string | null
          status?: string
          volunteer_categories?: string[]
          whatsapp?: string | null
        }
        Update: {
          availability?: string | null
          country?: string | null
          created_at?: string
          email?: string | null
          first_name?: string
          id?: string
          languages?: string | null
          last_name?: string | null
          location?: string | null
          message?: string | null
          phone?: string | null
          professional_background?: string | null
          skills?: string | null
          status?: string
          volunteer_categories?: string[]
          whatsapp?: string | null
        }
        Relationships: []
      }
    }
    Views: {
      [_ in never]: never
    }
    Functions: {
      [_ in never]: never
    }
    Enums: {
      [_ in never]: never
    }
    CompositeTypes: {
      [_ in never]: never
    }
  }
}

type DatabaseWithoutInternals = Omit<Database, "__InternalSupabase">

type DefaultSchema = DatabaseWithoutInternals[Extract<keyof Database, "public">]

export type Tables<
  DefaultSchemaTableNameOrOptions extends
    | keyof (DefaultSchema["Tables"] & DefaultSchema["Views"])
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
        DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? (DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"] &
      DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Views"])[TableName] extends {
      Row: infer R
    }
    ? R
    : never
  : DefaultSchemaTableNameOrOptions extends keyof (DefaultSchema["Tables"] &
        DefaultSchema["Views"])
    ? (DefaultSchema["Tables"] &
        DefaultSchema["Views"])[DefaultSchemaTableNameOrOptions] extends {
        Row: infer R
      }
      ? R
      : never
    : never

export type TablesInsert<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Insert: infer I
    }
    ? I
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Insert: infer I
      }
      ? I
      : never
    : never

export type TablesUpdate<
  DefaultSchemaTableNameOrOptions extends
    | keyof DefaultSchema["Tables"]
    | { schema: keyof DatabaseWithoutInternals },
  TableName extends DefaultSchemaTableNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"]
    : never = never,
> = DefaultSchemaTableNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaTableNameOrOptions["schema"]]["Tables"][TableName] extends {
      Update: infer U
    }
    ? U
    : never
  : DefaultSchemaTableNameOrOptions extends keyof DefaultSchema["Tables"]
    ? DefaultSchema["Tables"][DefaultSchemaTableNameOrOptions] extends {
        Update: infer U
      }
      ? U
      : never
    : never

export type Enums<
  DefaultSchemaEnumNameOrOptions extends
    | keyof DefaultSchema["Enums"]
    | { schema: keyof DatabaseWithoutInternals },
  EnumName extends DefaultSchemaEnumNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"]
    : never = never,
> = DefaultSchemaEnumNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[DefaultSchemaEnumNameOrOptions["schema"]]["Enums"][EnumName]
  : DefaultSchemaEnumNameOrOptions extends keyof DefaultSchema["Enums"]
    ? DefaultSchema["Enums"][DefaultSchemaEnumNameOrOptions]
    : never

export type CompositeTypes<
  PublicCompositeTypeNameOrOptions extends
    | keyof DefaultSchema["CompositeTypes"]
    | { schema: keyof DatabaseWithoutInternals },
  CompositeTypeName extends PublicCompositeTypeNameOrOptions extends {
    schema: keyof DatabaseWithoutInternals
  }
    ? keyof DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"]
    : never = never,
> = PublicCompositeTypeNameOrOptions extends {
  schema: keyof DatabaseWithoutInternals
}
  ? DatabaseWithoutInternals[PublicCompositeTypeNameOrOptions["schema"]]["CompositeTypes"][CompositeTypeName]
  : PublicCompositeTypeNameOrOptions extends keyof DefaultSchema["CompositeTypes"]
    ? DefaultSchema["CompositeTypes"][PublicCompositeTypeNameOrOptions]
    : never

export const Constants = {
  public: {
    Enums: {},
  },
} as const
