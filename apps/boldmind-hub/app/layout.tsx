// ─────────────────────────────────────────────────────────────────────────────
// apps/boldmind-hub/app/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// CHANGES:
//   - Blocking <script> in <head> sets data-font BEFORE first paint (no FOUC)
//   - body className uses var(--font-active) via CSS, NOT inter.className
//     (inter is loaded as a CSS variable only so it's available when user
//     switches to standard mode — it never forces Inter as the active font)
//   - BoldMindLayout wrapper preserved
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { BoldMindLayout } from "./boldmindLayout";
import { ErrorBoundary, FacebookSDK, CookieConsent } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

// Load Inter as a CSS variable only — NOT applied to body.
// OpenDyslexic is the default. Inter becomes available when user switches
// to standard mode via the DyslexiaToggle.
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: false, // Don't block on Inter — OpenDyslexic is the default
});

const getCanonicalUrl = () => {
  const baseUrl = process.env["NEXT_PUBLIC_APP_URL"] || "https://boldmind.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "BoldMind - Empowering 1M Nigerian Entrepreneurs by 2030",
    template: "%s | BoldMind Technology Ecosystem",
  },
  description:
    "Nigerian tech ecosystem creating impact-driven products that solve fundamental problems through authentic media, education, and AI-powered technology.",
  keywords: ["Nigerian entrepreneurs", "tech Nigeria", "AI Nigeria", "BoldMind ecosystem"],
  authors: [{ name: "BoldMind Technology Solution Enterprise", url: canonicalUrl }],
  creator: "BoldMind Technology Solution Enterprise",
  publisher: "BoldMind Technology Solution Enterprise",
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website", locale: "en_NG", url: canonicalUrl,
    title: "BoldMind - Building Systems That Shift Nations",
    siteName: "BoldMind",
    description: "Empowering 1 million Nigerian Entrepreneurs by 2030.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630, alt: "BoldMind" }],
  },
  twitter: {
    card: "summary_large_image", site: "@boldmindtech",
    title: "BoldMind - Empowering Nigerian Entrepreneurs",
    images: [`${canonicalUrl}/og-image.png`],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon-192x192.png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { title: "BoldMind", statusBarStyle: "black-translucent" },
};

export const viewport: Viewport = {
  // ✅ Corrected theme color to match logo
  themeColor: "#2B4D87",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "Organization",
  name: "BoldMind Technology Solution Enterprise",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.webp`,
  description: "Empowering 1 million Nigerian Entrepreneurs by 2030",
  foundingDate: "2025",
  address: { "@type": "PostalAddress", addressCountry: "NG", addressRegion: "Lagos" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: "hello@boldmind.ng" },
  sameAs: [
    "https://x.com/villagecircleng",
    "https://facebook.com/boldmindng",
    "https://linkedin.com/company/boldmind-technology-solution-enterprise",
    "https://instagram.com/boldmindng",
  ],
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Blocking script: runs synchronously before browser paints any pixel.
          Sets data-font on <html> immediately so CSS picks up the right font
          with zero flash. Must be in <head>, not in a component.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var font = localStorage.getItem('boldmind-font-mode') || 'dyslexic';
                  document.documentElement.setAttribute('data-font', font);
                  document.documentElement.setAttribute('data-product', 'boldmind-hub');
                } catch(e) {
                  document.documentElement.setAttribute('data-font', 'dyslexic');
                  document.documentElement.setAttribute('data-product', 'boldmind-hub');
                }
              })();
            `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />

        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="mobile-web-app-capable" content="yes" />
        {/* ✅ Corrected theme-color meta tags */}
        <meta name="theme-color" content="#2B4D87" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1A3060" media="(prefers-color-scheme: dark)" />
        <meta name="msapplication-TileColor" content="#2B4D87" />

        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }}
        />
      </head>

      {/*
        body: does NOT set font via className.
        Font is controlled entirely by CSS through data-font attribute.
        Only the --font-inter CSS variable comes from next/font.
      */}
      <body className="antialiased">
        <ErrorBoundary>
          <BoldMindLayout>
            {children}
            <CookieConsent />
            <FacebookSDK
              appId={process.env["NEXT_PUBLIC_FACEBOOK_APP_ID"]}
              pixelId={process.env["NEXT_PUBLIC_FACEBOOK_PIXEL_ID"]}
            />
          </BoldMindLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}