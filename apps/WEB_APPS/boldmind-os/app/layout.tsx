// apps/web/boldmind-os/app/layout.tsx
import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ThemeProvider } from "@boldmind/ui";
import { BOLDMIND_PRODUCTS } from "@boldmind/utils";
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
  const baseUrl = process.env.NEXT_PUBLIC_APP_URL || "https://os.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "BoldMind OS - Personal Operating System for Neurodivergent Entrepreneurs",
    template: "%s | BoldMind OS",
  },
  description: "Built for ADHD, dyslexia, and neurodivergent minds. Your complete brain stack with 5 integrated modules: Capture, Focus, Connect, Create, and Reflect.",
  keywords: [
    "ADHD productivity",
    "dyslexia tools",
    "neurodivergent entrepreneurs",
    "brain management system",
    "focus tools",
    "time blindness",
    "Pomodoro ADHD",
    "task management",
    "mind mapping",
    "knowledge graph",
    "content creation",
    "digital brain",
    "executive function",
    "productivity system",
    "digital organization",
    "BoldMind ecosystem",
    "neurodivergent support",
    "entrepreneur tools",
    "productivity apps",
    "brain extension",
    "personal operating system",
    "digital workspace",
    "task prioritization",
    "visual organization",
    "idea management",
    "content pipeline",
    "progress tracking",
    "analytics dashboard",
    "workflow automation",
    "Nigerian entrepreneurs",
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
    title: "BoldMind OS - Your Personal Operating System",
    siteName: "BoldMind OS",
    description: "Built for neurodivergent entrepreneurs. Finally, a system that works WITH your brain, not against it.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BoldMind OS - Personal Operating System",
        type: "image/png",
        secureUrl: `${canonicalUrl}/og-image.png`,
      },
      {
        url: `${canonicalUrl}/og-image-800x600.png`,
        width: 800,
        height: 600,
        alt: "BoldMind OS - Brain Modules",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boldmindtech",
    creator: "@boldmindtech",
    title: "BoldMind OS - For Neurodivergent Entrepreneurs",
    description: "5 integrated brain modules that transform your productivity: Capture, Focus, Connect, Create, Reflect.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "productivity",
  other: {
    "application-name": "BoldMind OS",
    "msapplication-TileColor": "#E63946",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "BoldMind OS",
    "og:email": "hello@boldmind.ng",
    "og:phone_number": "+2349138349271",
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
    ],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "BoldMind OS",
    statusBarStyle: "black-translucent",
  },
};

// Structured data for software application
const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BoldMind OS",
  description: "Personal Operating System for Neurodivergent Entrepreneurs",
  url: canonicalUrl,
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "Offer",
    price: "5000",
    priceCurrency: "NGN",
  },
  featureList: [
    "Capture Brain - Multi-modal input",
    "Focus Brain - ADHD-friendly Pomodoro",
    "Connect Brain - Visual knowledge graph",
    "Create Brain - Content pipeline",
    "Reflect Brain - Progress analytics",
  ],
  screenshot: `${canonicalUrl}/screenshot.png`,
  author: {
    "@type": "Organization",
    name: "BoldMind Technology Solution Enterprise",
  },
};

export const viewport: Viewport = {
  themeColor: "#E63946",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  // Find BoldMind OS product from your utils
  const boldmindOSProduct = BOLDMIND_PRODUCTS.find(p => p.slug === "boldmind-os");

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

        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />

        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />

        {/* Preload critical assets */}
        <link
          rel="preload"
          href="/_next/static/css/app/layout.css"
          as="style"
        />

        {/* PWA meta tags */}
        <meta name="apple-mobile-web-app-title" content="BoldMind OS" />
        <meta name="application-name" content="BoldMind OS" />
        <meta name="mobile-web-app-capable" content="yes" />

        {/* Theme color for mobile browsers */}
        <meta
          name="theme-color"
          content="#E63946"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#B91C1C"
          media="(prefers-color-scheme: dark)"
        />
      </head>
      <body
        className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}
      >
        <ThemeProvider
          forceProductSlug="boldmind-os"
        >
          {children}
        </ThemeProvider>

        {/* Performance monitoring */}
        {process.env.NODE_ENV === "production" && (
          <script
            dangerouslySetInnerHTML={{
              __html: `
                // Performance monitoring
                window.addEventListener('load', function() {
                  setTimeout(function() {
                    const perfData = window.performance?.timing;
                    if (perfData) {
                      const loadTime = perfData.loadEventEnd - perfData.navigationStart;
                      console.log('BoldMind OS loaded in:', loadTime, 'ms');
                      
                      // Send to analytics
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