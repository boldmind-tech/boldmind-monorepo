import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { InvestorReadinessLayout } from "./investorReadinessLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/investor";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Investor Readiness Suite - Automated Funding Documentation & Workflows",
    template: "%s | Investor Readiness",
  },
  description:
    "Automated funding documentation with SAFE/term sheets, data room setup, pitch deck templates, cap table management, and due diligence checklists for startups.",
  keywords: [
    "investor readiness",
    "startup funding",
    "SAFE agreement",
    "term sheets",
    "pitch deck",
    "cap table",
    "due diligence",
    "funding documentation",
    "startup investment Nigeria",
  ],
  authors: [
    { name: "Investor Readiness Suite - PlanAI", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Investor Readiness Suite",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "Investor Readiness - Funding Documentation",
    siteName: "Investor Readiness Suite",
    description: "Automated funding documentation and workflows for startups.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Investor Readiness - Startup Funding Tools",
    description: "SAFE agreements, pitch decks, and cap table management.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "business",
  other: { "application-name": "Investor Readiness", "msapplication-TileColor": "#FF9800" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#FF9800",
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
        <meta name="theme-color" content="#FF9800" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <InvestorReadinessLayout>{children}</InvestorReadinessLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}