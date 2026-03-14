import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { NaijaFitherLayout } from "./naijaFitherLayout";
import { ErrorBoundary, CookieConsent } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: true,
});

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://fit.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Naija FitHer - Weight Loss & Wellness Platform for Nigerian Women",
    template: "%s | Naija FitHer",
  },
  description:
    "Weight loss and wellness platform designed for Nigerian women. Nigerian meal plans, home workouts, AI wellness coach, and community support. 500+ Nigerian dishes with nutrition data.",
  keywords: [
    "weight loss Nigeria",
    "Nigerian fitness",
    "women wellness Nigeria",
    "Nigerian meal plans",
    "fitness for women",
    "Naija FitHer",
    "Nigerian diet",
    "home workouts Nigeria",
    "wellness coach",
    "Nigerian women health",
    "fitness app Nigeria",
    "healthy Nigerian food",
    "weight loss women",
    "fitness community Nigeria",
  ],
  authors: [
    { name: "Naija FitHer", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Naija FitHer",
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
    title: "Naija FitHer - Wellness for Nigerian Women",
    siteName: "Naija FitHer",
    description:
      "Weight loss platform with Nigerian meal plans, home workouts, and AI wellness coach for Nigerian women.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Naija FitHer - Nigerian Women Wellness",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Naija FitHer - Weight Loss for Nigerian Women",
    description: "Nigerian meal plans, home workouts, and wellness coaching.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "health",
  other: {
    "application-name": "Naija FitHer",
    "msapplication-TileColor": "#E91E63",
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
  themeColor: "#E91E63",
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
        <meta name="theme-color" content="#E91E63" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <NaijaFitherLayout>{children}</NaijaFitherLayout>
          <CookieConsent />
        </ErrorBoundary>
      </body>
    </html>
  );
}