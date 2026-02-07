'use client';

import { Providers } from '../components/Providers';
import { BOLDMIND_PRODUCTS, productThemes } from '@boldmind/utils';

export function EmailScraperProLayout({ children }: { children: React.ReactNode }) {
    const forceProduct = 'emailscraper-pro';

    const product = BOLDMIND_PRODUCTS.find(p => p.slug === forceProduct) || {
        id: 'prod_007',
        name: 'EmailScraper Pro',
        description: 'Advanced email discovery and verification for Nigerian B2B market',
        category: 'productivity',
        status: 'BUILDING',
        version: '0.1.0',
        icon: '🔍',
        slug: forceProduct,
        tags: ['lead-generation', 'sales', 'verification', 'business'],
        links: { website: 'https://email.boldmind.ng' },
        features: [
            'Email finding',
            'Real-time verification',
            'Lead enrichment',
            'Bulk CSV ops',
            'API access',
            'Nigerian directory scraping'
        ],
        challenges: [],
        opportunities: [],
        createdAt: '2025-01-01',
        updatedAt: '2025-01-01',
        revenueModel: 'Tiered (Free/₦5k/₦15k/₦50k)',
        teamSize: 2
    };
    const theme = productThemes[forceProduct] || productThemes['emailscraper-pro'];

    const productTheme = {
        slug: forceProduct,
        name: product?.name || 'EmailScraper Pro',
        description: product?.description || 'B2B email discovery and verification',
        icon: product?.icon || '📧',
        status: product?.status || 'LIVE',
        colors: {
            primary: theme?.primary,
            secondary: theme?.secondary,
            accent: theme?.primary,
            background: theme?.background,
        },
        product: product
    };

    return <Providers defaultProductTheme={productTheme}>{children}</Providers>;
}
