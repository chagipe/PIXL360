import { contactMessageSchema } from "@/server/schemas/contact.schema";
import { createContactMessage } from "@/server/repositories/contact.repository";

export async function submitContactMessage(payload: unknown) {
  const input = contactMessageSchema.parse(payload);
  const message = await createContactMessage(input);

  return {
    id: message.id,
    createdAt: message.created_at
  };
}

