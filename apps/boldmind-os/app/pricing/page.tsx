import { PricingContent } from '@boldmind/ui';

export const metadata = {
    title: 'Pricing - BoldMind OS',
    description: 'Pricing plans for BoldMind OS',
};

export default function PricingPage() {
    return (
        <main className="flex-1 flex flex-col min-h-screen pt-24">
            <PricingContent productSlug="boldmind-os" />
        </main>
    );
}
