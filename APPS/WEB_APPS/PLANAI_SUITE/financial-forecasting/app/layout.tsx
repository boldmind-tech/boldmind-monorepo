import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { FinancialForecastingLayout } from "./financialForecastingLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/finance";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Financial Forecasting - AI-Driven Cashflow Modeling & Revenue Forecasting",
    template: "%s | Financial Forecasting",
  },
  description:
    "AI-powered financial forecasting with cashflow projections, revenue forecasting, break-even analysis, and scenario planning for Nigerian businesses.",
  keywords: [
    "financial forecasting",
    "cashflow projection",
    "revenue forecasting",
    "financial modeling",
    "break-even analysis",
    "business finance Nigeria",
    "financial planning",
    "scenario planning",
    "SME finance",
  ],
  authors: [
    { name: "Financial Forecasting - PlanAI Suite", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Financial Forecasting",
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
    title: "Financial Forecasting - AI Financial Planning",
    siteName: "Financial Forecasting",
    description: "AI-driven cashflow modeling and revenue forecasting for businesses.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Financial Forecasting - Cashflow & Revenue Modeling",
    description: "AI-powered financial forecasting for Nigerian businesses.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "business",
  other: {
    "application-name": "Financial Forecasting",
    "msapplication-TileColor": "#4CAF50",
  },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#4CAF50",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
};

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#4CAF50" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <FinancialForecastingLayout>{children}</FinancialForecastingLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}