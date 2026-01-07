// Cross-app analytics tracking for BoldMind Ecosystem
// Google Analytics 4 + Cookie sharing across all apps

import { getAnalytics, logEvent, setUserId, setUserProperties } from 'firebase/analytics';
import { initializeApp } from 'firebase/app';

// Shared GA4 measurement ID
export const GA4_MEASUREMENT_ID = 'G-XXXXXXXXXX'; // Replace with your GA4 ID

// Firebase config (for apps using Firebase)
const firebaseConfig = {
  apiKey: process.env.NEXT_PUBLIC_FIREBASE_API_KEY,
  authDomain: process.env.NEXT_PUBLIC_FIREBASE_AUTH_DOMAIN,
  projectId: process.env.NEXT_PUBLIC_FIREBASE_PROJECT_ID,
  storageBucket: process.env.NEXT_PUBLIC_FIREBASE_STORAGE_BUCKET,
  messagingSenderId: process.env.NEXT_PUBLIC_FIREBASE_MESSAGING_SENDER_ID,
  appId: process.env.NEXT_PUBLIC_FIREBASE_APP_ID,
  measurementId: GA4_MEASUREMENT_ID,
};

// Initialize Firebase (if using Firebase)
let analytics: any = null;
if (typeof window !== 'undefined') {
  try {
    const app = initializeApp(firebaseConfig);
    analytics = getAnalytics(app);
  } catch (error) {
    console.warn('Firebase analytics initialization failed:', error);
  }
}

// Cookie names for cross-app tracking
export const COOKIE_NAMES = {
  USER_ID: 'boldmind_user_id',
  SESSION_ID: 'boldmind_session_id',
  LAST_APP: 'boldmind_last_app',
  PRODUCTS_VIEWED: 'boldmind_products_viewed',
};

// Generate or retrieve cross-app user ID
export function getCrossAppUserId(): string {
  if (typeof window === 'undefined') return '';
  
  let userId = localStorage.getItem(COOKIE_NAMES.USER_ID);
  if (!userId) {
    userId = 'user_' + Date.now() + '_' + Math.random().toString(36).substr(2, 9);
    localStorage.setItem(COOKIE_NAMES.USER_ID, userId);
    
    // Set in cookies for cross-domain tracking
    document.cookie = `${COOKIE_NAMES.USER_ID}=${userId}; path=/; max-age=31536000; domain=.boldmind.ng; samesite=lax`;
  }
  
  return userId;
}

// Track user activity across apps
export function trackCrossAppEvent(
  eventName: string,
  eventParams?: Record<string, any>,
  appName?: string
) {
  const userId = getCrossAppUserId();
  const currentApp = appName || getCurrentAppName();
  
  // Store last app visited
  localStorage.setItem(COOKIE_NAMES.LAST_APP, currentApp);
  
  // Track in GA4
  if (analytics) {
    logEvent(analytics, eventName, {
      ...eventParams,
      user_id: userId,
      app_name: currentApp,
      ecosystem: 'boldmind',
    });
  }
  
  // Also send to your analytics service
  console.log(`[Analytics] ${eventName}:`, {
    userId,
    app: currentApp,
    params: eventParams,
    timestamp: new Date().toISOString(),
  });
}

// Get current app name from URL
export function getCurrentAppName(): string {
  if (typeof window === 'undefined') return 'unknown';
  
  const hostname = window.location.hostname;
  if (hostname.includes('boldmind.ng')) {
    if (hostname.includes('amebogist')) return 'amebogist';
    if (hostname.includes('educenter')) return 'educenter';
    if (hostname.includes('os.')) return 'boldmind-os';
    if (hostname.includes('naijafither')) return 'naija-fither';
    if (hostname.includes('emailscraper')) return 'emailscraper-pro';
    if (hostname.includes('safeai')) return 'safe-naija';
    if (hostname.includes('receptionist')) return 'planai-receptionist';
    if (hostname.includes('socialfactory')) return 'planai-social';
    return 'boldmind-hub';
  }
  
  return hostname;
}

// Track product view across ecosystem
export function trackProductView(productId: string, productName: string) {
  const viewedProducts = JSON.parse(
    localStorage.getItem(COOKIE_NAMES.PRODUCTS_VIEWED) || '[]'
  );
  
  // Add to viewed products if not already there
  if (!viewedProducts.includes(productId)) {
    viewedProducts.push(productId);
    localStorage.setItem(
      COOKIE_NAMES.PRODUCTS_VIEWED,
      JSON.stringify(viewedProducts.slice(-10)) // Keep last 10
    );
  }
  
  trackCrossAppEvent('view_product', {
    product_id: productId,
    product_name: productName,
    viewed_count: viewedProducts.length,
  });
}

// Initialize cross-app tracking
export function initCrossAppTracking() {
  if (typeof window === 'undefined') return;
  
  const userId = getCrossAppUserId();
  const lastApp = localStorage.getItem(COOKIE_NAMES.LAST_APP) || 'first_visit';
  const currentApp = getCurrentAppName();
  
  // Track app visit
  trackCrossAppEvent('app_visit', {
    previous_app: lastApp,
    is_returning: lastApp !== 'first_visit',
  });
  
  // Set user ID for analytics
  if (analytics) {
    setUserId(analytics, userId);
    setUserProperties(analytics, {
      preferred_app: currentApp,
      ecosystem_user: true,
    });
  }
  
  console.log(`Cross-app tracking initialized for ${currentApp}, User: ${userId}`);
}

// SEO and Google Search Console helpers
export function generateJsonLdSchema(appName: string, pageData: any) {
  return {
    '@context': 'https://schema.org',
    '@type': 'WebSite',
    name: `BoldMind ${appName}`,
    url: window.location.origin,
    potentialAction: {
      '@type': 'SearchAction',
      target: `${window.location.origin}/search?q={search_term_string}`,
      'query-input': 'required name=search_term_string',
    },
    ...pageData,
  };
}

export function submitToGoogleIndex(url: string) {
  // This would typically be done via Google Search Console API
  // For now, we'll log it
  console.log(`[SEO] Submitting to Google Index: ${url}`);
  
  // You would implement actual submission via:
  // 1. Google Search Console API
  // 2. sitemap.xml updates
  // 3. ping services
}
