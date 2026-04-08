import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary, CookieConsent, ThemeProvider } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://tools.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "BoldMind Tools — Productivity & Automation Tools for African Businesses",
    template: "%s | BoldMind Tools",
  },
  description:
    "Powerful productivity and automation tools built for African businesses. EmailScraper Pro for B2B lead generation and Social Content Factory for social media automation — grow faster with less effort.",
  keywords: [
    "business automation tools Nigeria",
    "email scraper Nigeria",
    "lead generation tools Africa",
    "social media automation Nigeria",
    "content factory Nigeria",
    "B2B tools Nigeria",
    "marketing automation Nigeria",
    "Nigerian business tools",
    "EmailScraper Pro",
    "Social Content Factory",
    "BoldMind Tools",
    "productivity tools Africa",
    "digital marketing tools Nigeria",
    "small business tools Nigeria",
    "automation software Nigeria",
    "African startup tools",
    "lead database Nigeria",
    "social scheduling Nigeria",
  ],
  authors: [
    { name: "BoldMind Tools", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "BoldMind Technology Solution Enterprise",
  publisher: "BoldMind Technology Solution Enterprise",
  formatDetection: { email: false, telephone: false },
  category: "productivity",
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  alternates: { canonical: canonicalUrl, languages: { "en-NG": canonicalUrl } },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "BoldMind Tools — Productivity & Automation for African Businesses",
    siteName: "BoldMind Tools",
    description:
      "EmailScraper Pro and Social Content Factory — powerful automation tools for African businesses to generate leads and scale their social media presence.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BoldMind Tools — Business Automation for Africa",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boldmindtech",
    title: "BoldMind Tools — Powerful Automation for African Businesses",
    description: "EmailScraper Pro and Social Content Factory — grow faster with less effort.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
    shortcut: "/favicon.ico",
  },
  manifest: "/manifest.json",
  appleWebApp: { title: "BoldMind Tools", statusBarStyle: "black-translucent" },
  other: {
    "application-name": "BoldMind Tools",
    "apple-mobile-web-app-title": "BoldMind Tools",
    "msapplication-TileColor": "#7C3AED",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#7C3AED" },
    { media: "(prefers-color-scheme: dark)", color: "#5B21B6" },
  ],
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BoldMind Tools",
  applicationCategory: "BusinessApplication",
  operatingSystem: "Web",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description:
    "Business productivity and automation tools for African businesses — B2B lead generation and social media automation.",
  featureList: [
    "EmailScraper Pro — B2B lead generation",
    "Social Content Factory — social media automation",
    "Multi-platform content scheduling",
    "Lead database management",
    "Analytics and reporting dashboard",
    "Bulk export and integrations",
  ],
  publisher: {
    "@type": "Organization",
    name: "BoldMind Technology Solution Enterprise",
    url: "https://boldmind.ng",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BoldMind Tools",
  url: canonicalUrl,
  inLanguage: "en-NG",
  potentialAction: {
    "@type": "SearchAction",
    target: `${canonicalUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//api.boldmind.ng" />
        <link rel="dns-prefetch" href="//cdn.boldmind.ng" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos, Nigeria" />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(softwareSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}>
        <ThemeProvider forceProductSlug="boldmind-tools">
          <ErrorBoundary>
            {children}
            <CookieConsent />
          </ErrorBoundary>
        </ThemeProvider>
      </body>
    </html>
  );
}
