import { handleLeadPost, type LeadEnv } from "../../src/lib/server/leads";

export const onRequestPost: PagesFunction<LeadEnv> = ({ request, env }) =>
  handleLeadPost(request, env);
