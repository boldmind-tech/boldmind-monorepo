import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BoldMindOSLayout } from "./boldmindOSLayout";
import { ClientErrorBoundary } from "./components/ClientErrorBoundary";
import { CookieConsent } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://os.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "BoldMind OS — Personal Operating System for Neurodivergent Entrepreneurs",
    template: "%s | BoldMind OS",
  },
  description:
    "ADHD-friendly productivity OS built for neurodivergent Nigerian entrepreneurs. Multi-modal thought capture, visual knowledge graph, Pomodoro focus timer, AI content pipeline, and dyslexia mode — finally a system that works WITH your brain.",
  keywords: [
    "ADHD productivity app",
    "neurodivergent entrepreneur tools",
    "dyslexia friendly app",
    "knowledge management ADHD",
    "personal OS productivity",
    "BoldMind OS",
    "ADHD tools Nigeria",
    "focus timer ADHD",
    "knowledge graph app",
    "AI content pipeline",
    "second brain app",
    "PKM system",
    "note taking ADHD",
    "time blindness tools",
    "executive function support",
    "productivity system Nigeria",
    "neurodiversity app",
    "Pomodoro timer ADHD",
    "entrepreneur productivity Nigeria",
    "BoldMind productivity",
  ],
  authors: [
    { name: "BoldMind OS", url: canonicalUrl },
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
      "max-image-preview": "large",
      "max-snippet": -1,
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
    title: "BoldMind OS — Productivity for Neurodivergent Minds",
    siteName: "BoldMind OS",
    description:
      "ADHD-friendly personal operating system with multi-modal capture, visual knowledge graph, dyslexia mode, and focus tools. Built for Nigerian entrepreneurs.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BoldMind OS — Neurodivergent Productivity System",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boldmindtech",
    title: "BoldMind OS — Built for Neurodivergent Entrepreneurs",
    description:
      "ADHD-friendly productivity with multi-modal capture, visual knowledge graph, and focus tools.",
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
  appleWebApp: { title: "BoldMind OS", statusBarStyle: "black-translucent" },
  other: {
    "application-name": "BoldMind OS",
    "apple-mobile-web-app-title": "BoldMind OS",
    "msapplication-TileColor": "#9C27B0",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#9C27B0" },
    { media: "(prefers-color-scheme: dark)", color: "#6A0080" },
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
  name: "BoldMind OS",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description:
    "Personal operating system for neurodivergent entrepreneurs with ADHD-friendly features, dyslexia mode, and AI-powered productivity tools.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "NGN",
    lowPrice: "0",
    highPrice: "30000",
  },
  featureList: [
    "Multi-modal thought capture (text, voice, image)",
    "ADHD-friendly Pomodoro focus timer",
    "Visual knowledge graph",
    "AI content pipeline manager",
    "Dyslexia Mode with OpenDyslexic font",
    "Focus analytics and progress tracking",
    "Time blindness support tools",
    "Body doubling sessions",
  ],
  screenshot: `${canonicalUrl}/screenshot.png`,
  publisher: {
    "@type": "Organization",
    name: "BoldMind Technology Solution Enterprise",
    url: "https://boldmind.ng",
  },
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "BoldMind OS",
  url: canonicalUrl,
  inLanguage: "en-NG",
  potentialAction: {
    "@type": "SearchAction",
    target: `${canonicalUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({
  children,
}: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en-NG" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://cdn.os.boldmind.ng" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//fonts.gstatic.com" />
        <link rel="dns-prefetch" href="//cdn.os.boldmind.ng" />
        <link rel="dns-prefetch" href="//api.boldmind.ng" />
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
        <ClientErrorBoundary>
          <BoldMindOSLayout>{children}</BoldMindOSLayout>
          <CookieConsent />
        </ClientErrorBoundary>
      </body>
    </html>
  );
}
