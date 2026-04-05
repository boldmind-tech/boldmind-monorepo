'use client';

import { AuthProvider } from '@boldmind/auth';
import { ThemeProvider, type ProductThemeType } from '@boldmind/ui';
import { Toaster } from 'sonner';

interface ProvidersProps {
    children: React.ReactNode;
    defaultProductTheme?: ProductThemeType;
}
export function Providers({ children, defaultProductTheme }: ProvidersProps) {
    const themeProviderProps = {
        defaultTheme: "dark" as const,
        defaultDyslexia: false,
        ...(defaultProductTheme && { defaultProduct: defaultProductTheme }),
        ...(defaultProductTheme?.slug && { forceProductSlug: defaultProductTheme.slug }),
    };
    return (
        <ThemeProvider {...themeProviderProps}>
            <AuthProvider>
                {children}
                <Toaster position="top-right" richColors />
            </AuthProvider>
        </ThemeProvider>
    );
}