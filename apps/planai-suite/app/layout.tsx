import type { Metadata, Viewport } from 'next'
import { Inter } from 'next/font/google'
import { PlanaiLandingLayout } from './planai-landingLayout'
import { ErrorBoundary, CookieConsent } from "@boldmind/ui";
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
  metadataBase: new URL(canonicalUrl),
  title: {
    default: 'PlanAI Suite — Complete AI Business Automation for Nigerian Entrepreneurs',
    template: "%s | PlanAI Suite",
  },
  description:
    'Complete AI business stack for Nigerian entrepreneurs. AI Receptionist, Digital Storefront, Marketing Automation, Financial Planning, Investor Readiness, and Branding — everything you need to launch and scale.',
  keywords: [
    "AI business solutions Nigeria",
    "PlanAI Suite",
    "AI receptionist Nigeria",
    "business automation Nigeria",
    "marketing automation Nigeria",
    "digital storefront Nigeria",
    "financial planning Nigeria",
    "investor readiness Nigeria",
    "Nigerian entrepreneur tools",
    "AI tools for business Nigeria",
    "branding Nigeria",
    "BoldMind AI",
    "business planning Nigeria",
    "credibility hub Nigeria",
    "analytics dashboard Nigeria",
    "African AI business tools",
    "startup tools Nigeria",
    "small business AI Nigeria",
  ],
  authors: [
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
    { name: "Charles Uche Chijuka" },
  ],
  creator: "BoldMind Technology Solution Enterprise",
  publisher: "BoldMind Technology Solution Enterprise",
  formatDetection: { email: false, telephone: false },
  category: "technology",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
      'max-video-preview': -1,
    },
  },
  alternates: {
    canonical: canonicalUrl,
    languages: { "en-NG": canonicalUrl },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "PlanAI Suite — Complete AI Business Stack for Nigerian Entrepreneurs",
    siteName: "PlanAI Suite",
    description:
      "AI Receptionist, Digital Storefront, Marketing Automation, Financial Planning, and more — the complete AI business toolkit for Nigerian entrepreneurs.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "PlanAI Suite — AI Business Automation Nigeria",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boldmindtech",
    creator: "@boldmindtech",
    title: "PlanAI Suite — AI Business Automation for Nigerian Entrepreneurs",
    description:
      "Complete AI business stack: AI Receptionist, Digital Storefront, Marketing Automation, and Financial Planning.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  verification: {
    google: process.env['NEXT_PUBLIC_GOOGLE_SITE_VERIFY'],
    other: {
      me: [
        "https://facebook.com/BoldMindTech",
        "https://instagram.com/boldmindtech",
        "https://x.com/villagecircleng",
        "https://linkedin.com/company/boldmind-technology-solution-enterprise",
        "https://github.com/boldmind-tech",
      ],
    },
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
    other: [{ rel: "mask-icon", url: "/safari-pinned-tab.svg", color: "#00143C" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "PlanAI Suite",
    statusBarStyle: "black-translucent",
    startupImage: [
      {
        url: "/apple-startup-640x1136.png",
        media:
          "(device-width: 320px) and (device-height: 568px) and (-webkit-device-pixel-ratio: 2) and (orientation: portrait)",
      },
    ],
  },
  other: {
    "application-name": "PlanAI Suite",
    "msapplication-TileColor": "#00143C",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-title": "PlanAI Suite",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#00143C" },
    { media: "(prefers-color-scheme: dark)", color: "#000814" },
  ],
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
  description: "Complete AI business stack for Nigerian entrepreneurs",
  foundingDate: "2025",
  founders: [
    {
      "@type": "Person",
      name: "Charles Uche Chijuka",
      sameAs: [
        "https://facebook.com/cuche3",
        "https://linkedin.com/in/charliedotcom",
        "https://x.com/charlesuchech",
        "https://instagram.com/charleschijuka",
      ],
    },
  ],
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressRegion: "Lagos",
    addressLocality: "Lagos",
    streetAddress: "No 5 Olusoji Imole Street, Ikosi Ketu",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@boldmind.ng",
    telephone: "+2349138349271",
    availableLanguage: ["English"],
  },
  sameAs: [
    "https://x.com/villagecircleng",
    "https://facebook.com/boldmindtech",
    "https://linkedin.com/company/boldmind-technology-solution-enterprise",
    "https://github.com/boldmind-tech",
    "https://instagram.com/boldmindtech",
    "https://tiktok.com/@villagecircle",
    "https://youtube.com/@BoldMindTech",
  ],
  knowsAbout: [
    "Artificial Intelligence",
    "Education Technology",
    "Digital Media",
    "Business Automation",
    "Software Development",
    "Entrepreneurship",
  ],
};

const productEcosystemSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "PlanAI Suite Products",
  description: "Complete AI business stack for Nigerian entrepreneurs",
  numberOfItems: 9,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "AI Receptionist",
        description: "24/7 AI-powered customer service receptionist for your business",
        url: `${canonicalUrl}/receptionist`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "Digital Storefront",
        description: "Build and manage your digital storefront with AI assistance",
        url: `${canonicalUrl}/storefront`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "Marketing Automation",
        description: "AI-powered marketing automation for Nigerian businesses",
        url: `${canonicalUrl}/marketing`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "Financial Planning",
        description: "AI-assisted financial planning and business forecasting",
        url: `${canonicalUrl}/financial-planning`,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "Investor Readiness",
        description: "Prepare your business for investor presentations and funding rounds",
        url: `${canonicalUrl}/investor-readiness`,
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Product",
        name: "Branding & Design",
        description: "AI-powered branding and visual identity for your business",
        url: `${canonicalUrl}/branding`,
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Product",
        name: "Analytics Dashboard",
        description: "Comprehensive business analytics and performance insights",
        url: `${canonicalUrl}/analytics`,
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Product",
        name: "Credibility Hub",
        description: "Build business credibility and trust signals with customers",
        url: `${canonicalUrl}/credibility`,
      },
    },
    {
      "@type": "ListItem",
      position: 9,
      item: {
        "@type": "Product",
        name: "Business Planning",
        description: "AI-assisted business plan creation and growth strategy",
        url: `${canonicalUrl}/business-planning`,
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "PlanAI Suite",
  url: canonicalUrl,
  inLanguage: "en-NG",
  potentialAction: {
    "@type": "SearchAction",
    target: `${canonicalUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en-NG" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.boldmind.ng" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.boldmind.ng" />
        <link rel="dns-prefetch" href="//api.boldmind.ng" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <meta name="geo.position" content="6.5244;3.3792" />
        <meta name="ICBM" content="6.5244, 3.3792" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(productEcosystemSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}>
        <ErrorBoundary>
          <PlanaiLandingLayout>{children}</PlanaiLandingLayout>
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}
