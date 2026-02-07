// apps/web/amebogist/app/amebogistLayout.tsx
'use client';

import { Providers } from '../components/Providers';
import { BOLDMIND_PRODUCTS, getProductBySlug, productThemes, getProductColors } from '@boldmind/utils';
import type { ProductThemeType } from '@boldmind/ui';
import { ReactNode } from 'react';

interface AmebogistLayoutProps {
    children: ReactNode;
}

export function AmebogistLayout({ children }: AmebogistLayoutProps) {
    const forceProduct = 'amebogist';

    const amebogistProduct = getProductBySlug(forceProduct) || BOLDMIND_PRODUCTS[1];
    const colors = getProductColors(forceProduct);
    const theme = productThemes[forceProduct] || productThemes['amebogist'];

    const productTheme: ProductThemeType = {
        slug: forceProduct,
        name: amebogistProduct?.name || '',
        description: amebogistProduct?.description || '',
        icon: amebogistProduct?.icon || '',
        status: amebogistProduct?.status || '',
        colors: {
            primary: colors?.primary || '',
            secondary: colors?.secondary || '',
            accent: colors?.accent || '',
            background: theme?.background || '',
        },
    };

    return (
        <Providers defaultProductTheme={productTheme}>
            {children}
        </Providers>
    );
}
