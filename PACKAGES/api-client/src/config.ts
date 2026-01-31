// packages/api-client/src/config.ts
/**
 * API Client Configuration for BoldMind Ecosystem
 * Integrates with @boldmind/config ENV_CONFIG
 */

import { ENV_CONFIG } from '@boldmind/config';
import { BOLDMIND_PRODUCTS } from '@boldmind/utils';

export interface ServiceConfig {
    baseURL: string;
    timeout?: number;
    retryAttempts?: number;
}

// ============================================================================
// PRODUCT SLUG TYPE (from your products catalog)
// ============================================================================

export type ProductSlug =
    | 'boldmind-hub'
    | 'amebogist'
    | 'planai-suite'
    | 'educenter'
    | 'boldmind-os'
    | 'ai-receptionist'
    | 'social-factory'
    | 'credibility-hubs'
    | 'business-planning'
    | 'financial-forecasting'
    | 'investor-readiness'
    | 'branding-design'
    | 'digital-storefronts'
    | 'marketing-automation'
    | 'analytics-dashboard'
    | 'naija-fither'
    | 'emailscraper-pro'
    | 'safe-ai'
    | 'afrohustle-os'
    | 'naijagig-matcher'
    | 'kolo-ai'
    | 'borderless-remit'
    | 'receipt-genius'
    | 'power-alert'
    | 'farmgate-direct'
    | 'afrocopy-ai'
    | 'skill2cash'
    | 'anontruth-mic'

// ============================================================================
// ENVIRONMENT DETECTION
// ============================================================================

const isDevelopment = ENV_CONFIG.NODE_ENV === 'development';
const isProduction = ENV_CONFIG.NODE_ENV === 'production';

// ============================================================================
// DEFAULT SERVICE PORTS (Development only)
// ============================================================================

const DEFAULT_PORTS = {
    // Shared services
    gateway: ENV_CONFIG.SERVICE_PORTS.GATEWAY,
    user: ENV_CONFIG.SERVICE_PORTS.USER,
    payment: ENV_CONFIG.SERVICE_PORTS.PAYMENT,
    notification: ENV_CONFIG.SERVICE_PORTS.NOTIFICATION,
    media: ENV_CONFIG.SERVICE_PORTS.MEDIA,
    analytics: ENV_CONFIG.SERVICE_PORTS.ANALYTICS,
    ai: ENV_CONFIG.SERVICE_PORTS.AI,



    // Product-specific services
    educenter: ENV_CONFIG.SERVICE_PORTS.EDUCENTER,
    amebogist: ENV_CONFIG.SERVICE_PORTS.AMEBOGIST,
    'boldmind-os': ENV_CONFIG.SERVICE_PORTS.BOLDMIND_OS,
    'naija-fither': ENV_CONFIG.SERVICE_PORTS.NAIJA_FITHER,
    'emailscraper-pro': ENV_CONFIG.SERVICE_PORTS.EMAILSCRAPER_PRO,
    'social-factory': ENV_CONFIG.SERVICE_PORTS.SOCIAL_FACTORY,
    'safe-ai': ENV_CONFIG.SERVICE_PORTS.SAFE_AI,
    'ai-receptionist': ENV_CONFIG.SERVICE_PORTS.AI_RECEPTIONIST,
    'planai-suite': ENV_CONFIG.SERVICE_PORTS.PLANAI_SUITE,
    'boldmind-hub': ENV_CONFIG.SERVICE_PORTS.BOLDMIND_HUB,
    'credibility-hubs': ENV_CONFIG.SERVICE_PORTS.CREDIBILITY_HUBS,
    'business-planning': ENV_CONFIG.SERVICE_PORTS.BUSINESS_PLANNING,
    'financial-forecasting': ENV_CONFIG.SERVICE_PORTS.FINANCIAL_FORECASTING,
    'investor-readiness': ENV_CONFIG.SERVICE_PORTS.INVESTOR_READINESS,
    'branding-design': ENV_CONFIG.SERVICE_PORTS.BRANDING_DESIGN,
    'digital-storefronts': ENV_CONFIG.SERVICE_PORTS.DIGITAL_STOREFRONTS,
    'marketing-automation': ENV_CONFIG.SERVICE_PORTS.MARKETING_AUTOMATION,
    'analytics-dashboard': ENV_CONFIG.SERVICE_PORTS.ANALYTICS_DASHBOARD,
    'naijagig-matcher': ENV_CONFIG.SERVICE_PORTS.NAIJAGIG_MATCHER,
    'kolo-ai': ENV_CONFIG.SERVICE_PORTS.KOLO_AI,
    'borderless-remit': ENV_CONFIG.SERVICE_PORTS.BORDERLESS_REMIT,
    'receipt-genius': ENV_CONFIG.SERVICE_PORTS.RECEIPT_GENIUS,
    'power-alert': ENV_CONFIG.SERVICE_PORTS.POWER_ALERT,
    'farmgate-direct': ENV_CONFIG.SERVICE_PORTS.FARMGATE_DIRECT,
    'afrocopy-ai': ENV_CONFIG.SERVICE_PORTS.AFROCOPY_AI,
    skill2cash: ENV_CONFIG.SERVICE_PORTS.SKILL2CASH,
    'anontruth-mic': ENV_CONFIG.SERVICE_PORTS.ANONTRUTH_MIC,
    'afrohustle-os': ENV_CONFIG.SERVICE_PORTS.AFROHUSTLE_OS,
} as const;

// ============================================================================
// SERVICE URL BUILDER
// ============================================================================

function getServiceURL(
    serviceName: string,
    envVar?: string,
    defaultPort?: number
): string {
    // 1. Check environment variable first
    if (envVar && process.env[envVar]) {
        return process.env[envVar]!;
    }

    // 2. Development: use localhost with port
    if (isDevelopment && defaultPort) {
        return `http://localhost:${defaultPort}/api`;
    }

    // 3. Production: use subdomain structure
    if (isProduction) {
        return `https://${serviceName}-api.boldmind.ng/api`;
    }

    // 4. Fallback
    return `http://localhost:${defaultPort || 4000}/api`;
}

// ============================================================================
// API CONFIGURATION
// ============================================================================

export const apiConfig = {
    // === SHARED SERVICES (Used by all products) ===
    gateway: {
        baseURL: getServiceURL(
            'gateway',
            'NEXT_PUBLIC_API_GATEWAY_URL',
            DEFAULT_PORTS.gateway
        ),
        timeout: 30000,
        retryAttempts: 3,
    },

    user: {
        baseURL: getServiceURL(
            'user',
            'NEXT_PUBLIC_USER_SERVICE_URL',
            DEFAULT_PORTS.user
        ),
        timeout: 30000,
        retryAttempts: 3,
    },

    payment: {
        baseURL: getServiceURL(
            'payment',
            'NEXT_PUBLIC_PAYMENT_SERVICE_URL',
            DEFAULT_PORTS.payment
        ),
        timeout: 30000,
        retryAttempts: 3,
    },

    notification: {
        baseURL: getServiceURL(
            'notification',
            'NEXT_PUBLIC_NOTIFICATION_SERVICE_URL',
            DEFAULT_PORTS.notification
        ),
        timeout: 30000,
        retryAttempts: 2,
    },

    media: {
        baseURL: getServiceURL(
            'media',
            'NEXT_PUBLIC_MEDIA_SERVICE_URL',
            DEFAULT_PORTS.media
        ),
        timeout: 60000, // Longer for uploads
        retryAttempts: 2,
    },

    analytics: {
        baseURL: getServiceURL(
            'analytics',
            'NEXT_PUBLIC_ANALYTICS_SERVICE_URL',
            DEFAULT_PORTS.analytics
        ),
        timeout: 30000,
        retryAttempts: 3,
    },

    ai: {
        baseURL: getServiceURL(
            'ai',
            'NEXT_PUBLIC_AI_SERVICE_URL',
            DEFAULT_PORTS.ai
        ),
        timeout: 60000, // Longer for AI operations
        retryAttempts: 1,
    },
};

// ============================================================================
// PRODUCT SERVICE DETECTION
// ============================================================================

/**
 * Get service URL for a specific product
 * Falls back to gateway if product doesn't have dedicated service
 */
export function getProductServiceURL(productSlug: ProductSlug): string {
    const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);

    if (!product) {
        console.warn(`[API Config] Product "${productSlug}" not found, using gateway`);
        return apiConfig.gateway.baseURL;
    }

    // Check if product has dedicated service based on status
    const hasDedicatedService = product.status === 'LIVE' || product.status === 'BUILDING';

    if (!hasDedicatedService) {
        return apiConfig.gateway.baseURL;
    }

    // Map product slugs to service URLs
    const serviceEnvMap: Partial<Record<ProductSlug, string>> = {
        'educenter': 'NEXT_PUBLIC_EDUCENTER_SERVICE_URL',
        'amebogist': 'NEXT_PUBLIC_AMEBOGIST_SERVICE_URL',
        'boldmind-os': 'NEXT_PUBLIC_BOLDMIND_OS_SERVICE_URL',
        'naija-fither': 'NEXT_PUBLIC_NAIJA_FITHER_SERVICE_URL',
        'emailscraper-pro': 'NEXT_PUBLIC_EMAILSCRAPER_SERVICE_URL',
        'social-factory': 'NEXT_PUBLIC_SOCIAL_FACTORY_SERVICE_URL',
        'safe-ai': 'NEXT_PUBLIC_SAFE_AI_SERVICE_URL',
        'ai-receptionist': 'NEXT_PUBLIC_AI_RECEPTIONIST_SERVICE_URL',
        'boldmind-hub': 'NEXT_PUBLIC_HUB_SERVICE_URL',
        'planai-suite': 'NEXT_PUBLIC_PLANAI_SUITE_SERVICE_URL',
        'credibility-hubs': 'NEXT_PUBLIC_CREDIBILITY_HUBS_SERVICE_URL',
        'business-planning': 'NEXT_PUBLIC_BUSINESS_PLANNING_SERVICE_URL',
        'financial-forecasting': 'NEXT_PUBLIC_FINANCIAL_FORECASTING_SERVICE_URL',
        'investor-readiness': 'NEXT_PUBLIC_INVESTOR_READINESS_SERVICE_URL',
        'branding-design': 'NEXT_PUBLIC_BRANDING_DESIGN_SERVICE_URL',
        'digital-storefronts': 'NEXT_PUBLIC_DIGITAL_STOREFRONTS_SERVICE_URL',
        'marketing-automation': 'NEXT_PUBLIC_MARKETING_AUTOMATION_SERVICE_URL',
        'analytics-dashboard': 'NEXT_PUBLIC_ANALYTICS_DASHBOARD_SERVICE_URL',
        'naijagig-matcher': 'NEXT_PUBLIC_NAIJAGIG_MATCHER_SERVICE_URL',
        'kolo-ai': 'NEXT_PUBLIC_KOLO_AI_SERVICE_URL',
        'borderless-remit': 'NEXT_PUBLIC_BORDERLESS_REMIT_SERVICE_URL',
        'receipt-genius': 'NEXT_PUBLIC_RECEIPT_GENIUS_SERVICE_URL',
        'power-alert': 'NEXT_PUBLIC_POWER_ALERT_SERVICE_URL',
        'farmgate-direct': 'NEXT_PUBLIC_FARMGATE_DIRECT_SERVICE_URL',
        'afrocopy-ai': 'NEXT_PUBLIC_AFROCOPY_AI_SERVICE_URL',
        'skill2cash': 'NEXT_PUBLIC_SKILL2CASH_SERVICE_URL',
        'anontruth-mic': 'NEXT_PUBLIC_ANONTRUTH_MIC_SERVICE_URL',
    };

    const envVar = serviceEnvMap[productSlug];
    const port = DEFAULT_PORTS[productSlug as keyof typeof DEFAULT_PORTS];

    if (envVar || port) {
        return getServiceURL(productSlug, envVar, port);
    }

    // Fallback to gateway
    return apiConfig.gateway.baseURL;
}

/**
 * Check if product has a dedicated service
 */
export function hasProductService(productSlug: ProductSlug): boolean {
    const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
    return product ? (product.status === 'LIVE' || product.status === 'BUILDING') : false;
}

/**
 * Get database type for a product
 */
export function getProductDatabase(productSlug: ProductSlug): 'postgres' | 'mongodb' | null {
    const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
    return product?.database || null;
}

/**
 * Get all configured service URLs (for debugging)
 */
export function getAllServiceURLs(): Record<string, string> {
    return {
        gateway: apiConfig.gateway.baseURL,
        user: apiConfig.user.baseURL,
        payment: apiConfig.payment.baseURL,
        notification: apiConfig.notification.baseURL,
        media: apiConfig.media.baseURL,
        analytics: apiConfig.analytics.baseURL,
        ai: apiConfig.ai.baseURL,
    };
}

/**
 * Validate configuration
 */
export function validateConfig(): { valid: boolean; errors: string[] } {
    const errors: string[] = [];

    // Check required services
    const requiredServices: (keyof typeof apiConfig)[] = ['gateway', 'user', 'payment'];

    for (const service of requiredServices) {
        const url = apiConfig[service].baseURL;
        if (!url || url === '') {
            errors.push(`Missing configuration for ${service}`);
        }
    }

    return {
        valid: errors.length === 0,
        errors,
    };
}

// ============================================================================
// EXPORTS
// ============================================================================

export default apiConfig;

// Log configuration in development
if (isDevelopment && typeof window !== 'undefined') {
    console.log('[API Config] Service URLs:', getAllServiceURLs());
    console.log('[API Config] Environment:', ENV_CONFIG.NODE_ENV);

    const validation = validateConfig();
    if (!validation.valid) {
        console.warn('[API Config] Configuration errors:', validation.errors);
    }
}