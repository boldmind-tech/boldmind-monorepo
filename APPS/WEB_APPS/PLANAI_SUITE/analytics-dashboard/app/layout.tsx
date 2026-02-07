import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AnalyticsDashboardLayout } from "./analyticsDashboardLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/analytics";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Analytics Dashboard - Cross-Platform Business Intelligence",
    template: "%s | Analytics Dashboard",
  },
  description:
    "Cross-platform business intelligence with unified analytics, behavior insights, growth opportunities, custom reports, and real-time monitoring for Nigerian businesses.",
  keywords: [
    "business analytics",
    "analytics dashboard",
    "business intelligence",
    "data analytics Nigeria",
    "real-time analytics",
    "custom reports",
    "growth insights",
    "BI tools",
  ],
  authors: [
    { name: "Analytics Dashboard - PlanAI Suite", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Analytics Dashboard",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "Analytics Dashboard - Business Intelligence",
    siteName: "Analytics Dashboard",
    description: "Unified analytics and business intelligence for cross-platform insights.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Analytics Dashboard - BI & Insights",
    description: "Cross-platform analytics and business intelligence.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "business",
  other: { "application-name": "Analytics Dashboard", "msapplication-TileColor": "#607D8B" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#607D8B",
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
        <meta name="theme-color" content="#607D8B" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <AnalyticsDashboardLayout>{children}</AnalyticsDashboardLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}