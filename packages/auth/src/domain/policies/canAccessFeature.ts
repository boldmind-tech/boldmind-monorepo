// PACKAGES/auth/src/domain/policies/canAccessFeature.ts

import { User } from '../models/User';

export type ProductSlug =
  | 'boldmind-hub'
  | 'amebogist'
  | 'educenter'
  | 'boldmind-os'
  | 'naija-fither'
  | 'emailscraper-pro'
  | 'safe-ai'
  | 'social-factory'
  | 'planai-suite';

export type FeatureTier = 'free' | 'basic' | 'pro' | 'enterprise';

export const PRODUCT_FEATURES: Record<ProductSlug, Record<FeatureTier, string[]>> = {
  'boldmind-hub': {
    free: ['view_products', 'basic_analytics'],
    basic: ['view_products', 'basic_analytics', 'product_management'],
    pro: ['view_products', 'basic_analytics', 'product_management', 'advanced_analytics'],
    enterprise: ['*'],
  },
  'educenter': {
    free: ['view_courses', 'enroll_courses'],
    basic: ['view_courses', 'enroll_courses', 'create_courses'],
    pro: ['view_courses', 'enroll_courses', 'create_courses', 'analytics', 'certificates'],
    enterprise: ['*'],
  },
  'amebogist': {
    free: ['read_news', 'comment'],
    basic: ['read_news', 'comment', 'create_posts'],
    pro: ['read_news', 'comment', 'create_posts', 'trending_alerts', 'analytics'],
    enterprise: ['*'],
  },
  'naija-fither': {
    free: ['view_workouts', 'track_basic'],
    basic: ['view_workouts', 'track_basic', 'custom_workouts'],
    pro: ['view_workouts', 'track_basic', 'custom_workouts', 'nutrition_plans', 'analytics'],
    enterprise: ['*'],
  },
  'emailscraper-pro': {
    free: ['scrape_100_emails'],
    basic: ['scrape_1000_emails', 'basic_validation'],
    pro: ['scrape_10000_emails', 'advanced_validation', 'export_formats'],
    enterprise: ['*'],
  },
  'safe-ai': {
    free: ['report_incident'],
    basic: ['report_incident', 'track_case'],
    pro: ['report_incident', 'track_case', 'analytics', 'priority_support'],
    enterprise: ['*'],
  },
  'social-factory': {
    free: ['create_5_posts'],
    basic: ['create_50_posts', 'schedule_posts'],
    pro: ['create_unlimited_posts', 'schedule_posts', 'analytics', 'multi_account'],
    enterprise: ['*'],
  },
  'planai-suite': {
    free: ['basic_planning'],
    basic: ['basic_planning', 'receptionist', 'credibility_hub'],
    pro: ['basic_planning', 'receptionist', 'credibility_hub', 'business_planning', 'financial_forecasting'],
    enterprise: ['*'],
  },
  'boldmind-os': {
    free: ['basic_workspace'],
    basic: ['basic_workspace', 'file_management'],
    pro: ['basic_workspace', 'file_management', 'collaboration', 'integrations'],
    enterprise: ['*'],
  },
};

export function canAccessFeature(
  user: User | null,
  productSlug: ProductSlug,
  feature: string
): boolean {
  if (!user) {
    return false;
  }

  // Get user's tier for this product from metadata or default to free
  const userProductData = user.metadata?.['products']?.[productSlug];
  const userTier: FeatureTier = userProductData?.tier || 'free';

  const productFeatures = PRODUCT_FEATURES[productSlug];
  const tierFeatures = productFeatures[userTier];

  if (tierFeatures.includes('*')) {
    return true;
  }

  return tierFeatures.includes(feature);
}

export function getUserTier(user: User | null, productSlug: ProductSlug): FeatureTier {
  if (!user) {
    return 'free';
  }

  const userProductData = user.metadata?.['products']?.[productSlug];
  return userProductData?.tier || 'free';
}

export function canAccessProduct(_user: User | null, _productSlug: ProductSlug): boolean {
  return true;
}