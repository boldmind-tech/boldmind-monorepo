//#region src/constants/products.d.ts
type ProductStatus = 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT';
type ProductCategory = 'media' | 'education' | 'ai' | 'productivity' | 'security' | 'health' | 'marketplace' | 'fintech' | 'utilities' | 'social';
type DatabaseType = 'postgres' | 'mongodb';
interface Product {
  id: string;
  name: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  version: string;
  slug: string;
  icon: string;
  domain: string;
  subdomain?: string;
  revenueModel: string;
  monthlyRevenue?: number;
  users?: string | number;
  app: string;
  techStack: string[];
  serviceModule: string;
  database: DatabaseType;
  teamSize?: number;
  timeline?: string;
  priority: number;
  twa?: {
    packageName: string;
    themeColor: string;
    backgroundColor: string;
  };
  suggestedFeatures?: string[];
  dependencies?: string[];
  integrations?: string[];
  tags: string[];
  links?: {
    website?: string;
    github?: string;
    demo?: string;
    figma?: string;
  };
  features: string[];
  challenges?: string[];
  opportunities?: string[];
  createdAt: string;
  updatedAt: string;
}
/** Lightweight card representation — safe to send to the client */
interface ProductCard {
  id: string;
  name: string;
  slug: string;
  icon: string;
  description: string;
  category: ProductCategory;
  status: ProductStatus;
  domain: string;
  monthlyRevenue: number;
  priority: number;
  tags: string[];
}
/** Pair of products that share category / integration / dependency */
interface ProductPair {
  a: Product;
  b: Product;
  reason: string;
}
/** Result shape returned by the build-plan generator */
interface BuildPlan {
  wave: number;
  products: Product[];
  estimatedCost: number;
  estimatedMonthlyRevenue: number;
  durationWeeks: number;
  dependencies: string[];
}
/** Generic paginated response */
interface PaginatedResult<T> {
  data: T[];
  total: number;
  page: number;
  pageSize: number;
  totalPages: number;
  hasNext: boolean;
  hasPrev: boolean;
}
/** Health score breakdown for a product */
interface ProductHealthScore {
  productId: string;
  productName: string;
  overall: number;
  breakdown: {
    revenueScore: number;
    userScore: number;
    teamScore: number;
    techScore: number;
    priorityScore: number;
  };
  rating: 'excellent' | 'good' | 'fair' | 'needs-attention';
  recommendations: string[];
}
/** Competitive gap analysis result */
interface CompetitorGap {
  category: ProductCategory;
  boldmindCount: number;
  estimatedMarketSize: string;
  missingFeatureAreas: string[];
  opportunityScore: number;
}
interface ProductStatusSummary {
  total: number;
  live: number;
  building: number;
  planned: number;
  concept: number;
  revenue: number;
  teamSize: number;
  upcomingReleases: number;
}
interface CategorySummary {
  category: string;
  count: number;
  live: number;
  building: number;
  planned: number;
  concept: number;
  revenue: number;
}
declare const PRODUCT_CATEGORIES: {
  id: string;
  name: string;
  count: number;
}[];
declare const BOLDMIND_PRODUCTS: Product[];
declare function getProductById(id: string): Product | undefined;
declare function getProductBySlug(slug: string): Product | undefined;
declare function getProductByDomain(domain: string): Product | undefined;
declare function getProductByFullDomain(fullDomain: string): Product | undefined;
/** Returns the canonical URL for a product */
declare function getProductWebsiteUrl(product: Product): string;
/** Lightweight card — safe for API responses and SSR props */
declare function toProductCard(p: Product): ProductCard;
declare function toProductCards(products: Product[]): ProductCard[];
declare function getProductsByStatus(status: ProductStatus): Product[];
declare const getLiveProducts: () => Product[];
declare const getBuildingProducts: () => Product[];
declare const getPlannedProducts: () => Product[];
declare const getConceptProducts: () => Product[];
/** Products that are actionable right now (LIVE or BUILDING) */
declare function getActiveProducts(): Product[];
/** Products not yet in production (PLANNED or CONCEPT) */
declare function getInactiveProducts(): Product[];
declare function getProductsByCategory(category: ProductCategory): Product[];
/**
 * Multi-category filter — returns products matching ANY of the supplied categories.
 * @example getProductsByCategories(['ai', 'fintech'])
 */
declare function getProductsByCategories(categories: ProductCategory[]): Product[];
/**
 * Tag-based search — all supplied tags must be present (AND).
 * @example getProductsByTags(['whatsapp', 'ai'])
 */
declare function getProductsByTags(tags: string[]): Product[];
/**
 * Tag-based search — any supplied tag matches (OR).
 */
declare function getProductsByAnyTag(tags: string[]): Product[];
/** All unique tags across all products, sorted alphabetically */
declare function getAllTags(): string[];
/** Tag frequency map — tag → count of products using it */
declare function getTagFrequency(): Record<string, number>;
/** Top N most-used tags */
declare function getTopTags(n?: number): Array<{
  tag: string;
  count: number;
}>;
declare function getProductsByPriority(minPriority: number, maxPriority?: number): Product[];
declare function getHighPriorityProducts(threshold?: number): Product[];
declare function getLowPriorityProducts(threshold?: number): Product[];
/**
 * Sort any product array by an arbitrary key.
 * @example sortProducts(getLiveProducts(), 'monthlyRevenue', 'desc')
 */
declare function sortProducts(products: Product[], key: keyof Product, direction?: 'asc' | 'desc'): Product[];
/**
 * Full-text search across name, description, tags, category, and slug.
 * Supports multi-word queries — all words must match (AND).
 */
declare function searchProducts(query: string): Product[];
/**
 * Fuzzy search — returns products with a relevance score.
 * Score = number of matched fields (higher = more relevant).
 */
declare function fuzzySearchProducts(query: string): Array<{
  product: Product;
  score: number;
}>;
/**
 * Paginated product list with optional pre-filter.
 */
declare function paginateProducts(products: Product[], page?: number, pageSize?: number): PaginatedResult<Product>;
declare function getProductsByTech(tech: string): Product[];
declare function getProductsByDatabase(dbType: DatabaseType): Product[];
/** All unique tech-stack entries across all products */
declare function getAllTechStack(): string[];
/** Tech stack frequency map — technology → number of products using it */
declare function getTechStackFrequency(): Record<string, number>;
/** Products that share at least one tech-stack item with the given product */
declare function getProductsBySimilarStack(slug: string): Product[];
declare function getAllDomains(): string[];
declare function getAllSubdomains(): string[];
declare function getProductsByDomainName(domain: string): Product[];
declare function getProductsBySubdomain(subdomain: string): Product[];
declare function getProductsWithSubdomain(): Product[];
declare function getProductsWithoutSubdomain(): Product[];
/** Detect which product a request belongs to from an incoming Host header */
declare function detectProductFromHost(host: string): Product | undefined;
declare function getProductsWithIntegration(integration: string): Product[];
declare function getAllIntegrations(): string[];
/** Returns the direct dependency products for a given product slug */
declare function getProductDependencies(productSlug: string): Product[];
/** Returns products that depend ON the given product slug (reverse deps) */
declare function getProductDependents(productSlug: string): Product[];
/**
 * Full dependency tree for a product (recursive, cycle-safe).
 * Returns a flat de-duplicated list of all transitive dependencies.
 */
declare function getTransitiveDependencies(productSlug: string, visited?: Set<string>): Product[];
/**
 * Products that live on the same app bundle (same `app` field).
 */
declare function getProductsByApp(app: string): Product[];
/**
 * All unique app bundles across the ecosystem.
 */
declare function getAllApps(): string[];
declare function getPlanAISuiteProducts(): Product[];
declare function calculateTotalMonthlyRevenue(): number;
declare function calculateAnnualRevenue(): number;
declare function getRevenueGeneratingProducts(): Product[];
declare function getTopRevenueProducts(limit?: number): Product[];
declare function getZeroRevenueProducts(): Product[];
/**
 * Revenue by category — returns a sorted array.
 */
declare function getRevenueByCategory(): Array<{
  category: ProductCategory;
  monthlyRevenue: number;
  productCount: number;
}>;
/**
 * Revenue CAGR estimate (compound annual growth rate) given a growth percentage.
 * @param annualGrowthRate e.g. 0.5 = 50% YoY
 */
declare function projectRevenue(months: number, annualGrowthRate?: number): number;
/**
 * Payback period (months) for a product — how long until revenue covers dev cost.
 * Returns Infinity if the product has no revenue.
 */
declare function getPaybackPeriod(product: Product): number;
/**
 * Return on investment for a product as a percentage (annual revenue / dev cost).
 */
declare function calculateROI(product: Product): number;
/**
 * Average monthly revenue per live product.
 */
declare function getAverageRevenuePerLiveProduct(): number;
declare function calculateTotalTeamSize(): number;
declare function getProductsByTeamSize(minSize: number, maxSize?: number): Product[];
/**
 * Solo-founder products (teamSize === 1).
 */
declare function getSoloProducts(): Product[];
/** Monthly dev cost using configurable rate (default ₦500k/dev/month) */
declare function estimateDevelopmentCost(product: Product, monthlyRatePerDev?: number): number;
declare function calculateTotalDevelopmentCost(monthlyRatePerDev?: number): number;
declare function getUpcomingReleases(months?: number): Product[];
declare function getProductsLaunchingThisYear(year?: number): Product[];
/**
 * Classify products by launch quarter.
 * @returns Map of "Q1 2026" → Product[]
 */
declare function groupByQuarter(): Map<string, Product[]>;
declare function getProductStatusSummary(): ProductStatusSummary;
declare function getCategorySummary(): CategorySummary[];
declare function getQuickStats(): {
  totalProducts: number;
  totalRevenue: string;
  annualRevenue: string;
  totalTeamSize: number;
  upcomingReleases: number;
  developmentCost: string;
  averageROI: string;
  revenueGeneratingCount: number;
  zeroRevenueCount: number;
};
/**
 * Calculates a 0-100 health score for each product based on:
 * revenue, users, team size, tech stack diversity, and priority.
 */
declare function getProductHealthScore(product: Product): ProductHealthScore;
/** Health scores for all products, sorted by overall score descending */
declare function getAllHealthScores(): ProductHealthScore[];
/** Products that need the most attention (health score below threshold) */
declare function getProductsNeedingAttention(threshold?: number): Product[];
/**
 * Products related to a given product by category or shared tags.
 * Sorted by relevance (shared tag count).
 */
declare function getRelatedProducts(slug: string, limit?: number): Product[];
/**
 * Recommended next product to build based on ecosystem gaps.
 * Scores concepts by: market opportunity keywords, dependencies already live, and priority.
 */
declare function getRecommendedNextBuild(): Product[];
/**
 * Groups BUILDING + PLANNED products into sequential build waves.
 * Wave 1 = products with no unresolved dependencies.
 * Wave 2 = products whose dependencies are resolved by Wave 1.
 * And so on.
 *
 * Returns an ordered array of BuildPlan objects.
 */
declare function generateBuildPlan(): BuildPlan[];
declare function getCompetitorGaps(): CompetitorGap[];
/** Returns the single highest-opportunity category gap */
declare function getTopOpportunityGap(): CompetitorGap | undefined;
/**
 * Products updated within the last N days.
 */
declare function getRecentlyUpdatedProducts(days?: number): Product[];
/**
 * Products created within the last N days.
 */
declare function getRecentlyCreatedProducts(days?: number): Product[];
/**
 * Products that haven't been updated in more than N days — staleness alert.
 */
declare function getStaleProducts(days?: number): Product[];
declare function getProductsWithTWA(): Product[];
declare function getTWAByPackageName(packageName: string): Product | undefined;
declare function getAllTWAPackageNames(): string[];
declare function getProductsByServiceModule(module: string): Product[];
declare function getAllServiceModules(): string[];
/**
 * Serializes the full product catalog to a JSON string.
 * Use in getStaticProps or API routes.
 */
declare function serializeProducts(products: Product[]): string;
/**
 * Converts a product to a Next.js-safe static props shape
 * (dates as ISO strings, no undefined values).
 */
declare function toStaticProps(product: Product): Record<string, unknown>;
/**
 * Returns a map of slug → ProductCard for O(1) lookups in UI components.
 */
declare function buildProductCardMap(): Record<string, ProductCard>;
/**
 * Returns a sitemap-compatible array of all product URLs.
 */
declare function getAllProductUrls(): Array<{
  url: string;
  lastModified: string;
  changeFrequency: string;
  priority: number;
}>;
declare const BOLDMIND_FONT_CONFIG: {
  /**
   * Global default — OpenDyslexic for accessibility-first reading.
   * Load via: https://cdn.jsdelivr.net/npm/open-dyslexic@latest/
   * Or self-host in /public/fonts/OpenDyslexic/
   */
  readonly default: "OpenDyslexic, \"Comic Sans MS\", sans-serif"; /** Headings (can override per product) */
  readonly heading: "OpenDyslexic, \"Plus Jakarta Sans\", \"Inter\", sans-serif"; /** Monospace for code blocks — keep readable for devs */
  readonly mono: "\"JetBrains Mono\", \"Fira Code\", monospace"; /** Optional override for products with strong brand typography requirements */
  readonly overrides: Record<string, string>; /** CSS custom property to inject into :root */
  readonly cssVariable: "--font-body"; /** Dyslexia-mode letter/word spacing (BoldMind OS feature) */
  readonly dyslexiaSpacing: {
    readonly letterSpacing: "0.12em";
    readonly wordSpacing: "0.25em";
    readonly lineHeight: "1.8";
  };
};
/**
 * Returns the font family string for a given product slug.
 * Falls back to the global OpenDyslexic default.
 */
declare function getProductFont(slug: string): string;
/**
 * Generates a <style> tag string for injecting the product font into SSR.
 * Use inside Next.js layout.tsx `<head>`.
 */
declare function generateFontCSS(slug: string): string;
declare function calculateProjectedRevenue(months?: number): number;
//#endregion
export { getProductById as $, toStaticProps as $t, getAllDomains as A, getRecommendedNextBuild as At, getBuildingProducts as B, getTopRevenueProducts as Bt, detectProductFromHost as C, getProductsWithIntegration as Ct, generateFontCSS as D, getQuickStats as Dt, generateBuildPlan as E, getProductsWithoutSubdomain as Et, getAllSubdomains as F, getStaleProducts as Ft, getInactiveProducts as G, groupByQuarter as Gt, getCompetitorGaps as H, getTransitiveDependencies as Ht, getAllTWAPackageNames as I, getTWAByPackageName as It, getPaybackPeriod as J, searchProducts as Jt, getLiveProducts as K, paginateProducts as Kt, getAllTags as L, getTagFrequency as Lt, getAllIntegrations as M, getRevenueByCategory as Mt, getAllProductUrls as N, getRevenueGeneratingProducts as Nt, getActiveProducts as O, getRecentlyCreatedProducts as Ot, getAllServiceModules as P, getSoloProducts as Pt, getProductByFullDomain as Q, toProductCards as Qt, getAllTechStack as R, getTechStackFrequency as Rt, calculateTotalTeamSize as S, getProductsNeedingAttention as St, fuzzySearchProducts as T, getProductsWithTWA as Tt, getConceptProducts as U, getUpcomingReleases as Ut, getCategorySummary as V, getTopTags as Vt, getHighPriorityProducts as W, getZeroRevenueProducts as Wt, getPlannedProducts as X, sortProducts as Xt, getPlanAISuiteProducts as Y, serializeProducts as Yt, getProductByDomain as Z, toProductCard as Zt, calculateAnnualRevenue as _, getProductsBySubdomain as _t, CompetitorGap as a, getProductStatusSummary as at, calculateTotalDevelopmentCost as b, getProductsByTech as bt, PaginatedResult as c, getProductsByApp as ct, ProductCategory as d, getProductsByDatabase as dt, getProductBySlug as et, ProductHealthScore as f, getProductsByDomainName as ft, buildProductCardMap as g, getProductsByStatus as gt, ProductStatusSummary as h, getProductsBySimilarStack as ht, CategorySummary as i, getProductHealthScore as it, getAllHealthScores as j, getRelatedProducts as jt, getAllApps as k, getRecentlyUpdatedProducts as kt, Product as l, getProductsByCategories as lt, ProductStatus as m, getProductsByServiceModule as mt, BOLDMIND_PRODUCTS as n, getProductDependents as nt, DatabaseType as o, getProductWebsiteUrl as ot, ProductPair as p, getProductsByPriority as pt, getLowPriorityProducts as q, projectRevenue as qt, BuildPlan as r, getProductFont as rt, PRODUCT_CATEGORIES as s, getProductsByAnyTag as st, BOLDMIND_FONT_CONFIG as t, getProductDependencies as tt, ProductCard as u, getProductsByCategory as ut, calculateProjectedRevenue as v, getProductsByTags as vt, estimateDevelopmentCost as w, getProductsWithSubdomain as wt, calculateTotalMonthlyRevenue as x, getProductsLaunchingThisYear as xt, calculateROI as y, getProductsByTeamSize as yt, getAverageRevenuePerLiveProduct as z, getTopOpportunityGap as zt };
//# sourceMappingURL=products-BcLbeltI.d.ts.map