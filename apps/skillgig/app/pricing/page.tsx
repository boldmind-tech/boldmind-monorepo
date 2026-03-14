import { PricingContent } from '@boldmind/ui';

export const metadata = {
    title: 'Pricing - SkillGig',
    description: 'Pricing plans for SkillGig',
};

export default function PricingPage() {
    return (
        <main className="flex-1 flex flex-col min-h-screen pt-24">
            <PricingContent appHost="skillgig" />
        </main>
    );
}
