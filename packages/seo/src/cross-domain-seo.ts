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
