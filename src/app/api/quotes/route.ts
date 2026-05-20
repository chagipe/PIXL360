import { created, fail } from "@/lib/http";
import { submitQuoteRequest } from "@/server/services/quote.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await submitQuoteRequest(body);

    return created(data);
  } catch (error) {
    return fail(error);
  }
}

