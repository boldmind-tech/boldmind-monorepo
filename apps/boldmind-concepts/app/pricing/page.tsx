import { PricingContent } from '@boldmind/ui';

export const metadata = {
    title: 'Pricing - BoldMind Concepts',
    description: 'Pricing plans for BoldMind Concepts',
};

export default function PricingPage() {
    return (
        <main className="flex-1 flex flex-col min-h-screen pt-20">
            <PricingContent productSlug="boldmind-concepts" />
        </main>
    );
}
