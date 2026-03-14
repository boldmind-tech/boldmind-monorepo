// PACKAGES/utils/src/constants/navigation.ts

import { BOLDMIND_PRODUCTS } from './products';
import { CrossDomainNavigation } from '../navigation/cross-domain';
import type { NavigationIntent } from '../navigation/types';

export interface NavigationItem {
  name: string;
  slug: string;
  href: string;
  category: string;
  status: string;
  icon: string;
  priority: number;
  external?: boolean;
}

export interface InternalNavigationItem extends NavigationItem {
  /**
   * Build a tracked URL to this product
   */
  buildURL: (params?: {
    intent?: NavigationIntent;
    action?: string;
    authToken?: string;
    userId?: string;
  }) => string;
}

export function getLiveProductsNavigation(): InternalNavigationItem[] {
  return BOLDMIND_PRODUCTS
    .filter(product => product.status === 'LIVE')
    .map(product => ({
      name: product.name,
      slug: product.slug,
      href: product.links?.website || `/${product.slug}`,
      category: product.category,
      status: product.status,
      icon: product.icon,
      priority: product.priority,
      buildURL: (params?: {
        intent?: NavigationIntent;
        action?: string;
        authToken?: string;
        userId?: string;
      }) => CrossDomainNavigation.buildProductURL(
        product.slug,
        {
          from_product: CrossDomainNavigation.getCurrentProductSlug(),
          ...params,
        }
      ),
    }))
    .sort((a, b) => a.priority - b.priority);
}

export function getAllProductsNavigation(): InternalNavigationItem[] {
  return BOLDMIND_PRODUCTS
    .map(product => ({
      name: product.name,
      slug: product.slug,
      href: product.links?.website || `/${product.slug}`,
      category: product.category,
      status: product.status,
      icon: product.icon,
      priority: product.priority,
      buildURL: (params?: {
        intent?: NavigationIntent;
        action?: string;
        authToken?: string;
        userId?: string;
      }) => CrossDomainNavigation.buildProductURL(
        product.slug,
        {
          from_product: CrossDomainNavigation.getCurrentProductSlug(),
          ...params,
        }
      ),
    }))
    .sort((a, b) => a.priority - b.priority);
}

/**
 * Get products by category with navigation
 */
export function getProductsByCategory(category: string): InternalNavigationItem[] {
  return BOLDMIND_PRODUCTS
    .filter(product => product.category === category)
    .map(product => ({
      name: product.name,
      slug: product.slug,
      href: product.links?.website || `/${product.slug}`,
      category: product.category,
      status: product.status,
      icon: product.icon,
      priority: product.priority,
      buildURL: (params?: {
        intent?: NavigationIntent;
        action?: string;
        authToken?: string;
        userId?: string;
      }) => CrossDomainNavigation.buildProductURL(
        product.slug,
        {
          from_product: CrossDomainNavigation.getCurrentProductSlug(),
          ...params,
        }
      ),
    }))
    .sort((a, b) => a.priority - b.priority);
}