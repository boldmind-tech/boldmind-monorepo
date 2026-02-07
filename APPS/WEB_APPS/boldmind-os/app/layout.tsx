import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BoldMindOSLayout } from "./boldmindOSLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://os.boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "BoldMind OS - Personal Operating System for Neurodivergent Entrepreneurs",
    template: "%s | BoldMind OS",
  },
  description:
    "ADHD-friendly productivity OS with multi-modal capture, visual knowledge graph, Pomodoro timer, and AI content pipeline. Built for neurodivergent entrepreneurs with dyslexia mode and focus tools.",
  keywords: [
    "ADHD productivity",
    "neurodivergent tools",
    "dyslexia friendly",
    "knowledge management",
    "personal OS",
    "BoldMind OS",
    "productivity system",
    "ADHD tools",
    "focus timer",
    "knowledge graph",
    "content pipeline",
    "note taking ADHD",
    "entrepreneur tools",
    "neurodiversity",
    "productivity app",
    "second brain",
    "PKM system",
  ],
  authors: [
    { name: "BoldMind OS", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "BoldMind OS",
  publisher: "BoldMind Technology Solution Enterprise",
  formatDetection: {
    email: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "en-NG": canonicalUrl,
      "en-US": canonicalUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "BoldMind OS - Productivity for Neurodivergent Minds",
    siteName: "BoldMind OS",
    description:
      "ADHD-friendly personal operating system with multi-modal capture, knowledge graph, and dyslexia mode.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "BoldMind OS - Neurodivergent Productivity",
        type: "image/png",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "BoldMind OS - Built for Neurodivergent Entrepreneurs",
    description:
      "ADHD-friendly productivity with multi-modal capture, visual knowledge graph, and focus tools.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "productivity",
  other: {
    "application-name": "BoldMind OS",
    "msapplication-TileColor": "#9C27B0",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-title": "BoldMind OS",
  },
  icons: {
    icon: [
      { url: "/favicon.ico", sizes: "any" },
      { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" },
      { url: "/icon-512x512.png", sizes: "512x512", type: "image/png" },
    ],
    apple: [
      { url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" },
    ],
  },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = {
  themeColor: "#9C27B0",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

const softwareSchema = {
  "@context": "https://schema.org",
  "@type": "SoftwareApplication",
  name: "BoldMind OS",
  applicationCategory: "ProductivityApplication",
  operatingSystem: "Web",
  offers: {
    "@type": "AggregateOffer",
    priceCurrency: "NGN",
    lowPrice: "0",
    highPrice: "15000",
  },
  description:
    "Personal operating system for neurodivergent entrepreneurs with ADHD-friendly features",
  featureList: [
    "Multi-modal capture (text, voice, image)",
    "ADHD-friendly Pomodoro timer",
    "Visual knowledge graph",
    "AI content pipeline",
    "Dyslexia Mode",
    "Focus analytics",
  ],
  screenshot: `${canonicalUrl}/screenshot.png`,
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
        <link
          rel="preconnect"
          href="https://fonts.gstatic.com"
          crossOrigin="anonymous"
        />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(softwareSchema),
          }}
        />

        <meta name="apple-mobile-web-app-title" content="BoldMind OS" />
        <meta name="theme-color" content="#9C27B0" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}
      >
        <ErrorBoundary>
          <BoldMindOSLayout>{children}</BoldMindOSLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}