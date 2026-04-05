//#region src/flywheel.d.ts
interface CustomerJourney {
  userId: string;
  firstSeen: Date;
  lastActive: Date;
  products: string[];
  touchpoints: Array<{
    timestamp: Date;
    product: string;
    action: 'view' | 'signup' | 'purchase' | 'share' | 'referral';
    data?: any;
  }>;
  segment: 'awareness' | 'education' | 'enablement' | 'advocacy';
}
interface FlywheelMetrics {
  awareness: number;
  education: number;
  enablement: number;
  advocacy: number;
  loopStrength: number;
  conversionRates: {
    awarenessToEducation: number;
    educationToEnablement: number;
    enablementToAdvocacy: number;
  };
  revenue: {
    total: number;
    byProduct: Record<string, number>;
    lifetimeValue: number;
  };
}
declare class BoldMindFlywheel {
  private social;
  private customerJourney;
  private eventQueue;
  private isProcessingQueue;
  constructor(socialConfig?: any);
  private initializeFlywheel;
  trackCustomerJourney(userId: string, event: {
    product: string;
    action: 'view' | 'signup' | 'purchase' | 'share' | 'referral';
    data?: any;
  }): Promise<void>;
  private processJourneyEvent;
  private determineCustomerSegment;
  private triggerFlywheelActions;
  private handleViewAction;
  private handleSignupAction;
  private handlePurchaseAction;
  private handleAdvocacyAction;
  private getComplementaryProducts;
  private sendPersonalizedContent;
  private queueEvent;
  private processEventQueue;
  getFlywheelMetrics(_timePeriod?: 'day' | 'week' | 'month'): Promise<FlywheelMetrics>;
  private calculateRevenueByProduct;
  private updateFlywheelMetrics;
  getCustomerInsights(): Promise<{
    segments: Record<string, number>;
    topProducts: Array<{
      product: string;
      users: number;
    }>;
    engagementTrend: 'growing' | 'stable' | 'declining';
  }>;
  private calculateEngagementTrend;
}
declare function runFlywheelExample(): Promise<{
  flywheel: BoldMindFlywheel;
  metrics: FlywheelMetrics;
  insights: {
    segments: Record<string, number>;
    topProducts: Array<{
      product: string;
      users: number;
    }>;
    engagementTrend: "growing" | "stable" | "declining";
  };
}>;
//#endregion
//#region src/cross-app-tracking.d.ts
interface CrossAppEvent {
  userId: string;
  eventType: 'navigation' | 'conversion' | 'engagement' | 'purchase';
  fromProduct: string;
  toProduct?: string;
  timestamp: string;
  metadata?: Record<string, any>;
}
declare class CrossAppTracker {
  private static instance;
  private userJourneys;
  private constructor();
  static getInstance(): CrossAppTracker;
  trackNavigation(userId: string, fromProduct: string, toProduct: string): void;
  trackConversion(userId: string, product: string, amount: number): void;
  private addToJourney;
  private sendToAnalytics;
  getUserJourney(userId: string): CrossAppEvent[];
  getProductAffinity(userId: string): Record<string, number>;
  getRecommendedProducts(userId: string): string[];
}
declare const crossAppTracker: CrossAppTracker;
//#endregion
//#region src/tracker.d.ts
interface AnalyticsEvent {
  name: string;
  product: string;
  userId?: string;
  properties?: Record<string, any>;
}
//#endregion
//#region src/index.d.ts
interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}
declare const analytics: {
  pageview: (url: string) => void;
  event: ({
    action,
    category,
    label,
    value
  }: GAEvent) => void;
};
declare const mixpanel: {
  track: (eventName: string, properties?: Record<string, any>) => void;
  identify: (userId: string) => void;
  people: {
    set: (properties: Record<string, any>) => void;
  };
};
declare const posthog: {
  capture: (eventName: string, properties?: Record<string, any>) => void;
  identify: (userId: string, properties?: Record<string, any>) => void;
};
interface TrackEventOptions {
  eventName: string;
  properties?: Record<string, any>;
  userId?: string;
}
declare function trackEvent({
  eventName,
  properties,
  userId
}: TrackEventOptions): void;
declare const Events: {
  USER_REGISTERED: string;
  USER_LOGGED_IN: string;
  USER_LOGGED_OUT: string;
  USER_UPDATED_PROFILE: string;
  PRODUCT_VIEWED: string;
  PRODUCT_ADDED_TO_CART: string;
  PRODUCT_PURCHASED: string;
  PAYMENT_INITIATED: string;
  PAYMENT_SUCCESS: string;
  PAYMENT_FAILED: string;
  SUBSCRIPTION_STARTED: string;
  SUBSCRIPTION_RENEWED: string;
  SUBSCRIPTION_CANCELLED: string;
  ARTICLE_VIEWED: string;
  VIDEO_PLAYED: string;
  DOWNLOAD_STARTED: string;
  LEAD_CAPTURED: string;
  FORM_SUBMITTED: string;
  EMAIL_SUBSCRIBED: string;
  AI_GENERATION_STARTED: string;
  AI_GENERATION_COMPLETED: string;
  AUTOMATION_TRIGGERED: string;
};
declare function trackPageView(url: string): void;
declare function trackUserSignup(userId: string, email: string, method: string): void;
declare function trackPurchase(userId: string, amount: number, product: string): void;
declare function trackSubscription(userId: string, plan: string, amount: number, interval: 'monthly' | 'yearly'): void;
//#endregion
export { AnalyticsEvent, BoldMindFlywheel, CrossAppEvent, CrossAppTracker, CustomerJourney, Events, FlywheelMetrics, GAEvent, TrackEventOptions, analytics, crossAppTracker, mixpanel, posthog, runFlywheelExample, trackEvent, trackPageView, trackPurchase, trackSubscription, trackUserSignup };
//# sourceMappingURL=index.d.ts.map