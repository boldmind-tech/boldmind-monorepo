// ════════════════════════════════════════════════════════════════
// apps/planai-suite/app/pricing/page.tsx
// ════════════════════════════════════════════════════════════════
 
import { PricingContent } from '@boldmind/ui';
import type { Metadata } from 'next';
 
export const metadata: Metadata = {
  title: 'Pricing — PlanAI Suite',
  description: 'AI business tools for Nigerian entrepreneurs. Pay per tool or bundle.',
};
 
export default function PlanAIPricingPage() {
  return (
    <main className="flex-1">
      <PricingContent
        productSlug="planai-suite"
        heading="Business AI Tools, Nigerian Prices"
        subheading="Every tool your business needs — from business plans to AI receptionists. Priced for the Nigerian market."
      />
    </main>
  );
}
 