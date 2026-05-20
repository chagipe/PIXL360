import { z } from "zod";

export const serviceTypeSchema = z.enum([
  "aerial_video",
  "aerial_photo",
  "fpv_tour",
  "mapping",
  "inspection",
  "editing_package"
]);

export const projectTypeSchema = z.enum([
  "real_estate",
  "construction",
  "corporate",
  "tourism",
  "event",
  "inspection",
  "other"
]);

const optionalText = z.string().trim().min(1).max(160).optional();

export const quoteRequestSchema = z.object({
  fullName: z.string().trim().min(2).max(120),
  email: z.string().trim().email().max(180),
  phone: z.string().trim().min(7).max(40),
  company: optionalText,
  serviceType: serviceTypeSchema,
  projectType: projectTypeSchema,
  location: z.string().trim().min(3).max(180),
  shootDate: z.string().date().optional(),
  budgetRange: optionalText,
  message: z.string().trim().min(5).max(2000).optional()
});

export type QuoteRequestInput = z.infer<typeof quoteRequestSchema>;

