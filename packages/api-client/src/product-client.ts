// packages/api-client/src/product-client.ts
/**
 * Product-Aware API Client Factory
 * Integrates with ENV_CONFIG for domain detection
 */

import APIClient from './client';
import { apiConfig, getProductServiceURL, hasProductService, type ProductSlug } from './config';
import { ENV_CONFIG } from '@boldmind/config';
import { BOLDMIND_PRODUCTS } from '@boldmind/utils';

// ============================================================================
// PRODUCT CLIENT FACTORY
// ============================================================================

export class ProductAPIClient {
    private clients: Map<string, APIClient> = new Map();
    private productSlug: ProductSlug;

    constructor(productSlug: ProductSlug) {
        this.productSlug = productSlug;
        this.initializeClients();
    }

    private initializeClients() {
        // Shared service clients (all products use these)
        this.clients.set('user', new APIClient(apiConfig.user.baseURL));
        this.clients.set('payment', new APIClient(apiConfig.payment.baseURL));
        this.clients.set('analytics', new APIClient(apiConfig.analytics.baseURL));
        this.clients.set('notification', new APIClient(apiConfig.notification.baseURL));
        this.clients.set('media', new APIClient(apiConfig.media.baseURL));
        this.clients.set('ai', new APIClient(apiConfig.ai.baseURL));

        // Product-specific client or gateway fallback
        const productServiceURL = getProductServiceURL(this.productSlug);
        this.clients.set('product', new APIClient(productServiceURL));

        // Gateway client
        this.clients.set('gateway', new APIClient(apiConfig.gateway.baseURL));
    }

    getSharedClient(service: 'user' | 'payment' | 'analytics' | 'notification' | 'media' | 'ai'): APIClient {
        const client = this.clients.get(service);
        if (!client) {
            throw new Error(`Client for service "${service}" not found`);
        }
        return client;
    }

    getProductClient(): APIClient {
        const client = this.clients.get('product');
        if (!client) {
            throw new Error('Product client not found');
        }
        return client;
    }

    getGatewayClient(): APIClient {
        const client = this.clients.get('gateway');
        if (!client) {
            throw new Error('Gateway client not found');
        }
        return client;
    }

    hasDedicatedService(): boolean {
        return hasProductService(this.productSlug);
    }

    getProductSlug(): ProductSlug {
        return this.productSlug;
    }
}

// ============================================================================
// SINGLETON INSTANCES (CACHED BY PRODUCT)
// ============================================================================

const productClients = new Map<ProductSlug, ProductAPIClient>();

export function getProductAPIClient(productSlug: ProductSlug): ProductAPIClient {
    if (!productClients.has(productSlug)) {
        productClients.set(productSlug, new ProductAPIClient(productSlug));
    }
    return productClients.get(productSlug)!;
}

export function resetProductClients() {
    productClients.clear();
}

// ============================================================================
// CURRENT PRODUCT DETECTION (Using ENV_CONFIG)
// ============================================================================

/**
 * Detect current product from domain using ENV_CONFIG
 */
export function detectCurrentProduct(): ProductSlug | null {
    if (typeof window === 'undefined') {
        // Server-side: check environment variable
        const productSlug = process.env['NEXT_PUBLIC_PRODUCT_SLUG'];
        return productSlug as ProductSlug || null;
    }

    // Client-side: detect from hostname using ENV_CONFIG.DOMAINS
    const hostname = window.location.hostname;

    // Create reverse mapping from domains to product slugs
    const domainToProductMap: Record<string, ProductSlug> = {};

    // Map ENV_CONFIG domains to product slugs
    for (const [_key, domain] of Object.entries(ENV_CONFIG.DOMAINS)) {
        const product = BOLDMIND_PRODUCTS.find(p => {
            // Match by domain
            if (p.domain === domain) return true;
            // Match by full domain with subdomain
            if (p.subdomain && `${p.subdomain}.${p.domain}` === domain) return true;
            return false;
        });

        if (product) {
            domainToProductMap[domain] = product.slug as ProductSlug;
        }
    }

    // Check exact hostname match
    if (domainToProductMap[hostname]) {
        return domainToProductMap[hostname];
    }

    // Check if hostname ends with any configured domain
    for (const [domain, slug] of Object.entries(domainToProductMap)) {
        if (hostname.endsWith(domain)) {
            return slug;
        }
    }

    // Development: port-based detection
    if (hostname.includes('localhost') || hostname.includes('127.0.0.1')) {
        const port = window.location.port;
        const pathname = window.location.pathname;

        // Port-based detection
        const portMap: Record<string, ProductSlug> = {
            '3000': 'boldmind-hub',
            '3001': 'amebogist',
            '3002': 'educenter',
            '3003': 'boldmind-os',
            '3004': 'naija-fither',
            '3005': 'emailscraper-pro',
            '3006': 'social-factory',
            '3007': 'safe-ai',
            '3008': 'ai-receptionist',
            '3009': 'afrohustle-os',
        };

        if (port && portMap[port]) {
            return portMap[port];
        }

        // Path-based detection for PlanAI suite
        if (pathname.startsWith('/receptionist')) return 'ai-receptionist';
        if (pathname.startsWith('/credibility')) return 'credibility-hubs';
        if (pathname.startsWith('/planning')) return 'business-planning';
        if (pathname.startsWith('/finance')) return 'financial-forecasting';
        if (pathname.startsWith('/investor')) return 'investor-readiness';
        if (pathname.startsWith('/design')) return 'branding-design';
        if (pathname.startsWith('/store')) return 'digital-storefronts';
        if (pathname.startsWith('/marketing')) return 'marketing-automation';
        if (pathname.startsWith('/analytics')) return 'analytics-dashboard';
    }

    return null;
}

/**
 * Get API client for the current product
 */
export function getCurrentProductClient(): ProductAPIClient | null {
    const productSlug = detectCurrentProduct();

    if (!productSlug) {
        console.warn('[ProductAPIClient] Could not detect current product');
        return null;
    }

    return getProductAPIClient(productSlug);
}

// ============================================================================
// CONVENIENCE EXPORTS
// ============================================================================

/**
 * Create a product-scoped API client factory
 */
export function createProductAPI(productSlug: ProductSlug) {
    const productClient = getProductAPIClient(productSlug);

    return {
        // Shared service clients
        user: productClient.getSharedClient('user'),
        payment: productClient.getSharedClient('payment'),
        analytics: productClient.getSharedClient('analytics'),
        notification: productClient.getSharedClient('notification'),
        media: productClient.getSharedClient('media'),
        ai: productClient.getSharedClient('ai'),

        // Product-specific client
        product: productClient.getProductClient(),

        // Gateway client
        gateway: productClient.getGatewayClient(),

        // Metadata
        productSlug,
        hasDedicatedService: productClient.hasDedicatedService(),
    };
}

/**
 * Auto-detect and create API client for current product
 */
export function createCurrentProductAPI() {
    const productSlug = detectCurrentProduct();

    if (!productSlug) {
        throw new Error(
            'Could not detect current product. Set NEXT_PUBLIC_PRODUCT_SLUG environment variable.'
        );
    }

    return createProductAPI(productSlug);
}

// ============================================================================
// EXPORTS
// ============================================================================

export type { ProductSlug };