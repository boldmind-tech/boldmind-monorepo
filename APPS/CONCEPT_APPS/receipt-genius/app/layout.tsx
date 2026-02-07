import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ReceiptGeniusLayout } from "./receiptGeniusLayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://receipt.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "ReceiptGenius NG - Instant VAT-Compliant Invoice & Receipt Generator", template: "%s | ReceiptGenius NG" },
  description: "Generate VAT-compliant receipts and invoices for Nigerian businesses. Customer database, SMS/email delivery, and sales analytics.",
  keywords: ["receipt generator Nigeria", "VAT compliant", "invoice generator", "Nigerian receipts", "FIRS compliant", "business receipts", "invoice Nigeria"],
  authors: [{ name: "ReceiptGenius NG", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "ReceiptGenius NG",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "ReceiptGenius NG - VAT-Compliant Receipts",
    siteName: "ReceiptGenius NG",
    description: "Instant VAT-compliant receipt and invoice generation for Nigerian businesses.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "ReceiptGenius NG - Invoice Generator", description: "Generate compliant receipts for Nigerian businesses.", images: [`${canonicalUrl}/og-image.png`] },
  category: "business",
  other: { "application-name": "ReceiptGenius NG", "msapplication-TileColor": "#5E35B1" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#5E35B1", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#5E35B1" /></head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}><ErrorBoundary><ReceiptGeniusLayout>{children}</ReceiptGeniusLayout></ErrorBoundary></body>
    </html>
  );
}