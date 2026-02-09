'use client';

import { Providers } from '../components/Providers';
import { BOLDMIND_PRODUCTS, getProductBySlug, productThemes, getProductColors } from '@boldmind/utils';
import type { ProductThemeType } from '@boldmind/ui';
import { ReactNode } from 'react';

interface BoldMindOSLayoutProps {
    children: ReactNode;
}

export function BoldMindOSLayout({ children }: BoldMindOSLayoutProps) {
    const forceProduct = 'boldmind-os';
    const product = getProductBySlug(forceProduct) || BOLDMIND_PRODUCTS[5];
    const colors = getProductColors(forceProduct) || productThemes['boldmind-os'];

    const productTheme: ProductThemeType = {
        slug: forceProduct,
        name: product?.name || 'BoldMind OS',
        description: product?.description || 'Neurodivergent-friendly productivity OS',
        icon: product?.icon || '🧠',
        status: product?.status || 'LIVE',
        colors: {
            primary: colors?.primary || '',
            secondary: colors?.secondary || '',
            accent: colors?.primary || '',
            background: colors?.background || '',
        },
    };

    return <Providers defaultProductTheme={productTheme}>{children}</Providers>;
}
