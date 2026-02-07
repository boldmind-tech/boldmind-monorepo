import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BusinessPlanningLayout } from "./businessPlanningLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/planning";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "AI Business Planning - Generate Dynamic Business Plans & Market Analysis",
    template: "%s | AI Business Planning",
  },
  description:
    "AI-powered business plan generator with pitch deck creator, Nigerian market analysis, financial projections, and competitor analysis for entrepreneurs and startups.",
  keywords: [
    "business plan generator",
    "AI business planning",
    "pitch deck creator",
    "market analysis Nigeria",
    "financial projections",
    "business plan Nigeria",
    "startup planning",
    "competitor analysis",
    "business strategy",
    "entrepreneur tools Nigeria",
  ],
  authors: [
    { name: "AI Business Planning - PlanAI Suite", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "AI Business Planning",
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
    title: "AI Business Planning - Create Professional Business Plans",
    siteName: "AI Business Planning",
    description:
      "Generate comprehensive business plans with AI. Includes pitch decks, market analysis, and financial projections.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AI Business Planning",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Business Planning - Automated Business Plans",
    description: "Create professional business plans with AI assistance.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "business",
  other: {
    "application-name": "AI Business Planning",
    "msapplication-TileColor": "#3F51B5",
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
  themeColor: "#3F51B5",
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
        <meta name="theme-color" content="#3F51B5" />
      </head>
      <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}>
        <ErrorBoundary>
          <BusinessPlanningLayout>{children}</BusinessPlanningLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}