import { BOLDMIND_PRODUCTS } from '@boldmind/utils';

export interface CrossAppEvent {
  userId: string;
  eventType: 'navigation' | 'conversion' | 'engagement' | 'purchase';
  fromProduct: string;
  toProduct?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}

export class CrossAppTracker {
  private static instance: CrossAppTracker;
  private userJourneys: Map<string, CrossAppEvent[]> = new Map();

  private constructor() {}

  static getInstance(): CrossAppTracker {
    if (!CrossAppTracker.instance) {
      CrossAppTracker.instance = new CrossAppTracker();
    }
    return CrossAppTracker.instance;
  }

  trackNavigation(userId: string, fromProduct: string, toProduct: string) {
    const event: CrossAppEvent = {
      userId,
      eventType: 'navigation',
      fromProduct,
      toProduct,
      timestamp: new Date().toISOString(),
      metadata: {
        userAgent: typeof navigator !== 'undefined' ? navigator.userAgent : undefined
      }
    };

    this.addToJourney(userId, event);
    this.sendToAnalytics(event);
  }

  trackConversion(userId: string, product: string, amount: number) {
    const event: CrossAppEvent = {
      userId,
      eventType: 'conversion',
      fromProduct: product,
      timestamp: new Date().toISOString(),
      metadata: { amount }
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
    if (this.userJourneys.get(userId)!.length > 100) {
      this.userJourneys.set(userId, this.userJourneys.get(userId)!.slice(-100));
    }
  }

  private sendToAnalytics(event: CrossAppEvent) {
    // Send to your analytics service
    console.log('Cross-app analytics:', event);
    
    // You would typically send to:
    // 1. Google Analytics
    // 2. PostHog
    // 3. Your custom dashboard
    // 4. Data warehouse
  }

  getUserJourney(userId: string): CrossAppEvent[] {
    return this.userJourneys.get(userId) || [];
  }

  getProductAffinity(userId: string): Record<string, number> {
    const journey = this.getUserJourney(userId);
    const affinity: Record<string, number> = {};

    journey.forEach(event => {
      affinity[event.fromProduct] = (affinity[event.fromProduct] || 0) + 1;
      if (event.toProduct) {
        affinity[event.toProduct] = (affinity[event.toProduct] || 0) + 1;
      }
    });

    return affinity;
  }

  getRecommendedProducts(userId: string): string[] {
    const affinity = this.getProductAffinity(userId);
    const userProducts = Object.keys(affinity);
    
    // Find products in same category
    const recommendations = new Set<string>();
    
    userProducts.forEach(productSlug => {
      const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
      if (product) {
        // Recommend other products in same category
        BOLDMIND_PRODUCTS
          .filter(p => p.category === product.category && p.slug !== productSlug)
          .forEach(p => recommendations.add(p.slug));
        
        // Recommend products with similar tags
        product.tags.forEach(tag => {
          BOLDMIND_PRODUCTS
            .filter(p => p.tags.includes(tag) && p.slug !== productSlug)
            .forEach(p => recommendations.add(p.slug));
        });
      }
    });

    return Array.from(recommendations).slice(0, 5); // Return top 5 recommendations
  }
}

export const crossAppTracker = CrossAppTracker.getInstance();