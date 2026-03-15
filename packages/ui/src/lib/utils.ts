// packages/ui/src/lib/utils.ts
// SINGLE SOURCE OF TRUTH: Only UI-specific utilities live here.
// All general utilities (formatCurrency, formatDate, etc.) are imported from @boldmind/utils.

import { type ClassValue, clsx } from 'clsx';
import { twMerge } from 'tailwind-merge';

// ============================================================
// cn() — The correct, Tailwind-aware class merger.
// This is the ONE place cn() is defined. Uses clsx + tailwind-merge
// to properly handle Tailwind class conflicts (e.g. "p-2 p-4" → "p-4").
// DO NOT redefine this in @boldmind/utils.
// ============================================================
export function cn(...inputs: ClassValue[]) {
  return twMerge(clsx(inputs));
}

// ============================================================
// Re-export canonical utilities from @boldmind/utils
// so @boldmind/ui consumers don't need to add another dependency.
// ============================================================
export {
  formatCurrency,
  formatDate,
  truncateText,
  detectCurrentProduct,
  getProductFromPath,
  getProductThemeClass,
  getProductColors as getProductThemeColors, // aliased for backwards-compat
} from '@boldmind/utils';

// ============================================================
// UI-specific helpers (not duplicated elsewhere)
// ============================================================

/**
 * Inject a minimal CSS @keyframes spin rule once into the document head.
 * Used by LoadingSpinner — avoids needing a full CSS file for one animation.
 */
let styleAdded = false;
export function addSpinnerAnimation() {
  if (typeof window !== 'undefined' && !styleAdded) {
    const style = document.createElement('style');
    style.textContent = `
      @keyframes spin {
        0% { transform: rotate(0deg); }
        100% { transform: rotate(360deg); }
      }
    `;
    document.head.appendChild(style);
    styleAdded = true;
  }
}

/**
 * Returns a theme-detection function scoped to a specific product/app.
 * Used by SuperNavbar to avoid the UI package needing window.location itself.
 */
export function detectProductForTheme(): string {
  if (typeof window === 'undefined') return 'boldmind-hub';

  const hostname = window.location.hostname;
  const pathname = window.location.pathname;

  const domainMap: Record<string, string> = {
    'boldmind.ng': 'boldmind-hub',
    'www.boldmind.ng': 'boldmind-hub',
    'amebogist.ng': 'amebogist',
    'www.amebogist.ng': 'amebogist',
    'educenter.com.ng': 'educenter',
    'www.educenter.com.ng': 'educenter',
    'os.boldmind.ng': 'boldmind-os',
    'planai.boldmind.ng': 'planai-suite',
    'fit.boldmind.ng': 'naija-fither',
    'email.boldmind.ng': 'emailscraper-pro',
    'social.boldmind.ng': 'social-factory',
    'safe.boldmind.ng': 'safe-ai',
    'hustle.boldmind.ng': 'afrohustle-os',
    'gig.educenter.com.ng': 'naijagig-matcher',
    'kolo.boldmind.ng': 'kolo-ai',
    'border.boldmind.ng': 'borderless-remit',
    'receipt.boldmind.ng': 'receipt-genius',
    'power.boldmind.ng': 'power-alert',
    'farm.boldmind.ng': 'farmgate-direct',
    'copy.amebogist.ng': 'afrocopy-ai',
    'skills.educenter.com.ng': 'skill2cash',
    'anon.amebogist.ng': 'anontruth-mic',
  };

  if (domainMap[hostname]) return domainMap[hostname];

  // Pathname-based detection for local dev (e.g. /educenter, /boldmind-os)
  const knownProducts = [
    'amebogist', 'educenter', 'planai-suite', 'boldmind-os',
    'naija-fither', 'emailscraper-pro', 'safe-ai', 'social-factory',
  ];
  for (const product of knownProducts) {
    if (pathname.startsWith(`/${product}`)) return product;
  }

  return 'boldmind-hub';
}