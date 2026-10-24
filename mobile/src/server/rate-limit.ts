/**
 * Best-effort limit on the number of requests per client IP, to slow down abuse of the routes that call Claude.
 *
 * The counters live in the memory of one server instance: on EAS Hosting (Cloudflare Workers) each instance keeps
 * its own and they reset when it restarts, so a determined client can get somewhat more than the limit. The real
 * cap on cost is the monthly spending limit set in the Anthropic console.
 */

export type RateLimit = { name: string; maxRequests: number };

/** Every limit counts requests over the same fixed window. */
const WINDOW_MS = 10 * 60 * 1000;
/** Keeps the counters' memory bounded. */
const MAX_TRACKED_CLIENTS = 10_000;

export const MENTOR_LIMIT: RateLimit = { name: 'mentor', maxRequests: 20 };
export const QUIZ_LIMIT: RateLimit = { name: 'quiz', maxRequests: 10 };

const windows = new Map<string, { start: number; count: number }>();

/**
 * Counts the request and returns the number of seconds to wait when the limit is reached, otherwise null.
 * EAS Hosting sets X-Real-IP on every request; without it (the local dev server), nothing is limited.
 */
export function checkRateLimit(request: Request, limit: RateLimit, now = Date.now()): number | null {
  const ip = request.headers.get('x-real-ip');
  if (!ip) {
    return null;
  }

  const key = `${limit.name}:${ip}`;
  let window = windows.get(key);
  if (!window || now - window.start >= WINDOW_MS) {
    if (windows.size >= MAX_TRACKED_CLIENTS) {
      for (const [otherKey, other] of windows) {
        if (now - other.start >= WINDOW_MS) {
          windows.delete(otherKey);
        }
      }
      // Still full of recent clients: start over rather than grow without bound.
      if (windows.size >= MAX_TRACKED_CLIENTS) {
        windows.clear();
      }
    }
    window = { start: now, count: 0 };
    windows.set(key, window);
  }

  window.count += 1;
  return window.count > limit.maxRequests ? Math.ceil((window.start + WINDOW_MS - now) / 1000) : null;
}

/** The 429 response, with the user-facing message in the request's language. */
export function rateLimitedResponse(message: string, retryAfterSeconds: number) {
  return Response.json({ error: message }, { status: 429, headers: { 'Retry-After': String(retryAfterSeconds) } });
}
