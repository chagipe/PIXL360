import { fail, ok } from "@/lib/http";
import { getServiceCatalog } from "@/server/services/quote.service";

export async function GET() {
  try {
    const data = await getServiceCatalog();

    return ok(data);
  } catch (error) {
    return fail(error);
  }
}

