export const metadata = {
    title: 'AmeboStudio — Creator Dashboard',
    description: 'Create, manage, and monetize your content on AmeboGist',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>{children}</body>
        </html>
    );
}
