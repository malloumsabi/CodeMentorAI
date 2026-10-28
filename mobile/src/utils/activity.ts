/** Lessons completed per local day, keyed by "YYYY-MM-DD". */
export type Activity = Record<string, number>;

/** The local calendar day of `date`, e.g. "2026-10-28". */
export function toDayKey(date: Date): string {
  const month = String(date.getMonth() + 1).padStart(2, '0');
  const day = String(date.getDate()).padStart(2, '0');
  return `${date.getFullYear()}-${month}-${day}`;
}

/**
 * Days in a row with at least one lesson, ending today. A streak stays alive until the end of
 * the day after its last lesson, so it counts from yesterday when nothing is done yet today.
 */
export function getStreak(activity: Activity, today = new Date()): number {
  const day = new Date(today.getFullYear(), today.getMonth(), today.getDate());
  if (!activity[toDayKey(day)]) {
    day.setDate(day.getDate() - 1);
  }
  let streak = 0;
  while (activity[toDayKey(day)]) {
    streak += 1;
    day.setDate(day.getDate() - 1);
  }
  return streak;
}
