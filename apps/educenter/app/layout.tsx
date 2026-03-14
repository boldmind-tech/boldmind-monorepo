// ─────────────────────────────────────────────────────────────────────────────
// apps/educenter/app/layout.tsx
// ─────────────────────────────────────────────────────────────────────────────
// FIXES from original:
//   1. body had `font-sans` which overrode OpenDyslexic — removed
//   2. Added blocking <script> in <head> to set data-font before first paint
//   3. themeColor was #4CAF50 (Material green, not EduCenter's #1E40AF)
//   4. Inter preload: false (we don't default to Inter)
// ─────────────────────────────────────────────────────────────────────────────

import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { EducenterLayout } from "./educenterLayout";
import { ErrorBoundary, FacebookSDK, CookieConsent } from "@boldmind/ui";
import "@boldmind/ui/dist/index.css";
import "./globals.css";

const inter = Inter({
  subsets: ["latin"],
  display: "swap",
  variable: "--font-inter",
  preload: false,
});

const getCanonicalUrl = () => {
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://educenter.com.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};
const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "EduCenter — JAMB/WAEC/NECO Prep + Digital Business & AI Skills",
    template: "%s | EduCenter",
  },
  description:
    "Nigeria's leading ed-tech platform. 10,000+ JAMB, WAEC, NECO past questions with CBT simulator, plus digital business courses and AI tools training.",
  keywords: ["JAMB preparation", "WAEC past questions", "NECO exam prep", "EduCenter", "Nigerian education"],
  authors: [
    { name: "EduCenter", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  robots: { index: true, follow: true },
  alternates: { canonical: canonicalUrl },
  openGraph: {
    type: "website", locale: "en_NG", url: canonicalUrl,
    title: "EduCenter — Master JAMB, WAEC, NECO & Digital Skills",
    siteName: "EduCenter",
    description: "10,000+ past questions, CBT simulation, digital business courses, and AI training.",
    images: [{ url: `${canonicalUrl}/og-image.png`, width: 1200, height: 630 }],
  },
  twitter: {
    card: "summary_large_image", site: "@educenter_ng",
    title: "EduCenter — Nigerian Exam Prep & Digital Skills",
    images: [`${canonicalUrl}/og-image.png`],
  },
  icons: {
    icon: [{ url: "/favicon.ico" }, { url: "/icon-192x192.png", sizes: "192x192" }],
    apple: [{ url: "/apple-touch-icon.png", sizes: "180x180" }],
  },
  manifest: "/manifest.webmanifest",
  appleWebApp: { title: "EduCenter", statusBarStyle: "black-translucent" },
  other: { "application-name": "EduCenter", "apple-mobile-web-app-title": "EduCenter" },
};

export const viewport: Viewport = {
  // ✅ Corrected: EduCenter primary is #1E40AF (royal blue), not Material #4CAF50
  themeColor: "#1E40AF",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  viewportFit: "cover",
};

const educenterSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduCenter",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description: "Nigeria's comprehensive ed-tech platform for exam prep and digital skills",
  foundingDate: "2025",
  address: { "@type": "PostalAddress", addressCountry: "NG", addressRegion: "Lagos" },
  contactPoint: { "@type": "ContactPoint", contactType: "customer service", email: "hello@educenter.com.ng" },
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`scroll-smooth ${inter.variable}`} suppressHydrationWarning>
      <head>
        {/* Blocking font script — prevents FOUC */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              (function() {
                try {
                  var font = localStorage.getItem('boldmind-font-mode') || 'dyslexic';
                  document.documentElement.setAttribute('data-font', font);
                  document.documentElement.setAttribute('data-product', 'educenter');
                } catch(e) {
                  document.documentElement.setAttribute('data-font', 'dyslexic');
                  document.documentElement.setAttribute('data-product', 'educenter');
                }
              })();
            `,
          }}
        />

        <link rel="preconnect" href="https://fonts.googleapis.com" />
        <link rel="preconnect" href="https://fonts.gstatic.com" crossOrigin="anonymous" />
        <link rel="preconnect" href="https://fonts.cdnfonts.com" crossOrigin="anonymous" />

        {/* ✅ Corrected theme-color */}
        <meta name="theme-color" content="#1E40AF" media="(prefers-color-scheme: light)" />
        <meta name="theme-color" content="#1E3A8A" media="(prefers-color-scheme: dark)" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="black-translucent" />
        <meta name="geo.region" content="NG-LA" />

        <script type="application/ld+json" dangerouslySetInnerHTML={{ __html: JSON.stringify(educenterSchema) }} />
      </head>

      {/* FIXED: No font-sans — font controlled by data-font CSS attribute */}
      <body className="antialiased">
        <ErrorBoundary>
          <EducenterLayout>{children}</EducenterLayout>
          <CookieConsent />
          <FacebookSDK
            appId={process.env['NEXT_PUBLIC_FACEBOOK_APP_ID']}
            pixelId={process.env['NEXT_PUBLIC_FACEBOOK_PIXEL_ID']}
          />
        </ErrorBoundary>
      </body>
    </html>
  );
}