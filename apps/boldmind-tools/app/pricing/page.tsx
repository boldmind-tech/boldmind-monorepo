// ════════════════════════════════════════════════════════════════
// apps/boldmind-tools/app/pricing/page.tsx (emailscraper + social)
// ════════════════════════════════════════════════════════════════
 
"use client"
import { PricingContent, ThemeProvider } from '@boldmind/ui';

export default function ToolsPricingPage() {
  return (
    <ThemeProvider forceProductSlug="boldmind-tools">
      <main className="flex-1 space-y-0 divide-y divide-[var(--product-muted)]">
        <PricingContent
          productSlug="emailscraper-pro"
          heading="EmailScraper Pro Pricing"
          subheading="Find Nigerian B2B emails at scale."
        />
        <PricingContent
          productSlug="social-factory"
          heading="Social Content Factory Pricing"
          subheading="AI content calendar and auto-posting for all platforms."
        />
      </main>
    </ThemeProvider>
  );
}