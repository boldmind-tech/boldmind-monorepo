import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AnonTruthMicLayout } from "./anonTruthMicLayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://anon.amebogist.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "AnonTruth Mic - Temporary Anonymous Audio Drop for Whistleblowers", template: "%s | AnonTruth Mic" },
  description: "100% anonymous and encrypted audio platform for whistleblowers. Temporary auto-delete messages, location-targeted, voice distortion, and boost features.",
  keywords: ["anonymous audio", "whistleblower", "encrypted messaging", "anonymous platform", "voice distortion", "Nigeria whistleblower", "anonymous reporting"],
  authors: [{ name: "AnonTruth Mic", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "AnonTruth Mic",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "AnonTruth Mic - Anonymous Audio Platform",
    siteName: "AnonTruth Mic",
    description: "Encrypted anonymous audio platform for whistleblowers with auto-delete and voice distortion.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "AnonTruth Mic - Whistleblower Platform", description: "Anonymous encrypted audio for truth-tellers.", images: [`${canonicalUrl}/og-image.png`] },
  category: "social",
  other: { "application-name": "AnonTruth Mic", "msapplication-TileColor": "#424242" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#424242", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#424242" /></head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}><ErrorBoundary><AnonTruthMicLayout>{children}</AnonTruthMicLayout></ErrorBoundary></body>
    </html>
  );
}