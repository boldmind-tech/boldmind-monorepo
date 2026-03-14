import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { ErrorBoundary, CookieConsent } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({ subsets: ["latin"], display: "swap", variable: "--font-inter", preload: true });
const getCanonicalUrl = () => {
    const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://tools.boldmind.ng";
    return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
    metadataBase: new URL(canonicalUrl),
    title: { default: "BoldMind Tools - Productivity & Automation Tools", template: "%s | BoldMind Tools" },
    description: "Powerful productivity and automation tools for African businesses. EmailScraper Pro for lead generation and Social Content Factory for social media automation.",
    keywords: ["email scraper", "social media tools", "content factory", "Nigerian business tools", "lead generation", "social automation", "BoldMind"],
    authors: [{ name: "BoldMind Tools", url: canonicalUrl }, { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" }],
    creator: "BoldMind Tools",
    publisher: "BoldMind Technology Solution Enterprise",
    robots: { index: true, follow: true },
    alternates: { canonical: canonicalUrl },
    openGraph: {
        type: "website",
        locale: "en_NG",
        url: canonicalUrl,
        title: "BoldMind Tools - Productivity & Automation",
        siteName: "BoldMind Tools",
        description: "EmailScraper Pro and Social Content Factory — powerful tools for African businesses.",
        images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
    },
    twitter: { card: "summary_large_image", title: "BoldMind Tools", description: "Powerful productivity tools for African businesses.", images: [`${canonicalUrl}/og-image.png`] },
    category: "productivity",
    other: { "application-name": "BoldMind Tools", "msapplication-TileColor": "#7C3AED" },
    icons: { icon: [{ url: "/favicon.ico", sizes: "any" }, { url: "/icon-192x192.png", sizes: "192x192", type: "image/png" }], apple: [{ url: "/apple-touch-icon.png", sizes: "180x180", type: "image/png" }] },
    manifest: "/manifest.json",
};

export const viewport: Viewport = { themeColor: "#7C3AED", colorScheme: "light dark", width: "device-width", initialScale: 1, maximumScale: 5, userScalable: true };

export default function RootLayout({ children }: Readonly<{ children: React.ReactNode }>) {
    return (
        <html lang="en" className="scroll-smooth" suppressHydrationWarning>
            <head>
                <link rel="preconnect" href="https://fonts.googleapis.com" />
                <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
                <meta name="theme-color" content="#7C3AED" />
            </head>
            <body className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}>
                <ErrorBoundary>
                    {children}
                    <CookieConsent />
                </ErrorBoundary>
            </body>
        </html>
    );
}
