import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BorderlessRemitLayout } from "./borderlessRemitLayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://border.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "BorderlessRemit Tracker - Real-Time Remittance Rate Comparison", template: "%s | BorderlessRemit" },
  description: "Compare bank vs black market remittance rates, receipt generator, affiliate links to services, rate alerts, and transfer tracking for Nigeria.",
  keywords: ["remittance Nigeria", "money transfer", "exchange rates", "black market rates", "bank rates", "remittance comparison", "transfer tracker"],
  authors: [{ name: "BorderlessRemit Tracker", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "BorderlessRemit Tracker",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "BorderlessRemit - Compare Remittance Rates",
    siteName: "BorderlessRemit Tracker",
    description: "Real-time comparison of remittance rates for Nigerian transfers.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "BorderlessRemit - Rate Comparison", description: "Compare remittance rates and save money.", images: [`${canonicalUrl}/og-image.png`] },
  category: "fintech",
  other: { "application-name": "BorderlessRemit", "msapplication-TileColor": "#009688" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#009688", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#009688" /></head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}><ErrorBoundary><BorderlessRemitLayout>{children}</BorderlessRemitLayout></ErrorBoundary></body>
    </html>
  );
}