//#region src/constants/domains.d.ts
interface DomainMapping {
  domain: string;
  subdomain?: string;
  productSlug: string;
  productName: string;
  status: 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT';
  category: string;
  apiEndpoint?: string;
}
declare const DOMAIN_MAPPINGS: DomainMapping[];
/**
 * Get product slug from domain
 */
declare function getProductFromDomain(domain: string, subdomain?: string): string | null;
/**
 * Get domain from product slug
 */
declare function getDomainFromProduct(productSlug: string): DomainMapping | null;
/**
 * Get all domains by status
 */
declare function getDomainsByStatus(status: 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT'): DomainMapping[];
/**
 * Get API endpoint for product
 */
declare function getAPIEndpoint(productSlug: string): string;
/**
 * Check if domain is live
 */
declare function isLiveDomain(domain: string): boolean;
//#endregion
export { DOMAIN_MAPPINGS, DOMAIN_MAPPINGS as default, DomainMapping, getAPIEndpoint, getDomainFromProduct, getDomainsByStatus, getProductFromDomain, isLiveDomain };
//# sourceMappingURL=domains.d.ts.map