import type { Metadata, Viewport } from 'next';
import { Inter } from 'next/font/google';
import { Providers } from './providers';
import '@boldmind/ui/dist/index.css';
import './globals.css';

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter',
  preload: true,
});

// Generate canonical URL
const getCanonicalUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || 'https://educenter.com.ng';
  return baseUrl.endsWith('/') ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: 'EduCenter - Africa\'s Practical Learning Engine',
    template: '%s | EduCenter',
  },
  description: 'From exam mastery to digital business and AI skills. Turn attention into skills, credentials, and income. Study Hub, Digital Business School & AI Skills Lab all in one platform.',
  keywords: ['JAMB', 'WAEC', 'NECO', 'Digital Business School', 'AI Skills', 'Nigerian Education', 'Online Learning', 'Exam Preparation', 'Skill Development', 'African EdTech'],
  authors: [
    { name: 'BoldMind Technology Solution Enterprise', url: canonicalUrl },
    { name: 'Charles Uche Chijuka', url: '' }
  ],
  creator: 'BoldMind Technology Solution Enterprise',
  publisher: 'BoldMind Technology Solution Enterprise',
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: {
    canonical: canonicalUrl,
    languages: {
      'en-NG': canonicalUrl,
    },
  },
  openGraph: {
    type: 'website',
    locale: 'en_NG',
    url: canonicalUrl,
    title: 'EduCenter - Africa\'s Practical Learning Engine',
    siteName: 'EduCenter',
    description: 'Study Hub, Digital Business School & AI Skills Lab all in one platform',
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: 'EduCenter - Africa\'s Practical Learning Engine',
        type: 'image/png',
        secureUrl: `${canonicalUrl}/og-image.png`,
      },
      {
        url: `${canonicalUrl}/og-image-800x600.png`,
        width: 800,
        height: 600,
        alt: 'EduCenter - Africa\'s Practical Learning Engine',
        type: 'image/png',
      },
    ],
  },
  twitter: {
    card: 'summary_large_image',
    site: '@bobbycuc2025',
    creator: '@bobbycuc2025',
    title: 'EduCenter - Africa\'s Practical Learning Engine',
    description: 'Study Hub, Digital Business School & AI Skills Lab',
    images: [`${canonicalUrl}/og-image.png`],
  },
  verification: {
    google: 'your-google-verification-code', 
    yandex: 'your-yandex-verification-code', 
    yahoo: 'your-yahoo-verification-code', 
    other: {
      me: ['https://twitter.com/charlesuchech', 'https://linkedin.com/in/charliedotcom', 'https://facebook.com/cuche3', 'https://instagram.com/charleschijuka', 'https://youtube.com/Codefires'],
    },
  },
  category: 'education',
  other: {
    'application-name': 'EduCenter',
    'msapplication-TileColor': '#00143C',
    'msapplication-config': '/browserconfig.xml',
    'apple-mobile-web-app-capable': 'yes',
    'apple-mobile-web-app-status-bar-style': 'black-translucent',
    'apple-mobile-web-app-title': 'EduCenter',
  },
  icons: {
    icon: [
      { url: '/favicon.ico' },
      { url: '/icon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/icon-32x32.png', sizes: '32x32', type: 'image/png' },
      { url: '/icon-192x192.png', sizes: '192x192', type: 'image/png' },
      { url: '/icon-512x512.png', sizes: '512x512', type: 'image/png' },
    ],
    shortcut: ['/favicon.ico'],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
      { url: '/apple-icon-152x152.png', sizes: '152x152', type: 'image/png' },
      { url: '/apple-icon-167x167.png', sizes: '167x167', type: 'image/png' },
    ],
    other: [
      {
        rel: 'mask-icon',
        url: '/safari-pinned-tab.svg',
        color: '#00143C',
      },
    ],
  },
  manifest: '/manifest.webmanifest',
  appleWebApp: {
    title: 'EduCenter',
    statusBarStyle: 'black-translucent',
    capable: true,
  },
};

export const viewport: Viewport = {
  themeColor: '#00143C',
  colorScheme: 'light dark',
  width: 'device-width',
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: 'cover',
};

// Structured data for better SEO
const jsonLd = {
  '@context': 'https://schema.org',
  '@type': 'EducationalOrganization',
  name: 'EduCenter',
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description: 'Africa\'s Practical Learning Engine',
  address: {
    '@type': 'PostalAddress',
    addressCountry: 'NG',
    addressRegion: 'Lagos',
  },
  contactPoint: {
    '@type': 'ContactPoint',
    contactType: 'customer service',
    email: 'support@educenter.com.ng',
  },
  sameAs: [
    'https://facebook.com/cuche3',
    'https://linkedin.com/in/charliedotcom',
    'https://twitter.com/charlesuchech',
    'https://youtube.com/Codefires',
    'https://instagram.com/educenterc',
    'https://twitter.com/medianman9ja',
    'https://facebook.com/DevConnectPage',
    'https://twitter.com/bobbycuc2025',
    'https://linkedin.com/company/boldmind-technology-solution-enterprise',
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  return (
    <html lang="en" suppressHydrationWarning className={inter.variable}>
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://questions.aloc.com.ng" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//questions.aloc.com.ng" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(jsonLd) }}
        />
        
        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />
        
        {/* Preload hero image if exists */}
        <link
          rel="preload"
          href="/hero-image.png"
          as="image"
          type="image/png"
        />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <Providers>{children}</Providers>
        
        {/* Performance monitoring script (optional) */}
        {process.env.NODE_ENV === 'production' && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                window.addEventListener('load', function() {
                  if ('performance' in window) {
                    const navTiming = performance.getEntriesByType('navigation')[0];
                    console.log('Page load time:', navTiming.loadEventEnd - navTiming.startTime, 'ms');
                  }
                });
              `,
            }}
          />
        )}
      </body>
    </html>
  );
}