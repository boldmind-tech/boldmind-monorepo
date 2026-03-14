import { PricingContent } from '@boldmind/ui';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Pricing — BoldMind Ecosystem',
  description:
    'Transparent pricing for all 32+ BoldMind products. Every plan, every product — start free on anything.',
};
 
export default function HubPricingPage() {
  return (
    <main className="flex-1">
      <PricingContent isHub={true} />
    </main>
  );
}