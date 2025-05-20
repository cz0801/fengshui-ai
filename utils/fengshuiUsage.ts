// utils/fengshuiUsage.ts

const STORAGE_KEY = 'fengshui_used_at';

/**
 * Check if the Feng Shui feature has been used today.
 * @returns boolean - true if used today, false otherwise
 */
export function hasUsedToday(): boolean {
  const lastUsed = localStorage.getItem(STORAGE_KEY);
  if (!lastUsed) return false;

  const lastDate = new Date(lastUsed);
  const today = new Date();

  return (
    lastDate.getFullYear() === today.getFullYear() &&
    lastDate.getMonth() === today.getMonth() &&
    lastDate.getDate() === today.getDate()
  );
}

/**
 * Mark the Feng Shui feature as used for today.
 */
export function setUsedToday(): void {
  localStorage.setItem(STORAGE_KEY, new Date().toISOString());
}