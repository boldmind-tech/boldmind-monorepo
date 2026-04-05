import { $ as getProductById, $t as toStaticProps, A as getAllDomains, At as getRecommendedNextBuild, B as getBuildingProducts, Bt as getTopRevenueProducts, C as detectProductFromHost, Ct as getProductsWithIntegration, D as generateFontCSS, Dt as getQuickStats, E as generateBuildPlan, Et as getProductsWithoutSubdomain, F as getAllSubdomains, Ft as getStaleProducts, G as getInactiveProducts, Gt as groupByQuarter, H as getCompetitorGaps, Ht as getTransitiveDependencies, I as getAllTWAPackageNames, It as getTWAByPackageName, J as getPaybackPeriod, Jt as searchProducts, K as getLiveProducts, Kt as paginateProducts, L as getAllTags, Lt as getTagFrequency, M as getAllIntegrations, Mt as getRevenueByCategory, N as getAllProductUrls, Nt as getRevenueGeneratingProducts, O as getActiveProducts, Ot as getRecentlyCreatedProducts, P as getAllServiceModules, Pt as getSoloProducts, Q as getProductByFullDomain, Qt as toProductCards, R as getAllTechStack, Rt as getTechStackFrequency, S as calculateTotalTeamSize, St as getProductsNeedingAttention, T as fuzzySearchProducts, Tt as getProductsWithTWA, U as getConceptProducts, Ut as getUpcomingReleases, V as getCategorySummary, Vt as getTopTags, W as getHighPriorityProducts, Wt as getZeroRevenueProducts, X as getPlannedProducts, Xt as sortProducts, Y as getPlanAISuiteProducts, Yt as serializeProducts, Z as getProductByDomain, Zt as toProductCard, _ as calculateAnnualRevenue, _t as getProductsBySubdomain, a as CompetitorGap, at as getProductStatusSummary, b as calculateTotalDevelopmentCost, bt as getProductsByTech, c as PaginatedResult, ct as getProductsByApp, d as ProductCategory, dt as getProductsByDatabase, et as getProductBySlug, f as ProductHealthScore, ft as getProductsByDomainName, g as buildProductCardMap, gt as getProductsByStatus, h as ProductStatusSummary, ht as getProductsBySimilarStack, i as CategorySummary, it as getProductHealthScore, j as getAllHealthScores, jt as getRelatedProducts, k as getAllApps, kt as getRecentlyUpdatedProducts, l as Product, lt as getProductsByCategories, m as ProductStatus, mt as getProductsByServiceModule, n as BOLDMIND_PRODUCTS, nt as getProductDependents, o as DatabaseType, ot as getProductWebsiteUrl, p as ProductPair, pt as getProductsByPriority, q as getLowPriorityProducts, qt as projectRevenue, r as BuildPlan, rt as getProductFont, s as PRODUCT_CATEGORIES, st as getProductsByAnyTag, t as BOLDMIND_FONT_CONFIG, tt as getProductDependencies, u as ProductCard, ut as getProductsByCategory, v as calculateProjectedRevenue, vt as getProductsByTags, w as estimateDevelopmentCost, wt as getProductsWithSubdomain, x as calculateTotalMonthlyRevenue, xt as getProductsLaunchingThisYear, y as calculateROI, yt as getProductsByTeamSize, z as getAverageRevenuePerLiveProduct, zt as getTopOpportunityGap } from "./products-BcLbeltI.js";
import { DATABASE_CONFIG, MongoService, PostgresService, ProductSlug, SERVICE_DB_CONFIG, ServiceName, getConnectionString, getDatabaseEnvVar, getDatabaseName, getProductsForService, getServiceDatabase, getServiceForProduct, getServiceUrl, getServicesByDatabase, usesMongoDB, usesPostgres, validateDatabaseEnvVars } from "./database-config.js";
import { DOMAIN_MAPPINGS, getAPIEndpoint, getDomainFromProduct, getDomainsByStatus, getProductFromDomain, isLiveDomain } from "./domains.js";

//#region src/constants/pricing.d.ts
interface PricingTier {
  name: 'free' | 'basic' | 'pro' | 'enterprise';
  priceMonthly: number;
  priceYearly: number;
  currency: 'NGN' | 'USD';
  features: string[];
  limits?: {
    [key: string]: number | string;
  };
}
interface ProductPricing {
  productSlug: string;
  productName: string;
  tiers: PricingTier[];
  oneTimePrices?: {
    name: string;
    price: number;
    currency: 'NGN' | 'USD';
    description: string;
  }[];
}
declare const BOLDMIND_PRICING: ProductPricing[];
declare function getProductPricing(productSlug: string): ProductPricing | undefined;
declare function calculateYearlySavings(tier: PricingTier): number;
//#endregion
//#region src/constants/auth.d.ts
type SystemRole = 'super_admin' | 'admin' | 'manager' | 'editor' | 'support' | 'analyst';
type EcosystemRole = 'hustler' | 'founder' | 'creator' | 'student' | 'business_owner' | 'operator' | 'partner';
type UserRole = SystemRole | EcosystemRole | 'guest';
type AuthProvider = 'email' | 'google' | 'github' | 'twitter' | 'facebook';
interface User {
  id: string;
  email: string;
  name: string;
  role: UserRole;
  ecosystemRole?: EcosystemRole;
  digitalMaturity?: 'low' | 'medium' | 'high';
  avatar?: string;
  createdAt: Date;
  updatedAt: Date;
  lastLogin?: Date;
  permissions: string[];
}
declare const SYSTEM_ROLE_PERMISSIONS: Record<SystemRole, string[]>;
declare const ECOSYSTEM_ROLE_PERMISSIONS: Record<EcosystemRole, string[]>;
declare function hasPermission(user: User, permission: string): boolean;
declare function getRolePermissions(role: UserRole): string[];
//#endregion
//#region src/constants/colors.d.ts
type ColorScheme = {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
  success: string;
  warning: string;
  error: string;
  info: string;
};
type ProductColorScheme = ColorScheme & {
  name: string;
  slug: string;
  category: string;
  icon: string;
  description: string;
  gradients: {
    primary: string[];
    secondary: string[];
    background: string[];
  };
  shadows: {
    sm: string;
    md: string;
    lg: string;
    xl: string;
  };
};
declare function generateCSSVariables(scheme: ProductColorScheme): string;
declare function generateThemeClasses(scheme: ProductColorScheme): Record<string, string>;
declare const BOLDMIND_COLOR_SCHEMES: Record<string, ProductColorScheme>;
declare function getColorScheme(slug: string): ProductColorScheme;
declare function getCategoryColorSchemes(category: string): ProductColorScheme[];
declare function getContrastColor(hexColor: string): string;
//#endregion
//#region src/styles/theme.d.ts
declare const boldmindTypography: {
  fonts: {
    heading: string;
    body: string;
    mono: string;
    serif: string;
    dyslexic: string;
  };
  sizes: {
    xs: string;
    sm: string;
    base: string;
    lg: string;
    xl: string;
    '2xl': string;
    '3xl': string;
    '4xl': string;
    '5xl': string;
    '6xl': string;
    '7xl': string;
    '8xl': string;
  };
};
declare const boldmindAnimations: {
  transitions: {
    fast: string;
    normal: string;
    slow: string;
  };
  keyframes: {
    float: {
      '0%, 100%': {
        transform: string;
      };
      '50%': {
        transform: string;
      };
    };
    pulse: {
      '0%, 100%': {
        opacity: number;
      };
      '50%': {
        opacity: number;
      };
    };
    shimmer: {
      '0%': {
        backgroundPosition: string;
      };
      '100%': {
        backgroundPosition: string;
      };
    };
    slideInRight: {
      '0%': {
        transform: string;
        opacity: number;
      };
      '100%': {
        transform: string;
        opacity: number;
      };
    };
    fadeIn: {
      '0%': {
        opacity: number;
      };
      '100%': {
        opacity: number;
      };
    };
  };
};
declare const boldmindColors: {
  [k: string]: {
    primary: string;
    secondary: string;
    accent: string;
    background: string;
    foreground: string;
    muted: string;
  };
};
interface ProductTheme {
  slug: string;
  name: string;
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
}
declare const productThemes: Record<string, ProductTheme>;
declare function getProductTheme(slug: string): ProductTheme;
declare function getProductColors(slug: string): {
  primary: string;
  secondary: string;
  accent: string;
  background: string;
  foreground: string;
  muted: string;
};
declare function getProductThemeClass(slug: string): string;
//#endregion
//#region src/constants/social.d.ts
interface SocialAccount {
  id: string;
  name: string;
  url?: string;
  phone?: string;
  platform: string;
  accessToken?: string;
  refreshToken?: string;
  connectedAt?: Date;
}
interface PlatformRules {
  platforms: string[];
  schedule: string;
  templates: Record<string, string>;
}
interface ProductRules {
  [product: string]: PlatformRules;
}
declare const crossPostingRules: ProductRules;
declare const socialAccounts: Record<string, SocialAccount[]>;
declare class SocialIntegration {
  private config;
  private platformTokens;
  private postingQueue;
  private isProcessingQueue;
  constructor(config?: {
    maxRetries: number;
    delayBetweenPosts: number;
    batchSize: number;
    enableAnalytics: boolean;
  });
  connectAllAccounts(): Promise<{
    success: number;
    failed: number;
    errors: string[];
  }>;
  crossPost(content: {
    title: string;
    body: string;
    excerpt: string;
    url: string;
    image?: string;
    product: string;
  }): Promise<PostResult[]>;
  private postToPlatform;
  postToAllProducts(productPost: {
    amebogist?: {
      title: string;
      excerpt: string;
      url: string;
      body?: string;
      image?: string;
    };
    educenter?: {
      title: string;
      excerpt: string;
      url: string;
      body?: string;
      image?: string;
    };
    boldmind?: {
      title: string;
      excerpt: string;
      url: string;
      body?: string;
      image?: string;
    };
  }): Promise<Record<string, PostResult[]>>;
  queuePost(postFn: () => Promise<void>): Promise<void>;
  private processQueue;
  private postToFacebook;
  private postToTwitter;
  private postToInstagram;
  private postToYouTube;
  private postToWhatsApp;
  private postToTikTok;
  private postToLinkedIn;
  private connectAccount;
  private delay;
  private retryOperation;
  getUnifiedAnalytics(startDate?: Date, endDate?: Date): Promise<AnalyticsData>;
  private fetchPlatformStats;
}
interface PostResult {
  platform: string;
  accountId: string;
  accountName: string;
  success: boolean;
  messageId?: string;
  error?: string;
  timestamp: Date;
  content?: {
    title: string;
    excerpt: string;
    url: string;
  };
}
interface PlatformStats {
  followers: number;
  engagement: number;
  reach: number;
  postsCount: number;
  platform: string;
}
interface AnalyticsData {
  totalFollowers: number;
  engagement: number;
  reach: number;
  postsCount: number;
  platformBreakdown: Record<string, {
    followers: number;
    engagement: number;
    reach: number;
    postsCount: number;
    accounts: number;
    avgEngagementRate: number;
  }>;
  period: {
    start: Date;
    end: Date;
  };
}
//#endregion
//#region src/utils/detect-product.d.ts
/**
 * Detects the current BoldMind product slug from the browser's URL.
 *
 * @returns A product slug string, always. Never throws.
 *
 * @example
 * // On https://planai.boldmind.ng/store
 * detectCurrentProduct() // → 'digital-storefronts'
 *
 * // On https://amebogist.ng/article/something
 * detectCurrentProduct() // → 'amebogist'
 *
 * // During SSR (no window)
 * detectCurrentProduct() // → 'boldmind-hub'
 */
declare function detectCurrentProduct(): string;
//#endregion
//#region src/index.d.ts
/** Extract the first path segment as product slug (useful in middleware) */
declare function getProductFromPath(pathname: string): string;
/** Format currency — defaults to Nigerian Naira */
declare function formatCurrency(amount: number, currency?: string): string;
/** Format a date to Nigerian locale */
declare function formatDate(date: string | Date, format?: 'short' | 'long'): string;
/** Truncate text to maxLength characters */
declare function truncateText(text: string, maxLength?: number): string;
/** Lightweight clsx replacement */
declare function cn(...classes: (string | undefined | null | false)[]): string;
/** Promise-based sleep */
declare const sleep: (ms: number) => Promise<void>;
/** Leading-edge throttle */
declare function throttle<T extends (...args: unknown[]) => unknown>(fn: T, limit: number): (...args: Parameters<T>) => void;
/** Trailing-edge debounce */
declare function debounce<T extends (...args: unknown[]) => unknown>(fn: T, wait: number): (...args: Parameters<T>) => void;
/** Collision-resistant ID */
declare function generateId(prefix?: string): string;
/** Returns true when the visitor's timezone is Africa/Lagos */
declare function isNigerianUser(): boolean;
/** Time-of-day greeting */
declare function getGreeting(): string;
/** Copy text to clipboard — returns success flag */
declare function copyToClipboard(text: string): Promise<boolean>;
/** Web Share API wrapper — returns false when not supported */
declare function shareContent(data: {
  title?: string;
  text?: string;
  url?: string;
}): Promise<boolean>;
/** Format a Nigerian phone number to a readable form */
declare function formatPhoneNumber(phone: string): string;
/** RFC-5322 email validation */
declare function isValidEmail(email: string): boolean;
/** Nigerian phone number validation (local 0XX or international +234XX) */
declare function isValidNigerianPhone(phone: string): boolean;
/** Approximate reading time in minutes */
declare function calculateReadingTime(text: string, wpm?: number): number;
/** Simple pluralize */
declare function pluralize(count: number, singular: string, plural?: string): string;
/** Format number with K / M / B suffix */
declare function formatNumberShort(n: number): string;
/** Human-readable relative time ("2 hours ago") */
declare function getRelativeTime(date: string | Date): string;
/** Chunk an array into pages */
declare function chunkArray<T>(arr: T[], size: number): T[][];
/** Deep clone any JSON-serializable value */
declare function deepClone<T>(value: T): T;
/** Naira amount to kobo (Paystack expects kobo) */
declare function nairaToKobo(naira: number): number;
/** Kobo to Naira */
declare function koboToNaira(kobo: number): number;
declare const _default: {
  formatCurrency: typeof formatCurrency;
  formatDate: typeof formatDate;
  truncateText: typeof truncateText;
  cn: typeof cn;
  sleep: (ms: number) => Promise<void>;
  throttle: typeof throttle;
  debounce: typeof debounce;
  generateId: typeof generateId;
  isNigerianUser: typeof isNigerianUser;
  getGreeting: typeof getGreeting;
  copyToClipboard: typeof copyToClipboard;
  shareContent: typeof shareContent;
  formatPhoneNumber: typeof formatPhoneNumber;
  isValidEmail: typeof isValidEmail;
  isValidNigerianPhone: typeof isValidNigerianPhone;
  calculateReadingTime: typeof calculateReadingTime;
  pluralize: typeof pluralize;
  formatNumberShort: typeof formatNumberShort;
  getRelativeTime: typeof getRelativeTime;
  chunkArray: typeof chunkArray;
  deepClone: typeof deepClone;
  nairaToKobo: typeof nairaToKobo;
  koboToNaira: typeof koboToNaira;
  getProductFromPath: typeof getProductFromPath;
};
//#endregion
export { type AnalyticsData, type AuthProvider, BOLDMIND_COLOR_SCHEMES, BOLDMIND_FONT_CONFIG, BOLDMIND_PRICING, BOLDMIND_PRODUCTS, type BuildPlan, type CategorySummary, type CompetitorGap, DATABASE_CONFIG, DOMAIN_MAPPINGS, type DatabaseType, ECOSYSTEM_ROLE_PERMISSIONS, type EcosystemRole, type MongoService, PRODUCT_CATEGORIES, type PaginatedResult, type PlatformStats, type PostResult, type PostgresService, type PricingTier, type Product, type ProductCard, type ProductCategory, type ProductHealthScore, type ProductPair, type ProductPricing, type ProductSlug, type ProductStatus, type ProductStatusSummary, type ProductTheme, SERVICE_DB_CONFIG, SYSTEM_ROLE_PERMISSIONS, type ServiceName, type SocialAccount, SocialIntegration, type UserRole, boldmindAnimations, boldmindColors, boldmindTypography, buildProductCardMap, calculateAnnualRevenue, calculateProjectedRevenue, calculateROI, calculateReadingTime, calculateTotalDevelopmentCost, calculateTotalMonthlyRevenue, calculateTotalTeamSize, calculateYearlySavings, chunkArray, cn, copyToClipboard, crossPostingRules, debounce, deepClone, _default as default, detectCurrentProduct, detectProductFromHost, estimateDevelopmentCost, formatCurrency, formatDate, formatNumberShort, formatPhoneNumber, fuzzySearchProducts, generateBuildPlan, generateCSSVariables, generateFontCSS, generateId, generateThemeClasses, getAPIEndpoint, getActiveProducts, getAllApps, getAllDomains, getAllHealthScores, getAllIntegrations, getAllProductUrls, getAllServiceModules, getAllSubdomains, getAllTWAPackageNames, getAllTags, getAllTechStack, getAverageRevenuePerLiveProduct, getBuildingProducts, getCategoryColorSchemes, getCategorySummary, getColorScheme, getCompetitorGaps, getConceptProducts, getConnectionString, getContrastColor, getDatabaseEnvVar, getDatabaseName, getDomainFromProduct, getDomainsByStatus, getGreeting, getHighPriorityProducts, getInactiveProducts, getLiveProducts, getLowPriorityProducts, getPaybackPeriod, getPlanAISuiteProducts, getPlannedProducts, getProductByDomain, getProductByFullDomain, getProductById, getProductBySlug, getProductColors, getProductDependencies, getProductDependents, getProductFont, getProductFromDomain, getProductFromPath, getProductHealthScore, getProductPricing, getProductStatusSummary, getProductTheme, getProductThemeClass, getProductWebsiteUrl, getProductsByAnyTag, getProductsByApp, getProductsByCategories, getProductsByCategory, getProductsByDatabase, getProductsByDomainName, getProductsByPriority, getProductsByServiceModule, getProductsBySimilarStack, getProductsByStatus, getProductsBySubdomain, getProductsByTags, getProductsByTeamSize, getProductsByTech, getProductsForService, getProductsLaunchingThisYear, getProductsNeedingAttention, getProductsWithIntegration, getProductsWithSubdomain, getProductsWithTWA, getProductsWithoutSubdomain, getQuickStats, getRecentlyCreatedProducts, getRecentlyUpdatedProducts, getRecommendedNextBuild, getRelatedProducts, getRelativeTime, getRevenueByCategory, getRevenueGeneratingProducts, getRolePermissions, getServiceDatabase, getServiceForProduct, getServiceUrl, getServicesByDatabase, getSoloProducts, getStaleProducts, getTWAByPackageName, getTagFrequency, getTechStackFrequency, getTopOpportunityGap, getTopRevenueProducts, getTopTags, getTransitiveDependencies, getUpcomingReleases, getZeroRevenueProducts, groupByQuarter, hasPermission, isLiveDomain, isNigerianUser, isValidEmail, isValidNigerianPhone, koboToNaira, nairaToKobo, paginateProducts, pluralize, productThemes, projectRevenue, searchProducts, serializeProducts, shareContent, sleep, socialAccounts, sortProducts, throttle, toProductCard, toProductCards, toStaticProps, truncateText, usesMongoDB, usesPostgres, validateDatabaseEnvVars };
//# sourceMappingURL=index.d.ts.map