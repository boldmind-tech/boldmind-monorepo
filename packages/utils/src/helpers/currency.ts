// packages/utils/src/helpers/currency.ts
/**
 * Format amount to Nigerian Naira
 */
export function formatNaira(amount: number, includeSymbol: boolean = true): string {
  const formatted = new Intl.NumberFormat('en-NG', {
    minimumFractionDigits: 0,
    maximumFractionDigits: 2,
  }).format(amount);

  return includeSymbol ? `₦${formatted}` : formatted;
}

/**
 * Convert kobo to naira
 */
export function koboToNaira(kobo: number): number {
  return kobo / 100;
}

/**
 * Convert naira to kobo (for Paystack)
 */
export function nairaToKobo(naira: number): number {
  return Math.round(naira * 100);
}

/**
 * Format price for display
 */
export function formatPrice(amount: number, currency: 'NGN' | 'USD' = 'NGN'): string {
  if (currency === 'NGN') {
    return formatNaira(amount);
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency: 'USD',
  }).format(amount);
}
