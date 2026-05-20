export type Json = string | number | boolean | null | { [key: string]: Json | undefined } | Json[];

export type Database = {
  public: {
    Tables: {
      contact_messages: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string | null;
          company: string | null;
          message: string;
          source: string | null;
          created_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone?: string | null;
          company?: string | null;
          message: string;
          source?: string | null;
          created_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["contact_messages"]["Insert"]>;
        Relationships: [];
      };
      quote_requests: {
        Row: {
          id: string;
          full_name: string;
          email: string;
          phone: string;
          company: string | null;
          service_type: Database["public"]["Enums"]["service_type"];
          project_type: Database["public"]["Enums"]["project_type"];
          location: string;
          shoot_date: string | null;
          budget_range: string | null;
          message: string | null;
          status: Database["public"]["Enums"]["request_status"];
          created_at: string;
          updated_at: string;
        };
        Insert: {
          id?: string;
          full_name: string;
          email: string;
          phone: string;
          company?: string | null;
          service_type: Database["public"]["Enums"]["service_type"];
          project_type: Database["public"]["Enums"]["project_type"];
          location: string;
          shoot_date?: string | null;
          budget_range?: string | null;
          message?: string | null;
          status?: Database["public"]["Enums"]["request_status"];
          created_at?: string;
          updated_at?: string;
        };
        Update: Partial<Database["public"]["Tables"]["quote_requests"]["Insert"]>;
        Relationships: [];
      };
      service_catalog: {
        Row: {
          id: string;
          slug: string;
          name: string;
          description: string;
          active: boolean;
          sort_order: number;
        };
        Insert: {
          id?: string;
          slug: string;
          name: string;
          description: string;
          active?: boolean;
          sort_order?: number;
        };
        Update: Partial<Database["public"]["Tables"]["service_catalog"]["Insert"]>;
        Relationships: [];
      };
    };
    Views: Record<string, never>;
    Functions: Record<string, never>;
    Enums: {
      project_type: "real_estate" | "construction" | "corporate" | "tourism" | "event" | "inspection" | "other";
      request_status: "new" | "qualified" | "quoted" | "scheduled" | "won" | "lost";
      service_type: "aerial_video" | "aerial_photo" | "fpv_tour" | "mapping" | "inspection" | "editing_package";
    };
    CompositeTypes: Record<string, never>;
  };
};
