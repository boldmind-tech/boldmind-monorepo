// apps/web/boldmind-hub/components/BoldMindLayout.tsx - UPDATED
"use client";

import { ThemeProvider } from "@boldmind/ui";
import { BOLDMIND_PRODUCTS } from "@boldmind/utils";
import { productThemes } from "@boldmind/ui";

export function EducenterLayout({ children }: { children: React.ReactNode }) {
  const forceProduct = "educenter";

  // Get BoldMind Hub product from your data or create it
  const boldmindProduct = BOLDMIND_PRODUCTS.find(
    (p) => p.slug === forceProduct,
  ) || {
    id: "prod_002",
    name: "EduCenter",
    description: "Empowering 1 million Nigerian Entrepreneurs by 2030",
    category: "education",
    status: "LIVE",
    version: "1.0.0",
    slug: forceProduct,
    icon: "🎓",
    revenueModel: "Subscription (₦3k/month)",
    monthlyRevenue: 60000,
    users: "20",
    techStack: ["Next.js", "MongoDB", "Paystack", "PWA"],

    teamSize: 3,
    timeline: "Launched Q3 2025",
    priority: 0,
    dependencies: [],
    integrations: ["Paystack", "WhatsApp API"],
    tags: ["ecosystem", "hub", "portfolio", "showcase"],
    links: { website: "https://educenter.com.ng" },
    features: [
      "JAMB/WAEC/NECO past questions (10,000+)",
      "Subject-based practice",
      "CBT simulation mode",
      "Performance tracking & analytics",
      "Study streak system",
      "Random practice (5 daily attempts for free users)",
      "Leaderboard",
      "Course library (free & paid)",
      "Sales funnel templates",
      "WhatsApp automation guides",
      "Marketing playbooks",
      "Expert-led masterclasses",
      "Community access",
      "AI video generation",
      "Prompt engineering course",
      "WhatsApp AI automation",
      "Content creation suite",
      "AI tools marketplace",
    ],
    challenges: ["User acquisition", "Content creation"],
    opportunities: ["WAEC/NECO questions", "Video tutorials", "Live classes"],
    createdAt: "2025-03-20",
    updatedAt: "2025-12-26",
  };

  // Get the theme colors
  const theme = productThemes[forceProduct] || productThemes["boldmind-hub"];

  const productTheme = {
    slug: forceProduct,
    name: boldmindProduct.name,
    description: boldmindProduct.description,
    icon: boldmindProduct.icon,
    status: boldmindProduct.status,
    colors: {
      primary: theme.primary,
      secondary: theme.secondary,
      accent: theme.primary,
      background: theme.background,
    },
    product: boldmindProduct,
  };

  return (
    <ThemeProvider defaultProduct={productTheme}>{children}</ThemeProvider>
  );
}
