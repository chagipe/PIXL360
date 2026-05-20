import { createSupabaseAdminClient } from "@/lib/supabase/server";
import type { QuoteRequestInput } from "@/server/schemas/quote.schema";

export async function createQuoteRequest(input: QuoteRequestInput) {
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase
    .from("quote_requests")
    .insert({
      full_name: input.fullName,
      email: input.email,
      phone: input.phone,
      company: input.company ?? null,
      service_type: input.serviceType,
      project_type: input.projectType,
      location: input.location,
      shoot_date: input.shootDate ?? null,
      budget_range: input.budgetRange ?? null,
      message: input.message ?? null
    })
    .select("id, status, created_at")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

export async function listActiveServices() {
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase
    .from("service_catalog")
    .select("slug, name, description")
    .eq("active", true)
    .order("sort_order", { ascending: true });

  if (error) {
    throw error;
  }

  return data;
}

