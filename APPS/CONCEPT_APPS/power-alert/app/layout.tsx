import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { PowerAlertLayout } from "./powerAlertLayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://power.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "PowerAlert NG - Crowd-Sourced NEPA Light Tracker + Solar Calculator", template: "%s | PowerAlert NG" },
  description: "Real-time NEPA power status tracking by area, solar calculator, installer directory, energy cost tracking, and outage reporting for Nigeria.",
  keywords: ["NEPA tracker", "power outage Nigeria", "solar calculator", "electricity Nigeria", "power alert", "energy tracking", "solar installers Nigeria"],
  authors: [{ name: "PowerAlert NG", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "PowerAlert NG",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "PowerAlert NG - Track NEPA Power & Find Solar Solutions",
    siteName: "PowerAlert NG",
    description: "Real-time power status tracking and solar calculator for Nigeria.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "PowerAlert NG - NEPA Tracker", description: "Track power outages and find solar solutions.", images: [`${canonicalUrl}/og-image.png`] },
  category: "utilities",
  other: { "application-name": "PowerAlert NG", "msapplication-TileColor": "#FFC107" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#FFC107", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#FFC107" /></head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}><ErrorBoundary><PowerAlertLayout>{children}</PowerAlertLayout></ErrorBoundary></body>
    </html>
  );
}