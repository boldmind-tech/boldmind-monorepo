import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { PlanaiLandingLayout } from './planai-landingLayout'
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import './globals.css'


const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();


export const metadata: Metadata = {
   metadataBase: new URL(canonicalUrl), // ✅ Added to fix warnings
  title: {
    default: 'PlanAI Suite - AI Business Automation',
    template: "%s | BoldMind Technology Ecosystem",
  },
  description: 'Complete AI business stack for Nigerian entrepreneurs',
  keywords:[
    "AI solutions Africa",
    "Plan AI",
    "AI Receiptionist",
    "AI Marketing Automation",
    "Ai Business Solution"
  ],
   authors: [
    { name: "BoldMind Technology Solution Enterprise", url: canonicalUrl },
    { name: "Charles Uche Chijuka", url: "https://facebook.com/cuche3" },
  ],

    robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "en-NG": canonicalUrl,
      "en-US": canonicalUrl,
    },
  },
   openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "Planai Suite - Complete AI business stack for Nigerian entrepreneurs",
    siteName: "Planai",
    description:
      "Complete AI business stack for Nigerian entrepreneurs",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Planai Stuite - Nigerian Tech Ecosystem",
        type: "image/png",
        secureUrl: `${canonicalUrl}/og-image.png`,
      },
      {
        url: `${canonicalUrl}/og-image-800x600.png`,
        width: 800,
        height: 600,
        alt: "BoldMind Technology Ecosystem",
        type: "image/png",
      },
      {
        url: `${canonicalUrl}/og-image-twitter.png`,
        width: 1200,
        height: 600,
        alt: "BoldMind - Empowering Nigerian Entrepreneurs",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@",
    creator: "@",
    title: "Planai Suite - Complete AI business stack for Nigerian entrepreneurs",
    description:
      "Complete AI business stack for Nigerian entrepreneurs",
    images: [`${canonicalUrl}/og-image.png`],
  },
  verification: {
    // google: "wN3-VE6VlAJbq9B0KWqG0lysVUdAa5UNi4uApClq0Ws", // Add your Google Search Console code
    // yandex: "c0693f1167b9c72e", // Optional
    other: {
      me: [
        "https://facebook.com/BoldMindTech",
        "https://instagram.com/boldmindtech",
        "https://x.com/villagecircl",
        "https://linkedin.com/company/boldmind-technology-solution-enterprise",
        "https://github.com/boldmind-tech",
      ],
    },
  },
  category: "technology",
  other: {
    "application-name": "Planai Suite",
    "msapplication-TileColor": "#00143C",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "Planai Suite",
    "og:email": "hello@boldmind.ng",
    "og:phone_number": "+2349138349271",
    "og:whatsapp_number": "+2349138349271",
    "og:street-address": "No 5 Olusoji imole str ikosi ketu Lagos Nigeria",
    "og:locality": "Lagos",
    "og:region": "NG",
    "og:postal-code": "100001",
    "og:country-name": "Nigeria",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-16x16.png", sizes: "16x16", type: "image/png" },
      { url: "/icon-32x32.png", sizes: "32x32", type: "image/png" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    shortcut: [{ url: "/favicon.ico", sizes: "any" }],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
      { url: "/apple-icon-152x152.png", sizes: "152x152", type: "image/png" },
      { url: "/apple-icon-167x167.png", sizes: "167x167", type: "image/png" },
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#00143C",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "Planai Suite",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-startup-640x1136.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
  },
}

export const viewport: Viewport = {
  themeColor: "#00143C",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BoldMind Technology Solution Enterprise",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description:
    "Complete AI business stack for Nigerian entrepreneurs",
  foundingDate: "2025",
  founders: [
    {
      "@type": "Person",
      name: "Charles Uche Chijuka",
      url: [
        "https://facebook.com/cuche3",
        "https://linkedin.com/in/charliedotcom",
        "https://x.com/charlesuchech",
        "https://instagram.com/charleschijuka",
        "https://medium.com/@uchecharles223",
        "https://threads.com/@charleschijuka"
      ],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressRegion: "Lagos",
    addressLocality: "Lagos",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@boldmind.ng",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://x.com/villagecircl",
    "https://facebook.com/boldmindtech",
    "https://linkedin.com/company/boldmind-technology-solution-enterprise",
    "https://github.com/boldmind-tech",
    "https://instagram.com/boldmindtech",
    "https://tiktok.com/@villagecircle",
    "https://youtube.com/@BoldMindTech",
  ],
  brand: [
   
    "PlanAI",
    "Credibility-Hub",
    "Business-Planing",
    "Digital-Storefront",
    "Financial-Planning",
    "Investor-Readiness",
    "Marketing-Automation",
    "Analytics-Dashboard",
    "Branding-Design",
    "Ai-Recieptionist"

  ],
  numberOfEmployees: {
    "@type": "QuantitativeValue",
    value: "10+",
  },
  knowsAbout: [
    "Artificial Intelligence",
    "Education Technology",
    "Digital Media",
    "Business Automation",
    "Software Development",
    "Entrepreneurship",
  ],
};

// Product ecosystem schema
const productEcosystemSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "Planai Suite",
  description: "Complete AI business stack for Nigerian entrepreneurs",
  numberOfItems: 31,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "Ai Receiptionist",
        escription: "",
        url: `${canonicalUrl}/receiptionist`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "StoreFronts",
        description:
          "",
        url: `${canonicalUrl}/stronefronts`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "",
        description: "",
        url: `${canonicalUrl}/marketing`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
      <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        {/* Preconnect to critical domains */}
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />
        <link rel="preconnect" href="https://cdn.boldmind.ng" />

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.boldmind.ng" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(productEcosystemSchema),
          }}
        />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />

        {/* Preload hero image */}
        <link
          rel="preload"
          href="/hero-bg.jpg"
          as="image"
          type="image/jpeg"
          media="(min-width: 768px)"
        />

        {/* Preload LCP image */}
        <link
          rel="preload"
          href="/icon-512x512.png"
          as="image"
          type="image/png"
        />

        {/* PWA meta tags */}
        <meta name="apple-mobile-web-app-title" content="BoldMind" />
        <meta name="application-name" content="BoldMind" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Theme color for mobile browsers */}
        <meta
          name="theme-color"
          content="#00143C"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#000814"
          media="(prefers-color-scheme: dark)"
        />

        {/* Mobile App Capable */}
        <meta name="apple-mobile-web-app-capable" content="yes" />

        {/* Viewport (already in viewport export, but kept for compatibility) */}
        <meta
          name="viewport"
          content="width=device-width, initial-scale=1, maximum-scale=5"
        />

        {/* Additional SEO meta */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />

        {/* Facebook verification (optional) */}
        <meta
          name="facebook-domain-verification"
          content="your-facebook-verification-code"
        />
        <meta name="yandex-verification" content="c0693f1167b9c72e" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}
      >
        <ErrorBoundary>
          <PlanaiLandingLayout

          >
            {children}
          </PlanaiLandingLayout>
        </ErrorBoundary>

        {/* Performance monitoring */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Core Web Vitals monitoring
                if ('webVitals' in window) {
                  webVitals.getCLS(console.log);
                  webVitals.getFID(console.log);
                  webVitals.getLCP(console.log);
                }
                
                // Track page visibility
                document.addEventListener('visibilitychange', function() {
                  if (document.visibilityState === 'visible') {
                    console.log('Page is visible');
                  }
                });
                
                // Send performance data to analytics
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = window.performance && window.performance.timing;
                    if (perfData) {
                      const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                      console.log('Page load time:', loadTime, 'ms');
                      
                      // Send to analytics (example with gtag)
                      if (typeof gtag === 'function') {
                        gtag('event', 'timing_complete', {
                          'name': 'page_load',
                          'value': loadTime,
                          'event_category': 'Performance'
                        });
                      }
                    }
                  }, 0);
                });
              `,
            }}
          />
        )}
      </body>
    </html>
  )
}