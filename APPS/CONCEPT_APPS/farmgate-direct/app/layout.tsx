import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { FarmGateDirectLayout } from "./farmGateDirectLayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://farm.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "FarmGate Direct - Direct Farmer-to-Buyer Marketplace", template: "%s | FarmGate Direct" },
  description: "Direct farmer-to-buyer marketplace with quality verification, logistics coordination, and market price tracking for Nigerian agriculture.",
  keywords: ["farmer marketplace", "agriculture Nigeria", "farm produce", "farmer to buyer", "Nigerian farmers", "fresh produce", "agricultural marketplace"],
  authors: [{ name: "FarmGate Direct", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "FarmGate Direct",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "FarmGate Direct - Connect Farmers & Buyers",
    siteName: "FarmGate Direct",
    description: "Direct marketplace connecting Nigerian farmers with buyers.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "FarmGate Direct - Farm Marketplace", description: "Buy fresh produce directly from Nigerian farmers.", images: [`${canonicalUrl}/og-image.png`] },
  category: "marketplace",
  other: { "application-name": "FarmGate Direct", "msapplication-TileColor": "#689F38" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#689F38", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#689F38" /></head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}><ErrorBoundary><FarmGateDirectLayout>{children}</FarmGateDirectLayout></ErrorBoundary></body>
    </html>
  );
}