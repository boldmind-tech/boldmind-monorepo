// APPS/WEB_APPS/EduCenter-hub/components/Providers.tsx

'use client';

import { AuthProvider } from '@boldmind/auth';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@boldmind/ui';
import { userAPIAdapter } from '../lib/user-api-adapter';

export function Providers({ children, defaultProductTheme }: {
    children: React.ReactNode;
    defaultProductTheme?: any;
}) {
    return (
        <ThemeProvider defaultProduct={defaultProductTheme}>
            <AuthProvider userAPI={userAPIAdapter}>
                {children}
                <Toaster position="top-right" richColors />
            </AuthProvider>
        </ThemeProvider>
    );
}
