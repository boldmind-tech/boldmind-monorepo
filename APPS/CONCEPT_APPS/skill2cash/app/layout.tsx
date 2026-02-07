import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { Skill2CashLayout } from "./skill2CashLayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://skills.educenter.com.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "Skill2Cash Board - Anonymous Job Board for Creative Skills with Video Profiles", template: "%s | Skill2Cash" },
  description: "No CV required - 30-second video profiles for DJs, makeup artists, tailors, and creative professionals. Instant booking with payment escrow.",
  keywords: ["gig marketplace", "creative jobs Nigeria", "video portfolio", "DJ booking", "makeup artist", "tailor Nigeria", "creative skills", "anonymous job board"],
  authors: [{ name: "Skill2Cash Board", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "Skill2Cash Board",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "Skill2Cash - Creative Skills Marketplace",
    siteName: "Skill2Cash Board",
    description: "Video-based job board for creative professionals in Nigeria.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "Skill2Cash - Creative Gigs", description: "Book creative professionals with video profiles.", images: [`${canonicalUrl}/og-image.png`] },
  category: "marketplace",
  other: { "application-name": "Skill2Cash", "msapplication-TileColor": "#AB47BC" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#AB47BC", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#AB47BC" /></head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}><ErrorBoundary><Skill2CashLayout>{children}</Skill2CashLayout></ErrorBoundary></body>
    </html>
  );
}