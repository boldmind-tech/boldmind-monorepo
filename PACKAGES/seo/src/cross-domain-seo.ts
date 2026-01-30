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
    'naija-fither': 'fit.boldmind.ng',
    'emailscraper-pro': 'email.boldmind.ng',
    'safe-naija': 'safe.boldmind.ng',
    'planai-landing':'planai.boldmind.ng',
    'planai-receptionist': 'planai.boldmind.ng/receptionist',
    'planai-social': 'social.boldmind.ng',
    'credibility-hubs': 'planai.boldmind.ng/credibility',
    'business-planning': 'planai.boldmind.ng/planning',
    'financial-forecasting': 'planai.boldmind.ng/finance',
    'investor-readiness': 'planai.boldmind.ng/investor',
    'branding-design': 'planai.boldmind.ng/design',
    'digital-storefronts': 'planai.boldmind.ng/store',
    'marketing-automation': 'planai.boldmind.ng/marketing',
    'analytics-dashboard': 'planai.boldmind.ng/analyitcs',
    'kolo-ai': 'kolo.boldmind.ng',
    'afrohustle-os': 'hustle.boldmind.ng',
    'anontruth-mic': 'anontruth.boldmind.ng',
    'borderless-remit': 'border.boldmind.ng',
    'farmgate-direct': 'farm.boldmind.ng',
    'naijagig-matcher': 'gig.educenter.com.ng',
    'power-alert': 'power.boldmind.ng',
    'receipt-genius': 'receipt.boldmind.ng',
    'skill2cash': 'skill.educenter.com.ng',
    'afrocopy-ai': 'copy.amebogist.ng',
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

export interface OrganizationSchema {
  name: string;
  url: string;
  logo: string;
  description: string;
  foundingDate: string;
  founders: { name: string }[];
  address: {
    streetAddress: string;
    addressLocality: string;
    addressRegion: string;
    addressCountry: string;
  };
  contactPoint: {
    telephone: string;
    contactType: string;
    email: string;
  };
  sameAs: string[];
}

// JSON-LD schema for organization
export function generateOrganizationSchema(config: OrganizationSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Organization',
    name: config.name,
    url: config.url,
    logo: config.logo,
    description: config.description,
    foundingDate: config.foundingDate,
    founders: config.founders,
    address: {
      '@type': 'PostalAddress',
      ...config.address,
    },
    contactPoint: {
      '@type': 'ContactPoint',
      ...config.contactPoint,
    },
    sameAs: config.sameAs,
  };
}

export interface ProductSchema {
  name: string;
  description: string;
  image: string;
  brand: string;
  offers: {
    price: string;
    priceCurrency: string;
    availability: string;
  };
}

export function generateProductSchema(config: ProductSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Product',
    name: config.name,
    description: config.description,
    image: config.image,
    brand: {
      '@type': 'Brand',
      name: config.brand,
    },
    offers: {
      '@type': 'Offer',
      ...config.offers,
    },
  };
}

export interface ArticleSchema {
  headline: string;
  description: string;
  image: string;
  author: string;
  publisher: string;
  datePublished: string;
  dateModified: string;
}

export function generateArticleSchema(config: ArticleSchema) {
  return {
    '@context': 'https://schema.org',
    '@type': 'Article',
    headline: config.headline,
    description: config.description,
    image: config.image,
    author: {
      '@type': 'Person',
      name: config.author,
    },
    publisher: {
      '@type': 'Organization',
      name: config.publisher,
    },
    datePublished: config.datePublished,
    dateModified: config.dateModified,
  };
}

// ===================================
// CANONICAL URL GENERATOR
// ===================================
export function generateCanonicalUrl(baseUrl: string, path: string): string {
  const cleanBase = baseUrl.replace(/\/$/, '');
  const cleanPath = path.replace(/^\//, '');
  return `${cleanBase}/${cleanPath}`;
}

// ===================================
// SLUG GENERATOR
// ===================================
export function generateSlug(text: string): string {
  return text
    .toLowerCase()
    .replace(/[^a-z0-9]+/g, '-')
    .replace(/^-+|-+$/g, '');
}


