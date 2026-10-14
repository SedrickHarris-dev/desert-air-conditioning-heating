// Minimal Cloudflare Pages Functions types so no extra dependency is needed.
// Replace with `@cloudflare/workers-types` if functions grow more complex.
interface EventContext<Env> {
  request: Request;
  env: Env;
}
type PagesFunction<Env = Record<string, unknown>> = (
  context: EventContext<Env>,
) => Response | Promise<Response>;
