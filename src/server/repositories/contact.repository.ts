import { createSupabaseAdminClient } from "@/lib/supabase/server";
import type { ContactMessageInput } from "@/server/schemas/contact.schema";

export async function createContactMessage(input: ContactMessageInput) {
  const supabase = createSupabaseAdminClient();

  const { data, error } = await supabase
    .from("contact_messages")
    .insert({
      full_name: input.fullName,
      email: input.email,
      phone: input.phone ?? null,
      company: input.company ?? null,
      message: input.message,
      source: input.source ?? null
    })
    .select("id, created_at")
    .single();

  if (error) {
    throw error;
  }

  return data;
}

