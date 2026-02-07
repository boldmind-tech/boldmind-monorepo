import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { MarketingAutomationLayout } from "./marketingAutomationLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/marketing";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Marketing Automation - AI-Driven Marketing Campaigns & Lead Nurturing",
    template: "%s | Marketing Automation",
  },
  description:
    "AI-driven marketing automation with email campaigns, customer segmentation, personalized messaging, lead scoring, and A/B testing for Nigerian businesses.",
  keywords: [
    "marketing automation",
    "email automation",
    "lead nurturing",
    "customer segmentation",
    "email campaigns",
    "marketing tools Nigeria",
    "CRM automation",
    "lead scoring",
    "A/B testing",
  ],
  authors: [
    { name: "Marketing Automation - PlanAI Suite", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Marketing Automation",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "Marketing Automation - AI Marketing Tools",
    siteName: "Marketing Automation",
    description: "AI-driven email campaigns, segmentation, and lead nurturing for businesses.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Marketing Automation - Email & Lead Nurturing",
    description: "Automate your marketing with AI-powered campaigns.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "marketing",
  other: { "application-name": "Marketing Automation", "msapplication-TileColor": "#9C27B0" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#9C27B0",
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
        <meta name="theme-color" content="#9C27B0" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <MarketingAutomationLayout>{children}</MarketingAutomationLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}