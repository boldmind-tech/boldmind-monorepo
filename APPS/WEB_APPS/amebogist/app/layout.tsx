import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AmebogistLayout } from "./amebogistLayout";
import { ClientErrorBoundary } from "./components/ClientErrorBoundary";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://amebogist.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "AmeboGist - Nigeria's #1 Pidgin English Platform for AI/Tech Education & Creator Entrepreneurship",
    template: "%s | AmeboGist",
  },
  description:
    "Nigeria's leading Pidgin English platform for AI/Tech education, Creator entrepreneurship, Sports, Politics, Entertainment, and Trending Gist. Authentic Nigerian news and stories in Pidgin English.",
  keywords: [
    "Nigerian news",
    "Pidgin English",
    "AmeboGist",
    "AI education Nigeria",
    "tech education",
    "creator entrepreneurship",
    "Nigerian sports",
    "Nigerian politics",
    "Nigerian entertainment",
    "trending gist Nigeria",
    "Naija news",
    "Nigerian media",
    "content creation Nigeria",
    "digital skills Nigeria",
    "AI tools Nigeria",
    "Nigerian tech news",
    "Pidgin news platform",
    "Nigerian creators",
    "entrepreneurship Nigeria",
    "Nigerian startup news",
  ],
  authors: [
    { name: "AmeboGist", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "AmeboGist",
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
      "pcm-NG": canonicalUrl, // Pidgin
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "AmeboGist - Nigeria's #1 Pidgin English Platform",
    siteName: "AmeboGist",
    description:
      "Nigeria's leading Pidgin English platform for AI/Tech education, Creator entrepreneurship, Sports, Politics, Entertainment, and Trending Gist.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AmeboGist - Nigerian Pidgin News Platform",
        type: "image/png",
        secureUrl: `${canonicalUrl}/og-image.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@amebogist",
    creator: "@amebogist",
    title: "AmeboGist - Nigeria's #1 Pidgin English Platform",
    description:
      "AI/Tech education, Creator entrepreneurship, Sports, Politics, Entertainment, and Trending Gist in Pidgin English.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  verification: {
    google: "your-google-verification-code",
    other: {
      me: [
        "https://facebook.com/amebogist",
        "https://instagram.com/amebogist",
        "https://twitter.com/amebogist",
      ],
    },
  },
  category: "news",
  other: {
    "application-name": "AmeboGist",
    "msapplication-TileColor": "#FF6B35",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "AmeboGist",
    "og:email": "hello@amebogist.ng",
    "og:locality": "Lagos",
    "og:region": "NG",
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
    ],
    other: [
      {
        rel: "mask-icon",
        url: "/safari-pinned-tab.svg",
        color: "#FF6B35",
      },
    ],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: {
    title: "AmeboGist",
    statusBarStyle: "black-translucent",
  },
};

export const viewport: Viewport = {
  themeColor: "#FF6B35",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  minimumScale: 1,
  userScalable: true,
  viewportFit: "cover",
};

// Structured data for news organization
const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "AmeboGist",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description:
    "Nigeria's #1 Pidgin English platform for AI/Tech education, Creator entrepreneurship, and authentic Nigerian news",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressRegion: "Lagos",
    addressLocality: "Lagos",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@amebogist.ng",
    availableLanguage: ["English", "Pidgin"],
  },
  sameAs: [
    "https://facebook.com/amebogist",
    "https://instagram.com/amebogist",
    "https://twitter.com/amebogist",
  ],
  publishingPrinciples: `${canonicalUrl}/about/editorial-policy`,
};

// Website schema
const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AmeboGist",
  url: canonicalUrl,
  description: "Nigeria's #1 Pidgin English news and education platform",
  inLanguage: ["en-NG", "pcm-NG"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${canonicalUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
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
            __html: JSON.stringify(websiteSchema),
          }}
        />

        {/* PWA meta tags */}
        <meta name="apple-mobile-web-app-title" content="AmeboGist" />
        <meta name="application-name" content="AmeboGist" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="apple-mobile-web-app-status-bar-style"
          content="black-translucent"
        />

        {/* Theme color for mobile browsers */}
        <meta
          name="theme-color"
          content="#FF6B35"
          media="(prefers-color-scheme: light)"
        />
        <meta
          name="theme-color"
          content="#D84315"
          media="(prefers-color-scheme: dark)"
        />

        {/* Additional SEO meta */}
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}
      >
        <ClientErrorBoundary>
          <AmebogistLayout>{children}</AmebogistLayout>
        </ClientErrorBoundary>
      </body>
    </html>
  );
}