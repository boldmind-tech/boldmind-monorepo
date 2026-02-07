import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { KoloAILayout } from "./koloAILayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://kolo.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "KoloAI - Digital Thrift Collector with AI Default Prediction", template: "%s | KoloAI" },
  description: "Group thrift management with AI default prediction, auto-pause contributions, payment reminders, and savings analytics for Nigerian communities.",
  keywords: ["thrift collector", "kolo Nigeria", "savings group", "AI prediction", "group savings", "thrift management", "Nigerian thrift", "ajo digital"],
  authors: [{ name: "KoloAI", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "KoloAI",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "KoloAI - Smart Group Thrift Management",
    siteName: "KoloAI",
    description: "AI-powered thrift collector with default prediction for Nigerian savings groups.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "KoloAI - Digital Thrift Collector", description: "Manage group savings with AI default prediction.", images: [`${canonicalUrl}/og-image.png`] },
  category: "fintech",
  other: { "application-name": "KoloAI", "msapplication-TileColor": "#8BC34A" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#8BC34A", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#8BC34A" /></head>
      <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}><ErrorBoundary><KoloAILayout>{children}</KoloAILayout></ErrorBoundary></body>
    </html>
  );
}