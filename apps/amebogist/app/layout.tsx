// ─────────────────────────────────────────────────────────────────────────────
// apps/amebogist/app/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FIXES from original:
//   1. body had `font-sans` className which overrides OpenDyslexic — removed
//   2. Missing blocking script in <head> for font FOUC prevention
//   3. themeColor was #FF6B35 (wrong — amebogist primary is #065F46 emerald)
//   4. preload: true on Inter was blocking — switched to false
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { AmebogistLayout } from "./amebogistLayout";
import { ClientErrorBoundary } from "./components/ClientErrorBoundary";
import { FacebookSDK, CookieConsent } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

// Inter loaded as CSS variable only — active font is OpenDyslexic by default
const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: false, // Don't block on Inter
});

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://amebogist.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "AmeboGist — Nigeria's #1 Pidgin English Platform for AI/Tech & Creator News",
    template: "%s | AmeboGist",
  },
  description:
    "Amebo wey make sense! Nigeria's premier source for authentic gist, AI/Tech, Creator entrepreneurship, Politics, Entertainment, and real-life hustle tips.",
  keywords: ["Nigerian news", "Pidgin English", "AmeboGist", "Naija gist", "AI Nigeria"],
  authors: [
    { name: "AmeboGist", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl, languages: { "en-NG": canonicalUrl, "pcm-NG": canonicalUrl } },
  openGraph: {
    type: "website", locale: "en_NG", url: canonicalUrl,
    title: "AmeboGist — Nigeria's #1 Pidgin English Platform",
    siteName: "AmeboGist",
    description: "Nigeria's #1 platform for AI/Tech, Creator entrepreneurship, Sports, Politics, and Entertainment in Pidgin English.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630, alt: "AmeboGist" }],
  },
  twitter: {
    card: "summary_large_image", site: "@amebogist",
    title: "AmeboGist — Nigeria's #1 Pidgin News Platform",
    images: [`${canonicalUrl}/og-image.png`],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon-192x192.png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { title: "AmeboGist", statusBarStyle: "black-translucent" },
  other: {
    "application-name": "AmeboGist",
    "apple-mobile-web-app-title": "AmeboGist",
  },
};

export const viewport: Viewport = {
  // ✅ Corrected: AmeboGist primary is emerald #065F46, not orange
  themeColor: "#065F46",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "NewsMediaOrganization",
  name: "AmeboGist",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description: "Nigeria's #1 Pidgin English news and creator platform",
  foundingDate: "2025",
  address: { "@type": "PostalAddress", addressCountry: "NG", addressRegion: "Lagos" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: "hello@amebogist.ng" },
  sameAs: ["https://facebook.com/amebogist", "https://instagram.com/amebogist", "https://twitter.com/amebogist"],
};

const websiteSchema = {
  "@context": "https://schema.org",
  "@type": "WebSite",
  name: "AmeboGist",
  url: canonicalUrl,
  inLanguage: ["en-NG", "pcm-NG"],
  potentialAction: {
    "@type": "SearchAction",
    target: `${canonicalUrl}/search?q={search_term_string}`,
    "query-input": "required name=search_term_string",
  },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/*
          Blocking script — runs before first paint to prevent font flash.
          Sets data-font AND data-product on <html> synchronously.
        */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var font = localStorage.getItem('boldmind-font-mode') || 'dyslexic';
                  document.documentElement.setAttribute('data-font', font);
                  document.documentElement.setAttribute('data-product', 'amebogist');
                } catch(e) {
                  document.documentElement.setAttribute('data-font', 'dyslexic');
                  document.documentElement.setAttribute('data-product', 'amebogist');
                }
              })();
            `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />

        {/* ✅ Corrected theme-color */}
        <meta name="theme-color" content="#065F46" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#043D2E" media="(prefers-color-scheme: dark)" />
        <meta name="geo.region" content="NG-LA" />
        <meta name="geo.placename" content="Lagos" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(organizationSchema) }} />
        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(websiteSchema) }} />
      </head>

      {/*
        FIXED: Removed font-sans className — it was overriding OpenDyslexic.
        Font is controlled entirely via CSS data-font attribute.
      */}
      <body className="antialiased">
        <ClientErrorBoundary>
          <AmebogistLayout>{children}</AmebogistLayout>
          <CookieConsent />
          <FacebookSDK
            appId={process.env['NEXT_PUBLIC_FACEBOOK_APP_ID']}
            pixelId={process.env['NEXT_PUBLIC_FACEBOOK_PIXEL_ID']}
          />
        </ClientErrorBoundary>
      </body>
    </html>
  );
}