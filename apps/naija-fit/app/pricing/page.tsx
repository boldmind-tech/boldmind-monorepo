// ════════════════════════════════════════════════════════════════
// apps/naija-fit/app/pricing/page.tsx
// ════════════════════════════════════════════════════════════════
 
import { PricingContent } from '@boldmind/ui';
import type { Metadata } from 'next';
 
export default function NaijaFitPricingPage() {
  return (
    <main className="flex-1">
      <PricingContent
        productSlug="naija-fit"
        heading="Invest in Your Health"
        subheading="Nigerian meal tracking, AI coach, and community challenges. Start free."
      />
    </main>
  );
}