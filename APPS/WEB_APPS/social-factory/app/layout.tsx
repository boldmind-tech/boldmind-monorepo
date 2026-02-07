import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { SocialFactoryLayout } from "./socialFactoryLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://social.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Social Media Content Factory - Automated Video Content Generation & Publishing",
    template: "%s | Social Factory",
  },
  description:
    "Automated video content generation and multi-channel publishing for social media. AI-powered video creation, content calendar, and analytics for YouTube, Instagram, Facebook, Twitter, and TikTok.",
  keywords: [
    "social media automation",
    "AI video generation",
    "content factory",
    "social media publishing",
    "video content creation",
    "multi-platform publishing",
    "content calendar",
    "social media analytics",
    "automated content",
    "video marketing",
    "social media tools",
    "content creation Nigeria",
  ],
  authors: [
    { name: "Social Media Content Factory", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Social Media Content Factory",
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
    title: "Social Factory - Automated Content Creation",
    siteName: "Social Media Content Factory",
    description:
      "AI-powered video generation and multi-platform publishing for social media creators and businesses.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Social Media Content Factory",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Social Factory - AI Video Content Automation",
    description: "Automated video generation and multi-channel publishing.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "marketing",
  other: {
    "application-name": "Social Factory",
    "msapplication-TileColor": "#FF5722",
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
  themeColor: "#FF5722",
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
        <meta name="theme-color" content="#FF5722" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <SocialFactoryLayout>{children}</SocialFactoryLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}