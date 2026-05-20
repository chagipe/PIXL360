import { created, fail } from "@/lib/http";
import { submitContactMessage } from "@/server/services/contact.service";

export async function POST(request: Request) {
  try {
    const body = await request.json();
    const data = await submitContactMessage(body);

    return created(data);
  } catch (error) {
    return fail(error);
  }
}

