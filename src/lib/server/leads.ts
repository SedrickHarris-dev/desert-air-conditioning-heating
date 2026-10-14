import { validateLead } from "@/validation/lead";

// Runtime-agnostic lead handler (Web standard Request/Response). Used by the
// Cloudflare Pages Function in functions/api/leads.ts. Secrets arrive via `env`
// and never reach client-side code.
export interface LeadEnv {
  LEAD_WEBHOOK_URL?: string;
}

const redirect = (req: Request, path: string) =>
  Response.redirect(new URL(path, req.url).toString(), 303);

export async function handleLeadPost(req: Request, env: LeadEnv): Promise<Response> {
  const form = await req.formData();

  // Honeypot: bots fill the hidden field. Pretend success.
  if (form.get("website")) return redirect(req, "/thank-you/");

  const result = validateLead(form);
  if (!result.ok) return redirect(req, "/contact/?error=invalid");

  // With no webhook configured (local demo), the lead is validated and
  // acknowledged but not forwarded anywhere.
  const webhook = env.LEAD_WEBHOOK_URL;
  if (webhook) {
    try {
      const res = await fetch(webhook, {
        method: "POST",
        headers: { "content-type": "application/json" },
        body: JSON.stringify({
          ...result.data,
          submittedAt: new Date().toISOString(),
        }),
      });
      if (!res.ok) console.error("Lead webhook responded", res.status);
    } catch (err) {
      console.error("Lead webhook failed", err);
    }
  }

  return redirect(req, "/thank-you/");
}
