import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BoldMindLayout } from "./boldmindLayout";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

// Generate canonical URL
const getCanonicalUrl = () => {
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl), // ✅ Added to fix warnings
  title: {
    default: "BoldMind - Empowering 1M Nigerian Entrepreneurs by 2030",
    template: "%s | BoldMind Technology Ecosystem",
  },
  description:
    "Nigerian tech ecosystem creating impact-driven products that solve fundamental problems through authentic media, education, and AI-powered technology. Empowering entrepreneurs with AmeboGist, EduCenter, PlanAI, and 28+ innovative solutions.",
  keywords: [
    "Nigerian entrepreneurs",
    "tech Nigeria",
    "AI Nigeria",
    "business automation",
    "PlanAI",
    "AmeboGist",
    "EduCenter",
    "Nigeria startup",
    "African technology",
    "entrepreneurship Nigeria",
    "business solutions",
    "digital transformation Africa",
    "BoldMind ecosystem",
    "Nigerian tech hub",
    "Nigerian innovation",
    "AI-powered business",
    "Nigerian media platform",
    "online learning Nigeria",
    "exam preparation Nigeria",
    "digital skills Nigeria",
    "Nigerian tech products",
    "BoldMind technology",
    "Nigerian business tools",
    "AI solutions Africa",
    "Nigerian tech community",
    "startup ecosystem Nigeria",
    "Nigerian software development",
    "technology for entrepreneurs",
    "Nigerian digital economy",
    "Nigerian tech innovation",
    "BoldMind products",
  ],
  authors: [
    { name: "BoldMind Technology Solution Enterprise", url: canonicalUrl },
    { name: "Charles Uche Chijuka", url: "https://facebook.com/cuche3" },
  ],
  creator: "BoldMind Technology Solution Enterprise",
  publisher: "BoldMind Technology Solution Enterprise",
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
    title: "BoldMind - Building Systems That Shift Nations",
    siteName: "BoldMind",
    description:
      "Empowering 1 million Nigerian Entrepreneurs by 2030 through our ecosystem of 31+ innovative products including AmeboGist, EduCenter, and PlanAI.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BoldMind - Nigerian Tech Ecosystem",
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
    title: "BoldMind - Empowering Nigerian Entrepreneurs",
    description:
      "The complete Nigerian tech ecosystem: AmeboGist, EduCenter, PlanAI, and 28+ more innovative products transforming business in Nigeria.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  verification: {
    google: "your-google-search-console-code", // Add your Google Search Console code
    yandex: "your-yandex-verification", // Optional
    other: {
      me: [
        "https://facebook.com/BoldMindTech",
        "https://instagram.com/boldmindtech",
        "https://twitter.com/",
        "https://linkedin.com/company/boldmind-technology-solution-enterprise",
        "https://github.com/boldmind-tech",
      ],
    },
  },
  category: "technology",
  other: {
    "application-name": "BoldMind",
    "msapplication-TileColor": "#00143C",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "BoldMind",
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
    title: "BoldMind",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-startup-640x1136.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
  },
};
// console.log("Theme initialized with:", {
//   slug: "boldmind-hub",
//   shouldMatch: BOLDMIND_PRODUCTS[0].slug,
// });

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

// Structured data for organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BoldMind Technology Solution Enterprise",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description:
    "Empowering 1 million Nigerian Entrepreneurs by 2030 through innovative technology solutions",
  foundingDate: "2025",
  founders: [
    {
      "@type": "Person",
      name: "Charles Uche Chijuka",
      url: [
        "https://facebook.com/cuche3",
        "https://linkedin.com/in/charliedotcom",
        "https://twitter.com/charlesuchech",
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
    "https://twitter.com/boldmindtech",
    "https://linkedin.com/company/boldmind-technology-solution-enterprise",
    "https://github.com/boldmind-tech",
    "https://instagram.com/boldmindtech",
  ],
  brand: [
    "AmeboGist",
    "EduCenter",
    "PlanAI",
    "boldmind-os",
    "farmgate-direct",
    "safe-naija",
    "kolo-ai",
    "emailscraper-pro",
    "power-alert",
    "",
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
  name: "BoldMind Product Ecosystem",
  description: "31+ products transforming Nigerian entrepreneurship",
  numberOfItems: 31,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "AmeboGist",
        description: "Authentic Nigerian news and media platform",
        url: `${canonicalUrl}/products/amebogist`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "EduCenter",
        description:
          "Practical learning engine for exam mastery and digital skills",
        url: `${canonicalUrl}/products/educenter`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "PlanAI",
        description: "AI-powered business planning and automation",
        url: `${canonicalUrl}/products/planai`,
      },
    },
  ],
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
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
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        <BoldMindLayout
          
        >
          {children}
        </BoldMindLayout>

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
  );
}
