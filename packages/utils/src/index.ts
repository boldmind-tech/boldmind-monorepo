// PACKAGES/utils/src/index.ts
// COMPLETE BOLDMIND UTILS PACKAGE - FIXED

// ===================================
// PRODUCTS & CATALOG
// ===================================
export {
  BOLDMIND_PRODUCTS,
  type Product,
  type ProductStatus,
  type ProductCategory,
  type DatabaseType,
  type ProductStatusSummary,
  getProductById,
  getProductBySlug,
  getProductByDomain,
  getProductsByStatus,
  getProductsByCategory,
  getProductsByDatabase,
  getLiveProducts,
  getBuildingProducts,
  getPlannedProducts,
  getConceptProducts,
  calculateTotalMonthlyRevenue,
  calculateProjectedRevenue,
  getProductStatusSummary,
} from './constants/products';

// ===================================
// DATABASE CONFIGURATION
// ===================================
export {
  DATABASE_CONFIG,
  DB_CONNECTIONS,
  type DatabaseType as DBType,
  getProductDatabase,
  usesPostgres,
  usesMongoDB,
} from './constants/database-config';

// ===================================
// DOMAIN MAPPING & ROUTES
// ===================================
export {
  DOMAIN_MAPPINGS,
  type DomainMapping,
  getProductFromDomain,
  getDomainFromProduct,
  getDomainsByStatus,
  getAPIEndpoint,
  isLiveDomain,
} from './constants/domains';

// ===================================
// COLORS & THEMES
// ===================================
export {
  BOLDMIND_COLOR_SCHEMES,
  type ColorScheme,
  type ProductColorScheme,
  getColorScheme,
  getCategoryColorSchemes,
  generateCSSVariables,
  getContrastColor,
  generateThemeClasses,
  boldmindColors,
  boldmindTypography,
  boldmindAnimations,
  productThemes,
  type ProductTheme,
  type ProductThemeValue,
  getProductTheme,
  getProductColors,
  getProductThemeClass,
} from './styles/theme';

// ===================================
// UTILITY FUNCTIONS
// ===================================

/**
 * Detect current product from window.location
 */
export function detectCurrentProduct(): string | null {
  if (typeof window === 'undefined') return null;
  
  const hostname = window.location.hostname;
  const pathname = window.location.pathname;
  
  // Check for subdomain routes (PlanAI Suite)
  if (hostname.includes('planai.boldmind.ng')) {
    if (pathname.startsWith('/receptionist')) return 'ai-receptionist';
    if (pathname.startsWith('/credibility')) return 'credibility-hubs';
    if (pathname.startsWith('/planning')) return 'business-planning';
    if (pathname.startsWith('/finance')) return 'financial-forecasting';
    if (pathname.startsWith('/investor')) return 'investor-readiness';
    if (pathname.startsWith('/design')) return 'branding-design';
    if (pathname.startsWith('/store')) return 'digital-storefronts';
    if (pathname.startsWith('/marketing')) return 'marketing-automation';
    if (pathname.startsWith('/analytics')) return 'analytics-dashboard';
    return 'planai-suite';
  }
  
  // Map domains to products
  const domainMap: Record<string, string> = {
    'boldmind.ng': 'boldmind-hub',
    'www.boldmind.ng': 'boldmind-hub',
    'amebogist.ng': 'amebogist',
    'www.amebogist.ng': 'amebogist',
    'educenter.com.ng': 'educenter',
    'www.educenter.com.ng': 'educenter',
    'os.boldmind.ng': 'boldmind-os',
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
    'localhost': 'boldmind-hub',
    '127.0.0.1': 'boldmind-hub',
  };
  
  return domainMap[hostname] || 'boldmind-hub';
}

/**
 * Get product from path (for development)
 */
export function getProductFromPath(pathname: string): string {
  const segments = pathname.split('/').filter(Boolean);
  return segments[0] || 'boldmind-hub';
}

/**
 * Format currency (Nigerian Naira)
 */
export function formatCurrency(amount: number, currency: string = 'NGN'): string {
  if (currency === 'NGN') {
    return `₦${amount.toLocaleString('en-NG')}`;
  }
  return new Intl.NumberFormat('en-US', {
    style: 'currency',
    currency,
  }).format(amount);
}

/**
 * Format date
 */
export function formatDate(date: string | Date, format: 'short' | 'long' = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  
  if (format === 'long') {
    return d.toLocaleDateString('en-NG', {
      year: 'numeric',
      month: 'long',
      day: 'numeric',
    });
  }
  
  return d.toLocaleDateString('en-NG', {
    year: 'numeric',
    month: 'short',
    day: 'numeric',
  });
}

/**
 * Truncate text
 */
export function truncateText(text: string, maxLength: number = 100): string {
  if (text.length <= maxLength) return text;
  return text.slice(0, maxLength).trim() + '...';
}

/**
 * Class name utility (like clsx)
 */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/**
 * Sleep utility
 */
export function sleep(ms: number): Promise<void> {
  return new Promise(resolve => setTimeout(resolve, ms));
}

/**
 * Debounce function
 */
export function debounce<T extends (...args: any[]) => any>(
  func: T,
  wait: number
): (...args: Parameters<T>) => void {
  let timeout: NodeJS.Timeout;
  return (...args: Parameters<T>) => {
    clearTimeout(timeout);
    timeout = setTimeout(() => func(...args), wait);
  };
}

/**
 * Throttle function
 */
export function throttle<T extends (...args: any[]) => any>(
  func: T,
  limit: number
): (...args: Parameters<T>) => void {
  let inThrottle: boolean;
  return (...args: Parameters<T>) => {
    if (!inThrottle) {
      func(...args);
      inThrottle = true;
      setTimeout(() => (inThrottle = false), limit);
    }
  };
}

/**
 * Generate unique ID
 */
export function generateId(prefix: string = 'id'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
}

/**
 * Check if user is in Nigeria (based on timezone)
 */
export function isNigerianUser(): boolean {
  if (typeof window === 'undefined') return false;
  const timezone = Intl.DateTimeFormat().resolvedOptions().timeZone;
  return timezone === 'Africa/Lagos';
}

/**
 * Get greeting based on time
 */
export function getGreeting(): string {
  const hour = new Date().getHours();
  if (hour < 12) return 'Good morning';
  if (hour < 17) return 'Good afternoon';
  return 'Good evening';
}

/**
 * Copy to clipboard
 */
export async function copyToClipboard(text: string): Promise<boolean> {
  try {
    await navigator.clipboard.writeText(text);
    return true;
  } catch (error) {
    console.error('Failed to copy:', error);
    return false;
  }
}

/**
 * Share content (Web Share API)
 */
export async function shareContent(data: {
  title?: string;
  text?: string;
  url?: string;
}): Promise<boolean> {
  if (!navigator.share) {
    console.warn('Web Share API not supported');
    return false;
  }
  
  try {
    await navigator.share(data);
    return true;
  } catch (error) {
    console.error('Failed to share:', error);
    return false;
  }
}

/**
 * Format phone number (Nigerian)
 */
export function formatPhoneNumber(phone: string): string {
  const cleaned = phone.replace(/\D/g, '');
  
  // Nigerian format: +234 XXX XXX XXXX
  if (cleaned.startsWith('234')) {
    return `+234 ${cleaned.slice(3, 6)} ${cleaned.slice(6, 9)} ${cleaned.slice(9)}`;
  }
  
  // Local format: 0XXX XXX XXXX
  if (cleaned.startsWith('0')) {
    return `${cleaned.slice(0, 4)} ${cleaned.slice(4, 7)} ${cleaned.slice(7)}`;
  }
  
  return phone;
}

/**
 * Validate email
 */
export function isValidEmail(email: string): boolean {
  const emailRegex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
  return emailRegex.test(email);
}

/**
 * Validate Nigerian phone number
 */
export function isValidNigerianPhone(phone: string): boolean {
  const cleaned = phone.replace(/\D/g, '');
  
  // Must be 11 digits starting with 0, or 13 digits starting with 234
  if (cleaned.length === 11 && cleaned.startsWith('0')) return true;
  if (cleaned.length === 13 && cleaned.startsWith('234')) return true;
  
  return false;
}

/**
 * Calculate reading time
 */
export function calculateReadingTime(text: string, wordsPerMinute: number = 200): number {
  const words = text.trim().split(/\s+/).length;
  return Math.ceil(words / wordsPerMinute);
}

/**
 * Pluralize word
 */
export function pluralize(count: number, singular: string, plural?: string): string {
  if (count === 1) return singular;
  return plural || `${singular}s`;
}

/**
 * Format number with suffix (K, M, B)
 */
export function formatNumberShort(num: number): string {
  if (num >= 1_000_000_000) {
    return `${(num / 1_000_000_000).toFixed(1)}B`;
  }
  if (num >= 1_000_000) {
    return `${(num / 1_000_000).toFixed(1)}M`;
  }
  if (num >= 1_000) {
    return `${(num / 1_000).toFixed(1)}K`;
  }
  return num.toString();
}

/**
 * Get relative time (e.g., "2 hours ago")
 */
export function getRelativeTime(date: string | Date): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  const now = new Date();
  const diffInSeconds = Math.floor((now.getTime() - d.getTime()) / 1000);
  
  if (diffInSeconds < 60) return 'just now';
  if (diffInSeconds < 3600) return `${Math.floor(diffInSeconds / 60)} minutes ago`;
  if (diffInSeconds < 86400) return `${Math.floor(diffInSeconds / 3600)} hours ago`;
  if (diffInSeconds < 604800) return `${Math.floor(diffInSeconds / 86400)} days ago`;
  if (diffInSeconds < 2592000) return `${Math.floor(diffInSeconds / 604800)} weeks ago`;
  if (diffInSeconds < 31536000) return `${Math.floor(diffInSeconds / 2592000)} months ago`;
  return `${Math.floor(diffInSeconds / 31536000)} years ago`;
}

// ===================================
// RE-EXPORT EVERYTHING AS DEFAULT
// ===================================
// Import for default export
import { BOLDMIND_PRODUCTS as PRODUCTS } from './constants/products';
import { DATABASE_CONFIG as DB_CONFIG } from './constants/database-config';
import { DOMAIN_MAPPINGS as DOMAINS } from './constants/domains';
import { BOLDMIND_COLOR_SCHEMES as COLOR_SCHEMES } from './constants/colors';

export default {
  // Core constants
  products: PRODUCTS,
  database: DB_CONFIG,
  domains: DOMAINS,
  colors: COLOR_SCHEMES,
  
  // Utils
  utils: {
    detectCurrentProduct,
    getProductFromPath,
    formatCurrency,
    formatDate,
    truncateText,
    cn,
    sleep,
    debounce,
    throttle,
    generateId,
    isNigerianUser,
    getGreeting,
    copyToClipboard,
    shareContent,
    formatPhoneNumber,
    isValidEmail,
    isValidNigerianPhone,
    calculateReadingTime,
    pluralize,
    formatNumberShort,
    getRelativeTime,
  },
};