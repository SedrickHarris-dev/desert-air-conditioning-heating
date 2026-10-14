// Server-side only. Secrets are read from environment variables in route
// handlers and never shipped to the client.
export const integrations = {
  leadWebhookEnvVar: "LEAD_WEBHOOK_URL",
} as const;
