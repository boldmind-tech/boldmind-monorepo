// PACKAGES/utils/src/navigation/cross-domain.ts

import { getDomainFromProduct, getProductFromDomain, DOMAIN_MAPPINGS } from '../constants/domains';
import type { CrossDomainNavParams, NavigationIntent, InternalNavEvent } from './types';

export class CrossDomainNavigation {
    /**
     * Build a URL to navigate between BoldMind products
     * Maintains auth session and tracks internal navigation
     */
    static buildProductURL(
        targetProductSlug: string,
        params: Partial<CrossDomainNavParams> = {}
    ): string {
        const targetMapping = getDomainFromProduct(targetProductSlug);

        if (!targetMapping) {
            throw new Error(`Unknown product slug: ${targetProductSlug}`);
        }

        // Build base URL
        const protocol = process.env['NODE_ENV'] === 'production' ? 'https' : 'http';
        const baseUrl = `${protocol}://${targetMapping.domain}${targetMapping.subdomain || ''}`;
        const url = new URL(baseUrl);

        // Add authentication (for session continuity)
        if (params.auth_token) {
            url.searchParams.set('_bt', params.auth_token); // BoldMind Token
        }
        if (params.session_id) {
            url.searchParams.set('_sid', params.session_id);
        }
        if (params.user_id) {
            url.searchParams.set('_uid', params.user_id);
        }

        // Add navigation context (for analytics)
        const currentProduct = params.from_product || this.getCurrentProductSlug();
        url.searchParams.set('_from', currentProduct);

        if (params.from_page) {
            url.searchParams.set('_fp', params.from_page);
        }
        if (params.from_feature) {
            url.searchParams.set('_ff', params.from_feature);
        }

        // Add intent (for conversion tracking)
        if (params.intent) {
            url.searchParams.set('_intent', params.intent);
        }
        if (params.action) {
            url.searchParams.set('_action', params.action);
        }

        // Add referral code if present
        if (params.referral_code) {
            url.searchParams.set('_ref', params.referral_code);
        }

        // Add timestamp for analytics
        url.searchParams.set('_ts', Date.now().toString());

        return url.toString();
    }

    /**
     * Parse incoming navigation parameters from URL
     */
    static parseIncomingNav(): CrossDomainNavParams | null {
        if (typeof window === 'undefined') return null;

        const params = new URLSearchParams(window.location.search);

        const fromProduct = params.get('_from');
        if (!fromProduct) return null;

        // Validate it's actually a BoldMind product
        if (!this.isInternalProduct(fromProduct)) return null;

        return {
            // Auth
            auth_token: params.get('_bt') || undefined,
            session_id: params.get('_sid') || undefined,
            user_id: params.get('_uid') || undefined,

            // Navigation
            from_product: fromProduct,
            from_page: params.get('_fp') || undefined,
            from_feature: params.get('_ff') || undefined,

            // Intent
            intent: (params.get('_intent') as NavigationIntent) || undefined,
            action: params.get('_action') || undefined,

            // Metadata
            nav_timestamp: parseInt(params.get('_ts') || '0') || undefined,
            referral_code: params.get('_ref') || undefined,
        };
    }

    /**
     * Get current product slug from domain/subdomain
     */
    static getCurrentProductSlug(): string {
        if (typeof window === 'undefined') return 'unknown';

        const domain = window.location.hostname;
        const pathname = window.location.pathname;

        // Check for subdomain paths (e.g., /receptionist on planai.boldmind.ng)
        const mapping = DOMAIN_MAPPINGS.find(m => {
            if (m.subdomain && m.subdomain !== '/') {
                return m.domain === domain && pathname.startsWith(m.subdomain);
            }
            return m.domain === domain && !m.subdomain;
        });

        return mapping?.productSlug || 'unknown';
    }

    /**
     * Get current product name
     */
    static getCurrentProductName(): string {
        const slug = this.getCurrentProductSlug();
        const mapping = getDomainFromProduct(slug);
        return mapping?.productName || 'Unknown Product';
    }

    /**
     * Check if slug is a valid BoldMind product
     */
    static isInternalProduct(slug: string): boolean {
        return DOMAIN_MAPPINGS.some(m => m.productSlug === slug);
    }

    /**
     * Clean URL by removing navigation parameters
     * (Call this after processing the params)
     */
    static cleanURL(): void {
        if (typeof window === 'undefined') return;

        const url = new URL(window.location.href);
        const paramsToRemove = ['_bt', '_sid', '_uid', '_from', '_fp', '_ff', '_intent', '_action', '_ts', '_ref'];

        let modified = false;
        paramsToRemove.forEach(param => {
            if (url.searchParams.has(param)) {
                url.searchParams.delete(param);
                modified = true;
            }
        });

        if (modified) {
            window.history.replaceState({}, '', url.toString());
        }
    }

    /**
     * Store navigation params in session for later use
     */
    static storeNavParams(params: CrossDomainNavParams): void {
        if (typeof window === 'undefined') return;
        sessionStorage.setItem('boldmind_nav_params', JSON.stringify(params));
    }

    /**
     * Retrieve stored navigation params
     */
    static getStoredNavParams(): CrossDomainNavParams | null {
        if (typeof window === 'undefined') return null;
        const stored = sessionStorage.getItem('boldmind_nav_params');
        return stored ? JSON.parse(stored) : null;
    }

    /**
     * Build analytics event from navigation
     */
    static buildAnalyticsEvent(
        navParams: CrossDomainNavParams,
        additionalData?: Record<string, any>
    ): InternalNavEvent {
        return {
            event_id: `nav_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`,
            timestamp: new Date(),

            from_product: navParams.from_product,
            to_product: this.getCurrentProductSlug(),
            from_page: navParams.from_page,
            to_page: typeof window !== 'undefined' ? window.location.pathname : undefined,

            user_id: navParams.user_id,
            session_id: navParams.session_id || this.generateSessionId(),

            intent: navParams.intent,

            device_type: typeof window !== 'undefined'
                ? /Mobile|Android|iPhone/i.test(navigator.userAgent) ? 'mobile' : 'web'
                : undefined,
            referrer: typeof window !== 'undefined' ? document.referrer : undefined,

            ...additionalData,
        };
    }

    /**
     * Generate a session ID if none exists
     */
    private static generateSessionId(): string {
        if (typeof window === 'undefined') return 'server';

        let sessionId = sessionStorage.getItem('boldmind_session_id');
        if (!sessionId) {
            sessionId = `session_${Date.now()}_${Math.random().toString(36).substr(2, 9)}`;
            sessionStorage.setItem('boldmind_session_id', sessionId);
        }
        return sessionId;
    }
}