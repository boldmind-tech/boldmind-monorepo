#!/bin/bash
# align-boldmind.sh
# Aligns current structure with the ideal folder structure

set -e

echo "🔄 Aligning BoldMind Monorepo Structure..."

# Define colors
GREEN='\033[0;32m'
YELLOW='\033[1;33m'
NC='\033[0m'

print_status() {
    echo -e "${GREEN}✅${NC} $1"
}

print_warning() {
    echo -e "${YELLOW}⚠️ ${NC} $1"
}

# 1. Create missing directories for existing apps
print_status "Creating missing app directories..."

# Web apps directories
WEB_APPS=(
    "boldmind-hub"
    "amebogist"
    "educenter"
    "boldmind-os"
    "naija-fither"
    "emailscraper-pro"
    "safe-naija"
    "afrohustle-os"
    "naijagig-matcher"
    "kolo-ai"
    "borderless-remit"
    "receipt-genius"
    "power-alert"
    "farmgate-direct"
    "afrocopy-ai"
    "skill2cash"
    "anontruth-mic"
)

for app in "${WEB_APPS[@]}"; do
    # Create nested app directories
    mkdir -p "apps/web/$app/app/(auth)"
    mkdir -p "apps/web/$app/app/(dashboard)"
    mkdir -p "apps/web/$app/app/api"
    mkdir -p "apps/web/$app/components"
    mkdir -p "apps/web/$app/lib"
    mkdir -p "apps/web/$app/public"
    
    # Create specific API directories based on app type
    case $app in
        "amebogist")
            mkdir -p "apps/web/$app/app/news/[slug]"
            mkdir -p "apps/web/$app/app/api/posts"
            mkdir -p "apps/web/$app/app/api/adsense"
            ;;
        "educenter")
            mkdir -p "apps/web/$app/app/courses/[id]"
            mkdir -p "apps/web/$app/app/jamb"
            mkdir -p "apps/web/$app/app/api/auth"
            mkdir -p "apps/web/$app/app/api/payments"
            mkdir -p "apps/web/$app/app/api/courses"
            ;;
        "boldmind-os")
            mkdir -p "apps/web/$app/app/settings"
            mkdir -p "apps/web/$app/app/api/ai"
            mkdir -p "apps/web/$app/app/api/n8n"
            ;;
        "naija-fither")
            mkdir -p "apps/web/$app/app/meal-plans/[id]"
            mkdir -p "apps/web/$app/app/workouts/[id]"
            mkdir -p "apps/web/$app/app/api/ai"
            ;;
        "emailscraper-pro")
            mkdir -p "apps/web/$app/app/finder"
            mkdir -p "apps/web/$app/app/api/webhook"
            ;;
        "safe-naija")
            mkdir -p "apps/web/$app/app/incidents/[id]"
            mkdir -p "apps/web/$app/app/api/ai"
            ;;
    esac
done

# PlanAI apps directories
PLANAI_APPS=(
    "receptionist"
    "social-factory"
    "credibility-hubs"
    "business-planning"
    "financial-forecasting"
    "investor-readiness"
    "branding-design"
    "digital-storefronts"
    "marketing-automation"
    "analytics-dashboard"
)

for app in "${PLANAI_APPS[@]}"; do
    mkdir -p "apps/planai/$app/app/(auth)"
    mkdir -p "apps/planai/$app/app/(dashboard)"
    mkdir -p "apps/planai/$app/app/api"
    mkdir -p "apps/planai/$app/components"
    mkdir -p "apps/planai/$app/lib"
    
    case $app in
        "receptionist")
            mkdir -p "apps/planai/$app/app/clients/[id]"
            mkdir -p "apps/planai/$app/app/api/meta"
            ;;
        "social-factory")
            mkdir -p "apps/planai/$app/workflows"
            ;;
    esac
done

# 2. Create shared packages structure
print_status "Creating shared packages structure..."

# UI package structure
mkdir -p packages/ui/src/components
mkdir -p packages/ui/src/styles
mkdir -p packages/ui/src/hooks
mkdir -p packages/ui/src/utils

# Create basic UI components if they don't exist
UI_COMPONENTS=(
    "Button.tsx"
    "Input.tsx"
    "Card.tsx"
    "Modal.tsx"
    "Navbar.tsx"
    "Footer.tsx"
    "Logo.tsx"
    "SocialLinks.tsx"
    "StatusBadge.tsx"
    "LoadingSpinner.tsx"
    "ErrorBoundary.tsx"
)

for component in "${UI_COMPONENTS[@]}"; do
    if [ ! -f "packages/ui/src/components/$component" ]; then
        touch "packages/ui/src/components/$component"
        print_status "Created placeholder: packages/ui/src/components/$component"
    fi
done

# Create index.ts for UI components
cat > packages/ui/src/components/index.ts << 'EOF'
// Export all UI components
export { default as Button } from './Button';
export { default as Input } from './Input';
export { default as Card } from './Card';
export { default as Modal } from './Modal';
export { default as Navbar } from './Navbar';
export { default as Footer } from './Footer';
export { default as Logo } from './Logo';
export { default as SocialLinks } from './SocialLinks';
export { default as StatusBadge } from './StatusBadge';
export { default as LoadingSpinner } from './LoadingSpinner';
export { default as ErrorBoundary } from './ErrorBoundary';
EOF

# Utils package structure
mkdir -p packages/utils/src/helpers
mkdir -p packages/utils/src/hooks
mkdir -p packages/utils/src/constants
mkdir -p packages/utils/src/types

# Create basic utilities
UTILS_FILES=(
    "helpers/date.ts"
    "helpers/currency.ts"
    "helpers/string.ts"
    "helpers/array.ts"
    "helpers/validation.ts"
    "hooks/useDebounce.ts"
    "hooks/useLocalStorage.ts"
    "hooks/useMediaQuery.ts"
    "hooks/useClickOutside.ts"
    "constants/routes.ts"
    "constants/colors.ts"
    "constants/products.ts"
    "types/user.ts"
    "types/product.ts"
    "types/subscription.ts"
)

for file in "${UTILS_FILES[@]}"; do
    mkdir -p "packages/utils/src/$(dirname "$file")"
    if [ ! -f "packages/utils/src/$file" ]; then
        touch "packages/utils/src/$file"
        print_status "Created placeholder: packages/utils/src/$file"
    fi
done

# 3. Create analytics configuration for cross-app tracking
print_status "Setting up cross-app analytics..."

cat > packages/analytics/src/cross-app-tracking.ts << 'EOF'
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
EOF

# 4. Create shared SEO utilities
print_status "Creating shared SEO utilities..."

cat > packages/seo/src/cross-domain-seo.ts << 'EOF'
// Cross-domain SEO utilities for BoldMind Ecosystem

import { Metadata } from 'next';

// Base metadata for all BoldMind apps
export const BASE_METADATA: Metadata = {
  metadataBase: new URL('https://boldmind.ng'),
  keywords: [
    'BoldMind',
    'Nigerian tech',
    'African startups',
    'Productivity tools',
    'AI solutions',
    'Education technology',
    'News platform',
    'Business tools',
  ],
  authors: [{ name: 'BoldMind Team' }],
  creator: 'BoldMind',
  publisher: 'BoldMind',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
};

// Generate metadata for specific app
export function generateAppMetadata(
  appName: string,
  title: string,
  description: string,
  path: string = '/'
): Metadata {
  const appDomain = getAppDomain(appName);
  
  return {
    ...BASE_METADATA,
    title: `${title} | BoldMind ${appName}`,
    description,
    openGraph: {
      type: 'website',
      url: `https://${appDomain}${path}`,
      title: `${title} | BoldMind ${appName}`,
      description,
      siteName: `BoldMind ${appName}`,
      images: [
        {
          url: `https://${appDomain}/og-image.png`,
          width: 1200,
          height: 630,
          alt: title,
        },
      ],
    },
    twitter: {
      card: 'summary_large_image',
      title: `${title} | BoldMind ${appName}`,
      description,
      images: [`https://${appDomain}/og-image.png`],
      creator: '@boldmind_ng',
    },
    robots: {
      index: true,
      follow: true,
      googleBot: {
        index: true,
        follow: true,
        'max-video-preview': -1,
        'max-image-preview': 'large',
        'max-snippet': -1,
      },
    },
    alternates: {
      canonical: `https://${appDomain}${path}`,
      languages: {
        'en-US': `https://${appDomain}${path}`,
      },
    },
  };
}

// Get domain for specific app
export function getAppDomain(appName: string): string {
  const domains: Record<string, string> = {
    'boldmind-hub': 'boldmind.ng',
    'amebogist': 'amebogist.ng',
    'educenter': 'educenter.com.ng',
    'boldmind-os': 'os.boldmind.ng',
    'naija-fither': 'naijafither.boldmind.ng',
    'emailscraper-pro': 'emailscraper.boldmind.ng',
    'safe-naija': 'safeai.boldmind.ng',
    'planai-receptionist': 'receptionist.boldmind.ng',
    'planai-social': 'socialfactory.boldmind.ng',
    'credibility-hubs': 'credibility.boldmind.ng',
    'business-planning': 'businessplan.boldmind.ng',
    'financial-forecasting': 'financialforecasting.boldmind.ng',
    'investor-readiness': 'investorreadiness.boldmind.ng',
    'branding-design': 'brandingdesign.boldmind.ng',
    'digital-storefronts': 'digitalstorefront.boldmind.ng',
    'marketing-automation': 'marketingautomation.boldmind.ng',
    'analytics-dashboard': 'analytics.boldmind.ng',
    'kolo-ai': 'kolo.boldmind.ng',
    'afrohustle-os': 'afrohustle.boldmind.ng',
    'anontruth-mic': 'anontruth.boldmind.ng',
    'borderless-remit': 'borderlessremit.boldmind.ng',
    'farmgate-direct': 'farmgatedirect.boldmind.ng',
    'naijagig-matcher': 'naijagigmatcher.boldmind.ng',
    'power-alert': 'poweralerts.boldmind.ng',
    'receipt-genius': 'receiptgenius.boldmind.ng',
    'skill2cash': 'skill2cash.boldmind.ng',
    'afrocopy-ai': 'afrocopy.boldmind.ng',
  };
  
  return domains[appName] || 'boldmind.ng';
}

// Generate sitemap for all apps
export async function generateEcosystemSitemap() {
  const apps = Object.keys(getAppDomain(''));
  const sitemapEntries = [];
  
  for (const app of apps) {
    const domain = getAppDomain(app);
    // Add main pages for each app
    sitemapEntries.push({
      url: `https://${domain}`,
      lastModified: new Date(),
      changeFrequency: 'daily' as const,
      priority: 1.0,
    });
    
    // Add other important pages (you would dynamically generate these)
    sitemapEntries.push({
      url: `https://${domain}/about`,
      lastModified: new Date(),
      changeFrequency: 'monthly' as const,
      priority: 0.8,
    });
    
    sitemapEntries.push({
      url: `https://${domain}/contact`,
      lastModified: new Date(),
      changeFrequency: 'yearly' as const,
      priority: 0.5,
    });
  }
  
  return sitemapEntries;
}

// Generate robots.txt content
export function generateRobotsTxt(allowAll: boolean = true): string {
  if (allowAll) {
    return `# BoldMind Ecosystem - Allow all crawlers
User-agent: *
Allow: /

# Sitemaps
Sitemap: https://boldmind.ng/sitemap.xml
Sitemap: https://amebogist.ng/sitemap.xml
Sitemap: https://educenter.com.ng/sitemap.xml
# Add all other app sitemaps here

# Crawl delay
Crawl-delay: 10

# Disallow admin areas
Disallow: /admin/
Disallow: /api/ (except for public APIs)
Disallow: /private/
`;
  } else {
    return `# BoldMind Ecosystem - Development/Staging
User-agent: *
Disallow: /
`;
  }
}

// JSON-LD schema for organization
export function generateOrganizationSchema() {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: 'BoldMind',
    url: 'https://boldmind.ng',
    logo: 'https://boldmind.ng/logo.png',
    sameAs: [
      'https://twitter.com/boldmind_ng',
      'https://facebook.com/boldmind',
      'https://linkedin.com/company/boldmind',
      'https://instagram.com/boldmind_ng',
    ],
    contactPoint: {
      '@type': 'ContactPoint',
      telephone: '+234-xxx-xxx-xxxx',
      contactType: 'customer service',
      areaServed: 'NG',
      availableLanguage: ['English'],
    },
  };
}
EOF

# 5. Create unified environment configuration
print_status "Creating unified environment configuration..."

cat > packages/config/shared/env-config.ts << 'EOF'
// Unified environment configuration for BoldMind Ecosystem

export const ENV_CONFIG = {
  // Domains
  DOMAINS: {
    HUB: process.env.NEXT_PUBLIC_HUB_DOMAIN || 'boldmind.ng',
    AMEBOGIST: process.env.NEXT_PUBLIC_AMEBO_DOMAIN || 'amebogist.ng',
    EDUCENTER: process.env.NEXT_PUBLIC_EDUCENTER_DOMAIN || 'educenter.com.ng',
    BOLDMIND_OS: process.env.NEXT_PUBLIC_OS_DOMAIN || 'os.boldmind.ng',
    // Add all other domains
  },
  
  // Analytics
  ANALYTICS: {
    GA4_ID: process.env.NEXT_PUBLIC_GA4_ID || 'G-XXXXXXXXXX',
    MIXPANEL_TOKEN: process.env.NEXT_PUBLIC_MIXPANEL_TOKEN,
    POSTHOG_KEY: process.env.NEXT_PUBLIC_POSTHOG_KEY,
    POSTHOG_HOST: process.env.NEXT_PUBLIC_POSTHOG_HOST || 'https://app.posthog.com',
  },
  
  // Social Media
  SOCIAL: {
    TWITTER: '@boldmind_ng',
    FACEBOOK: 'boldmind',
    LINKEDIN: 'company/boldmind',
    INSTAGRAM: 'boldmind_ng',
    WHATSAPP: process.env.NEXT_PUBLIC_WHATSAPP_NUMBER,
  },
  
  // Email (using one email account as requested)
  EMAIL: {
    SUPPORT: process.env.SUPPORT_EMAIL || 'support@boldmind.ng',
    CONTACT: process.env.CONTACT_EMAIL || 'contact@boldmind.ng',
    NO_REPLY: process.env.NO_REPLY_EMAIL || 'noreply@boldmind.ng',
    RESEND_API_KEY: process.env.RESEND_API_KEY,
  },
  
  // Payment
  PAYMENT: {
    PAYSTACK_PUBLIC_KEY: process.env.NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY,
    PAYSTACK_SECRET_KEY: process.env.PAYSTACK_SECRET_KEY,
    CURRENCY: 'NGN',
  },
  
  // Database
  DATABASE: {
    MONGODB_URI: process.env.MONGODB_URI || 'mongodb://localhost:27017/boldmind',
    POSTGRES_URL: process.env.POSTGRES_URL || 'postgresql://user:password@localhost:5432/boldmind',
    REDIS_URL: process.env.REDIS_URL || 'redis://localhost:6379',
  },
  
  // Authentication
  AUTH: {
    NEXTAUTH_SECRET: process.env.NEXTAUTH_SECRET,
    NEXTAUTH_URL: process.env.NEXTAUTH_URL || 'http://localhost:3000',
    SUPABASE_URL: process.env.NEXT_PUBLIC_SUPABASE_URL,
    SUPABASE_KEY: process.env.NEXT_PUBLIC_SUPABASE_KEY,
  },
  
  // AI Services
  AI: {
    OPENAI_API_KEY: process.env.OPENAI_API_KEY,
    OPENAI_ORG_ID: process.env.OPENAI_ORG_ID,
    ANTHROPIC_API_KEY: process.env.ANTHROPIC_API_KEY,
    HUGGINGFACE_TOKEN: process.env.HUGGINGFACE_TOKEN,
  },
  
  // Storage
  STORAGE: {
    CLOUDINARY_CLOUD_NAME: process.env.CLOUDINARY_CLOUD_NAME,
    CLOUDINARY_API_KEY: process.env.CLOUDINARY_API_KEY,
    CLOUDINARY_API_SECRET: process.env.CLOUDINARY_API_SECRET,
    AWS_ACCESS_KEY_ID: process.env.AWS_ACCESS_KEY_ID,
    AWS_SECRET_ACCESS_KEY: process.env.AWS_SECRET_ACCESS_KEY,
    AWS_REGION: process.env.AWS_REGION || 'af-south-1',
  },
  
  // External APIs
  APIS: {
    TERMII_API_KEY: process.env.TERMII_API_KEY,
    HUNTER_API_KEY: process.env.HUNTER_API_KEY,
    PICTORY_API_KEY: process.env.PICTORY_API_KEY,
    META_ACCESS_TOKEN: process.env.META_ACCESS_TOKEN,
  },
  
  // Feature Flags
  FEATURES: {
    ENABLE_CROSS_APP_TRACKING: process.env.NEXT_PUBLIC_ENABLE_CROSS_APP_TRACKING === 'true',
    ENABLE_SOCIAL_SHARING: process.env.NEXT_PUBLIC_ENABLE_SOCIAL_SHARING === 'true',
    ENABLE_PAYMENTS: process.env.NEXT_PUBLIC_ENABLE_PAYMENTS === 'true',
    ENABLE_AI_FEATURES: process.env.NEXT_PUBLIC_ENABLE_AI_FEATURES === 'true',
  },
};

// Validate required environment variables
export function validateEnv() {
  const required = [
    'NEXTAUTH_SECRET',
    'MONGODB_URI',
    'OPENAI_API_KEY',
  ];
  
  const missing = required.filter(key => !process.env[key]);
  
  if (missing.length > 0) {
    console.error('Missing required environment variables:', missing);
    if (process.env.NODE_ENV === 'production') {
      throw new Error(`Missing environment variables: ${missing.join(', ')}`);
    }
  }
  
  return true;
}

// Get app-specific configuration
export function getAppConfig(appName: string) {
  const baseUrl = `https://${ENV_CONFIG.DOMAINS[appName.toUpperCase().replace('-', '_')] || 'boldmind.ng'}`;
  
  return {
    ...ENV_CONFIG,
    APP: {
      NAME: appName,
      BASE_URL: baseUrl,
      API_URL: `${baseUrl}/api`,
      CDN_URL: `https://cdn.boldmind.ng/${appName}`,
    },
  };
}
EOF

# 6. Create Vercel setup script
print_status "Creating Vercel setup scripts..."

cat > infrastructure/scripts/setup-vercel.sh << 'EOF'
#!/bin/bash
# setup-vercel.sh
# Setup Vercel for all BoldMind apps

set -e

echo "🚀 Setting up Vercel for BoldMind Monorepo..."

# Install Vercel CLI if not installed
if ! command -v vercel &> /dev/null; then
    echo "Installing Vercel CLI..."
    npm install -g vercel
fi

# Login to Vercel
echo "Please login to Vercel..."
vercel login

# Create Vercel projects for each app
APPS=(
    "boldmind-hub:boldmind.ng"
    "amebogist:amebogist.ng"
    "educenter:educenter.com.ng"
    "boldmind-os:os.boldmind.ng"
    "naija-fither:naijafither.boldmind.ng"
    "emailscraper-pro:emailscraper.boldmind.ng"
    "safe-naija:safeai.boldmind.ng"
    "receptionist:receptionist.boldmind.ng"
    "social-factory:socialfactory.boldmind.ng"
)

for app_pair in "${APPS[@]}"; do
    IFS=':' read -r app_name domain <<< "$app_pair"
    
    echo "Setting up $app_name ($domain)..."
    
    # Navigate to app directory
    cd "apps/web/$app_name" 2>/dev/null || cd "apps/planai/$app_name"
    
    # Link to Vercel project
    echo "Linking to Vercel project..."
    vercel link --yes --scope boldmind
    
    # Create vercel.json if it doesn't exist
    if [ ! -f "vercel.json" ]; then
        cat > vercel.json << VERCELEOF
{
  "buildCommand": "pnpm build",
  "devCommand": "pnpm dev",
  "installCommand": "pnpm install",
  "framework": "nextjs",
  "outputDirectory": ".next",
  "regions": ["fra1"],
  "env": {
    "NEXT_PUBLIC_APP_NAME": "$app_name",
    "NEXT_PUBLIC_APP_URL": "https://$domain"
  }
}
VERCELEOF
    fi
    
    # Add environment variables
    echo "Adding environment variables..."
    
    # Common env vars
    vercel env add NODE_ENV production
    vercel env add NEXT_PUBLIC_APP_NAME "$app_name"
    vercel env add NEXT_PUBLIC_APP_URL "https://$domain"
    vercel env add NEXT_PUBLIC_GA4_ID "$GA4_ID"
    
    # App-specific env vars
    case $app_name in
        "amebogist")
            vercel env add NEXT_PUBLIC_ADSENSE_ID "$ADSENSE_ID"
            ;;
        "educenter")
            vercel env add NEXT_PUBLIC_PAYSTACK_PUBLIC_KEY "$PAYSTACK_PUBLIC_KEY"
            ;;
        "boldmind-os")
            vercel env add OPENAI_API_KEY "$OPENAI_API_KEY"
            ;;
    esac
    
    echo "✅ $app_name setup complete!"
    
    # Return to root
    cd ../../..
done

echo "🎉 Vercel setup complete for all apps!"
echo ""
echo "Next steps:"
echo "1. Connect each app to GitHub for auto-deploy"
echo "2. Set up custom domains in Vercel dashboard"
echo "3. Configure Cloudflare DNS (see setup-cloudflare.sh)"
echo "4. Deploy: vercel --prod"
EOF

chmod +x infrastructure/scripts/setup-vercel.sh

# 7. Create Cloudflare DNS setup script
print_status "Creating Cloudflare DNS setup script..."

cat > infrastructure/scripts/setup-cloudflare.sh << 'EOF'
#!/bin/bash
# setup-cloudflare.sh
# Setup Cloudflare DNS for all BoldMind domains

set -e

echo "🌐 Setting up Cloudflare DNS for BoldMind Ecosystem..."

# Check if Cloudflare CLI is installed
if ! command -v cloudflared &> /dev/null; then
    echo "Please install Cloudflare CLI:"
    echo "npm install -g @cloudflare/wrangler"
    echo "Or download from: https://developers.cloudflare.com/cloudflare-one/connections/connect-apps/install-and-setup/"
    exit 1
fi

# Login to Cloudflare
echo "Please login to Cloudflare..."
cloudflared login

# Domains to manage (move all to Cloudflare)
DOMAINS=(
    "boldmind.ng"
    "amebogist.ng"
    "educenter.com.ng"
)

# Subdomains for apps
SUBDOMAINS=(
    "os.boldmind.ng"
    "naijafither.boldmind.ng"
    "emailscraper.boldmind.ng"
    "safeai.boldmind.ng"
    "receptionist.boldmind.ng"
    "socialfactory.boldmind.ng"
    "credibility.boldmind.ng"
    "businessplan.boldmind.ng"
    "financialforecasting.boldmind.ng"
    "investorreadiness.boldmind.ng"
    "brandingdesign.boldmind.ng"
    "digitalstorefront.boldmind.ng"
    "marketingautomation.boldmind.ng"
    "analytics.boldmind.ng"
    "kolo.boldmind.ng"
    "afrohustle.boldmind.ng"
    "anontruth.boldmind.ng"
    "borderlessremit.boldmind.ng"
    "farmgatedirect.boldmind.ng"
    "naijagigmatcher.boldmind.ng"
    "poweralerts.boldmind.ng"
    "receiptgenius.boldmind.ng"
    "skill2cash.boldmind.ng"
    "afrocopy.boldmind.ng"
)

echo "Setting up DNS records..."

# Create a zone file template
cat > cloudflare-dns-setup.md << 'DNSGUIDE'
# Cloudflare DNS Setup Guide

## Step 1: Add Domains to Cloudflare
1. Go to Cloudflare Dashboard
2. Click "Add Site"
3. Add each domain:
   - boldmind.ng
   - amebogist.ng
   - educenter.com.ng

## Step 2: Update Nameservers
For each domain, update nameservers at your registrar:
- DomainKing (amebogist.ng)
- WhoGoHost (boldmind.ng, educenter.com.ng)

Use Cloudflare nameservers:
- kate.ns.cloudflare.com
- todd.ns.cloudflare.com

## Step 3: DNS Records Setup

### A Records (point to Vercel)
@ → 76.76.21.21 (Vercel IP)

### CNAME Records (subdomains to Vercel)
os → cname.vercel-dns.com
naijafither → cname.vercel-dns.com
emailscraper → cname.vercel-dns.com
# ... all other subdomains

### MX Records (Email - using one email account)
@ → mx1.improvmx.com (priority 10)
@ → mx2.improvmx.com (priority 20)

### TXT Records
@ → "v=spf1 include:spf.improvmx.com ~all"
_dmarc → "v=DMARC1; p=none; rua=mailto:dmarc@boldmind.ng"

## Step 4: SSL/TLS
- Set SSL/TLS to Full (Strict)
- Enable Always Use HTTPS
- Enable HTTP/2 and HTTP/3

## Step 5: Page Rules
1. https://*.boldmind.ng/* → Cache Level: Cache Everything
2. https://boldmind.ng/* → Browser Cache TTL: 1 month

## Step 6: Workers (Optional)
Create workers for:
- API routing
- A/B testing
- Edge caching

## Step 7: Analytics
Enable Cloudflare Analytics for all domains.

## Migration Timeline
1. Day 1: Add domains to Cloudflare
2. Day 2: Update nameservers
3. Day 3: Verify DNS propagation
4. Day 4: Enable SSL and optimizations
5. Day 5: Monitor traffic and performance

## Important Notes
- Keep old DNS records until propagation is complete
- Monitor email delivery during migration
- Update Google Search Console with new nameservers
- Update social media links if needed
DNSGUIDE

echo "DNS setup guide created: cloudflare-dns-setup.md"
echo ""
echo "📋 Next steps for domain consolidation:"
echo "1. Move all domains to Cloudflare (as per guide)"
echo "2. Use Cloudflare Email Routing for unified email"
echo "3. Set up cross-domain analytics"
echo "4. Configure shared SSL certificates"
echo ""
echo "🔧 For email consolidation:"
echo "Use ImprovMX or Cloudflare Email Routing to route:"
echo "- support@boldmind.ng (primary)"
echo "- contact@boldmind.ng"
echo "- hello@amebogist.ng → support@boldmind.ng"
echo "- info@educenter.com.ng → support@boldmind.ng"
EOF

chmod +x infrastructure/scripts/setup-cloudflare.sh

# 8. Create app-by-app development script
print_status "Creating app development template..."

cat > tools/scripts/develop-app.sh << 'EOF'
#!/bin/bash
# develop-app.sh
# Template for developing each app step-by-step

set -e

APP_NAME=$1
PHASE=$2

if [ -z "$APP_NAME" ]; then
    echo "Usage: ./develop-app.sh <app-name> [phase]"
    echo ""
    echo "Available apps:"
    echo "  boldmind-hub      - Main landing page"
    echo "  amebogist         - News platform"
    echo "  educenter         - Education platform"
    echo "  boldmind-os       - Productivity OS"
    echo "  naija-fither      - Fitness app"
    echo "  emailscraper-pro  - B2B tool"
    echo "  safe-naija        - Security platform"
    echo "  receptionist      - WhatsApp automation"
    echo "  social-factory    - Content creation"
    echo ""
    echo "Phases:"
    echo "  layout     - Basic layout and structure"
    echo "  pages      - Create all pages"
    echo "  components - Build components"
    echo "  api        - Implement API routes"
    echo "  database   - Setup database"
    echo "  auth       - Add authentication"
    echo "  deploy     - Prepare for deployment"
    exit 1
fi

# Default phase
PHASE=${PHASE:-"layout"}

echo "🛠️  Developing $APP_NAME - Phase: $PHASE"
echo "=========================================="

case $PHASE in
    "layout")
        echo "Phase 1: Basic Layout"
        echo "---------------------"
        echo "1. Create app/layout.tsx with:"
        echo "   - Navigation"
        echo "   - Footer"
        echo "   - Analytics integration"
        echo "   - Cross-app tracking"
        echo ""
        echo "2. Create app/page.tsx with:"
        echo "   - Hero section"
        echo "   - Key features"
        echo "   - Call-to-action"
        echo ""
        echo "3. Create app/globals.css with:"
        echo "   - Brand colors"
        echo "   - Typography"
        echo "   - Responsive design"
        ;;
    
    "pages")
        echo "Phase 2: Create Pages"
        echo "---------------------"
        
        case $APP_NAME in
            "boldmind-hub")
                echo "Create:"
                echo "- /about - Company story"
                echo "- /products - All 27 products"
                echo "- /contact - Contact form"
                echo "- /blog - Updates"
                echo "- /careers - Job openings"
                ;;
            "amebogist")
                echo "Create:"
                echo "- /news/[slug] - Article pages"
                echo "- /categories/[category] - Category pages"
                echo "- /search - Search results"
                echo "- /authors/[author] - Author pages"
                ;;
            "educenter")
                echo "Create:"
                echo "- /courses/[id] - Course details"
                echo "- /jamb/practice - Practice tests"
                echo "- /dashboard - Student portal"
                echo "- /subscription - Payment plans"
                ;;
            "boldmind-os")
                echo "Create:"
                echo "- /capture - Note taking"
                echo "- /focus - Pomodoro timer"
                echo "- /connect - Knowledge graph"
                echo "- /create - Content pipeline"
                echo "- /reflect - Analytics"
                ;;
        esac
        ;;
    
    "components")
        echo "Phase 3: Build Components"
        echo "-------------------------"
        echo "1. Use shared components from @boldmind/ui"
        echo "2. Create app-specific components"
        echo "3. Implement responsive design"
        echo "4. Add dark/light mode"
        echo "5. Ensure accessibility"
        ;;
    
    "api")
        echo "Phase 4: Implement API Routes"
        echo "------------------------------"
        echo "1. Create API routes in app/api/"
        echo "2. Connect to database"
        echo "3. Implement CRUD operations"
        echo "4. Add validation with Zod"
        echo "5. Set up error handling"
        ;;
    
    "database")
        echo "Phase 5: Database Setup"
        echo "------------------------"
        echo "1. Define Prisma schema"
        echo "2. Create migrations"
        echo "3. Seed initial data"
        echo "4. Set up indexes"
        echo "5. Configure backups"
        ;;
    
    "auth")
        echo "Phase 6: Authentication"
        echo "-----------------------"
        echo "1. Set up NextAuth.js or Supabase"
        echo "2. Create login/register pages"
        echo "3. Implement protected routes"
        echo "4. Add social login (Google, Facebook)"
        echo "5. Set up email verification"
        ;;
    
    "deploy")
        echo "Phase 7: Deployment Preparation"
        echo "-------------------------------"
        echo "1. Update next.config.js"
        echo "2. Set environment variables"
        echo "3. Create sitemap.xml"
        echo "4. Configure robots.txt"
        echo "5. Test build locally"
        echo "6. Set up GitHub Actions"
        ;;
    
    *)
        echo "Unknown phase: $PHASE"
        echo "Available phases: layout, pages, components, api, database, auth, deploy"
        ;;
esac

echo ""
echo "📁 App location: apps/web/$APP_NAME or apps/planai/$APP_NAME"
echo "🚀 Start development: pnpm dev:$APP_NAME"
echo "🌐 Preview: http://localhost:$(grep -A1 "dev:$APP_NAME" package.json | grep -o '[0-9]\+' | head -1)"
EOF

chmod +x tools/scripts/develop-app.sh

# 9. Create a comprehensive README for next steps
cat > NEXT-STEPS.md << EOF
# 🚀 BoldMind Monorepo - Next Steps

## ✅ What's Complete:
1. All 27 apps running on ports 3000-3026
2. Shared packages structure created
3. Cross-app analytics setup
4. SEO utilities for all domains
5. Environment configuration
6. Development scripts

## 🎯 Immediate Actions:

### 1. Domain Consolidation to Cloudflare
```bash
# Run Cloudflare setup
./infrastructure/scripts/setup-cloudflare.sh

# Follow the guide in cloudflare-dns-setup.md
# Move all domains (boldmind.ng, amebogist.ng, educenter.com.ng) to Cloudflare