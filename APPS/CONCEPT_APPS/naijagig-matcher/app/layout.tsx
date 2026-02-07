import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NaijaGigMatcherLayout } from "./naijaGigMatcherLayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://gig.educenter.com.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "NaijaGig Matcher - Hyper-Local Gig Marketplace for Artisans", template: "%s | NaijaGig Matcher" },
  description: "Hyper-local gig marketplace connecting Nigerian artisans with customers. Location matching, same-day wallet payout, reviews, and ratings.",
  keywords: ["gig marketplace Nigeria", "artisan jobs", "local services", "Nigerian artisans", "gig workers", "local marketplace", "artisan booking"],
  authors: [{ name: "NaijaGig Matcher", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "NaijaGig Matcher",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "NaijaGig Matcher - Local Artisan Marketplace",
    siteName: "NaijaGig Matcher",
    description: "Connect with local artisans and gig workers in your area.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "NaijaGig Matcher - Artisan Marketplace", description: "Find local artisans and gig workers near you.", images: [`${canonicalUrl}/og-image.png`] },
  category: "marketplace",
  other: { "application-name": "NaijaGig Matcher", "msapplication-TileColor": "#FF5722" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#FF5722", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#FF5722" /></head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}><ErrorBoundary><NaijaGigMatcherLayout>{children}</NaijaGigMatcherLayout></ErrorBoundary></body>
    </html>
  );
}