// apps/web/educenter/app/educenterLayout.tsx
'use client';

import { Providers } from '../components/Providers';
import { BOLDMIND_PRODUCTS, productThemes } from '@boldmind/utils';

export function EducenterLayout({ children }: { children: React.ReactNode }) {
    const forceProduct = 'educenter';

    const educenterProduct = BOLDMIND_PRODUCTS.find(p => p.slug === forceProduct) || {
        id: "prod_002",
        name: "EduCenter",
        description: "A comprehensive Nigerian ed-tech platform combining exam prep (JAMB/WAEC/NECO), digital business education, and AI skills training.",
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

    const theme = productThemes[forceProduct] || productThemes['educenter'];

    const productTheme = {
        slug: forceProduct,
        name: educenterProduct.name,
        description: educenterProduct.description,
        icon: educenterProduct.icon,
        status: educenterProduct.status,
        colors: {
            primary: theme?.primary,
            secondary: theme?.secondary,
            accent: theme?.primary,
            background: theme?.background,
        },
        product: educenterProduct
    };

    return (
        <Providers defaultProductTheme={productTheme}>
            {children}
        </Providers>
    );
}
