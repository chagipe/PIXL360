import { quoteRequestSchema } from "@/server/schemas/quote.schema";
import { createQuoteRequest, listActiveServices } from "@/server/repositories/quote.repository";

export async function submitQuoteRequest(payload: unknown) {
  const input = quoteRequestSchema.parse(payload);
  const quote = await createQuoteRequest(input);

  return {
    id: quote.id,
    status: quote.status,
    createdAt: quote.created_at
  };
}

export async function getServiceCatalog() {
  return listActiveServices();
}

