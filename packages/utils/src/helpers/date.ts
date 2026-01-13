import { format, formatDistanceToNow, isAfter, addMonths } from 'date-fns';

/**
 * Format date to readable string
 */
export function formatDate(date: Date | string, formatStr: string = 'MMM d, yyyy'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return format(d, formatStr);
}

/**
 * Get relative time (e.g., "2 hours ago")
 */
export function getRelativeTime(date: Date | string): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return formatDistanceToNow(d, { addSuffix: true });
}

/**
 * Check if subscription is active
 */
export function isSubscriptionActive(expiresAt: Date | string | null): boolean {
  if (!expiresAt) return true; // Lifetime subscription
  const expiry = typeof expiresAt === 'string' ? new Date(expiresAt) : expiresAt;
  return isAfter(expiry, new Date());
}

/**
 * Calculate expiry date
 */
export function calculateExpiryDate(months: number): Date {
  return addMonths(new Date(), months);
}

/**
 * Get days until expiry
 */
export function getDaysUntilExpiry(expiresAt: Date | string): number {
  const expiry = typeof expiresAt === 'string' ? new Date(expiresAt) : expiresAt;
  const now = new Date();
  const diff = expiry.getTime() - now.getTime();
  return Math.ceil(diff / (1000 * 60 * 60 * 24));
}