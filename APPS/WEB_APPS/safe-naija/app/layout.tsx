import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SafeAILayout } from "./safeAILayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://safe.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "SAFE AI - AI-Powered Security Intelligence for Nigerian Law Enforcement",
    template: "%s | SAFE AI",
  },
  description:
    "AI-powered security intelligence platform for Nigerian police. Incident reporting, criminal database, pattern recognition, predictive policing, and investigation tools for law enforcement.",
  keywords: [
    "police technology Nigeria",
    "law enforcement AI",
    "security intelligence",
    "SAFE AI",
    "crime prevention",
    "incident reporting",
    "Nigerian police",
    "security platform",
    "predictive policing",
    "criminal database",
    "investigation tools",
    "public safety Nigeria",
  ],
  authors: [
    { name: "SAFE AI", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "SAFE AI",
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
    title: "SAFE AI - Security Intelligence for Nigeria",
    siteName: "SAFE AI",
    description:
      "AI-powered platform for Nigerian law enforcement with incident reporting and predictive policing.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "SAFE AI - Nigerian Security Platform",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "SAFE AI - Law Enforcement Technology",
    description: "AI-powered security intelligence for Nigerian police.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "security",
  other: {
    "application-name": "SAFE AI",
    "msapplication-TileColor": "#1565C0",
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
  themeColor: "#1565C0",
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
        <meta name="theme-color" content="#1565C0" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <SafeAILayout>{children}</SafeAILayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}