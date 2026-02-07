import type { Metadata, Viewport } from "next";
import { Inter } from "next/font/google";
import { EducenterLayout } from "./educenterLayout";
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
  const baseUrl = process.env['NEXT_PUBLIC_APP_URL'] || "https://educenter.com.ng";
  return baseUrl.endsWith("/") ? baseUrl.slice(0, -1) : baseUrl;
};

const canonicalUrl = getCanonicalUrl();

export const metadata: Metadata = {
  metadataBase: new URL(canonicalUrl),
  title: {
    default: "EduCenter - Nigerian Exam Prep (JAMB/WAEC/NECO) + Digital Business & AI Skills Training",
    template: "%s | EduCenter",
  },
  description:
    "Comprehensive Nigerian ed-tech platform combining exam preparation (JAMB/WAEC/NECO), digital business education, and AI skills training. 10,000+ past questions, CBT simulation, and practical courses for Nigerian students.",
  keywords: [
    "JAMB preparation",
    "WAEC past questions",
    "NECO exam prep",
    "Nigerian education",
    "EduCenter",
    "CBT practice",
    "exam preparation Nigeria",
    "digital skills Nigeria",
    "AI training Nigeria",
    "business education",
    "online learning Nigeria",
    "Nigerian students",
    "UTME preparation",
    "SSCE preparation",
    "marketing courses Nigeria",
    "tech education Nigeria",
    "Nigerian ed-tech",
    "study platform Nigeria",
  ],
  authors: [
    { name: "EduCenter", url: canonicalUrl },
    { name: "BoldMind Technology Solution Enterprise", url: "https://boldmind.ng" },
  ],
  creator: "EduCenter",
  publisher: "BoldMind Technology Solution Enterprise",
  formatDetection: {
    email: true,
    address: true,
    telephone: true,
  },
  robots: {
    index: true,
    follow: true,
    nocache: false,
    googleBot: {
      index: true,
      follow: true,
      noimageindex: false,
      "max-video-preview": -1,
      "max-image-preview": "large",
      "max-snippet": -1,
    },
  },
  alternates: {
    canonical: canonicalUrl,
    languages: {
      "en-NG": canonicalUrl,
    },
  },
  openGraph: {
    type: "website",
    locale: "en_NG",
    url: canonicalUrl,
    title: "EduCenter - Master JAMB, WAEC, NECO & Digital Skills",
    siteName: "EduCenter",
    description:
      "10,000+ past questions, CBT simulation, digital business courses, and AI tools training for Nigerian students.",
    images: [
      {
        url: `${canonicalUrl}/og-image.png`,
        width: 1200,
        height: 630,
        alt: "EduCenter - Nigerian Education Platform",
        type: "image/png",
        secureUrl: `${canonicalUrl}/og-image.png`,
      },
    ],
  },
  twitter: {
    card: "summary_large_image",
    site: "@educenter_ng",
    creator: "@educenter_ng",
    title: "EduCenter - Nigerian Exam Prep & Digital Skills",
    description:
      "Master JAMB, WAEC, NECO with 10,000+ questions. Plus digital business & AI skills training.",
    images: [`${canonicalUrl}/og-image.png`],
  },
  verification: {
    google: "your-google-verification-code",
  },
  category: "education",
  other: {
    "application-name": "EduCenter",
    "msapplication-TileColor": "#4CAF50",
    "msapplication-config": "/browserconfig.xml",
    "apple-mobile-web-app-capable": "yes",
    "apple-mobile-web-app-status-bar-style": "black-translucent",
    "apple-mobile-web-app-title": "EduCenter",
    "og:email": "hello@educenter.com.ng",
    "og:locality": "Lagos",
    "og:region": "NG",
    "og:country-name": "Nigeria",
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
  themeColor: "#4CAF50",
  colorScheme: "light dark",
  width: "device-width",
  initialScale: 1,
  maximumScale: 5,
  userScalable: true,
  viewportFit: "cover",
};

const organizationSchema = {
  "@context": "https://schema.org",
  "@type": "EducationalOrganization",
  name: "EduCenter",
  url: canonicalUrl,
  logo: `${canonicalUrl}/logo.png`,
  description:
    "Comprehensive Nigerian ed-tech platform for exam prep and digital skills training",
  foundingDate: "2025",
  address: {
    "@type": "PostalAddress",
    addressCountry: "NG",
    addressRegion: "Lagos",
  },
  contactPoint: {
    "@type": "ContactPoint",
    contactType: "customer service",
    email: "hello@educenter.com.ng",
    availableLanguage: ["English"],
  },
};

const courseSchema = {
  "@context": "https://schema.org",
  "@type": "ItemList",
  name: "EduCenter Courses",
  description: "Exam preparation and digital skills courses",
  numberOfItems: 3,
  itemListElement: [
    {
      "@type": "ListItem",
      position: 1,
      item: {
        "@type": "Course",
        name: "JAMB/WAEC/NECO Preparation",
        description: "10,000+ past questions with CBT simulation",
        provider: {
          "@type": "Organization",
          name: "EduCenter",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 2,
      item: {
        "@type": "Course",
        name: "Digital Business Education",
        description: "Marketing playbooks and business courses",
        provider: {
          "@type": "Organization",
          name: "EduCenter",
        },
      },
    },
    {
      "@type": "ListItem",
      position: 3,
      item: {
        "@type": "Course",
        name: "AI Tools Training",
        description: "Learn to use AI tools for productivity",
        provider: {
          "@type": "Organization",
          name: "EduCenter",
        },
      },
    },
  ],
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
            __html: JSON.stringify(organizationSchema),
          }}
        />
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(courseSchema),
          }}
        />

        <meta name="apple-mobile-web-app-title" content="EduCenter" />
        <meta name="application-name" content="EduCenter" />
        <meta name="mobile-web-app-capable" content="yes" />
        <meta
          name="theme-color"
          content="#4CAF50"
          media="(prefers-color-scheme: light)"
        />
        <meta name="geo.region" content="NG-LA" />
      </head>
      <body
        className={`${inter.variable} antialiased bg-white text-gray-900 dark:bg-gray-950 dark:text-gray-100 font-sans`}
      >
        <ErrorBoundary>
          <EducenterLayout>{children}</EducenterLayout>
        </ErrorBoundary>
      </body>
    </html>
  );
}