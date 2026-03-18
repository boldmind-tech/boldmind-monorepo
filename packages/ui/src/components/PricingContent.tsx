// ─────────────────────────────────────────────────────────────────────────────
// packages/ui/src/components/PricingContent.tsx
// ─────────────────────────────────────────────────────────────────────────────
// Standalone pricing section — no NavBar, no Footer (layouts handle those).
//
// Two modes:
//   isHub={true}  → Shows all BoldMind products with their pricing
//   isHub={false} → Shows pricing for the current product (via useTheme())
//
// ASSUMPTION: Paystack checkout link format is:
//   https://paystack.com/pay/{plan-slug}
//   Replace with your actual Paystack payment page slugs or use
//   your own payment.api.ts to generate checkout URLs.
// ─────────────────────────────────────────────────────────────────────────────

'use client';

import React, { useState, useMemo } from 'react';
import Link from 'next/link';
import { motion, AnimatePresence } from 'framer-motion';
import { Check, X, Zap, Star, ArrowRight, ChevronDown, ChevronUp, Sparkles } from 'lucide-react';
import { useTheme } from '../providers/theme-provider';
import { cn } from '../lib/utils';
import {
  BOLDMIND_PRICING,
  getProductPricing,
  calculateYearlySavings
} from '@boldmind/utils';
import type { PricingTier, ProductPricing } from '../../../utils/src/constants/pricing';
import { BOLDMIND_COLOR_SCHEMES } from '@boldmind/utils';

// ─── Types ────────────────────────────────────────────────────────────────────

export interface PricingContentProps {
  /** true = hub mode (all products), false = single product mode */
  isHub?: boolean;
  /** Override which product to show pricing for (defaults to current theme slug) */
  productSlug?: string;
  /** Custom heading override */
  heading?: string;
  /** Custom subheading override */
  subheading?: string;
  className?: string;
}

// ─── Helper: Paystack checkout URL ────────────────────────────────────────────
// ASSUMPTION: Replace slugs with actual Paystack payment page IDs.

function buildCheckoutUrl(productSlug: string, tierName: string, isYearly: boolean): string {
  const period = isYearly ? 'yearly' : 'monthly';
  return `https://paystack.com/pay/boldmind-${productSlug}-${tierName}-${period}`;
}

// ─── Single tier card ────────────────────────────────────────────────────────

interface TierCardProps {
  tier: PricingTier;
  productSlug: string;
  isYearly: boolean;
  accentColor: string;
  isHighlighted?: boolean;
  compact?: boolean;
}

function TierCard({ tier, productSlug, isYearly, accentColor, isHighlighted, compact }: TierCardProps) {
  const price = isYearly ? tier.priceYearly : tier.priceMonthly;
  const yearlySavings = calculateYearlySavings(tier);
  const checkoutUrl = buildCheckoutUrl(productSlug, tier.name, isYearly);

  const tierLabel: Record<PricingTier['name'], string> = {
    free:       'Free',
    basic:      'Basic',
    pro:        'Pro',
    enterprise: 'Enterprise',
  };

  const tierEmoji: Record<PricingTier['name'], string> = {
    free:       '🆓',
    basic:      '⚡',
    pro:        '🚀',
    enterprise: '🏢',
  };

  return (
    <motion.div
      whileHover={{ y: -4 }}
      transition={{ type: 'spring', stiffness: 300, damping: 20 }}
      className={cn(
        'relative flex flex-col rounded-2xl border-2 transition-all duration-300',
        compact ? 'p-5' : 'p-6 sm:p-8',
        isHighlighted
          ? 'border-[var(--product-primary)] shadow-xl'
          : 'border-[var(--product-muted)] hover:border-[var(--product-primary)]/40',
      )}
      style={{
        background: isHighlighted
          ? `linear-gradient(135deg, ${accentColor}08, ${accentColor}04)`
          : 'var(--product-background)',
      }}
    >
      {/* Most popular badge */}
      {isHighlighted && (
        <div
          className="absolute -top-3.5 left-1/2 -translate-x-1/2 px-4 py-1 rounded-full text-xs font-black tracking-widest uppercase text-white whitespace-nowrap"
          style={{ background: accentColor }}
        >
          ★ Most Popular
        </div>
      )}

      {/* Yearly savings tag */}
      {isYearly && yearlySavings > 0 && (
        <div className="absolute top-4 right-4 px-2 py-0.5 rounded-full text-[10px] font-black bg-green-100 text-green-700">
          Save {yearlySavings}%
        </div>
      )}

      {/* Header */}
      <div className={compact ? 'mb-4' : 'mb-6'}>
        <div className="flex items-center gap-2 mb-2">
          <span className="text-xl">{tierEmoji[tier.name]}</span>
          <h3
            className="text-lg font-black uppercase tracking-widest"
            style={{ color: 'var(--product-primary)' }}
          >
            {tierLabel[tier.name]}
          </h3>
        </div>

        <div className="flex items-baseline gap-1">
          <span className="text-3xl font-black" style={{ color: 'var(--product-foreground)' }}>
            {price === 0 ? '₦0' : `₦${price.toLocaleString()}`}
          </span>
          {price > 0 && (
            <span className="text-sm" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
              /{isYearly ? 'yr' : 'mo'}
            </span>
          )}
        </div>

        {isYearly && price > 0 && (
          <p className="text-xs mt-1" style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
            ≈ ₦{Math.round(price / 12).toLocaleString()}/month
          </p>
        )}
      </div>

      {/* Features */}
      {!compact && (
        <ul className="space-y-3 mb-6 flex-1">
          {tier.features.map((feature: string, i: number) => (
            <li key={i} className="flex items-start gap-2.5 text-sm">
              <Check
                className="mt-0.5 flex-shrink-0 h-4 w-4"
                style={{ color: accentColor }}
              />
              <span style={{ color: 'var(--product-foreground)', opacity: 0.85 }}>
                {feature}
              </span>
            </li>
          ))}
          {tier.limits && Object.entries(tier.limits).map(([key, val]: [string, any]) => (
            <li key={key} className="flex items-start gap-2.5 text-xs">
              <div className="mt-1 flex-shrink-0 w-4 h-4 rounded-full border border-current opacity-30 flex items-center justify-center">
                <span className="text-[8px]">i</span>
              </div>
              <span style={{ color: 'var(--product-foreground)', opacity: 0.5 }}>
                {key.replace(/([A-Z])/g, ' $1').toLowerCase()}: {String(val)}
              </span>
            </li>
          ))}
        </ul>
      )}

      {/* CTA */}
      {!compact && (
        tier.name === 'free' ? (
          <Link
            href="/register"
            className={cn(
              'w-full text-center py-3 rounded-xl font-bold text-sm transition-all',
              'border-2 border-[var(--product-primary)] text-[var(--product-primary)]',
              'hover:bg-[var(--product-primary)] hover:text-white',
            )}
          >
            Get Started Free
          </Link>
        ) : (
          <a
            href={checkoutUrl}
            target="_blank"
            rel="noopener noreferrer"
            className={cn(
              'w-full text-center py-3 rounded-xl font-bold text-sm transition-all',
              'flex items-center justify-center gap-2',
              isHighlighted
                ? 'text-white hover:opacity-90'
                : 'border-2 border-[var(--product-primary)] text-[var(--product-primary)] hover:bg-[var(--product-primary)] hover:text-white',
            )}
            style={isHighlighted ? { background: accentColor } : undefined}
          >
            {tier.name === 'enterprise' ? (
              <>Contact Sales <ArrowRight className="h-4 w-4" /></>
            ) : (
              <>Subscribe Now <Zap className="h-4 w-4" /></>
            )}
          </a>
        )
      )}
    </motion.div>
  );
}

// ─── One-time price card ──────────────────────────────────────────────────────

function OneTimeCard({ item, productSlug, accentColor }: {
  item: NonNullable<ProductPricing['oneTimePrices']>[0];
  productSlug: string;
  accentColor: string;
}) {
  return (
    <div
      className="rounded-2xl border-2 p-5 flex flex-col justify-between gap-4"
      style={{ borderColor: `${accentColor}30`, background: `${accentColor}06` }}
    >
      <div>
        <h4 className="font-bold text-sm mb-1" style={{ color: 'var(--product-primary)' }}>
          {item.name}
        </h4>
        <p className="text-xs opacity-60" style={{ color: 'var(--product-foreground)' }}>
          {item.description}
        </p>
      </div>
      <div className="flex items-center justify-between">
        <span className="text-2xl font-black" style={{ color: 'var(--product-foreground)' }}>
          ₦{item.price.toLocaleString()}
        </span>
        <a
          href={`https://paystack.com/pay/boldmind-${productSlug}-${item.name.toLowerCase().replace(/\s+/g, '-')}`}
          target="_blank"
          rel="noopener noreferrer"
          className="px-4 py-2 rounded-xl text-sm font-bold text-white transition-all hover:opacity-90"
          style={{ background: accentColor }}
        >
          Buy Now
        </a>
      </div>
    </div>
  );
}

// ─── Single product pricing ───────────────────────────────────────────────────

function SingleProductPricing({
  pricing,
  isYearly,
}: {
  pricing: ProductPricing;
  isYearly: boolean;
}) {
  const { productTheme } = useTheme();
  const scheme = BOLDMIND_COLOR_SCHEMES[pricing.productSlug];
  const accentColor = scheme?.primary ?? productTheme.colors.primary;

  const highlightedTier = useMemo(() => {
    // Prefer 'pro', fall back to highest non-enterprise tier
    const tiers = pricing.tiers;
    return tiers.find((t: PricingTier) => t.name === 'pro')?.name
      ?? tiers.find((t: PricingTier) => t.name === 'basic')?.name
      ?? tiers[0]?.name;
  }, [pricing.tiers]);

  return (
    <div>
      {pricing.tiers.length > 0 && (
        <div
          className={cn(
            'grid gap-6',
            pricing.tiers.length === 1 ? 'max-w-sm mx-auto' :
            pricing.tiers.length === 2 ? 'sm:grid-cols-2 max-w-2xl mx-auto' :
            pricing.tiers.length === 3 ? 'sm:grid-cols-3 max-w-4xl mx-auto' :
            'sm:grid-cols-2 lg:grid-cols-4',
          )}
        >
          {pricing.tiers.map((tier: PricingTier) => (
            <TierCard
              key={tier.name}
              tier={tier}
              productSlug={pricing.productSlug}
              isYearly={isYearly}
              accentColor={accentColor}
              isHighlighted={tier.name === highlightedTier}
            />
          ))}
        </div>
      )}

      {pricing.oneTimePrices && pricing.oneTimePrices.length > 0 && (
        <div className="mt-10">
          <h3
            className="text-center text-lg font-bold mb-6"
            style={{ color: 'var(--product-foreground)', opacity: 0.7 }}
          >
            — or choose a one-time package —
          </h3>
          <div
            className={cn(
              'grid gap-4',
              pricing.oneTimePrices.length <= 3
                ? 'sm:grid-cols-3 max-w-3xl mx-auto'
                : 'sm:grid-cols-2 lg:grid-cols-4',
            )}
          >
            {pricing.oneTimePrices.map((item: { name: string; price: number; currency: 'NGN' | 'USD'; description: string }) => (
              <OneTimeCard
                key={item.name}
                item={item}
                productSlug={pricing.productSlug}
                accentColor={accentColor}
              />
            ))}
          </div>
        </div>
      )}
    </div>
  );
}

// ─── Hub mode: expandable product row ────────────────────────────────────────

function ProductPricingRow({ pricing }: { pricing: ProductPricing }) {
  const [open, setOpen] = useState(false);
  const [yearly, setYearly] = useState(false);

  const scheme = BOLDMIND_COLOR_SCHEMES[pricing.productSlug];
  const accentColor = scheme?.primary ?? '#2B4D87';
  const lowestPrice = pricing.tiers.find((t: PricingTier) => t.priceMonthly === 0)
    ? '₦0 Free tier'
    : pricing.tiers[0]
      ? `From ₦${pricing.tiers[0].priceMonthly.toLocaleString()}/mo`
      : pricing.oneTimePrices?.[0]
        ? `From ₦${pricing.oneTimePrices[0].price.toLocaleString()} once`
        : 'Contact us';

  return (
    <div
      className="rounded-2xl border-2 overflow-hidden transition-all"
      style={{ borderColor: open ? accentColor : 'var(--product-muted)' }}
    >
      {/* Header row */}
      <button
        onClick={() => setOpen(!open)}
        className="w-full flex items-center justify-between gap-4 p-5 text-left hover:bg-[var(--product-muted)]/30 transition-colors"
      >
        <div className="flex items-center gap-3 min-w-0">
          <div
            className="w-10 h-10 rounded-xl flex items-center justify-center text-xl flex-shrink-0"
            style={{ background: `${accentColor}20` }}
          >
            {scheme?.icon ?? '📦'}
          </div>
          <div className="min-w-0">
            <p className="font-bold truncate" style={{ color: 'var(--product-foreground)' }}>
              {pricing.productName}
            </p>
            <p className="text-xs opacity-50" style={{ color: 'var(--product-foreground)' }}>
              {lowestPrice}
            </p>
          </div>
        </div>
        <div className="flex items-center gap-2 flex-shrink-0">
          <span
            className="hidden sm:inline-block text-xs font-bold px-3 py-1 rounded-full"
            style={{ background: `${accentColor}20`, color: accentColor }}
          >
            {pricing.tiers.length} plan{pricing.tiers.length !== 1 ? 's' : ''}
            {pricing.oneTimePrices?.length ? ` + ${pricing.oneTimePrices.length} one-time` : ''}
          </span>
          {open
            ? <ChevronUp className="h-5 w-5 opacity-50" />
            : <ChevronDown className="h-5 w-5 opacity-50" />
          }
        </div>
      </button>

      {/* Expandable tier grid */}
      <AnimatePresence>
        {open && (
          <motion.div
            initial={{ height: 0, opacity: 0 }}
            animate={{ height: 'auto', opacity: 1 }}
            exit={{ height: 0, opacity: 0 }}
            transition={{ duration: 0.25 }}
            className="overflow-hidden"
          >
            <div className="px-5 pb-6 border-t border-[var(--product-muted)]">
              {/* Period toggle */}
              {pricing.tiers.some((t: PricingTier) => t.priceYearly > 0) && (
                <div className="flex justify-end pt-4 pb-4">
                  <div className="inline-flex rounded-full p-1 border border-[var(--product-muted)] text-xs font-bold">
                    <button
                      onClick={() => setYearly(false)}
                      className={cn(
                        'px-3 py-1.5 rounded-full transition-all',
                        !yearly ? 'text-white' : 'opacity-50',
                      )}
                      style={!yearly ? { background: accentColor } : undefined}
                    >
                      Monthly
                    </button>
                    <button
                      onClick={() => setYearly(true)}
                      className={cn(
                        'px-3 py-1.5 rounded-full transition-all',
                        yearly ? 'text-white' : 'opacity-50',
                      )}
                      style={yearly ? { background: accentColor } : undefined}
                    >
                      Yearly
                    </button>
                  </div>
                </div>
              )}

              {/* Compact tier cards */}
              {pricing.tiers.length > 0 && (
                <div className={cn(
                  'grid gap-4',
                  pricing.tiers.length === 1 ? 'sm:grid-cols-1 max-w-xs' :
                  pricing.tiers.length === 2 ? 'sm:grid-cols-2' :
                  pricing.tiers.length === 3 ? 'sm:grid-cols-3' :
                  'sm:grid-cols-2 lg:grid-cols-4',
                )}>
                  {pricing.tiers.map((tier : PricingTier) => (
                    <TierCard
                      key={tier.name}
                      tier={tier}
                      productSlug={pricing.productSlug}
                      isYearly={yearly}
                      accentColor={accentColor}
                      compact={true}
                    />
                  ))}
                </div>
              )}

              {pricing.oneTimePrices && pricing.oneTimePrices.length > 0 && (
                <div className="mt-4 grid sm:grid-cols-2 lg:grid-cols-3 gap-3">
                  {pricing.oneTimePrices.map((item: { name: string; price: number; currency: 'NGN' | 'USD'; description: string }) => (
                    <OneTimeCard
                      key={item.name}
                      item={item}
                      productSlug={pricing.productSlug}
                      accentColor={accentColor}
                    />
                  ))}
                </div>
              )}

              <div className="mt-4 text-center">
                <Link
                  href={`https://boldmind.ng/products/${pricing.productSlug}`}
                  className="text-xs font-bold underline underline-offset-4 opacity-60 hover:opacity-100 transition-opacity"
                  style={{ color: accentColor }}
                >
                  View {pricing.productName} details →
                </Link>
              </div>
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </div>
  );
}

// ─── Main export ──────────────────────────────────────────────────────────────

export function PricingContent({
  isHub = false,
  productSlug,
  heading,
  subheading,
  className,
}: PricingContentProps) {
  const { productTheme } = useTheme();
  const [isYearly, setIsYearly] = useState(false);
  const [filter, setFilter] = useState<'all' | 'free' | 'subscription' | 'one-time'>('all');

  const resolvedSlug = productSlug ?? productTheme.slug;
  const scheme = BOLDMIND_COLOR_SCHEMES[resolvedSlug];
  const accentColor = scheme?.primary ?? productTheme.colors.primary;

  // ── Hub mode: all products ──────────────────────────────────────────────────
  const filteredHubPricing = useMemo(() => {
    if (!isHub) return [];
    return BOLDMIND_PRICING.filter(p => {
      if (filter === 'free')         return p.tiers.some(t => t.name === 'free');
      if (filter === 'subscription') return p.tiers.some(t => t.priceMonthly > 0);
      if (filter === 'one-time')     return (p.oneTimePrices?.length ?? 0) > 0;
      return true;
    });
  }, [isHub, filter]);

  // ── Single product mode ─────────────────────────────────────────────────────
  const singlePricing = useMemo(() => {
    if (isHub) return null;
    return getProductPricing(resolvedSlug) ?? null;
  }, [isHub, resolvedSlug]);

  // ── Check for yearly plans ──────────────────────────────────────────────────
  const hasYearlyOption = useMemo(() => {
    if (isHub) return BOLDMIND_PRICING.some(p => p.tiers.some(t => t.priceYearly > 0));
    return singlePricing?.tiers.some(t => t.priceYearly > 0) ?? false;
  }, [isHub, singlePricing]);

  // ── Default copy ────────────────────────────────────────────────────────────
  const resolvedHeading = heading ?? (
    isHub
      ? 'Transparent Pricing for Every Product'
      : `${productTheme.name} Pricing`
  );
  const resolvedSubheading = subheading ?? (
    isHub
      ? 'Every BoldMind product. Every plan. All in one place. Start free on any product.'
      : `Choose the plan that fits your goals. Start free, upgrade anytime.`
  );

  // ── Highlight row ────────────────────────────────────────────────────────────
  const highlightedTier = useMemo(() => {
    if (!singlePricing) return undefined;
    return singlePricing.tiers.find((t: PricingTier) => t.name === 'pro')?.name
      ?? singlePricing.tiers.find((t: PricingTier) => t.name === 'basic')?.name
      ?? singlePricing.tiers[0]?.name;
  }, [singlePricing]);

  return (
    <section className={cn('w-full', className)}>
      {/* ── Hero area ───────────────────────────────────────────────────────── */}
      <div className="relative overflow-hidden py-16 sm:py-24 px-4">
        {/* Background texture */}
        <div
          className="absolute inset-0 opacity-[0.03]"
          style={{
            backgroundImage: `radial-gradient(circle at 25% 50%, ${accentColor} 0%, transparent 60%),
                              radial-gradient(circle at 75% 50%, ${accentColor} 0%, transparent 60%)`,
          }}
        />

        <div className="relative z-10 max-w-3xl mx-auto text-center">
          {/* Eyebrow */}
          <div
            className="inline-flex items-center gap-2 px-4 py-1.5 rounded-full text-xs font-black tracking-widest uppercase mb-6 border"
            style={{
              background: `${accentColor}10`,
              borderColor: `${accentColor}30`,
              color: accentColor,
            }}
          >
            <Sparkles className="h-3 w-3" />
            {isHub ? 'BoldMind Ecosystem Pricing' : `${productTheme.icon} ${productTheme.name}`}
          </div>

          <h1
            className="text-4xl sm:text-5xl md:text-6xl font-black leading-tight mb-6 tracking-tight"
            style={{ color: 'var(--product-primary)' }}
          >
            {resolvedHeading}
          </h1>

          <p
            className="text-lg sm:text-xl leading-relaxed max-w-2xl mx-auto"
            style={{ color: 'var(--product-foreground)', opacity: 0.7 }}
          >
            {resolvedSubheading}
          </p>

          {/* Period toggle */}
          {hasYearlyOption && (
            <div className="mt-8 inline-flex items-center gap-3 p-1.5 rounded-2xl border-2 border-[var(--product-muted)]">
              <button
                onClick={() => setIsYearly(false)}
                className={cn(
                  'px-5 py-2.5 rounded-xl font-bold text-sm transition-all',
                  !isYearly ? 'text-white shadow-md' : 'opacity-50 hover:opacity-70',
                )}
                style={!isYearly ? { background: accentColor } : undefined}
              >
                Monthly
              </button>
              <button
                onClick={() => setIsYearly(true)}
                className={cn(
                  'px-5 py-2.5 rounded-xl font-bold text-sm transition-all flex items-center gap-2',
                  isYearly ? 'text-white shadow-md' : 'opacity-50 hover:opacity-70',
                )}
                style={isYearly ? { background: accentColor } : undefined}
              >
                Yearly
                <span className="text-[10px] font-black px-2 py-0.5 bg-green-500 text-white rounded-full">
                  Save up to 20%
                </span>
              </button>
            </div>
          )}
        </div>
      </div>

      {/* ── Content ─────────────────────────────────────────────────────────── */}
      <div className="max-w-7xl mx-auto px-4 pb-20">

        {/* ── Single product mode ──────────────────────────────────────────── */}
        {!isHub && singlePricing && (
          <div className="max-w-5xl mx-auto">
            <SingleProductPricing pricing={singlePricing} isYearly={isYearly} />

            {/* WhatsApp CTA */}
            <div className="mt-16 text-center p-8 rounded-2xl border-2 border-dashed border-[var(--product-muted)]">
              <p className="font-bold text-lg mb-2" style={{ color: 'var(--product-primary)' }}>
                Need a custom plan or have questions?
              </p>
              <p className="text-sm opacity-60 mb-6" style={{ color: 'var(--product-foreground)' }}>
                Chat with us on WhatsApp — we respond within minutes.
              </p>
              <a
                href="https://wa.me/2349138349271"
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm bg-green-500 hover:bg-green-600 transition-colors"
              >
                <svg className="w-4 h-4" fill="currentColor" viewBox="0 0 24 24">
                  <path d="M17.472 14.382c-.297-.149-1.758-.867-2.03-.967-.273-.099-.471-.148-.67.15-.197.297-.767.966-.94 1.164-.173.199-.347.223-.644.075-.297-.15-1.255-.463-2.39-1.475-.883-.788-1.48-1.761-1.653-2.059-.173-.297-.018-.458.13-.606.134-.133.298-.347.446-.52.149-.174.198-.298.298-.497.099-.198.05-.371-.025-.52-.075-.149-.669-1.612-.916-2.207-.242-.579-.487-.5-.669-.51-.173-.008-.371-.01-.57-.01-.198 0-.52.074-.792.372-.272.297-1.04 1.016-1.04 2.479 0 1.462 1.065 2.875 1.213 3.074.149.198 2.096 3.2 5.077 4.487.709.306 1.262.489 1.694.625.712.227 1.36.195 1.871.118.571-.085 1.758-.719 2.006-1.413.248-.694.248-1.289.173-1.413-.074-.124-.272-.198-.57-.347m-5.421 7.403h-.004a9.87 9.87 0 01-5.031-1.378l-.361-.214-3.741.982.998-3.648-.235-.374a9.86 9.86 0 01-1.51-5.26c.001-5.45 4.436-9.884 9.888-9.884 2.64 0 5.122 1.03 6.988 2.898a9.825 9.825 0 012.893 6.994c-.003 5.45-4.437 9.884-9.885 9.884m8.413-18.297A11.815 11.815 0 0012.05 0C5.495 0 .16 5.335.157 11.892c0 2.096.547 4.142 1.588 5.945L.057 24l6.305-1.654a11.882 11.882 0 005.683 1.448h.005c6.554 0 11.89-5.335 11.893-11.893a11.821 11.821 0 00-3.48-8.413Z"/>
                </svg>
                WhatsApp Us
              </a>
            </div>
          </div>
        )}

        {/* ── Hub mode ─────────────────────────────────────────────────────── */}
        {isHub && (
          <>
            {/* Filter bar */}
            <div className="flex flex-wrap justify-center gap-2 mb-10">
              {(['all', 'free', 'subscription', 'one-time'] as const).map((f) => (
                <button
                  key={f}
                  onClick={() => setFilter(f)}
                  className={cn(
                    'px-4 py-2 rounded-full text-xs font-black uppercase tracking-widest transition-all',
                    filter === f
                      ? 'text-white shadow-md'
                      : 'border-2 border-[var(--product-muted)] opacity-60 hover:opacity-100',
                  )}
                  style={filter === f ? { background: accentColor } : undefined}
                >
                  {f === 'all' ? '🌍 All Products' :
                   f === 'free' ? '🆓 Has Free Tier' :
                   f === 'subscription' ? '📅 Subscription' :
                   '💳 One-Time'}
                </button>
              ))}
            </div>

            {/* Stats bar */}
            <div
              className="grid grid-cols-2 sm:grid-cols-4 gap-4 mb-10 p-6 rounded-2xl border"
              style={{ background: `${accentColor}06`, borderColor: `${accentColor}20` }}
            >
              {[
                { label: 'Total Products', value: BOLDMIND_PRICING.length },
                { label: 'Have Free Tier', value: BOLDMIND_PRICING.filter(p => p.tiers.some(t => t.name === 'free')).length },
                { label: 'Subscription', value: BOLDMIND_PRICING.filter(p => p.tiers.some(t => t.priceMonthly > 0)).length },
                { label: 'One-Time', value: BOLDMIND_PRICING.filter(p => (p.oneTimePrices?.length ?? 0) > 0).length },
              ].map((stat) => (
                <div key={stat.label} className="text-center">
                  <p className="text-3xl font-black" style={{ color: accentColor }}>
                    {stat.value}
                  </p>
                  <p className="text-xs opacity-50" style={{ color: 'var(--product-foreground)' }}>
                    {stat.label}
                  </p>
                </div>
              ))}
            </div>

            {/* Product list */}
            <div className="space-y-3">
              {filteredHubPricing.map((pricing) => (
                <ProductPricingRow key={pricing.productSlug} pricing={pricing} />
              ))}
            </div>

            {/* Bottom CTA */}
            <div
              className="mt-16 text-center p-10 rounded-3xl relative overflow-hidden"
              style={{ background: `linear-gradient(135deg, ${accentColor}15, ${accentColor}08)` }}
            >
              <h2
                className="text-3xl font-black mb-4"
                style={{ color: 'var(--product-primary)' }}
              >
                Start with any product. Free.
              </h2>
              <p
                className="text-lg mb-8 max-w-xl mx-auto"
                style={{ color: 'var(--product-foreground)', opacity: 0.7 }}
              >
                Create one BoldMind account and access the free tier of every product instantly.
              </p>
              <div className="flex flex-col sm:flex-row gap-4 justify-center">
                <Link
                  href="/register"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-white text-base transition-all hover:opacity-90"
                  style={{ background: accentColor }}
                >
                  Create Free Account <ArrowRight className="h-4 w-4" />
                </Link>
                <a
                  href="https://wa.me/2349138349271"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center justify-center gap-2 px-8 py-4 rounded-xl font-bold text-base border-2 transition-all hover:bg-[var(--product-muted)]"
                  style={{
                    borderColor: accentColor,
                    color: accentColor,
                  }}
                >
                  Talk to Sales
                </a>
              </div>
            </div>
          </>
        )}

        {/* ── No pricing data fallback ──────────────────────────────────────── */}
        {!isHub && !singlePricing && (
          <div className="max-w-lg mx-auto text-center py-16">
            <p
              className="text-6xl mb-6"
              role="img"
              aria-label="Coming soon"
            >
              🚀
            </p>
            <h2
              className="text-2xl font-black mb-4"
              style={{ color: 'var(--product-primary)' }}
            >
              Pricing Coming Soon
            </h2>
            <p
              className="text-base mb-8"
              style={{ color: 'var(--product-foreground)', opacity: 0.6 }}
            >
              {productTheme.name} is still in development. Join the waitlist to be the first to know.
            </p>
            <a
              href="https://wa.me/2349138349271"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex items-center gap-2 px-6 py-3 rounded-xl font-bold text-white text-sm bg-green-500 hover:bg-green-600 transition-colors"
            >
              Join Waitlist on WhatsApp
            </a>
          </div>
        )}
      </div>
    </section>
  );
}