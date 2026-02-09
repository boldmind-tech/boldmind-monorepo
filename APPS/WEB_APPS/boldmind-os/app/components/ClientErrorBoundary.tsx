'use client';

import { ErrorBoundary } from '@boldmind/ui';
import type { ReactNode } from 'react';

interface ClientErrorBoundaryProps {
    children: ReactNode;
}

export function ClientErrorBoundary({ children }: ClientErrorBoundaryProps) {
    return <ErrorBoundary>{children}</ErrorBoundary>;
}
