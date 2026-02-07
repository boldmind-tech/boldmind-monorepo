import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BrandingDesignLayout } from "./brandingDesignLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://planai.boldmind.ng/design";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "Branding & Design Tools - AI-Powered Logo Creation & Marketing Visuals",
    template: "%s | Branding & Design",
  },
  description:
    "AI-powered logo creation, color palettes, marketing templates, brand guidelines, and social media kits for Nigerian businesses.",
  keywords: [
    "logo generator",
    "AI design",
    "branding tools",
    "marketing visuals",
    "brand guidelines",
    "social media kit",
    "logo design Nigeria",
    "business branding",
    "color palettes",
  ],
  authors: [
    { name: "Branding & Design - PlanAI Suite", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "Branding & Design Tools",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "Branding & Design - AI Logo & Marketing Tools",
    siteName: "Branding & Design Tools",
    description: "AI-powered logo creation and marketing visuals for businesses.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image",
    title: "Branding & Design - AI-Powered Design Tools",
    description: "Create logos, brand guidelines, and marketing materials with AI.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  category: "design",
  other: { "application-name": "Branding & Design", "msapplication-TileColor": "#E91E63" },
  icons: {
    icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }],
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

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head>
        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <meta name="theme-color" content="#E91E63" />
      </head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}>
        <ErrorBoundary>
          <BrandingDesignLayout>{children}</BrandingDesignLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}