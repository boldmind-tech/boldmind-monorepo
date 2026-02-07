import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AIReceptionistLayout } from "./aIReceptionistLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/receptionist";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "AI Receptionist - Multi-Tenant AI-Powered Lead Capture & Booking System",
    template: "%s | AI Receptionist",
  },
  description:
    "AI-powered receptionist for Instagram, Facebook, and WhatsApp. Auto-reply DMs, qualify leads, book appointments, and manage customer interactions across multiple platforms.",
  keywords: [
    "AI receptionist",
    "lead capture",
    "Instagram automation",
    "Facebook automation",
    "WhatsApp business",
    "appointment booking",
    "customer service automation",
    "DM automation",
    "lead qualification",
    "multi-platform automation",
    "business automation Nigeria",
    "AI customer service",
  ],
  authors: [
    { name: "AI Receptionist - PlanAI Suite", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "AI Receptionist",
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
    title: "AI Receptionist - Automated Lead Capture",
    siteName: "AI Receptionist",
    description:
      "AI-powered receptionist for Instagram, Facebook & WhatsApp. Auto-reply, qualify leads, book appointments.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "AI Receptionist",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "AI Receptionist - Automate Customer Service",
    description: "AI-powered lead capture and booking for social media.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "business",
  other: {
    "application-name": "AI Receptionist",
    "msapplication-TileColor": "#00BCD4",
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
  themeColor: "#00BCD4",
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
        <meta name="theme-color" content="#00BCD4" />
      </head>
      <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}>
        <ErrorBoundary>
          <AIReceptionistLayout>{children}</AIReceptionistLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}