// packages/analytics/src/index.ts

// ===================================
// GOOGLE ANALYTICS 4
// ===================================
export interface GAEvent {
  action: string;
  category: string;
  label?: string;
  value?: number;
}

export const analytics = {
  // Send pageview
  pageview: (url: string) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('config', process.env.NEXT_PUBLIC_GA_ID, {
        page_path: url,
      });
    }
  },

  // Send custom event
  event: ({ action, category, label, value }: GAEvent) => {
    if (typeof window !== 'undefined' && (window as any).gtag) {
      (window as any).gtag('event', action, {
        event_category: category,
        event_label: label,
        value: value,
      });
    }
  },
};

// ===================================
// MIXPANEL
// ===================================
export const mixpanel = {
  track: (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.track(eventName, properties);
    }
  },

  identify: (userId: string) => {
    if (typeof window !== 'undefined' && (window as any).mixpanel) {
      (window as any).mixpanel.identify(userId);
    }
  },

  people: {
    set: (properties: Record<string, any>) => {
      if (typeof window !== 'undefined' && (window as any).mixpanel) {
        (window as any).mixpanel.people.set(properties);
      }
    },
  },
};

// ===================================
// POSTHOG
// ===================================
export const posthog = {
  capture: (eventName: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.capture(eventName, properties);
    }
  },

  identify: (userId: string, properties?: Record<string, any>) => {
    if (typeof window !== 'undefined' && (window as any).posthog) {
      (window as any).posthog.identify(userId, properties);
    }
  },
};

// ===================================
// UNIFIED EVENT TRACKING
// ===================================
export interface TrackEventOptions {
  eventName: string;
  properties?: Record<string, any>;
  userId?: string;
}

export function trackEvent({ eventName, properties, userId }: TrackEventOptions) {
  // Track in all platforms
  analytics.event({
    action: eventName,
    category: properties?.category || 'General',
    label: properties?.label,
    value: properties?.value,
  });

  mixpanel.track(eventName, properties);
  posthog.capture(eventName, properties);

  // Identify user if provided
  if (userId) {
    mixpanel.identify(userId);
    posthog.identify(userId, properties);
  }
}

// ===================================
// PREDEFINED EVENTS
// ===================================
export const Events = {
  // User events
  USER_REGISTERED: 'user_registered',
  USER_LOGGED_IN: 'user_logged_in',
  USER_LOGGED_OUT: 'user_logged_out',
  USER_UPDATED_PROFILE: 'user_updated_profile',

  // Product events
  PRODUCT_VIEWED: 'product_viewed',
  PRODUCT_ADDED_TO_CART: 'product_added_to_cart',
  PRODUCT_PURCHASED: 'product_purchased',

  // Payment events
  PAYMENT_INITIATED: 'payment_initiated',
  PAYMENT_SUCCESS: 'payment_success',
  PAYMENT_FAILED: 'payment_failed',

  // Subscription events
  SUBSCRIPTION_STARTED: 'subscription_started',
  SUBSCRIPTION_RENEWED: 'subscription_renewed',
  SUBSCRIPTION_CANCELLED: 'subscription_cancelled',

  // Content events
  ARTICLE_VIEWED: 'article_viewed',
  VIDEO_PLAYED: 'video_played',
  DOWNLOAD_STARTED: 'download_started',

  // Lead events
  LEAD_CAPTURED: 'lead_captured',
  FORM_SUBMITTED: 'form_submitted',
  EMAIL_SUBSCRIBED: 'email_subscribed',

  // PlanAI events
  AI_GENERATION_STARTED: 'ai_generation_started',
  AI_GENERATION_COMPLETED: 'ai_generation_completed',
  AUTOMATION_TRIGGERED: 'automation_triggered',
};

// ===================================
// HELPER FUNCTIONS
// ===================================
export function trackPageView(url: string) {
  analytics.pageview(url);
  posthog.capture('$pageview', { url });
}

export function trackUserSignup(userId: string, email: string, method: string) {
  trackEvent({
    eventName: Events.USER_REGISTERED,
    properties: { email, method },
    userId,
  });
}

export function trackPurchase(userId: string, amount: number, product: string) {
  trackEvent({
    eventName: Events.PRODUCT_PURCHASED,
    properties: { amount, product, currency: 'NGN' },
    userId,
  });
}

export function trackSubscription(
  userId: string,
  plan: string,
  amount: number,
  interval: 'monthly' | 'yearly'
) {
  trackEvent({
    eventName: Events.SUBSCRIPTION_STARTED,
    properties: { plan, amount, interval, currency: 'NGN' },
    userId,
  });
}

// ===================================
// EXPORTS
// ===================================
// export * from './events/user-events';
// export * from './events/product-events';
// export * from './events/payment-events';
