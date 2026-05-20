import { z } from "zod";

const optionalText = z.string().trim().min(1).max(120).optional();

export const contactMessageSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: optionalText,
  company: optionalText,
  message: z.string().trim().min(10).max(2000),
  source: optionalText
});

export type ContactMessageInput = z.infer<typeof contactMessageSchema>;

