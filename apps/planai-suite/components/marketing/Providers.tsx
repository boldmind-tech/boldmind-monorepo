'use client';

import { AuthProvider } from '@boldmind/auth';
import { Toaster } from 'sonner';
import { ThemeProvider } from '@boldmind/ui';

export function Providers({ children, defaultProductTheme }: {
  children: React.ReactNode;
  defaultProductTheme?: any;
}) {
  return (
    <ThemeProvider defaultProduct={defaultProductTheme}>
      <AuthProvider>
        {children}
        <Toaster position="top-right" richColors />
      </AuthProvider>
    </ThemeProvider>
  );
}
