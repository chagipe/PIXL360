import type { Database } from "@/types/database";

export type ServiceType = Database["public"]["Enums"]["service_type"];
export type ProjectType = Database["public"]["Enums"]["project_type"];

export type QuoteRequestDto = {
  fullName: string;
  email: string;
  phone: string;
  company?: string;
  serviceType: ServiceType;
  projectType: ProjectType;
  location: string;
  shootDate?: string;
  budgetRange?: string;
  message?: string;
};

export type ContactMessageDto = {
  fullName: string;
  email: string;
  phone?: string;
  company?: string;
  message: string;
  source?: string;
};

