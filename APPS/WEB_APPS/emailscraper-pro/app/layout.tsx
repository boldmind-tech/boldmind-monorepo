import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { EmailScraperProLayout } from "./emailScraperProLayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://email.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "EmailScraper Pro - Advanced Email Discovery & Verification for Nigerian B2B",
    template: "%s | EmailScraper Pro",
  },
  description:
    "Find and verify business emails for Nigerian B2B market. Real-time verification, bulk CSV operations, lead enrichment, and API access for sales teams and recruiters.",
  keywords: [
    "email finder Nigeria",
    "email verification",
    "lead generation",
    "B2B sales Nigeria",
    "email scraper",
    "business emails",
    "Nigerian directory",
    "sales tools",
    "lead enrichment",
    "CRM integration",
    "bulk email finder",
    "Nigerian businesses",
    "sales prospecting",
    "email discovery",
  ],
  authors: [
    { name: "EmailScraper Pro", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "EmailScraper Pro",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: {
    index: true,
    follow: true,
  },
  alternates: {
    canonical: canonicalUrl,
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "EmailScraper Pro - B2B Email Discovery for Nigeria",
    siteName: "EmailScraper Pro",
    description:
      "Find and verify business emails with real-time verification and lead enrichment for Nigerian B2B market.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "EmailScraper Pro",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "EmailScraper Pro - Email Discovery & Verification",
    description: "Find and verify business emails for Nigerian B2B sales.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "business",
  other: {
    "application-name": "EmailScraper Pro",
    "msapplication-TileColor": "#2196F3",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#2196F3",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode;
}>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#2196F3" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <EmailScraperProLayout>{children}</EmailScraperProLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}