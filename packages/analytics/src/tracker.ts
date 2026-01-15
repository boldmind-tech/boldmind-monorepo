import { BOLDMIND_PRODUCTS } from '@boldmind/utils';

export interface AnalyticsEvent {
  name: string;
  product: string;
  userId?: string;
  properties?: Record<string, any>;
}

// Mock implementations - replace with real implementations
function sendToGoogleAnalytics(event: AnalyticsEvent) {
  if (typeof window !== 'undefined' && (window as any).gtag) {
    (window as any).gtag('event', event.name, {
      ...event.properties,
      product: event.product
    });
  }
}

function sendToPostHog(event: AnalyticsEvent) {
  if (typeof window !== 'undefined' && (window as any).posthog) {
    (window as any).posthog.capture(event.name, {
      ...event.properties,
      product: event.product
    });
  }
}

function sendToCustomDashboard(event: AnalyticsEvent) {
  // Send to your custom dashboard
  console.log('Custom analytics:', event);
}

function updateUserJourney(userId: string, event: AnalyticsEvent) {
  // Update user journey in your database
  console.log('User journey updated:', { userId, event });
}

export function trackEvent(event: AnalyticsEvent) {
  // Send to multiple analytics platforms
  sendToGoogleAnalytics(event);
  sendToPostHog(event);
  sendToCustomDashboard(event);
  
  // Track cross-product journeys
  if (event.userId) {
    updateUserJourney(event.userId, event);
  }
}

// Product-specific tracking
export function trackProductView(productSlug: string, userId?: string) {
  const product = BOLDMIND_PRODUCTS.find(p => p.slug === productSlug);
  
  trackEvent({
    name: 'product_view',
    product: productSlug,
    userId,
    properties: {
      product_name: product?.name,
      product_category: product?.category,
      product_status: product?.status
    }
  });
}

export function trackConversion(
  productSlug: string, 
  conversionType: string, 
  userId?: string, 
  amount?: number
) {
  trackEvent({
    name: 'conversion',
    product: productSlug,
    userId,
    properties: {
      conversion_type: conversionType,
      amount,
      timestamp: new Date().toISOString()
    }
  });
}

// Cross-product journey tracking
export function trackCrossProductNavigation(
  fromProduct: string,
  toProduct: string,
  userId?: string
) {
  trackEvent({
    name: 'cross_product_navigation',
    product: fromProduct,
    userId,
    properties: {
      from_product: fromProduct,
      to_product: toProduct,
      navigation_path: `${fromProduct} → ${toProduct}`
    }
  });
}