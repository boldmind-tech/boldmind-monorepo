// packages/utils/src/index.ts
// COMPLETE BOLDMIND UTILS — single barrel export

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCTS & CATALOG
// ─────────────────────────────────────────────────────────────────────────────

export {
  // Data
  BOLDMIND_PRODUCTS,
  PRODUCT_CATEGORIES,

  // Section A — Lookup
  getProductById,
  getProductBySlug,
  getProductByDomain,
  getProductByFullDomain,
  getProductWebsiteUrl,
  toProductCard,
  toProductCards,

  // Section B — Status
  getProductsByStatus,
  getLiveProducts,
  getBuildingProducts,
  getPlannedProducts,
  getConceptProducts,
  getActiveProducts,
  getInactiveProducts,

  // Section C — Category & Tags
  getProductsByCategory,
  getProductsByCategories,
  getProductsByTags,
  getProductsByAnyTag,
  getAllTags,
  getTagFrequency,
  getTopTags,

  // Section D — Priority & Sort
  getProductsByPriority,
  getHighPriorityProducts,
  getLowPriorityProducts,
  sortProducts,

  // Section E — Search
  searchProducts,
  fuzzySearchProducts,
  paginateProducts,

  // Section F — Tech Stack
  getProductsByTech,
  getProductsByDatabase,
  getAllTechStack,
  getTechStackFrequency,
  getProductsBySimilarStack,

  // Section G — Domain & URL
  getAllDomains,
  getAllSubdomains,
  getProductsByDomainName,
  getProductsBySubdomain,
  getProductsWithSubdomain,
  getProductsWithoutSubdomain,
  detectProductFromHost,

  // Section H — Integration & Dependency
  getProductsWithIntegration,
  getAllIntegrations,
  getProductDependencies,
  getProductDependents,
  getTransitiveDependencies,
  getProductsByApp,
  getAllApps,
  getPlanAISuiteProducts,

  // Section I — Revenue
  calculateTotalMonthlyRevenue,
  calculateAnnualRevenue,
  getRevenueGeneratingProducts,
  getTopRevenueProducts,
  getZeroRevenueProducts,
  getRevenueByCategory,
  projectRevenue,
  getPaybackPeriod,
  calculateROI,
  getAverageRevenuePerLiveProduct,

  // Section J — Team & Cost
  calculateTotalTeamSize,
  getProductsByTeamSize,
  getSoloProducts,
  estimateDevelopmentCost,
  calculateTotalDevelopmentCost,

  // Section K — Timeline
  getUpcomingReleases,
  getProductsLaunchingThisYear,
  groupByQuarter,

  // Section L — Summaries
  getProductStatusSummary,
  getCategorySummary,
  getQuickStats,

  // Section M — Health Score
  getProductHealthScore,
  getAllHealthScores,
  getProductsNeedingAttention,

  // Section N — Recommendations
  getRelatedProducts,
  getRecommendedNextBuild,

  // Section O — Build Wave Planner
  generateBuildPlan,

  // Section P — Competitive Gap
  getCompetitorGaps,
  getTopOpportunityGap,

  // Section Q — Dates
  getRecentlyUpdatedProducts,
  getRecentlyCreatedProducts,
  getStaleProducts,

  // Section R — TWA
  getProductsWithTWA,
  getTWAByPackageName,
  getAllTWAPackageNames,

  // Section S — Service Modules
  getProductsByServiceModule,
  getAllServiceModules,

  // Section T — Serialization
  serializeProducts,
  toStaticProps,
  buildProductCardMap,
  getAllProductUrls,

  // Section U — Font
  BOLDMIND_FONT_CONFIG,
  getProductFont,
  generateFontCSS,

  // Legacy shims
  calculateProjectedRevenue,

  // Types
  type Product,
  type ProductCard,
  type ProductPair,
  type BuildPlan,
  type PaginatedResult,
  type ProductHealthScore,
  type CompetitorGap,
  type ProductStatusSummary,
  type CategorySummary,
  type ProductStatus,
  type ProductCategory,
  type DatabaseType,
} from './constants/products';

// ─────────────────────────────────────────────────────────────────────────────
// PRICING
// ─────────────────────────────────────────────────────────────────────────────

export {
  BOLDMIND_PRICING,
  getProductPricing,
  calculateYearlySavings,
  type PricingTier,
  type ProductPricing,
} from './constants/pricing';

// ─────────────────────────────────────────────────────────────────────────────
// AUTH
// ─────────────────────────────────────────────────────────────────────────────

export {
  hasPermission,
  SYSTEM_ROLE_PERMISSIONS,
  ECOSYSTEM_ROLE_PERMISSIONS,
  type UserRole,
  type EcosystemRole,
  type AuthProvider,
} from './constants/auth';

// ─────────────────────────────────────────────────────────────────────────────
// DATABASE CONFIGURATION
// ─────────────────────────────────────────────────────────────────────────────

export {
  DATABASE_CONFIG,
  getServiceDatabase,
  getServiceForProduct,
  getDatabaseName,
  getDatabaseEnvVar,
  getConnectionString,
  getServiceUrl,
  usesPostgres,
  usesMongoDB,
  getServicesByDatabase,
  getProductsForService,
  validateDatabaseEnvVars,
  SERVICE_DB_CONFIG,
  type PostgresService,
  type MongoService,
  type ServiceName,
  type ProductSlug,
} from './constants/database-config';

// ─────────────────────────────────────────────────────────────────────────────
// DOMAIN MAPPING & ROUTES
// ─────────────────────────────────────────────────────────────────────────────

export {
  DOMAIN_MAPPINGS,
  getProductFromDomain,
  getDomainFromProduct,
  getDomainsByStatus,
  getAPIEndpoint,
  isLiveDomain,
} from './constants/domains';

// ─────────────────────────────────────────────────────────────────────────────
// COLORS & THEMES
// ─────────────────────────────────────────────────────────────────────────────

export {
  BOLDMIND_COLOR_SCHEMES,
  getColorScheme,
  getCategoryColorSchemes,
  generateCSSVariables,
  getContrastColor,
  generateThemeClasses,
  boldmindColors,
  boldmindTypography,
  boldmindAnimations,
  productThemes,
  getProductTheme,
  getProductColors,
  getProductThemeClass,
  type ProductTheme,
} from './styles/theme';

// ─────────────────────────────────────────────────────────────────────────────
// SOCIAL
// ─────────────────────────────────────────────────────────────────────────────

export {
  socialAccounts,
  crossPostingRules,
  SocialIntegration,
  type SocialAccount,
  type PostResult,
  type AnalyticsData,
  type PlatformStats,
} from './constants/social';

// ─────────────────────────────────────────────────────────────────────────────
// PRODUCT DETECTION  (client-side URL → slug)
// ─────────────────────────────────────────────────────────────────────────────

export { detectCurrentProduct } from './utils/detect-product';

// ─────────────────────────────────────────────────────────────────────────────
// GENERAL UTILITIES
// ─────────────────────────────────────────────────────────────────────────────

/** Extract the first path segment as product slug (useful in middleware) */
export function getProductFromPath(pathname: string): string {
  return pathname.split('/').filter(Boolean)[0] ?? 'boldmind-hub';
}

/** Format currency — defaults to Nigerian Naira */
export function formatCurrency(amount: number, currency = 'NGN'): string {
  if (currency === 'NGN') return `₦${amount.toLocaleString('en-NG')}`;
  return new Intl.NumberFormat('en-US', { style: 'currency', currency }).format(amount);
}

/** Format a date to Nigerian locale */
export function formatDate(date: string | Date, format: 'short' | 'long' = 'short'): string {
  const d = typeof date === 'string' ? new Date(date) : date;
  return d.toLocaleDateString('en-NG', format === 'long'
    ? { year: 'numeric', month: 'long', day: 'numeric' }
    : { year: 'numeric', month: 'short', day: 'numeric' });
}

/** Truncate text to maxLength characters */
export function truncateText(text: string, maxLength = 100): string {
  return text.length <= maxLength ? text : `${text.slice(0, maxLength).trim()}…`;
}

/** Lightweight clsx replacement */
export function cn(...classes: (string | undefined | null | false)[]): string {
  return classes.filter(Boolean).join(' ');
}

/** Promise-based sleep */
export const sleep = (ms: number) => new Promise<void>((r) => setTimeout(r, ms));

/** Leading-edge throttle */
export function throttle<T extends (...args: unknown[]) => unknown>(fn: T, limit: number) {
  let inThrottle = false;
  return (...args: Parameters<T>) => {
    if (!inThrottle) { fn(...args); inThrottle = true; setTimeout(() => { inThrottle = false; }, limit); }
  };
}

/** Trailing-edge debounce */
export function debounce<T extends (...args: unknown[]) => unknown>(fn: T, wait: number) {
  let timer: ReturnType<typeof setTimeout>;
  return (...args: Parameters<T>) => { clearTimeout(timer); timer = setTimeout(() => fn(...args), wait); };
}

/** Collision-resistant ID */
export function generateId(prefix = 'id'): string {
  return `${prefix}_${Date.now()}_${Math.random().toString(36).slice(2, 9)}`;
}

/** Returns true when the visitor's timezone is Africa/Lagos */
export function isNigerianUser(): boolean {
  if (typeof window === 'undefined') return false;
  return Intl.DateTimeFormat().resolvedOptions().timeZone === 'Africa/Lagos';
}

/** Time-of-day greeting */
export function getGreeting(): string {
  const h = new Date().getHours();
  return h < 12 ? 'Good morning' : h < 17 ? 'Good afternoon' : 'Good evening';
}

/** Copy text to clipboard — returns success flag */
export async function copyToClipboard(text: string): Promise<boolean> {
  try { await navigator.clipboard.writeText(text); return true; }
  catch { return false; }
}

/** Web Share API wrapper — returns false when not supported */
export async function shareContent(data: { title?: string; text?: string; url?: string }): Promise<boolean> {
  if (typeof navigator === 'undefined' || !navigator.share) return false;
  try { await navigator.share(data); return true; }
  catch { return false; }
}

/** Format a Nigerian phone number to a readable form */
export function formatPhoneNumber(phone: string): string {
  const c = phone.replace(/\D/g, '');
  if (c.startsWith('234') && c.length === 13) return `+234 ${c.slice(3, 6)} ${c.slice(6, 9)} ${c.slice(9)}`;
  if (c.startsWith('0')   && c.length === 11) return `${c.slice(0, 4)} ${c.slice(4, 7)} ${c.slice(7)}`;
  return phone;
}

/** RFC-5322 email validation */
export function isValidEmail(email: string): boolean {
  return /^[^\s@]+@[^\s@]+\.[^\s@]+$/.test(email);
}

/** Nigerian phone number validation (local 0XX or international +234XX) */
export function isValidNigerianPhone(phone: string): boolean {
  const c = phone.replace(/\D/g, '');
  return (c.length === 11 && c.startsWith('0')) || (c.length === 13 && c.startsWith('234'));
}

/** Approximate reading time in minutes */
export function calculateReadingTime(text: string, wpm = 200): number {
  return Math.ceil(text.trim().split(/\s+/).length / wpm);
}

/** Simple pluralize */
export function pluralize(count: number, singular: string, plural?: string): string {
  return count === 1 ? singular : (plural ?? `${singular}s`);
}

/** Format number with K / M / B suffix */
export function formatNumberShort(n: number): string {
  if (n >= 1e9) return `${(n / 1e9).toFixed(1)}B`;
  if (n >= 1e6) return `${(n / 1e6).toFixed(1)}M`;
  if (n >= 1e3) return `${(n / 1e3).toFixed(1)}K`;
  return String(n);
}

/** Human-readable relative time ("2 hours ago") */
export function getRelativeTime(date: string | Date): string {
  const diff = Math.floor((Date.now() - new Date(date).getTime()) / 1000);
  if (diff < 60)       return 'just now';
  if (diff < 3600)     return `${Math.floor(diff / 60)} minutes ago`;
  if (diff < 86400)    return `${Math.floor(diff / 3600)} hours ago`;
  if (diff < 604800)   return `${Math.floor(diff / 86400)} days ago`;
  if (diff < 2592000)  return `${Math.floor(diff / 604800)} weeks ago`;
  if (diff < 31536000) return `${Math.floor(diff / 2592000)} months ago`;
  return `${Math.floor(diff / 31536000)} years ago`;
}

/** Chunk an array into pages */
export function chunkArray<T>(arr: T[], size: number): T[][] {
  const chunks: T[][] = [];
  for (let i = 0; i < arr.length; i += size) chunks.push(arr.slice(i, i + size));
  return chunks;
}

/** Deep clone any JSON-serializable value */
export function deepClone<T>(value: T): T {
  return JSON.parse(JSON.stringify(value));
}

/** Naira amount to kobo (Paystack expects kobo) */
export function nairaToKobo(naira: number): number { return Math.round(naira * 100); }

/** Kobo to Naira */
export function koboToNaira(kobo: number): number { return kobo / 100; }

// ─────────────────────────────────────────────────────────────────────────────
// DEFAULT EXPORT  (namespace object for non-tree-shaking consumers)
// ─────────────────────────────────────────────────────────────────────────────

export default {
  formatCurrency, formatDate, truncateText, cn, sleep, throttle, debounce,
  generateId, isNigerianUser, getGreeting, copyToClipboard, shareContent,
  formatPhoneNumber, isValidEmail, isValidNigerianPhone, calculateReadingTime,
  pluralize, formatNumberShort, getRelativeTime, chunkArray, deepClone,
  nairaToKobo, koboToNaira, getProductFromPath,
};