import type { Metadata } from 'next';
import { Providers } from './Providers';
import '@boldmind/ui/dist/index.css';

export const metadata: Metadata = {
    title: 'AmeboStudio — Creator Dashboard',
    description: 'Create, manage, and monetize your content on AmeboGist',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en" suppressHydrationWarning>
            <body suppressHydrationWarning>
                <Providers>{children}</Providers>
            </body>
        </html>
    );
}
