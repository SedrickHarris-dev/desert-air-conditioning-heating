// Placeholder: inbound webhooks (e.g. from GHL) are not implemented yet.
// Reject rather than accept unauthenticated payloads.
export const onRequestPost: PagesFunction = () =>
  Response.json({ error: "Not implemented" }, { status: 501 });
