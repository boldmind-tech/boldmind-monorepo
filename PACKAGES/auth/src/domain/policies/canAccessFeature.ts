// PACKAGES/auth/src/domain/policies/canAccessFeature.ts

import { User } from '../models/User';
import {
  BOLDMIND_PRODUCTS,
  BOLDMIND_PRICING,
  ProductSlug as UtilsProductSlug
} from '@boldmind/utils';

// Re-export type for local use
export type ProductSlug = UtilsProductSlug;
export type FeatureTier = 'free' | 'basic' | 'pro' | 'enterprise';

/**
 * Maps all products to their tier-specific features.
 * This is derived from the source of truth in BOLDMIND_PRICING.
 */
export const PRODUCT_FEATURES: Record<string, Record<FeatureTier, string[]>> = BOLDMIND_PRICING.reduce((acc, product) => {
  const tierMap: Record<FeatureTier, string[]> = {
    free: [],
    basic: [],
    pro: [],
    enterprise: []
  };

  product.tiers.forEach(tier => {
    tierMap[tier.name as FeatureTier] = tier.features;
  });

  // If enterprise tier is missing, give it wildcard or copy pro
  if (tierMap.enterprise.length === 0) {
    tierMap.enterprise = ['*'];
  }

  acc[product.productSlug] = tierMap;
  return acc;
}, {} as Record<string, Record<FeatureTier, string[]>>);

/**
 * Special handling for products that might not be in the pricing list yet 
 * but are in the products list.
 */
BOLDMIND_PRODUCTS.forEach(product => {
  if (!PRODUCT_FEATURES[product.slug]) {
    PRODUCT_FEATURES[product.slug] = {
      free: [],
      basic: [],
      pro: [],
      enterprise: ['*']
    };
  }
});

export function canAccessFeature(
  user: User | null,
  productSlug: string,
  feature: string
): boolean {
  if (!user) {
    return false;
  }

  // Get user's tier for this product from metadata or default to free
  const userProductData = user.metadata?.['products']?.[productSlug];
  const userTier: FeatureTier = (userProductData?.tier as FeatureTier) || 'free';

  const productFeatures = PRODUCT_FEATURES[productSlug];
  if (!productFeatures) return false;

  const tierFeatures = productFeatures[userTier];
  if (!tierFeatures) return false;

  if (tierFeatures.includes('*')) {
    return true;
  }

  return tierFeatures.includes(feature);
}

export function getUserTier(user: User | null, productSlug: string): FeatureTier {
  if (!user) {
    return 'free';
  }

  const userProductData = user.metadata?.['products']?.[productSlug];
  return (userProductData?.tier as FeatureTier) || 'free';
}

export function canAccessProduct(user: User | null, _productSlug: string): boolean {
  if (!user) return false;
  // Basic logic: if they have any tier data or it's a public product
  // For now, keeping it permissive as requested.
  return true;
}
