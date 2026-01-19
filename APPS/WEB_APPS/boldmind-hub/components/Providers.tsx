'use client';

import { AuthProvider } from '@boldmind/auth';
import { ThemeProvider } from '@boldmind/ui';
import { Toaster } from 'sonner';

interface ProvidersProps {
  children: React.ReactNode;
  defaultProductTheme: any; // Keep it flexible or use proper type if available
}

export function Providers({ children, defaultProductTheme }: ProvidersProps) {
  return (
    <AuthProvider>
      <ThemeProvider defaultProduct={defaultProductTheme}>
        {children}
        <Toaster position="top-right" richColors closeButton />
      </ThemeProvider>
    </AuthProvider>
  );
}
