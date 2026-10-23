import Anthropic from '@anthropic-ai/sdk';

import type { Dictionary } from '@/i18n/fr';

/**
 * Server-only: the Claude client shared by the API routes.
 * Reads ANTHROPIC_API_KEY from the server environment (mobile/.env.local in development).
 */
export const claude = new Anthropic();

/** Turns a failed Claude call into a message the student can read. */
export function describeError(error: unknown, t: Dictionary): string {
  if (error instanceof Anthropic.AuthenticationError || error instanceof Anthropic.PermissionDeniedError) {
    return t.mentorErrors.keyRefused;
  }
  if (error instanceof Anthropic.RateLimitError) {
    return t.mentorErrors.rateLimited;
  }
  if (error instanceof Anthropic.APIConnectionError) {
    return t.mentorErrors.apiUnreachable;
  }
  if (error instanceof Anthropic.APIError) {
    console.error('Claude API error', error.status, error.message);
    return t.mentorErrors.apiError(String(error.status ?? '?'));
  }
  console.error('Server route error', error);
  return t.mentorErrors.unexpected;
}
