import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AfroCopyAILayout } from "./afroCopyAILayout";
import { ErrorBoundary } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://copy.amebogist.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: { default: "AfroCopy AI - African-Trained Copywriting Tool with Local Languages", template: "%s | AfroCopy AI" },
  description: "AI copywriting tool trained on African languages including Pidgin, Yoruba, Igbo, and Hausa. Generate social media captions, ad copy, emails, and blog content.",
  keywords: ["AI copywriting", "Pidgin copywriting", "Nigerian languages", "African AI", "content generation", "social media captions", "ad copy Nigeria"],
  authors: [{ name: "AfroCopy AI", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
  creator: "AfroCopy AI",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "AfroCopy AI - African Language Copywriting",
    siteName: "AfroCopy AI",
    description: "AI copywriting in Pidgin, Yoruba, Igbo, and Hausa for Nigerian creators.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: { card: "summary_large_image", title: "AfroCopy AI - African AI Copywriting", description: "Generate content in Nigerian languages with AI.", images: [`${canonicalUrl}/og-image.png`] },
  category: "marketing",
  other: { "application-name": "AfroCopy AI", "msapplication-TileColor": "#FF6F00" },
  icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
  manifest: "/manifest.webmanifest",
};

export const viewport: Viewport = { themeColor: "#FF6F00", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
  return (
    <html lang="en" className="scroll-smooth" suppressHydrationWarning>
      <head><link rel="preconnect" href="https://fonts.googleapis.com" /><link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" /><meta name="theme-color" content="#FF6F00" /></head>
      <body className={`${inter.className} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100`}><ErrorBoundary><AfroCopyAILayout>{children}</AfroCopyAILayout></ErrorBoundary></body>
    </html>
  );
}