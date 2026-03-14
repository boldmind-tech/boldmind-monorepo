import { PricingContent } from '@boldmind/ui';

export const metadata = {
    title: 'Pricing - Amebo Studio',
    description: 'Pricing plans for Amebo Studio',
};

export default function PricingPage() {
    return (
        <main className="flex-1 flex flex-col min-h-screen pt-20">
            <PricingContent appHost="amebo-studio" />
        </main>
    );
}
