import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { DigitalStorefrontsLayout } from "./digitalStorefrontsLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/store";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Digital Storefronts - Instant E-Commerce Stores for SMEs & Creators",
    template: "%s | Digital Storefronts",
  },
  description:
    "Instant e-commerce store creation with Paystack integration, inventory management, order tracking, and customer management for Nigerian SMEs and creators.",
  keywords: [
    "e-commerce Nigeria",
    "online store builder",
    "digital storefront",
    "Paystack integration",
    "inventory management",
    "online shop Nigeria",
    "SME e-commerce",
    "instant store",
  ],
  authors: [
    { name: "Digital Storefronts - PlanAI Suite", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Digital Storefronts",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "Digital Storefronts - Instant E-Commerce",
    siteName: "Digital Storefronts",
    description: "Create your online store instantly with Paystack integration and inventory management.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Digital Storefronts - E-Commerce Made Easy",
    description: "Instant online stores for Nigerian SMEs and creators.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "business",
  other: { "application-name": "Digital Storefronts", "msapplication-TileColor": "#00BCD4" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#00BCD4",
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
        <meta name="theme-color" content="#00BCD4" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <DigitalStorefrontsLayout>{children}</DigitalStorefrontsLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}