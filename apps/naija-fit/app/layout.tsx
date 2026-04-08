import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NaijaFitherLayout } from "./naijaFitherLayout";
import { ErrorBoundary, CookieConsent } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://fit.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Naija FitHer — Nigerian Youth Fitness, Weight Loss & Wellness Platform",
    template: "%s | Naija FitHer",
  },
  description:
    "Nigeria's #1 fitness and wellness platform for Nigerian youth. AI meal plans with authentic Nigerian foods, home workouts, calorie tracking, and wellness coaching — lose weight eating jollof, beans, plantain and all your favorites.",
  keywords: [
    "fitness Nigeria",
    "weight loss Nigeria",
    "Nigerian youth fitness",
    "Nigerian meal plans",
    "Nigerian meal plans",
    "Naija FitHer",
    "Nigerian diet plan",
    "home workouts Nigeria",
    "AI wellness coach Nigeria",
    "Nigerian youth health",
    "fitness app Nigeria",
    "healthy Nigerian food",
    "body transformation Nigeria",
    "fitness community Nigeria",
    "Nigerian nutrition tracker",
    "Naija food calories",
    "jollof rice diet",
    "Nigerian weight loss journey",
    "African youth fitness",
    "wellness app Nigeria",
    "workout plan Nigeria",
    "Nigerian calorie tracker",
  ],
  authors: [
    { name: "Naija FitHer", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "BoldMind Technology Solution Enterprise",
  publisher: "BoldMind Technology Solution Enterprise",
  formatDetection: { email: false, telephone: false },
  category: "health",
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
    title: "Naija FitHer — Fitness & Wellness for Nigerian Youth",
    siteName: "Naija FitHer",
    description:
      "Lose weight eating jollof, beans, and plantain. AI meal plans with Nigerian foods, home workouts, and wellness coaching built for Nigerian youth.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Naija FitHer — Nigerian Youth Fitness Platform",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@boldmindtech",
    title: "Naija FitHer — Nigerian Youth Fitness & Wellness",
    description:
      "AI meal plans with authentic Nigerian foods, home workouts, and wellness coaching for Nigerian youth.",
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
  appleWebApp: { title: "Naija FitHer", statusBarStyle: "black-translucent" },
  other: {
    "application-name": "Naija FitHer",
    "apple-mobile-web-app-title": "Naija FitHer",
    "msapplication-TileColor": "#E91E63",
  },
};

export const viewport: Viewport = {
  themeColor: [
    { media: "(prefers-color-scheme: light)", color: "#E91E63" },
    { media: "(prefers-color-scheme: dark)", color: "#AD1457" },
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
  name: "Naija FitHer",
  applicationCategory: "HealthApplication",
  operatingSystem: "Web",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description:
    "Nigerian youth fitness and wellness platform with local meal plans, home workouts, and AI coaching.",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "NGN",
    lowPrice: "0",
    highPrice: "15000",
  },
  featureList: [
    "500+ Nigerian meal plans with calorie data",
    "Home workout routines (no gym needed)",
    "AI wellness coach",
    "Community support groups",
    "Weight and measurement tracking",
    "Nigerian food nutrition database",
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
  name: "Naija FitHer",
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
      <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <NaijaFitherLayout>{children}</NaijaFitherLayout>
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}
