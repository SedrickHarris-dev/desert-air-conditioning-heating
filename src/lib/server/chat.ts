import { scriptedAnswer } from "@/lib/chat/scripted";

// Scripted demo endpoint: returns canned answers by intent id. No model call.
export async function handleChatPost(req: Request): Promise<Response> {
  const body = (await req.json().catch(() => null)) as { intent?: unknown } | null;
  const answer =
    typeof body?.intent === "string" ? scriptedAnswer(body.intent) : null;
  if (!answer) return Response.json({ error: "Unknown intent" }, { status: 400 });
  return Response.json({ answer });
}
