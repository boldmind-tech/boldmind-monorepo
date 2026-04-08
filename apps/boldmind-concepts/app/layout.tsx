import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { KoloAILayout } from "./koloAILayout";
import { ErrorBoundary, CookieConsent } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://concept.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "BoldMind Concept Hub — Future Products & Village Circle Philosophy",
    template: "%s | BoldMind Concept Hub",
  },
  description:
    "Where BoldMind's next products are born. 11 concepts in motion — KoloAI, AfroHustle OS, NaijaGig Matcher, FarmGate Direct, AfroCopy AI and more. Rooted in the 5 Rivers of the Village Circle: Pan-African philosophy, economic liberation, and technology sovereignty.",
  keywords: [
    "BoldMind concepts",
    "Village Circle BoldMind",
    "Pan-African technology",
    "African tech concepts",
    "Nigerian tech innovation",
    "BoldMind future products",
    "KoloAI",
    "AfroHustle OS",
    "NaijaGig Matcher",
    "FarmGate Direct",
    "AfroCopy AI",
    "Borderless Remit",
    "SAFE AI Nigeria",
    "Skill2Cash Nigeria",
    "African startup ideas",
    "economic liberation Africa",
    "African entrepreneurship",
    "Pan-African governance tech",
    "Nigerian product innovation",
    "ReturnToTheCircle",
    "African AI sovereignty",
    "BoldMind ecosystem",
    "African tech philosophy",
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
    },
  },
  alternates: { canonical: canonicalUrl, languages: { "en-NG": canonicalUrl } },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "BoldMind Concept Hub — What We Are Building Next",
    siteName: "BoldMind Concept Hub",
    description:
      "Seeds in the ground — 11 future products rooted in the 5 Rivers of the Village Circle. Pan-African technology, economic liberation, and sovereignty in code.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BoldMind Concept Hub — Pan-African Future Products",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boldmindtech",
    title: "BoldMind Concept Hub — What We Are Building Next",
    description:
      "11 concepts in motion. 5 rivers of change. Pan-African tech, economic liberation, and sovereignty. #ReturnToTheCircle",
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
  manifest: "/manifest.webmanifest",
  appleWebApp: { title: "BoldMind Concepts", statusBarStyle: "black-translucent" },
  other: {
    "application-name": "BoldMind Concept Hub",
    "apple-mobile-web-app-title": "BoldMind Concepts",
    "msapplication-TileColor": "#C9922A",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#C9922A" },
    { media: "(prefers-color-scheme: dark)", color: "#0A0B07" },
  ],
  colorScheme: "dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BoldMind Technology Solution Enterprise",
  url: "https://boldmind.ng",
  logo: "https://boldmind.ng/logo.png",
  description:
    "Pan-African technology company building products rooted in economic liberation, cultural sovereignty, and community-first design.",
  foundingDate: "2025",
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
  },
  sameAs: [
    "https://x.com/villagecircleng",
    "https://facebook.com/boldmindng",
    "https://instagram.com/boldmindng",
    "https://linkedin.com/company/boldmind-technology-solution-enterprise",
    "https://github.com/boldmind-tech",
  ],
};

const conceptHubSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "BoldMind Concept Hub — Village Circle Products",
  description:
    "11 future product concepts rooted in the 5 Rivers of the Village Circle — Pan-African technology, economic liberation, and sovereignty.",
  numberOfItems: 11,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Product",
        name: "KoloAI",
        description:
          "AI-powered group thrift management for Nigerian communities — digitize ajo, esusu, and cooperative savings.",
        url: `${canonicalUrl}/kolo`,
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Product",
        name: "AfroHustle OS",
        description:
          "ADHD-friendly operating system for African entrepreneurs — MVPs in 4-8 weeks, code that outlives its builder.",
        url: `${canonicalUrl}/afrohustle`,
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Product",
        name: "NaijaGig Matcher",
        description:
          "Skill-first marketplace where talent is visible on merit alone — DJ, tailor, coder, equal dignity.",
        url: `${canonicalUrl}/naijagig`,
      },
    },
    {
      "@type": "ListItem",
      position: 4,
      item: {
        "@type": "Product",
        name: "FarmGate Direct",
        description:
          "Farmer-to-market sovereign supply chains — end raw exports and build local processing power.",
        url: `${canonicalUrl}/farmgate`,
      },
    },
    {
      "@type": "ListItem",
      position: 5,
      item: {
        "@type": "Product",
        name: "AfroCopy AI",
        description:
          "AfriDataSovereign language model — AI trained on African proverbs and context, not foreign mirrors.",
        url: `${canonicalUrl}/afrocopy`,
      },
    },
    {
      "@type": "ListItem",
      position: 6,
      item: {
        "@type": "Product",
        name: "Borderless Remit",
        description:
          "Pan-African cross-border value flows honoring the 54 stools — remittance as reparation.",
        url: `${canonicalUrl}/remit`,
      },
    },
    {
      "@type": "ListItem",
      position: 7,
      item: {
        "@type": "Product",
        name: "SAFE AI",
        description:
          "Community safety infrastructure built on local truth — sovereignty shield for African communities.",
        url: `${canonicalUrl}/safe`,
      },
    },
    {
      "@type": "ListItem",
      position: 8,
      item: {
        "@type": "Product",
        name: "PowerAlert NG",
        description:
          "Crowd-sourced power infrastructure data — community knowledge as sovereignty tool.",
        url: `${canonicalUrl}/power`,
      },
    },
    {
      "@type": "ListItem",
      position: 9,
      item: {
        "@type": "Product",
        name: "ReceiptGenius NG",
        description:
          "Financial transparency tools for Nigerian communities — Ubuntu demands accountability.",
        url: `${canonicalUrl}/receipt`,
      },
    },
    {
      "@type": "ListItem",
      position: 10,
      item: {
        "@type": "Product",
        name: "Skill2Cash",
        description:
          "Monetization rails for underground talent — every Nigerian skill has a market.",
        url: `${canonicalUrl}/skill2cash`,
      },
    },
    {
      "@type": "ListItem",
      position: 11,
      item: {
        "@type": "Product",
        name: "AnonTruth Mic",
        description:
          "Community confession without consequence — truth speaks even when it must whisper.",
        url: `${canonicalUrl}/anon`,
      },
    },
  ],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BoldMind Concept Hub",
  url: canonicalUrl,
  inLanguage: "en-NG",
  description:
    "Where BoldMind's next products are born — rooted in the 5 Rivers of the Village Circle.",
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
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(conceptHubSchema) }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }}
        />
      </head>
      <body className={`${inter.variable} antialiased`}>
        <ErrorBoundary>
          <KoloAILayout>{children}</KoloAILayout>
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}
