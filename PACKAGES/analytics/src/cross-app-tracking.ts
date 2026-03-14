// PACKAGES/analytics/src/cross-app-tracking.ts (FIXED)

import { BOLDMIND_PRODUCTS } from '@boldmind/utils';
import type { CrossDomainNavParams, InternalNavEvent, NavigationIntent } from '@boldmind/utils';

export interface CrossAppEvent {
  userId: string;
  sessionId: string;
  eventType: 'navigation' | 'conversion' | 'engagement' | 'purchase';
  fromProduct: string;
  toProduct?: string;
  timestamp: string;
  intent?: NavigationIntent;
  metadata?: Record<string, any>;
}

export interface UserProductAffinity {
  productSlug: string;
  productName: string;
  category: string;
  visits: number;
  conversions: number;
  lastVisit: Date;
  totalRevenue: number;
}

export interface ProductRecommendation {
  productSlug: string;
  productName: string;
  reason: 'same_category' | 'complementary' | 'popular_path' | 'similar_tags';
  score: number;
  icon: string;
}

export class CrossAppTracker {
  private static instance: CrossAppTracker;
  private userJourneys: Map<string, CrossAppEvent[]> = new Map();
  private popularPaths: Map<string, number> = new Map(); // "fromProduct->toProduct" -> count

  private constructor() {
    this.loadFromStorage();
  }

  static getInstance(): CrossAppTracker {
    if (!CrossAppTracker.instance) {
      CrossAppTracker.instance = new CrossAppTracker();
    }
    return CrossAppTracker.instance;
  }

  /**
    * Track cross-product navigation from InternalNavEvent
    */
  trackNavigationEvent(event: InternalNavEvent, navParams: CrossDomainNavParams) {
    const crossAppEvent: CrossAppEvent = {
      userId: event.user_id || 'anonymous',
      sessionId: event.session_id,
      eventType: 'navigation',
      fromProduct: event.from_product,
      toProduct: event.to_product,
      timestamp: event.timestamp.toISOString(),
      ...(event.intent && { intent: event.intent }), // Only add if defined
      metadata: {
        fromPage: event.from_page,
        toPage: event.to_page,
        deviceType: event.device_type,
        referrer: event.referrer,
        ...navParams,
      }
    };

    this.addToJourney(crossAppEvent.userId, crossAppEvent);
    this.updatePopularPaths(event.from_product, event.to_product);
    this.sendToAnalytics(crossAppEvent);
  }

  /**
   * Track navigation between products
   */
  trackNavigation(
    userId: string,
    sessionId: string,
    fromProduct: string,
    toProduct: string,
    intent?: NavigationIntent,
    metadata?: Record<string, any>
  ) {
    const event: CrossAppEvent = {
      userId,
      sessionId,
      eventType: 'navigation',
      fromProduct,
      toProduct,
      timestamp: new Date().toISOString(),
      ...(intent && { intent }), // Only add if defined
      metadata: {
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined,
        ...metadata,
      }
    };

    this.addToJourney(userId, event);
    this.updatePopularPaths(fromProduct, toProduct);
    this.sendToAnalytics(event);
  }

  /**
   * Track conversion (purchase, signup, etc.)
   */
  trackConversion(
    userId: string,
    sessionId: string,
    product: string,
    amount: number,
    conversionType: 'purchase' | 'signup' | 'subscription' | 'trial',
    metadata?: Record<string, any>
  ) {
    const event: CrossAppEvent = {
      userId,
      sessionId,
      eventType: 'conversion',
      fromProduct: product,
      timestamp: new Date().toISOString(),
      metadata: {
        amount,
        conversionType,
        currency: 'NGN',
        ...metadata,
      }
    };

    this.addToJourney(userId, event);
    this.sendToAnalytics(event);
  }

  /**
   * Track engagement (feature use, content view, etc.)
   */
  trackEngagement(
    userId: string,
    sessionId: string,
    product: string,
    action: string,
    metadata?: Record<string, any>
  ) {
    const event: CrossAppEvent = {
      userId,
      sessionId,
      eventType: 'engagement',
      fromProduct: product,
      timestamp: new Date().toISOString(),
      metadata: {
        action,
        ...metadata,
      }
    };

    this.addToJourney(userId, event);
    this.sendToAnalytics(event);
  }

  /**
   * Track purchase
   */
  trackPurchase(
    userId: string,
    sessionId: string,
    product: string,
    amount: number,
    items?: Array<{ name: string; quantity: number; price: number }>,
    metadata?: Record<string, any>
  ) {
    const event: CrossAppEvent = {
      userId,
      sessionId,
      eventType: 'purchase',
      fromProduct: product,
      timestamp: new Date().toISOString(),
      metadata: {
        amount,
        items,
        currency: 'NGN',
        ...metadata,
      }
    };

    this.addToJourney(userId, event);
    this.sendToAnalytics(event);
  }

  private addToJourney(userId: string, event: CrossAppEvent) {
    if (!this.userJourneys.has(userId)) {
      this.userJourneys.set(userId, []);
    }
    this.userJourneys.get(userId)!.push(event);

    // Keep only last 100 events per user
    const journey = this.userJourneys.get(userId)!;
    if (journey.length > 100) {
      this.userJourneys.set(userId, journey.slice(-100));
    }

    this.saveToStorage();
  }

  private updatePopularPaths(fromProduct: string, toProduct: string) {
    const pathKey = `${fromProduct}->${toProduct}`;
    this.popularPaths.set(pathKey, (this.popularPaths.get(pathKey) || 0) + 1);
  }

  private sendToAnalytics(event: CrossAppEvent) {
    // Send to Google Analytics
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', `cross_app_${event.eventType}`, {
        from_product: event.fromProduct,
        to_product: event.toProduct,
        user_id: event.userId,
        session_id: event.sessionId,
        intent: event.intent,
        ...event.metadata,
      });
    }

    // Send to PostHog
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture(`cross_app_${event.eventType}`, {
        from_product: event.fromProduct,
        to_product: event.toProduct,
        user_id: event.userId,
        session_id: event.sessionId,
        intent: event.intent,
        ...event.metadata,
      });
    }

    // Send to custom analytics endpoint
    this.sendToCustomAnalytics(event);
  }

  private async sendToCustomAnalytics(event: CrossAppEvent) {
    try {
      const apiEndpoint = process.env['NEXT_PUBLIC_API_ENDPOINT'] || 'https://api.boldmind.ng';

      await fetch(`${apiEndpoint}/analytics/cross-app`, {
        method: 'POST',
        headers: {
          'Content-Type': 'application/json',
        },
        body: JSON.stringify(event),
        keepalive: true,
      });
    } catch (error) {
      console.error('Failed to send cross-app analytics:', error);
    }
  }

  /**
   * Get user's complete journey across products
   */
  getUserJourney(userId: string): CrossAppEvent[] {
    return this.userJourneys.get(userId) || [];
  }

  /**
   * Get user's product affinity scores
   */
  getProductAffinity(userId: string): UserProductAffinity[] {
    const journey = this.getUserJourney(userId);
    const affinityMap = new Map<string, UserProductAffinity>();

    journey.forEach(event => {
      const productSlug = event.toProduct || event.fromProduct;
      const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);

      if (!product) return;

      if (!affinityMap.has(productSlug)) {
        affinityMap.set(productSlug, {
          productSlug,
          productName: product.name,
          category: product.category,
          visits: 0,
          conversions: 0,
          lastVisit: new Date(event.timestamp),
          totalRevenue: 0,
        });
      }

      const affinity = affinityMap.get(productSlug)!;

      // Update visits
      if (event.eventType === 'navigation') {
        affinity.visits++;
      }

      // Update conversions
      if (event.eventType === 'conversion') {
        affinity.conversions++;
        affinity.totalRevenue += event.metadata?.['amount'] || 0;
      }

      // Update last visit
      const eventDate = new Date(event.timestamp);
      if (eventDate > affinity.lastVisit) {
        affinity.lastVisit = eventDate;
      }
    });

    return Array.from(affinityMap.values())
      .sort((a, b) => b.visits - a.visits);
  }

  /**
   * Get personalized product recommendations
   */
  getRecommendedProducts(userId: string, limit: number = 5): ProductRecommendation[] {
    const affinity = this.getProductAffinity(userId);
    const userProducts = new Set(affinity.map(a => a.productSlug));
    const recommendations = new Map<string, ProductRecommendation>();

    // Score products based on different factors
    affinity.forEach(userAffinity => {
      const product = BOLDMIND_PRODUCTS.find(p => p.slug === userAffinity.productSlug);
      if (!product) return;

      // Recommend products in same category
      BOLDMIND_PRODUCTS
        .filter(p =>
          p.category === product.category &&
          !userProducts.has(p.slug) &&
          p.status === 'LIVE'
        )
        .forEach(p => {
          const key = p.slug;
          if (!recommendations.has(key)) {
            recommendations.set(key, {
              productSlug: p.slug,
              productName: p.name,
              reason: 'same_category',
              score: 0,
              icon: p.icon,
            });
          }
          recommendations.get(key)!.score += 3;
        });

      // Recommend based on shared tags
      product.tags.forEach(tag => {
        BOLDMIND_PRODUCTS
          .filter(p =>
            p.tags.includes(tag) &&
            !userProducts.has(p.slug) &&
            p.status === 'LIVE'
          )
          .forEach(p => {
            const key = p.slug;
            if (!recommendations.has(key)) {
              recommendations.set(key, {
                productSlug: p.slug,
                productName: p.name,
                reason: 'similar_tags',
                score: 0,
                icon: p.icon,
              });
            }
            recommendations.get(key)!.score += 2;
          });
      });
    });

    // Add popular path recommendations
    const popularNextProducts = this.getPopularNextProducts(
      affinity.length > 0 ? affinity[0]!.productSlug : ''
    );

    popularNextProducts.forEach(productSlug => {
      if (!userProducts.has(productSlug)) {
        const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
        if (product && product.status === 'LIVE') {
          const key = product.slug;
          if (!recommendations.has(key)) {
            recommendations.set(key, {
              productSlug: product.slug,
              productName: product.name,
              reason: 'popular_path',
              score: 0,
              icon: product.icon,
            });
          }
          recommendations.get(key)!.score += 5;
        }
      }
    });

    // Add complementary products based on business logic
    const complementary = this.getComplementaryProducts(
      affinity.length > 0 ? affinity[0]!.productSlug : ''
    );

    complementary.forEach(productSlug => {
      if (!userProducts.has(productSlug)) {
        const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
        if (product && product.status === 'LIVE') {
          const key = product.slug;
          if (!recommendations.has(key)) {
            recommendations.set(key, {
              productSlug: product.slug,
              productName: product.name,
              reason: 'complementary',
              score: 0,
              icon: product.icon,
            });
          }
          recommendations.get(key)!.score += 4;
        }
      }
    });

    return Array.from(recommendations.values())
      .sort((a, b) => b.score - a.score)
      .slice(0, limit);
  }

  /**
   * Get most popular next products after visiting a product
   */
  getPopularNextProducts(fromProduct: string, limit: number = 3): string[] {
    const paths = Array.from(this.popularPaths.entries())
      .filter(([path]) => path.startsWith(`${fromProduct}->`))
      .sort((a, b) => b[1] - a[1])
      .slice(0, limit)
      .map(([path]) => path.split('->')[1])
      .filter((product): product is string => product !== undefined);

    return paths;
  }

  /**
   * Get complementary products based on business logic
   */
  private getComplementaryProducts(currentProduct: string): string[] {
    const complementaryMap: Record<string, string[]> = {
      // AI tools complement each other
      'ai-receptionist': ['social-factory', 'business-planning', 'marketing-automation'],
      'social-factory': ['ai-receptionist', 'branding-design', 'analytics-dashboard'],
      'branding-design': ['social-factory', 'digital-storefronts', 'marketing-automation'],

      // Business tools
      'business-planning': ['financial-forecasting', 'investor-readiness', 'ai-receptionist'],
      'financial-forecasting': ['business-planning', 'investor-readiness', 'analytics-dashboard'],
      'investor-readiness': ['business-planning', 'financial-forecasting', 'credibility-hubs'],

      // Education products
      'educenter': ['amebogist', 'boldmind-os', 'naija-fither'],
      'amebogist': ['educenter', 'social-factory', 'afrocopy-ai'],

      // Productivity
      'boldmind-os': ['emailscraper-pro', 'educenter', 'ai-receptionist'],
      'emailscraper-pro': ['boldmind-os', 'social-factory', 'ai-receptionist'],

      // Marketplace products
      'digital-storefronts': ['marketing-automation', 'branding-design', 'analytics-dashboard'],

      // Health & Wellness
      'naija-fither': ['educenter', 'boldmind-os'],
    };

    return complementaryMap[currentProduct] || [];
  }

  /**
   * Get conversion funnel analytics
   */
  getConversionFunnel(userId: string): {
    stages: Array<{
      product: string;
      timestamp: Date;
      converted: boolean;
      intent?: NavigationIntent;
    }>;
    conversionRate: number;
    timeToConversion?: number; // in hours
  } {
    const journey = this.getUserJourney(userId);
    const stages = journey.map(event => {
      const stage: {
        product: string;
        timestamp: Date;
        converted: boolean;
        intent?: NavigationIntent;
      } = {
        product: event.toProduct || event.fromProduct,
        timestamp: new Date(event.timestamp),
        converted: event.eventType === 'conversion' || event.eventType === 'purchase',
      };

      // Only add intent if it exists
      if (event.intent) {
        stage.intent = event.intent;
      }

      return stage;
    });

    const totalStages = stages.length;
    const conversions = stages.filter(s => s.converted).length;
    const conversionRate = totalStages > 0 ? (conversions / totalStages) * 100 : 0;

    // Calculate time to first conversion
    const firstConversion = stages.find(s => s.converted);
    const firstVisit = stages[0];
    const timeToConversion = firstConversion && firstVisit
      ? (firstConversion.timestamp.getTime() - firstVisit.timestamp.getTime()) / (1000 * 60 * 60)
      : undefined;

    // Build result object, only adding timeToConversion if it exists
    const result: {
      stages: typeof stages;
      conversionRate: number;
      timeToConversion?: number;
    } = {
      stages,
      conversionRate,
    };

    if (timeToConversion !== undefined) {
      result.timeToConversion = timeToConversion;
    }

    return result;
  }
  /**
   * Persist data to localStorage
   */
  private saveToStorage() {
    if (typeof window === 'undefined') return;

    try {
      const data = {
        journeys: Array.from(this.userJourneys.entries()),
        popularPaths: Array.from(this.popularPaths.entries()),
      };
      localStorage.setItem('boldmind_cross_app_data', JSON.stringify(data));
    } catch (error) {
      console.error('Failed to save cross-app data:', error);
    }
  }

  /**
   * Load data from localStorage
   */
  private loadFromStorage() {
    if (typeof window === 'undefined') return;

    try {
      const stored = localStorage.getItem('boldmind_cross_app_data');
      if (stored) {
        const data = JSON.parse(stored);
        this.userJourneys = new Map(data.journeys || []);
        this.popularPaths = new Map(data.popularPaths || []);
      }
    } catch (error) {
      console.error('Failed to load cross-app data:', error);
    }
  }

  /**
   * Clear all tracking data
   */
  clearData() {
    this.userJourneys.clear();
    this.popularPaths.clear();
    if (typeof window === 'undefined') {
      localStorage.removeItem('boldmind_cross_app_data');
    }
  }
}

export const crossAppTracker = CrossAppTracker.getInstance();