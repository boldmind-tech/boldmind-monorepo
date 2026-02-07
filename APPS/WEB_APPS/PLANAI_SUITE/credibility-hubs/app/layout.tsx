import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { CredibilityHubsLayout } from "./credibilityHubsLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/credibility";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Professional Credibility Hubs - AI-Assisted Personal Branding & Portfolio Sites",
    template: "%s | Credibility Hubs",
  },
  description:
    "AI-assisted personal branding and portfolio builder. Create professional portfolios, optimize LinkedIn profiles, generate resumes, and build your credibility online.",
  keywords: [
    "portfolio builder",
    "personal branding",
    "LinkedIn optimization",
    "resume generator",
    "professional portfolio",
    "credibility hub",
    "AI branding",
    "portfolio website",
    "professional branding Nigeria",
    "career portfolio",
    "online portfolio",
  ],
  authors: [
    { name: "Credibility Hubs - PlanAI Suite", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Credibility Hubs",
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
    title: "Credibility Hubs - Build Your Professional Brand",
    siteName: "Credibility Hubs",
    description:
      "AI-assisted portfolio builder, LinkedIn optimizer, and resume generator for professionals.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "Credibility Hubs",
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    title: "Credibility Hubs - Professional Branding",
    description: "Build your professional portfolio with AI assistance.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "business",
  other: {
    "application-name": "Credibility Hubs",
    "msapplication-TileColor": "#673AB7",
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
  themeColor: "#673AB7",
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
        <meta name="theme-color" content="#673AB7" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <CredibilityHubsLayout>{children}</CredibilityHubsLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}