import { SkillgigLayout } from './skillgigLayout';
import "@boldmind/ui/dist/index.css";

export const metadata = {
    title: 'SkillGig — Skill Marketplace',
    description: 'Post gigs, find talent, and build your skill portfolio',
};

export default function RootLayout({
    children,
}: {
    children: React.ReactNode;
}) {
    return (
        <html lang="en">
            <body>
                <SkillgigLayout>{children}</SkillgigLayout>
            </body>
        </html>
    );
}
