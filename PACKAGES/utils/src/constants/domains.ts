// packages/utils/src/constants/domains.ts

export interface DomainMapping {
  domain: string;
  subdomain?: string;
  productSlug: string;
  productName: string;
  status: 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT';
  category: string;
  apiEndpoint?: string;
}

export const DOMAIN_MAPPINGS: DomainMapping[] = [
  // === LIVE PRODUCTS ===
  {
    domain: 'boldmind.ng',
    productSlug: 'boldmind-hub',
    productName: 'BoldMind Hub',
    status: 'LIVE',
    category: 'hub',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'amebogist.ng',
    productSlug: 'amebogist',
    productName: 'AmeboGist',
    status: 'LIVE',
    category: 'media',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'educenter.com.ng',
    productSlug: 'educenter',
    productName: 'EduCenter',
    status: 'LIVE',
    category: 'education',
    apiEndpoint: 'api.boldmind.ng',
  },
  
  // === PLANAI SUITE ===
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/',
    productSlug: 'planai-landing',
    productName: 'PlanAI Landing',
    status: 'LIVE',
    category: 'ai',
    apiEndpoint: 'receptionist.api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/receptionist',
    productSlug: 'ai-receptionist',
    productName: 'AI Receptionist',
    status: 'LIVE',
    category: 'ai',
    apiEndpoint: 'receptionist.api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/credibility',
    productSlug: 'credibility-hubs',
    productName: 'Credibility Hubs',
    status: 'BUILDING',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/planning',
    productSlug: 'business-planning',
    productName: 'Business Planning',
    status: 'PLANNED',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/finance',
    productSlug: 'financial-forecasting',
    productName: 'Financial Forecasting',
    status: 'PLANNED',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/investor',
    productSlug: 'investor-readiness',
    productName: 'Investor Readiness',
    status: 'PLANNED',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/design',
    productSlug: 'branding-design',
    productName: 'Branding & Design',
    status: 'BUILDING',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/store',
    productSlug: 'digital-storefronts',
    productName: 'Digital Storefronts',
    status: 'BUILDING',
    category: 'marketplace',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/marketing',
    productSlug: 'marketing-automation',
    productName: 'Marketing Automation',
    status: 'BUILDING',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'planai.boldmind.ng',
    subdomain: '/analytics',
    productSlug: 'analytics-dashboard',
    productName: 'Analytics Dashboard',
    status: 'BUILDING',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  
  // === BUILDING PRODUCTS ===
  {
    domain: 'os.boldmind.ng',
    productSlug: 'boldmind-os',
    productName: 'BoldMind OS',
    status: 'BUILDING',
    category: 'productivity',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'fit.boldmind.ng',
    productSlug: 'naija-fither',
    productName: 'Naija FitHer',
    status: 'BUILDING',
    category: 'health',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'email.boldmind.ng',
    productSlug: 'emailscraper-pro',
    productName: 'EmailScraper Pro',
    status: 'BUILDING',
    category: 'productivity',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'social.boldmind.ng',
    productSlug: 'social-factory',
    productName: 'Social Factory',
    status: 'BUILDING',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  
  // === CONCEPT APPS ===
  {
    domain: 'safe.boldmind.ng',
    productSlug: 'safe-ai',
    productName: 'SAFE AI',
    status: 'CONCEPT',
    category: 'security',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'hustle.boldmind.ng',
    productSlug: 'afrohustle-os',
    productName: 'AfroHustle OS',
    status: 'CONCEPT',
    category: 'education',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'gig.educenter.com.ng',
    productSlug: 'naijagig-matcher',
    productName: 'NaijaGig Matcher',
    status: 'CONCEPT',
    category: 'marketplace',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'kolo.boldmind.ng',
    productSlug: 'kolo-ai',
    productName: 'KoloAI',
    status: 'CONCEPT',
    category: 'fintech',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'border.boldmind.ng',
    productSlug: 'borderless-remit',
    productName: 'BorderlessRemit',
    status: 'BUILDING',
    category: 'fintech',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'receipt.boldmind.ng',
    productSlug: 'receipt-genius',
    productName: 'ReceiptGenius',
    status: 'BUILDING',
    category: 'fintech',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'power.boldmind.ng',
    productSlug: 'power-alert',
    productName: 'PowerAlert',
    status: 'CONCEPT',
    category: 'utilities',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'farm.boldmind.ng',
    productSlug: 'farmgate-direct',
    productName: 'FarmGate Direct',
    status: 'CONCEPT',
    category: 'marketplace',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'copy.amebogist.ng',
    productSlug: 'afrocopy-ai',
    productName: 'AfroCopy AI',
    status: 'CONCEPT',
    category: 'ai',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'skills.educenter.com.ng',
    productSlug: 'skill2cash',
    productName: 'Skill2Cash',
    status: 'CONCEPT',
    category: 'marketplace',
    apiEndpoint: 'api.boldmind.ng',
  },
  {
    domain: 'anon.amebogist.ng',
    productSlug: 'anontruth-mic',
    productName: 'AnonTruth Mic',
    status: 'CONCEPT',
    category: 'social',
    apiEndpoint: 'api.boldmind.ng',
  },
];

// === HELPER FUNCTIONS ===

/**
 * Get product slug from domain
 */
export function getProductFromDomain(domain: string, subdomain?: string): string | null {
  const mapping = DOMAIN_MAPPINGS.find(m => {
    if (subdomain) {
      return m.domain === domain && m.subdomain === subdomain;
    }
    return m.domain === domain && !m.subdomain;
  });
  return mapping?.productSlug || null;
}

/**
 * Get domain from product slug
 */
export function getDomainFromProduct(productSlug: string): DomainMapping | null {
  return DOMAIN_MAPPINGS.find(m => m.productSlug === productSlug) || null;
}

/**
 * Get all domains by status
 */
export function getDomainsByStatus(status: 'LIVE' | 'BUILDING' | 'PLANNED' | 'CONCEPT'): DomainMapping[] {
  return DOMAIN_MAPPINGS.filter(m => m.status === status);
}

/**
 * Get API endpoint for product
 */
export function getAPIEndpoint(productSlug: string): string {
  const mapping = getDomainFromProduct(productSlug);
  return mapping?.apiEndpoint || 'api.boldmind.ng';
}

/**
 * Check if domain is live
 */
export function isLiveDomain(domain: string): boolean {
  const mapping = DOMAIN_MAPPINGS.find(m => m.domain === domain);
  return mapping?.status === 'LIVE';
}

export default DOMAIN_MAPPINGS;